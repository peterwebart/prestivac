import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESOURCES } from "@/lib/data/resources";

export function KnowledgeCenter() {
  return (
    <section id="knowledge" className="scroll-mt-20 bg-graphite-950 py-20 lg:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              eyebrow="Knowledge Center"
              title="Understand the hazard before you buy the equipment"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
            >
              All resources
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {RESOURCES.map((resource, index) => (
            <li key={resource.slug}>
              <Reveal delay={index * 0.05} className="h-full">
                <Link
                  href={"/resources/" + resource.slug}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:border-brand-500/50 motion-safe:hover:-translate-y-1"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-brand-600/15">
                    <resource.icon
                      aria-hidden
                      className="size-5 text-brand-400"
                      strokeWidth={1.7}
                    />
                  </span>
                  <span className="mt-4 font-display text-[14.5px]/[1.35] font-extrabold text-white">
                    {resource.title}
                  </span>
                  <span className="mt-2 text-[12px]/[1.55] text-white/60">
                    {resource.blurb}
                  </span>
                  <span className="mt-auto flex items-center justify-between pt-4">
                    <span className="flex items-center gap-1.5 text-[11px] text-white/50">
                      <Clock aria-hidden className="size-3" />
                      {resource.minutes} min read
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="size-4 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand-400"
                    />
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
