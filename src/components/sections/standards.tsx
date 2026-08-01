import { ShieldCheck } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { STANDARDS } from "@/lib/data/standards";

export function Standards() {
  return (
    <section id="compliance" className="scroll-mt-20 bg-graphite-950 py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Compliance"
            title="Built to the standards that govern your facility"
            description="PrestiVac Explosion-Proof Vacuum Cleaners are built, tested and NRTL certified to vacuum combustible dusts and flammable liquids in Hazardous Locations to UL &amp; OSHA Standards."
          />
        </Reveal>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STANDARDS.map((standard, index) => (
            <li key={standard.id}>
              <Reveal delay={index * 0.05} className="h-full">
                <Link
                  href={standard.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:border-brand-500/60 hover:bg-white/[0.07]"
                >
                  <ShieldCheck aria-hidden className="size-6 text-brand-400" strokeWidth={1.6} />
                  <span className="mt-3 font-display text-[17px] font-extrabold text-white">
                    {standard.name}
                  </span>
                  <span className="mt-1.5 text-[12.5px]/[1.55] text-white/60">
                    {standard.scope}
                  </span>
                  <span className="mt-auto pt-4 text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/50 transition-colors group-hover:text-brand-400">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="mt-8 max-w-3xl text-[12px]/[1.6] text-white/50">
          Standards shown reflect the compliance landscape PrestiVac systems are
          engineered for. Certifications and listings vary by model and
          configuration &mdash; request documentation for your specific
          application.
        </p>
      </Container>
    </section>
  );
}
