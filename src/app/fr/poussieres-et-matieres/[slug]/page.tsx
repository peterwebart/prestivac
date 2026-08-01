import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { FR_MATERIALS, getFrMaterial } from "@/lib/data/fr-materials";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return FR_MATERIALS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getFrMaterial(slug);
  if (!m) return { title: "Page introuvable" };
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    alternates: {
      canonical: `/fr/poussieres-et-matieres/${m.slug}`,
      languages: { "en-US": m.enPath, "fr-CA": `/fr/poussieres-et-matieres/${m.slug}` },
    },
    openGraph: {
      url: `/fr/poussieres-et-matieres/${m.slug}`,
      title: m.metaTitle,
      description: m.metaDescription,
      locale: "fr_CA",
    },
  };
}

export default async function FrMaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const m = getFrMaterial(slug);
  if (!m) notFound();
  const others = FR_MATERIALS.filter((x) => x.slug !== m.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...subpageJsonLd({
                name: m.name,
                description: m.metaDescription,
                path: `/fr/poussieres-et-matieres/${m.slug}`,
              })["@graph"],
              {
                "@type": "FAQPage",
                "@id": `${site.url}/fr/poussieres-et-matieres/${m.slug}/#faq`,
                inLanguage: "fr-CA",
                mainEntity: m.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: { "@type": "Answer", text: f.answer },
                })),
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-graphite-950 pb-12 pt-24 lg:pt-28">
        <Container>
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/fr" className="transition-colors hover:text-white">{FR.nav.home}</Link>
            <span aria-hidden>/</span>
            <Link href="/fr/poussieres-et-matieres" className="transition-colors hover:text-white">
              Poussières et matières
            </Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{m.name}</span>
          </nav>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">{m.group}</p>
          <h1 className="mt-3 max-w-4xl font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[42px]/[1.05]">
            {m.name}
          </h1>
          <p className="mt-5 max-w-3xl text-[15px]/[1.7] text-white/70">{m.intro}</p>

          <dl className="mt-9 grid gap-3 sm:grid-cols-2">
            {m.facts.map((f) => (
              <div key={f.label} className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                <dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/45">{f.label}</dt>
                <dd className="mt-1.5 text-[13.5px]/[1.55] text-white/85">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="max-w-3xl space-y-4">
            {m.overview.map((p) => (
              <p key={p.slice(0, 30)} className="text-[14.5px]/[1.8] text-white/70">{p}</p>
            ))}
          </div>

          <h2 className="mt-12 font-display text-[20px] font-extrabold uppercase text-white">{m.risksHeading}</h2>
          <ul className="mt-6 grid gap-3 lg:grid-cols-2">
            {m.risks.map((r) => (
              <li key={r.slice(0, 30)} className="rounded-xl bg-white/[0.04] p-5 text-[13.5px]/[1.65] text-white/75 ring-1 ring-white/10">
                {r}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-[20px] font-extrabold uppercase text-white">
            Comment PrestiVac règle le problème
          </h2>
          <ul className="mt-6 grid gap-3 lg:grid-cols-2">
            {m.solutions.map((s) => (
              <li key={s.slice(0, 30)} className="flex items-start gap-3 rounded-xl bg-white/[0.04] p-5 text-[13.5px]/[1.65] text-white/75 ring-1 ring-white/10">
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {s}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-display text-[20px] font-extrabold uppercase text-white">Questions fréquentes</h2>
          <dl className="mt-6 max-w-3xl space-y-3">
            {m.faqs.map((f) => (
              <div key={f.question} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <dt className="font-display text-[15px] font-extrabold text-white">{f.question}</dt>
                <dd className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{f.answer}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
            <h2 className="font-display text-[18px] font-extrabold uppercase text-white">
              Obtenir une soumission
            </h2>
            <p className="mt-2.5 max-w-2xl text-[13.5px]/[1.7] text-white/75">
              Indiquez-nous votre matière et votre classification : notre équipe technique
              recommandera le modèle PrestiVac le mieux adapté.
            </p>
            <Link
              href={`/fr/${FR.quote.slug}`}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
            >
              {FR.nav.quote}
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-[18px] font-extrabold uppercase text-white">Autres guides</h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/fr/poussieres-et-matieres/${o.slug}`}
                    className="inline-block rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[12.5px] font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
                  >
                    {o.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`/fr/${FR.explosionProof.slug}`}
                  className="inline-block rounded-full bg-brand-600/20 px-3.5 py-1.5 text-[12.5px] font-semibold text-brand-200 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/30"
                >
                  Aspirateurs antidéflagrants
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
