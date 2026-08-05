import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { KnowledgeFaq } from "@/components/sections/knowledge-faq";
import { PageHero } from "@/components/ui/page-hero";
import { FAQ } from "@/lib/data/faq";
import { faqJsonLd, subpageJsonLd } from "@/lib/schema";

const description =
  "Answers on explosion proof vacuums, combustible dust, hazardous-location classification, filtration and equipment selection — from the engineers who build the systems.";

export const metadata: Metadata = {
  title: "FAQ",
  description,
  alternates: { canonical: "/faq" },
  openGraph: { url: "/faq", title: "FAQ", description },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Frequently Asked Questions", description, path: "/faq" }),
          ).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            faqJsonLd(FAQ.map((item) => ({ question: item.question, answer: item.answer }))),
          ).replace(/</g, "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="Questions & Answers"
        title="Frequently asked questions"
        description={description}
      />
      <KnowledgeFaq />
      <FinalCta />
    </>
  );
}
