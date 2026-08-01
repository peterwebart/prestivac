import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { INDUSTRY_DIRECTORY } from "@/lib/data/industries-directory";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Industrial vacuum solutions across 35+ industries — from automotive and aerospace to pharmaceutical, battery manufacturing, food processing and grain handling.";

export const metadata: Metadata = {
  title: "Industries",
  description,
  alternates: { canonical: "/industries" },
  openGraph: { url: "/industries", title: "Industries", description },
};

export default function IndustriesPage() {
  const byName = (a: (typeof INDUSTRY_DIRECTORY)[number], b: (typeof INDUSTRY_DIRECTORY)[number]) =>
    a.name.localeCompare(b.name);
  const deepDives = INDUSTRY_DIRECTORY.filter((industry) => industry.href).sort(byName);
  const rest = INDUSTRY_DIRECTORY.filter((industry) => !industry.href).sort(byName);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Industries", description, path: "/industries" }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Industries"
        title="Built for the way your industry actually works"
        description="Every industry generates its own dusts, runs its own standards and cleans on its own rhythm. Find yours below — deep dives first, full directory after."
      />

      {/* Industry deep dives */}
      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">Industry deep dives</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {deepDives.map((industry) => (
              <li key={industry.slug}>
                <Link
                  href={industry.href!}
                  className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-600/15">
                    <industry.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-[16px] font-extrabold text-white">{industry.name}</h3>
                  <p className="mt-1.5 text-[12px]/[1.55] text-white/55">
                    {industry.segments.slice(0, 3).join(" · ")}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10.5px] font-bold uppercase tracking-[0.12em] text-brand-400">
                    Industry deep dive
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Full directory */}
      <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">All industries</h2>
          <ul className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {rest.map((industry) => (
              <li key={industry.slug} id={industry.slug} className="scroll-mt-24 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/15">
                    <industry.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-display text-[15px] font-extrabold text-white">{industry.name}</h3>
                </div>
                <p className="mt-3 text-[12px]/[1.55] text-white/55">{industry.segments.join(" · ")}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {industry.dusts.map((dust) => (
                    <li key={dust} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10.5px] font-medium text-white/60">
                      {dust}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-[12.5px]/[1.6] text-white/50">
            Don&rsquo;t see your industry?{" "}
            <a href="/get-a-quote" className="font-semibold text-brand-400">Get a Quote</a>
            {" "}— the fundamentals travel: material, area classification, duty cycle.
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
