#!/usr/bin/env node
/**
 * SEO validation — run against the production build output.
 *
 *   pnpm build && pnpm seo:check
 *
 * Checks the things that silently regress and are expensive to notice late:
 * exactly one canonical and one H1 per page, no duplicate titles or
 * descriptions, valid JSON-LD, sitemap URLs that all resolve to real pages and
 * none that are noindex, and no truncated headlines.
 *
 * Exits non-zero on failure so it can gate a deploy.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const BUILD = join(process.cwd(), ".next/server/app");
if (!existsSync(BUILD)) {
  console.error("No build output found. Run `pnpm build` first.");
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (name.endsWith(".html")) out.push(p);
  }
  return out;
}

/** Next.js internals — not real routes, and they inherit root metadata. */
const INTERNAL = /^\/(_not-found|404|500)$/;

const pages = walk(BUILD).filter((f) => !INTERNAL.test(routeOf(f)));
/** Build path -> public route. index.html is the site root. */
function routeOf(f) {
  const r = f.replace(BUILD, "").replace(/\.html$/, "");
  return r === "/index" ? "/" : r || "/";
}
const route = routeOf;
const strip = (s) => s.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const failures = [];
const warnings = [];
const fail = (check, detail) => failures.push(`${check}: ${detail}`);
const warn = (check, detail) => warnings.push(`${check}: ${detail}`);

const titles = new Map();
const descriptions = new Map();

/** Dangling function words that indicate a headline was cut mid-sentence. */
const TRUNCATED =
  /[\s—–-]*\b(and|or|the|a|an|to|of|for|with|is|are|that|which|when|how|why|its|their|not|but|in|on|at|by|from|as|vs)$/i;

for (const file of pages) {
  const r = route(file);
  const raw = readFileSync(file, "utf8");
  const html = strip(raw);

  // Canonical — exactly one
  const canon = [...raw.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
  if (canon.length === 0) fail("canonical", `${r} has none`);
  if (canon.length > 1) fail("canonical", `${r} has ${canon.length}`);
  if (canon[0] && !canon[0][1].startsWith("https://")) {
    fail("canonical", `${r} is not absolute https: ${canon[0][1]}`);
  }

  // Title — exactly one, unique, within budget
  const t = raw.match(/<title>([^<]*)<\/title>/);
  if (!t) fail("title", `${r} has none`);
  else {
    const title = decode(t[1]).trim();
    if (!title) fail("title", `${r} is empty`);
    if (title.length > 62) warn("title-length", `${r} ${title.length} chars: ${title}`);
    if (titles.has(title)) fail("duplicate-title", `${r} duplicates ${titles.get(title)}: "${title}"`);
    else titles.set(title, r);
  }

  // Meta description — present, unique
  const d = raw.match(/<meta name="description" content="([^"]*)"/);
  if (!d) fail("description", `${r} has none`);
  else {
    const desc = decode(d[1]).trim();
    if (!desc) fail("description", `${r} is empty`);
    if (desc.length > 170) warn("description-length", `${r} ${desc.length} chars (truncates in SERPs)`);
    if (desc.length < 110) warn("description-short", `${r} ${desc.length} chars (under-uses the snippet)`);
    if (descriptions.has(desc)) {
      fail("duplicate-description", `${r} duplicates ${descriptions.get(desc)}`);
    } else descriptions.set(desc, r);
  }

  // Open Graph + Twitter
  if (!/property="og:title"/.test(raw)) fail("open-graph", `${r} missing og:title`);
  if (!/property="og:description"/.test(raw)) fail("open-graph", `${r} missing og:description`);
  if (!/name="twitter:card"/.test(raw)) fail("twitter", `${r} missing twitter:card`);

  // Exactly one H1, not truncated
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1s.length === 0) fail("h1", `${r} has none`);
  if (h1s.length > 1) fail("h1", `${r} has ${h1s.length}`);
  if (h1s[0]) {
    const text = decode(h1s[0][1].replace(/<[^>]+>/g, "")).trim();
    if (!text) fail("h1", `${r} is empty`);
    else if (!/[.?!]$/.test(text) && TRUNCATED.test(text)) {
      // Heuristic: a trailing function word usually means a cut headline, but
      // "…where area classification comes from" is a complete sentence. Warn
      // rather than fail so a legitimate ending cannot block a deploy.
      warn("h1-possibly-truncated", `${r}: "${text}"`);
    }
  }

  // JSON-LD must parse
  for (const m of raw.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(decode(m[1]).replace(/\\u003c/g, "<"));
    } catch (e) {
      fail("json-ld", `${r} invalid: ${String(e).slice(0, 80)}`);
    }
  }

  // noindex pages must not be in the sitemap (checked below)
}

