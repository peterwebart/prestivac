import type { Metadata } from "next";
import { Check, Mail, Phone } from "lucide-react";

import { QuoteForm } from "@/components/forms/quote-form";
import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { localeAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const Q = FR.quote;

export const metadata: Metadata = {
  title: Q.metaTitle,
  description: Q.metaDescription,
  alternates: { canonical: `/fr/${Q.slug}`, languages: localeAlternates("/get-a-quote") },
  openGraph: { url: `/fr/${Q.slug}`, title: Q.metaTitle, description: Q.metaDescription, locale: "fr_CA" },
};

export default function FrQuote() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...subpageJsonLd({ name: Q.h1, description: Q.metaDescription, path: `/fr/${Q.slug}` }),
            inLanguage: "fr-CA",
          }).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-graphite-950 pb-8 pt-24 lg:pt-28">
        <Container>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">{Q.eyebrow}</p>
          <h1 className="mt-2.5 max-w-2xl font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[38px]/[1.06]">
            {Q.h1}
          </h1>
          <p className="mt-3 max-w-2xl text-[14.5px]/[1.65] text-white/70">{Q.intro}</p>
        </Container>
      </section>

      <section className="bg-steel-50 py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-10">
            <QuoteForm
              source="/fr/demande-de-soumission"
              tone="light"
              lang="fr"
              heading={Q.h1}
              intro="Plus vous nous en dites, plus notre équipe technique peut préciser l'aspirateur approprié. Si vous ne connaissez pas une réponse, choisissez « Je ne sais pas » — c'est exactement pour cela que nous sommes là."
            />

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-steel-800">
                  {Q.contactHeading}
                </h2>
                <a href={site.phoneHref} className="mt-4 flex items-center gap-2.5 text-[15px] font-extrabold text-brand-600">
                  <Phone aria-hidden className="size-4" />
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="mt-2.5 flex items-center gap-2.5 text-[13.5px] font-semibold text-steel-700 transition-colors hover:text-brand-600">
                  <Mail aria-hidden className="size-4" />
                  {site.email}
                </a>
                <p className="mt-4 border-t border-steel-200 pt-4 text-[12.5px]/[1.6] text-steel-500">
                  {site.legalName}
                  <br />
                  {site.address.full}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200">
                <ul className="space-y-2.5">
                  {Q.assurances.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-[13px]/[1.55] text-steel-600">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-brand-600" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
