import type { Metadata } from "next";
import {
  ArrowRight,
  Atom,
  Check,
  Flame,
  ScrollText,
  ShieldCheck,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { InThisPage } from "@/components/in-this-page";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getCaseStudy } from "@/lib/data/case-study-library";
import { getCategory } from "@/lib/data/product-categories";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { subpageJsonLd } from "@/lib/schema";
import { pairedAlternates } from "@/lib/i18n";

export type MaterialGuideData = {
  slug: string;
  name: string;
  groupCrumb: { label: string; anchor: string };
  seo: { title: string; description: string };
  heroIntro: string;
  overviewImage?: { src: string; alt: string };
  badges: { icon: LucideIcon; title: string; detail: string }[];
  facts: { label: string; value: string }[];
  overview: string[];
  industries: { label: string; href: string }[];
  riskHeading: string;
  risks: string[];
  solutions: string[];
  configuration: { step: string; detail: string }[];
  bestPractices: string[];
  faqs: { question: string; answer: string }[];
  studySlug?: string;
  recommended: string[];
  related: { label: string; href: string }[];
};

export function materialGuideMetadata(data: MaterialGuideData): Metadata {
  const path = `/materials/${data.slug}`;
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: { canonical: path, languages: pairedAlternates(path) },
    openGraph: { url: path, title: `${data.seo.title} | PrestiVac`, description: data.seo.description },
  };
}

const FACT_ICONS: LucideIcon[] = [Atom, Flame, ScrollText, ShieldCheck];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "industries", label: "Industries & Applications" },
  { id: "risks", label: "Explosion & Fire Risks" },
  { id: "solutions", label: "Vacuum Solutions" },
  { id: "recommended", label: "Recommended Products" },
  { id: "configuration", label: "System Configuration" },
  { id: "best-practices", label: "Best Practices" },
  { id: "case-study", label: "Case Study" },
  { id: "faqs", label: "FAQs" },
];

