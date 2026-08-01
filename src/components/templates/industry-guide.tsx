import type { Metadata } from "next";
import { ArrowRight, LayoutGrid, type LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ProcessExplorer, type ProcessStage } from "@/components/process-explorer";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { APPLICATION_CATEGORIES } from "@/lib/data/applications";
import { getCaseStudy } from "@/lib/data/case-study-library";
import { COMPANY_BAND } from "@/lib/data/company";
import { getCategory } from "@/lib/data/product-categories";
import { cn } from "@/lib/utils";
import { subpageJsonLd } from "@/lib/schema";

export type IndustryGuideData = {
  slug: string;
  name: string;
  titleAccent: string;
  seo: { title: string; description: string };
  heroIntro: string;
  heroImage?: { src: string; alt: string };
  badges: { icon: LucideIcon; title: string; detail: string }[];
  stagesIntro: string;
  stages: ProcessStage[];
  challengesHeading: string;
  challenges: { icon: LucideIcon; title: string; detail: string }[];
  materialsHeading: string;
  materials: { name: string; combustible: string; approach: string; href?: string }[];
  materialsDirectory: { label: string; href: string };
  applicationsHeading: string;
  applicationCategorySlug: string;
  recommended: string[];
  studySlug?: string;
};

export function industryGuideMetadata(data: IndustryGuideData): Metadata {
  const path = `/industries/${data.slug}`;
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${data.seo.title} | PrestiVac`, description: data.seo.description },
  };
}

function combustiblePill(value: string) {
  const v = value.toLowerCase();
  if (v.startsWith("yes")) return "bg-brand-600/20 text-brand-300 ring-brand-500/40";
  if (v.startsWith("no")) return "bg-emerald-500/15 text-emerald-300 ring-emerald-500/40";
  return "bg-amber-500/15 text-amber-300 ring-amber-500/40";
}

/** Shared renderer for all industry deep-dive pages. */
export function IndustryGuide({ data }: { data: IndustryGuideData }) {
  const study = data.studySlug ? getCaseStudy(data.studySlug) : undefined;
  const applicationCategory = APPLICATION_CATEGORIES.find(
    (category) => category.slug === data.applicationCategorySlug,
  );
  const applications = applicationCategory?.items ?? [];
  const ApplicationIcon = applicationCategory?.icon ?? LayoutGrid;
  const jsonLd = subpageJsonLd({
    name: data.name,
    description: data.seo.description,
    path: `/industries/${data.slug}`,
    parents: [{ name: "Industries", path: "/industries" }],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 pb-12 pt-32 lg:pt-40">
        <div aria-hidden className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand-600/10 blur-[110px]" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-[11.5px] font-semibold text-white/50">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden className="mx-2">/</span>
            <Link href="/industries" className="transition-colors hover:text-white">Industries</Link>
            <span aria-hidden className="mx-2">/</span>
            <span className="text-brand-400">{data.name}</span>
          </nav>
          <div className={cn("mt-5", data.heroImage && "grid gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-center")}>
            <div>
              <h1 className="max-w-3xl font-display text-3xl/[1.08] font-extrabold uppercase tracking-[-0.01em] text-white sm:text-[2.7rem]/[1.06]">
                Vacuum solutions engineered for{" "}
                <span className="text-brand-500">{data.titleAccent}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-[15px]/[1.65] text-white/70">{data.heroIntro}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Button asChild size="md">
                  <a href="/get-a-quote">
                    Talk to an Expert
                    <ArrowRight aria-hidden className="size-3.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href="/#solution-finder">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            {data.heroImage && (
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10">
                <Image
                  src={data.heroImage.src}
                  alt={data.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 92vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {data.badges.map((badge) => (
              <li key={badge.title} className="flex items-start gap-3 bg-graphite-900/80 p-4">
                <badge.icon aria-hidden className="mt-0.5 size-5 shrink-0 text-brand-400" strokeWidth={1.7} />
                <div>
                  <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-white">{badge.title}</p>
                  <p className="mt-0.5 text-[11.5px]/[1.45] text-white/55">{badge.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Positioning band — qualitative until client-verified figures land */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <Container>
          <ul className="grid grid-cols-2 gap-px overflow-hidden sm:grid-cols-3 lg:grid-cols-5">
            {COMPANY_BAND.map((item) => (
              <li key={item.label} className="px-4 py-6 text-center">
                <p className="font-display text-[17px] font-extrabold text-white">{item.value}</p>
                <p className="mt-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/45">{item.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Process explorer */}
      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">
            {data.name} production process explorer
          </p>
          <h2 className="mt-2 font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
            Every stage. Every challenge. The right vacuum solution.
          </h2>
          <p className="mt-3 max-w-2xl text-[13.5px]/[1.7] text-white/60">{data.stagesIntro}</p>
          <div className="mt-7">
            <ProcessExplorer stages={data.stages} />
          </div>
        </Container>
      </section>

      {/* Challenges */}
      <section className="border-t border-white/10 bg-white/[0.02] py-14 lg:py-16">
        <Container>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">Key challenges</p>
          <h2 className="mt-2 font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
            {data.challengesHeading}
          </h2>
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.challenges.map((challenge) => (
              <li key={challenge.title} className="rounded-2xl bg-graphite-950 p-5 ring-1 ring-white/10">
                <challenge.icon aria-hidden className="size-5 text-brand-500" strokeWidth={1.7} />
                <h3 className="mt-3 text-[14px] font-bold text-white">{challenge.title}</h3>
                <p className="mt-1.5 text-[12.5px]/[1.6] text-white/55">{challenge.detail}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Materials knowledge table */}
      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">
            Dust &amp; materials knowledge center
          </p>
          <h2 className="mt-2 font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
            {data.materialsHeading}
          </h2>
          <div className="mt-7 overflow-x-auto rounded-2xl ring-1 ring-white/10">
            <table className="w-full min-w-[680px] text-left">
              <caption className="sr-only">Common {data.name} materials and recovery approaches</caption>
              <thead>
                <tr className="bg-white/[0.06] text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/55">
                  <th scope="col" className="px-4 py-3.5">Material</th>
                  <th scope="col" className="px-4 py-3.5">Combustible</th>
                  <th scope="col" className="px-4 py-3.5">Recovery approach</th>
                  <th scope="col" className="px-4 py-3.5">
                    <span className="sr-only">Deep dive</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.materials.map((material) => (
                  <tr key={material.name} className="border-t border-white/10 align-top">
                    <th scope="row" className="px-4 py-3.5 text-[13.5px] font-bold text-white">{material.name}</th>
                    <td className="px-4 py-3.5">
                      <span className={cn("inline-block rounded-full px-2.5 py-1 text-[10.5px] font-bold ring-1", combustiblePill(material.combustible))}>
                        {material.combustible}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-[13px]/[1.55] text-white/70">{material.approach}</td>
                    <td className="px-4 py-3.5 text-right">
                      {material.href && (
                        <Link href={material.href} aria-label={`${material.name} deep dive`} className="inline-flex text-brand-400 transition-colors hover:text-brand-500">
                          <ArrowRight aria-hidden className="size-4" />
                        </Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[12px]/[1.6] text-white/45">
            Combustibility and severity are material- and particle-size-specific
            — testing and your Dust Hazard Analysis govern. Full directory:{" "}
            <Link href={data.materialsDirectory.href} className="font-semibold text-brand-400">
              {data.materialsDirectory.label}
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* Applications + recommended + study */}
      <section className="border-t border-white/10 bg-white/[0.02] py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-[20px]/[1.2] font-extrabold uppercase text-white">
            {data.applicationsHeading}
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {applications.slice(0, 9).map((application) => (
              <li key={application}>
                <Link
                  href={"/applications#" + data.applicationCategorySlug}
                  className="flex h-full flex-col items-start gap-2.5 rounded-xl bg-graphite-950 p-4 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                >
                  <ApplicationIcon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                  <span className="text-[12px] font-semibold text-white/80">{application}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={"/applications#" + data.applicationCategorySlug}
                className="flex h-full flex-col items-start gap-2.5 rounded-xl bg-brand-600/10 p-4 ring-1 ring-brand-500/40 transition-colors hover:ring-brand-500/70"
              >
                <LayoutGrid aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                <span className="text-[12px] font-bold text-brand-300">View all</span>
              </Link>
            </li>
          </ul>

          <div className="mt-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-[20px]/[1.2] font-extrabold uppercase text-white">
              Built for performance. Built for compliance.
            </h2>
            <Link href="/products" className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500">
              View all products &rarr;
            </Link>
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.recommended.map((slug) => {
              const category = getCategory(slug);
              if (!category) return null;
              return (
                <li key={slug}>
                  <Link
                    href={"/products/" + slug}
                    className="group flex h-full flex-col rounded-2xl bg-graphite-950 p-4 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                  >
                    <span className="relative block h-32 overflow-hidden rounded-xl bg-white/[0.06]">
                      <Image src={category.image} alt={category.alt} fill sizes="(min-width:1024px) 260px, 45vw" className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" />
                    </span>
                    <h3 className="mt-3 text-[13.5px] font-bold text-white">{category.name}</h3>
                    <p className="mt-1 text-[11.5px]/[1.5] text-white/50">{category.tagline}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-400">
                      Learn more
                      <ArrowRight aria-hidden className="size-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {study && (
            <Link
              href={"/case-studies/" + study.slug}
              className="group mt-12 block rounded-3xl bg-graphite-950 p-7 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/60 sm:p-9"
            >
              <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">Representative case study</p>
              <h2 className="mt-3 max-w-2xl font-display text-[22px]/[1.25] font-extrabold text-white sm:text-[26px]/[1.2]">{study.title}</h2>
              <p className="mt-3 max-w-2xl text-[13.5px]/[1.65] text-white/60">{study.subtitle}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                Read the full case study
                <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          )}
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
