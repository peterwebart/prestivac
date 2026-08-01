import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RESOURCES } from "@/lib/data/resources";

export function DustEducation() {
  return (
    <section id="combustible-dust" className="relative scroll-mt-20 overflow-hidden bg-graphite-900 py-20 lg:py-24">
      <div
        aria-hidden
        className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-brand-600/10 blur-[110px]"
      />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Combustible Dust"
              title="The hazard hiding in routine housekeeping"
              description=""
              className="max-w-none"
            />
            <div className="mt-6 space-y-4 text-[15px]/[1.75] text-white/70">
              <p>
                Combustible dust is any fine particulate that can ignite and burn
                rapidly when suspended in air &mdash; flour, sugar, grain, wood,
                most plastics and nearly all metal fines qualify. Settled, it is
                the fuel for secondary explosions; a layer as thin as 1/32 of an
                inch across a small fraction of a room can constitute a hazard.
              </p>
              <p>
                NFPA 652 requires facilities to document these hazards through a
                Dust Hazard Analysis, and OSHA enforces housekeeping under its
                Combustible Dust National Emphasis Program. Both point to the
                same operational question: is the equipment you clean with
                engineered for the dust you produce? A standard vacuum is an
                ignition source. An engineered one is a control.
              </p>
            </div>
          </Reveal>

          <Reveal from="right">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                Educational resources
              </p>
              <ul className="mt-4 divide-y divide-white/10">
                {RESOURCES.map((resource) => (
                  <li key={resource.slug}>
                    <Link
                      href={"/resources/" + resource.slug}
                      className="group flex items-center justify-between gap-4 py-3.5"
                    >
                      <span>
                        <span className="block text-[14px] font-semibold text-white transition-colors group-hover:text-brand-400">
                          {resource.title}
                        </span>
                        <span className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-white/50">
                          <Clock aria-hidden className="size-3" />
                          {resource.minutes} min read
                        </span>
                      </span>
                      <ArrowRight
                        aria-hidden
                        className="size-4 shrink-0 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-brand-400"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
