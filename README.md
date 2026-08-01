# PrestiVac — Marketing Website

Premium marketing site for PrestiVac industrial vacuum systems. Phase 1 built the homepage hero pixel-faithful to the approved mockup (`first-screen-2.png`); phase 2 added the full homepage section stack plus the `/products`, `/resources` and `/about` pages.

## Stack

- **Next.js 15** (App Router, React Server Components) + **React 19**
- **TypeScript** (strict, no `any`)
- **Tailwind CSS 4** (CSS-first `@theme` tokens in `src/app/globals.css`)
- **Framer Motion 12** — 60fps, `prefers-reduced-motion` aware
- **shadcn/ui-style primitives** (CVA + Radix Slot) — `src/components/ui`
- **Lucide** icons, **next/image**, self-hosted variable fonts (Archivo display / Inter body via `next/font/local`)

## Adding the next material guide

Material deep-dive pages are data-driven. Create a data file in
`src/lib/data/material-guides/` following `MaterialGuideData`, add an
11-line page wrapper in `src/app/materials/<slug>/`, then register the
material in `FEATURED_MATERIALS`, the featured-chip map in
`src/components/directory/materials-directory.tsx`, the Materials nav menu
and the sitemap. The hub directories (applications and materials) are
client-searchable via `DirectoryExplorer`.

## Adding the next application guide

Application pages are data-driven like the others. Create a data file in
`src/lib/data/application-guides/` following `ApplicationGuideData`, add an
11-line page wrapper in `src/app/applications/<slug>/`, then register it in
`FEATURED_APPLICATIONS`, the featured-chip map in
`src/components/directory/applications-directory.tsx`, the Applications nav
menu and the sitemap. Link its case study via `studySlug`.

## Adding the next industry deep dive

Industry pages are data-driven like material guides. Create a data file in
`src/lib/data/industry-guides/` following `IndustryGuideData`, add an
11-line page wrapper in `src/app/industries/<slug>/`, then set `href` on the
industry's entry in `industries-directory.ts`, add it to the Industries nav
menu and the sitemap. Link its case study via `studySlug` once one exists.

## Adding the next case study

Studies live one-per-file in `src/lib/data/case-study-content/`. To add one:
create a new file there following the `CaseStudy` type, then import and
append it in `src/lib/data/case-study-library.ts`. The route, sitemap entry,
archive card, filters and JSON-LD all derive from the array — no other
wiring needed. Keep the content rules: representative framing, no customer
or brand names, no invented metrics, "supports compliance" language.

## Updating from a delivery zip (Windows / PowerShell)

Each delivery zip is the complete project. Don't unzip over the old folder —
mirror it instead, which also **deletes files that no longer exist**:

```powershell
cd C:\AI\Prestivac
Expand-Archive .\prestivac-site-*.zip -DestinationPath $env:TEMP\pv -Force
robocopy $env:TEMP\pv\prestivac .\prestivac /MIR /XD .git node_modules .next /XF .env .env.local
cd prestivac; pnpm install
```

`/MIR` makes the folder exactly match the delivery; `/XD`/`/XF` protect your
git history, environment files and installed dependencies. Then commit and
push as usual.

## Getting started

Requires Node 20+ and pnpm 11 (pinned via `packageManager` — run
`corepack enable` once and the right pnpm is used automatically).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Dependency policy: `pnpm-workspace.yaml` enforces a 3-day
`minimumReleaseAge`, so `pnpm add`/`update` will refuse package versions
published in the last 72 hours (supply-chain protection). This is stricter
than pnpm 11's 24h default, which keeps the committed lockfile verifiable
on every machine.

Quality gates (all must pass before commit):

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Environment

Copy `.env.example` → `.env` and set:

| Variable               | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for SEO/OG/sitemap/JSON-LD.   |

Defaults to `https://prestivac.com` when unset.

## Project structure

```
src/
  app/            layout (site chrome + fonts + metadata), pages (/, /products,
                  /resources, /about), globals.css, robots, sitemap, icons
  components/
    layout/       navbar, mobile-nav, footer, floating-support
    sections/     hero stack + standards, solution-finder, product-categories,
                  why-prestivac, dust-education, industries-served,
                  case-studies, engineering-process, comparison,
                  product-explorer, knowledge-center, faq, final-cta
    ui/           button (CVA), container, section-heading, page-hero
    reveal.tsx    client whileInView wrapper (keeps section content in RSC)
  fonts/          Archivo + Inter variable woff2 (SIL OFL, licenses included)
  lib/            site config, motion variants, JSON-LD schema, cn()
  lib/data/       typed content: products, industries, standards, resources,
                  FAQ, finder logic, case studies, process, comparison, why
public/images/    hero + products renders, band, OG image, logo, swirl mark
```

## Deployment (Coolify)

Push to `main` → Coolify builds and deploys automatically.

- Nixpacks auto-detects Next.js + pnpm — no Dockerfile needed.
- Build: `pnpm build` · Start: `pnpm start` (respects `PORT`).
- Set `NEXT_PUBLIC_SITE_URL` in the Coolify app's environment variables.
- `sharp` is a production dependency, so self-hosted image optimization works out of the box. Build scripts are explicitly allowed/denied per package in `pnpm-workspace.yaml` (pnpm 11 requires a verdict for each; `unrs-resolver` is intentionally denied). The `packageManager` pin means even an older pnpm on the build host self-switches to 11.6.0.

## Implementation notes

- **All nav routes are live.** `Solutions`, `Industries` and `Contact` anchor
  to homepage sections; `Products`, `Resources` and `About` are full pages.
- **Nav dropdowns are real** (Radix `NavigationMenu`): Solutions lists the
  interactive tools, Products/Industries/Resources deep-link into page
  anchors. Menu content lives in `src/lib/data/nav-menus.tsx`.
- **Interactive tools** (all client islands under `src/components/tools/`):
  Solution Finder (home), Dust Risk Checker (/resources — deliberately has
  no reassuring outcome), Facility Layout Estimator (/products) and the
  Housekeeping Cost Calculator (home — computes only the user's own inputs;
  no savings claims). Remaining ideas from the brief: a case-study map needs
  real customer locations, and a searchable resource hub makes sense once
  content volume justifies it.
- **Cleaning selector** defaults to *Combustible Dust* with the
  recommendation panel collapsed, matching the mockup; the panel animates
  open on first selection (fully keyboard-accessible radiogroup).
- **Contact email** (`src/lib/site.ts`) must be verified with the client
  before launch — no phone/address is published until confirmed.
- **Content pending client input (do not launch without review):**
  - *Application spotlights* (`src/lib/data/case-studies.ts`) are
    representative examples — replace with verified case studies, metrics and
    approved quotes. A testimonials section was deliberately **not** built
    with invented names; add one when real quotes exist.
  - *Standards section* is worded as "engineered for compliance with" —
    confirm actual certifications/listings per model before strengthening.
  - *Newsletter signup* is deferred until an email-service integration
    exists (a form that posts nowhere would be worse than none).
  - *Privacy & Terms* pages need client-supplied legal text.
- Red spark/glow effects near the products are recreated with CSS gradients
  and deterministic Framer particles (disabled under reduced motion).
- Fonts are self-hosted from `@fontsource-variable` for reliable, GDPR-clean
  loading (no Google Fonts request at runtime).
