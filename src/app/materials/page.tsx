import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { MaterialsDirectory } from "@/components/directory/materials-directory";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FEATURED_MATERIALS } from "@/lib/data/materials";
import { pairedAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "The combustible dust and materials directory: metal dusts, wood, food, pharmaceutical, chemical, battery and additive manufacturing powders — and how each is safely recovered.";

export const metadata: Metadata = {
  title: "Dusts & Materials",
  description,
  alternates: { canonical: "/materials", languages: pairedAlternates("/materials") },
  openGraph: { url: "/materials", title: "Dusts & Materials", description },
};

export default function MaterialsPage() {
  const featuredMaterials = [...FEATURED_MATERIALS].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Dusts & Materials", description, path: "/materials" }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Dusts & Materials"
        title="Know the dust. Choose the right recovery."
        description="Most fine industrial powders are combustible — the differences that matter are severity, reactivity and toxicity. Find your material below."
      />

      {/* Featured material guides */}
      <section className="bg-steel-50 py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-[22px]/[1.2] font-extrabold text-surface sm:text-[26px]/[1.15]">
            Featured material guides
          </h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredMaterials.map((material) => (
              <li key={material.slug}>
                <Link
                  href={"/materials/" + material.slug}
                  className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-steel-200/70 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-steel-400">
                    {material.group}
                  </p>
                  <h3 className="mt-2 font-display text-[19px]/[1.25] font-extrabold text-surface">
                    {material.name}
                  </h3>
                  <p className="mt-2 text-[13px]/[1.6] text-steel-500">{material.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-600">
                    Read the guide
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-steel-300 p-7">
              <p className="text-[13px]/[1.6] text-steel-500">
                Material guides roll out group by group. Handling something
                not covered yet?{" "}
                <a href="/get-a-quote" className="font-semibold text-brand-600">
                  Ask an engineer
                </a>{" "}
                — material identification is where every specification starts.
              </p>
            </li>
          </ul>
        </Container>
      </section>

      {/* Full searchable directory — dark section: DirectoryExplorer is a dark-tone component */}
      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
            The full materials directory
          </h2>
          <MaterialsDirectory />
          <p className="mt-8 max-w-3xl text-[12.5px]/[1.6] text-white/50">
            A listing here doesn&rsquo;t replace testing: combustibility,
            severity class and ignition energy are material- and
            particle-size-specific. Unsure about yours? Start with{" "}
            <Link href="/resources/risk-checker" className="font-semibold text-brand-400">
              the dust risk checker
            </Link>{" "}
            and{" "}
            <Link href="/resources/dust-hazard-analysis" className="font-semibold text-brand-400">
              what a DHA involves
            </Link>
            .
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
