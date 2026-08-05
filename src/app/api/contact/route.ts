import { NextResponse } from "next/server";

import { resendConfigured, sendAcknowledgement, sendNotification } from "@/lib/email";

/**
 * Contact enquiry endpoint.
 *
 * Mirrors the quote route deliberately, so both forms behave identically and there
 * is one delivery model to reason about rather than two.
 *
 * Two delivery paths, in priority order:
 *   1. CONTACT_WEBHOOK_URL — any HTTPS endpoint (CRM intake, Zapier, Make, n8n)
 *      forwarding to prestivac@gmail.com. Preferred, because it is trackable.
 *      If CONTACT_WEBHOOK_URL is unset, QUOTE_WEBHOOK_URL is used instead, so
 *      configuring ONE endpoint makes both forms deliver. The payload carries
 *      `form: "contact"` so a single endpoint can still route by type.
 *   2. Mail fallback — if neither is set the form composes a pre-filled message
 *      containing every field and the reference number, so no enquiry is dropped.
 *
 * With nothing configured this returns 503 with `configured: false` and the form
 * falls back to the mail draft. That is deliberate: a form that appears to submit
 * and discards the enquiry is worse than no form at all.
 */

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
  reference: string;
  source?: string;
};

const REQUIRED: (keyof ContactPayload)[] = ["name", "email", "message", "reference"];

const LABELS: Record<string, string> = {"name": "Name", "email": "Email", "company": "Company", "phone": "Phone", "subject": "Subject", "message": "Message", "source": "Submitted from"};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const missing = REQUIRED.filter((k) => !payload?.[k]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required field(s): ${missing.join(", ")}.` },
      { status: 400 },
    );
  }

  // Delivery path 1 — Resend. Preferred: it sends real email, needs no third-party
  // automation, and lets us acknowledge to the customer as well.
  if (resendConfigured()) {
    const { reference, name, email, ...rest } = payload;
    const result = await sendNotification({
      kind: "Contact enquiry",
      reference,
      fields: { name, email, ...rest },
      labels: LABELS,
      replyTo: email,
    });

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, configured: true, error: result.message },
        { status: 502 },
      );
    }

    // Best effort — the enquiry has already been delivered, so a failed
    // acknowledgement must not fail the submission.
    if (email) {
      const ack = await sendAcknowledgement({ to: email, name, reference, kind: "Contact enquiry" });
      if (!ack.ok) console.warn("Acknowledgement email failed:", ack.message);
    }

    return NextResponse.json({ ok: true, reference });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL || process.env.QUOTE_WEBHOOK_URL;

  if (!webhook) {
    return NextResponse.json(
      {
        ok: false,
        configured: false,
        error:
          "Webhook delivery is not configured; the form falls back to emailing prestivac@gmail.com. Set CONTACT_WEBHOOK_URL (or QUOTE_WEBHOOK_URL) to enable tracked delivery.",
      },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form: "contact",
        submittedAt: new Date().toISOString(),
        ...payload,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, configured: true, error: `Delivery endpoint returned ${response.status}.` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, reference: payload.reference });
  } catch {
    return NextResponse.json(
      { ok: false, configured: true, error: "Could not reach the delivery endpoint." },
      { status: 502 },
    );
  }
}
