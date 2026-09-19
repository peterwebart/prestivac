"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics";

/**
 * Fires the conversion event from the thank-you page, on a real document load.
 *
 * WHY IT MOVED HERE
 *
 * The forms now navigate with window.location.assign() so the thank-you page is
 * a genuine document load and GTM's Page View trigger can see it. That has a
 * consequence: assign() unloads the document immediately, and a dataLayer push
 * made microseconds earlier is only a queued instruction — GTM's actual network
 * request to GA4 is asynchronous and can be aborted mid-flight by the unload.
 *
 * Under the previous router.push() there was no unload, so the request always
 * completed. Switching to a full load without moving this would have traded a
 * working conversion for a working pageview.
 *
 * Firing here instead means the event is pushed on a fresh document that is not
 * going anywhere, so it always completes.
 *
 * DEDUPLICATION
 *
 * Two different things could fire the same conversion:
 *   - this component, on landing
 *   - the form, on the mail-fallback path, which pushes immediately because it
 *     does not navigate straight away
 *
 * Both write `pv_conv:<reference>` to sessionStorage, and neither fires if the
 * key is already set. That also makes a browser refresh of the thank-you page
 * safe: a reload would otherwise count a second conversion for the same lead,
 * which is the classic way URL-triggered conversions get inflated.
 *
 * sessionStorage rather than localStorage so the guard lasts the session and
 * does not permanently suppress a genuine repeat enquiry from the same visitor.
 */
export function ConversionTracker({
  event,
  reference,
  source,
  delivery,
}: {
  /** "quote" or "contact" — unchanged from the original event names. */
  event: string;
  reference?: string;
  source?: string;
  delivery?: string;
}) {
  useEffect(() => {
    if (!reference) return;

    const key = `pv_conv:${reference}`;
    try {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, "1");
    } catch {
      // Private mode or storage disabled. Fire anyway — an occasional duplicate
      // is a better failure than a silently missing conversion.
    }

    trackEvent(event, {
      reference,
      source: source ?? "unknown",
      delivery: delivery ?? "webhook",
      form: event,
    });
  }, [event, reference, source, delivery]);

  return null;
}
