import { FACTORY_LINES } from "@/lib/data/factory-lines";
import type { FlatModel } from "@/lib/data/product-models";

/**
 * Model specifications derived from the factory brochure corpus.
 *
 * WHERE THIS DATA COMES FROM
 *
 * src/lib/data/factory-lines.ts is generated from 410 factory brochures by
 * scripts/extract-brochures.py. It has been in the repo throughout and was
 * previously used only for a features list — the `sizes` array, which carries
 * real airflow, vacuum and air-watt figures, was never surfaced. That is why 46
 * model pages showed "See datasheet" for every performance field.
 *
 * WHAT THE DATA ACTUALLY SUPPORTS
 *
 * The decisive pattern: within a line, h2o / cfm / airwatts are constant per
 * POWER TIER and do not vary with tank size. AV1 is 180" H2O / 100 CFM at every
 * tank size; AV2 is 180" / 200. EV1 HEPA is 135" / 123 / 560 AW; EV2 is
 * 135" / 230. That matches certificate note 1 — "suffixes denote tank sizes
 * which do not have any impact on ratings" — and it is what performance
 * physically depends on: the motor or venturi, not the container.
 *
 * WHAT THAT MEANS FOR CLAIMS
 *
 * The catalogue names a model by tank size (EVX-15), not by power tier, so a
 * given catalogue entry cannot be resolved to one tier from its name alone.
 * Therefore:
 *
 *   - Tank capacity IS published per model. It is the number in the
 *     designation, and the certificate confirms suffixes are tank sizes.
 *   - Airflow and vacuum are published as the LINE RANGE, with the tier
 *     dependency stated, and the exact figure referred to the datasheet for
 *     the configuration. Assigning one tier's figure to a model whose tier is
 *     unknown would be inventing a specification.
 *   - Filtration and construction are published verbatim from the corpus,
 *     because they are stated identically across the line.
 *
 * When the client supplies per-model tier data, `TIER_BY_MODEL` below is the
 * one place to add it, and exact figures replace the ranges automatically.
 */

export type DerivedSpec = { label: string; value: string; note?: string };

/** Brochure line id backing each catalogue series. */
const LINE_FOR_SERIES: Record<string, string> = {
  avx: "avx",
  evx: "evx",
  ex1: "ex1",
  "av-ev": "av1",
};

/**
 * Per-model power tier, where known. EMPTY BY DESIGN — the catalogue does not
 * encode tier. Add entries here as the client confirms them and the affected
 * model pages switch from a range to an exact figure with no other change.
 */
const TIER_BY_MODEL: Record<string, string> = {};

type SizeRow = { model: string; h2o: string | null; cfm: string | null; airwatts: string | null };

function sizeRows(seriesId: string): SizeRow[] {
  const line = FACTORY_LINES[LINE_FOR_SERIES[seriesId] ?? ""];
  return (line?.sizes ?? []) as SizeRow[];
}

/** Distinct values for a field across a line, in ascending numeric order. */
function rangeOf(rows: SizeRow[], key: "h2o" | "cfm" | "airwatts"): string | null {
  const values = Array.from(
    new Set(rows.map((r) => r[key]).filter((v): v is string => Boolean(v))),
  ).sort((a, b) => Number(a) - Number(b));
  if (!values.length) return null;
  return values.length === 1 ? values[0] : `${values[0]}–${values.at(-1)}`;
}

/**
 * Nominal tank size from the model designation.
 *
 * "EX1-15 RCT HEPA" -> 15. "EVX-5-10 EX HEPA" -> 5–10, a two-size designation.
 * Sizes are US gallons; 55 is a standard drum, which is what fixes the unit.
 */
export function tankSizeOf(modelName: string): string | null {
  const m = modelName.match(/^[A-Z]+\d*-(\d+(?:-\d+)?)/);
  if (!m) return null;
  return m[1].replace("-", "–");
}

/** Filtration lines from the corpus, longest first — the fullest statement. */
function filtrationOf(seriesId: string): string[] {
  const line = FACTORY_LINES[LINE_FOR_SERIES[seriesId] ?? ""];
  return [...(line?.filtration ?? [])].sort((a, b) => b.length - a.length);
}

