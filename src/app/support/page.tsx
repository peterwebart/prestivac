import type { Metadata } from "next";
import { ArrowRight, FileText, Info, Wrench } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { MODEL_LINEUP, modelSlug } from "@/lib/data/product-models";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const description =
  "Support for PrestiVac equipment — find your model, request the datasheet, manual, parts list or filter cross-reference, and reach an engineer who knows the unit.";

export const metadata: Metadata = {
  title: "Support — Model Index, Manuals & Parts",
  description,
  alternates: { canonical: "/support" },
  openGraph: { url: "/support", title: "Support", description },
};

const HELP_ITEMS = [
  {
    icon: FileText,
    title: "Datasheets & manuals",
    detail:
      "Current-nomenclature documentation for every model in the lineup. Tell us the model and we will send the datasheet and operating manual that match your unit as built.",
  },
  {
    icon: Wrench,
    title: "Filters, hoses & parts",
    detail:
      "Filters and hoses are part of the tested configuration, so substitutions can change how a system performs and what its documentation covers. We identify the correct part against your model rather than a generic equivalent.",
  },
  {
    icon: Info,
    title: "Application & compliance questions",
    detail:
      "If your material, process or area classification has changed since the unit was specified, an engineer can tell you whether the configuration still fits.",
  },
];

export default function SupportPage() {
  const totalModels = MODEL_LINEUP.reduce((count, series) => count + series.models.length, 0);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...subpageJsonLd({ name: "Support", description, path: "/support" })["@graph"],
              {
                "@type": "ItemList",
                "@id": `${site.url}/support/#model-index`,
                name: "PrestiVac model index",
                numberOfItems: totalModels,
                itemListElement: MODEL_LINEUP.flatMap((series) =>
                  series.models.map((model) => ({
                    "@type": "ListItem",
                    name: model.name,
                    url: `${site.url}/products/models/${modelSlug(model)}`,
                  })),
                ),
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero eyebrow="Support" title="Support & model index" description={description} />

      {/* What we can help with */}
      <section className="bg-graphite-950 py-12 lg:py-14">
        <Container>
          <ul className="grid gap-4 lg:grid-cols-3">
            {HELP_ITEMS.map((item) => (
              <li key={item.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <item.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
                <h2 className="mt-3.5 font-display text-[15px] font-extrabold text-white">
                  {item.title}
                </h2>
                <p className="mt-2 text-[13px]/[1.65] text-white/65">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex max-w-3xl items-start gap-2.5 rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
            <p className="text-[13px]/[1.65] text-white/60">
              A downloadable document library is being prepared. Until it is published we would
              rather send you the correct document for your unit than post a list that might not
              match how yours was built — so documentation is by request, and it comes back from a
              person who has checked the model.
            </p>
          </div>
        </Container>
      </section>

      {/* Model index — grouped by series, every model linked */}
      <section id="model-index" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-[22px] font-extrabold uppercase text-white">
              Find your model
            </h2>
            <span className="text-[12px] font-semibold text-white/45">
              {totalModels} models across {MODEL_LINEUP.length} lines
            </span>
          </div>
          <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/60">
            Every model in the current lineup, grouped by line. If your unit predates this
            nomenclature, send us the plate details and we will identify it.
          </p>

          <div className="mt-8 space-y-9">
            {MODEL_LINEUP.map((series) => (
              <div key={series.id}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-[15px] font-extrabold uppercase tracking-[0.06em] text-brand-400">
                    {series.name}
                  </h3>
                  <span className="text-[12px] text-white/40">{series.models.length} models</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {series.models.map((model) => (
                    <li key={model.name}>
                      <Link
                        href={`/products/models/${modelSlug(model)}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white/[0.05] px-3 py-1.5 text-[12.5px] font-semibold text-white/75 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-brand-500/50"
                      >
                        {model.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Documentation request */}
      <section id="request" className="scroll-mt-24 border-t border-white/10 bg-graphite-950 py-14 lg:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto max-w-3xl rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-8 text-center">
              <h2 className="font-display text-[22px] font-extrabold uppercase text-white">
                Get a Quote
              </h2>
              <p className="mx-auto mt-2.5 max-w-xl text-[13.5px]/[1.7] text-white/75">
                Tell us your material, your classification and how hard you will work it. Our
                technical team will recommend the PrestiVac model best suited to the job.
              </p>
              <Link
                href="/get-a-quote"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
              >
                Get a Quote
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Company legitimacy block — brand searchers include procurement */}
      <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-[18px] font-extrabold uppercase text-white">
              About PrestiVac Inc.
            </h2>
            <p className="mt-3.5 text-[14px]/[1.75] text-white/70">
              PrestiVac Inc. designs and builds industrial vacuum systems at its head office and
              production facility in Dover, Delaware. The range covers explosion-proof, HEPA,
              air-operated, wet and dry, central and custom-built units, with more than 200
              versions built to order across a combined 25 years of experience.
            </p>
            <p className="mt-3.5 text-[14px]/[1.75] text-white/70">
              Equipment is built to recognised NRTL standards, and the EX1 HEPA line is UL 1203 Certified
              under UL 1203 certification — Class I, Group D; Class II, Groups E, F
              and G; Temperature Code T3C. Certification coverage varies by line and configuration,
              and we will send the documents that apply to the unit you are asking about.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5 text-[12px]">
              <Link href="/about" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white">
                About the company
              </Link>
              <Link href="/products" className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white">
                Full product range
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-600/20 px-3.5 py-1.5 font-semibold text-brand-200 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/30"
              >
                {site.email}
                <ArrowRight aria-hidden className="size-3" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
