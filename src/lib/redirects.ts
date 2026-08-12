/**
 * Legacy URL redirect map.
 *
 * Source: Google Search Console "Not found (404)" report, 2026-08-08.
 * 1,839 affected URLs; 1,000 exported and analysed.
 *
 * The old site was Drupal, later WordPress, with a large programmatic
 * city-page footprint. None of those URLs exist in the Next.js app, so every
 * one of them returns 404 and burns crawl budget on each pass.
 *
 * Strategy:
 * - Article URLs go to the closest equivalent page on the new site. Where an
 * equivalent already exists it is used rather than recreating thin content;
 * consolidating into one strong page beats splitting intent across two.
 * - Three legacy topics had no equivalent and were genuinely worth keeping.
 * They now exist as real pages and are redirected to, not away from.
 * - Programmatic city pages are pattern-redirected to the explosion-proof
 * category. They are not recreated — per client instruction, and because
 * several hundred near-identical location pages is exactly what Section 27
 * of the brief prohibits.
 * - Drupal internals (node ids, printpdf, taxonomy, flag tokens, RSS feeds)
 * carry no user intent worth preserving and go to the nearest hub.
 *
 * All redirects are 301 (permanent: true).
 *
 * Ordering matters: path-to-regexp matches in array order, so specific
 * article paths are listed before the city and catch-all patterns.
 */

export type LegacyRedirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

/** Campaign landing-page aliases from the Google Ads briefs. */
const CAMPAIGN_ALIASES: LegacyRedirect[] = [
  { source: "/explosion-proof-vacuums", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/air-operated-vacuums", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/powder-coating-dust-recovery", destination: "/applications/powder-coating", permanent: true },
  { source: "/metal-dust-recovery", destination: "/materials/combustible-metal-dust", permanent: true },
  { source: "/compliance", destination: "/hazardous-locations", permanent: true },
];

/**
 * Legacy article URLs.
 *
 * Each maps to the page that best serves the same search intent. Where the
 * legacy article was a material explainer, the material page is the stronger
 * destination — it is deeper than the original post was.
 */
const ARTICLES: LegacyRedirect[] = [
  // --- Material recovery articles -> material guides -------------------
  { source: "/blog/how-to-safely-recover-combustible-sulfur-dust", destination: "/materials/sulfur-dust", permanent: true },
  { source: "/blog/how-to-safely-recover-combustible-tea-dust", destination: "/materials/tea-dust", permanent: true },
  { source: "/blog/how-to-safely-recover-combustible-zinc-dust", destination: "/materials/zinc-dust", permanent: true },
  { source: "/blog/how-to-safely-recover-nickel-metal-dust", destination: "/materials/nickel-dust", permanent: true },
  { source: "/blog/how-to-safely-recover-flour-dust", destination: "/materials/flour-dust", permanent: true },
  { source: "/how-to-safely-recover-flour-dust", destination: "/materials/flour-dust", permanent: true },
  { source: "/flour-dust", destination: "/materials/flour-dust", permanent: true },
  { source: "/export-blog/how-to-safely-recover-toxic-dust-2", destination: "/materials", permanent: true },

  // --- Dust explosion explainers -> guides ------------------------------
  { source: "/blog/dust-explosions-explained", destination: "/guides/dust-explosion-basics", permanent: true },
  { source: "/dust-explosions-explained", destination: "/guides/dust-explosion-basics", permanent: true },
  { source: "/blog/the-elements-of-a-dust-explosion", destination: "/guides/dust-explosion-basics", permanent: true },
  { source: "/flammability-of-dust-clouds", destination: "/guides/dust-explosion-basics", permanent: true },
  { source: "/sources-of-ignition", destination: "/guides/sources-of-ignition", permanent: true },
  { source: "/tips-to-avoid-flames-in-the-workplace", destination: "/guides/sources-of-ignition", permanent: true },
  { source: "/snuffing-out-industrial-dust-dangers", destination: "/combustible-dust", permanent: true },
  { source: "/industries-at-risk-for-combustible-dust-explosions", destination: "/industries", permanent: true },

  // --- Legacy topics that now exist as real pages -----------------------
  { source: "/blog/different-types-of-combustible-dust", destination: "/guides/types-of-combustible-dust", permanent: true },
  { source: "/the-real-cost-of-explosive-dust-incidents", destination: "/guides/cost-of-a-dust-explosion", permanent: true },
  { source: "/blog/how-to-safely-recover-ethanol", destination: "/guides/flammable-liquid-recovery", permanent: true },

  // --- Industry / application articles ----------------------------------
  { source: "/blog/fire-and-explosion-risks-in-cement-manufacturing-plants", destination: "/materials/concrete-cement-dust", permanent: true },
  { source: "/blog/how-to-safely-recover-toxic-dust-in-foundries", destination: "/industries/foundry", permanent: true },
  { source: "/blog/how-to-safely-recover-hazardous-material-in-demolitions", destination: "/industries/abatement", permanent: true },
  { source: "/blog/composite-sanding-dust-control", destination: "/applications/sanding", permanent: true },
  { source: "/blog/abatement", destination: "/industries/abatement", permanent: true },
  { source: "/blog/chemicals", destination: "/industries/chemical", permanent: true },
  { source: "/blog/firing-range", destination: "/industries/ammunition", permanent: true },
  { source: "/blog/nuclear", destination: "/industries/energy", permanent: true },
  { source: "/blog/telecommunication", destination: "/industries/electronics", permanent: true },
  { source: "/telecommunication", destination: "/industries/electronics", permanent: true },
  { source: "/blog/engine-overhaul-facility", destination: "/industries/aerospace", permanent: true },
  { source: "/safety-point/hepa-exhaust-filtration", destination: "/guides/hepa-vs-ulpa-filtration", permanent: true },
  { source: "/blog-categories/press-release", destination: "/resources", permanent: true },
  { source: "/customer-support", destination: "/support", permanent: true },
  { source: "/sitemap", destination: "/sitemap.xml", permanent: true },
];

