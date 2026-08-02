import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { FR_ARTICLES } from "@/lib/data/fr-articles";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Explications sur les poussières combustibles, les sources d’inflammation, l’analyse des dangers et le choix d’équipement.";

export const metadata: Metadata = {
  title: "Guides | Explications et notions fondamentales",
  description,
  alternates: {
    canonical: "/fr/guides",
    languages: { "en-US": "/guides", "fr-CA": "/fr/guides" },
  },
  openGraph: { url: "/fr/guides", title: "Guides", description, locale: "fr_CA" },
};

export default function FrGuidesIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...subpageJsonLd({ name: "Guides", description, path: "/fr/guides" }),
            inLanguage: "fr-CA",
          }).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-graphite-950 pb-14 pt-24 lg:pt-28">
        <Container>
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/fr" className="transition-colors hover:text-white">{FR.nav.home}</Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">Guides</span>
          </nav>
          <h1 className="mt-8 max-w-3xl font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[40px]/[1.06]">
            Guides
          </h1>
          <p className="mt-5 max-w-2xl text-[15px]/[1.7] text-white/70">{description}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FR_ARTICLES.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/fr/guides/${a.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                >
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-400">{a.group}</span>
                  <span className="mt-2.5 font-display text-[18px]/[1.25] font-extrabold text-white">{a.name}</span>
                  <span className="mt-2.5 text-[13px]/[1.6] text-white/60">{a.intro.split(". ")[0]}.</span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                    Lire le guide
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 max-w-3xl text-[13px]/[1.7] text-white/50">
            D&rsquo;autres guides sont en cours de traduction. La bibliothèque complète est
            disponible{" "}
            <Link href="/guides" className="font-semibold text-brand-400">en anglais</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
