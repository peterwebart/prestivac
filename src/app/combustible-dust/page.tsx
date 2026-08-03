import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const description =
  "Housekeeping equipment that meets combustible-dust requirements. Explosion-proof, HEPA filtered and matched to your material — find your dust group and the recovery approach that suits it.";

export const metadata: Metadata = {
  title: "Combustible Dust Vacuums | NFPA-Aligned Housekeeping",
  description,
  alternates: { canonical: "/combustible-dust" },
  openGraph: { url: "/combustible-dust", title: "Combustible Dust Vacuums", description },
};

/**
 * Material selector. Hazard column is QUALITATIVE by design — explosion
 * severity is material- and particle-size-specific and established by testing,
 * so no Kst, MIE or MEC values appear here.
 */
const MATERIAL_GROUPS = [
  {
    group: "Reactive metals",
    examples: "Aluminium, magnesium, titanium, zirconium",
    hazard: "Water-reactive when hot; ignite readily as fines and burn at extreme temperature",
    approach: "Immersion separation, air-operated drive, Class D provisions",
    links: [
      { label: "Aluminium", href: "/materials/aluminum-dust" },
      { label: "Magnesium", href: "/materials/magnesium-dust" },
      { label: "Titanium", href: "/materials/titanium-dust" },
      { label: "Zirconium", href: "/materials/zirconium-dust" },
    ],
  },
  {
    group: "Other metals",
    examples: "Steel, iron, copper, brass, bronze",
    hazard: "Abrasive and electrically conductive; conductive dust can bridge connections",
    approach: "Explosion-proof construction, HEPA where fines are respirable",
    links: [
      { label: "Iron & steel", href: "/materials/iron-dust" },
      { label: "Copper", href: "/materials/copper-dust" },
      { label: "Brass & bronze", href: "/materials/brass-bronze-dust" },
      { label: "All metal dust", href: "/materials/combustible-metal-dust" },
    ],
  },
  {
    group: "Coatings & powders",
    examples: "Powder coating, pigment, toner",
    hazard: "Very fine and highly dispersible; travels far from the point of use",
    approach: "Explosion-proof with recovery and reclaim option",
    links: [
      { label: "Powder coating", href: "/applications/powder-coating" },
    ],
  },
  {
    group: "Organic & food",
    examples: "Grain, flour, sugar, starch, malt",
    hazard: "Readily suspended, long-documented deflagration record; severity by testing",
    approach: "Explosion-proof, HEPA, sanitation-compatible",
    links: [
      { label: "Flour", href: "/materials/flour-dust" },
      { label: "Starch", href: "/materials/starch-dust" },
      { label: "Sugar", href: "/materials/sugar-dust" },
      { label: "Malt", href: "/materials/malt-dust" },
    ],
  },
  {
    group: "Wood & plastics",
    examples: "Sawdust, MDF, resin, rubber",
    hazard: "Accumulates in volume; large inventories build quickly on overhead surfaces",
    approach: "Explosion-proof, large capacity, central system for continuous duty",
    links: [
      { label: "Wood dust", href: "/materials/wood-dust" },
      { label: "Plastic & polymer", href: "/materials/plastic-dust" },
      { label: "Rubber", href: "/materials/rubber-dust" },
    ],
  },
  {
    group: "Pharmaceutical & toxic",
    examples: "API, excipient, lead, cadmium, beryllium",
    hazard: "Toxic as well as combustible — exposure limits drive the method",
    approach: "HEPA retention, containment, cleanroom-compatible, sealed disposal",
    links: [
      { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
      { label: "Lead", href: "/materials/lead-dust" },
      { label: "Cadmium", href: "/materials/cadmium-dust" },
      { label: "Beryllium", href: "/materials/beryllium-dust" },
    ],
  },
];

export default function CombustibleDustPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...subpageJsonLd({
                name: "Combustible Dust Vacuums",
                description,
                path: "/combustible-dust",
              })["@graph"],
              {
                "@type": "ItemList",
                "@id": `${site.url}/combustible-dust/#materials`,
                name: "Combustible dust material groups",
                itemListElement: MATERIAL_GROUPS.map((group, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: group.group,
                  description: `${group.examples}. ${group.hazard}.`,
                })),
              },
              {
                "@type": "FAQPage",
                "@id": `${site.url}/combustible-dust/#faq`,
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is a combustible dust vacuum?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "A vacuum built so that the act of cleaning cannot ignite the dust it is recovering. In practice that means a conductive, grounded and bonded path from hose tip to collection container, anti-static accessories rather than ordinary plastic hose, filtration that keeps fines out of the drive and the exhaust, and a power unit suitable for the area classification. A standard industrial or shop vacuum meets none of those conditions and can itself be the ignition source.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I use a shop vac for combustible dust?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. A standard shop vacuum has a universal motor with brushes that spark by design, a non-conductive plastic hose that accumulates static as dry dust moves through it, and filtration that returns fines to the room. In a combustible dust environment those are three ignition and dispersion mechanisms in one machine.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is a vacuum the same as a dust collector?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. A dust collector moves a high volume of air at low suction to capture dust at the source through fixed hoods and ducting. An industrial vacuum moves a lower volume at high suction to remove dust that has already settled, plus spills and chips. They are complementary controls. PrestiVac manufactures industrial vacuums and does not manufacture dust collectors.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What do the standards require for combustible dust housekeeping?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "NFPA 660 now consolidates the former commodity standards including NFPA 61, 484, 652, 654, 655 and 664, and it retains the Dust Hazard Analysis requirement introduced by NFPA 652. The DHA is what turns housekeeping into defined intervals for defined surfaces. OSHA has no single comprehensive combustible dust standard for general industry; it enforces through its Combustible Dust National Emphasis Program, the General Duty Clause and specific standards, with grain handling facilities covered by a dedicated standard.",
                    },
                  },
                ],
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 pb-12 pt-28 lg:pt-32">
        <div aria-hidden className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <Container className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
            Combustible dust housekeeping
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl/[1.05] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.03]">
            Combustible Dust Vacuums &amp; Recovery Systems
          </h1>
          <p className="mt-5 max-w-2xl text-[15px]/[1.7] text-white/70">
            Housekeeping equipment that meets combustible-dust requirements — explosion-proof, HEPA
            filtered, and matched to your material. Start by finding your dust below; the right
            approach differs more between materials than most people expect.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/get-a-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
            >
              Get a Quote
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
            <a
              href="#materials"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              Find your material
            </a>
          </div>
        </Container>
      </section>

      {/* Material selector */}
      <section id="materials" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[22px] font-extrabold uppercase text-white">
            Find your material
          </h2>
          <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/60">
            Combustibility, ignition sensitivity and reactivity vary widely between dusts, and the
            recovery method follows the material rather than the industry. Explosion severity is
            material- and particle-size-specific and is established by testing your own dust — the
            hazards below are described qualitatively for that reason.
          </p>
          <div className="mt-7 overflow-x-auto rounded-2xl ring-1 ring-white/10">
            <table className="w-full min-w-[860px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.06]">
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Material group</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Examples</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Key hazard</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Recommended approach</th>
                  <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">Guides</th>
                </tr>
              </thead>
              <tbody>
                {MATERIAL_GROUPS.map((group) => (
                  <tr key={group.group} className="border-t border-white/10 align-top">
                    <th scope="row" className="px-5 py-4 font-display text-[13.5px] font-extrabold text-white">
                      {group.group}
                    </th>
                    <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{group.examples}</td>
                    <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{group.hazard}</td>
                    <td className="px-5 py-4 text-[13px]/[1.6] text-white/70">{group.approach}</td>
                    <td className="px-5 py-4">
                      <span className="flex flex-wrap gap-1.5">
                        {group.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-semibold text-white/65 ring-1 ring-white/10 transition-colors hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[13px]/[1.65] text-white/55">
            Not listed? The{" "}
            <Link href="/materials" className="font-semibold text-brand-400">full materials directory</Link>{" "}
            covers 44 dusts in detail, or put your material in the form below and we will advise.
          </p>
        </Container>
      </section>

      {/* Vacuum or dust collector */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              Vacuum or dust collector?
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Worth settling early, because these are different machines. A dust collector moves a
              high volume of air at low suction and captures dust at the source through fixed hoods
              and ducting — it stops dust reaching the room. An industrial vacuum moves a lower
              volume at much higher suction and removes what has already settled, along with spills
              and chips. That higher suction is what lifts dust off a beam or pulls chips from a
              machine bed.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              They are complementary, not alternatives. Source capture reduces how much dust reaches
              overhead surfaces; it does nothing about what accumulated before it was installed, or
              what spills when a bag splits. Removing accumulation is the separate control that NFPA
              660 treats as fundamental — because the fuel for a devastating secondary explosion is
              the layer on the high steel, not the cloud at the machine.
            </p>
            <div className="mt-6 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6">
              <h3 className="font-display text-[15px] font-extrabold text-white">
                Being straight about what we supply
              </h3>
              <p className="mt-2.5 text-[13.5px]/[1.7] text-white/75">
                PrestiVac manufactures industrial vacuums — explosion-proof, HEPA, air-operated, wet
                and dry, central systems and custom-built units. We do not manufacture dust
                collectors. If you need ducted source capture with explosion protection, that is a
                collection-system specialist&rsquo;s field and we would rather point you there than
                sell you the wrong half of a solution. If you are not certain which you need,
                describe the problem in the form and we will tell you straight.
              </p>
              <Link
                href="/guides/vacuum-vs-dust-collector"
                className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-300"
              >
                Full comparison
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Standards */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              What the standards require of housekeeping
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              NFPA 660 now consolidates the former commodity-specific standards — NFPA 61 for food
              and agricultural processing, 484 for combustible metals, 652 for fundamentals, 654 for
              particulate solids, 655 for sulfur and 664 for wood. The consolidation reorganises
              rather than relaxes, and it retains the Dust Hazard Analysis requirement that NFPA 652
              introduced. The DHA is where housekeeping stops being a general intention and becomes
              specific: which surfaces accumulate, at what interval, by what method, recorded where.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              On the OSHA side, there is no single comprehensive combustible dust standard for
              general industry. Enforcement runs through the Combustible Dust National Emphasis
              Program, the General Duty Clause, and specific standards bearing on housekeeping,
              storage and hazardous-location electrical installations. Grain handling facilities are
              the exception, having a dedicated standard with explicit housekeeping provisions.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              The point that matters for equipment selection is narrow: a non-rated vacuum can itself
              be the ignition source. Cleaning has to remove accumulation without creating an
              ignition source and without discharging fines back into the room — which rules out
              compressed-air blowdown, sweeping and shop-grade vacuums.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/hazardous-locations/combustible-dust-classification" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                Standards in detail
              </Link>
              <Link href="/guides/dust-hazard-analysis" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                What a DHA involves
              </Link>
              <Link href="/guides/dust-explosion-basics" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 hover:text-white">
                How dust explosions work
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Why not a shop vac */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">
              Why a shop vacuum is the wrong tool here
            </h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              This comes up because the price difference is real and the reasoning is rarely spelled
              out. A standard shop vacuum brings three problems into a dust area at once. Its
              universal motor has brushes that spark as a matter of normal operation. Its plastic
              hose accumulates static charge as dry dust moves through it, with no path to ground —
              and that charge sits exactly where dust concentration is highest. And its filtration
              returns the finest fraction to the room, which is the fraction that matters most.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              That is the whole argument, and it is a construction argument rather than a quality
              one. A rated unit is built conductive, grounded and bonded from hose tip to container,
              with a drive suitable for the classification and filtration that retains what it
              captures.
            </p>
          </div>
          <ul className="mt-7 grid gap-4 sm:grid-cols-3">
            {[
              { title: "Motor", detail: "Brushed motors spark by design; a rated drive or an air-operated unit removes that mechanism." },
              { title: "Hose", detail: "Anti-static hose and conductive accessories bonded to ground, instead of a plastic charge generator." },
              { title: "Filtration", detail: "Retained HEPA filtration so recovered fines leave the building rather than the exhaust." },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-2">
                  <Check aria-hidden className="size-4 text-brand-400" />
                  <h3 className="font-display text-[14px] font-extrabold text-white">{item.title}</h3>
                </div>
                <p className="mt-2 text-[13px]/[1.6] text-white/65">{item.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Range */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
            The range for combustible-dust duty
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { slug: "explosion-proof-vacuums", name: "Explosion proof", note: "Conductive, grounded, bonded construction" },
              { slug: "pneumatic-vacuums", name: "Air-operated", note: "No electrical components in the recovery unit" },
              { slug: "hepa-vacuums", name: "HEPA", note: "Retained filtration for fine and toxic dust" },
              { slug: "central-vacuum-systems", name: "Central systems", note: "Plant-wide drops, one discharge point" },
            ].map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/products/${item.slug}`}
                  className="flex h-full flex-col rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                >
                  <span className="font-display text-[14.5px] font-extrabold text-white">{item.name}</span>
                  <span className="mt-1.5 text-[12px]/[1.55] text-white/55">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[12.5px]/[1.7] text-white/50">
            Airflow, vacuum, motor, capacity and filter-area figures come from the model datasheet in
            the current factory nomenclature, and certification coverage varies by line — the EX1
            HEPA line is UL 1203 Certified under UL 1203 certification. Ask us for the
            datasheet and the applicable certificate together.
          </p>
        </Container>
      </section>

      {/* Quote form — material required on this page */}
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
