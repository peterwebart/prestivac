"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/analytics";

/**
 * Route-change pageview tracking for GTM.
 *
 * THE PROBLEM
 *
 * Next.js App Router navigations are History API pushes, not document loads.
 * GTM fires its container-load pageview once, on the first document load, and
 * never again. So every client-side navigation — including the router.push to
 * /thank-you/quote after a form submit — is invisible to GA4.
 *
 * Note what is NOT broken: the `quote` and `contact` conversion events are
 * pushed to the dataLayer BEFORE the router.push, synchronously in the same
 * tick, on both the webhook and mail-fallback paths. Those have been recording
 * correctly. Only the pageview was missing.
 *
 * FOUR THINGS THIS HAS TO GET RIGHT
 *
 * 1. SKIP THE FIRST RUN.
 *    GTM already sent a pageview for the entry page on container load. Firing
 *    on mount as well would double-count every single session's landing page.
 *    `isFirstRun` guards this.
 *
 * 2. READ THE TITLE AFTER METADATA APPLIES, NOT ON ROUTE CHANGE.
 *    usePathname() updates as soon as the URL changes, which is BEFORE React
 *    has committed the new segment's metadata. Reading document.title at that
 *    moment returns the title of the page the visitor just left, so every
 *    pageview would be labelled with the previous page. That is worse than no
 *    tracking, because the data looks plausible.
 *
 *    Rather than guess a fixed delay, this waits for the title to actually
 *    change: a MutationObserver on <title>, bounded by TITLE_SETTLE_TIMEOUT_MS
 *    so a navigation between two pages that happen to share a title still
 *    fires. Whichever happens first wins, and the push happens exactly once.
 *
 *    To tune: raise TITLE_SETTLE_TIMEOUT_MS if you see pageviews with a stale
 *    title on slow routes. Lower it if pageviews arrive late. The observer
 *    means the timeout is a backstop, not the normal path, so it rarely
 *    matters.
 *
 * 3. DO NOT OPT THE APP OUT OF STATIC RENDERING.
 *    useSearchParams() would force every page wrapping this component into
 *    dynamic rendering or require a Suspense boundary — which would turn 285
 *    static pages into server-rendered ones for the sake of a query string.
 *    usePathname() does not have that effect, and the query string is read
 *    from window.location at push time instead, which is equivalent here
 *    because the push happens after navigation has completed.
 *
 * 4. PUSH EXPLICIT PAGE FIELDS.
 *    page_path, page_location, page_title and page_referrer go into the
 *    dataLayer as values. The GA4 tag must read them as Data Layer Variables.
 *    GTM's built-in Page variables read the DOM at tag-fire time and would
 *    reintroduce exactly the stale-title problem this component exists to
 *    solve. See docs/ANALYTICS.md for the container configuration.
 */

/** Backstop for when the title does not change between two routes. */
const TITLE_SETTLE_TIMEOUT_MS = 400;

type PageviewPayload = {
  page_path: string;
  page_location: string;
  page_title: string;
  page_referrer: string;
};

/**
 * Pushed through the existing trackEvent helper rather than touching
 * window.dataLayer directly. That keeps one declaration of the dataLayer type
 * (in lib/analytics.ts) and one try/catch policy — analytics must never break
 * navigation or a form submission.
 */
function push(payload: PageviewPayload): void {
  trackEvent("spa_pageview", payload);
}

export function RouteChangeTracker() {
  const pathname = usePathname();

  /** GTM already counted the entry page. */
  const isFirstRun = useRef(true);
  /** Full URL of the page being left, for page_referrer. */
  const previousUrl = useRef<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isFirstRun.current) {
      isFirstRun.current = false;
      previousUrl.current = window.location.href;
      return;
    }

    const titleBefore = document.title;
    const referrer = previousUrl.current;
    let done = false;

    const fire = () => {
      if (done) return;
      done = true;
      observer.disconnect();
      window.clearTimeout(timeout);

      // Read location here, after navigation has completed, so the query
      // string is current without useSearchParams forcing dynamic rendering.
      const { pathname: path, search, href } = window.location;

      push({
        page_path: path + search,
        page_location: href,
        page_title: document.title,
        page_referrer: referrer,
      });

      previousUrl.current = href;
    };

    // Normal path: fire as soon as the new route's metadata lands.
    const titleEl = document.querySelector("title");
    const observer = new MutationObserver(() => {
      if (document.title !== titleBefore) fire();
    });
    if (titleEl) {
      observer.observe(titleEl, { childList: true, characterData: true, subtree: true });
    }

    // Backstop: two routes sharing a title, or metadata that never mutates.
    const timeout = window.setTimeout(fire, TITLE_SETTLE_TIMEOUT_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
