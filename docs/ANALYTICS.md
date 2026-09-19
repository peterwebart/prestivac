# Analytics

GA4 is loaded **through GTM**, not via a direct `gtag` snippet. The container is
mounted in `src/app/layout.tsx` (`beforeInteractive` loader plus the `<noscript>`
iframe as the first element in `<body>`).

Container ID comes from `NEXT_PUBLIC_GTM_ID`, falling back to `GTM-KGJFZGS`.

> **Confirm the container ID belongs to this property.** `GTM-KGJFZGS` is
> hardcoded as the fallback and cannot be verified from the codebase. PrestiVac
> runs two properties, and pointing prestivac.com at the .ca container would
> silently merge both sites' traffic into one GA4 property. Check in the GTM UI
> that this container is the one linked to the prestivac.com GA4 stream, and if
> it is not, set `NEXT_PUBLIC_GTM_ID` in Coolify rather than editing the
> fallback.

---

## What was broken, and what was not

Next.js App Router navigations are History API pushes, not document loads. GTM
fires its container-load pageview once and never again, so **every client-side
navigation was invisible to GA4** — including the `router.push` to
`/thank-you/quote` and `/thank-you/contact` after a form submit.

**The conversion events were never affected.** `quote` and `contact` are pushed
to the dataLayer *before* the `router.push`, synchronously in the same tick, on
both the webhook path and the mail-fallback path. If those events were
configured in GTM, they have been recording correctly throughout. Only the
pageview was missing — so the thank-you pages show no traffic, but the
conversions behind them are intact.

---

## The fix

`src/components/analytics/route-change-tracker.tsx`, mounted in the root layout.
It renders nothing and pushes one `spa_pageview` event per client-side
navigation.

Four design points, each load-bearing:

**It skips the first run.** GTM already counted the entry page on container
load. Firing on mount would double-count every session's landing page.

**It reads `document.title` after metadata applies, not on route change.**
`usePathname()` updates when the URL changes, which is *before* React commits
the new segment's metadata. Reading the title at that moment returns the page
the visitor just left, so every pageview would be mislabelled — worse than no
tracking, because the data looks plausible.

Instead of guessing a fixed delay, a `MutationObserver` on `<title>` fires as
soon as the title actually changes, bounded by `TITLE_SETTLE_TIMEOUT_MS`
(currently **400 ms**) so a navigation between two pages sharing a title still
fires. Whichever happens first wins; the push happens exactly once.

*To tune:* raise the timeout if you see stale titles on slow routes, lower it if
pageviews arrive late. The observer means the timeout is a backstop, not the
normal path, so in practice it rarely matters.

**It does not opt the app out of static rendering.** `useSearchParams()` would
force dynamic rendering or a Suspense boundary on every page. The query string
is read from `window.location` at push time instead, which is equivalent because
the push happens after navigation completes. Verified: **307/307 static pages
before and after, zero dynamic route markers.**

**It pushes explicit page fields** rather than leaving the tag to read the DOM.

```js
{
  event: "spa_pageview",
  page_path:     "/thank-you/quote?ref=PV-Q-20260823-0001",
  page_location: "https://prestivac.com/thank-you/quote?ref=PV-Q-20260823-0001",
  page_title:    "Thank you | PrestiVac",
  page_referrer: "https://prestivac.com/get-a-quote"
}
```

---

## GTM container configuration

The code alone does not fix this. Without the container work below, the event
reaches the dataLayer and nothing consumes it.

### 1. Data Layer Variables

Create four, **Variable Type: Data Layer Variable**, Version 2:

| Variable name | Data Layer Variable Name |
|---|---|
| `DLV - page_path` | `page_path` |
| `DLV - page_location` | `page_location` |
| `DLV - page_title` | `page_title` |
| `DLV - page_referrer` | `page_referrer` |

> **Do not use GTM's built-in `{{Page Path}}`, `{{Page URL}}` or `{{Page Title}}`
> variables here.** They read the DOM and `location` at tag-fire time rather
> than carrying the value computed at the known-good moment. `{{Page Title}}`
> reintroduces the stale-title risk directly. `{{Referrer}}` is worse: it
> returns the *external* referrer for the whole session, so every in-app
> navigation would report the original entry referrer instead of the page the
> visitor actually came from.

### 2. Trigger

**Trigger Type:** Custom Event
**Event name:** `spa_pageview`
**This trigger fires on:** All Custom Events

Name it `CE - spa_pageview`.

Do **not** use the built-in *History Change* trigger. It fires on the URL
change, before metadata has applied — which is the exact timing problem the
component exists to avoid.

### 3. GA4 tag

Leave the existing **Google Tag / GA4 Configuration** tag as it is, with
"Send a page view event when this configuration loads" **ON**. That covers the
entry page, which is why the component skips its first run.

Then add a new tag:

- **Tag Type:** Google Analytics: GA4 Event
- **Configuration:** your existing Google Tag / GA4 Config
- **Event Name:** `page_view`
- **Trigger:** `CE - spa_pageview`
- **Event Parameters:**

| Parameter | Value |
|---|---|
| `page_location` | `{{DLV - page_location}}` |
| `page_title` | `{{DLV - page_title}}` |
| `page_referrer` | `{{DLV - page_referrer}}` |
| `page_path` | `{{DLV - page_path}}` |

`page_location`, `page_title` and `page_referrer` are GA4 reserved parameters,
so supplying them overrides what GA4 would otherwise infer. `page_path` is
derived by GA4 from `page_location`; sending it explicitly is harmless and
useful if you build custom reports on it.

### 4. Conversion tags — leave alone

`quote` and `contact` fire on their own Custom Event triggers and are unaffected
by any of this. Do not retrigger them from `spa_pageview`, or every thank-you
pageview becomes a duplicate conversion.

---

## Verifying in GTM Preview

Connect Preview to the site, then submit a quote form.

**Expected event sequence in the left-hand panel:**

1. `Container Loaded` / `gtm.js` — on the initial document load
2. `DOM Ready`, `Window Loaded`
3. *(GA4 config pageview fires here — the entry page)*
4. `quote` — pushed at submit, **before** navigation
5. `spa_pageview` — after the router push and after the title settles

If `spa_pageview` appears **before** `quote`, something has changed the order in
the form — the event must be pushed before `router.push`.

**Checking `page_title` is correct, not stale.**

Click the `spa_pageview` event, open the **Data Layer** tab, and read
`page_title`:

- **Correct:** starts with the destination page — `"Thank you | PrestiVac"`
- **Stale:** shows the page you submitted *from* — `"Get a Quote | PrestiVac"`

A stale title means the push is firing before metadata applies. Raise
`TITLE_SETTLE_TIMEOUT_MS` in the component.

Also confirm on that event:

- `page_location` is the **new** URL including `?ref=PV-Q-…`
- `page_referrer` is the page submitted from (`/get-a-quote`), **not** an
  external referrer or an empty string

**Then check the tag fired.** In the same event, the **Tags** tab should show
your GA4 Event tag under *Tags Fired*. If it is under *Tags Not Fired*, the
trigger is not matching — check the event name is exactly `spa_pageview`.

**Finally, confirm no double-count on entry.** Load the site fresh and navigate
once. You should see exactly one GA4 pageview for the landing page (from the
config tag) and one for the second page (from `spa_pageview`). Two pageviews for
the landing page means the first-run skip is not working.

In GA4 itself, use **Realtime → Event count by Event name** and watch
`page_view` increment on client-side navigation. Note that DebugView and
Realtime lag by a few seconds.
