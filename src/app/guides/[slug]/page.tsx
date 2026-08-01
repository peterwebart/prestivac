import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  GuideArticlePage,
  guideArticleMetadata,
} from "@/components/templates/guide-article";
import { GUIDE_ARTICLES, getGuideArticle } from "@/lib/data/guides";

export function generateStaticParams() {
  return GUIDE_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) return { title: "Not found | PrestiVac" };
  return guideArticleMetadata(article);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getGuideArticle(slug);
  if (!article) notFound();
  return <GuideArticlePage article={article} />;
}
