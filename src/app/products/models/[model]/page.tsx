import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ALL_MODELS, findModelBySlug, seriesModels } from "@/lib/data/product-models";
import { subpageJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return ALL_MODELS.map((m) => ({ model: m.slug }));
}

/** Only EX and HEPA are glossed — the remaining suffixes are configuration codes
 * whose definitions come from the factory datasheet and are shown as-is. */
const TAG_GLOSS: Record<string, string> = {
  EX: "Explosion-proof construction",
  HEPA: "HEPA filtration",
};

function powerSource(seriesId: string): string {
  return seriesId === "avx" ? "Compressed air (no electrical components)" : "Electric";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model: slug } = await params;
  const model = findModelBySlug(slug);
  if (!model) return { title: "Product not found | PrestiVac" };
  const description = `${model.name} — part of the PrestiVac ${model.seriesName}. ${model.seriesBlurb} Request the datasheet and configuration guidance from PrestiVac.`;
  return {
    title: model.name,
    description,
    alternates: { canonical: `/products/models/${model.slug}` },
    openGraph: {
      url: `/products/models/${model.slug}`,
      title: model.name,
      description,
      images: [{ url: model.image }],
    },
  };
}

export default async function ProductModelPage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model: slug } = await params;
  const model = findModelBySlug(slug);
  if (!model) notFound();

  const related = seriesModels(model.seriesId).filter((m) => m.slug !== model.slug);
  const isAccessory = model.seriesId === "accessories";

  const specs: { label: string; value: string }[] = [
    { label: "Series", value: model.seriesName },
    ...(isAccessory ? [] : [{ label: "Power source", value: powerSource(model.seriesId) }]),
    {
      label: "Configuration",
      value: model.tags.length ? model.tags.join(" · ") : "Standard",
    },
    {
      label: "Filtration",
      value: model.tags.includes("HEPA") ? "HEPA" : "See datasheet",
    },
    {
      label: "Certification",
      value: model.csaCertified
        ? "UL 1203 Certified — UL 1203"
        : model.tags.includes("EX")
          ? "Explosion-proof construction"
          : "See datasheet",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({
              name: model.name,
              description: `${model.name} — PrestiVac ${model.seriesName}.`,
              path: `/products/models/${model.slug}`,
            }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-28 lg:pb-16 lg:pt-32">
        <div
          aria-hidden
          className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand-600/10 blur-[110px]"
        />
        <Container className="relative">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/products" className="transition-colors hover:text-white">Products</Link>
            <span aria-hidden>/</span>
            <a href={model.categoryHref} className="transition-colors hover:text-white">{model.seriesName}</a>
            <span aria-hidden>/</span>
            <span className="text-white/80">{model.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
            {/* Product image */}
            <div className="relative overflow-hidden rounded-3xl bg-[#f9f8f6] ring-1 ring-white/10">
              <div className="relative aspect-square">
                <Image
                  src={model.image}
                  alt={`PrestiVac ${model.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-contain p-8"
                />
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                {model.seriesName}
              </p>
              <h1 className="mt-3 font-display text-4xl/[1.05] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.03]">
                {model.name}
              </h1>

              {/* Configuration badges */}
              {model.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-brand-500/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-brand-300 ring-1 ring-brand-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-5 max-w-xl text-[15px]/[1.65] text-white/70">
                {model.seriesBlurb}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="sm">
                  <a href="/get-a-quote">
                    Get a Quote
                    <ArrowRight aria-hidden className="size-3.5" />
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <Link href="/products">
                    <ArrowLeft aria-hidden className="size-3.5" />
                    All products
                  </Link>
                </Button>
              </div>

              {/* Spec table — honest fields only; full specs come from the datasheet */}
              <dl className="mt-8 divide-y divide-white/10 overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
                {specs.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4 px-5 py-3">
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-white/50">
                      {row.label}
                    </dt>
                    <dd className="text-right text-[13.5px] font-medium text-white/90">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Configuration legend + datasheet note */}
      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="font-display text-[18px] font-extrabold text-white">Configuration & filtration</h2>
              {model.tags.length > 0 ? (
                <ul className="mt-4 space-y-2.5">
                  {model.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-3 text-[13.5px]/[1.6] text-white/70">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded bg-brand-500/15 text-[9px] font-bold text-brand-300">
                        {tag.slice(0, 2)}
                      </span>
                      <span>
                        <span className="font-semibold text-white">{tag}</span>
                        {" — "}
                        {TAG_GLOSS[tag] ?? "configuration option; definition and specifications in the model datasheet."}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 max-w-md text-[13.5px]/[1.65] text-white/65">
                  {isAccessory
                    ? "A genuine PrestiVac accessory, matched to the vacuum lineup. Contact us for compatibility and part details."
                    : "A standard configuration in the line. Contact us for the datasheet and available options."}
                </p>
              )}
              <p className="mt-6 max-w-md rounded-xl bg-white/[0.04] p-4 text-[12.5px]/[1.6] text-white/55 ring-1 ring-white/10">
                Full specifications — airflow, vacuum, motor, dimensions and filter area — are
                provided in the model datasheet, which carries the current factory nomenclature.{" "}
                <a href="/get-a-quote" className="font-semibold text-brand-400">Request the datasheet</a>.
              </p>
            </div>

            {/* UL 1203 certification — explosion proof lines */}
            {model.csaCertified ? (
              <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
                  <h2 className="font-display text-[16px] font-extrabold text-white">UL 1203 Certified</h2>
                </div>
                <p className="mt-3 text-[13.5px]/[1.65] text-white/75">
                  Our explosion proof vacuum cleaners are UL 1203 certified for use in Hazardous (Classified) Locations.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Class I, Group D",
                    "Class II, Groups E, F, G",
                    "Temperature Code T3C",
                  ].map((line) => (
                    <li key={line} className="flex items-center gap-2 text-[13px] text-white/80">
                      <Check aria-hidden className="size-4 text-brand-400" />
                      {line}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11.5px]/[1.55] text-white/45">
                  Hazardous-location suitability follows the certificate scope; confirm the
                  configuration against the datasheet for your area classification.
                </p>
              </div>
            ) : (
              <div className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h2 className="font-display text-[16px] font-extrabold text-white">Choosing a configuration</h2>
                <p className="mt-3 text-[13.5px]/[1.65] text-white/70">
                  The right unit depends on your material, area classification and duty cycle. Our
                  engineers match the model and configuration to your environment — combustible dust,
                  toxic exposure, or heavy continuous recovery.
                </p>
                <div className="mt-5 flex flex-wrap gap-2.5 text-[12px]">
                  <Link href="/materials" className="rounded-full bg-white/[0.06] px-3 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white">
                    Browse by material
                  </Link>
                  <Link href="/industries" className="rounded-full bg-white/[0.06] px-3 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white">
                    Browse by industry
                  </Link>
                  <a href="/get-a-quote" className="rounded-full bg-brand-600/15 px-3 py-1.5 font-semibold text-brand-300 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/25">
                    Get a Quote
                  </a>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Related models in the same series */}
      {related.length > 0 && (
        <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
          <Container>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-[18px] font-extrabold text-white">
                More from the {model.seriesName}
              </h2>
              <a href={model.categoryHref} className="shrink-0 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500">
                View series
              </a>
            </div>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {related.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/products/models/${m.slug}`}
                    className="flex h-full flex-col rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                  >
                    <span className="relative block h-24 overflow-hidden rounded-lg bg-white">
                      <Image
                        src={m.image}
                        alt={`PrestiVac ${m.name}`}
                        fill
                        sizes="(min-width: 1024px) 160px, 45vw"
                        className="object-contain p-1.5"
                      />
                    </span>
                    <span className="mt-2 text-[11.5px] font-bold text-white">{m.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <FinalCta />
    </>
  );
}
