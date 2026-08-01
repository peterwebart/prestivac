import type { Metadata } from "next";
import { ArrowRight, Check, CheckCircle2, Clock, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CASE_STUDY_LIBRARY, getCaseStudy } from "@/lib/data/case-study-library";
import { getCategory } from "@/lib/data/product-categories";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return CASE_STUDY_LIBRARY.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const path = `/case-studies/${study.slug}`;
  return {
    title: study.seo.metaTitle,
    description: study.seo.metaDescription,
    keywords: study.seo.keywords,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: study.seo.metaTitle,
      description: study.seo.metaDescription,
      type: "article",
    },
  };
}

const SECTIONS = [
  { id: "summary", label: "Executive Summary" },
  { id: "overview", label: "Project Overview" },
  { id: "background", label: "Industry Background" },
  { id: "challenge", label: "The Challenge" },
  { id: "hazard-analysis", label: "Hazard Analysis" },
  { id: "site-assessment", label: "Site Assessment" },
  { id: "solution", label: "Recommended Solution" },
  { id: "equipment", label: "Equipment Used" },
  { id: "implementation", label: "Implementation" },
  { id: "before-after", label: "Before vs After" },
  { id: "compliance", label: "Compliance" },
  { id: "improvements", label: "Operational Improvements" },
  { id: "technical", label: "Technical Explanation" },
  { id: "study-faq", label: "FAQ" },
  { id: "takeaways", label: "Key Takeaways" },
];

