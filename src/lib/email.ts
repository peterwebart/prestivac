import { site } from "@/lib/site";

/**
 * Resend delivery.
 *
 * Resend is an HTTP API, not a plain webhook: it needs a bearer token and its own
 * body shape, so it cannot be driven through QUOTE_WEBHOOK_URL. This module wraps
 * it so both form routes share one implementation.
 *
 * Environment:
 *   RESEND_API_KEY   required to enable Resend. Starts "re_".
 *   RESEND_FROM      optional. Must be an address on a domain VERIFIED in Resend.
 *                    Defaults to "PrestiVac Website <noreply@prestivac.com>".
 *                    If your domain is not yet verified, use
 *                    "onboarding@resend.dev" while testing.
 *   RESEND_TO        optional. Where enquiries are delivered.
 *                    Defaults to site.formsEmail (prestivac@gmail.com).
 *                    Comma-separate for several recipients.
 *
 * Anything unverified in Resend will be rejected by their API with a 4xx, which
 * this surfaces rather than swallowing — a form that reports success while the
 * email bounced is the failure mode worth avoiding.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export function resendConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

function fromAddress(): string {
  return process.env.RESEND_FROM || `PrestiVac Website <noreply@${site.domain ?? "prestivac.com"}>`;
}

function toAddresses(): string[] {
  const raw = process.env.RESEND_TO || site.formsEmail;
  return raw.split(",").map((s) => s.trim()).filter(Boolean);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Renders the submitted fields as a readable table, skipping empties. */
function fieldsTable(fields: Record<string, unknown>, labels: Record<string, string>): string {
  const rows = Object.entries(fields)
    .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
    .map(([k, v]) => {
      const label = labels[k] ?? k;
      const value = escapeHtml(String(v)).replace(/\n/g, "<br>");
      return `<tr>
        <td style="padding:6px 14px 6px 0;vertical-align:top;color:#6b7280;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td>
        <td style="padding:6px 0;vertical-align:top;color:#111827;font-size:14px;">${value}</td>
      </tr>`;
    })
    .join("");
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">${rows}</table>`;
}

export type SendArgs = {
  /** Which form produced this — used in the subject line. */
  kind: "Quote request" | "Contact enquiry";
  reference: string;
  /** Field values, in the order they should appear. */
  fields: Record<string, unknown>;
  /** Human labels for those field keys. */
  labels: Record<string, string>;
  /** Customer address, for the optional acknowledgement. */
  replyTo?: string;
};

export type SendResult =
  | { ok: true }
  | { ok: false; status: number; message: string };

async function post(body: Record<string, unknown>): Promise<SendResult> {
  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Surface Resend's own message — it names the actual problem, usually an
      // unverified sending domain.
      let message = `Resend returned ${response.status}.`;
      try {
        const data = (await response.json()) as { message?: string; name?: string };
        if (data?.message) message = data.message;
      } catch {
        /* keep the status-only message */
      }
      return { ok: false, status: response.status, message };
    }

    return { ok: true };
  } catch {
    return { ok: false, status: 502, message: "Could not reach Resend." };
  }
}

/** Notifies PrestiVac of a new submission. */
export async function sendNotification(args: SendArgs): Promise<SendResult> {
  const { kind, reference, fields, labels, replyTo } = args;

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:640px;">
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;">${escapeHtml(kind)}</p>
    <p style="margin:0 0 18px;font-size:20px;font-weight:700;color:#111827;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${escapeHtml(reference)}</p>
    ${fieldsTable(fields, labels)}
    <p style="margin:22px 0 0;font-size:12px;color:#9ca3af;">Submitted from the PrestiVac website.</p>
  </div>`;

  const text = [
    `${kind} — ${reference}`,
    "",
    ...Object.entries(fields)
      .filter(([, v]) => v !== undefined && v !== null && String(v).trim() !== "")
      .map(([k, v]) => `${labels[k] ?? k}: ${String(v)}`),
  ].join("\n");

  return post({
    from: fromAddress(),
    to: toAddresses(),
    subject: `${kind} — ${reference}`,
    html,
    text,
    ...(replyTo ? { reply_to: replyTo } : {}),
  });
}

/**
 * Acknowledges the submission to the customer, so they hold their reference in
 * writing rather than only on the confirmation page they are about to navigate
 * away from.
 *
 * Best-effort: a failure here is logged by the caller but does NOT fail the
 * submission, because the enquiry has already reached PrestiVac at this point.
 */
export async function sendAcknowledgement(args: {
  to: string;
  name: string;
  reference: string;
  kind: "Quote request" | "Contact enquiry";
}): Promise<SendResult> {
  const { to, name, reference, kind } = args;
  const what = kind === "Quote request" ? "quote request" : "enquiry";

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;">
    <p style="margin:0 0 16px;font-size:15px;color:#111827;">Hello ${escapeHtml(name)},</p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#374151;">
      Thank you for your ${what}. We have received it and a member of our technical
      team will reply shortly.
    </p>
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;">Your reference number</p>
    <p style="margin:0 0 18px;font-size:20px;font-weight:700;color:#111827;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">${escapeHtml(reference)}</p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.6;color:#374151;">
      Please quote this reference if you contact us about it &mdash; it is the fastest
      way for us to find your ${what}.
    </p>
    <p style="margin:0;font-size:14px;line-height:1.6;color:#374151;">
      ${escapeHtml(site.legalName)}<br>
      <a href="tel:${escapeHtml(site.phone.replace(/[^\d+]/g, ""))}" style="color:#374151;">${escapeHtml(site.phone)}</a><br>
      <a href="mailto:${escapeHtml(site.email)}" style="color:#374151;">${escapeHtml(site.email)}</a>
    </p>
  </div>`;

  const text = [
    `Hello ${name},`,
    "",
    `Thank you for your ${what}. We have received it and a member of our technical team will reply shortly.`,
    "",
    `Your reference number: ${reference}`,
    "",
    `Please quote this reference if you contact us about it.`,
    "",
    site.legalName,
    site.phone,
    site.email,
  ].join("\n");

  return post({
    from: fromAddress(),
    to: [to],
    subject: `We received your ${what} — ${reference}`,
    html,
    text,
    reply_to: site.email,
  });
}
