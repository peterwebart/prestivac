import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { INDUSTRIES } from "@/lib/data/industries";

export function IndustriesServed() {
  return (
    <section id="industries-served" className="scroll-mt-20 bg-steel-50 py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Industries We Serve"
            title="Twenty industries, one discipline"
            description="The hazards we're most often asked to solve, industry by industry."
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {INDUSTRIES.map((industry, index) => (
            <li key={industry.slug} id={industry.slug} className="scroll-mt-24">
              <Reveal delay={index * 0.04} className="h-full">
                <div className="group relative flex h-full min-h-[172px] flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white p-5 text-center shadow-card ring-1 ring-steel-200/70">
                  <industry.icon
                    aria-hidden
                    className="size-7 text-surface/70"
                    strokeWidth={1.5}
                  />
                  <h3 className="text-[13.5px] font-bold text-surface">
                    {industry.name}
                  </h3>
                  <p className="text-[11px]/[1.5] text-steel-500 lg:hidden">
                    {industry.hazards.slice(0, 3).join(" \u00b7 ")}
                  </p>

                  {/* Hover / focus-within hazard reveal (desktop) */}
                  <div className="pointer-events-none absolute inset-0 hidden flex-col justify-center gap-2 bg-surface p-4 text-left opacity-0 transition-opacity duration-300 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100 lg:flex">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-400">
                      {industry.name}
                    </p>
                    <ul className="space-y-1 text-[11.5px]/[1.45] text-white/75">
                      {industry.hazards.map((hazard) => (
                        <li key={hazard} className="flex gap-1.5">
                          <span
                            aria-hidden
                            className="mt-[7px] size-1 shrink-0 rounded-full bg-brand-500"
                          />
                          {hazard}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#solution-finder"
                      className="mt-1 inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-brand-400 transition-colors hover:text-brand-500"
                    >
                      Find your solution
                      <ArrowRight aria-hidden className="size-3" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