function SectionShell({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-steel-200 py-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-[13px] font-extrabold text-brand-600">
          {String(number).padStart(2, "0")}
        </span>
        <h2 className="font-display text-[22px]/[1.2] font-extrabold text-surface sm:text-[25px]/[1.18]">
          {title}
        </h2>
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const proseClass = "space-y-4 text-[15px]/[1.8] text-steel-600";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const url = `${site.url}/case-studies/${study.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}/#article`,
        headline: study.title,
        description: study.seo.metaDescription,
        datePublished: study.date,
        dateModified: study.date,
        author: { "@type": "Organization", name: site.legalName },
        publisher: { "@id": `${site.url}/#organization` },
        mainEntityOfPage: url,
        articleSection: "Case Studies",
        keywords: study.seo.keywords.join(", "),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: study.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: `${site.url}/case-studies` },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
    ],
  };

  const taxonomyRows: { label: string; value: string }[] = [
    { label: "Industry", value: study.taxonomy.industry },
    { label: "Application", value: study.taxonomy.application },
    { label: "Hazard", value: study.taxonomy.hazard },
    { label: "Material", value: study.taxonomy.material },
    { label: "Process", value: study.taxonomy.process },
    { label: "Dust Class", value: study.taxonomy.dustClass },
    { label: "Facility Type", value: study.taxonomy.facilityType },
    { label: "Relevant Standards", value: study.taxonomy.standards.join(", ") },
    { label: "Products Featured", value: study.taxonomy.products.join(", ") },
    { label: "Target Personas", value: study.taxonomy.personas.join(", ") },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-32 lg:pt-40">
        <div
          aria-hidden
          className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand-600/10 blur-[110px]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="text-[11.5px] font-semibold text-white/50">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <span aria-hidden className="mx-2">/</span>
            <Link href="/case-studies" className="transition-colors hover:text-white">Case Studies</Link>
            <span aria-hidden className="mx-2">/</span>
            <span className="text-brand-400">{study.hero.industry}</span>
          </nav>
          <div className={study.heroImage ? "mt-5 grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center" : "mt-5"}>
            <div>
          <h1 className="max-w-3xl font-display text-3xl/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[2.9rem]/[1.08]">
            {study.title}
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px]/[1.65] text-white/70">
            {study.subtitle}
          </p>
          <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-3 text-[12px]">
            {[
              ["Industry", study.hero.industry],
              ["Hazard", study.hero.hazard],
              ["Material", study.hero.material],
              ["Standards", study.hero.standards.join(" · ")],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-bold uppercase tracking-[0.16em] text-white/45">{label}</dt>
                <dd className="mt-0.5 font-semibold text-white/85">{value}</dd>
              </div>
            ))}
            <div>
              <dt className="font-bold uppercase tracking-[0.16em] text-white/45">Reading time</dt>
              <dd className="mt-0.5 flex items-center gap-1.5 font-semibold text-white/85">
                <Clock aria-hidden className="size-3.5" />
                {study.readingTime} min
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button asChild size="md">
              <a href="/get-a-quote">
                Request a Site Assessment
                <ArrowRight aria-hidden className="size-3.5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="md">
              <Link href="/#solution-finder">Find Your System</Link>
            </Button>
          </div>
            </div>
            {study.heroImage && (
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-white/10">
                <Image
                  src={study.heroImage.src}
                  alt={study.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 92vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Representative-scenario disclosure */}
      <div className="border-y border-steel-200 bg-steel-100">
        <Container className="flex items-start gap-3 py-4">
          <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-steel-500" />
          <p className="text-[12.5px]/[1.6] text-steel-600">
            <strong className="font-semibold text-surface">Representative industry case study.</strong>{" "}
            A realistic, educational engineering scenario based on common
            applications and best practices — not a verified customer
            engagement. No customer identities, quotes or performance metrics
            are claimed.
          </p>
        </Container>
      </div>

      <section className="bg-steel-50 py-14 lg:py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
            {/* In-page nav */}
            <nav aria-label="On this page" className="top-24 hidden self-start lg:sticky lg:block">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-steel-400">
                In this study
              </p>
              <ul className="mt-3 space-y-1.5 border-l border-steel-200">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="-ml-px block border-l-2 border-transparent py-0.5 pl-3 text-[12px] font-medium text-steel-500 transition-colors hover:border-brand-500 hover:text-surface"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <article className="min-w-0 max-w-3xl">
              <SectionShell id="summary" number={1} title="Executive Summary">
                <div className={proseClass}>
                  {study.executiveSummary.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </SectionShell>

              <SectionShell id="overview" number={2} title="Project Overview">
                <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {study.projectOverview.map((row) => (
                    <div key={row.label}>
                      <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-steel-400">
                        {row.label}
                      </dt>
                      <dd className="mt-1 text-[13.5px]/[1.55] font-medium text-surface">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </SectionShell>

              <SectionShell id="background" number={3} title="Industry Background">
                <div className={proseClass}>
                  {study.industryBackground.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </SectionShell>

              <SectionShell id="challenge" number={4} title="The Challenge">
                <dl className="space-y-4">
                  {study.challenge.map((item) => (
                    <div key={item.area} className="rounded-xl bg-white p-4 ring-1 ring-steel-200/70">
                      <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">
                        {item.area}
                      </dt>
                      <dd className="mt-1 text-[13.5px]/[1.6] text-steel-600">
                        {item.detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </SectionShell>

              <SectionShell id="hazard-analysis" number={5} title="Hazard Analysis">
                <div className={proseClass}>
                  {study.hazardAnalysis.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-6 overflow-hidden rounded-xl ring-1 ring-steel-200/70">
                  <table className="w-full bg-white text-left">
                    <caption className="sr-only">The explosion pentagon at this facility</caption>
                    <thead>
                      <tr className="bg-steel-100 text-[10.5px] font-bold uppercase tracking-[0.14em] text-steel-500">
                        <th scope="col" className="px-4 py-3">Pentagon element</th>
                        <th scope="col" className="px-4 py-3">Present as</th>
                      </tr>
                    </thead>
                    <tbody>
                      {study.pentagon.map((row) => (
                        <tr key={row.element} className="border-t border-steel-200/70">
                          <th scope="row" className="px-4 py-3 text-[13px] font-bold text-surface">
                            {row.element}
                          </th>
                          <td className="px-4 py-3 text-[13px]/[1.5] text-steel-600">
                            {row.presence}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionShell>

              <SectionShell id="site-assessment" number={6} title="Site Assessment Findings">
                <ul className="space-y-2.5">
                  {study.siteAssessment.map((finding) => (
                    <li key={finding} className="flex gap-2.5 text-[14px]/[1.65] text-steel-600">
                      <span aria-hidden className="mt-[9px] size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {finding}
                    </li>
                  ))}
                </ul>
              </SectionShell>

              <SectionShell id="solution" number={7} title="Recommended Solution">
                <div className={proseClass}>
                  {study.solution.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </SectionShell>

              <SectionShell id="equipment" number={8} title="Equipment Used">
                <ul className="space-y-3">
                  {study.equipment.map((row) => (
                    <li key={row.item} className="rounded-xl bg-white p-4 ring-1 ring-steel-200/70">
                      <p className="text-[13.5px] font-bold text-surface">{row.item}</p>
                      <p className="mt-0.5 text-[12.5px]/[1.55] text-steel-500">{row.purpose}</p>
                    </li>
                  ))}
                </ul>
              </SectionShell>

              <SectionShell id="implementation" number={9} title="Installation & Implementation">
                <ol className="space-y-4">
                  {study.implementation.map((step, index) => (
                    <li key={step.phase} className="flex gap-4">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white font-display text-[12px] font-extrabold text-brand-600 ring-1 ring-steel-200">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-[13.5px] font-bold text-surface">{step.phase}</p>
                        <p className="mt-0.5 text-[13px]/[1.6] text-steel-600">{step.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </SectionShell>

              <SectionShell id="before-after" number={10} title="Before vs After">
                <div className="overflow-x-auto rounded-xl ring-1 ring-steel-200/70">
                  <table className="w-full min-w-[560px] bg-white text-left">
                    <caption className="sr-only">Housekeeping practice before and after the engineered program</caption>
                    <thead>
                      <tr className="bg-steel-100 text-[10.5px] font-bold uppercase tracking-[0.14em] text-steel-500">
                        <th scope="col" className="px-4 py-3">Aspect</th>
                        <th scope="col" className="px-4 py-3">Before</th>
                        <th scope="col" className="px-4 py-3 text-brand-600">After</th>
                      </tr>
                    </thead>
                    <tbody>
                      {study.beforeAfter.map((row) => (
                        <tr key={row.aspect} className="border-t border-steel-200/70 align-top">
                          <th scope="row" className="px-4 py-3 text-[13px] font-bold text-surface">
                            {row.aspect}
                          </th>
                          <td className="px-4 py-3 text-[13px]/[1.5] text-steel-500">{row.before}</td>
                          <td className="px-4 py-3 text-[13px]/[1.5] font-medium text-surface">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </SectionShell>

              <SectionShell id="compliance" number={11} title="Compliance Improvements">
                <div className={proseClass}>
                  {study.compliance.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </SectionShell>

              <SectionShell id="improvements" number={12} title="Operational Improvements">
                <ul className="space-y-3">
                  {study.operationalImprovements.map((item) => (
                    <li key={item.slice(0, 32)} className="flex gap-2.5 text-[14px]/[1.7] text-steel-600">
                      <CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-brand-600" strokeWidth={1.8} />
                      {item}
                    </li>
                  ))}
                </ul>
              </SectionShell>

              <SectionShell id="technical" number={13} title="Technical Explanation">
                <div className={proseClass}>
                  {study.technical.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </SectionShell>

              <SectionShell id="study-faq" number={14} title="Frequently Asked Questions">
                <div className="space-y-3">
                  {study.faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-xl bg-white ring-1 ring-steel-200/70">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-[14px] font-semibold text-surface [&::-webkit-details-marker]:hidden">
                        {faq.question}
                        <span aria-hidden className="text-steel-400 transition-transform duration-300 group-open:rotate-45">+</span>
                      </summary>
                      <p className="px-4 pb-4 text-[13.5px]/[1.7] text-steel-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </SectionShell>

              <SectionShell id="takeaways" number={15} title="Key Takeaways">
                <ul className="space-y-2.5">
                  {study.takeaways.map((takeaway) => (
                    <li key={takeaway.slice(0, 32)} className="flex gap-2.5 text-[14px]/[1.65] text-steel-600">
                      <Check aria-hidden className="mt-1 size-4 shrink-0 text-brand-600" strokeWidth={2.2} />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </SectionShell>

              {/* Taxonomy block (SEO / GEO classification) */}
              <section aria-label="Case study classification" className="mt-10 rounded-2xl bg-surface p-6 sm:p-8">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">
                  Classification
                </p>
                <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                  {taxonomyRows.map((row) => (
                    <div key={row.label}>
                      <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                        {row.label}
                      </dt>
                      <dd className="mt-0.5 text-[12.5px]/[1.5] font-medium text-white/85">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
                    Content cluster
                  </dt>
                  <dd className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[12.5px] font-semibold text-white/85">
                    {study.taxonomy.cluster.map((node, index) => (
                      <span key={node} className="flex items-center gap-1.5">
                        {index > 0 && <span aria-hidden className="text-brand-400">&rarr;</span>}
                        {node}
                      </span>
                    ))}
                  </dd>
                </div>
              </section>

              {/* Related */}
              <section className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h2 className="font-display text-[16px] font-extrabold text-surface">
                    Related industries
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {study.relatedIndustries.map((industry) => (
                      <li key={industry.href}>
                        <Link
                          href={industry.href}
                          className="inline-block rounded-full bg-white px-3.5 py-1.5 text-[12px] font-semibold text-steel-600 ring-1 ring-steel-200 transition-colors hover:text-surface"
                        >
                          {industry.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-[16px] font-extrabold text-surface">
                    Related products
                  </h2>
                  <ul className="mt-3 space-y-2">
                    {study.relatedProducts.map((slug) => {
                      const category = getCategory(slug);
                      if (!category) return null;
                      return (
                        <li key={slug}>
                          <Link
                            href={"/products/" + slug}
                            className="group flex items-center gap-3 rounded-xl bg-white p-2.5 ring-1 ring-steel-200/70 transition-colors hover:ring-brand-500/50"
                          >
                            <span className="relative size-11 shrink-0 overflow-hidden rounded-lg bg-[#f9f8f6]">
                              <Image src={category.image} alt="" fill sizes="44px" className="object-contain" />
                            </span>
                            <span className="text-[13px] font-bold text-surface">
                              {category.name}
                            </span>
                            <ArrowRight aria-hidden className="ml-auto size-4 text-steel-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
