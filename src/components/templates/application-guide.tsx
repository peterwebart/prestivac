import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Coins,
  FileText,
  Gauge,
  ShieldCheck,
  Sparkles,
  XCircle,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { InThisPage } from "@/components/in-this-page";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FEATURED_APPLICATIONS } from "@/lib/data/applications";
import { getCaseStudy } from "@/lib/data/case-study-library";
import { getCategory } from "@/lib/data/product-categories";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { subpageJsonLd } from "@/lib/schema";

export type ApplicationGuideData = {
  slug: string;
  title: string;
  titleAccent: string;
  categoryCrumb: { label: string; anchor: string };
  seo: { title: string; description: string };
  tagline: string;
  heroIntro: string;
  heroImage?: { src: string; alt: string };
  badges: { icon: LucideIcon; title: string; detail: string }[];
  overview: string;
  capabilities: { icon: LucideIcon; title: string; detail: string }[];
  materialsHeading: string;
  materials: string[];
  materialsNote: { text: string; link: { label: string; href: string } };
  challengesHeading: string;
  challenges: string[];
  whyHeading: string;
  why: string[];
  benefits: { title: string; detail: string }[];
  recommended: string[];
  setup: { step: string; detail: string }[];
  setupNote: { text: string; link?: { label: string; href: string }; textAfter?: string };
  faqs: { question: string; answer: string }[];
  relatedApplications: string[];
  relatedResources: { label: string; href: string }[];
  studySlug?: string;
};

/**
 * Related-application entries are written as display labels ("CNC grinding") or
 * as slugs. Where an entry matches a guide that actually exists, link to that
 * page instead of the directory anchor — that turns a decorative chip into a
 * real internal link and shows the guide's proper name.
 */
function resolveApplication(entry: string): { slug: string; name: string } | undefined {
  const key = entry.trim().toLowerCase();
  const bySlug = FEATURED_APPLICATIONS.find((application) => application.slug === key);
  if (bySlug) return { slug: bySlug.slug, name: bySlug.name };
  const byName = FEATURED_APPLICATIONS.find(
    (application) => application.name.toLowerCase() === key,
  );
  if (byName) return { slug: byName.slug, name: byName.name };
  return undefined;
}

export function applicationGuideMetadata(data: ApplicationGuideData): Metadata {
  const path = `/applications/${data.slug}`;
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: { canonical: path },
    openGraph: { url: path, title: `${data.seo.title} | PrestiVac`, description: data.seo.description },
  };
}

const BENEFIT_ICONS: LucideIcon[] = [ShieldCheck, Gauge, Coins, Sparkles];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "challenges", label: "Challenges" },
  { id: "why-vacuum", label: "Why Vacuum?" },
  { id: "benefits", label: "Solution Benefits" },
  { id: "recommended", label: "Recommended Vacuums" },
  { id: "setup", label: "Typical System Setup" },
  { id: "case-study", label: "Case Study" },
  { id: "faqs", label: "FAQs" },
  { id: "related", label: "Related" },
];

