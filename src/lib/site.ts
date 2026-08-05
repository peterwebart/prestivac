export type NavItem = {
  label: string;
  href: string;
  /** Has a real dropdown menu on desktop (content lives in nav-menus). */
  hasMenu?: boolean;
  /** Shown only in the mobile menu; desktop covers it with the CTA button. */
  mobileOnly?: boolean;
};

const navItems: NavItem[] = [
  { label: "Solutions", href: "/#solutions", hasMenu: true },
  { label: "Products", href: "/products", hasMenu: true },
  { label: "Applications", href: "/applications", hasMenu: true },
  { label: "Industries", href: "/industries", hasMenu: true },
  { label: "Materials", href: "/materials", hasMenu: true },
  { label: "Compliance", href: "/hazardous-locations", hasMenu: true },
  { label: "Resources", href: "/resources", hasMenu: true },
  { label: "About", href: "/about" },
  { label: "Get a Quote", href: "/get-a-quote", mobileOnly: true },
];

export const site = {
  name: "PrestiVac",
  legalName: "PrestiVac USA Inc.",
  /** Long-form positioning line — used in metadata and marketing copy. */
  tagline: "Manufacturer of Certified Vacuum Cleaners for Combustible Dusts & Flammable Liquids",
  /** Short descriptor for the header lockup, where width is at a premium. */
  lockupTagline: "Explosion Proof Vacuum Manufacturer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://prestivac.com",
  title: "Explosion Proof Industrial Vacuum Manufacturer",
  description:
    "Manufacturer of certified vacuum cleaners for combustible dusts and flammable liquids and solvents. UL 1203 certified explosion-proof and dust-ignition-proof electrical vacuum cleaners for Hazardous (Classified) Locations. Solid stainless steel, 200+ models, made in the USA.",
  /** Confirmed public contact details for PrestiVac USA Inc. */
  email: "info@prestivac.com",
  phone: "1-888-338-0708",
  phoneHref: "tel:+18883380708",
  address: {
    street: "8 The Green, Ste E",
    city: "Dover",
    state: "DE",
    zip: "19901",
    country: "USA",
    full: "8 The Green, Ste E, Dover, DE 19901 USA",
  },
  nav: navItems,
};
