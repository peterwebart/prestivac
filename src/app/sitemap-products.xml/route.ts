import { SITEMAP_SEGMENTS, renderUrlset, xmlResponse } from "@/lib/seo/sitemap-data";

export const dynamic = "force-static";

export function GET(): Response {
  const segment = SITEMAP_SEGMENTS.find((s) => s.id === "products");
  if (!segment) return new Response("Not found", { status: 404 });
  return xmlResponse(renderUrlset(segment.entries()));
}
