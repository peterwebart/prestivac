import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-graphite-950">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-graphite-950 via-graphite-900 to-graphite-950"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-600/12 blur-[130px]"
      />
      <Container className="relative py-24 lg:py-28">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-400">
            Talk to the manufacturer
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl/[1.12] font-extrabold tracking-[-0.015em] text-white sm:text-[2.6rem]/[1.1]">
            Get the right explosion proof vacuum for your application.
          </h2>
          <p className="mt-4 max-w-xl text-[15px]/[1.65] text-white/70">
            Tell us what you need to vacuum and where. Our technical team will
            recommend the PrestiVac model best suited to your material, your
            classification and how hard you will work it &mdash; and because we
            build every unit ourselves, we can modify it to fit.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="/get-a-quote">
                Get a Quote
                <ArrowRight aria-hidden className="size-4" />
              </a>
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[11.5px] font-bold uppercase tracking-[0.08em] text-white/55">
            <li>Legally certified explosion proof</li>
            <li>Solid stainless steel construction</li>
            <li>Industry-best 3-year warranty</li>
            <li>Designed &amp; manufactured in the USA</li>
            <li>200+ vacuum versions</li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
