/**
 * UL 1203 / CSA certification facts — single source of truth.
 *
 * PRIMARY SOURCE: CSA Certificate of Compliance 70122393 (PDF supplied by the
 * client, August 2026). Where the certificate and verbal guidance differ, the
 * CERTIFICATE governs.
 *
 * CRITICAL: the certificate carries TWO DIFFERENT SCOPES. They are not
 * interchangeable and must never be merged into a single site-wide claim.
 *
 * Scope A — "Model EX 1-xx HEPA (Drum Type)"
 * Class I, Gp. D; Class II, Gps. E, F and G; Temp. Code T3C
 *
 * Scope B — "EV1-1 EX HEPA (canister)", "EV1-xx EX HEPA", "EV2-xx EX HEPA"
 * Class II, Div. 2, Gps. F and G ONLY
 * -> no Class I, no Division 1, no Group E, no temperature code stated
 *
 * The site previously applied Scope A to every certified model, which
 * overstated the EV line on three counts at once. Group E is the conductive
 * metal-dust group, so that error mattered most in exactly the applications
 * PrestiVac markets to hardest (metalworking, aerospace, battery).
 */

export const UL1203 = {
  standard: "UL 1203",
  edition: "5th Edition",
  fullTitle:
    "Explosion-Proof and Dust-Ignition-Proof Electrical Equipment for use in Hazardous (Classified) Locations",
  issuer: "CSA",
  issuerLong: "CSA Group",
  certificateNumber: "70122393",
  masterContract: "268761",
  project: "70187735",
  dateIssued: "2018-07-18",
  /** Product classes named on the certificate. */
  productClasses: [
    "C161801 — Cleaning Machines, For Hazardous Locations",
    "C161881 — Cleaning Machines, For Hazardous Locations, Certified to US Standards",
  ],
  /** Marking eligibility, verbatim in substance from the certificate. */
  markNote:
    "Eligible to bear the CSA Mark with adjacent indicators 'C' and 'US' for Canada and US, or 'US' for US only, or without either indicator for Canada only.",
  useLimitation: "Commercial, indoor use only, in hazardous locations.",
} as const;

/** Scope A — the EX1 HEPA drum-type line. */
export const SCOPE_EX1 = {
  id: "ex1",
  certificateWording: "Dry Vacuum Cleaner, Model EX 1-xx HEPA (Drum Type)",
  electrical: "120V, 60Hz, 10A, 1000W, cord-connected, grounded",
  lines: [
    "Class I, Group D",
    "Class II, Groups E, F and G",
    "Temperature Code T3C",
  ],
  summary: "Class I, Gp. D; Class II, Gps. E, F and G; Temp. Code T3C",
  coversClassI: true,
  coversGroupE: true,
  temperatureCode: "T3C",
} as const;

/**
 * Scope B — the EV EX HEPA line.
 *
 * Narrower than Scope A in three separate ways. Do not add Class I,
 * Division 1 or Group E here without a revised certificate.
 */
export const SCOPE_EV = {
  id: "ev",
  certificateWording:
    "Dry Vacuum Cleaner, models EV1-1 EX HEPA (canister type), EV1-xx EX HEPA (Drum Type) and EV2-xx EX HEPA (Drum Type)",
  electrical:
    "EV1: 120V, 60Hz, 8A, 1020W. EV2: 120V, 60Hz, 16A, 2040W. Cord-connected, grounded",
  lines: ["Class II, Division 2, Groups F and G"],
  summary: "Cl. II, Div. 2, Gps. F and G",
  coversClassI: false,
  coversGroupE: false,
  temperatureCode: null,
} as const;

export type CertScope = typeof SCOPE_EX1 | typeof SCOPE_EV;

/**
 * Standards the certificate was assessed against, verbatim from the
 * APPLICABLE REQUIREMENTS page.
 */
