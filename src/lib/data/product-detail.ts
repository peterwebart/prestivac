import {
  SCOPE_EV,
  SCOPE_EX1,
  UL1203,
  UL1203_CONDITIONS,
  scopeForModel,
  type CertScope,
} from "@/lib/data/certification";
import { CASE_STUDY_LIBRARY } from "@/lib/data/case-study-library";
import { FEATURED_MATERIALS } from "@/lib/data/materials";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import {
  constructionSpecs,
  filtrationSpecs,
  performanceSpecs,
  tankSizeOf,
} from "@/lib/data/model-specs";
import { ALL_MODELS, seriesModels, type FlatModel } from "@/lib/data/product-models";

/**
 * Derived product-detail data.
 *
 * WHAT THIS DELIBERATELY DOES NOT CONTAIN
 *
 * The approved design shows a specification strip (airflow, motor power, noise,
 * weight, voltage) and certification badges for ATEX, IECEx, UL, FDA and GMP.
 * None of that is available or true for PrestiVac:
 *
 * - No performance figures are published for any model. `ProductModel` carries
 *   name, image and configuration tags, and nothing else. The datasheets are
 *   still outstanding from the client.
 * - The technical department confirmed in writing that PrestiVac holds NO ATEX
 *   or IECEx approval, and the AVX line holds no NRTL certificate at all.
 * - There are no FDA or GMP certifications.
 *
 * So every specification here is either derived from data that genuinely
 * exists, or rendered as an explicit "from the datasheet" state. Nothing is
 * invented. When the datasheets arrive, populate SPECIFICATIONS below and the
 * page fills in with no template changes.
 */

/* -------------------------------------------------------------------------- */
/* Configuration tags                                                          */
/* -------------------------------------------------------------------------- */

export type TagInfo = { code: string; label: string; detail: string };

/**
 * Only EX and HEPA carry a defined engineering meaning we can state. The
 * remaining suffixes are configuration codes whose precise definitions live in
 * the factory datasheet, so they are shown as codes rather than glossed with a
 * guess.
 */
export const TAG_INFO: Record<string, TagInfo> = {
  EX: {
    code: "EX",
    label: "Explosion-proof construction",
    detail:
      "Built for use in hazardous (classified) locations. Whether a specific unit is within the CSA listing is stated per model.",
  },
  HEPA: {
    code: "HEPA",
    label: "HEPA filtration",
    detail:
      "Tested to EN 1822 (H14 by MPPS method). Retains the fine fraction rather than exhausting it back into the room.",
  },
  RCT: {
    code: "RCT",
    label: "Removable Collection Tank",
    detail:
      "The container detaches for removal and emptying, so collected material leaves the area without a second dispersal event.",
  },
  IS: {
    code: "IS",
    label: "Immersion Separation",
    detail:
      "Material is drawn into a liquid bath and wetted on capture, so it never exists as a dry dispersed cloud inside the unit. Suitability depends on whether the material can be safely wetted.",
  },
  MR: {
    code: "MR",
    label: "Configuration option",
    detail: "Configuration suffix. Definition and specifications come from the model datasheet.",
  },
  TT: {
    code: "TT",
    label: "Configuration option",
    detail: "Configuration suffix. Definition and specifications come from the model datasheet.",
  },
};

/* -------------------------------------------------------------------------- */
/* Specifications                                                              */
/* -------------------------------------------------------------------------- */

export type SpecValue = { label: string; value: string; note?: string };
export type SpecGroup = { id: string; heading: string; specs: SpecValue[] };

/**
 * Per-model specifications, keyed by model name.
 *
 * EMPTY BY DESIGN. Airflow, vacuum, motor, dimensions, filter area and noise
 * are not published for any PrestiVac model. Populate this from the datasheets
 * when they arrive; the template renders whatever is present and shows an
 * honest "available from the datasheet" state for whatever is not.
 *
 * Do not fill this with estimates.
 */
export const SPECIFICATIONS: Record<string, SpecGroup[]> = {};

/** Electrical ratings ARE known, from the CSA certificate, per certified family. */
const CERTIFICATE_ELECTRICAL: Record<string, string> = {
  ex1: SCOPE_EX1.electrical,
  evx: SCOPE_EV.electrical,
};

