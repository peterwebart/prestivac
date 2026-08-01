import type { Metadata } from "next";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { localeAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";

const P = FR.explosionProof;

export const metadata: Metadata = {
  title: P.metaTitle,
  description: P.metaDescription,
  alternates: {
    canonical: `/fr/${P.slug}`,
    languages: localeAlternates("/products/explosion-proof-vacuums"),
  },
  openGraph: { url: `/fr/${P.slug}`, title: P.metaTitle, description: P.metaDescription, locale: "fr_CA" },
};

export default function FrExplosionProof() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...subpageJsonLd({ name: P.h1, description: P.metaDescription, path: `/fr/${P.slug}` }),
            inLanguage: "fr-CA",
          }).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-graphite-950 pb-12 pt-24 lg:pt-28">
        <div aria-hidden className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <Container className="relative">
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/fr" className="transition-colors hover:text-white">{FR.nav.home}</Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{P.h1}</span>
          </nav>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">{P.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-[32px]/[1.08] font-extrabold tracking-[-0.02em] text-white sm:text-[44px]/[1.05]">
            {P.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-[15px]/[1.7] text-white/70">{P.intro}</p>
          <Link
            href={`/fr/${FR.quote.slug}`}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
          >
            {P.ctaPrimary}
            <ArrowRight aria-hidden className="size-3.5" />
          </Link>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
            <div className="flex items-center gap-2.5">
              <ShieldCheck aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
              <h2 className="font-display text-[18px] font-extrabold text-white">{P.certHeading}</h2>
            </div>
            <p className="mt-3 max-w-3xl text-[14px]/[1.75] text-white/80">{P.certBody}</p>
          </div>

          <h2 className="mt-12 font-display text-[20px] font-extrabold uppercase text-white">{P.featuresHeading}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {P.features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-5 text-[13.5px]/[1.6] text-white/75 ring-1 ring-white/10">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {f}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-[20px] font-extrabold uppercase text-white">{P.selectionHeading}</h2>
          <ul className="mt-6 grid gap-5 lg:grid-cols-2">
            {P.selection.map((s) => (
              <li key={s.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h3 className="font-display text-[15px] font-extrabold text-white">{s.title}</h3>
                <p className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{s.body}</p>
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-[20px] font-extrabold text-white">{P.shopVacHeading}</h2>
            <p className="mt-3.5 text-[14.5px]/[1.75] text-white/70">{P.shopVacBody}</p>
          </div>

          <Link
            href="/fr/poussieres-et-matieres"
            className="mt-10 mr-3 inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
          >
            Poussières et matières
          </Link>
          <Link
            href={`/fr/${FR.quote.slug}`}
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
          >
            {P.ctaPrimary}
            <ArrowRight aria-hidden className="size-3.5" />
          </Link>
        </Container>
      </section>
    </>
  );
}
