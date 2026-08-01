import { Reveal } from "@/components/reveal";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHY_PRESTIVAC } from "@/lib/data/why";

export function WhyPrestivac() {
  return (
    <section id="why" className="scroll-mt-20 bg-steel-50 py-20 lg:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Why PrestiVac"
            title="Built by the people who back it"
            description="Every PrestiVac vacuum is built in our own plant, in solid stainless steel, and backed by the team that made it. Here is what that means for you."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {WHY_PRESTIVAC.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.05} className="h-full">
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200/70">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-brand-600/10">
                    <item.icon aria-hidden className="size-5 text-brand-600" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-display text-[15.5px] font-extrabold text-surface">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px]/[1.6] text-steel-500">{item.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
