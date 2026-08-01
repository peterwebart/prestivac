import { CaseStudies } from "@/components/sections/case-studies";
import { Comparison } from "@/components/sections/comparison";
import { CostCalculator } from "@/components/tools/cost-calculator";
import { DustEducation } from "@/components/sections/dust-education";
import { KnowledgeFaq } from "@/components/sections/knowledge-faq";
import { ClientLogos } from "@/components/sections/client-logos";
import { FinalCta } from "@/components/sections/final-cta";
import { WhyPrestivacManufacturer } from "@/components/sections/why-prestivac-manufacturer";
import { Hero } from "@/components/sections/hero";
import { IndustriesServed } from "@/components/sections/industries-served";
import { KnowledgeCenter } from "@/components/sections/knowledge-center";
import { ProductCategories } from "@/components/sections/product-categories";
import { ProductExplorer } from "@/components/sections/product-explorer";
import { SolutionFinder } from "@/components/sections/solution-finder";
import { Standards } from "@/components/sections/standards";
import { TrustSection } from "@/components/sections/trust-section";
import { WhyPrestivac } from "@/components/sections/why-prestivac";
import { homeJsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd()).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />

      <WhyPrestivacManufacturer />
      <TrustSection />
      <Standards />
      <SolutionFinder />
      <ProductCategories />
      <WhyPrestivac />
      <DustEducation />
      <IndustriesServed />
      <CaseStudies />
      <Comparison />
      <CostCalculator />
      <ProductExplorer />
      <KnowledgeCenter />
      <KnowledgeFaq />
      <ClientLogos limit={18} showIndustries />

      <FinalCta />
    </>
  );
}