/** Shared renderer for all material deep-dive pages. */
export function MaterialGuide({ data }: { data: MaterialGuideData }) {
  const study = data.studySlug ? getCaseStudy(data.studySlug) : undefined;
  const url = `${site.url}/materials/${data.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...subpageJsonLd({
        name: data.name,
        description: data.seo.description,
        path: `/materials/${data.slug}`,
        parents: [{ name: "Dusts & Materials", path: "/materials" }],
      })["@graph"],
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: data.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  const sections = study ? SECTIONS : SECTIONS.filter((s) => s.id !== "case-study");

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
            <Link href="/materials" className="transition-colors hover:text-white">Dusts &amp; Materials</Link>
            <span aria-hidden className="mx-2">/</span>
            <Link href={`/materials#${data.groupCrumb.anchor}`} className="transition-colors hover:text-white">
              {data.groupCrumb.label}
            </Link>
            <span aria-hidden className="mx-2">/</span>
            <span className="text-brand-400">{data.name}</span>
          </nav>
          <h1 className="mt-5 max-w-3xl font-display text-3xl/[1.08] font-extrabold uppercase tracking-[-0.01em] text-white sm:text-[3rem]/[1.05]">
            {data.name}{" "}
            <span className="block text-brand-500">Vacuum Solutions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-[15px]/[1.65] text-white/70">{data.heroIntro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="md">
              <a href="/get-a-quote">
                Get a Quote
                <ArrowRight aria-hidden className="size-3.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="md">
              <Link href="/resources/risk-checker">Check Your Dust Risk</Link>
            </Button>
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

      {/* Body: sticky page nav + content */}
      <section className="bg-graphite-950 pb-20">
        <Container className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-8">
          <InThisPage sections={sections} />
          <div className="min-w-0 space-y-12">
            {/* Overview + material facts */}
            <div id="overview" className="scroll-mt-28">
              <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Overview</h2>
              <div className={cn("mt-4", data.overviewImage && "grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start")}>
                <div className="max-w-3xl space-y-4 text-[14.5px]/[1.75] text-white/70">
                  {data.overview.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                {data.overviewImage && (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <Image
                      src={data.overviewImage.src}
                      alt={data.overviewImage.alt}
                      fill
                      sizes="(min-width: 1024px) 300px, 92vw"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {data.facts.map((fact, index) => {
                  const FactIcon = FACT_ICONS[index % FACT_ICONS.length];
                  return (
                    <li key={fact.label} className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                      <FactIcon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-400">{fact.label}</p>
                      <p className="mt-1 text-[13px]/[1.5] font-semibold text-white/90">{fact.value}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Industries & applications */}
            <div id="industries" className="scroll-mt-28">
              <h2 className="font-display text-[16px] font-extrabold uppercase text-white">Industries &amp; applications</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {data.industries.map((industry) => (
                  <li key={industry.label}>
                    <Link
                      href={industry.href}
                      className="inline-block rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
                    >
                      {industry.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks + solutions */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div id="risks" className="scroll-mt-28 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-7">
                <h2 className="flex items-center gap-2.5 font-display text-[17px] font-extrabold uppercase text-white">
                  <Flame aria-hidden className="size-5 text-brand-500" strokeWidth={1.8} />
                  {data.riskHeading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {data.risks.map((risk) => (
                    <li key={risk.slice(0, 32)} className="flex gap-2.5 text-[13.5px]/[1.6] text-white/70">
                      <XCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-500" strokeWidth={1.9} />
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
              <div id="solutions" className="scroll-mt-28 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-7">
                <h2 className="font-display text-[17px] font-extrabold uppercase text-white">Engineered recovery</h2>
                <ul className="mt-4 space-y-2.5">
                  {data.solutions.map((solution) => (
                    <li key={solution.slice(0, 32)} className="flex gap-2.5 text-[13.5px]/[1.6] text-white/70">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" strokeWidth={2.2} />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommended products */}
            <div id="recommended" className="scroll-mt-28">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Recommended products</h2>
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
                        className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                      >
                        <span className="relative block h-28 overflow-hidden rounded-xl bg-white/[0.06]">
                          <Image src={category.image} alt={category.alt} fill sizes="(min-width:1024px) 240px, 45vw" className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.04]" />
                        </span>
                        <h3 className="mt-3 text-[13px] font-bold text-white">{category.name}</h3>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-[10px] font-bold uppercase tracking-[0.1em] text-brand-400">
                          View category
                          <ArrowRight aria-hidden className="size-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Configuration */}
            <div id="configuration" className="scroll-mt-28 rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8">
              <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Typical system configuration</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {data.configuration.map((item, index) => (
                  <li key={item.step} className="rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
                    <span className="font-display text-[13px] font-extrabold text-brand-400">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-[13.5px] font-bold text-white">{item.step}</p>
                    <p className="mt-1 text-[12px]/[1.55] text-white/55">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Best practices */}
            <div id="best-practices" className="scroll-mt-28 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">Best practices</h2>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {data.bestPractices.map((practice) => (
                  <li key={practice.slice(0, 32)} className="flex gap-2.5 text-[13px]/[1.6] text-white/75">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" strokeWidth={2.2} />
                    {practice}
                  </li>
                ))}
              </ul>
            </div>

            {/* Case study */}
            {study && (
              <Link
                id="case-study"
                href={"/case-studies/" + study.slug}
                className="group block scroll-mt-28 rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/60 sm:p-8"
              >
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">Representative case study</p>
                <h2 className="mt-3 max-w-2xl font-display text-[20px]/[1.25] font-extrabold text-white sm:text-[23px]/[1.2]">{study.title}</h2>
                <p className="mt-3 max-w-2xl text-[13px]/[1.65] text-white/60">{study.subtitle}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                  Read full case study
                  <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )}

            {/* FAQ + related */}
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div id="faqs" className="scroll-mt-28">
                <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">{data.name} FAQ</h2>
                <div className="mt-5 space-y-3">
                  {data.faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-[14px] font-semibold text-white [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <span aria-hidden className="text-white/40 transition-transform duration-300 group-open:rotate-45">+</span>
                      </summary>
                      <p className="px-4 pb-4 text-[13px]/[1.7] text-white/65">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
              <aside className="self-start">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-white">Related materials &amp; resources</h2>
                <ul className="mt-3 space-y-2">
                  {data.related.map((resource) => (
                    <li key={resource.href}>
                      <Link
                        href={resource.href}
                        className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-400 transition-colors hover:text-brand-500"
                      >
                        {resource.label}
                        <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