function featuresOf(seriesId: string): string[] {
  const line = FACTORY_LINES[LINE_FOR_SERIES[seriesId] ?? ""];
  return line?.features ?? [];
}

const CORPUS_NOTE = "From the factory brochure specification for this line.";
const TIER_NOTE =
  "Varies by motor/venturi configuration, not by tank size. Exact figure on the datasheet.";

/** Performance specs: exact where the tier is known, line range where it is not. */
export function performanceSpecs(model: FlatModel): DerivedSpec[] {
  const rows = sizeRows(model.seriesId);
  if (!rows.length) return [];

  const tier = TIER_BY_MODEL[model.name];
  const scoped = tier ? rows.filter((r) => r.model.startsWith(tier)) : rows;

  const airflow = rangeOf(scoped, "cfm");
  const vacuum = rangeOf(scoped, "h2o");
  const watts = rangeOf(scoped, "airwatts");
  const exact = Boolean(tier);
  const note = exact ? CORPUS_NOTE : TIER_NOTE;

  const specs: DerivedSpec[] = [];
  const tank = tankSizeOf(model.name);
  if (tank) {
    specs.push({
      label: "Tank capacity",
      value: `${tank} gal`,
      note: "From the model designation; suffixes denote tank size.",
    });
  }
  if (airflow) specs.push({ label: "Airflow", value: `${airflow} CFM`, note });
  if (vacuum) specs.push({ label: "Vacuum", value: `${vacuum}" H₂O`, note });
  if (watts) specs.push({ label: "Air watts", value: `${watts} AW`, note });
  return specs;
}

/** Filtration specs from the corpus. */
export function filtrationSpecs(model: FlatModel): DerivedSpec[] {
  const lines = filtrationOf(model.seriesId);
  if (!lines.length) return [];
  const hepa = lines.find((l) => /HEPA/i.test(l));
  const stages = lines.find((l) => /stage/i.test(l));
  const washable = lines.find((l) => /washable|reusable/i.test(l));
  const carbon = lines.find((l) => /carbon/i.test(l));
  const esd = lines.find((l) => /ESD|conductive/i.test(l));

  const specs: DerivedSpec[] = [];
  if (hepa && model.tags.includes("HEPA")) {
    specs.push({ label: "HEPA stage", value: hepa, note: CORPUS_NOTE });
  }
  if (stages) specs.push({ label: "Stages", value: stages });
  if (washable) specs.push({ label: "Filter media", value: washable });
  if (esd) specs.push({ label: "Static control", value: esd });
  if (carbon && model.tags.includes("ACF")) {
    specs.push({ label: "Vapour adsorption", value: carbon });
  }
  return specs;
}

/** Construction and capability statements from the corpus. */
export function constructionSpecs(model: FlatModel): DerivedSpec[] {
  const features = featuresOf(model.seriesId);
  const pick = (re: RegExp) => features.find((f) => re.test(f));
  const specs: DerivedSpec[] = [];

  const body = pick(/stainless steel construction/i);
  if (body) specs.push({ label: "Body", value: body });
  const cart = pick(/cart assembly/i);
  if (cart) specs.push({ label: "Cart", value: cart });
  const esd = pick(/static dissipating|ESD safe/i);
  if (esd) specs.push({ label: "Static", value: esd });
  const duty = pick(/continuously|overheat/i);
  if (duty) specs.push({ label: "Duty", value: duty });
  const supplied = pick(/complete with|hose and accessories/i);
  if (supplied) specs.push({ label: "Supplied with", value: supplied });
  return specs;
}

/** Whether any brochure-derived data exists for this model's line. */
export function hasDerivedSpecs(model: FlatModel): boolean {
  return sizeRows(model.seriesId).length > 0;
}

/** Headline motor/venturi claim for the line, used in the hero strip. */
export function powerHeadline(model: FlatModel): string | null {
  const features = featuresOf(model.seriesId);
  return features.find((f) => /Double (Motor|Venturi)|Peak Air Watts/i.test(f)) ?? null;
}
