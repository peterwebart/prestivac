# PROJECT STATE — read this first

Single source of truth for what is done. Updated every increment.
If you are an assistant picking this up after a container reset: run
`bash bin/recover.sh`, then read this file, then `git log --oneline`.

## Last verified
- **Routes:** 261 built, all 200
- **Build / lint / typecheck:** clean
- **Container resets survived:** history is now preserved in the zip (see Recovery)

## English site — COMPLETE
47 material guides · 21 application guides · 38 industry guides · 16 case studies
· 11 compliance pages · 8 guide articles · 6 resource guides · 11 product
categories · 44 model pages · 112 pages with FAQPage schema.

Certification asserted sitewide: **UL 1203**, Class I Div 1 & 2 Groups A–D,
Class II Div 1 & 2 Groups E–G, NRTL. Zero CSA references remain.

## French (fr-CA, Québec) — IN PROGRESS
Live: home, aspirateurs-antideflagrants, demande-de-soumission, merci, a-propos,
poussieres-et-matieres hub, plus **30 material guides**.

Conversion path is complete in French: French form (19/19 fields), French
confirmation page with reference number, locale-aware navbar, language switcher
resolving page counterparts, reciprocal hreflang via `LOCALE_PAIRS`.

### Translated guides (30)
amidon · farine · aluminium · cadmium · soufre · silice · métallique-combustible
· bois · fer-et-acier · cuivre · charbon · titane · magnésium · plomb · sucre ·
grain · béton-et-ciment · zinc · caoutchouc · coke · noir-de-carbone · café ·
graphite · tabac · chrome · nickel · coton · zirconium · lithium · liège

### Remaining to translate
17 material guides (cuir, papier, cacao, maïs, étain, cobalt, manganèse,
vermiculite, thé, calcium, arsenic, béryllium, laiton-bronze, malt, amiante,
fibre-de-carbone, plastique) · 21 application guides · 38 industry guides ·
16 case studies · 8 articles.

**11 compliance pages: DO NOT translate without a French-speaking safety review.**
They carry the Class/Division/Group designations and the antidéflagrant vs
protégé-contre-l'inflammation distinction. Mistranslation is a safety error.

## How to add a French material guide (the whole procedure)
1. Append an entry to `src/lib/data/fr-materials.ts`
2. Add one line to `LOCALE_PAIRS` in `src/lib/i18n.ts`
3. Routes, sitemap, hreflang and FAQPage schema follow automatically

Preserve the safety nuance from the English guide verbatim — do not paraphrase.
Worked examples: zirconium (wet handling is prevention, NOT extinction — a
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

## Recovery after a container reset
`bash bin/recover.sh` — unzips, installs pnpm at the pinned 10.15.1, installs
deps, and reports git history plus guide count.

The zip now INCLUDES `.git`. It previously did not, which meant every reset
destroyed the commit history and left no record of what was done — the direct
cause of repeated work. Do not add `.git` back to the zip exclusions.