// ---- Sitemap checks -------------------------------------------------------
const routes = new Set(pages.map(route));
const segFiles = readdirSync(BUILD).filter((f) => /^sitemap.*\.xml\.body$/.test(f));
let sitemapUrls = [];

for (const f of segFiles) {
  const xml = readFileSync(join(BUILD, f), "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (f === "sitemap.xml.body") {
    if (!/<sitemapindex/.test(xml)) fail("sitemap", "/sitemap.xml is not a sitemap index");
    for (const child of locs) {
      if (!/\/sitemap-[a-z-]+\.xml$/.test(child)) fail("sitemap", `odd child: ${child}`);
    }
    continue;
  }
  sitemapUrls.push(...locs);
  if (/<changefreq>/.test(xml)) warn("sitemap", `${f} emits <changefreq>`);
  if (/<priority>/.test(xml)) warn("sitemap", `${f} emits <priority>`);
}

const seen = new Set();
for (const url of sitemapUrls) {
  if (!url.startsWith("https://")) fail("sitemap-url", `not https: ${url}`);
  if (seen.has(url)) fail("sitemap-duplicate", url);
  seen.add(url);
  const path = url.replace(/^https:\/\/[^/]+/, "") || "/";
  if (!routes.has(path)) fail("sitemap-404", `${url} has no built page`);
  const file = join(BUILD, (path === "/" ? "/index" : path) + ".html");
  if (existsSync(file)) {
    const raw = readFileSync(file, "utf8");
    if (/<meta name="robots" content="[^"]*noindex/.test(raw)) {
      fail("sitemap-noindex", `${url} is noindex but in the sitemap`);
    }
  }
}

// Pages that exist but are absent from the sitemap — noindex ones are expected.
for (const r of routes) {
  const url = r === "/" ? "https://prestivac.com" : "https://prestivac.com" + r;
  if (seen.has(url)) continue;
  const raw = readFileSync(join(BUILD, (r === "/" ? "/index" : r) + ".html"), "utf8");
  const noindex = /<meta name="robots" content="[^"]*noindex/.test(raw);
  if (!noindex) warn("not-in-sitemap", `${r} is indexable but absent from the sitemap`);
}

// ---- Discovery files ------------------------------------------------------
for (const f of ["llms.txt", "llms-full.txt", "robots.txt"]) {
  const p = join(BUILD, f + ".body");
  const alt = join(BUILD, f);
  if (!existsSync(p) && !existsSync(alt)) warn("discovery", `${f} not found in build output`);
}

// ---- Report ---------------------------------------------------------------
console.log(`\nSEO validation — ${pages.length} pages, ${sitemapUrls.length} sitemap URLs\n`);
if (warnings.length) {
  console.log(`WARNINGS (${warnings.length}):`);
  for (const w of warnings.slice(0, 40)) console.log("  ! " + w);
  if (warnings.length > 40) console.log(`  … +${warnings.length - 40} more`);
  console.log("");
}
if (failures.length) {
  console.log(`FAILURES (${failures.length}):`);
  for (const f of failures.slice(0, 60)) console.log("  ✗ " + f);
  if (failures.length > 60) console.log(`  … +${failures.length - 60} more`);
  console.log("");
  process.exit(1);
}
console.log("All checks passed.\n");
