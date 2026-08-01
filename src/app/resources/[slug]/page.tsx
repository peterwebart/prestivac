import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { RESOURCES } from "@/lib/data/resources";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return RESOURCES.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES.find((item) => item.slug === slug);
  if (!resource) return { title: "Not found | PrestiVac" };
  return {
    title: resource.title,
    description: resource.blurb,
    alternates: { canonical: `/resources/${resource.slug}` },
    openGraph: {
      url: `/resources/${resource.slug}`,
      title: resource.title,
      description: resource.blurb,
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = RESOURCES.find((item) => item.slug === slug);
  if (!resource) notFound();

  const others = RESOURCES.filter((item) => item.slug !== resource.slug).slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              ...subpageJsonLd({
                name: resource.title,
                description: resource.blurb,
                path: `/resources/${resource.slug}`,
                parents: [{ name: "Resources", path: "/resources" }],
              })["@graph"],
              {
                "@type": "Article",
                "@id": `${site.url}/resources/${resource.slug}/#article`,
                headline: resource.title,
                description: resource.blurb,
                publisher: { "@type": "Organization", name: site.legalName },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />

      <section className="relative overflow-hidden bg-graphite-950 pb-12 pt-28 lg:pt-32">
        <div aria-hidden className="absolute -right-40 -top-28 h-96 w-96 rounded-full bg-brand-600/10 blur-[120px]" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/50">
            <Link href="/resources" className="transition-colors hover:text-white">Resources</Link>
            <span aria-hidden>/</span>
            <span className="text-white/80">{resource.title}</span>
          </nav>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <resource.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
              {resource.minutes} min read
            </p>
          </div>
          <h1 className="mt-3 max-w-4xl font-display text-4xl/[1.06] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.04]">
            {resource.title}
          </h1>
          <p className="mt-5 max-w-3xl text-[15px]/[1.7] text-white/70">{resource.blurb}</p>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-graphite-950 py-12 lg:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div className="max-w-3xl space-y-5">
              {resource.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-[14.5px]/[1.8] text-white/70">
                  {paragraph}
                </p>
              ))}
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-white">
                  Explosion proof vacuums
                </h2>
                <p className="mt-2 text-[13px]/[1.6] text-white/75">
                  We manufacture the range this guide describes — legally certified, solid stainless
                  steel, over 200 models.
                </p>
                <Link
                  href="/products/explosion-proof-vacuums"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-300"
                >
                  See the range
                  <ArrowRight aria-hidden className="size-3.5" />
                </Link>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-white">
                  Buy direct
                </h2>
                <ul className="mt-3 space-y-2">
                  {[
                    "Legally certified explosion proof",
                    "Solid stainless steel construction",
                    "200+ models, built to order",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12.5px]/[1.55] text-white/70">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-brand-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-a-quote"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2.5 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
                >
                  Get a Quote
                  <ArrowRight aria-hidden className="size-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-graphite-950 pb-16 pt-12">
        <Container>
          <h2 className="font-display text-[20px] font-extrabold uppercase text-white">More guides</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/resources/${item.slug}`}
                  className="flex h-full flex-col rounded-xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
                >
                  <span className="font-display text-[14px] font-extrabold text-white">{item.title}</span>
                  <span className="mt-1.5 text-[12px]/[1.55] text-white/55">{item.minutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
