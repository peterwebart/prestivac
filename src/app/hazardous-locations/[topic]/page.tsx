import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  HazardousLocationPage,
  hazardousLocationMetadata,
} from "@/components/templates/hazardous-location";
import {
  HAZARDOUS_LOCATION_TOPICS,
  getHazardousLocationTopic,
} from "@/lib/data/hazardous-locations";

export function generateStaticParams() {
  return HAZARDOUS_LOCATION_TOPICS.map((topic) => ({ topic: topic.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getHazardousLocationTopic(slug);
  if (!topic) return { title: "Not found | PrestiVac" };
  return hazardousLocationMetadata(topic);
}

export default async function Page({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: slug } = await params;
  const topic = getHazardousLocationTopic(slug);
  if (!topic) notFound();
  return <HazardousLocationPage topic={topic} />;
}