/** Shared renderer for all application deep-dive pages. */
export function ApplicationGuide({ data }: { data: ApplicationGuideData }) {
  const study = data.studySlug ? getCaseStudy(data.studySlug) : undefined;
  const url = `${site.url}/applications/${data.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...subpageJsonLd({
        name: `${data.title} ${data.titleAccent}`,
        description: data.seo.description,
        path: `/applications/${data.slug}`,
        parents: [{ name: "Applications", path: "/applications" }],
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
            <Link href="/applications" className="transition-colors hover:text-white">Applications</Link>
            <span aria-hidden className="mx-2">/</span>
            <Link href={`/applications#${data.categoryCrumb.anchor}`} className="transition-colors hover:text-white">
              {data.categoryCrumb.label}
            </Link>
            <span aria-hidden className="mx-2">/</span>
            <span className="text-brand-400">{data.title}</span>
          </nav>
          <div className={cn("mt-5", data.heroImage && "grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center")}>
            <div>
          <h1 className="max-w-3xl font-display text-3xl/[1.08] font-extrabold uppercase tracking-[-0.01em] text-white sm:text-[3rem]/[1.05]">
            {data.title}{" "}
            <span className="block text-brand-500">{data.titleAccent}</span>
          </h1>
          <p className="mt-4 font-display text-[15px] font-bold text-white/90">{data.tagline}</p>
          <p className="mt-3 max-w-2xl text-[15px]/[1.65] text-white/70">{data.heroIntro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="md">
              <a href="/get-a-quote">
                Get a Quote
                <ArrowRight aria-hidden className="size-3.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="md">
              <Link href="/#solution-finder">Find Your System</Link>
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
                  sizes="(min-width: 1024px) 420px, 92vw"
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

      {/* Body: sticky page nav + content */}
      <section className="bg-graphite-950 pb-20">
        <Container className="lg:grid lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-8">
          <InThisPage sections={sections} />
          <div className="min-w-0 space-y-12">
            {/* Overview + materials */}
            <div id="overview" className="scroll-mt-28 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div>
                <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Overview</h2>
                <p className="mt-4 text-[14.5px]/[1.75] text-white/70">{data.overview}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {data.capabilities.map((capability) => (
                    <li key={capability.title} className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                      <capability.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                      <p className="mt-2.5 text-[13px] font-bold text-white">{capability.title}</p>
                      <p className="mt-0.5 text-[11.5px]/[1.5] text-white/55">{capability.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <aside className="self-start rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-400">
                  {data.materialsHeading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {data.materials.map((material) => (
                    <li key={material} className="flex items-center gap-2.5 text-[13px] font-medium text-white/80">
                      <Check aria-hidden className="size-4 shrink-0 text-brand-400" strokeWidth={2.2} />
                      {material}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-white/10 pt-4 text-[11.5px]/[1.6] text-white/50">
                  {data.materialsNote.text}{" "}
                  <Link href={data.materialsNote.link.href} className="font-semibold text-brand-400">
                    {data.materialsNote.link.label}
                  </Link>
                  .
                </p>
              </aside>
            </div>

            {/* Challenges + why */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div id="challenges" className="scroll-mt-28 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-7">
                <h2 className="font-display text-[17px] font-extrabold uppercase text-white">{data.challengesHeading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {data.challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-2.5 text-[13.5px]/[1.6] text-white/70">
                      <XCircle aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-500" strokeWidth={1.9} />
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
              <div id="why-vacuum" className="scroll-mt-28 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-7">
                <h2 className="font-display text-[17px] font-extrabold uppercase text-white">{data.whyHeading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {data.why.map((reason) => (
                    <li key={reason} className="flex gap-2.5 text-[13.5px]/[1.6] text-white/70">
                      <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" strokeWidth={2.2} />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Solution benefits */}
            <div id="benefits" className="scroll-mt-28">
              <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Solution benefits</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {data.benefits.map((benefit, index) => {
                  const BenefitIcon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
                  return (
                    <li key={benefit.title} className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-brand-600/15">
                        <BenefitIcon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                      </span>
                      <p className="mt-3 text-[14px] font-bold text-white">{benefit.title}</p>
                      <p className="mt-1 text-[12px]/[1.55] text-white/55">{benefit.detail}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Recommended */}
            <div id="recommended" className="scroll-mt-28">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Recommended vacuums</h2>
                <Link href="/products" className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500">
                  View all vacuums &rarr;
                </Link>
              </div>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.recommended.map((slug) => {
                  const category = getCategory(slug);
                  if (!category) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={"/products/" + slug}
                        className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                      >
                        <span className="relative block h-36 overflow-hidden rounded-xl bg-white/[0.06]">
                          <Image src={category.image} alt={category.alt} fill sizes="(min-width:1024px) 300px, 90vw" className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]" />
                        </span>
                        <h3 className="mt-4 font-display text-[15px] font-extrabold text-white">{category.name}</h3>
                        <p className="mt-1 text-[12px]/[1.5] text-white/55">{category.tagline}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-[10.5px] font-bold uppercase tracking-[0.1em] text-brand-400">
                          View category
                          <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Setup */}
            <div id="setup" className="scroll-mt-28 rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8">
              <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">Typical system setup</h2>
              <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {data.setup.map((item, index) => (
                  <li key={item.step} className="rounded-2xl bg-white/[0.05] p-5 ring-1 ring-white/10">
                    <span className="font-display text-[13px] font-extrabold text-brand-400">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-[13.5px] font-bold text-white">{item.step}</p>
                    <p className="mt-1 text-[12px]/[1.55] text-white/55">{item.detail}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-[12.5px]/[1.6] text-white/50">
                {data.setupNote.text}
                {data.setupNote.link && (
                  <>
                    {" "}
                    <Link href={data.setupNote.link.href} className="font-semibold text-brand-400">
                      {data.setupNote.link.label}
                    </Link>
                    {data.setupNote.textAfter && <> {data.setupNote.textAfter}</>}
                  </>
                )}
              </p>
            </div>

            {/* Case study + experts */}
            {study && (
              <div id="case-study" className="scroll-mt-28 grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
                <Link
                  href={"/case-studies/" + study.slug}
                  className="group block rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/60 sm:p-8"
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">Representative case study</p>
                  <h2 className="mt-3 font-display text-[20px]/[1.25] font-extrabold text-white sm:text-[23px]/[1.2]">{study.title}</h2>
                  <p className="mt-3 text-[13px]/[1.65] text-white/60">{study.subtitle}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                    Read full case study
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
                <div className="flex flex-col justify-center rounded-3xl bg-brand-600/10 p-7 ring-1 ring-brand-500/30">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-400">Need help finding the right solution?</p>
                  <p className="mt-2 font-display text-[19px]/[1.25] font-extrabold text-white">Our experts are ready to help.</p>
                  <p className="mt-2 text-[12.5px]/[1.6] text-white/60">Tell us about your application and we&rsquo;ll recommend the ideal vacuum solution.</p>
                  <Button asChild size="md" className="mt-5 self-start">
                    <a href="/get-a-quote">
                      Get a Quote
                      <ArrowRight aria-hidden className="size-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            )}

            {/* FAQs */}
            <div id="faqs" className="scroll-mt-28">
              <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white">{data.title} FAQ</h2>
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

            {/* Related */}
            <div id="related" className="scroll-mt-28 grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-[16px] font-extrabold uppercase text-white">Related applications</h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {data.relatedApplications.map((application) => {
                    const match = resolveApplication(application);
                    return (
                      <li key={application}>
                        <Link
                          href={
                            match
                              ? `/applications/${match.slug}`
                              : `/applications#${data.categoryCrumb.anchor}`
                          }
                          className="inline-block rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
                        >
                          {match ? match.name : application}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-[16px] font-extrabold uppercase text-white">Related resources</h2>
                <ul className="mt-3 grid gap-2.5">
                  {data.relatedResources.map((resource) => (
                    <li key={resource.href}>
                      <Link
                        href={resource.href}
                        className="group flex items-center gap-3 rounded-xl bg-white/[0.04] p-3.5 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-600/15">
                          <FileText aria-hidden className="size-4.5 text-brand-400" strokeWidth={1.7} />
                        </span>
                        <span className="text-[13px] font-semibold text-white/85">{resource.label}</span>
                        <ArrowRight aria-hidden className="ml-auto size-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
