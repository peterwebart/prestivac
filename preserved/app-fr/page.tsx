import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { localeAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: FR.home.metaTitle,
  description: FR.home.metaDescription,
  alternates: { canonical: "/fr", languages: localeAlternates("/") },
  openGraph: { url: "/fr", title: FR.home.metaTitle, description: FR.home.metaDescription, locale: "fr_CA" },
};

export default function FrHome() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...subpageJsonLd({ name: FR.home.h1, description: FR.home.metaDescription, path: "/fr" }),
            inLanguage: "fr-CA",
          }).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-24 lg:pt-28">
        <div aria-hidden className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <Container className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">{FR.home.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-[32px]/[1.08] font-extrabold tracking-[-0.02em] text-white sm:text-[46px]/[1.04]">
            {FR.home.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px]/[1.7] text-white/70">{FR.home.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/fr/${FR.quote.slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
            >
              {FR.home.ctaPrimary}
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
            <Link
              href="/fr/poussieres-et-matieres"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              Poussières et matières
            </Link>
            <Link
              href={`/fr/${FR.explosionProof.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              {FR.home.ctaSecondary}
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-16">
        <Container>
          <h2 className="font-display text-[22px] font-extrabold uppercase text-white">{FR.home.pillarsHeading}</h2>
          <ul className="mt-7 grid gap-5 lg:grid-cols-3">
            {FR.home.pillars.map((p) => (
              <li key={p.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h3 className="font-display text-[16px] font-extrabold text-white">{p.title}</h3>
                <p className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{p.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
            <h3 className="font-display text-[18px] font-extrabold uppercase text-white">{FR.home.ratingsHeading}</h3>
            <p className="mt-2.5 text-[14px]/[1.7] text-white/80">{FR.home.ratingsIntro}</p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {FR.home.ratings.map((r) => (
                <li key={r} className="flex items-start gap-2.5 rounded-lg bg-graphite-950/50 px-4 py-3 text-[13px]/[1.5] text-white/85 ring-1 ring-white/10">
                  <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-3xl text-[13.5px]/[1.7] text-white/70">{FR.home.customization}</p>
            <Link
              href={`/fr/${FR.quote.slug}`}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
            >
              {FR.home.ctaPrimary}
            </Link>
          </div>

          <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {FR.home.stats.map((s) => (
              <li key={s.label} className="rounded-2xl bg-white/[0.04] p-5 text-center ring-1 ring-white/10">
                <p className="font-display text-[26px] font-extrabold text-white">{s.value}</p>
                <p className="mt-1 text-[12px]/[1.45] text-white/55">{s.label}</p>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-[13px]/[1.7] text-white/50">
            {site.legalName} — {site.address.full} ·{" "}
            <a href={site.phoneHref} className="font-semibold text-brand-400">{site.phone}</a> ·{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-400">{site.email}</a>
          </p>
        </Container>
      </section>
    </>
  );
}
