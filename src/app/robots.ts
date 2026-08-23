import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/**
 * robots.txt
 *
 * AI/answer-engine crawlers are allowed explicitly rather than left to the
 * wildcard. Being cited by an AI assistant answering a combustible-dust
 * question is a primary acquisition channel for this site, so these agents are
 * named deliberately — if that position ever changes, change it here.
 *
 * The thank-you pages are excluded: they are conversion confirmations with
 * `robots: { index: false, follow: false }` in their metadata, and there is no
 * reason to spend crawl budget on them.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Bingbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you/", "/api/"],
      },
      ...AI_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/thank-you/", "/api/"],
      })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
