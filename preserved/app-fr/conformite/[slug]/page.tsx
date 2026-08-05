import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";
import { notFound } from "next/navigation";

import { FrGuidePage } from "@/components/templates/fr-guide";
import { Container } from "@/components/ui/container";
import { FR_COMPLIANCE, REVIEW_NOTICE, REVIEW_PENDING } from "@/lib/data/fr-compliance";

const BASE = "/fr/conformite";
const HUB = "Conformité";

export function generateStaticParams() {
  return FR_COMPLIANCE.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = FR_COMPLIANCE.find((x) => x.slug === slug);
  if (!c) return { title: "Page introuvable" };
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `${BASE}/${c.slug}` },
    // While review is pending these pages are not indexed and are not advertised
    // as the French counterpart of a live English page.
    robots: REVIEW_PENDING ? { index: false, follow: false } : undefined,
    openGraph: { url: `${BASE}/${c.slug}`, title: c.metaTitle, description: c.metaDescription, locale: "fr_CA" },
  };
}

export default async function FrCompliancePageRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = FR_COMPLIANCE.find((x) => x.slug === slug);
  if (!guide) notFound();
  return (
    <>
      {REVIEW_PENDING && (
        <section className="border-b border-amber-500/30 bg-amber-500/[0.08] py-3">
          <Container>
            <p className="flex items-start gap-2.5 text-[12.5px]/[1.6] text-amber-200">
              <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0" />
              {REVIEW_NOTICE}
            </p>
          </Container>
        </section>
      )}
      <FrGuidePage guide={guide} basePath={BASE} hubLabel={HUB} siblings={FR_COMPLIANCE} />
    </>
  );
}
