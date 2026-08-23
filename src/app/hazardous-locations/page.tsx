import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { HAZARDOUS_LOCATION_TOPICS } from "@/lib/data/hazardous-locations";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Class I and Class II, Divisions 1 and 2, dust Groups E, F and G, temperature codes, intrinsic safety and ATEX — the hazardous-location framework explained.";

export const metadata: Metadata = {
  title: "Hazardous Location Classification — Class I & II",
  description,
  alternates: { canonical: "/hazardous-locations" },
  openGraph: { url: "/hazardous-locations", title: "Hazardous Locations", description },
};

/**
 * Curated groupings. Any topic NOT named here is picked up automatically by the
 * catch-all below, so adding a topic to HAZARDOUS_LOCATION_TOPICS can never
 * silently leave it unlinked from this index again — which is how the standards
 * pages ended up orphaned.
 */
const CURATED: { heading: string; slugs: string[] }[] = [
  {
    heading: "Class II — combustible dust",
    slugs: [
      "class-ii-division-1",
      "class-ii-division-2",
      "class-ii-division-1-vs-division-2",
      "class-ii-groups-e-f-g",
      "combustible-dust-classification",
    ],
  },
  {
    heading: "Class I — gases and vapours",
    slugs: ["class-i-division-1", "class-i-division-2", "class-i-division-1-vs-division-2"],
  },
  {
    heading: "Equipment standards & certification",
    slugs: ["ul-1203", "intrinsically-safe-vacuums", "nfpa-70-nec"],
  },
  {
    heading: "Combustible dust standards",
    slugs: ["nfpa-660", "nfpa-652", "nfpa-654", "nfpa-484", "osha-combustible-dust"],
  },
  {
    heading: "International schemes",
    slugs: ["atex", "iecex", "atex-vs-north-american"],
  },
];

const CURATED_SLUGS = new Set(CURATED.flatMap((group) => group.slugs));

const UNGROUPED = HAZARDOUS_LOCATION_TOPICS.filter(
  (topic) => !CURATED_SLUGS.has(topic.slug),
).map((topic) => topic.slug);

const GROUPINGS: { heading: string; slugs: string[] }[] = [
  ...CURATED,
  ...(UNGROUPED.length ? [{ heading: "More topics", slugs: UNGROUPED }] : []),
];

export default function HazardousLocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({
              name: "Hazardous Location Classification",
              description,
              path: "/hazardous-locations",
            }),
          ).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="Compliance & Classification"
        title="Hazardous location classification"
        description={description}
      />

      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
              Start with the classification, not the product
            </h2>
            <p className="mt-4 text-[14.5px]/[1.75] text-white/70">
              Almost every difficult equipment conversation starts in the wrong place — with a
              machine, rather than with the classification of the space it has to work in. The Class
              tells you what kind of hazard is present, the Division tells you how often it is
              expected, the Group tells you which material, and the temperature code caps how hot
              the equipment may get. Equipment follows all four together.
            </p>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
              Classification is assigned by your own electrical or process engineer and accepted by
              the authority having jurisdiction. These pages explain the framework so the
              conversation with your supplier can be specific.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {GROUPINGS.map((group) => (
              <div key={group.heading}>
                <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.14em] text-brand-400">
                  {group.heading}
                </h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  {group.slugs.map((slug) => {
                    const topic = HAZARDOUS_LOCATION_TOPICS.find((t) => t.slug === slug);
                    if (!topic) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={`/hazardous-locations/${topic.slug}`}
                          className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                        >
                          <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/40">
                            {topic.eyebrow}
                          </span>
                          <span className="mt-2 font-display text-[17px]/[1.25] font-extrabold text-white">
                            {topic.name}
                          </span>
                          <span className="mt-2 text-[13px]/[1.6] text-white/60">
                            {topic.heroIntro.split(". ")[0]}.
                          </span>
                          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                            Read
                            <ArrowRight
                              aria-hidden
                              className="size-3.5 transition-transform group-hover:translate-x-1"
                            />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-[12.5px]/[1.7] text-white/45">
            These pages are explanatory. They do not classify your facility, they do not replace the
            applicable code or your Dust Hazard Analysis, and they are not a substitute for advice
            Our listing is CSA Certificate 70122393, assessed against UL 1203 (5th Edition). It
            carries two scopes: the EX1 HEPA line for Class I, Gp.&nbsp;D and Class II, Gps.&nbsp;E,
            F and G at T3C; the EV EX HEPA line for Class II, Div.&nbsp;2, Gps.&nbsp;F and G only.
            Ask us for the documents that apply
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
