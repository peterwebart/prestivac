import {
  SITEMAP_SEGMENTS,
  segmentLastmod,
  xmlResponse,
} from "@/lib/seo/sitemap-data";
import { site } from "@/lib/site";

export const dynamic = "force-static";

/** Sitemap index. Children are one per content type — see sitemap-data.ts. */
export function GET(): Response {
  const children = SITEMAP_SEGMENTS.map((segment) => {
    const lastmod = segmentLastmod(segment.entries());
    return [
      "  <sitemap>",
      `    <loc>${site.url}/sitemap-${segment.id}.xml</loc>`,
      lastmod ? `    <lastmod>${lastmod}</lastmod>` : "",
      "  </sitemap>",
    ]
      .filter(Boolean)
      .join("\n");
  }).join("\n");

  return xmlResponse(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${children}\n</sitemapindex>\n`,
  );
}
