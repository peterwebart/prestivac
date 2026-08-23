import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";

/**
 * Single source of truth for site navigation.
 *
 * WHY THIS EXISTS
 *
 * The Radix NavigationMenu mounts its dropdown panels only once opened, and the
 * mobile nav was gated on `{open && ...}`. Neither contributed a single href to
 * the server-rendered HTML — the homepage shipped 44 internal links, none from
 * navigation, while the megamenu defined over 200. A crawler cannot hover, so
 * those links were effectively invisible.
 *
 * THE FIX IS ARCHITECTURAL, NOT A FORCE-MOUNT
 *
 * Link structure is separated from interaction. This config is rendered as real
 * anchors in two places that are in the server HTML of every page:
 *
 *   1. The footer site index — visible, semantic, no CSS trickery.
 *   2. The mobile nav — now always in the DOM, collapsed with a native
 *      <details> disclosure rather than removed by a React conditional.
 *
 * Radix then reads the same config and behaves exactly as before. It enhances
 * navigation; it no longer determines whether the links exist. Nothing is
 * force-mounted and nothing is hidden purely to feed a crawler.
 *
 * CURATION IS DELIBERATE
 *
 * This carries major hubs and their significant children, NOT every URL. The
 * site has 271 pages; putting all of them in the header would bloat the DOM to
 * no benefit. Deep pages are reached through hub pages, contextual links and
 * breadcrumbs — a crawl from the homepage already reaches 271/271.
 */

export type NavLink = {
  label: string;
  href: string;
  /** Shown in the mega panel and the footer index where space allows. */
  description?: string;
};

export type NavSection = {
  /** Also the mega-menu trigger label. */
  label: string;
  /** Hub page for the section. Always a real route. */
  href: string;
  /** One-line summary used by the mega panel header. */
  summary: string;
  links: NavLink[];
  /** Optional highlighted destination for the mega panel. */
  featured?: NavLink;
};

/** Derived so a new product category appears in navigation automatically. */
const productLinks: NavLink[] = PRODUCT_CATEGORIES.map((category) => ({
  label: category.name,
  href: `/products/${category.slug}`,
  description: category.tagline,
}));

