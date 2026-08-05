import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { localeAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const A = FR.about;

export const metadata: Metadata = {
  title: A.metaTitle,
  description: A.metaDescription,
  alternates: { canonical: `/fr/${A.slug}`, languages: localeAlternates("/about") },
  openGraph: { url: `/fr/${A.slug}`, title: A.metaTitle, description: A.metaDescription, locale: "fr_CA" },
};

export default function FrAbout() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...subpageJsonLd({ name: A.h1, description: A.metaDescription, path: `/fr/${A.slug}` }),
            inLanguage: "fr-CA",
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-graphite-950 pb-14 pt-24 lg:pt-28">
        <Container>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">{A.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[40px]/[1.06]">
            {A.h1}
          </h1>
          <div className="mt-7 max-w-3xl space-y-4">
            {A.body.map((p) => (
              <p key={p.slice(0, 30)} className="text-[14.5px]/[1.8] text-white/70">{p}</p>
            ))}
          </div>
          <p className="mt-8 text-[13px]/[1.7] text-white/50">
            {site.legalName} — {site.address.full}
          </p>
          <Link
            href={`/fr/${FR.quote.slug}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
          >
            {FR.nav.quote}
          </Link>
        </Container>
      </section>
    </>
  );
}
