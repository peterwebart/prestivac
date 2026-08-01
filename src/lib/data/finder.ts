import { getCategory, type ProductCategory } from "@/lib/data/product-categories";
import { ALL_MODELS, type FlatModel } from "@/lib/data/product-models";

/**
 * Solution finder — five questions, with branching.
 *
 * Family mapping confirmed by PrestiVac:
 *   AV  = the AV models inside the AV & EV series (air-operated)
 *   EV  = the EV models inside the AV & EV series (electric)
 *   EX1 = the EX1 series
 *   EX  = the explosion-proof family: AVX, EVX and EX1 together
 *   CDV = Continuous Duty Vacuum — not yet in the lineup; the heavy-duty branch
 *         notes it for non-metal applications and falls back to the EX family
 *         until those models are added.
 */

export type FinderStepId = "phase" | "metals" | "capacity" | "air" | "hours";

export type FinderAnswers = Partial<Record<FinderStepId, string>>;

export type FinderStep = {
  id: FinderStepId;
  question: string;
  hint?: string;
  options: { value: string; label: string }[];
  /** Steps are skipped when this returns false — that is the branching. */
  showIf?: (a: FinderAnswers) => boolean;
};

export const FINDER_STEPS: FinderStep[] = [
  {
    id: "phase",
    question: "What product(s) do you want to vacuum?",
    hint: "Dry material and liquids call for different machines, so this decides the route.",
    options: [
      { value: "dust", label: "Dust or dry material" },
      { value: "liquid", label: "Liquids or solvents" },
      { value: "both", label: "Both dust and liquids" },
    ],
  },
  {
    id: "metals",
    question: "Is the material metal?",
    hint: "Metal fines are reactive and change which lines are suitable.",
    // Only asked for dry material — liquids route straight to capacity.
    showIf: (a) => a.phase === "dust" || a.phase === "both",
    options: [
      { value: "yes", label: "Yes — metal dust or fines" },
      { value: "no", label: "No — non-metal material" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "capacity",
    question: "What collection capacity are you looking for?",
    hint: "Gallons. Pick the closest — we can advise either side of it.",
    options: [
      { value: "5", label: "5 gallon" },
      { value: "10", label: "10 gallon" },
      { value: "15", label: "15 gallon" },
      { value: "20", label: "20 gallon" },
      { value: "25", label: "25 gallon" },
      { value: "55", label: "55 gallon" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  {
    id: "air",
    question: "Do you have compressed air available?",
    hint: "Air-operated units need a 1/2 inch ID supply as a minimum.",
    options: [
      { value: "yes", label: "Yes — 1/2 in ID or larger" },
      { value: "no", label: "No compressed air available" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "hours",
    question: "How many hours of use per day?",
    hint: "Duty cycle decides whether a standard or continuous-duty machine fits.",
    options: [
      { value: "under4", label: "Less than 4 hours per day" },
      { value: "over4", label: "More than 4 hours per day" },
    ],
  },
];

/** Steps actually shown for a given set of answers. */
export function visibleSteps(a: FinderAnswers): FinderStep[] {
  return FINDER_STEPS.filter((step) => !step.showIf || step.showIf(a));
}

type Family = "AV" | "EV" | "EX1" | "AVX" | "EVX";

function familyOf(model: FlatModel): Family | "ACC" {
  if (model.seriesId === "avx") return "AVX";
  if (model.seriesId === "evx") return "EVX";
  if (model.seriesId === "ex1") return "EX1";
  if (model.seriesId === "av-ev") return model.name.toUpperCase().startsWith("AV") ? "AV" : "EV";
  return "ACC";
}

/** Capacity in gallons, parsed from the model designation (e.g. AVX-15 -> 15). */
function capacityOf(model: FlatModel): number[] {
  const match = model.name.match(/-(\d+)(?:-(\d+))?/);
  if (!match) return [];
  const values = [Number(match[1])];
  if (match[2]) values.push(Number(match[2]));
  return values;
}

export type Recommendation = {
  category: ProductCategory;
  headline: string;
  points: string[];
  note?: string;
  /** Matching models, so the answer is products rather than a category alone. */
  models: { name: string; slug: string; family: string }[];
};

export function recommend(a: FinderAnswers): Recommendation {
  const points: string[] = [];
  const wet = a.phase === "liquid" || a.phase === "both";
  const metals = a.metals === "yes";
  const heavyDuty = a.hours === "over4";
  const noAir = a.air === "no";

  // 1. Which families are in play
  let families: Family[];
  if (wet && a.phase === "liquid") {
    families = ["AVX", "EVX", "EX1"];
    points.push("Liquids and solvents route to wet recovery — construction is matched to the chemistry.");
  } else if (metals) {
    // Metals: AV and EX1 only — no EV.
    families = ["AV", "EX1"];
    points.push("Metal fines are reactive, so we specify from the AV and EX1 lines and leave the EV models out.");
  } else {
    families = ["AV", "EV", "EX1"];
    points.push("Non-metal material opens the full range — AV, EV and EX1.");
  }

  // 2. Heavy duty escalates to the explosion-proof family
  if (heavyDuty) {
    families = ["AVX", "EVX", "EX1"];
    points.push("Above four hours a day is continuous duty, so we move to the explosion-proof family — AVX, EVX and EX1.");
    if (!metals) {
      points.push("Continuous Duty Vacuum (CDV) models also suit this profile for non-metal material — ask us about availability.");
    }
  } else {
    points.push("Under four hours a day, a standard-duty unit from the shortlisted lines will serve.");
  }

  // 3. No compressed air removes the air-operated options
  if (noAir) {
    families = families.filter((f) => f !== "AV" && f !== "AVX");
    points.push("Without a 1/2 inch compressed-air supply the air-operated units are out, so this is an electric selection.");
  } else if (a.air === "yes") {
    points.push("With compressed air available, air-operated units stay on the table — no electrical components in the recovery unit.");
  }

  // 4. Capacity filter
  const wanted = a.capacity && a.capacity !== "unsure" ? Number(a.capacity) : undefined;
  let models = ALL_MODELS.filter((m) => {
    const family = familyOf(m);
    return family !== "ACC" && families.includes(family as Family);
  });
  if (wanted) {
    const sized = models.filter((m) => capacityOf(m).includes(wanted));
    if (sized.length) {
      models = sized;
      points.push(`Filtered to ${wanted} gallon collection capacity.`);
    } else {
      points.push(`We do not list a ${wanted} gallon unit in these lines — we will advise the closest capacity.`);
    }
  }

  // 5. Category to lead with
  const slug = wet
    ? "wet-dry-systems"
    : heavyDuty || families.includes("AVX") || families.includes("EVX")
      ? "explosion-proof-vacuums"
      : families.includes("EX1")
        ? "hepa-vacuums"
        : "industrial-vacuums";

  const headline = wet
    ? "Wet and dry recovery, matched to your liquid"
    : metals
      ? "Explosion proof recovery for metal dust"
      : heavyDuty
        ? "Continuous duty explosion proof recovery"
        : "Explosion proof vacuum recovery";

  return {
    category: getCategory(slug) ?? getCategory("explosion-proof-vacuums")!,
    headline,
    points,
    note:
      a.metals === "unsure"
        ? "You were not sure whether the material is metal. That changes the recommendation, so tell us the material on the quote form and we will confirm."
        : undefined,
    models: models.slice(0, 8).map((m) => ({
      name: m.name,
      slug: m.slug,
      family: familyOf(m) as string,
    })),
  };
}