export const NAVIGATION: NavSection[] = [
  {
    label: "Products",
    href: "/products",
    summary: "Explosion-proof, HEPA, pneumatic, cleanroom and custom-built industrial vacuums.",
    links: productLinks,
    featured: {
      label: "Hazardous location vacuums",
      href: "/hazardous-location-vacuums",
      description: "Certified scope, classification and how to match equipment to your area.",
    },
  },
  {
    label: "Solutions",
    href: "/combustible-dust",
    summary: "Recovery built around the hazard rather than around the machine.",
    links: [
      {
        label: "Combustible dust vacuums",
        href: "/combustible-dust",
        description: "Selection by material and hazard.",
      },
      {
        label: "Hazardous location vacuums",
        href: "/hazardous-location-vacuums",
        description: "Certified scope and area classification.",
      },
      {
        label: "Explosion proof vacuums",
        href: "/products/explosion-proof-vacuums",
        description: "The certified electric and air-operated lines.",
      },
      {
        label: "HEPA vacuums",
        href: "/products/hepa-vacuums",
        description: "Retaining the fine fraction rather than exhausting it.",
      },
      {
        label: "Central vacuum systems",
        href: "/products/central-vacuum-systems",
        description: "Plant-wide recovery from fixed inlets.",
      },
      {
        label: "Custom engineered systems",
        href: "/products/custom-engineered-systems",
        description: "Where the standard range does not fit.",
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    summary: "38 industry guides covering the dust each process actually generates.",
    links: [
      { label: "Aerospace", href: "/industries/aerospace" },
      { label: "Automotive", href: "/industries/automotive" },
      { label: "Battery manufacturing", href: "/industries/battery" },
      { label: "Additive manufacturing", href: "/industries/additive-manufacturing" },
      { label: "Metalworking", href: "/industries/metalworking" },
      { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
      { label: "Food & beverage", href: "/industries/food-beverage" },
      { label: "Chemical", href: "/industries/chemical" },
      { label: "Foundry", href: "/industries/foundry" },
      { label: "Woodworking", href: "/industries/woodworking" },
      { label: "Oil & gas", href: "/industries/oil-gas" },
      { label: "Cleanrooms", href: "/industries/cleanrooms" },
    ],
    featured: {
      label: "All 38 industries",
      href: "/industries",
      description: "Full directory with the dust and hazard for each.",
    },
  },
  {
    label: "Materials",
    href: "/materials",
    summary: "80 material guides. Each states its Class II group, because the group decides which certified line applies.",
    links: [
      { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
      { label: "Aluminum dust", href: "/materials/aluminum-dust" },
      { label: "Titanium dust", href: "/materials/titanium-dust" },
      { label: "Magnesium dust", href: "/materials/magnesium-dust" },
      { label: "Lithium dust", href: "/materials/lithium-dust" },
      { label: "Battery black mass", href: "/materials/battery-black-mass" },
      { label: "Carbon black", href: "/materials/carbon-black" },
      { label: "Flour dust", href: "/materials/flour-dust" },
      { label: "Sugar dust", href: "/materials/sugar-dust" },
      { label: "Grain dust", href: "/materials/grain-dust" },
      { label: "Wood dust", href: "/materials/wood-dust" },
      { label: "Plastic dust", href: "/materials/plastic-dust" },
    ],
    featured: {
      label: "All 80 materials",
      href: "/materials",
      description: "Grouped directory, from metal dusts to biomass.",
    },
  },
  {
    label: "Compliance",
    href: "/hazardous-locations",
    summary: "Classification, standards and what a certification actually covers.",
    links: [
      { label: "UL 1203", href: "/hazardous-locations/ul-1203" },
      { label: "NFPA 660", href: "/hazardous-locations/nfpa-660" },
      { label: "NFPA 484 — metals", href: "/hazardous-locations/nfpa-484" },
      { label: "NFPA 652", href: "/hazardous-locations/nfpa-652" },
      { label: "NFPA 70 / NEC", href: "/hazardous-locations/nfpa-70-nec" },
      { label: "OSHA & combustible dust", href: "/hazardous-locations/osha-combustible-dust" },
      { label: "ATEX", href: "/hazardous-locations/atex" },
      { label: "IECEx", href: "/hazardous-locations/iecex" },
      { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
      { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
      { label: "Class I, Division 1", href: "/hazardous-locations/class-i-division-1" },
      { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
    ],
    featured: {
      label: "UL 1203 explained",
      href: "/hazardous-locations/ul-1203",
      description: "What our CSA listing covers — and what it does not.",
    },
  },
  {
    label: "Resources",
    href: "/resources",
    summary: "Selection guides, comparisons and case studies written for engineers.",
    links: [
      { label: "Choosing an explosion-proof vacuum", href: "/guides/how-to-choose-an-explosion-proof-vacuum" },
      { label: "Choosing a combustible dust vacuum", href: "/guides/how-to-choose-a-combustible-dust-vacuum" },
      { label: "Sizing an industrial vacuum", href: "/guides/how-to-size-an-industrial-vacuum" },
      { label: "Electric vs pneumatic", href: "/guides/electric-vs-pneumatic-vacuums" },
      { label: "Explosion proof vs dust ignition proof", href: "/guides/explosion-proof-vs-dust-ignition-proof" },
      { label: "HEPA vs ULPA", href: "/guides/hepa-vs-ulpa-filtration" },
      { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
      { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
      { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
      { label: "Selecting for metal dust", href: "/guides/vacuum-for-metal-dust" },
      { label: "Grounding & bonding", href: "/guides/grounding-and-bonding" },
      { label: "Maintenance & troubleshooting", href: "/guides/industrial-vacuum-maintenance" },
      { label: "Glossary", href: "/glossary" },
      { label: "All guides", href: "/guides" },
      { label: "Case studies", href: "/case-studies" },
      { label: "Knowledge center", href: "/resources" },
    ],
    featured: {
      label: "The cost of a dust explosion",
      href: "/guides/cost-of-a-dust-explosion",
      description: "What an incident actually costs, against the cost of prevention.",
    },
  },
  {
    label: "Company",
    href: "/about",
    summary: "Who builds the equipment, and how to reach the people who specify it.",
    links: [
      { label: "About PrestiVac", href: "/about" },
      { label: "Applications", href: "/applications" },
      { label: "Support & manuals", href: "/support" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];

/** Flat list of every navigation destination — used for validation. */
export const NAVIGATION_HREFS: string[] = Array.from(
  new Set(
    NAVIGATION.flatMap((section) => [
      section.href,
      ...section.links.map((l) => l.href),
      ...(section.featured ? [section.featured.href] : []),
    ]),
  ),
);
