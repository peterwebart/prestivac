import { GUIDE_ARTICLES } from "@/lib/data/guides";
import { HAZARDOUS_LOCATION_TOPICS } from "@/lib/data/hazardous-locations";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { INDUSTRY_DIRECTORY } from "@/lib/data/industries-directory";
import { MATERIAL_GROUPS } from "@/lib/data/materials";
import { RESOURCES } from "@/lib/data/resources";

export type MenuLink = { label: string; href: string; description?: string };

export type NavMenu = {
  /** Two-column layout for long lists. */
  columns?: boolean;
  /** Dense, height-bounded multi-column panel for very long lists (labels only). */
  mega?: boolean;
  /** Sort links alphabetically by label at render time. */
  sorted?: boolean;
  links: MenuLink[];
  footer?: MenuLink;
};

/** Dropdown content for navbar items with `hasMenu`. Keyed by nav label. */
export const NAV_MENUS: Record<string, NavMenu> = {
  Solutions: {
    links: [
      {
        label: "Solution Finder",
        href: "/#solution-finder",
        description: "Six questions to the right system",
      },
      {
        label: "What are you cleaning?",
        href: "/#solutions",
        description: "Quick material-based recommendation",
      },
      {
        label: "Dust Risk Checker",
        href: "/resources/risk-checker",
        description: "Is your dust a combustible hazard?",
      },
      {
        label: "Facility Layout Estimator",
        href: "/products#layout-estimator",
        description: "Portable fleet or central system?",
      },
      {
        label: "Housekeeping Cost Calculator",
        href: "/#cost-calculator",
        description: "What manual cleanup costs today",
      },
    ],
  },
  Products: {
    columns: true,
    links: [
      ...PRODUCT_CATEGORIES.map((category) => ({
        label: category.name,
        href: "/products/" + category.slug,
        description: category.tagline,
      })),
      {
        label: "Combustible Dust Vacuums",
        href: "/combustible-dust",
        description: "Matched to your material",
      },
      {
        label: "Hazardous Location Vacuums",
        href: "/hazardous-location-vacuums",
        description: "Class I & II, Div 1 & 2",
      },
    ],
    footer: { label: "All products", href: "/products" },
  },
  Applications: {
    mega: true,
    sorted: true,
    links: [
      {
        label: "Grinding Dust",
        href: "/applications/grinding-dust",
        description: "Application guide",
      },
      {
        label: "Cleanroom Vacuuming",
        href: "/applications/cleanroom-vacuuming",
        description: "Application guide",
      },
      {
        label: "CNC Machining",
        href: "/applications/cnc-machining",
        description: "Chips, fines and coolant — the full guide",
      },
      {
        label: "Metal 3D Printing",
        href: "/applications/metal-3d-printing",
        description: "AM powder recovery, done safely",
      },
      {
        label: "Powder Coating",
        href: "/applications/powder-coating",
        description: "Grounded recovery in a charged process",
      },
      {
        label: "Silo & Bin Cleaning",
        href: "/applications/silo-cleaning",
        description: "Reach first, enter last",
      },
      {
        label: "Welding & Fabrication",
        href: "/applications/welding-cleanup",
        description: "Recovery for everything that settles",
      },
      {
        label: "Warehouse Housekeeping",
        href: "/applications/warehouse-housekeeping",
        description: "Rack tops to dock, one rotation",
      },
      {
        label: "Dust Collector Cleaning",
        href: "/applications/dust-collector-cleaning",
        description: "Service the concentration point",
      },
      {
        label: "Spill Cleanup",
        href: "/applications/spill-cleanup",
        description: "Incidental response, staged",
      },
      {
        label: "Abrasive Blasting",
        href: "/applications/abrasive-blasting",
        description: "Media reclaim, debris contained",
      },
      {
        label: "Deburring & Finishing",
        href: "/applications/deburring",
        description: "The finest reactive fines",
      },
      {
        label: "Mixing & Blending",
        href: "/applications/mixing-blending",
        description: "Charge, discharge, changeover",
      },
      {
        label: "Tank & Vessel Cleaning",
        href: "/applications/tank-cleaning",
        description: "Reach-first, wet and dry",
      },
      {
        label: "Bagging & Dumping",
        href: "/applications/bagging-dumping",
        description: "Dust at fill and dump",
      },
      {
        label: "Thermal Spray & Coating",
        href: "/applications/thermal-spray",
        description: "Overspray captured & reclaimed",
      },
      {
        label: "Conveyor Housekeeping",
        href: "/applications/conveyor-housekeeping",
        description: "Fugitive dust along the runs",
      },
      {
        label: "Drum & Container Filling",
        href: "/applications/drum-filling",
        description: "Displacement dust at the fill head",
      },
      {
        label: "Sanding & Surface Prep",
        href: "/applications/sanding",
        description: "The substrate decides the hazard",
      },
      { label: "Metalworking & Machining", href: "/applications#metalworking-machining" },
      { label: "Additive Manufacturing", href: "/applications#additive-manufacturing" },
      { label: "Battery Manufacturing", href: "/applications#battery-manufacturing" },
      { label: "Food Processing", href: "/applications#food-processing" },
      { label: "Pharmaceutical", href: "/applications#pharmaceutical" },
      { label: "General Maintenance", href: "/applications#general-maintenance" },
    ],
    footer: { label: "All applications", href: "/applications" },
  },
  Industries: {
    mega: true,
    sorted: true,
    links: [
      {
        label: "Pharmaceutical",
        href: "/industries/pharmaceutical",
        description: "Industry deep dive",
      },
      {
        label: "Battery Manufacturing",
        href: "/industries/battery",
        description: "Industry deep dive",
      },
      {
        label: "Food & Beverage",
        href: "/industries/food-beverage",
        description: "Industry deep dive",
      },
      {
        label: "Agriculture & Grain",
        href: "/industries/agriculture",
        description: "Industry deep dive",
      },
      {
        label: "Woodworking",
        href: "/industries/woodworking",
        description: "Industry deep dive",
      },
      {
        label: "Automotive",
        href: "/industries/automotive",
        description: "Industry deep dive",
      },
      {
        label: "Aerospace & Defense",
        href: "/industries/aerospace",
        description: "Industry deep dive",
      },
      {
        label: "Metalworking & Machining",
        href: "/industries/metalworking",
        description: "Industry deep dive",
      },
      {
        label: "Chemical Processing",
        href: "/industries/chemical",
        description: "Industry deep dive",
      },
      {
        label: "Coal & Power Generation",
        href: "/industries/coal",
        description: "Industry deep dive",
      },
      {
        label: "Data Centers",
        href: "/industries/data-centers",
        description: "Industry deep dive",
      },
      {
        label: "Foundries & Casting",
        href: "/industries/foundry",
        description: "Industry deep dive",
      },
      {
        label: "Abatement & Remediation",
        href: "/industries/abatement",
        description: "Industry deep dive",
      },
      {
        label: "Ammunition & Firearms",
        href: "/industries/ammunition",
        description: "Industry deep dive",
      },
      {
        label: "Semiconductor & Electronics",
        href: "/industries/electronics",
        description: "Industry deep dive",
      },
      {
        label: "Cleanrooms & Controlled Environments",
        href: "/industries/cleanrooms",
        description: "Industry deep dive",
      },
      {
        label: "Cosmetics & Personal Care",
        href: "/industries/cosmetics",
        description: "Industry deep dive",
      },
      {
        label: "Schools & Universities",
        href: "/industries/education",
        description: "Industry deep dive",
      },
      {
        label: "Biotechnology & Bioprocessing",
        href: "/industries/biotech",
        description: "Industry deep dive",
      },
      {
        label: "Recycling & Waste Processing",
        href: "/industries/recycling",
        description: "Industry deep dive",
      },
      {
        label: "Medical Device Manufacturing",
        href: "/industries/medical-devices",
        description: "Industry deep dive",
      },
      {
        label: "Mining & Minerals",
        href: "/industries/mining",
        description: "Industry deep dive",
      },
      {
        label: "Oil & Gas",
        href: "/industries/oil-gas",
        description: "Industry deep dive",
      },
      {
        label: "Additive Manufacturing",
        href: "/industries/additive-manufacturing",
        description: "Industry deep dive",
      },
      {
        label: "Glass & Ceramics",
        href: "/industries/glass-ceramics",
        description: "Industry deep dive",
      },
      {
        label: "Paints & Coatings",
        href: "/industries/paints-coatings",
        description: "Industry deep dive",
      },
      {
        label: "Cannabis & Hemp",
        href: "/industries/cannabis",
        description: "Industry deep dive",
      },
      {
        label: "Hydrogen & Fuel Cells",
        href: "/industries/hydrogen",
        description: "Industry deep dive",
      },
      {
        label: "Textiles & Fibers",
        href: "/industries/textile",
        description: "Industry deep dive",
      },
      {
        label: "Marine & Shipbuilding",
        href: "/industries/marine",
        description: "Industry deep dive",
      },
      {
        label: "Rail & Transit",
        href: "/industries/rail",
        description: "Industry deep dive",
      },
      {
        label: "Paper Mills & Converting",
        href: "/industries/paper-mills",
        description: "Industry deep dive",
      },
      {
        label: "Commercial Printing",
        href: "/industries/printing",
        description: "Industry deep dive",
      },
      {
        label: "Vacuum Furnace & Heat Treatment",
        href: "/industries/vacuum-furnace",
        description: "Industry deep dive",
      },
      {
        label: "Construction Materials",
        href: "/industries/construction-materials",
        description: "Industry deep dive",
      },
      {
        label: "Plastics & Rubber",
        href: "/industries/plastics-rubber",
        description: "Industry deep dive",
      },
      {
        label: "Power Generation",
        href: "/industries/energy",
        description: "Industry deep dive",
      },
      {
        label: "Paper & Packaging",
        href: "/industries/paper-packaging",
        description: "Industry deep dive",
      },
      ...INDUSTRY_DIRECTORY.filter((industry) => !industry.href)
        .slice(0, 9)
        .map((industry) => ({
          label: industry.name,
          href: "/industries#" + industry.slug,
        })),
    ],
    footer: { label: "All industries", href: "/industries" },
  },
  Materials: {
    mega: true,
    sorted: true,
    links: [
      {
        label: "Vermiculite",
        href: "/materials/vermiculite-dust",
        description: "Material guide",
      },
      {
        label: "Tea Dust",
        href: "/materials/tea-dust",
        description: "Material guide",
      },
      {
        label: "Calcium Dust",
        href: "/materials/calcium-dust",
        description: "Material guide",
      },
      {
        label: "Cadmium Dust",
        href: "/materials/cadmium-dust",
        description: "Material guide",
      },
      {
        label: "Beryllium Dust",
        href: "/materials/beryllium-dust",
        description: "Material guide",
      },
      {
        label: "Arsenic Dust",
        href: "/materials/arsenic-dust",
        description: "Material guide",
      },
      {
        label: "Brass & Bronze Dust",
        href: "/materials/brass-bronze-dust",
        description: "Material guide",
      },
      {
        label: "Malt Dust",
        href: "/materials/malt-dust",
        description: "Material guide",
      },
      {
        label: "Combustible Metal Dust",
        href: "/materials/combustible-metal-dust",
        description: "Material guide",
      },
      {
        label: "Starch Dust",
        href: "/materials/starch-dust",
        description: "Material guide",
      },
      {
        label: "Aluminum Dust",
        href: "/materials/aluminum-dust",
        description: "Severity, standards and safe recovery",
      },
      {
        label: "Titanium Dust",
        href: "/materials/titanium-dust",
        description: "Reactive metal — prevention by design",
      },
      {
        label: "Graphite Dust",
        href: "/materials/graphite-dust",
        description: "Combustible and conductive at once",
      },
      {
        label: "Wood Dust",
        href: "/materials/wood-dust",
        description: "The fugitive fraction is the gap",
      },
      {
        label: "Carbon Black",
        href: "/materials/carbon-black",
        description: "The collected bulk is the hazard",
      },
      {
        label: "Flour Dust",
        href: "/materials/flour-dust",
        description: "The archetypal combustible dust",
      },
      {
        label: "Grain Dust",
        href: "/materials/grain-dust",
        description: "Schedule below the action level",
      },
      {
        label: "Sugar Dust",
        href: "/materials/sugar-dust",
        description: "The 2008 lesson, engineered in",
      },
      ...MATERIAL_GROUPS.slice(0, 6).map((group) => ({
        label: group.name,
        href: "/materials#" + group.slug,
      })),
    ],
    footer: { label: "All dusts & materials", href: "/materials" },
  },
  Compliance: {
    columns: true,
    links: HAZARDOUS_LOCATION_TOPICS.map((topic) => ({
      label: topic.name,
      href: "/hazardous-locations/" + topic.slug,
      description: topic.eyebrow,
    })),
    footer: { label: "Classification overview", href: "/hazardous-locations" },
  },
  Resources: {
    columns: true,
    links: [
      ...GUIDE_ARTICLES.map((article) => ({
        label: article.name,
        href: "/guides/" + article.slug,
        description: article.minutes + " min read",
      })),
      ...RESOURCES.map((resource) => ({
        label: resource.title,
        href: "/resources/" + resource.slug,
        description: resource.minutes + " min read",
      })),
      {
        label: "Support & Manuals",
        href: "/support",
        description: "Model index and documentation",
      },
    ],
    footer: { label: "Knowledge Center", href: "/resources" },
  },
};
