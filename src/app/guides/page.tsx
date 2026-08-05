import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { GUIDE_ARTICLES } from "@/lib/data/guides";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Plain explanations of the fundamentals — how dust explosions work, what ignites them, what a Dust Hazard Analysis involves, and how industrial vacuums differ from dust collectors.";

export const metadata: Metadata = {
  title: "Guides — Combustible Dust Fundamentals &",
  description,
  alternates: { canonical: "/guides" },
  openGraph: { url: "/guides", title: "Guides", description },
};

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Guides", description, path: "/guides" }),
          ).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero eyebrow="Knowledge" title="Guides" description={description} />

      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GUIDE_ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/guides/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-400">
                      {article.eyebrow}
                    </span>
                    <span aria-hidden className="text-white/20">|</span>
                    <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/40">
                      {article.minutes} min
                    </span>
                  </div>
                  <span className="mt-3 font-display text-[18px]/[1.25] font-extrabold text-white">
                    {article.name}
                  </span>
                  <span className="mt-2.5 text-[13px]/[1.6] text-white/60">
                    {article.heroIntro.split(". ")[0]}.
                  </span>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                    Read the guide
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[12.5px]/[1.7] text-white/45">
            These guides are explanatory. They do not replace the applicable standard, your Dust
            Hazard Analysis, or advice from your own engineer. Dust properties are material- and
            particle-size-specific and are established by testing rather than inferred.
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
