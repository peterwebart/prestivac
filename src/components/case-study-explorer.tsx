"use client";

import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

export type CaseStudyIndexEntry = {
  slug: string;
  title: string;
  subtitle: string;
  readingTime: number;
  image: string | null;
  imageAlt: string;
  industry: string;
  material: string;
  hazard: string;
  process: string;
};

type Facet = "industry" | "material" | "process";

const FACETS: { id: Facet; label: string }[] = [
  { id: "industry", label: "Industry" },
  { id: "material", label: "Material" },
  { id: "process", label: "Process" },
];

/** Filterable case-study archive. Receives a slim server-built index so the
 *  full study content never enters the client bundle. */
export function CaseStudyExplorer({ index }: { index: CaseStudyIndexEntry[] }) {
  const [filters, setFilters] = useState<Partial<Record<Facet, string>>>({});

  const options = useMemo(() => {
    const collect = (facet: Facet) =>
      Array.from(new Set(index.map((entry) => entry[facet]))).sort();
    return {
      industry: collect("industry"),
      material: collect("material"),
      process: collect("process"),
    };
  }, [index]);

  const filtered = index.filter((entry) =>
    FACETS.every(({ id }) => !filters[id] || entry[id] === filters[id]),
  );

  const toggle = (facet: Facet, value: string) =>
    setFilters((current) => ({
      ...current,
      [facet]: current[facet] === value ? undefined : value,
    }));

  return (
    <div>
      <div className="space-y-4">
        {FACETS.map((facet) => (
          <div key={facet.id} role="group" aria-label={"Filter by " + facet.label}>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/40">
              {facet.label}
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {options[facet.id].map((value) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={filters[facet.id] === value}
                  onClick={() => toggle(facet.id, value)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-[11.5px] font-semibold ring-1 transition-colors duration-200",
                    filters[facet.id] === value
                      ? "bg-brand-600/20 text-brand-300 ring-brand-500/60"
                      : "bg-white/[0.06] text-white/60 ring-white/10 hover:text-white",
                  )}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div aria-live="polite" className="mt-10">
        <p className="text-[12px] font-semibold text-white/50">
          {filtered.length} case{" "}
          {filtered.length === 1 ? "study" : "studies"}
        </p>
        <ul className="mt-4 grid gap-5 lg:grid-cols-2">
          {filtered.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={"/case-studies/" + entry.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
              >
                {entry.image && (
                  <span className="relative block aspect-[21/9] overflow-hidden">
                    <Image
                      src={entry.image}
                      alt={entry.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 560px, 92vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-graphite-950/60 to-transparent" />
                  </span>
                )}
                <span className="flex flex-1 flex-col p-7">
                  <span className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-brand-600/15 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-brand-300">
                      {entry.industry}
                    </span>
                    <span className="rounded-full bg-white/[0.08] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/60">
                      {entry.material}
                    </span>
                  </span>
                  <h3 className="mt-4 font-display text-[19px]/[1.3] font-extrabold text-white">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-[13px]/[1.6] text-white/55">
                    {entry.subtitle}
                  </p>
                  <span className="mt-auto flex items-center justify-between pt-5">
                    <span className="flex items-center gap-1.5 text-[11.5px] text-white/40">
                      <Clock aria-hidden className="size-3" />
                      {entry.readingTime} min read
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400">
                      Read case study
                      <ArrowRight
                        aria-hidden
                        className="size-3.5 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