/**
 * Specification groups for a model: whatever is genuinely known, plus the
 * groups that exist but are awaiting datasheet figures.
 */
export function specGroupsFor(model: FlatModel): SpecGroup[] {
  const supplied = SPECIFICATIONS[model.name];
  if (supplied?.length) return supplied;

  const scope = scopeForModel(model.name);
  const electrical = CERTIFICATE_ELECTRICAL[model.seriesId];

  const groups: SpecGroup[] = [
    {
      id: "construction",
      heading: "Construction & configuration",
      specs: [
        { label: "Series", value: model.seriesName },
        { label: "Power source", value: powerSourceOf(model) },
        {
          label: "Configuration",
          value: model.tags.length ? model.tags.join(" · ") : "Standard",
        },
        ...constructionSpecs(model),
      ],
    },
    {
      id: "filtration",
      heading: "Filtration",
      specs: [
        ...filtrationSpecs(model),
        ...(scope
          ? [
              {
                label: "Required media",
                value: "Static-dissipating filters, per the certified configuration",
              },
            ]
          : []),
        { label: "Filter area", value: "See datasheet" },
      ],
    },
  ];

  if (electrical) {
    groups.push({
      id: "electrical",
      heading: "Electrical",
      specs: [
        { label: "Rating", value: electrical, note: `From CSA Certificate ${UL1203.certificateNumber}` },
        { label: "Connection", value: "Cord-connected, grounded" },
        {
          label: "Attachment plug",
          value: "Installed by the end user; must be certified and rated for the location",
          note: "Certificate note 2",
        },
      ],
    });
  }

  const derivedPerformance = performanceSpecs(model);
  groups.push({
    id: "performance",
    heading: "Performance",
    specs: derivedPerformance.length
      ? [
          ...derivedPerformance,
          { label: "Weight & dimensions", value: "See datasheet" },
        ]
      : [
          { label: "Airflow", value: "See datasheet" },
          { label: "Vacuum", value: "See datasheet" },
          { label: "Tank capacity", value: "See datasheet" },
          { label: "Weight & dimensions", value: "See datasheet" },
        ],
  });

  if (scope) {
    groups.push({
      id: "compliance",
      heading: "Certification & compliance",
      specs: [
        {
          label: "Standard",
          value: `${UL1203.standard} (${UL1203.edition})`,
        },
        { label: "Certifying body", value: UL1203.issuerLong },
        { label: "Certificate", value: UL1203.certificateNumber },
        { label: "Scope", value: scope.summary },
        { label: "Use limitation", value: UL1203.useLimitation },
        ...UL1203_CONDITIONS.map((c) => ({ label: c.title, value: c.detail })),
      ],
    });
  }

  return groups;
}

/** Headline strip values — only what is genuinely known. */
export function quickSpecsFor(model: FlatModel): SpecValue[] {
  const scope = scopeForModel(model.name);
  return [
    { label: "Series", value: model.seriesName },
    { label: "Power source", value: powerSourceOf(model) },
    {
      label: "Tank capacity",
      value: tankSizeOf(model.name) ? `${tankSizeOf(model.name)} gal` : "See datasheet",
    },
    {
      label: "Airflow",
      value: performanceSpecs(model).find((x) => x.label === "Airflow")?.value ?? "See datasheet",
    },
    {
      label: "Filtration",
      value: model.tags.includes("HEPA") ? "HEPA 99.995% @ 0.3 µm" : "See datasheet",
    },
    {
      label: "Certification",
      value: scope ? `${UL1203.standard} — ${UL1203.issuer}` : "Not within the UL 1203 listing",
    },
    { label: "Construction", value: "Stainless steel" },
    {
      label: "Hazardous location scope",
      value: scope ? scope.summary : "See certification section",
    },
  ];
}

export function powerSourceOf(model: FlatModel): string {
  if (model.seriesId === "avx" || model.name.startsWith("AV")) {
    return "Compressed air — no electrical components";
  }
  return "Electric";
}

/* -------------------------------------------------------------------------- */
/* Material compatibility                                                      */
/* -------------------------------------------------------------------------- */

export type MaterialFit = {
  slug: string;
  name: string;
  /** Class II group this material family sits in. */
  group: "E" | "F" | "G" | "n/a";
  /** Whether the model's certified scope covers that group. */
  covered: "covered" | "not-covered" | "no-listing";
  note: string;
};

