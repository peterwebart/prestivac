import type { Metadata } from "next";
import { AlertTriangle, ArrowRight, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ALL_MODELS } from "@/lib/data/product-models";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const description =
  "Vacuums for classified areas — Class I and Class II, Divisions 1 and 2. Work out which rating your area needs, see what our certificate covers, and have an engineer confirm the specification.";

export const metadata: Metadata = {
  title: "Hazardous Location Vacuums",
  description,
  alternates: { canonical: "/hazardous-location-vacuums" },
  openGraph: { url: "/hazardous-location-vacuums", title: "Hazardous Location Vacuums", description },
};

/** Ad-group deep-link anchors. Each must answer its ad group's question. */
const ANCHORS = [
  { id: "class-2-div-2", label: "Class II Div 2" },
  { id: "class-1", label: "Class I Div 1 & 2" },
  { id: "intrinsically-safe", label: "Intrinsically safe" },
  { id: "dust-ignition-proof", label: "Dust ignition proof" },
  { id: "atex", label: "ATEX zones" },
  { id: "certification", label: "Certification" },
];

const DECISION_STEPS = [
  {
    step: "Is the hazard a gas or a dust?",
    detail:
      "Flammable gases, vapours and volatile liquids put an area in Class I. Combustible dust puts it in Class II. Ignitible fibres and flyings are Class III. Facilities frequently have more than one, and each is assessed on its own terms.",
  },
  {
    step: "Is it present in normal operation, or only abnormally?",
    detail:
      "Division 1 means the hazardous atmosphere is expected during normal operation. Division 2 means the material is contained in normal operation and only escapes if something fails. Division 2 is still a classified location — that assumption catches people out.",
  },
  {
    step: "Which group?",
    detail:
      "Class I splits into Groups A (acetylene), B (hydrogen), C (ethylene) and D (propane and most hydrocarbons). Class II splits into Group E (conductive metal dust), F (carbonaceous) and G (non-conductive dusts such as flour, wood and plastics).",
  },
  {
    step: "Which jurisdiction — Class/Division or Zone?",
    detail:
      "North America traditionally uses Class and Division under the NEC 500 series; Europe and the wider IEC world use Zones, with dust Zones 20, 21 and 22. A Zone system is also recognised in North America. The two frameworks are not interchangeable and certificates are issued under one or the other.",
  },
  {
    step: "Then confirm the temperature code",
    detail:
      "The temperature code caps the maximum surface temperature the equipment may reach, and it must sit below the ignition temperature of the material present. Classification is not complete without it.",
  },
];

const CONCEPTS = [
  {
    name: "Explosion-proof",
    applies: "Associated with Class I gas and vapour locations",
    how: "The enclosure contains an internal explosion and prevents flame propagating to the surrounding atmosphere. Heavy, sealed construction with controlled flame paths.",
  },
  {
    name: "Dust-ignitionproof",
    applies: "Associated with Class II combustible dust locations",
    how: "The enclosure excludes dust from entering and limits external surface temperature so dust settling on it cannot ignite. A different objective from containing an explosion.",
  },
  {
    name: "Intrinsically safe",
    applies: "A circuit-level concept, typically for instrumentation",
    how: "Limits the electrical and thermal energy available in a circuit below what could ignite the atmosphere, in normal operation and specified faults. Designed for low-power circuits — generally not the applicable concept for a vacuum's drive motor.",
  },
];

