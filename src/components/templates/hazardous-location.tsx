import type { Metadata } from "next";
import { ArrowRight, Check, Info, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export type HazardousLocationTopic = {
  slug: string;
  /** Short label for cards and navigation. */
  name: string;
  /** Longer H1. */
  title: string;
  eyebrow: string;
  seo: { title: string; description: string };
  heroIntro: string;
  keyPoints: string[];
  sections: { heading: string; body: string[] }[];
  comparison?: {
    heading: string;
    columns: [string, string];
    rows: { aspect: string; left: string; right: string }[];
  };
  /** What this means when specifying recovery equipment. Kept honest: no
   * certification is claimed beyond UL 1203 on the explosion proof lines. */
  equipmentNote: string[];
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export function hazardousLocationMetadata(topic: HazardousLocationTopic): Metadata {
  const path = `/hazardous-locations/${topic.slug}`;
  return {
    title: topic.seo.title,
    description: topic.seo.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${topic.seo.title} | PrestiVac`,
      description: topic.seo.description,
    },
  };
}

export function HazardousLocationPage({ topic }: { topic: HazardousLocationTopic }) {
  const url = `${site.url}/hazardous-locations/${topic.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...subpageJsonLd({
        name: topic.title,
        description: topic.seo.description,
        path: `/hazardous-locations/${topic.slug}`,
        parents: [{ name: "Hazardous Locations", path: "/hazardous-locations" }],
      })["@graph"],
      ...(topic.faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}/#faq`,
              mainEntity: topic.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-28 lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/hazardous-locations" className="transition-colors hover:text-white">
              Hazardous Locations
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{topic.name}</span>
          </nav>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
            {topic.eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl/[1.06] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.04]">
            {topic.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[15px]/[1.7] text-white/70">{topic.heroIntro}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {topic.keyPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-4 text-[13px]/[1.6] text-white/75 ring-1 ring-white/10"
              >
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Body sections */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl space-y-10">
            {topic.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-display text-[20px]/[1.2] font-extrabold text-white">
                  {section.heading}
                </h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="mt-3.5 text-[14.5px]/[1.75] text-white/70">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      {topic.comparison && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              {topic.comparison.heading}
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-white/10">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-white/[0.06]">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                      Aspect
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-extrabold text-white">
                      {topic.comparison.columns[0]}
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-extrabold text-white">
                      {topic.comparison.columns[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topic.comparison.rows.map((row) => (
                    <tr key={row.aspect} className="border-t border-white/10 align-top">
                      <th
                        scope="row"
                        className="px-5 py-4 text-[12px] font-semibold uppercase tracking-[0.06em] text-white/50"
                      >
                        {row.aspect}
                      </th>
                      <td className="px-5 py-4 text-[13.5px]/[1.6] text-white/75">{row.left}</td>
                      <td className="px-5 py-4 text-[13.5px]/[1.6] text-white/75">{row.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>
      )}

      {/* What it means for equipment */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <ShieldCheck aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
              <h2 className="font-display text-[17px] font-extrabold text-white">
                What this means when you specify recovery equipment
              </h2>
            </div>
            {topic.equipmentNote.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/75">
                {paragraph}
              </p>
            ))}
            <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
              <Link
                href="/products/explosion-proof-vacuums"
                className="rounded-full bg-brand-600/20 px-3.5 py-1.5 font-semibold text-brand-200 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/30"
              >
                Explosion proof vacuums
              </Link>
              <Link
                href="/products/pneumatic-vacuums"
                className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
              >
                Air-operated vacuums
              </Link>
              <Link
                href="/products/hepa-vacuums"
                className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
              >
                HEPA vacuums
              </Link>
            </div>
          </div>
          <p className="mt-6 flex max-w-3xl items-start gap-2.5 text-[12px]/[1.65] text-white/45">
            <Info aria-hidden className="mt-0.5 size-3.5 shrink-0" />
            Area classification is determined by your own engineering assessment and the
            authority having jurisdiction. This page explains the framework; it is not a
            classification of your facility, and it does not replace the applicable code or
            your Dust Hazard Analysis.
          </p>
        </Container>
      </section>

      {/* FAQs */}
      {topic.faqs.length > 0 && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              Frequently asked questions
            </h2>
            <dl className="mt-6 max-w-3xl space-y-3">
              {topic.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                  <dt className="font-display text-[15px] font-extrabold text-white">{faq.question}</dt>
                  <dd className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {/* Related */}
      <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">Related reading</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {topic.related.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex h-full items-center justify-between gap-3 rounded-xl bg-white/[0.04] p-5 text-[13px] font-semibold text-white ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                >
                  {item.label}
                  <ArrowRight aria-hidden className="size-3.5 shrink-0 text-brand-400" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
