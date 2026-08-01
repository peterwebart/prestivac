import type { Metadata } from "next";
import { ArrowRight, Hexagon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { ApplicationsDirectory } from "@/components/directory/applications-directory";
import { FinalCta } from "@/components/sections/final-cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { APPLICATION_CATEGORIES, FEATURED_APPLICATIONS } from "@/lib/data/applications";
import { MATERIAL_GROUPS } from "@/lib/data/materials";
import { getCategory } from "@/lib/data/product-categories";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Industrial vacuum solutions for every application — from CNC machining and additive manufacturing to pharmaceutical powder transfer, silo cleaning and combustible dust cleanup.";

export const metadata: Metadata = {
  title: "Applications",
  description,
  alternates: { canonical: "/applications" },
  openGraph: { url: "/applications", title: "Applications", description },
};

/** Curated category grid for the hub — counts computed from real data. */
const CURATED_SLUGS = [
  "metalworking-machining",
  "food-processing",
  "pharmaceutical",
  "chemical-processing",
  "packaging",
  "energy",
  "electronics",
  "laboratories",
];

export default function ApplicationsPage() {
  const curated = CURATED_SLUGS.map((slug) =>
    APPLICATION_CATEGORIES.find((category) => category.slug === slug),
  )
    .filter((category): category is NonNullable<typeof category> => Boolean(category))
    .sort((a, b) => a.name.localeCompare(b.name));
  const featuredApplications = [...FEATURED_APPLICATIONS].sort((a, b) =>
    a.name.localeCompare(b.name),
  );
  const heroProduct = getCategory("explosion-proof-vacuums");
  const materialCount = MATERIAL_GROUPS.reduce((count, group) => count + group.items.length, 0);
  const materialCountLabel = `${Math.floor(materialCount / 10) * 10}+`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Applications", description, path: "/applications" }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite-950 pb-14 pt-32 lg:pt-40">
        <div aria-hidden className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand-600/10 blur-[110px]" />
        <Container className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
          <div>
            <h1 className="max-w-3xl font-display text-3xl/[1.08] font-extrabold uppercase tracking-[-0.01em] text-white sm:text-[2.9rem]/[1.06]">
              Industrial vacuum{" "}
              <span className="text-brand-500">solutions for every application</span>
            </h1>
            <p className="mt-4 max-w-2xl text-[15px]/[1.65] text-white/70">
              PrestiVac delivers safe, reliable vacuum solutions for the
              world&rsquo;s most demanding industries and combustible dust
              applications — built to the material, the area
              classification and the duty cycle.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button asChild size="md">
                <a href="/get-a-quote">
                  Get a Quote
                  <ArrowRight aria-hidden className="size-3.5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="md">
                <Link href="/#solution-finder">Find Your System</Link>
              </Button>
            </div>
          </div>
          {heroProduct && (
            <div className="relative hidden aspect-square lg:block">
              <Image
                src={heroProduct.image}
                alt={heroProduct.alt}
                fill
                priority
                sizes="420px"
                className="object-contain"
              />
            </div>
          )}
        </Container>
      </section>

      {/* Curated categories */}
      <section className="border-t border-white/10 bg-graphite-950 py-14 lg:py-16">
        <Container>
          <p className="text-center text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-400">Applications</p>
          <h2 className="mt-2 text-center font-display text-[24px]/[1.15] font-extrabold uppercase text-white sm:text-[28px]/[1.12]">
            Solutions across every industry
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-[13.5px]/[1.7] text-white/60">
            From manufacturing to pharmaceuticals, PrestiVac vacuum systems are
            built to safely handle combustible dust and fine powders in
            the most challenging environments.
          </p>
          <ul className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {curated.map((category) => (
              <li key={category.slug} className="flex flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-600/15">
                    <category.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-display text-[14.5px] font-extrabold uppercase text-white">{category.name}</h3>
                    <p className="text-[11px] font-semibold text-white/45">{category.items.length} applications</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {category.items.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[12.5px] text-white/65">
                      <span aria-hidden className="size-1 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={"#" + category.slug}
                  className="group mt-auto inline-flex items-center gap-1.5 pt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-400 transition-colors hover:text-brand-500"
                >
                  Explore
                  <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>

          {/* Featured guides */}
          <div className="mt-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-[18px] font-extrabold uppercase text-white">Featured application guides</h2>
          </div>
          <ul className="mt-5 grid gap-4 sm:grid-cols-3">
            {featuredApplications.map((application) => (
              <li key={application.slug}>
                <Link
                  href={"/applications/" + application.slug}
                  className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40">{application.category}</p>
                  <h3 className="mt-2 font-display text-[17px]/[1.25] font-extrabold text-white">{application.name}</h3>
                  <p className="mt-2 text-[12.5px]/[1.6] text-white/55">{application.blurb}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[10.5px] font-bold uppercase tracking-[0.1em] text-brand-400">
                    Read the guide
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Combustible dust band */}
      <section className="border-y border-white/10 bg-white/[0.02] py-12">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">
              <Hexagon aria-hidden className="size-4" strokeWidth={1.8} />
              Combustible dust solutions
            </p>
            <h2 className="mt-2 font-display text-[22px]/[1.15] font-extrabold uppercase text-white">
              Safe handling of combustible dust
            </h2>
            <p className="mt-3 text-[13px]/[1.65] text-white/60">
              PrestiVac vacuums are built to safely collect and contain a
              wide range of combustible dusts across industries.
            </p>
            <Button asChild size="md" className="mt-5">
              <Link href="/materials">
                View All Dusts
                <ArrowRight aria-hidden className="size-3.5" />
              </Link>
            </Button>
          </div>
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-4">
            {[
              { value: materialCountLabel, label: "Dust types cataloged" },
              { value: "99.99%", label: "Tested HEPA final stage at 0.3 µm" },
              { value: "NFPA 660", label: "ATEX / IECEx engineering principles" },
              { value: "Custom", label: "Solutions for your application" },
            ].map((stat) => (
              <li key={stat.label} className="bg-graphite-950 p-5 text-center">
                <p className="font-display text-[20px] font-extrabold text-brand-400">{stat.value}</p>
                <p className="mt-1 text-[10.5px]/[1.4] font-semibold uppercase tracking-[0.08em] text-white/50">{stat.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Full searchable directory */}
      <section className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
            The full application directory
          </h2>
          <ApplicationsDirectory />
          <p className="mt-8 max-w-3xl text-[12.5px]/[1.6] text-white/50">
            Every application above is served by the same engineering
            fundamentals — match the material, the area classification and the
            duty cycle. The{" "}
            <Link href="/#solution-finder" className="font-semibold text-brand-400">solution finder</Link>{" "}
            walks through it in six questions.
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
