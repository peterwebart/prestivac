import type { Metadata } from "next";

import { CaseStudyExplorer } from "@/components/case-study-explorer";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CASE_STUDY_LIBRARY } from "@/lib/data/case-study-library";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Representative industry case studies: realistic, educational engineering scenarios for explosion-proof vacuum applications across combustible dust and flammable liquid environments.";

export const metadata: Metadata = {
  title: "Case Studies",
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: { url: "/case-studies", title: "Case Studies", description },
};

export default function CaseStudiesPage() {
  const index = CASE_STUDY_LIBRARY.map((study) => ({
    slug: study.slug,
    title: study.title,
    subtitle: study.subtitle,
    readingTime: study.readingTime,
    image: study.heroImage?.src ?? null,
    imageAlt: study.heroImage?.alt ?? "",
    industry: study.taxonomy.industry,
    material: study.taxonomy.material,
    hazard: study.taxonomy.hazard,
    process: study.taxonomy.process,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({
              name: "Case Studies",
              description,
              path: "/case-studies",
            }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Case Studies"
        title="Engineering scenarios, documented like projects"
        description="Representative industry case studies — realistic educational scenarios built on common applications and best practice, not verified customer engagements. Filter by industry, material or process."
      />

      <section className="bg-graphite-950 py-16 lg:py-20">
        <Container>
          <CaseStudyExplorer index={index} />
          <p className="mt-10 max-w-3xl text-[12px]/[1.6] text-white/50">
            Every entry in this library is clearly labeled as a representative
            scenario. Verified customer case studies — with approved metrics
            and quotes — are added as clients supply them.
          </p>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
