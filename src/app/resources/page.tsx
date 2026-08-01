import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { RiskChecker } from "@/components/tools/risk-checker";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { RESOURCES } from "@/lib/data/resources";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Guides on explosion-proof vacuums, combustible dust, NFPA standards, OSHA housekeeping expectations and Dust Hazard Analysis — written by the engineers who build for these environments.";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description,
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Knowledge Center",
    description,
  },
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({
              name: "Knowledge Center",
              description,
              path: "/resources",
            }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Knowledge Center"
        title="Understand the hazard before you buy the equipment"
        description="Plain-language guides to the standards, the science and the housekeeping decisions behind combustible-dust compliance."
      >
        <nav aria-label="Guides" className="mt-8 flex flex-wrap gap-2">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.slug}
              href={"/resources/" + resource.slug}
              className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/70 hover:text-white"
            >
              {resource.title}
            </Link>
          ))}
        </nav>
      </PageHero>

      <RiskChecker />

      <section className="bg-steel-50 py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {RESOURCES.map((resource) => (
              <article
                key={resource.slug}
                className="border-t border-steel-200 py-8 first:border-t-0 first:pt-0"
              >
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-600/10">
                      <resource.icon aria-hidden className="size-5 text-brand-600" strokeWidth={1.7} />
                    </span>
                    <span className="flex items-center gap-1.5 text-[11.5px] font-semibold text-steel-500">
                      <Clock aria-hidden className="size-3" />
                      {resource.minutes} min read
                    </span>
                  </div>
                  <h2 className="mt-4 font-display text-[22px]/[1.2] font-extrabold text-surface sm:text-[26px]/[1.18]">
                    <Link href={`/resources/${resource.slug}`} className="transition-colors hover:text-brand-600">
                      {resource.title}
                    </Link>
                  </h2>
                  <p className="mt-3 max-w-2xl text-[15px]/[1.75] text-steel-600">{resource.blurb}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <Link
                      href={`/resources/${resource.slug}`}
                      className="group inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-600 transition-colors hover:text-brand-700"
                    >
                      Read the guide
                      <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/products/explosion-proof-vacuums"
                      className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-steel-500 transition-colors hover:text-brand-600"
                    >
                      Explosion proof vacuums
                    </Link>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
