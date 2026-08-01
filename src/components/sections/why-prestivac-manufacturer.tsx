import { Factory, ShieldCheck, ScrollText, Check } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";

const PILLARS = [
  {
    icon: Factory,
    title: "Manufacture",
    body: "We design and manufacture high-performance industrial vacuum systems tailored to meet the toughest requirements in critical and hazardous environments. Every unit is manufactured in-house with precision, quality, and safety in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Explosion Proof",
    body: "UL 1203 Certified Explosion-proof and Dust-Ignition-Proof Electrical Vacuum Cleaners for use in Hazardous (Classified) Locations. Built with explosion-proof components for safe operation in combustible dust zones and around flammable liquids and solvents.",
  },
  {
    icon: ScrollText,
    title: "Comply With NFPA 652 – 654 & 484",
    body: "All PrestiVac systems are compliant with NFPA 652, 654, and 484 standards — now consolidated into NFPA 660 — ensuring reliable protection against fire and dust explosions.",
  },
];

/** Classification ratings as supplied by PrestiVac. */
const RATINGS = [
  "Class I, Divisions 1 & 2, Groups A, B, C & D (gases, vapors or liquids)",
  "Class II, Divisions 1 & 2, Groups E, F & G (combustible dusts)",
  "Dust Ignition Protected",
];

export function WhyPrestivacManufacturer() {
  return (
    <section id="why-prestivac" className="scroll-mt-20 border-t border-white/10 bg-graphite-950 py-16 lg:py-20">
      <Container>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
          Why PrestiVac
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-[26px]/[1.15] font-extrabold uppercase text-white sm:text-[32px]/[1.1]">
          Manufacturer of certified vacuum cleaners for combustible dusts and flammable
          liquids &amp; solvents
        </h2>

        <ul className="mt-9 grid gap-5 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
              <pillar.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.8} />
              <h3 className="mt-3.5 font-display text-[16px] font-extrabold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-[13.5px]/[1.7] text-white/70">{pillar.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-8">
          <h3 className="font-display text-[18px] font-extrabold uppercase text-white">
            Our explosion proof vacuum cleaners
          </h3>
          <p className="mt-2.5 text-[14px]/[1.7] text-white/80">
            We don&rsquo;t just meet your expectations, we exceed them.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {RATINGS.map((rating) => (
              <li
                key={rating}
                className="flex items-start gap-2.5 rounded-lg bg-graphite-950/50 px-4 py-3 text-[13px]/[1.5] text-white/85 ring-1 ring-white/10"
              >
                <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                {rating}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-3xl text-[13.5px]/[1.7] text-white/70">
            PrestiVac can customize or modify our vacuum cleaners to meet your specialized needs. Our
            team of professionals are eager to help you, and as we are manufacturers, we are able to
            build a vacuum cleaner specifically to meet your needs.
          </p>
          <Link
            href="/get-a-quote"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
          >
            Get a Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
