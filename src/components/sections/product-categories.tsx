import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";

export function ProductCategories() {
  return (
    <section id="products" className="scroll-mt-20 bg-graphite-950 py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Product Categories"
              title="Recovery systems for every application"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
            >
              All products
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCT_CATEGORIES.map((category, index) => (
            <li key={category.slug}>
              <Reveal delay={(index % 4) * 0.05} className="h-full">
                <Link
                  href={"/products/" + category.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-white/10 transition-transform duration-300 motion-safe:hover:-translate-y-1"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-[#f9f8f6]">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(min-width: 1280px) 320px, (min-width: 640px) 45vw, 92vw"
                      className="object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="font-display text-[16px] font-extrabold text-surface">
                      {category.name}
                    </span>
                    <span className="mt-1 text-[12.5px]/[1.5] text-steel-500">
                      {category.tagline}
                    </span>
                    <span className="mt-3 flex flex-wrap gap-1.5">
                      {category.industries.slice(0, 3).map((industry) => (
                        <span
                          key={industry}
                          className="rounded-md bg-steel-100 px-2 py-0.5 text-[10px] font-semibold text-steel-600"
                        >
                          {industry}
                        </span>
                      ))}
                    </span>
                    <span className="mt-auto flex items-center gap-1.5 pt-4 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-600 transition-colors group-hover:text-brand-700">
                      Learn more
                      <ArrowRight
                        aria-hidden
                        className="size-3.5 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
