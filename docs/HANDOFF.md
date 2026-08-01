# PrestiVac Platform — Handoff Snapshot (2026-07-19)

## State
73 routes · 12 representative case studies · 16 industry deep-dives ·
22 material guides (15+ client-verbatim titles) · 8 application guides ·
interactive /products catalog (44 photographed models, guided selector,
factory line-spec panels from 410 extracted brochures) · CSA certification
wired precisely (Cert. 70122393) · brand copy aligned (Montréal, 25 yrs
combined, 200+ versions, 3-yr warranty, values, taglines).

## Integrity ledger (what we say, and why we can)
- "Legally certified explosion-proof": CSA 70122393 + factory cert language
  (Class I Div 1; EPL Db/Gb; ATEX II 2 GD c IIC T6) — reproduced verbatim.
- Filtration: educational 99.97%@0.3µm; factory grades (H14 99.995%, ULPA
  99.9995%@0.12µm, EN 1822) cited where the line documents them.
- Two nomenclatures: photographed models (AVX/EVX/EX1…) vs brochure families
  (AV1/AV2/EV1/EX/CDV/DC…) — mapped at LINE level only; per-model identity
  is never asserted. Suffix TT remains unglossed (no factory definition).
- Purged fabrications: "forty years", "thousand systems worldwide",
  DUTYVAC brand (extractor substitutes; site greps clean).

## Pending client inputs → unlocks
- Per-model brochures in CURRENT nomenclature (or a rename map) → per-model
  pages via existing brief + `scripts/extract-brochures.py`.
- Certification documents beyond CSA 70122393 → additional marks, scoped.
- Verified metrics/testimonials → case-study numbers, ROI content.
- Photography for specialty lines (defueling, mercury, fume, downdraft,
  immersion, acid, containment/cleanroom) → seven ready-made category arcs.

## Rebuild-from-zero
unzip prestivac-content-platform.zip → pnpm install → gates
(`pnpm lint && pnpm typecheck && pnpm build`). Brochure corpus:
uploads/BROCHURES_Englsih.zip → extractor regenerates factory-lines.ts.


## Quote form delivery — action required

The quote form at /get-a-quote posts to /api/quote. Delivery is configuration
driven:

- Set **QUOTE_WEBHOOK_URL** in Coolify to any HTTPS endpoint that forwards JSON
  to info@prestivac.com. A Zapier or Make webhook with a "send email" action is
  the fastest route and needs no code.
- Without it, the form falls back to a pre-filled email to info@prestivac.com
  carrying every field and the reference number. Functional, but a mail draft
  cannot be counted as a conversion, so paid traffic cannot be attributed.

Every submission includes a reference number in the form PV-YYYYMMDD-XXXX, shown
to the customer on /thank-you/quote and included in the email subject, so both
sides can quote the same reference.

See .env.example for the full list of environment variables.
