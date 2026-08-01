import { Check, Minus, X } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { COMPARISON_ROWS, STANDARD_LABEL } from "@/lib/data/comparison";

export function Comparison() {
  return (
    <section id="comparison" className="scroll-mt-20 bg-graphite-900 py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="The Difference"
            title="Standard vacuum vs. PrestiVac"
            description="Consumer and shop-grade equipment was never designed for the environments we build for."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03]">
            <table className="w-full min-w-[520px] text-left">
              <caption className="sr-only">
                Feature comparison between standard vacuums and PrestiVac
                systems
              </caption>
              <thead>
                <tr className="bg-white/[0.05] text-[11px] font-bold uppercase tracking-[0.14em] text-white/55">
                  <th scope="col" className="px-5 py-4 sm:px-7">
                    Capability
                  </th>
                  <th scope="col" className="px-4 py-4 text-center">
                    Standard vacuum
                  </th>
                  <th scope="col" className="px-4 py-4 text-center text-brand-400">
                    PrestiVac
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="border-t border-white/10">
                    <th
                      scope="row"
                      className="px-5 py-4 text-[13.5px] font-semibold text-white sm:px-7"
                    >
                      {row.feature}
                    </th>
                    <td className="px-4 py-4 text-center">
                      {row.standard === "no" ? (
                        <>
                          <X
                            aria-hidden
                            className="mx-auto size-4.5 text-white/35"
                            strokeWidth={2}
                          />
                          <span className="sr-only">Not rated</span>
                        </>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-white/55">
                          <Minus aria-hidden className="size-3.5" />
                          {STANDARD_LABEL[row.standard]}
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-brand-600/20">
                        <Check
                          aria-hidden
                          className="size-3.5 text-brand-400"
                          strokeWidth={2.5}
                        />
                      </span>
                      <span className="sr-only">Included</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
