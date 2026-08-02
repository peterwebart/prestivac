/**
 * Translation readiness.
 *
 * The site is being prepared for translation but MUST NOT be translated until
 * PrestiVac approves the English content. This module centralises locale
 * configuration so the eventual rollout is a wiring exercise rather than a
 * content hunt.
 *
 * What is already in place:
 *  - All page copy lives in `src/lib/data/**` (guides, materials, industries,
 *    applications, FAQ, compliance topics) rather than being scattered through
 *    components, so a translator receives structured files, not JSX.
 *  - `<html lang>` is driven from DEFAULT_LOCALE below.
 *  - `localeAlternates()` emits the hreflang map for page metadata.
 *
 * Québec French (fr-CA) is enabled. Translation is being rolled out in phases:
 * the commercial pages are live under /fr, and the knowledge base (material,
 * application, industry and compliance guides) follows.
 *
 * Québec terminology notes for translators:
 *  - "soumission" for a quote, NOT the France-French "devis".
 *  - "aspirateur antidéflagrant" for explosion-proof vacuum — this is also the
 *    search term with demand behind it.
 *  - "poussières combustibles", "liquides inflammables", "emplacements dangereux".
 */

export type Locale = {
  /** BCP 47 tag used for <html lang> and hreflang. */
  code: string;
  label: string;
  /** URL prefix. Empty string for the default locale (no prefix). */
  prefix: string;
  /** Only enabled locales are advertised in hreflang or routed. */
  enabled: boolean;
};

export const LOCALES: Locale[] = [
  { code: "en-US", label: "English", prefix: "", enabled: true },
  { code: "fr-CA", label: "Français", prefix: "/fr", enabled: true },
];

export const DEFAULT_LOCALE = LOCALES[0];

export const ENABLED_LOCALES = LOCALES.filter((locale) => locale.enabled);

/** True while only one locale is live — translation has not launched yet. */
export const IS_SINGLE_LOCALE = ENABLED_LOCALES.length <= 1;

/**
 * hreflang alternates for a given path. Returns undefined while only one locale
 * is enabled, so no premature hreflang tags are emitted.
 */
export function localeAlternates(path: string): Record<string, string> | undefined {
  if (IS_SINGLE_LOCALE) return undefined;
  return Object.fromEntries(
    ENABLED_LOCALES.map((locale) => [locale.code, `${locale.prefix}${path === "/" ? "" : path}` || "/"]),
  );
}


/**
 * English <-> Québec French page pairs.
 *
 * hreflang must be reciprocal: Google largely ignores a one-way declaration, so
 * every French page that names an English counterpart must be named back. Keeping
 * the pairs in one place is what stops the two sides drifting.
 */
