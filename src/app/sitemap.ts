import type { MetadataRoute } from "next";

import { FEATURED_APPLICATIONS } from "@/lib/data/applications";
import { CASE_STUDY_LIBRARY } from "@/lib/data/case-study-library";
import { GUIDE_ARTICLES } from "@/lib/data/guides";
import { HAZARDOUS_LOCATION_TOPICS } from "@/lib/data/hazardous-locations";
import { INDUSTRY_DIRECTORY } from "@/lib/data/industries-directory";
import { FEATURED_MATERIALS } from "@/lib/data/materials";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { RESOURCES } from "@/lib/data/resources";
import { ALL_MODELS } from "@/lib/data/product-models";
import { site } from "@/lib/site";

/**
 * Applications carried a slightly higher priority in the previous
 * hand-maintained list. Preserved here rather than silently normalised.
 */
const PRIORITY_APPLICATIONS = new Set(["grinding-dust", "cleanroom-vacuuming"]);

/**
 * Industry page URLs, derived from the directory's `href` values rather than
 * its `slug` values. The two differ deliberately: `slug` is a directory entry
 * key, and several entries point at a shared page (`wood` -> woodworking,
 * `environmental` -> abatement) or at no page at all (`defense`). Deriving from
 * slugs would emit URLs that 404.
 */
const industryUrls = Array.from(
  new Set(
    INDUSTRY_DIRECTORY.map((entry) => entry.href).filter(
      (href): href is string =>
        typeof href === "string" && href.startsWith("/industries/"),
    ),
  ),
).sort();

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  /** Hand-listed only where a route has no backing data collection. */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: site.url + "/get-a-quote", lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: site.url + "/hazardous-location-vacuums", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: site.url + "/combustible-dust", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: site.url + "/hazardous-locations", lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: site.url + "/products", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/applications", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/industries", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/materials", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/case-studies", lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: site.url + "/resources", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/guides", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/support", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: site.url + "/faq", lastModified, changeFrequency: "monthly", priority: 0.75 },
    { url: site.url + "/contact", lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: site.url + "/about", lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  const applications: MetadataRoute.Sitemap = FEATURED_APPLICATIONS.map((application) => ({
    url: site.url + "/applications/" + application.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: PRIORITY_APPLICATIONS.has(application.slug) ? 0.75 : 0.7,
  }));

  const industries: MetadataRoute.Sitemap = industryUrls.map((href) => ({
    url: site.url + href,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const materials: MetadataRoute.Sitemap = FEATURED_MATERIALS.map((material) => ({
    url: site.url + "/materials/" + material.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudies: MetadataRoute.Sitemap = CASE_STUDY_LIBRARY.map((study) => ({
    url: site.url + "/case-studies/" + study.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const productModels: MetadataRoute.Sitemap = ALL_MODELS.map((model) => ({
    url: site.url + "/products/models/" + model.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productCategories: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.map((category) => ({
    url: site.url + "/products/" + category.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const hazardousLocations: MetadataRoute.Sitemap = HAZARDOUS_LOCATION_TOPICS.map((topic) => ({
    url: site.url + "/hazardous-locations/" + topic.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guides: MetadataRoute.Sitemap = GUIDE_ARTICLES.map((article) => ({
    url: site.url + "/guides/" + article.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const resourcePages: MetadataRoute.Sitemap = RESOURCES.map((resource) => ({
    url: site.url + "/resources/" + resource.slug,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...applications,
    ...industries,
    ...materials,
    ...resourcePages,
    ...guides,
    ...caseStudies,
    ...productCategories,
    ...productModels,
    ...hazardousLocations,
  ];
}