export default function HazardousLocationVacuumsPage() {
  const ex1 = ALL_MODELS.filter((model) => model.csaCertified);
  const airOperated = ALL_MODELS.filter((model) => model.seriesId === "avx");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...subpageJsonLd({
                name: "Hazardous Location Vacuums",
                description,
                path: "/hazardous-location-vacuums",
              })["@graph"],
              {
                "@type": "FAQPage",
                "@id": `${site.url}/hazardous-location-vacuums/#faq`,
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is the difference between explosion proof and intrinsically safe?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Explosion-proof construction contains an internal explosion within an enclosure and prevents flame reaching the surrounding atmosphere; it is associated with Class I gas and vapour locations. Intrinsic safety is a circuit-level concept that limits available electrical and thermal energy below the level that could ignite the atmosphere, and it was developed for low-power circuits such as instrumentation — so it is generally not the protection concept applied to a vacuum's drive motor. For combustible dust the relevant construction is dust-ignitionproof, which excludes dust from the enclosure and limits surface temperature.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do I need a Class II Division 2 rated vacuum?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Class II Division 2 is a classified location, so equipment used in it — including portable cleaning equipment — must be suitable for that classification and the dust group present. A standard industrial or shop vacuum is not suitable regardless of division. Your classification is assigned by your own electrical or process engineer and accepted by the authority having jurisdiction; bring it to us and we will confirm what our certification covers.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Are air-operated vacuums suitable for classified areas?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "An air-operated vacuum is driven by compressed air through a venturi, so there is no electric motor, no switch and no power cord in the recovery unit. That removes the electrical ignition question from the drive entirely, which is why air-operated units are frequently specified for classified areas. Grounding, bonding and anti-static accessories still matter because the dust itself carries static.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is a PrestiVac vacuum ATEX certified?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We do not claim ATEX certification. Our certification is North American: UL 1203 certification covers our explosion proof vacuum cleaners for Class I, Group D and Class II, Groups E, F and G at Temperature Code T3C. If you are specifying for a jurisdiction that requires ATEX or IECEx documentation, tell us and we will confirm exactly what applies rather than implying equivalence.",
                    },
                  },
                ],
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero — message match on the ad group's core phrase */}
      <section className="relative overflow-hidden bg-graphite-950 pb-12 pt-28 lg:pt-32">
        <div aria-hidden className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <Container className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
            Classified areas
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl/[1.05] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.03]">
            Hazardous Location Vacuums — Class I &amp; II, Div 1 &amp; 2
          </h1>
          <p className="mt-5 max-w-2xl text-[15px]/[1.7] text-white/70">
            Tell us your classification and we will confirm the right rated unit. If you are not
            sure which rating your area needs, the selector below walks the decision — and an
            engineer will confirm it before you buy anything.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/get-a-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
            >
              Get a Quote
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
            <Link
              href="/hazardous-locations"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              Classification reference
            </Link>
          </div>

          {/* Anchor navigation for ad-group deep links */}
          <nav aria-label="On this page" className="mt-9 flex flex-wrap gap-2">
            {ANCHORS.map((anchor) => (
              <a
                key={anchor.id}
                href={`#${anchor.id}`}
                className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-white/65 ring-1 ring-white/10 transition-colors hover:text-white"
              >
                {anchor.label}
              </a>
            ))}
          </nav>
        </Container>
      </section>

      {/* Decision tree */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[22px] font-extrabold uppercase text-white">
            Work out which rating you need
          </h2>
          <p className="mt-3 max-w-2xl text-[13.5px]/[1.7] text-white/60">
            Five questions settle it. Your own electrical or process engineer assigns the
            classification and the authority having jurisdiction accepts it — this walks the logic
            so the conversation with us can be specific.
          </p>
          <ol className="mt-7 grid gap-4 lg:grid-cols-2">
            {DECISION_STEPS.map((item, index) => (
              <li key={item.step} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-[13px] font-extrabold text-brand-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[15px] font-extrabold text-white">{item.step}</h3>
                </div>
                <p className="mt-2.5 text-[13.5px]/[1.65] text-white/70">{item.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Anchor: Class II Div 2 */}
      <section id="class-2-div-2" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              Class II, Division 2 vacuums
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Class II Division 2 covers areas where combustible dust is present as accumulation
              rather than as a normal airborne cloud — a cloud arises when something malfunctions.
              It is the classification most manufacturing plants land in, and the most commonly
              underestimated: because the air looks clean, general-purpose equipment gets rolled in.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Equipment brought into a Division 2 area — including portable cleaning equipment —
              must be suitable for the classification and the dust group present. The dust group
              matters as much as the division: Group G covers non-conductive dusts such as flour,
              wood and plastics, while conductive metal dusts in Group E generally attract the more
              severe Division 1 treatment.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/hazardous-locations/class-ii-division-2" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                What Division 2 means in detail
              </Link>
              <Link href="/hazardous-locations/class-ii-division-1-vs-division-2" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Div 1 vs Div 2
              </Link>
              <Link href="/hazardous-locations/class-ii-groups-e-f-g" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Groups E, F &amp; G
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Anchor: Class I */}
      <section id="class-1" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              Class I, Division 1 and 2 — vapour rather than dust
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Class I is the gas and vapour classification: solvents, fuels and volatile liquids
              rather than particulate. Division 1 means an ignitible concentration is expected in
              normal operation; Division 2 means the material is contained and only escapes through
              a failure or a ventilation loss.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Group matters here too. Group D covers propane, methane and most common hydrocarbons
              and industrial solvents, and it is among the Class I groups our explosion proof vacuums are certified for.
              Equipment listed for a less severe group does not carry into a more severe one — a
              Group D listing is not acceptable in a Group B hydrogen atmosphere.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Many real sites have both hazards: an ethanol plant has grain dust and flammable
              vapour, a coatings plant has powder and solvent. Each is assessed separately, and the
              equipment must satisfy whichever requirement is more demanding in that space.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/hazardous-locations/class-i-division-1" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Class I, Division 1
              </Link>
              <Link href="/hazardous-locations/class-i-division-2" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Class I, Division 2
              </Link>
              <Link href="/hazardous-locations/class-i-division-1-vs-division-2" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Div 1 vs Div 2
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Anchor: protection concepts compared */}
      <section id="intrinsically-safe" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
            Explosion-proof vs intrinsically safe vs dust-ignitionproof
          </h2>
          <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/60">
            These three get used interchangeably by buyers and they are not interchangeable. They
            are different protection concepts with different objectives, and knowing which one your
            situation calls for is most of the specification.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-white/10">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.06]">
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Concept</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Where it applies</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">How it works</th>
                </tr>
              </thead>
              <tbody>
                {CONCEPTS.map((concept) => (
                  <tr key={concept.name} className="border-t border-white/10 align-top">
                    <th scope="row" className="px-5 py-4 font-display text-[13.5px] font-extrabold text-white">
                      {concept.name}
                    </th>
                    <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{concept.applies}</td>
                    <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{concept.how}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
            <h3 className="font-display text-[15px] font-extrabold text-white">
              Why air-operated units come up in this conversation
            </h3>
            <p className="mt-2.5 max-w-3xl text-[13.5px]/[1.7] text-white/70">
              People searching for an intrinsically safe vacuum are usually asking a broader
              question: how do I clean a classified area without introducing an electrical ignition
              source? An air-operated vacuum answers it structurally rather than by certification —
              driven by compressed air through a venturi, it has no electric motor, no switch and no
              power cord in the recovery unit at all. There is no electrical system in the drive to
              assess.
            </p>
            <p className="mt-3 max-w-3xl text-[13px]/[1.65] text-white/55">
              We do not represent our vacuums as holding intrinsic-safety approvals, and some model
              designations include configuration suffixes that we will not interpret as
              certification claims. Ask us for the datasheet and the applicable certificate
              together. Grounding, bonding and anti-static accessories still matter regardless of
              drive, because the dust itself carries static.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/hazardous-locations/intrinsically-safe-vacuums" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Intrinsic safety explained
              </Link>
              <Link href="/products/pneumatic-vacuums" className="rounded-full bg-brand-600/20 px-3.5 py-1.5 font-semibold text-brand-200 ring-1 ring-brand-500/30 hover:bg-brand-600/30">
                Air-operated range ({airOperated.length} models)
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Anchor: dust ignition proof */}
      <section id="dust-ignition-proof" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              Dust ignition proof construction
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              For Class II combustible dust locations, the construction concept is
              dust-ignitionproof: the enclosure is built to exclude dust from entering, and external
              surface temperature is limited so that dust settling on the equipment cannot reach its
              ignition temperature. Both halves matter — sealing alone is not sufficient if a
              surface runs hot, and a cool surface is not sufficient if dust can get inside.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Note that a dust layer insulates. A surface that runs safely when bare can run hotter
              under accumulation, which is part of why housekeeping and equipment suitability are
              linked rather than separate concerns. It is also why conductive Group E metal dust is
              treated most severely: it can bridge electrical connections as well as burn.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/hazardous-locations/class-ii-division-1" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Class II, Division 1
              </Link>
              <Link href="/materials/combustible-metal-dust" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Combustible metal dust
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Anchor: ATEX */}
      <section id="atex" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              ATEX zones and the North American scheme
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Europe and the wider IEC world classify by Zone according to how long a hazardous
              atmosphere is present. For combustible dust, Zone 20 is continuous or long-duration,
              Zone 21 is likely in normal operation, and Zone 22 is unlikely and short-lived. North
              America traditionally uses Class and Division, and also recognises a Zone system as an
              alternative.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              There are broad conceptual parallels — Zones 20 and 21 occupy territory a Division 1
              assessment would cover, Zone 22 sits nearer Division 2 — but they are not translations.
              Requirements, markings and certifying bodies differ, and equipment-protection levels
              do not map one-to-one onto Divisions.
            </p>
            <div className="mt-5 rounded-xl border border-amber-400/25 bg-amber-400/[0.06] p-5">
              <div className="flex items-center gap-2.5">
                <AlertTriangle aria-hidden className="size-4 text-amber-300" />
                <h3 className="font-display text-[14px] font-extrabold text-white">
                  We do not claim ATEX certification
                </h3>
              </div>
              <p className="mt-2.5 text-[13px]/[1.65] text-white/70">
                Our certification is North American. If you are specifying for a European site or
                any jurisdiction requiring ATEX or IECEx documentation, tell us the requirement and
                we will confirm precisely what applies to the configuration rather than implying an
                equivalence that does not exist.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/hazardous-locations/atex-vs-north-american" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                ATEX vs Class/Division in full
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Anchor: certification evidence — handled with care */}
      <section id="certification" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <ShieldCheck aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
              <h2 className="font-display text-[18px] font-extrabold text-white">
                Certification evidence
              </h2>
            </div>
            <p className="mt-3 max-w-3xl text-[14px]/[1.7] text-white/80">
              Every rating stated on this page is a compliance representation, so we state only what
              a certificate covers and name it.
            </p>
            <dl className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-graphite-950/50 p-5 ring-1 ring-white/10">
                <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/45">
                  Certifying body &amp; reference
                </dt>
                <dd className="mt-1.5 text-[13.5px] font-semibold text-white">
                  UL 1203 — Underwriters Laboratories
                </dd>
              </div>
              <div className="rounded-xl bg-graphite-950/50 p-5 ring-1 ring-white/10">
                <dt className="text-[11px] font-bold uppercase tracking-[0.12em] text-white/45">
                  Models covered (scope)
                </dt>
                <dd className="mt-1.5 text-[13.5px] font-semibold text-white">
                  &ldquo;Dry Vacuum Cleaner, Model Ex 1-xx HEPA&rdquo; — the EX1 line
                  ({ex1.length} models)
                </dd>
              </div>
            </dl>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {["Class I, Group D", "Class II, Groups E, F, G", "Temperature Code T3C"].map((item) => (
                <li key={item} className="flex items-center gap-2 rounded-lg bg-graphite-950/50 px-4 py-3 text-[13px] text-white/85 ring-1 ring-white/10">
                  <Check aria-hidden className="size-4 shrink-0 text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-3xl text-[12.5px]/[1.7] text-white/55">
              Where a line or model is not covered for a given class, we say so rather than leaving
              it implied. Other lines are built on the same explosion-proof construction principles
              — conductive, grounded and bonded throughout — but construction is not certification.
              Ask us for the documents that apply to the exact configuration you are specifying and
              to your jurisdiction, and we will send them with the datasheet.
            </p>
          </div>

          {/* Models under the certificate */}
          <div className="mt-8">
            <h3 className="font-display text-[16px] font-extrabold uppercase text-white">
              Models under UL 1203 certification
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {ex1.map((model) => (
                <li key={model.slug}>
                  <Link
                    href={`/products/models/${model.slug}`}
                    className="flex h-full flex-col rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                  >
                    <span className="text-[12px] font-bold text-white">{model.name}</span>
                    <span className="mt-1 text-[11px] text-white/50">
                      {model.tags.includes("HEPA") ? "HEPA" : "See datasheet"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12.5px]/[1.65] text-white/45">
              Airflow, vacuum, motor, capacity and filter-area figures come from the model datasheet
              in the current factory nomenclature. We would rather send you the datasheet than
              publish numbers we cannot stand behind.
            </p>
          </div>
        </Container>
      </section>

      {/* Quote form */}
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
    </>
  );
}
