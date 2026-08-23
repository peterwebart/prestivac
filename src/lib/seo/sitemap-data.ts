import { FEATURED_APPLICATIONS } from "@/lib/data/applications";
import { CASE_STUDY_LIBRARY } from "@/lib/data/case-study-library";
import { GUIDE_ARTICLES } from "@/lib/data/guides";
import { HAZARDOUS_LOCATION_TOPICS } from "@/lib/data/hazardous-locations";
import { INDUSTRY_DIRECTORY } from "@/lib/data/industries-directory";
import { FEATURED_MATERIALS } from "@/lib/data/materials";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { ALL_MODELS } from "@/lib/data/product-models";
import { RESOURCES } from "@/lib/data/resources";
import CONTENT_DATES from "@/lib/seo/content-dates.json";
import { site } from "@/lib/site";

/**
 * Sitemap architecture.
 *
 * A sitemap index at /sitemap.xml referencing one child per content type, which
 * makes indexation diagnosable per section in Search Console rather than as a
 * single undifferentiated total.
 *
 * Deliberate omissions:
 * - No <changefreq>. It is a hint search engines have long ignored, and an
 *   inaccurate one is worse than none.
 * - No <priority>. It expresses relative importance within a site and has no
 *   bearing on ranking; every site that sets it sets its own pages high.
 * - <lastmod> is emitted ONLY where a real modification date is known, taken
 *   from git history via scripts/generate-content-dates.mjs. Stamping build
 *   time on every URL — which is what the previous sitemap did — tells search
 *   engines the whole site changed on every deploy, and they discount it.
 *
 * Excluded from every segment: /thank-you/* (noindex conversion pages), /api/*.
 */

export type SitemapEntry = { url: string; lastModified?: string };

export type SitemapSegment = {
  /** Filename without extension, e.g. "pages" -> /sitemap-pages.xml */
  id: string;
  entries: () => SitemapEntry[];
};

const dates = CONTENT_DATES as Record<string, string>;

function entry(path: string): SitemapEntry {
  const url = path === "/" ? site.url : site.url + path;
  const lastModified = dates[path];
  return lastModified ? { url, lastModified } : { url };
}

/** Static hub and company routes with no backing data collection. */
const STATIC_PAGES = [
  "/",
  "/get-a-quote",
  "/contact",
  "/about",
  "/support",
  "/faq",
  "/hazardous-location-vacuums",
  "/combustible-dust",
  "/products",
  "/applications",
  "/industries",
  "/materials",
  "/case-studies",
  "/resources",
  "/guides",
  "/hazardous-locations",
  "/glossary",
];

/**
 * Industry URLs come from the directory's `href` values, not its `slug` values.
 * Several entries point at a shared page or at none; deriving from slugs would
 * emit URLs that 404.
 */
const industryPaths = Array.from(
  new Set(
    INDUSTRY_DIRECTORY.map((i) => i.href).filter(
      (href): href is string => typeof href === "string" && href.startsWith("/industries/"),
    ),
  ),
).sort();

export const SITEMAP_SEGMENTS: SitemapSegment[] = [
  {
    id: "pages",
    entries: () => STATIC_PAGES.map(entry),
  },
  {
    id: "products",
    entries: () => [
      ...PRODUCT_CATEGORIES.map((c) => entry("/products/" + c.slug)),
      ...ALL_MODELS.map((m) => entry("/products/models/" + m.slug)),
    ],
  },
  {
    id: "industries",
    entries: () => industryPaths.map(entry),
  },
  {
    id: "materials",
    entries: () => FEATURED_MATERIALS.map((m) => entry("/materials/" + m.slug)),
  },
  {
    id: "applications",
    entries: () => FEATURED_APPLICATIONS.map((a) => entry("/applications/" + a.slug)),
  },
  {
    id: "compliance",
    entries: () => HAZARDOUS_LOCATION_TOPICS.map((t) => entry("/hazardous-locations/" + t.slug)),
  },
  {
    id: "resources",
    entries: () => [
      ...GUIDE_ARTICLES.map((g) => entry("/guides/" + g.slug)),
      ...RESOURCES.map((r) => entry("/resources/" + r.slug)),
    ],
  },
  {
    id: "case-studies",
    entries: () => CASE_STUDY_LIBRARY.map((c) => entry("/case-studies/" + c.slug)),
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderUrlset(entries: SitemapEntry[]): string {
  const urls = entries
    .map((e) => {
      const lastmod = e.lastModified ? `\n    <lastmod>${e.lastModified}</lastmod>` : "";
      return `  <url>\n    <loc>${escapeXml(e.url)}</loc>${lastmod}\n  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}

/** Newest lastmod in a segment — used as the index's own lastmod per child. */
export function segmentLastmod(entries: SitemapEntry[]): string | undefined {
  const all = entries.map((e) => e.lastModified).filter((d): d is string => Boolean(d));
  return all.length ? all.sort().at(-1) : undefined;
}