export const LOCALE_PAIRS: { en: string; fr: string }[] = [
  { en: "/", fr: "/fr" },
  { en: "/products/explosion-proof-vacuums", fr: "/fr/aspirateurs-antideflagrants" },
  { en: "/get-a-quote", fr: "/fr/demande-de-soumission" },
  { en: "/about", fr: "/fr/a-propos" },
  { en: "/materials", fr: "/fr/poussieres-et-matieres" },
  { en: "/materials/starch-dust", fr: "/fr/poussieres-et-matieres/poussiere-d-amidon" },
  { en: "/materials/flour-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-farine" },
  { en: "/materials/aluminum-dust", fr: "/fr/poussieres-et-matieres/poussiere-d-aluminium" },
  { en: "/materials/cadmium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-cadmium" },
  { en: "/materials/sulfur-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-soufre" },
  { en: "/materials/silica-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-silice" },
  { en: "/materials/combustible-metal-dust", fr: "/fr/poussieres-et-matieres/poussiere-metallique-combustible" },
  { en: "/materials/wood-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-bois" },
  { en: "/materials/iron-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-fer-et-d-acier" },
  { en: "/materials/copper-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-cuivre" },
  { en: "/materials/coal-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-charbon" },
  { en: "/materials/titanium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-titane" },
  { en: "/materials/magnesium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-magnesium" },
  { en: "/materials/lead-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-plomb" },
  { en: "/materials/sugar-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-sucre" },
  { en: "/materials/grain-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-grain" },
  { en: "/materials/concrete-cement-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-beton-et-de-ciment" },
  { en: "/materials/zinc-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-zinc" },
  { en: "/materials/rubber-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-caoutchouc" },
  { en: "/materials/coke-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-coke" },
  { en: "/materials/carbon-black", fr: "/fr/poussieres-et-matieres/poussiere-de-noir-de-carbone" },
  { en: "/materials/coffee-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-cafe" },
  { en: "/materials/graphite-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-graphite" },
  { en: "/materials/tobacco-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-tabac" },
  { en: "/materials/chromium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-chrome" },
  { en: "/materials/nickel-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-nickel" },
  { en: "/materials/cotton-wool-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-coton" },
  { en: "/materials/zirconium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-zirconium" },
  { en: "/materials/lithium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-lithium" },
  { en: "/materials/cork-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-liege" },
  { en: "/materials/paper-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-papier" },
  { en: "/materials/leather-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-cuir" },
  { en: "/materials/cocoa-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-cacao" },
  { en: "/materials/asbestos", fr: "/fr/poussieres-et-matieres/amiante" },
  { en: "/materials/vermiculite-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-vermiculite" },
  { en: "/materials/beryllium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-beryllium" },
  { en: "/materials/carbon-fiber-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-fibre-de-carbone" },
  { en: "/materials/corn-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-mais" },
  { en: "/materials/tin-dust", fr: "/fr/poussieres-et-matieres/poussiere-d-etain" },
  { en: "/materials/cobalt-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-cobalt" },
  { en: "/materials/manganese-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-manganese" },
  { en: "/materials/plastic-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-plastique" },
  { en: "/materials/calcium-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-calcium" },
  { en: "/materials/arsenic-dust", fr: "/fr/poussieres-et-matieres/poussiere-d-arsenic" },
  { en: "/materials/brass-bronze-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-laiton-et-de-bronze" },
  { en: "/materials/tea-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-the" },
  { en: "/materials/malt-dust", fr: "/fr/poussieres-et-matieres/poussiere-de-malt" },
  { en: "/applications", fr: "/fr/applications" },
  { en: "/applications/welding-cleanup", fr: "/fr/applications/nettoyage-de-soudage" },
  { en: "/applications/grinding-dust", fr: "/fr/applications/poussiere-de-meulage" },
  { en: "/applications/sanding", fr: "/fr/applications/poncage" },
  { en: "/applications/cnc-machining", fr: "/fr/applications/usinage-cnc" },
  { en: "/applications/powder-coating", fr: "/fr/applications/thermolaquage" },
  { en: "/applications/abrasive-blasting", fr: "/fr/applications/decapage-abrasif" },
  { en: "/applications/deburring", fr: "/fr/applications/ebavurage" },
  { en: "/applications/silo-cleaning", fr: "/fr/applications/nettoyage-de-silo" },
  { en: "/applications/spill-cleanup", fr: "/fr/applications/nettoyage-de-deversements" },
  { en: "/applications/bagging-dumping", fr: "/fr/applications/ensachage-et-vidage-de-sacs" },
  { en: "/applications/cleanroom-vacuuming", fr: "/fr/applications/nettoyage-de-salle-blanche" },
  { en: "/applications/conveyor-housekeeping", fr: "/fr/applications/entretien-des-convoyeurs" },
  { en: "/applications/drum-filling", fr: "/fr/applications/remplissage-de-futs" },
  { en: "/applications/dust-collector-cleaning", fr: "/fr/applications/nettoyage-de-depoussiereur" },
  { en: "/applications/metal-3d-printing", fr: "/fr/applications/impression-3d-metal" },
  { en: "/applications/mixing-blending", fr: "/fr/applications/melange-et-malaxage" },
  { en: "/applications/tank-cleaning", fr: "/fr/applications/nettoyage-de-reservoirs" },
  { en: "/applications/thermal-spray", fr: "/fr/applications/projection-thermique" },
  { en: "/applications/warehouse-housekeeping", fr: "/fr/applications/entretien-d-entrepot" },
  { en: "/industries", fr: "/fr/industries" },
  { en: "/industries/foundry", fr: "/fr/industries/fonderie" },
  { en: "/industries/aerospace", fr: "/fr/industries/aerospatiale" },
  { en: "/industries/food-beverage", fr: "/fr/industries/agroalimentaire" },
  { en: "/industries/automotive", fr: "/fr/industries/automobile" },
  { en: "/industries/pharmaceutical", fr: "/fr/industries/pharmaceutique" },
  { en: "/industries/woodworking", fr: "/fr/industries/travail-du-bois" },
  { en: "/industries/metalworking", fr: "/fr/industries/travail-des-metaux" },
  { en: "/industries/chemical", fr: "/fr/industries/chimie" },
  { en: "/industries/battery", fr: "/fr/industries/batterie" },
  { en: "/industries/electronics", fr: "/fr/industries/electronique" },
  { en: "/industries/mining", fr: "/fr/industries/mines-et-mineraux" },
  { en: "/industries/energy", fr: "/fr/industries/energie" },
  { en: "/industries/oil-gas", fr: "/fr/industries/petrole-et-gaz" },
  { en: "/industries/paper-mills", fr: "/fr/industries/papeteries" },
  { en: "/industries/paper-packaging", fr: "/fr/industries/papier-et-emballage" },
  { en: "/industries/plastics-rubber", fr: "/fr/industries/plastiques-et-caoutchouc" },
  { en: "/industries/printing", fr: "/fr/industries/imprimerie" },
  { en: "/industries/recycling", fr: "/fr/industries/recyclage" },
  { en: "/industries/textile", fr: "/fr/industries/textile" },
  { en: "/industries/construction-materials", fr: "/fr/industries/materiaux-de-construction" },
  { en: "/industries/glass-ceramics", fr: "/fr/industries/verre-et-ceramique" },
  { en: "/industries/agriculture", fr: "/fr/industries/agriculture" },
  { en: "/industries/cannabis", fr: "/fr/industries/cannabis" },
  { en: "/industries/cosmetics", fr: "/fr/industries/cosmetiques" },
  { en: "/industries/abatement", fr: "/fr/industries/desamiantage-et-decontamination" },
  { en: "/industries/additive-manufacturing", fr: "/fr/industries/fabrication-additive" },
  { en: "/industries/cleanrooms", fr: "/fr/industries/salles-blanches" },
  { en: "/industries/data-centers", fr: "/fr/industries/centres-de-donnees" },
  { en: "/industries/medical-devices", fr: "/fr/industries/dispositifs-medicaux" },
  { en: "/industries/biotech", fr: "/fr/industries/biotechnologie" },
  { en: "/industries/hydrogen", fr: "/fr/industries/hydrogene" },
];

/** Reciprocal hreflang map for an English path, or undefined if untranslated. */
export function pairedAlternates(enPath: string): Record<string, string> | undefined {
  const pair = LOCALE_PAIRS.find((p) => p.en === enPath);
  if (!pair) return undefined;
  return { "en-US": pair.en, "fr-CA": pair.fr };
}
