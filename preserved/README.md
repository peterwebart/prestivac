# Preserved French translation

This directory holds the complete Québec French (fr-CA) translation, removed from
this site so it can be used on a separate domain.

It is **excluded from `tsconfig.json`**, so nothing here is type-checked or built as
part of the live English site. That also means the files here will not stop a build
if they drift — check them explicitly when you restore.

## Contents

    app-fr/          18 route files (was src/app/fr)
    fr-guide.tsx     shared renderer for all French guide pages

The French **data** stays in the live tree at `src/lib/data/fr*.ts` (7 files,
~137 pages of content). It is dead code there — nothing imports it, and verified:
no French strings reach the client bundle.

## Content inventory

    47  material guides        src/lib/data/fr-materials.ts
    19  application guides     src/lib/data/fr-applications.ts
    38  industry guides        src/lib/data/fr-industries.ts
     8  guide articles         src/lib/data/fr-articles.ts
    16  case studies           src/lib/data/fr-case-studies.ts
    11  compliance pages       src/lib/data/fr-compliance.ts  (REVIEW_PENDING)
        home, product, quote, confirmation, about   src/lib/data/fr.ts

## To restore on the new domain

1. `git mv preserved/app-fr src/app/fr`
2. `git mv preserved/fr-guide.tsx src/components/templates/fr-guide.tsx`
3. Remove `"preserved"` from `exclude` in `tsconfig.json`
4. Set `enabled: true` for `fr-CA` in `src/lib/i18n.ts`
5. Re-add the French sitemap entries, the navbar switcher and French nav, and the
   footer French link sets — all three are in git history at commit `4c8695e`
6. `pnpm build` and re-run the crawl

`pairedAlternates()` in `src/lib/i18n.ts` returns `undefined` while only one locale
is enabled, so step 4 is what re-enables hreflang. Nothing else needs changing.

## Before publishing the compliance pages

`src/lib/data/fr-compliance.ts` has `REVIEW_PENDING = true`. While set, those 11
pages are noindex, excluded from the sitemap, absent from `LOCALE_PAIRS`, and render
a notice naming the English as authoritative. They carry the Class/Division/Group
designations and the *antidéflagrant* vs *protégé contre l'inflammation des
poussières* distinction — have a French-speaking safety reviewer sign off before
setting it to `false`.
