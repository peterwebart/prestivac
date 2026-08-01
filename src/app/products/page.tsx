import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { LayoutEstimator } from "@/components/tools/layout-estimator";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { FactoryLineSpecs } from "@/components/factory-line-specs";
import { ProductCatalog } from "@/components/product-catalog";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { subpageJsonLd } from "@/lib/schema";
import { cn } from "@/lib/utils";

const description =
  "Explosion-proof, HEPA, pneumatic, wet & dry and custom-engineered industrial vacuum systems — every category PrestiVac builds, and where each one fits.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: { url: "/products", title: "Products", description },
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Products", description, path: "/products" }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Products"
        title="Industrial vacuum solutions for every environment"
        description="From combustible dust collection and explosion-proof cleaning to pharmaceutical, food processing, and heavy industrial applications — engineered for the material it collects and the environment it runs in."
      >
        <nav aria-label="Product categories" className="mt-8 flex flex-wrap gap-2">
          {PRODUCT_CATEGORIES.map((category) => (
            <a
              key={category.slug}
              href={"#" + category.slug}
              className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/70 hover:text-white"
            >
              {category.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="bg-graphite-950">
        <Container>
          {PRODUCT_CATEGORIES.map((category, index) => {
            const reversed = index % 2 === 1;
            return (
              <div
                key={category.slug}
                id={category.slug}
                className="scroll-mt-24 border-t border-white/[0.07] py-14 first:border-t-0 lg:py-16"
              >
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                  <Reveal
                    from={reversed ? "right" : "left"}
                    className={cn(reversed && "lg:order-2")}
                  >
                    <div className="overflow-hidden rounded-3xl bg-[#f9f8f6] ring-1 ring-white/10">
                      <Image
                        src={category.image}
                        alt={category.alt}
                        width={800}
                        height={800}
                        sizes="(min-width: 1024px) 44vw, 92vw"
                        className="h-auto w-full object-contain"
                      />
                    </div>
                  </Reveal>

                  <Reveal from={reversed ? "left" : "right"}>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                      {category.tagline}
                    </p>
                    <h2 className="mt-2 font-display text-[26px]/[1.15] font-extrabold text-white sm:text-3xl/[1.12]">
                      {category.name}
                    </h2>
                    <p className="mt-4 text-[14.5px]/[1.7] text-white/70">
                      {category.description}
                    </p>

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {category.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex gap-2 text-[13px]/[1.5] text-white/75"
                        >
                          <Check
                            aria-hidden
                            className="mt-0.5 size-4 shrink-0 text-brand-400"
                            strokeWidth={2.2}
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {category.industries.map((industry) => (
                        <span
                          key={industry}
                          className="rounded-md bg-white/[0.07] px-2 py-1 text-[10.5px] font-semibold text-white/60"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Button asChild size="md">
                        <a href="/get-a-quote">
                          Get a Quote
                          <ArrowRight aria-hidden className="size-3.5" />
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="md">
                        <Link href="/#solution-finder">
                          Try the Solution Finder
                        </Link>
                      </Button>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      {/* Real model lineup */}
      <section id="model-lineup" className="scroll-mt-20 border-t border-white/10 bg-graphite-950 py-16 lg:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-400">The real lineup</p>
              <h2 className="mt-2 font-display text-[24px]/[1.15] font-extrabold uppercase text-white sm:text-[28px]/[1.12]">
                Every model. Actual photography.
              </h2>
              <p className="mt-3 max-w-2xl text-[13.5px]/[1.7] text-white/60">
                The photographs below are the actual PrestiVac units — stainless
                construction, model names as the factory designates them. Full
                datasheets and per-model specification pages are in preparation;
                request specifications for any model and our technical team responds
                directly.
              </p>
            </div>
            <Button asChild size="md">
              <a href="/get-a-quote">
                Request Specifications
                <ArrowRight aria-hidden className="size-3.5" />
              </a>
            </Button>
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 ring-1 ring-white/10">
            <div className="relative h-44 sm:h-56">
              <Image
                src="/images/library/products/lineup-beauty.jpg"
                alt="The PrestiVac vacuum family — stainless units across sizes and series"
                fill
                sizes="(min-width: 1024px) 1100px, 92vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-12">
            <ProductCatalog />
            <FactoryLineSpecs />
          </div>
        </Container>
      </section>

      {/* Engineered-for banner strip */}
      <section className="border-t border-white/10 bg-graphite-950 py-16 lg:py-20">
        <Container>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-400">Built for your floor</p>
          <h2 className="mt-2 font-display text-[24px]/[1.15] font-extrabold uppercase text-white sm:text-[28px]/[1.12]">
            One discipline. Every environment.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { stem: "banner-aerospace", href: "/industries/aerospace", alt: "PrestiVac stainless unit beside a turbofan engine — engineered for performance, safety, excellence" },
              { stem: "banner-ev-battery", href: "/industries/battery", alt: "PrestiVac stainless unit on an EV battery line — engineered for the energy revolution" },
              { stem: "banner-additive", href: "/applications/metal-3d-printing", alt: "PrestiVac stainless unit beside a metal AM system and titanium powder — engineered for additive excellence" },
              { stem: "banner-semiconductor-euv", href: "/industries/electronics", alt: "PrestiVac stainless unit beside EUV lithography equipment — engineered for uncompromising purity" },
              { stem: "banner-pharmaceutical", href: "/industries/pharmaceutical", alt: "PrestiVac stainless unit in a pharmaceutical suite — engineered for pure performance" },
              { stem: "banner-battery-graphite", href: "/materials/graphite-dust", alt: "PrestiVac stainless unit beside a graphite recovery system — engineered for safety, precision, continuity" },
            ].map((b) => (
              <li key={b.stem} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 transition-shadow hover:ring-brand-500/50">
                <Link href={b.href} aria-label={b.alt}>
                  <Image
                    src={"/images/library/heroes/" + b.stem + ".jpg"}
                    alt={b.alt}
                    width={1536}
                    height={1024}
                    sizes="(min-width: 1024px) 540px, 92vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Browse-by paths */}
      <section className="border-t border-white/10 bg-graphite-950 py-16 lg:py-20">
        <Container>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-400">Three ways in</p>
          <h2 className="mt-2 font-display text-[24px]/[1.15] font-extrabold uppercase text-white sm:text-[28px]/[1.12]">
            Find it by industry, material, or application
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/60">By industry</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  ["Pharmaceutical", "/industries/pharmaceutical"], ["Battery", "/industries/battery"], ["Food & Beverage", "/industries/food-beverage"], ["Agriculture", "/industries/agriculture"], ["Woodworking", "/industries/woodworking"], ["Automotive", "/industries/automotive"], ["Aerospace", "/industries/aerospace"], ["Metalworking", "/industries/metalworking"], ["Chemical", "/industries/chemical"], ["Coal & Power", "/industries/coal"], ["Data Centers", "/industries/data-centers"], ["Foundries", "/industries/foundry"], ["Abatement", "/industries/abatement"], ["Ammunition", "/industries/ammunition"], ["Electronics", "/industries/electronics"], ["Cleanrooms", "/industries/cleanrooms"],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11.5px] font-semibold text-white/70 transition-colors hover:border-brand-500/60 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/60">By material</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  ["Aluminum", "/materials/aluminum-dust"], ["Titanium", "/materials/titanium-dust"], ["Graphite", "/materials/graphite-dust"], ["Wood", "/materials/wood-dust"], ["Flour", "/materials/flour-dust"], ["Sugar", "/materials/sugar-dust"], ["Coal", "/materials/coal-dust"], ["Silica", "/materials/silica-dust"], ["Asbestos", "/materials/asbestos"], ["Lead", "/materials/lead-dust"], ["Copper", "/materials/copper-dust"], ["All materials", "/materials"],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11.5px] font-semibold text-white/70 transition-colors hover:border-brand-500/60 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/60">By application</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[
                  ["CNC Machining", "/applications/cnc-machining"], ["Metal 3D Printing", "/applications/metal-3d-printing"], ["Powder Coating", "/applications/powder-coating"], ["Silo Cleaning", "/applications/silo-cleaning"], ["Welding Cleanup", "/applications/welding-cleanup"], ["Warehouse", "/applications/warehouse-housekeeping"], ["Dust Collectors", "/applications/dust-collector-cleaning"], ["Spill Cleanup", "/applications/spill-cleanup"], ["All applications", "/applications"],
                ].map(([label, href]) => (
                  <Link key={href} href={href} className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11.5px] font-semibold text-white/70 transition-colors hover:border-brand-500/60 hover:text-white">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Standards, honestly */}
      <section className="border-t border-white/10 bg-graphite-950 py-16 lg:py-20">
        <Container>
          <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-400">Certified where it counts</p>
          <h2 className="mt-2 font-display text-[24px]/[1.15] font-extrabold uppercase text-white sm:text-[28px]/[1.12]">
            Legally certified explosion-proof — documented everywhere else
          </h2>
          <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/60">
            The marks we hold are stated precisely, certificate numbers
            included. The standards we support are backed with documentation
            per application — never a badge wall.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "NFPA 660", detail: "The consolidated combustible-dust standard — successor to 652, 654, 484, 61, 655 and 664.", href: "/resources/nfpa-guide" },
              { title: "OSHA dust rules", detail: "Grain, silica, lead, coke, cotton — materials with their own federal standards, taught on their guide pages.", href: "/materials" },
              { title: "UL 1203 Certified", detail: "Certificate  — Class I, Gp. D; Class II, Gps. E, F & G; Temp. Code T3C. Explosion-proof lines certified for hazardous locations.", href: "/images/certifications/csa-certificate-.jpg" },
              { title: "Your DHA governs", detail: "Area classification and equipment selection flow from the Dust Hazard Analysis — we specify against it.", href: "/resources/combustible-dust-solutions" },
            ].map((s) => (
              <li key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="font-display text-[15px] font-extrabold uppercase text-white">{s.title}</h3>
                <p className="mt-2 text-[12.5px]/[1.65] text-white/60">{s.detail}</p>
                <Link href={s.href} className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-brand-400 transition-colors hover:text-brand-500">
                  Learn more
                  <ArrowRight aria-hidden className="size-3" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <LayoutEstimator />
      <FinalCta />
    </>
  );
}
