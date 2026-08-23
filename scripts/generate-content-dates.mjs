#!/usr/bin/env node
/**
 * Generates src/lib/seo/content-dates.json — the real last-modified date for
 * every content route, taken from git history.
 *
 * Why a committed manifest rather than reading git at build time: the Coolify
 * build runs in a container where .git may not be present, and file mtimes are
 * set by checkout rather than by authorship. Both would silently produce
 * today's date for everything, which is exactly the thing to avoid.
 *
 * Run this after content changes:
 *   node scripts/generate-content-dates.mjs
 *
 * If a route has no entry, the sitemap omits <lastmod> for it rather than
 * inventing one.
 */
import { execSync } from "node:child_process";
import { readdirSync, writeFileSync, existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const OUT = join(ROOT, "src/lib/seo/content-dates.json");

function lastCommitISO(path) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${path}"`, {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

/** Latest of several paths — a route is as fresh as its freshest source. */
function newest(paths) {
  const dates = paths.map(lastCommitISO).filter(Boolean);
  if (!dates.length) return null;
  return dates.sort().at(-1);
}

const dates = {};
const D = "src/lib/data";
const A = "src/app";

function setRoute(route, paths) {
  const d = newest(paths);
  if (d) dates[route] = d;
}

// Static routes: the page file itself.
const staticRoutes = [
  ["/", `${A}/page.tsx`],
  ["/about", `${A}/about/page.tsx`],
  ["/contact", `${A}/contact/page.tsx`],
  ["/get-a-quote", `${A}/get-a-quote/page.tsx`],
  ["/faq", `${A}/faq/page.tsx`, `${D}/faq.ts`],
  ["/support", `${A}/support/page.tsx`],
  ["/products", `${A}/products/page.tsx`, `${D}/product-categories.ts`],
  ["/applications", `${A}/applications/page.tsx`, `${D}/applications.ts`],
  ["/industries", `${A}/industries/page.tsx`, `${D}/industries-directory.ts`],
  ["/materials", `${A}/materials/page.tsx`, `${D}/materials.ts`],
  ["/case-studies", `${A}/case-studies/page.tsx`, `${D}/case-study-library.ts`],
  ["/resources", `${A}/resources/page.tsx`, `${D}/resources.ts`],
  ["/guides", `${A}/guides/page.tsx`, `${D}/guides.ts`],
  ["/hazardous-locations", `${A}/hazardous-locations/page.tsx`, `${D}/hazardous-locations.ts`],
  ["/hazardous-location-vacuums", `${A}/hazardous-location-vacuums/page.tsx`],
  ["/glossary", `${A}/glossary/page.tsx`, `${D}/glossary.ts`],
  ["/combustible-dust", `${A}/combustible-dust/page.tsx`],
];
for (const [route, ...paths] of staticRoutes) setRoute(route, paths);

// Per-item content: one data file per route.
const collections = [
  ["material-guides", "/materials/"],
  ["industry-guides", "/industries/"],
  ["application-guides", "/applications/"],
  ["case-study-content", "/case-studies/"],
];
for (const [dir, prefix] of collections) {
  const full = join(ROOT, D, dir);
  if (!existsSync(full)) continue;
  for (const f of readdirSync(full).filter((x) => x.endsWith(".ts"))) {
    setRoute(prefix + f.slice(0, -3), [`${D}/${dir}/${f}`]);
  }
}

// Collections held in a single file: every route in them shares that file's date.
function fromSingleFile(file, prefix, matchSlugs) {
  const p = join(ROOT, D, file);
  if (!existsSync(p)) return;
  const d = lastCommitISO(`${D}/${file}`);
  if (!d) return;
  for (const slug of matchSlugs(readFileSync(p, "utf8"))) dates[prefix + slug] = d;
}
const slugs = (src) => [...src.matchAll(/slug: "([a-z0-9-]+)"/g)].map((m) => m[1]);

fromSingleFile("product-categories.ts", "/products/", slugs);
fromSingleFile("resources.ts", "/resources/", slugs);
fromSingleFile("guides.ts", "/guides/", slugs);
fromSingleFile("guides-comparison.ts", "/guides/", slugs);
fromSingleFile("guides-selection.ts", "/guides/", slugs);
fromSingleFile("guides-recovered.ts", "/guides/", slugs);
fromSingleFile("hazardous-locations.ts", "/hazardous-locations/", slugs);
fromSingleFile("hazloc-nfpa.ts", "/hazardous-locations/", slugs);
fromSingleFile("hazloc-regulatory.ts", "/hazardous-locations/", slugs);
fromSingleFile("hazloc-ul1203.ts", "/hazardous-locations/", slugs);

// Product models all derive from one file.
{
  const d = lastCommitISO(`${D}/product-models.ts`);
  if (d) {
    const src = readFileSync(join(ROOT, D, "product-models.ts"), "utf8");
    for (const m of src.matchAll(/image: "\/images\/products\/models\/([a-z0-9.-]+)\.jpg"/g)) {
      dates["/products/models/" + m[1]] = d;
    }
  }
}

writeFileSync(OUT, JSON.stringify(dates, null, 2) + "\n");
const uniq = new Set(Object.values(dates)).size;
console.log(`wrote ${Object.keys(dates).length} route dates (${uniq} distinct) -> ${OUT}`);
