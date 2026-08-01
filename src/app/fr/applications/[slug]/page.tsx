import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FrGuidePage } from "@/components/templates/fr-guide";
import { FR_APPLICATIONS } from "@/lib/data/fr-applications";

const BASE = "/fr/applications";
const HUB = "Applications";

export function generateStaticParams() {
  return FR_APPLICATIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = FR_APPLICATIONS.find((x) => x.slug === slug);
  if (!a) return { title: "Page introuvable" };
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: {
      canonical: `${BASE}/${a.slug}`,
      languages: { "en-US": a.enPath, "fr-CA": `${BASE}/${a.slug}` },
    },
    openGraph: {
      url: `${BASE}/${a.slug}`,
      title: a.metaTitle,
      description: a.metaDescription,
      locale: "fr_CA",
    },
  };
}

export default async function FrApplicationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = FR_APPLICATIONS.find((x) => x.slug === slug);
  if (!guide) notFound();
  return <FrGuidePage guide={guide} basePath={BASE} hubLabel={HUB} siblings={FR_APPLICATIONS} />;
}