/**
 * Class II group by material.
 *
 * This is the one compatibility statement that can be made truthfully, because
 * it follows from the certificate rather than from a performance judgement:
 * Group E is conductive metal dust and is inside the EX1 scope only; Groups F
 * and G are inside both scopes. It is a SCOPE statement, not a safety
 * clearance — the page says so explicitly.
 *
 * Anything not listed here is treated as unknown rather than assumed.
 */
const GROUP_E = new Set([
  "aluminum-dust", "magnesium-dust", "titanium-dust", "zirconium-dust", "iron-dust",
  "copper-dust", "zinc-dust", "nickel-dust", "chromium-dust", "cobalt-dust",
  "manganese-dust", "tin-dust", "lithium-dust", "brass-bronze-dust", "cadmium-dust",
  "beryllium-dust", "calcium-dust", "combustible-metal-dust",
  "metal-additive-manufacturing-powder", "battery-black-mass",
]);
const GROUP_F = new Set([
  "coal-dust", "carbon-black", "coke-dust", "graphite-dust", "activated-carbon",
  "conductive-carbon",
]);
const NON_COMBUSTIBLE = new Set([
  "potash-dust", "phosphate-dust", "silica-dust", "asbestos", "vermiculite-dust",
  "concrete-cement-dust",
]);

export function groupFor(slug: string): MaterialFit["group"] {
  if (GROUP_E.has(slug)) return "E";
  if (GROUP_F.has(slug)) return "F";
  if (NON_COMBUSTIBLE.has(slug)) return "n/a";
  return "G";
}

export function materialFitFor(model: FlatModel, limit = 12): MaterialFit[] {
  const scope = scopeForModel(model.name);
  return FEATURED_MATERIALS.slice(0, limit).map((material) => {
    const group = groupFor(material.slug);
    let covered: MaterialFit["covered"];
    let note: string;

    if (!scope) {
      covered = "no-listing";
      note =
        "This model is not within the UL 1203 listing. Suitability for a classified area must be established against your own area classification.";
    } else if (group === "n/a") {
      covered = "covered";
      note = "Not a combustible dust. Recovery is a filtration and exposure question rather than a classification one.";
    } else if (group === "E") {
      covered = scope.coversGroupE ? "covered" : "not-covered";
      note = scope.coversGroupE
        ? "Group E conductive metal dust is within this model's certified scope."
        : "Group E is NOT within this model's certified scope. The EX1 HEPA line carries Group E coverage.";
    } else {
      covered = "covered";
      note = `Group ${group} is within this model's certified scope.`;
    }
    return { slug: material.slug, name: material.name, group, covered, note };
  });
}

/* -------------------------------------------------------------------------- */
/* Relationships                                                               */
/* -------------------------------------------------------------------------- */

/** Accessories are a real series in the lineup. */
export function accessoriesFor(): FlatModel[] {
  return seriesModels("accessories");
}

/** Comparable models: same series, excluding this one. */
export function comparableTo(model: FlatModel, limit = 4): FlatModel[] {
  return seriesModels(model.seriesId)
    .filter((m) => m.slug !== model.slug)
    .slice(0, limit);
}

/** Case studies whose material group matches what this model's scope covers. */
export function caseStudiesFor(model: FlatModel, limit = 3) {
  const scope = scopeForModel(model.name);
  const preferMetal = Boolean(scope?.coversGroupE);
  const scored = CASE_STUDY_LIBRARY.map((study) => {
    const hay =
      `${study.title} ${study.taxonomy.material} ${study.taxonomy.industry} ${study.taxonomy.hazard}`.toLowerCase();
    const metal = /alumin|titan|magnes|metal|foundry|steel|battery/.test(hay);
    return { study, score: metal === preferMetal ? 1 : 0 };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.study);
}

export function categoryFor(model: FlatModel) {
  return PRODUCT_CATEGORIES.find((c) => "/products/" + c.slug === model.categoryHref);
}

export function scopeOf(model: FlatModel): CertScope | undefined {
  return scopeForModel(model.name);
}

export { ALL_MODELS, SCOPE_EV, SCOPE_EX1, UL1203 };
