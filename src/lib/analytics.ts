/**
 * Conversion tracking.
 *
 * Pushes a dataLayer event so Google Tag Manager, GA4 or a Google Ads conversion
 * can fire on a real lead. Deliberately dependency-free and fail-safe: if no tag
 * container is present the push is a no-op, so nothing breaks before analytics is
 * configured.
 *
 * Wire-up on the Google side:
 *  - GA4: create a custom event named `generate_lead` and mark it a conversion.
 *  - Google Ads: import that GA4 conversion, or add a GTM trigger on the same
 *    event name.
 *  - The payload carries `source` (which page produced the lead), `reference`
 *    (PV-YYYYMMDD-XXXX, matching the customer's confirmation) and `delivery`
 *    ("webhook" or "mail_fallback") so you can see whether the endpoint is
 *    actually receiving submissions.
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
  locale: "en" | "fr";
}): void {
  trackEvent("generate_lead", { ...args, form: "quote" });
}

/** Fired when a contact enquiry is successfully handed off. */
export function trackContactSubmitted(args: {
  source: string;
  reference: string;
  delivery: "webhook" | "mail_fallback";
}): void {
  trackEvent("generate_lead", { ...args, form: "contact" });
}
