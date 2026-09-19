# Analytics

GA4 is loaded **through GTM**, via a **Google tag** (`GT-`/`G-`) configured
inside container `GTM-KGJFZGS` — not a direct `gtag` snippet on the page, and
not the older "GA4 Configuration" tag type. The container is mounted in
`src/app/layout.tsx` (`beforeInteractive` loader plus the `<noscript>` iframe as
the first element in `<body>`).

Container ID comes from `NEXT_PUBLIC_GTM_ID`, falling back to `GTM-KGJFZGS`.

**Confirmed prestivac.com pairing:**

| | |
|---|---|
| GTM container | `GTM-KGJFZGS` |
| GA4 measurement ID | `G-H2642EBS2B` |

PrestiVac runs two properties. The `.ca` domain has its own container and its
own GA4 stream; pointing one at the other silently merges both sites into a
single property, and the damage is retroactive in reporting. When cloning for
`.ca`, set `NEXT_PUBLIC_GTM_ID` in Coolify rather than editing the fallback in
`layout.tsx`.

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

## Form redirects are full document loads

Both forms navigate with `window.location.assign()`, not `router.push()`. The
thank-you pages are therefore genuine document loads, and GTM's **Page View**
trigger sees them — which is what the Page URL-based conversion setup needs.

**The conversion event fires from the thank-you page, not the form.**
`assign()` unloads the document immediately, and a dataLayer push made
microseconds earlier is only a queued instruction: GTM's network request to GA4
is asynchronous and can be aborted by the unload. Firing on the new document
removes the race entirely.

Context travels in the URL so nothing is lost:

```
/thank-you/quote?ref=PV-Q-20260919-K3F9&source=/get-a-quote&delivery=webhook
```

**Refresh safety.** The thank-you page writes `pv_conv:<reference>` to
sessionStorage and will not fire twice for the same reference. This matters more
now than it did: with a Page URL trigger, a visitor refreshing the thank-you
page would otherwise count a second conversion for the same lead. The
mail-fallback path writes the same key from the form, so the two cannot
double-fire either.

**This does not replace `spa_pageview`.** Only the form redirects became full
loads. Every other navigation on the site is still client-side, so the
route-change tracker is still required for the other 285 pages.

### Conversion trigger options

Either works now that the thank-you page is a real load:

| Approach | Trigger | Note |
|---|---|---|
| Page URL | Page View, Page Path contains `/thank-you/` | What you use today. Simple, and now reliable. |
| dataLayer event | Custom Event, `quote` or `contact` | Carries `reference`, `source` and `delivery`, so you can see whether webhook delivery is working. |

Do not enable both for the same conversion, or every lead counts twice.

---

## Still not working? Find out which half is missing, in 30 seconds

This fix has two halves and **both** are required. The code pushes an event;
the container has to consume it. If thank-you pageviews are still missing,
this tells you which half to look at.

Submit a form on the **live site**, land on the thank-you page, then open
DevTools → Console and run:

```js
dataLayer.filter(e => e.event === 'spa_pageview')
```

**Empty array** → the code half is not live. Either the deploy has not gone
out, or `NEXT_PUBLIC_GTM_ID` is unset *and* the fallback was removed, which
gates the component. Check the deployed bundle contains it:

```js
// should print the pageview fields
dataLayer.filter(e => e.event === 'spa_pageview')[0]
```

**One object with the right `page_title`** → the code half is working. The
missing piece is container-side: the trigger and GA4 Event tag below have not
been created, so the event fires into the dataLayer and nothing consumes it.

### Why GTM Preview can mislead you here

GTM natively pushes `gtm.historyChange` on every SPA navigation, so **GTM
Preview will show a History Change event whether or not this fix is deployed**.
Seeing activity in the left panel does not mean pageviews are being recorded.
What matters is whether a GA4 tag appears under *Tags Fired* — and before the
container work below, it will not.

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

**Leave the existing Google tag alone.** Its default behaviour — sending a
`page_view` when it loads — is what covers the entry page, and is exactly why
the component skips its first run. Do not switch that off, or you will lose the
landing pageview instead of gaining the rest.

Then add a **new, separate** tag:

- **Tag Type:** Google Analytics → **Google Analytics: GA4 Event**
- **Measurement ID:** `G-H2642EBS2B` — the prestivac.com stream. In newer GTM
  this field may offer *"Inherit from Google tag"*, which is fine and is the
  safer choice, because it cannot drift from the Google tag if that is ever
  repointed. If you type it manually, check it is not the `.ca` stream.
- **Event Name:** `page_view` — typed literally, not selected from a dropdown
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
