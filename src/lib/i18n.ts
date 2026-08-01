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
];

/** Reciprocal hreflang map for an English path, or undefined if untranslated. */
export function pairedAlternates(enPath: string): Record<string, string> | undefined {
  const pair = LOCALE_PAIRS.find((p) => p.en === enPath);
  if (!pair) return undefined;
  return { "en-US": pair.en, "fr-CA": pair.fr };
}
