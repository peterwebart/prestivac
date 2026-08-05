# Setting up Resend

Resend is the recommended way to deliver form submissions. It sends real email
directly, needs no third-party automation, and lets the site acknowledge the
submission to the customer as well as notify you.

Both forms use it: `/get-a-quote` and `/contact`.

---

## 1. Create the account and get a key

1. Sign up at **resend.com**.
2. Go to **API Keys → Create API Key**.
3. Name it something like `prestivac-website`, permission **Sending access**.
4. Copy the key — it starts `re_` and is shown **once**.

## 2. Verify your sending domain

This is the step people skip, and it is why sending fails with a 403.

1. In Resend go to **Domains → Add Domain** and enter `prestivac.com`.
2. Resend shows DNS records to add — typically a DKIM `TXT` record and an SPF
   entry, sometimes a `MX` for the return path.
3. Add them wherever `prestivac.com` DNS is managed.
4. Wait for Resend to show **Verified**. Usually minutes, occasionally a few hours.

**Before the domain is verified**, you can still test using Resend's shared sender:

    RESEND_FROM=onboarding@resend.dev

That works immediately but only delivers to the email address that owns the Resend
account. Switch to your own domain for real traffic.

## 3. Set the environment variables in Coolify

**Coolify → your application → Environment Variables**, then redeploy.

| Variable | Required | Value |
|---|---|---|
| `RESEND_API_KEY` | **yes** | the `re_...` key from step 1 |
| `RESEND_FROM` | no | `PrestiVac Website <noreply@prestivac.com>` — must be on the verified domain. Defaults to `noreply@prestivac.com` |
| `RESEND_TO` | no | where enquiries go. Defaults to `prestivac@gmail.com`. Comma-separate for several recipients |

Setting `RESEND_API_KEY` alone is enough — the other two have sensible defaults.

Do not commit these. `.env.example` documents the names only.

## 4. Test it

Submit a real enquiry from `/get-a-quote`, or call the endpoint directly:

```bash
curl -s -w "\n[%{http_code}]\n" -X POST https://YOUR-DOMAIN/api/quote \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","company":"Test Co","email":"you@yourdomain.com","reference":"PV-Q-20260805-TEST"}'
```

| Response | Meaning |
|---|---|
| `200 {"ok":true}` | Working. Check both inboxes — yours and the address you used |
| `502 "Resend returned 403"` | Key is wrong, or the sending domain is not verified |
| `502 "Resend returned 422"` | The `RESEND_FROM` address is not on a verified domain |
| `503 configured:false` | `RESEND_API_KEY` is not reaching the app — check Coolify and redeploy |

Same call against `/api/contact` with `{"name","email","message","reference"}`.

---

## What gets sent

**Two emails per submission.**

**1. Notification to you** — subject `Quote request — PV-Q-20260805-K3F9`, containing
every submitted field as a labelled table, with `reply_to` set to the customer's
address so hitting Reply goes straight to them.

**2. Acknowledgement to the customer** — confirms receipt and gives them their
reference number in writing.

That second email matters more than it looks. Without it the customer only ever sees
their reference on a confirmation page they are about to navigate away from. In
writing, they can quote it when they follow up.

The acknowledgement is **best effort**: if it fails, the submission still succeeds,
because the enquiry has already reached you. A failure is logged rather than shown
to the visitor.

---

## Delivery precedence

The routes try three things in order:

1. **Resend** — if `RESEND_API_KEY` is set
2. **Webhook** — if `QUOTE_WEBHOOK_URL` / `CONTACT_WEBHOOK_URL` is set (see
   `WEBHOOKS.md`)
3. **Mail fallback** — the form opens a pre-filled message to `prestivac@gmail.com`
   containing every field and the reference

You do not need both Resend and a webhook. Resend alone is the simplest complete
setup. Keep the webhook option if you later want submissions pushed into a CRM as
well.

**Errors are surfaced, not swallowed.** If Resend rejects a send, the route returns
`502` with Resend's own message and the form falls back to the mail draft. A form
that reports success while the email bounced is the failure mode worth avoiding.

---

## Conversion tracking

Both forms push a `quote` / `contact` event to `window.dataLayer` on every successful
submission, on **both** delivery paths:

```json
{
  "event": "quote",
  "form": "quote",
  "reference": "PV-Q-20260805-K3F9",
  "delivery": "webhook"
}
```

In GA4, create custom events named `quote` and `contact`, and mark each a conversion; import
it into Google Ads, or trigger on those names in Tag Manager.

Watch the `delivery` value. If you see `mail_fallback` in analytics, Resend is not
working and enquiries are going out through visitors' own mail clients instead.

---

## Reference numbers

    PV-Q-20260805-K3F9    quote request
    PV-C-20260805-M7B2    contact enquiry

Generated in the browser, so the same reference reaches you and the customer on
every delivery path. If the server generated it, a mail-fallback submission would
have no reference at all.