/**
 * Legacy product URLs.
 *
 * The old /portfolio/* paths were individual product pages. They map to the
 * product category that now covers each configuration, rather than to a
 * specific model — the legacy naming does not map cleanly onto the current
 * model lineup, and a category page serves the intent without guessing.
 */
const PRODUCTS: LegacyRedirect[] = [
  // Air-operated (pneumatic)
  { source: "/portfolio/av-1015-ex-rct-cm-ex-air-containment-vacuums", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/portfolio/av-1015-ex-rct-is-ex-air-immersion-separator-wet-mix-vacuum-cleaners", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/portfolio/av-1015-hepa-air-operated-industrial-hepa-vacuums", destination: "/products/hepa-vacuums", permanent: true },
  { source: "/portfolio/av-1015-mc-air-operated-mercury-collection-vacuums", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/portfolio/av-10152025-ex-rct-cr-ex-air-cleanroom-vacuums", destination: "/products/cleanroom-vacuums", permanent: true },
  { source: "/portfolio/av1-1-ex-ttbp-cr-ex-air-cleanroom-vacuums", destination: "/products/cleanroom-vacuums", permanent: true },
  // Electric Division 2
  { source: "/portfolio/ev-1015-ex-div2-cm-division-2-containment-vacuums", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/portfolio/ev-1015-ex-div2-cr-division-2-cleanroom-vacuums", destination: "/products/cleanroom-vacuums", permanent: true },
  { source: "/portfolio/ev-1015-ex-div2-is-ds-ex-division-2-immersion-separator-wet-mix-dustless-sanding-vacuum", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/portfolio/ev-1015-ex-div2-rct-is-ds-ex-division-2-immersion-separator-wet-mix-dustless-sanding", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/portfolio/ev-1015-mc-electric-mercury-collection-vacuums", destination: "/products/industrial-vacuums", permanent: true },
  // Explosion proof Division 1
  { source: "/portfolio/ex-1015-ds-explosion-proof-dustless-sanding-vacuums", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/portfolio/ex-1015-explosion-proof-vacuums", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/portfolio/ex-1015-is-ds-explosion-proof-immersion-separator-wet-mix-dustless-sanding-vacuum-cleaners", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/portfolio/ex-1015-w-explosion-proof-fuels-and-solvents-vacuums", destination: "/guides/flammable-liquid-recovery", permanent: true },

  // Legacy category taxonomies
  { source: "/product-category/air-operated-explosion-proof-3", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/product-category/cleanroom-dust-ignition-protected-division-2", destination: "/products/cleanroom-vacuums", permanent: true },
  { source: "/product-category/explosion-proof-division-1-air-immersion-separator-wet-mix-dust-collector-sanding-kits", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/product-category/fuel-solvents-air-explosion-proof", destination: "/guides/flammable-liquid-recovery", permanent: true },
  { source: "/product-category/immersion-separator-wet-mix-dust-collector-sanding-kits-sanding-kits", destination: "/products/wet-dry-systems", permanent: true },
  { source: "/product-category/mercury-air-explosion-proof", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/products-categories/air-operated-0", destination: "/products/pneumatic-vacuums", permanent: true },
  { source: "/products-categories/cleanroom-0", destination: "/products/cleanroom-vacuums", permanent: true },
  { source: "/products-categories/continuous-duty-0", destination: "/products/industrial-vacuums", permanent: true },
  { source: "/products-categories/dust-ignition-protected-division-2-3", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/products-categories/electric-5", destination: "/products/industrial-vacuums", permanent: true },
  { source: "/products-categories/hepa-electric", destination: "/products/hepa-vacuums", permanent: true },
  { source: "/products-category/acid-collection", destination: "/industries/chemical", permanent: true },
  { source: "/application/acids", destination: "/industries/chemical", permanent: true },
  { source: "/application/toxic-dust-0", destination: "/guides/toxic-liquid-recovery", permanent: true },
  { source: "/application/demolition", destination: "/industries/abatement", permanent: true },
  { source: "/application/melamine", destination: "/materials/plastic-dust", permanent: true },
  { source: "/industry/foundries", destination: "/industries/foundry", permanent: true },
  { source: "/industry/military", destination: "/industries/ammunition", permanent: true },
  { source: "/industry/petroleum", destination: "/industries/oil-gas", permanent: true },
];

/**
 * Pattern redirects.
 *
 * These absorb the long tail. The city footprint alone is roughly 670 URLs
 * across two naming conventions and a /blog/ variant.
 */
const PATTERNS: LegacyRedirect[] = [
  // Programmatic city pages -> explosion-proof category.
  { source: "/blog/explosion-proof-vacuums-in-:city", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/explosion-proof-vacuums-in-:city/:rest*", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/explosion-proof-vacuums-in-:city", destination: "/products/explosion-proof-vacuums", permanent: true },
  { source: "/explosion-proof-vacuums-:city", destination: "/products/explosion-proof-vacuums", permanent: true },

  // Removed French section. The site is English-only; the fr-CA content is
  // held in preserved/ for a future second domain. Until that exists, French
  // URLs go to the English homepage rather than 404.
  { source: "/fr", destination: "/", permanent: true },
  { source: "/fr/portfolio/:slug*", destination: "/products", permanent: true },
  { source: "/fr/products-categories/:slug*", destination: "/products", permanent: true },
  { source: "/fr/blog/:slug*", destination: "/guides", permanent: true },
  { source: "/fr/blog-categories/:slug*", destination: "/guides", permanent: true },
  { source: "/fr/:path*", destination: "/", permanent: true },

  // Drupal internals — no user intent to preserve.
  { source: "/printpdf/:id*", destination: "/", permanent: true },
  { source: "/node/:id*", destination: "/", permanent: true },
  { source: "/taxonomy/:path*", destination: "/", permanent: true },
  { source: "/flag/:path*", destination: "/", permanent: true },

  // RSS feed endpoints from the legacy CMS.
  { source: "/product/:slug/feed", destination: "/products", permanent: true },
  { source: "/product/:slug", destination: "/products", permanent: true },
  { source: "/application/:slug/feed", destination: "/applications", permanent: true },
  { source: "/industry/:slug/feed", destination: "/industries", permanent: true },
  { source: "/portfolio/:slug*", destination: "/products", permanent: true },
  { source: "/blog/:slug*", destination: "/guides", permanent: true },
  { source: "/blog-categories/:slug*", destination: "/guides", permanent: true },
];

export const LEGACY_REDIRECTS: LegacyRedirect[] = [
  ...CAMPAIGN_ALIASES,
  ...ARTICLES,
  ...PRODUCTS,
  ...PATTERNS,
];
