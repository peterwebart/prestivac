import type { Metadata } from "next";

import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { WhyPrestivac } from "@/components/sections/why-prestivac";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { SectionHeading } from "@/components/ui/section-heading";
import { pairedAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "PrestiVac USA Inc. is a national leader in industrial vacuum systems with over 35 years of experience — high quality solid stainless steel construction, powerful suction, efficient filtration and 200+ models. Privately owned and operated, designed and manufactured in the USA.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about", languages: pairedAlternates("/about") },
  openGraph: { url: "/about", title: "About", description },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "About", description, path: "/about" }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="The Company"
        title="We manufacture every vacuum we sell."
        description="PrestiVac specializes in the design and manufacture of Legally Certified Explosion Proof Industrial Vacuum Cleaners for Contamination Controlled Environments and Hazardous Locations."
      />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="Our Story"
                title="Privately owned. American-made. Best in class by commitment."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[15px]/[1.8] text-steel-600">
                <p>
                  With its owners and staff having over 35 years of experience,
                  PrestiVac is a leader in the national market, maintaining the
                  status of &ldquo;best in class&rdquo; by committing to
                  excellence. We provide the finest safety practices in the work
                  force with the support of the most current Vacuum Cleaning
                  System technologies available.
                </p>
                <p>
                  PrestiVac Industrial Vacuum Cleaners are known for their high
                  quality, solid stainless steel construction, great suction
                  power, efficient filtration, and user-friendly systems. They
                  are specifically designed to collect processing waste, liquid,
                  dust and other residues while respecting North American and
                  International safety standards.
                </p>
                <p>
                  Our industrial vacuums are used across a wide range of
                  applications &mdash; including building maintenance,
                  manufacturing processes, explosion proof safety, dust removal,
                  food processing, automobile and aerospace. PrestiVac provides
                  over 200 different versions of industrial vacuums, adding
                  value to the production of each industrial segment.
                </p>
                <p>
                  PrestiVac assists companies and workers with making the right
                  choices regarding the best equipment to use, the safest
                  procedures to follow and how to stay OSHA compliant. We give
                  our customers the information and guidance they need to choose
                  the PrestiVac Industrial Vacuum Cleaner best suited to their
                  needs, and our complete line of industrial and explosion proof
                  vacuum cleaners meets NRTL standards.
                </p>
                <p>
                  PrestiVac stands behind each and every one of its vacuum
                  systems. Our technical team will recommend the vacuum system
                  best suited to the customer based on their specific
                  application, the amount of use within that application, and
                  who will be using it.
                </p>
                <p>
                  PrestiVac USA Inc. is privately owned and operated. All design
                  and manufacturing is done at our head office and production
                  facility situated in Dover, DE. Our manufacturing facility
                  allows us to offer the highest quality standards and enables us
                  to be a low-cost producer at sensible pricing.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-steel-200 bg-white py-16 lg:py-20">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Core Values"
            title="What we commit to — in the client&rsquo;s own words"
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Never compromise safety — for any reason",
              "Conform to all national, provincial & state, local and company regulations",
              "Industry-best 3-year warranty",
              "Able to modify vacuums to customer-specific needs",
              "Solid stainless steel construction",
              "Partner with customers for mutual long-term success",
            ].map((v) => (
              <li key={v} className="rounded-2xl border border-steel-200 bg-steel-50/60 p-4 text-[13.5px]/[1.6] font-semibold text-steel-700">
                {v}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <blockquote className="rounded-2xl bg-graphite-950 p-6 font-display text-[17px]/[1.5] font-extrabold text-white">
              &ldquo;We don&rsquo;t just meet your expectations, we exceed them!&rdquo;
            </blockquote>
            <blockquote className="rounded-2xl border border-steel-200 p-6 font-display text-[17px]/[1.5] font-extrabold text-steel-800">
              &ldquo;We want and appreciate your business. Tell us how we can earn it.&rdquo;
            </blockquote>
          </div>
        </Container>
      </section>

      <WhyPrestivac />
      <ClientLogos showIndustries />

      <FinalCta />
    </>
  );
}
