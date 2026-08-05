# PROJECT STATE — read this first

Single source of truth for what is done. Updated every increment.
If you are an assistant picking this up after a container reset: run
`bash bin/recover.sh`, then read this file, then `git log --oneline`.

## Last verified
- **Routes:** 374 built (351 in sitemap; 11 compliance pages noindex pending review)
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

## French (fr-CA, Québec) — TRANSLATION COMPLETE
Live: home, aspirateurs-antideflagrants, demande-de-soumission, merci, a-propos,
poussieres-et-matieres hub, applications hub, industries hub, guides hub, etudes-de-cas hub, plus **all 47 material guides** and
**all 19 application guides** and **all 38 industry guides** and **all 8 guide articles** and **all 16 case studies**.

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

**11 compliance pages: TRANSLATED, GATED PENDING REVIEW.**
They exist at /fr/conformite/* and are fully written, but while
REVIEW_PENDING = true in src/lib/data/fr-compliance.ts they are:
  - noindex / nofollow
  - excluded from the sitemap
  - absent from LOCALE_PAIRS, so never advertised as a French counterpart
  - rendered with a visible notice naming the English as authoritative

To publish after a French-speaking safety reviewer signs off: set REVIEW_PENDING to
false, add the 11 pairs to LOCALE_PAIRS, add the sitemap entries. Nothing else.

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


## SEO / GEO — audited and clean (French)
137 routes. 137/137 unique titles, none over 62 visible characters. 137/137
self-referencing canonicals. 137/137 reciprocal hreflang in BOTH directions.
137/137 meta descriptions at 70+ characters. 128/137 FAQPage schema (the 9 without
are hubs, which is correct). Zero orphans, mean 32 inbound French links per page.
inLanguage fr-CA on every content page. One language switcher, resolving to page
counterparts.

TITLE BUDGET: keep metaTitle at or under 50 characters. The root layout appends the
brand suffix, so anything longer gets truncated by Google. If you add French pages,
stay inside that budget.

## Footer and language switcher — settled
The footer is a CLIENT component (src/components/layout/footer.tsx) reading
usePathname, with French link sets, headings, aria-labels and contact copy. French
footer links point only at routes that exist in French. Do not revert it to a
server component without replacing the locale detection.

ONE language switcher, in the navbar, resolving to the page counterpart. A
decorative non-functional 'EN' selector left over from the original design used to
sit beside it and read as a second switcher — it has been removed. Do not
reintroduce it.

The header CTA and the footer CTA both point at /fr/demande-de-soumission on French
routes.

## French REMOVED from this site (preserved for a separate domain)
This site is now English-only, USA-positioned. The French translation was NOT
deleted — it is intact and restorable:

  preserved/app-fr/          all 18 French route files, moved out of src/app so
                             Next.js does not route them
  src/lib/data/fr*.ts        all 7 French data files, untouched
                             (137 pages of content: 47 materials, 19 applications,
                             38 industries, 8 articles, 16 case studies,
                             11 compliance, conversion path)
  LOCALE_PAIRS in i18n.ts    all 137 EN/FR mappings retained

TO RESTORE ON THE NEW DOMAIN:
  1. git mv preserved/app-fr src/app/fr
  2. set fr-CA enabled: true in src/lib/i18n.ts
  3. re-add the French sitemap entries (see git history for commit 4c8695e)
  4. re-add the navbar switcher and French nav (same commit)
  5. re-add the footer French link sets (same commit)
Everything needed is in git history at or before 4c8695e.

WHY pairedAlternates is gated: with only one locale enabled it returns undefined,
so English pages emit NO hreflang. Pointing at a French counterpart that does not
exist on this domain would be worse than saying nothing.

USA-ONLY: zero Canada references remain. The Royal Canadian Mint entry was removed
from the client wall per instruction — the logo file is still at
public/images/clients/client-36.png, so restoring it is one line in clients.ts if
that was meant as positioning language only rather than the client list.
