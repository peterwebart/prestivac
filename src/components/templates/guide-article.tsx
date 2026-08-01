import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export type GuideArticle = {
  slug: string;
  name: string;
  title: string;
  eyebrow: string;
  minutes: number;
  seo: { title: string; description: string };
  heroIntro: string;
  keyPoints: string[];
  sections: { heading: string; body: string[] }[];
  comparison?: {
    heading: string;
    columns: [string, string];
    rows: { aspect: string; left: string; right: string }[];
  };
  /** Optional closing box — used where an honest scope statement belongs. */
  callout?: { heading: string; body: string[] };
  faqs: { question: string; answer: string }[];
  related: { label: string; href: string }[];
};

export function guideArticleMetadata(article: GuideArticle): Metadata {
  const path = `/guides/${article.slug}`;
  return {
    title: article.seo.title,
    description: article.seo.description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: `${article.seo.title} | PrestiVac`,
      description: article.seo.description,
    },
  };
}

export function GuideArticlePage({ article }: { article: GuideArticle }) {
  const url = `${site.url}/guides/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...subpageJsonLd({
        name: article.title,
        description: article.seo.description,
        path: `/guides/${article.slug}`,
        parents: [{ name: "Guides", path: "/guides" }],
      })["@graph"],
      ...(article.faqs.length
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}/#faq`,
              mainEntity: article.faqs.map((faq) => ({
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

      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-28 lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/guides" className="transition-colors hover:text-white">Guides</Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{article.name}</span>
          </nav>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
              {article.eyebrow}
            </p>
            <span aria-hidden className="text-white/20">|</span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {article.minutes} min read
            </p>
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-4xl/[1.06] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.04]">
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[15px]/[1.7] text-white/70">{article.heroIntro}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {article.keyPoints.map((point) => (
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

      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-16">
        <Container>
          <div className="max-w-3xl space-y-10">
            {article.sections.map((section) => (
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

      {article.comparison && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              {article.comparison.heading}
            </h2>
            <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-white/10">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-white/[0.06]">
                    <th className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white/50">
                      Aspect
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-extrabold text-white">
                      {article.comparison.columns[0]}
                    </th>
                    <th className="px-5 py-3.5 text-[12px] font-extrabold text-white">
                      {article.comparison.columns[1]}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {article.comparison.rows.map((row) => (
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

      {article.callout && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
              <h2 className="font-display text-[17px] font-extrabold text-white">
                {article.callout.heading}
              </h2>
              {article.callout.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/75">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>
      )}

      {article.faqs.length > 0 && (
        <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
          <Container>
            <h2 className="font-display text-[20px] font-extrabold uppercase text-white">
              Frequently asked questions
            </h2>
            <dl className="mt-6 max-w-3xl space-y-3">
              {article.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                  <dt className="font-display text-[15px] font-extrabold text-white">{faq.question}</dt>
                  <dd className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">Related reading</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {article.related.map((item) => (
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
