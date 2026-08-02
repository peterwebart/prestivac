# PROJECT STATE — read this first

Single source of truth for what is done. Updated every increment.
If you are an assistant picking this up after a container reset: run
`bash bin/recover.sh`, then read this file, then `git log --oneline`.

## Last verified
- **Routes:** 342 built, all 200
- **Build / lint / typecheck:** clean
- **Container resets survived:** history is now preserved in the zip (see Recovery)

## English site — COMPLETE
47 material guides · 4 application guides (mixing-blending, tank-cleaning, thermal-spray,
warehouse-housekeeping) · 7 industry guides (ammunition, coal, education, marine, rail,
vacuum-furnace, paints-coatings) · 16 case studies
· 11 compliance pages · 8 guide articles · 6 resource guides · 11 product
categories · 44 model pages · 112 pages with FAQPage schema.

Certification asserted sitewide: **UL 1203**, Class I Div 1 & 2 Groups A–D,
Class II Div 1 & 2 Groups E–G, NRTL. Zero CSA references remain.

## French (fr-CA, Québec) — IN PROGRESS
Live: home, aspirateurs-antideflagrants, demande-de-soumission, merci, a-propos,
poussieres-et-matieres hub, applications hub, industries hub, guides hub, plus **all 47 material guides** and
**all 19 application guides** and **all 38 industry guides** and **4 guide articles**.

Conversion path is complete in French: French form (19/19 fields), French
confirmation page with reference number, locale-aware navbar, language switcher
resolving page counterparts, reciprocal hreflang via `LOCALE_PAIRS`.

### Material guides — COMPLETE
All 47 English material guides have a French counterpart, verified 47/47 for
reciprocal hreflang and FAQPage schema, with zero unpaired English guides.

### Application guides — COMPLETE
All 19 English application guides have a French counterpart, verified 19/19 for
reciprocal hreflang and FAQPage schema, zero unpaired.

### Remaining to translate
7 industry guides (ammunition, coal, education, marine, rail,
vacuum-furnace, paints-coatings) ·
16 case studies · 4 articles (black dust, recovered dust, toxic liquids, ESD).

**11 compliance pages: DO NOT translate without a French-speaking safety review.**
They carry the Class/Division/Group designations and the antidéflagrant vs
protégé-contre-l'inflammation distinction. Mistranslation is a safety error.

## How to add a French guide (the whole procedure)
**Material:** append to `src/lib/data/fr-materials.ts`
**Application:** append to `src/lib/data/fr-applications.ts` (same shape, reused type)
**Industry:** append to `src/lib/data/fr-industries.ts` — and use the optional
`related` field to ROUTE INTO the translated material and application guides
rather than restating their content. Sector pages describe the sector; they do not
re-explain silica. This keeps 38 sector pages from competing with the 66 guides
they draw on.

Then in both cases: add one line to `LOCALE_PAIRS` in `src/lib/i18n.ts`. Routes,
sitemap, hreflang, breadcrumb and FAQPage schema follow automatically.

Both sections render through ONE shared template,
`src/components/templates/fr-guide.tsx`. Change it once and both sections change —
which is the point. Do not fork it.

Preserve the safety nuance from the English guide verbatim — do not paraphrase.
Non-negotiable examples now translated: amiante (licensed abatement, HEPA is
equipment WITHIN that framework and never a substitute, friability is the hinge,
presume asbestos until tested), vermiculite (do NOT disturb, test first, DIY
removal explicitly refused). Never soften either of these.

Application guides carry HONEST LIMITS that must not be oversold: silo cleaning
makes confined-space permits RARE, not unnecessary, and bulk bridging is a
mechanical dislodging job that vacuum recovery does not replace. Powder coating
reuse is conditional on a clean stream. Abrasive blasting waste inherits the
regulatory status of whatever was stripped.

Other worked examples: zirconium (wet handling is prevention, NOT extinction — a
burning fire is still Class D), lithium (reacts with air moisture, so the
zirconium wet method is wrong), liège (suberosis comes from MOULDY cork, not
cork), béton (states plainly it does NOT burn), cadmium and plomb (toxicity
leads, not fire).

## Blocked on the client
1. **QUOTE_WEBHOOK_URL unset** — tracking is built and waiting. `generate_lead`
   fires on both delivery paths with a `delivery` field showing whether the
   webhook or the mail fallback was used. Nothing is measurable until it is set.
2. **CDV (Continuous Duty Vacuum) models** — solution finder step 5 routes to
   this series; it does not exist in `product-models.ts` yet.
3. **French safety review** — gates the 11 compliance pages.
4. **Footer stays English on /fr** — needs a client component or per-locale
   layout. Known, documented, not bodged.

## Language switcher — settled
ONE switcher only, in the navbar. It resolves to the counterpart page via
LOCALE_PAIRS and falls back to the locale home for untranslated pages. The locale
banner that used to sit in src/app/fr/layout.tsx was REMOVED — it duplicated the
navbar switcher and only linked to the English home. Do not reintroduce it.

## Recovery after a container reset
`bash bin/recover.sh` — unzips, installs pnpm at the pinned 10.15.1, installs
deps, and reports git history plus guide count.

The zip now INCLUDES `.git`. It previously did not, which meant every reset
destroyed the commit history and left no record of what was done — the direct
cause of repeated work. Do not add `.git` back to the zip exclusions.
