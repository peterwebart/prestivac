import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CASE_STUDIES } from "@/lib/data/case-studies";

export function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-20 bg-graphite-950 py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Application Spotlights"
            title="Engineered outcomes in the field"
            description="Representative engagements drawn from four decades in hazardous-dust environments."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CASE_STUDIES.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.07} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-brand-600/15 px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-brand-400">
                    {study.industry}
                  </span>
                  <span className="rounded-full bg-white/[0.07] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/60">
                    {study.material}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-[19px]/[1.3] font-extrabold text-white">
                  {study.title}
                </h3>

                <dl className="mt-4 space-y-4 text-[13px]/[1.65] text-white/65">
                  <div>
                    <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/50">
                      Challenge
                    </dt>
                    <dd className="mt-1">{study.challenge}</dd>
                  </div>
                  <div>
                    <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/50">
                      Solution
                    </dt>
                    <dd className="mt-1">{study.solution}</dd>
                  </div>
                </dl>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5">
                  {study.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-2.5 text-[12.5px]/[1.55] text-white/75"
                    >
                      <CheckCircle2
                        aria-hidden
                        className="mt-0.5 size-4 shrink-0 text-brand-400"
                        strokeWidth={1.8}
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {study.equipment.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/[0.06] px-2 py-1 text-[10.5px] font-semibold text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {study.href && (
                  <Link
                    href={study.href}
                    className="group mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
                  >
                    Read the full case study
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
