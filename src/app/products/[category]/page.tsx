import type { Metadata } from "next";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FAQ, type FaqCategory } from "@/lib/data/faq";
import { INDUSTRY_DIRECTORY, type IndustryEntry } from "@/lib/data/industries-directory";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { pairedAlternates } from "@/lib/i18n";
import { ALL_MODELS } from "@/lib/data/product-models";
import { faqJsonLd, subpageJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((category) => ({ category: category.slug }));
}

/** Which model series (if any) sits under each category, and which FAQ themes fit. */
/** Electric vs air-operated — the differentiator behind the air-operated ad group. */
const ELECTRIC_VS_AIR: { aspect: string; electric: string; air: string }[] = [
    {
      aspect: "Power source",
      electric: "Electric motor, mains supply",
      air: "Compressed air through a venturi — plant air supply",
    },
    {
      aspect: "Electrical ignition source",
      electric: "Present by definition; managed by certified construction suitable for the classification",
      air: "None in the recovery unit — no motor, no switch, no cord at all",
    },
    {
      aspect: "Site requirement",
      electric: "Suitable power at the point of use",
      air: "Adequate compressed-air pressure and volume at the point of use",
    },
    {
      aspect: "Duty cycle",
      electric: "Suits intermittent and scheduled housekeeping",
      air: "Tolerates long continuous running well",
    },
    {
      aspect: "Portability",
      electric: "Limited by cord runs and available outlets",
      air: "Limited by air-line reach; no electrical trailing lead",
    },
    {
      aspect: "Noise",
      electric: "Motor noise; generally quieter than an air drive",
      air: "Air exhaust makes these louder — worth planning for in occupied areas",
    },
    {
      aspect: "Maintenance",
      electric: "Motor, brushes where fitted, and electrical components",
      air: "No electric motor to service; depends on clean, dry plant air",
    },
];

const CATEGORY_META: Record<
  string,
  {
    seriesIds: string[];
    faqCategories: FaqCategory[];
    /** Search-intent phrasing for metadata — descriptive, no invented specs. */
    metaTitle: string;
    metaDescription: string;
    /** Selection guidance specific to the category. */
    selection: { title: string; detail: string }[];
    /** Routing table by area classification (brief Page 1 section 2). */
    classificationSelector?: {
      classification: string;
      meaning: string;
      typicalDust: string;
      range: string;
      href?: string;
    }[];
    /** Electric vs air-operated comparison (brief Page 1 section 3). */
    powerComparison?: { aspect: string; electric: string; air: string }[];
    /** The shop-vac question, answered as construction rather than scare copy. */
    shopVacNote?: string[];
  }
