# Setting up the form webhooks

Both forms deliver enquiries the same way. Nothing is stored on the server, so a
delivery endpoint is what turns a submission into an email you actually receive.

## The two environment variables

| Variable | Used by | Required? |
|---|---|---|
| `QUOTE_WEBHOOK_URL` | `/get-a-quote` (19 fields) | Set this one first |
| `CONTACT_WEBHOOK_URL` | `/contact` (6 fields) | Optional — falls back to `QUOTE_WEBHOOK_URL` |

**Setting only `QUOTE_WEBHOOK_URL` is enough to make both forms work.** The contact
route falls back to it. Each payload carries a `form` field (`"quote"` or
`"contact"`) so a single endpoint can still route by type.

Set them in **Coolify → your application → Environment Variables**, then redeploy.
Never commit them to the repository.

## What gets POSTed

Both endpoints send `Content-Type: application/json`:

```json
{
  "form": "quote",
  "submittedAt": "2026-08-05T14:22:31.005Z",
  "reference": "PV-Q-20260805-K3F9",
  "name": "...",
  "company": "...",
  "email": "...",
  "...": "remaining form fields"
}
```

The contact payload is the same shape with `"form": "contact"`, a `PV-C-` reference,
and its six fields.

## Option 1 — Zapier or Make (no code, quickest)

1. Create a new Zap/Scenario with a **Webhooks → Catch Hook** trigger.
2. Copy the URL it gives you.
3. Add an action: **Email → Send Outbound Email** to `info@prestivac.com`.
   - Subject: use `reference` and `form`, e.g. `New {{form}} — {{reference}}`
   - Body: map the fields you want; include `reference` first.
4. Paste the URL into `QUOTE_WEBHOOK_URL` in Coolify and redeploy.
5. Submit a real test from `/get-a-quote` and confirm the email arrives.

Optionally add a second action writing a row to Google Sheets — that gives you a
searchable log of every enquiry without a CRM.

## Option 2 — CRM inbound webhook (better long term)

HubSpot, Pipedrive, Zoho and Salesforce all accept an inbound webhook or have a
Forms/Leads API. Point `QUOTE_WEBHOOK_URL` at it and map:

- `reference` → a custom text field. **Do this.** It is how a customer's phone call
  finds their submission.
- `email`, `name`, `company`, `phone` → the standard contact fields
- everything else → notes, or custom fields if you want to filter on them

## Option 3 — transactional mail service

Postmark, Resend, SendGrid and similar can accept a POST and send a templated
email. More control over formatting than Zapier, slightly more setup.

## Verifying it works

With nothing configured, the API deliberately reports that fact rather than
pretending to succeed:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://YOUR-DOMAIN/api/quote \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","company":"Test","email":"t@example.com","reference":"PV-Q-20260805-TEST"}'
```

- `503` → not configured. The form falls back to a pre-filled mail draft.
- `200` → configured and the endpoint accepted it.
- `502` → configured but your endpoint rejected it or was unreachable.

Same call against `/api/contact` with `{"name","email","message","reference"}`.

## Why there is a mail fallback

If no webhook is configured, the form does **not** silently fail. It composes a
pre-filled email to `info@prestivac.com` containing every field and the reference,
and then still sends the visitor to the confirmation page. A form that appears to
submit and discards the enquiry is worse than no form at all.

That fallback is a safety net, not a substitute: submissions arriving that way are
untracked as conversions and depend on the visitor's mail client opening.

## Conversion tracking

Both forms push a `generate_lead` event to `window.dataLayer` on every successful
submission, on **both** delivery paths:

```json
{
  "event": "generate_lead",
  "form": "quote",
  "source": "get-a-quote",
  "reference": "PV-Q-20260805-K3F9",
  "delivery": "webhook"
}
```

To count these as conversions:

1. **GA4** — create a custom event named `generate_lead` and mark it a conversion.
2. **Google Ads** — import that GA4 conversion, or trigger on the same event name
   in Google Tag Manager.

`delivery` is the field to watch operationally. If you see `mail_fallback` in your
analytics, the webhook is not working and enquiries are going out through the
visitor's own mail client.

No tag container needs to exist for the site to function — the push is a no-op until
one is installed.

## Reference number format

    PV-Q-20260805-K3F9    quote request
    PV-C-20260805-M7B2    contact enquiry
       │ │        └── random 4 characters
       │ └── submission date
       └── Q = quote, C = contact

Generated in the browser so the **same** reference reaches PrestiVac and the
customer, whether delivery went by webhook or by the mail fallback. If it were
generated on the server, a fallback submission would have no reference at all and
the customer would have nothing to quote when they follow up.