export const APPLICABLE_REQUIREMENTS = [
  { ref: "CSA C22.2 No. 25 – 1966", title: "Enclosures for Use in Class II, Groups E, F and G Hazardous Locations" },
  { ref: "CSA C22.2 No. 30 – M1986", title: "Explosion-proof Enclosures for use in Class I Hazardous Locations" },
  { ref: "CSA C22.2 No. 213 -17", title: "Nonincendive Electrical Equipment for use in Class I and II, Division 2 and Class III, Divisions 1 and 2 Hazardous (Classified) Locations" },
  { ref: "CSA C22.2 No. 243-15", title: "Vacuum Cleaners, Blower Cleaners and Household Floor Finishing Machines" },
  { ref: "UL 1203 (5th Edition)", title: "Explosion-proof and Dust-Ignition-Proof Electrical Equipment for use in Hazardous (Classified) Locations" },
  { ref: "ANSI/UL STD. 1017 (9th Edition)", title: "Vacuum Cleaners, Blower Cleaners and Household Floor Finishing Machines" },
  { ref: "ANSI/ISA – 12.12.01 -2015", title: "Nonincendive Electrical Equipment for use in Class I and II, Division 2 and Class III, Divisions 1 and 2 Hazardous (Classified) Locations" },
] as const;

/**
 * Conditions of the certified configuration.
 *
 * The first two are notes printed on the certificate itself. The remainder
 * were confirmed by the technical department in writing.
 */
export const UL1203_CONDITIONS = [
  {
    title: "Attachment plug",
    detail:
      "The attachment plug is installed by the end user and must itself be certified and suitably rated for the hazardous location the vacuum is installed in. (Certificate note 2.)",
    source: "certificate",
  },
  {
    title: "Use limitation",
    detail: "Commercial, indoor use only, in hazardous locations. (Certificate.)",
    source: "certificate",
  },
  {
    title: "Grounding and bonding",
    detail:
      "Cord-connected and grounded. Grounded and bonded in accordance with the National Electrical Code, Article 250.",
    source: "technical department",
  },
  {
    title: "Hoses",
    detail: "Static-dissipating hose is required.",
    source: "technical department",
  },
  {
    title: "Filters",
    detail: "Static-dissipating filters are required.",
    source: "technical department",
  },
  {
    title: "Hoses and tools",
    detail:
      "Only PrestiVac-supplied hoses and tools maintain the certified configuration. Substituting third-party hoses or tools takes the unit outside the scope of the listing.",
    source: "technical department",
  },
] as const;

/**
 * Certificate note 1: "Suffixes denote tank sizes which do not have any impact
 * on Hazardous location ratings." This is why tank-size variants within a
 * covered family share the family's scope.
 */
export const TANK_SIZE_NOTE =
  "Suffixes denote tank sizes and do not affect hazardous location ratings.";

export const UL1203_CERTIFIES =
  "That the vacuum may be used in hazardous (classified) locations within the classes, divisions, groups and temperature code named on the certificate for that model family — and no further.";

export const UL1203_NOT_CERTIFIED =
  "Anything else. The listing is not a general fitness-for-purpose claim, not a performance rating, and not a statement about materials or conditions outside the named scope. Suitability for a specific application still depends on the material, the area classification assigned by your engineer, and correct installation and maintenance.";

/**
 * Model-to-scope mapping.
 *
 * Model membership follows the technical department's written confirmation
 * (they are the manufacturer and know which catalogue name corresponds to
 * which certified family). SCOPE follows the certificate, because the verbal
 * guidance stated Scope A for everything and the certificate does not support
 * that for the EV line.
 */
const EX1_MODELS = [
  "EX1-5 HEPA",
  "EX1-5 RCT IS HEPA",
  "EX1-5-10 MR HEPA",
  "EX1-10 HEPA",
  "EX1-15 HEPA",
  "EX1-15 MR HEPA",
  "EX1-15 RCT",
  "EX1-15 RCT HEPA",
  "EX1-20 RCT HEPA",
  "EX1-25 RCT HEPA",
  "EX1-55 HEPA",
] as const;

