/**
 * Conversion tracking.
 *
 * Pushes a dataLayer event so Google Tag Manager, GA4 or a Google Ads conversion
 * can fire on a real lead. Deliberately dependency-free and fail-safe: if no tag
 * container is present the push is a no-op, so nothing breaks before analytics is
 * configured.
 *
 * Wire-up on the Google side:
 *  - GA4: create custom events named `quote` and `contact`, and mark each a
 *    conversion. Two separate events rather than one `generate_lead`, so quote
 *    requests and general enquiries can be valued and optimised separately —
 *    they are not worth the same to the business.
 *  - Google Ads: import both GA4 conversions, or add GTM triggers on the two
 *    event names.
 *  - The payload carries `source` (which page produced the lead), `reference`
 *    (PV-Q-YYYYMMDD-XXXX or PV-C-..., matching the customer's confirmation
 *    email exactly — see lib/reference.ts), `delivery`
 *    ("webhook" or "mail_fallback") so you can tell from analytics whether
 *    delivery is working or quietly falling back, and `form`.
 */

type DataLayerEvent = Record<string, unknown> & { event: string };

declare global {
  interface Window {
    dataLayer?: DataLayerEvent[];
  }
}

export function trackEvent(event: string, payload: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...payload });
  } catch {
    // Analytics must never break a form submission.
  }
}

/** Fired when a quote request is successfully handed off. */
export function trackQuoteSubmitted(args: {
  source: string;
  reference: string;
  delivery: "webhook" | "mail_fallback";
}): void {
  trackEvent("quote", { ...args, form: "quote" });
}

/** Fired when a contact enquiry is successfully handed off. */
export function trackContactSubmitted(args: {
  source: string;
  reference: string;
  delivery: "webhook" | "mail_fallback";
}): void {
  trackEvent("contact", { ...args, form: "contact" });
}

/**
 * Marks a submission reference as already counted, so the thank-you page does
 * not fire the same conversion a second time.
 *
 * Used by the mail-fallback paths, which push the event from the form because
 * they do not navigate immediately. The webhook paths do not call this — they
 * let the thank-you page own the event, because window.location.assign()
 * unloads the document and would abort an in-flight beacon.
 */
export function markConversionTracked(reference: string): void {
  try {
    window.sessionStorage.setItem(`pv_conv:${reference}`, "1");
  } catch {
    // Storage unavailable. Worst case the thank-you page fires a duplicate,
    // which is preferable to losing the conversion entirely.
  }
}