> = {
  "esd-static-free-vacuums": {
    seriesIds: ["ex1", "evx"],
    faqCategories: ["explosion-safety", "selection"],
    metaTitle: "ESD Static Free Vacuum Cleaners | Anti-Static Industrial Vacuums",
    metaDescription:
      "ESD static free industrial vacuum cleaners built with static dissipating housings, filters, hoses and tools — for combustible dust areas and ESD-sensitive electronics work.",
    selection: [
      { title: "Decide which risk you are managing", detail: "Preventing a discharge from igniting combustible dust and protecting sensitive components from electrostatic damage are different requirements. Many facilities need both — say so and we will specify for both." },
      { title: "The whole chain must dissipate", detail: "Housings, filters, hoses and tools all form part of the path to ground. A conductive unit at the end of an ordinary plastic hose has a gap in the middle of its protection." },
      { title: "Confirm the area classification", detail: "Where the dust is combustible, classification determines which power units and construction are acceptable. Your engineer assigns it; we match equipment to it." },
      { title: "Consider what leaves the exhaust", detail: "In electronics and cleanroom work, exhaust air quality usually matters as much as pickup — absolute filtration keeps the fine fraction captured." },
    ],
  },
  "cleanroom-vacuums": {
    seriesIds: ["ex1"],
    faqCategories: ["selection", "applications"],
    metaTitle: "Cleanroom Vacuum Cleaners | HEPA & ULPA Controlled-Area Vacuums",
    metaDescription:
      "Cleanroom vacuum cleaners with HEPA and ULPA absolute filtration, smooth wipeable stainless construction and contained collection — for controlled environments where the exhaust matters.",
    selection: [
      { title: "Start from the room classification", detail: "The classification sets the filtration requirement. Ask what a filter is tested to rather than what it is called." },
      { title: "Decide HEPA or ULPA", detail: "HEPA absolute filtration covers most controlled areas; ULPA extends further where the environment demands it." },
      { title: "The machine is a surface too", detail: "Smooth, wipeable stainless construction lets the unit pass a wipe-down and gowning protocol instead of defeating it." },
      { title: "Dedicate the equipment", detail: "A vacuum that also cleans the loading dock has no business in a cleanroom. Assign and label units to the controlled area." },
    ],
  },
  "pharmaceutical-vacuums": {
    seriesIds: ["ex1"],
    faqCategories: ["selection", "applications"],
    metaTitle: "Pharmaceutical Vacuum Cleaners | Containment & HEPA Filtration",
    metaDescription:
      "Pharmaceutical vacuum cleaners for active ingredients, excipients and potent compounds — HEPA absolute filtration, sealed collection and wash-down friendly stainless construction.",
    selection: [
      { title: "Work from the exposure requirement", detail: "Potent compounds and regulated substances set the containment standard. The occupational exposure limit drives the specification, not the other way round." },
      { title: "Plan the disposal step", detail: "The container change is often the highest-exposure moment in the cycle. Sealed liners and a defined route out matter as much as suction." },
      { title: "Satisfy sanitation as well as safety", detail: "Stainless construction and wipeable surfaces let one cleaning pass serve both the containment case and the sanitation record." },
      { title: "Confirm whether the powder is also combustible", detail: "Many pharmaceutical powders are. Where they are, containment and explosion protection are specified together." },
    ],
  },
  "explosion-proof-vacuums": {
    seriesIds: ["evx", "ex1"],
    faqCategories: ["explosion-safety", "standards"],
    classificationSelector: [
      {
        classification: "Class I, Div 1 / Div 2",
        meaning: "Flammable gases or vapours present",
        typicalDust: "Solvent and fuel vapour",
        range: "EX1 HEPA line is certified for Class I, Group D",
        href: "/hazardous-locations/class-i-division-1",
      },
      {
        classification: "Class II, Div 1",
        meaning: "Combustible dust airborne in normal operation",
        typicalDust: "Metal, grain, powder",
        range: "EX1 HEPA line is certified for Class II, Groups E, F, G",
        href: "/hazardous-locations/class-ii-division-1",
      },
      {
        classification: "Class II, Div 2",
        meaning: "Combustible dust present, airborne only abnormally",
        typicalDust: "Wood, plastic, coating powder",
        range: "EX1 HEPA line is certified for Class II, Groups E, F, G",
        href: "/hazardous-locations/class-ii-division-2",
      },
      {
        classification: "Zone 21 / 22 (ATEX)",
        meaning: "European dust zone framework",
        typicalDust: "As above",
        range: "ATEX is not claimed — our certification is North American",
        href: "/hazardous-locations/atex-vs-north-american",
      },
      {
        classification: "Not sure",
        meaning: "Classification not yet assigned or not known",
        typicalDust: "Send us your material data",
        range: "Get a Quote and we will work it through with you",
        href: "/hazardous-location-vacuums#quote",
      },
    ],
    powerComparison: ELECTRIC_VS_AIR,
    shopVacNote: [
      "This comes up because the price difference is real and the reasoning is rarely spelled out. A standard shop vacuum brings three problems into a dust area at once: a brushed universal motor that sparks as a matter of normal operation, a plastic hose that accumulates static charge as dry dust moves through it with no path to ground, and filtration that returns the finest fraction to the room.",
      "It is a construction argument rather than a quality one. A rated unit is conductive, grounded and bonded from hose tip to container, with a drive suitable for the classification and filtration that retains what it captures. Modifying a consumer machine does not address any of the three, because each is inherent to how it was built.",
    ],
    metaTitle: "Explosion Proof Vacuums | Combustible Dust Vacuum Cleaners",
    metaDescription:
      "PrestiVac manufactures UL 1203 certified explosion proof vacuum cleaners for combustible dust and flammable liquids — solid stainless steel, HEPA 99.99% absolute filtration, electric and air-operated. Class I & II, Divisions 1 & 2. Made in the USA.",
    selection: [
      {
        title: "Start with the area classification",
        detail:
          "The classification of the space — the Class, Division and Group assigned by your electrical or process engineer — determines which power units and construction are acceptable. Bring that classification to the conversation; it is the first constraint, not an afterthought.",
      },
      {
        title: "Identify the dust, not just the process",
        detail:
          "Combustibility, particle size and reactivity vary widely between materials, and metal dusts introduce hazards that organic dusts do not. Material identification drives filtration, separation and whether a wet or immersion method is appropriate.",
      },
      {
        title: "Decide electric or air-operated",
        detail:
          "Air-operated units run on compressed air and contain no electrical components at all, which suits many classified areas and continuous duty. Electric units suit facilities without adequate compressed air. Both are built with the same conductive, grounded recovery path.",
      },
      {
        title: "Match filtration to what leaves the machine",
        detail:
          "Where exhaust air quality is part of the requirement — fine powders, toxic metals, pharmaceutical or abatement work — HEPA filtration keeps captured fines captured rather than returning them to the room.",
      },
    ],
  },
  "hepa-vacuums": {
    seriesIds: ["ex1"],
    faqCategories: ["selection", "applications"],
    metaTitle: "HEPA Vacuums | Industrial HEPA Vacuum Cleaners",
    metaDescription:
      "Industrial HEPA vacuums for fine and hazardous dust — 99.99% filtration at 0.3 µm for pharmaceutical powders, silica, lead and abatement work. The PrestiVac EX1 HEPA line is UL 1203 Certified.",
    selection: [
      {
        title: "Confirm the filtration requirement",
        detail:
          "HEPA filtration is tested to 99.99% efficiency at 0.3 µm. Where regulated exposure limits or cleanroom conditions apply, that tested performance — not a filter that merely looks fine — is what the requirement rests on.",
      },
      {
        title: "Plan for safe filter and container changes",
        detail:
          "The moment of highest exposure is often disposal, not recovery. Consider container handling, liner options and the procedure your operators will actually follow at end of shift.",
      },
      {
        title: "Check the area classification",
        detail:
          "HEPA filtration and explosion-proof construction answer different questions. Where the dust is both hazardous to breathe and combustible, you need both — confirm the classification for your space.",
      },
      {
        title: "Size to the recovery task",
        detail:
          "Fine powder recovery, spill response and continuous production housekeeping load a system differently. Duty cycle and volume determine which unit holds up.",
      },
    ],
  },
  "pneumatic-vacuums": {
    seriesIds: ["avx"],
    faqCategories: ["explosion-safety", "selection"],
    powerComparison: ELECTRIC_VS_AIR,
    metaTitle: "Pneumatic Vacuums | Air Operated Industrial Vacuum Cleaners",
    metaDescription:
      "Air operated pneumatic industrial vacuums with no electrical components — compressed-air driven recovery for classified areas and continuous duty. Explosion-proof construction options from PrestiVac.",
    selection: [
      {
        title: "Verify your compressed air supply",
        detail:
          "Air-operated units depend on the plant air system. Available pressure and volume at the point of use determine which models are practical — worth confirming before specifying.",
      },
      {
        title: "No electrical components at all",
        detail:
          "Because the drive is pneumatic, there is no motor, no switch and no cord in the recovery unit. For many classified areas and wash-down environments that is the deciding advantage.",
      },
      {
        title: "Consider continuous duty",
        detail:
          "Air-operated units tolerate long, uninterrupted running well, which suits production housekeeping and central-station use.",
      },
      {
        title: "Match the recovery path to the material",
        detail:
          "Conductive construction, grounding and bonding still matter with an air drive — the dust, not just the motor, can carry the ignition risk.",
      },
    ],
  },
  "industrial-vacuums": {
    seriesIds: ["av-ev"],
    faqCategories: ["selection", "operation"],
    metaTitle: "Industrial Vacuums | Heavy-Duty Industrial Vacuum Cleaners",
    metaDescription:
      "Heavy-duty industrial vacuums in stainless steel for continuous production housekeeping — abrasive debris, high volumes and long duty cycles. Manufactured in the USA by PrestiVac.",
    selection: [
      {
        title: "Be honest about duty cycle",
        detail:
          "Equipment that runs for hours every shift fails differently from equipment used occasionally. Continuous-duty power units and serviceable components are what separate industrial machines from upgraded shop vacuums.",
      },
      {
        title: "Account for abrasive material",
        detail:
          "Metal chips, casting sand and grinding debris wear hoses, wands and separation surfaces. Construction and replaceable wear parts matter more than peak suction figures.",
      },
      {
        title: "Plan container handling",
        detail:
          "Collection capacity is only useful if operators can move and empty it safely. Consider container size, wheels and discharge height against your actual layout.",
      },
      {
        title: "Confirm whether the dust is combustible",
        detail:
          "Plenty of ordinary-looking production dust is combustible. If it is, a standard industrial vacuum is the wrong tool — move to explosion-proof construction.",
      },
    ],
  },
  "central-vacuum-systems": {
    seriesIds: [],
    faqCategories: ["selection", "operation"],
    metaTitle: "Central Vacuum Systems | Industrial Central Vacuum Installations",
    metaDescription:
      "Engineered industrial central vacuum systems — a remote power unit and separator serving inlet drops across the plant, with material consolidated at a single discharge point. Designed and built by PrestiVac.",
    selection: [
      {
        title: "Count simultaneous operators",
        detail:
          "A central system is sized to how many drops are used at once, not how many exist. That number drives the power unit, piping and separator selection.",
      },
      {
        title: "Design the piping deliberately",
        detail:
          "Run lengths, bends and drop placement determine whether the system performs at the far end of the plant. Piping layout is engineering, not an accessory.",
      },
      {
        title: "Decide where material consolidates",
        detail:
          "One discharge point simplifies handling and disposal — but it needs to be somewhere your team can safely access and empty.",
      },
      {
        title: "Address classification zone by zone",
        detail:
          "A plant rarely has one classification throughout. Explosion-protection provisions are applied where the classified areas actually are.",
      },
    ],
  },
  "wet-dry-systems": {
    seriesIds: [],
    faqCategories: ["selection", "applications"],
    metaTitle: "Wet & Dry Industrial Vacuums | Liquid and Slurry Recovery",
    metaDescription:
      "Wet and dry industrial vacuum systems for liquid, slurry and coolant recovery alongside dry debris — including options for reactive materials that must be kept wet. From PrestiVac.",
    selection: [
      {
        title: "Separate liquid from solid duty",
        detail:
          "Coolant recovery, spill response and slurry handling place different demands on separation and materials. Describe the actual mix you expect to pick up.",
      },
      {
        title: "Consider chemical compatibility",
        detail:
          "Recovered liquids can attack seals, hoses and vessel surfaces. Construction is chosen against the chemistry, not just the volume.",
      },
      {
        title: "Reactive materials may require immersion",
        detail:
          "Some metal dusts are handled wet specifically to reduce ignition risk during recovery. That is a material-specific decision — confirm it for your dust rather than assuming.",
      },
      {
        title: "Plan discharge and disposal",
        detail:
          "Recovered liquid is heavy and often regulated. How it leaves the machine matters as much as how it gets in.",
      },
    ],
  },
  "custom-engineered-systems": {
    seriesIds: [],
    faqCategories: ["selection"],
    metaTitle: "Custom Engineered Vacuum Systems | Built to Your Application",
    metaDescription:
      "Custom-built industrial vacuum systems built to the application — configuration, filtration and integration designed around your material, classification and layout. Designed and manufactured in the USA.",
    selection: [
      {
        title: "Bring the constraints, not a part number",
        detail:
          "Material, classification, duty cycle, footprint and the disposal route at the end. Those five constraints determine what can be built.",
      },
      {
        title: "Integration is part of the design",
        detail:
          "Systems that feed into existing process equipment, enclosures or collection infrastructure need that interface designed in from the start.",
      },
      {
        title: "Documentation matters downstream",
        detail:
          "Ask early about the certification documents and drawings your compliance process will require, so the build produces them.",
      },
      {
        title: "Plan for service life",
        detail:
          "A custom machine still needs filters, hoses and wear parts years from now. Serviceability is a design requirement.",
      },
    ],
  },
  accessories: {
    seriesIds: ["accessories"],
    faqCategories: ["operation"],
    metaTitle: "Industrial Vacuum Accessories, Hoses & Tool Kits",
    metaDescription:
      "Genuine PrestiVac accessories, suction kits, hoses and tool sets matched to the vacuum lineup — including anti-static options for combustible dust recovery.",
    selection: [
      {
        title: "Anti-static where the dust is combustible",
        detail:
          "The accessory chain is part of the grounded, bonded path. Anti-static hoses and conductive tools are not optional extras in a classified area.",
      },
      {
        title: "Match diameter to the material",
        detail:
          "Hose and wand diameter affect whether heavy or stringy material actually conveys instead of blocking.",
      },
      {
        title: "Use genuine replacement parts",
        detail:
          "Filters and hoses are part of the tested configuration. Substitutions can change how the system performs and what its documentation covers.",
      },
      {
        title: "Ask about compatibility",
        detail:
          "Kits are matched to specific units. Confirm the fit against your model rather than assuming a standard size.",
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  const meta = CATEGORY_META[slug];
  if (!category || !meta) return { title: "Category not found | PrestiVac" };
  return {
    title: meta.metaTitle,
    description: meta.metaDescription,
    alternates: {
      canonical: `/products/${category.slug}`,
      languages: pairedAlternates(`/products/${category.slug}`),
    },
    openGraph: {
      url: `/products/${category.slug}`,
      title: meta.metaTitle,
      description: meta.metaDescription,
      images: [{ url: category.image }],
    },
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  const meta = CATEGORY_META[slug];
  if (!category || !meta) notFound();

  const models = ALL_MODELS.filter((m) => meta.seriesIds.includes(m.seriesId));
  const hasCertifiedLine = models.some((m) => m.csaCertified);
  const faqs = FAQ.filter((item) => meta.faqCategories.includes(item.category)).slice(0, 5);
  const others = PRODUCT_CATEGORIES.filter((c) => c.slug !== category.slug);

  // Link industry names to real industry pages where one exists.
  const industryLinks = category.industries.map((name) => {
    const key = name.toLowerCase().split(" ")[0];
    const match = INDUSTRY_DIRECTORY.find(
      (industry: IndustryEntry) => industry.href && industry.name.toLowerCase().includes(key),
    );
    return { name, href: match?.href };
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({
              name: category.name,
              description: meta.metaDescription,
              path: `/products/${category.slug}`,
            }),
          ).replace(/</g, "\\u003c"),
        }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              faqJsonLd(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
            ).replace(/</g, "\\u003c"),
          }}
        />
      )}

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-28 lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/products" className="transition-colors hover:text-white">Products</Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                {category.tagline}
              </p>
              <h1 className="mt-3 font-display text-4xl/[1.05] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.03]">
                {category.name}
              </h1>
              <p className="mt-5 max-w-xl text-[15px]/[1.7] text-white/70">{category.description}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <a href="/get-a-quote">
                    Get a Quote
                    <ArrowRight aria-hidden className="size-3.5" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/products">All categories</Link>
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-[#f9f8f6] ring-1 ring-white/10">
              <div className="relative aspect-[4/3]">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 90vw"
                  className="object-contain p-8"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
            What defines this line
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {category.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-5 text-[13.5px]/[1.6] text-white/75 ring-1 ring-white/10"
              >
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {benefit}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Certification — precise about what the certificate covers */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <ShieldCheck aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
              <h2 className="font-display text-[17px] font-extrabold text-white">
                Certification &amp; documentation
              </h2>
            </div>
            {hasCertifiedLine ? (
              <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/75">
                The PrestiVac EX1 HEPA line is UL 1203 Certified under Certificate of Compliance
                No.  — Class I, Group D; Class II, Groups E, F, G; Temperature Code T3C,
                scope &ldquo;Dry Vacuum Cleaner, Model Ex 1-xx HEPA.&rdquo; Confirm the specific
                configuration against the datasheet for your area classification.
              </p>
            ) : (
              <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/75">
                Units in this line are built on the same explosion-proof construction principles —
                conductive, grounded and bonded throughout. Certification coverage varies by line
                and configuration: our{" "}
                <Link href="/products/hepa-vacuums" className="font-semibold text-brand-300">
                  EX1 HEPA line
                </Link>{" "}
                is UL 1203 Certified under UL 1203 certification. Ask us for the certification
                documents that apply to the configuration you are specifying.
              </p>
            )}
            <p className="mt-4 text-[12px]/[1.6] text-white/45">
              Area classification is determined by your own engineering assessment. We match
              equipment to the classification you provide —{" "}
              <Link href="/hazardous-locations" className="font-semibold text-brand-300">
                see how Classes, Divisions and Groups work
              </Link>
              .
            </p>
          </div>
        </Container>
      </section>

      {/* Models in this category */}
      {models.length > 0 && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
                Models in this line
              </h2>
              <span className="text-[12px] font-semibold text-white/50">
                {models.length} models — specifications in the datasheet
              </span>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {models.map((model) => (
                <li key={model.slug}>
                  <Link
                    href={`/products/models/${model.slug}`}
                    className="flex h-full flex-col rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                  >
                    <span className="relative block h-24 overflow-hidden rounded-lg bg-white">
                      <Image
                        src={model.image}
                        alt={`PrestiVac ${model.name}`}
                        fill
                        sizes="(min-width: 1024px) 160px, 45vw"
                        className="object-contain p-1.5"
                      />
                    </span>
                    <span className="mt-2 text-[11.5px] font-bold text-white">{model.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* Choose by location classification (brief section 2) */}
      {meta.classificationSelector && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              Choose by location classification
            </h2>
            <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/60">
              Classification comes first, and it is assigned by your own electrical or process
              engineer. Find the row that matches your area — and if none of them do yet, the last
              row is the honest answer.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-white/10">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="bg-white/[0.06]">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Classification</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">What it means</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Typical dust</th>
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">What our certificate covers</th>
                  </tr>
                </thead>
                <tbody>
                  {meta.classificationSelector.map((row) => (
                    <tr key={row.classification} className="border-t border-white/10 align-top">
                      <th scope="row" className="px-5 py-4 font-display text-[13px] font-extrabold text-white">
                        {row.href ? (
                          <Link href={row.href} className="transition-colors hover:text-brand-300">
                            {row.classification}
                          </Link>
                        ) : (
                          row.classification
                        )}
                      </th>
                      <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{row.meaning}</td>
                      <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{row.typicalDust}</td>
                      <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 max-w-3xl text-[12px]/[1.65] text-white/45">
              Coverage is read from the certificate, not inferred from a product family name. Where a
              line is not covered for a classification we say so rather than leaving it implied.
            </p>
          </Container>
        </section>
      )}

      {/* Electric vs air-operated (brief section 3) */}
      {meta.powerComparison && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              Electric or air-operated?
            </h2>
            <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/60">
              The single most useful distinction in the range, and the one buyers most often have to
              ask for. Both are built with the same conductive, grounded and bonded recovery path —
              what differs is the drive.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-white/10">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="bg-white/[0.06]">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Aspect</th>
                    <th className="px-5 py-3.5 text-[12px] font-extrabold text-white">Electric</th>
                    <th className="px-5 py-3.5 text-[12px] font-extrabold text-white">Air-operated</th>
                  </tr>
                </thead>
                <tbody>
                  {meta.powerComparison.map((row) => (
                    <tr key={row.aspect} className="border-t border-white/10 align-top">
                      <th scope="row" className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-white/50">
                        {row.aspect}
                      </th>
                      <td className="px-5 py-4 text-[13px]/[1.6] text-white/75">{row.electric}</td>
                      <td className="px-5 py-4 text-[13px]/[1.6] text-white/75">{row.air}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/products/pneumatic-vacuums" className="rounded-full bg-brand-600/20 px-3.5 py-1.5 font-semibold text-brand-200 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/30">
                Air-operated range
              </Link>
              <Link href="/hazardous-locations/intrinsically-safe-vacuums" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white">
                Why this comes up with intrinsic safety
              </Link>
            </div>
          </Container>
        </section>
      )}

      {/* Why not a modified shop vac (brief section 5) */}
      {meta.shopVacNote && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <div className="max-w-3xl">
              <h2 className="font-display text-[20px] font-extrabold text-white">
                Why not a modified shop vacuum
              </h2>
              {meta.shopVacNote.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* How to choose */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
            How to choose within this line
          </h2>
          <ol className="mt-6 grid gap-4 lg:grid-cols-2">
            {meta.selection.map((step, index) => (
              <li key={step.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[13px] font-extrabold text-brand-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[15px] font-extrabold text-white">{step.title}</h3>
                </div>
                <p className="mt-2.5 text-[13.5px]/[1.65] text-white/70">{step.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Industries */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
            Where this line is used
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {industryLinks.map((industry) =>
              industry.href ? (
                <li key={industry.name}>
                  <Link
                    href={industry.href}
                    className="inline-block rounded-full bg-brand-600/15 px-3.5 py-1.5 text-[12.5px] font-semibold text-brand-300 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/25"
                  >
                    {industry.name}
                  </Link>
                </li>
              ) : (
                <li
                  key={industry.name}
                  className="inline-block rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12.5px] font-medium text-white/60"
                >
                  {industry.name}
                </li>
              ),
            )}
          </ul>
          <p className="mt-6 max-w-2xl text-[13px]/[1.65] text-white/55">
            Not listed? Browse the{" "}
            <Link href="/industries" className="font-semibold text-brand-400">full industry directory</Link>{" "}
            or start from{" "}
            <Link href="/materials" className="font-semibold text-brand-400">your material</Link>. New to
            dust hazards? Start with{" "}
            <Link href="/guides/dust-explosion-basics" className="font-semibold text-brand-400">
              how dust explosions work
            </Link>{" "}
            or{" "}
            <Link href="/guides/vacuum-vs-dust-collector" className="font-semibold text-brand-400">
              vacuum vs dust collector
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                  <dt className="font-display text-[15px] font-extrabold text-white">{faq.question}</dt>
                  <dd className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{faq.answer}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
            >
              All questions
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
          </Container>
        </section>
      )}

      {/* Other categories */}
      <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
            Other product lines
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/products/${other.slug}`}
                  className="flex h-full flex-col rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                >
                  <span className="font-display text-[14px] font-extrabold text-white">{other.name}</span>
                  <span className="mt-1.5 text-[12px]/[1.55] text-white/55">{other.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Primary conversion action */}
      <section id="quote" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-14 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto max-w-3xl rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-8 text-center">
              <h2 className="font-display text-[22px] font-extrabold uppercase text-white">
                Get a Quote
              </h2>
              <p className="mx-auto mt-2.5 max-w-xl text-[13.5px]/[1.7] text-white/75">
                Tell us your material, your classification and how hard you will work it. Our
                technical team will recommend the PrestiVac model best suited to the job.
              </p>
              <Link
                href="/get-a-quote"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
              >
                Get a Quote
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