const EV_MODELS = [
  "EVX-5 EX HEPA",
  "EVX-5 EX RCT IS HEPA",
  "EVX-5-10 EX HEPA",
  "EVX-5-10 EX MR HEPA",
  "EVX-10 EX HEPA",
  "EVX-10 EX RCT HEPA",
  "EVX-15 EX",
  "EVX-15 EX HEPA",
  "EVX-15 EX MR HEPA",
  "EVX-20 EX RCT HEPA",
  "EVX-25 EX RCT HEPA",
  "EVX-55 EX HEPA",
] as const;

/**
 * All EVX and EX1 catalogue models now carry HEPA and are covered.
 *
 * Two catalogue entries were NOT renamed, because adding HEPA would have
 * produced a duplicate display name against an existing distinct product with
 * its own photograph:
 * - "EVX-15 EX" (evx-15-ex.jpg) vs existing "EVX-15 EX HEPA" (evx-15-ex-hepa.jpg)
 * - "EX1-15 RCT" (ex1-15-rct.jpg) vs existing "EX1-15 RCT HEPA" (ex1-15-rct-hepa.jpg)
 * Both are certified either way; only their display names are unresolved. They
 * are either duplicate photographs of one unit (merge) or genuinely distinct
 * variants (leave as-is). Pending confirmation.
 */
export const UL1203_NOT_COVERED: readonly string[] = [] as const;

const SCOPE_BY_MODEL = new Map<string, CertScope>([
  ...EX1_MODELS.map((m) => [m, SCOPE_EX1] as [string, CertScope]),
  ...EV_MODELS.map((m) => [m, SCOPE_EV] as [string, CertScope]),
]);

export const UL1203_CERTIFIED_MODELS: readonly string[] = [
  ...EX1_MODELS,
  ...EV_MODELS,
];

/**
 * The AVX series is air-operated with no electrical components. UL 1203 covers
 * electrical equipment, and the technical department confirmed there is no NRTL
 * certificate for these models. They therefore carry no certification claim.
 */
export const UL1203_EXCLUDES_PNEUMATIC = true;

export function isUL1203Certified(modelName: string): boolean {
  return SCOPE_BY_MODEL.has(modelName);
}

export function scopeForModel(modelName: string): CertScope | undefined {
  return SCOPE_BY_MODEL.get(modelName);
}

/**
 * Canonical scope sentence. Use this rather than restating scope in page copy.
 *
 * Note the certificate states NO division for Scope A — it reads "Class I,
 * Gp. D; Cl. II, Gps. E, F and G; Temp. Code T3C". Adding "Divisions 1 & 2"
 * would be an addition to the document, so it is not made here. Scope B does
 * state its division explicitly, and that is quoted.
 */
export const UL1203_SCOPE_SUMMARY = `PrestiVac's listing is CSA Certificate ${UL1203.certificateNumber} (Master Contract ${UL1203.masterContract}), assessed against ${UL1203.standard} (${UL1203.edition}) among other standards. It carries two distinct scopes: the EX1 HEPA drum-type line is covered for ${SCOPE_EX1.summary}; the EV EX HEPA line is covered for ${SCOPE_EV.summary}. The EV scope is narrower — no Class I, Division 2 only, and Groups F and G only, which excludes Group E conductive metal dusts. ${UL1203.useLimitation}`;

/** Short form for equipment notes on standards pages. */
export const UL1203_EQUIPMENT_NOTE = `Our listing is CSA Certificate ${UL1203.certificateNumber}. The EX1 HEPA line is covered for ${SCOPE_EX1.summary}; the EV EX HEPA line for ${SCOPE_EV.summary} only. Certified equipment does not by itself make a facility compliant with any standard or regulation.`;

/**
 * The air-operated AVX line holds NO NRTL certificate — confirmed by the
 * technical department in writing, August 2026. No certification, compliance
 * or conformity claim may be made for it. The honest and stronger argument is
 * the physical one: no electrical components, therefore no electrical ignition
 * source to enclose or certify.
 */
export const PNEUMATIC_NO_CERTIFICATE_NOTE =
  "The air-operated AVX line holds no NRTL certification. UL 1203 covers electrical equipment, and these units contain no electrical components — the ignition-source question is answered by their construction rather than by an enclosure listing. We do not claim UL, CSA, ATEX or IECEx approval for them.";
