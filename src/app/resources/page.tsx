import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Clock,
  Factory,
  FileText,
  Filter,
  Flame,
  Layers,
  ScrollText,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { RiskChecker } from "@/components/tools/risk-checker";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { CASE_STUDY_LIBRARY } from "@/lib/data/case-study-library";
import { GUIDE_ARTICLES } from "@/lib/data/guides";
import { HAZARDOUS_LOCATION_TOPICS } from "@/lib/data/hazardous-locations";
import { RESOURCES } from "@/lib/data/resources";
import { subpageJsonLd } from "@/lib/schema";

const description =
  "Guides on explosion-proof vacuums, combustible dust, NFPA standards, OSHA housekeeping expectations and Dust Hazard Analysis.";

export const metadata: Metadata = {
  title: "Knowledge Center",
  description,
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Knowledge Center",
    description,
  },
};


/**
 * Knowledge-center categories.
 *
 * Curated entry points rather than a dump of all 279 pages: each card carries
 * the handful of pages that answer the question in its heading, then hands off
 * to the hub for the rest. Slugs resolve against the live collections, so a
 * renamed page drops out instead of 404ing.
 */
const guide = (slug: string) => {
  const g = GUIDE_ARTICLES.find((a) => a.slug === slug);
  return g ? { label: g.name, href: `/guides/${g.slug}` } : null;
};
const topic = (slug: string) => {
  const t = HAZARDOUS_LOCATION_TOPICS.find((a) => a.slug === slug);
  return t ? { label: t.name, href: `/hazardous-locations/${t.slug}` } : null;
};
const keep = (items: ({ label: string; href: string } | null)[]) =>
  items.filter((i): i is { label: string; href: string } => Boolean(i));

const KNOWLEDGE_CATEGORIES = [
  {
    heading: "Explosion-proof vacuums",
    icon: ShieldCheck,
    summary: "What makes a vacuum suitable for a classified area, and how the decision is made.",
    links: keep([
      guide("how-to-choose-an-explosion-proof-vacuum"),
      guide("explosion-proof-vs-dust-ignition-proof"),
      guide("electric-vs-pneumatic-vacuums"),
      guide("industrial-vs-shop-vacuums"),
    ]),
    hub: { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
  },
  {
    heading: "Hazardous locations",
    icon: Layers,
    summary: "Class, division and group — what they mean and who assigns them.",
    links: keep([
      topic("class-ii-division-1"),
      topic("class-ii-division-1-vs-division-2"),
      topic("class-ii-groups-e-f-g"),
      topic("class-i-division-1"),
    ]),
    hub: { label: "All classification topics", href: "/hazardous-locations" },
  },
  {
    heading: "Combustible dust",
    icon: Flame,
    summary: "How dust deflagrations work, and why the second event is the destructive one.",
    links: keep([
      guide("dust-explosion-basics"),
      guide("types-of-combustible-dust"),
      guide("how-to-choose-a-combustible-dust-vacuum"),
      guide("cost-of-a-dust-explosion"),
    ]),
    hub: { label: "Combustible dust solutions", href: "/combustible-dust" },
  },
  {
    heading: "Standards & compliance",
    icon: ScrollText,
    summary: "What each standard governs, and what a certification actually covers.",
    links: keep([
      topic("ul-1203"),
      topic("nfpa-660"),
      topic("nfpa-484"),
      topic("osha-combustible-dust"),
    ]),
    hub: { label: "All standards", href: "/hazardous-locations" },
  },
  {
    heading: "Filtration & static",
    icon: Filter,
    summary: "What leaves the machine, and the conductive path that keeps it from igniting.",
    links: keep([
      guide("how-to-select-hepa-filtration"),
      guide("hepa-vs-ulpa-filtration"),
      guide("grounding-and-bonding"),
      guide("esd-anti-static-vacuums"),
    ]),
    hub: { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
  },
  {
    heading: "Selection by industry",
    icon: Factory,
    summary: "Where the material group decides which certified line is even eligible.",
    links: keep([
      guide("vacuum-for-metal-dust"),
      guide("vacuum-for-pharmaceutical-powders"),
      guide("vacuum-for-battery-manufacturing"),
      guide("vacuum-for-food-processing"),
    ]),
    hub: { label: "All industries", href: "/industries" },
  },
  {
    heading: "Terminology",
    icon: BookOpen,
    summary: "46 terms that appear on hazardous-location specifications, defined plainly.",
    links: [
      { label: "Class, division and group", href: "/glossary#classification" },
      { label: "Protection concepts", href: "/glossary#protection" },
      { label: "Dust behaviour", href: "/glossary#dust" },
      { label: "Equipment and filtration", href: "/glossary#equipment" },
    ],
    hub: { label: "Full glossary", href: "/glossary" },
  },
  {
    heading: "Materials",
    icon: Boxes,
    summary: "80 material guides. Each states its Class II group, because the group decides the line.",
    links: [
      { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
      { label: "Aluminum dust", href: "/materials/aluminum-dust" },
      { label: "Flour dust", href: "/materials/flour-dust" },
      { label: "Battery black mass", href: "/materials/battery-black-mass" },
    ],
    hub: { label: "All 80 materials", href: "/materials" },
  },
  {
    heading: "Applications",
    icon: Wrench,
    summary: "Recovery matched to the process that generates the dust.",
    links: [
      { label: "CNC machining", href: "/applications/cnc-machining" },
      { label: "Bagging & dumping", href: "/applications/bagging-dumping" },
      { label: "Silo cleaning", href: "/applications/silo-cleaning" },
      { label: "Abrasive blasting", href: "/applications/abrasive-blasting" },
    ],
    hub: { label: "All applications", href: "/applications" },
  },
  {
    heading: "Operation & service",
    icon: Wrench,
    summary: "Keeping a unit working — and, on a certified one, keeping the listing meaningful.",
    links: keep([
      guide("industrial-vacuum-maintenance"),
      guide("selecting-hoses-and-accessories"),
      guide("grounding-and-bonding"),
      guide("recovered-dust-disposal-and-reclaim"),
    ]),
    hub: { label: "Support & manuals", href: "/support" },
  },
  {
    heading: "Case studies",
    icon: FileText,
    summary: "Representative scenarios showing how the hazard was assessed and controlled.",
    links: CASE_STUDY_LIBRARY.slice(0, 4).map((c) => ({
      label: c.title,
      href: `/case-studies/${c.slug}`,
    })),
    hub: { label: "All case studies", href: "/case-studies" },
  },
];

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({
              name: "Knowledge Center",
              description,
              path: "/resources",
            }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      <PageHero
        eyebrow="Knowledge Center"
        title="Understand the hazard before you buy the equipment"
        description="Plain-language guides to the standards, the science and the housekeeping decisions behind combustible-dust compliance."
      >
        <nav aria-label="Guides" className="mt-8 flex flex-wrap gap-2">
          {RESOURCES.map((resource) => (
            <Link
              key={resource.slug}
              href={"/resources/" + resource.slug}
              className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/70 hover:text-white"
            >
              {resource.title}
            </Link>
          ))}
        </nav>
      </PageHero>

      <RiskChecker />

      {/*
        Knowledge center, not a blog archive.

        The hub previously listed six long-form resources and nothing else,
        which left 28 guides, 19 standards pages, 80 material guides and 16 case
        studies reachable only from their own indexes. Categories are derived
        from the real content collections, so a new guide appears here without
        anyone editing this file.
      */}
      <section aria-labelledby="kc-heading" className="bg-steel-50 py-16 lg:py-20">
        <Container>
          <h2 id="kc-heading" className="font-display text-[26px]/[1.15] font-extrabold text-surface sm:text-[30px]">
            Technical knowledge center
          </h2>
          <p className="mt-3 max-w-2xl text-[15px]/[1.7] text-steel-600">
            Written for engineers, EHS managers and the people who have to specify equipment against
            a real hazard. Start with the question you actually have.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {KNOWLEDGE_CATEGORIES.map((category) => (
              <div
                key={category.heading}
                className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-brand-600/10">
                    <category.icon aria-hidden className="size-4.5 text-brand-600" strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display text-[15px] font-extrabold uppercase tracking-[0.06em] text-surface">
                    {category.heading}
                  </h3>
                </div>
                <p className="mt-3 text-[13px]/[1.6] text-steel-600">{category.summary}</p>
                <ul className="mt-4 space-y-2">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13.5px]/[1.55] text-steel-700 underline-offset-2 transition-colors hover:text-brand-600 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={category.hub.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-600 transition-colors hover:text-brand-700"
                >
                  {category.hub.label}
                  <ArrowRight aria-hidden className="size-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Long-form resources keep their prominence below the category grid. */}
      <section aria-labelledby="longform-heading" className="bg-white py-16 lg:py-20">
        <Container>
          <h2
            id="longform-heading"
            className="font-display text-[24px]/[1.15] font-extrabold text-surface sm:text-[28px]"
          >
            In-depth resources
          </h2>
          <div className="mx-auto mt-8 max-w-3xl">
            {RESOURCES.map((resource) => (
              <article
                key={resource.slug}
                className="border-t border-steel-200 py-8 first:border-t-0 first:pt-0"
              >
                <Reveal>
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-brand-600/10">
                      <resource.icon aria-hidden className="size-5 text-brand-600" strokeWidth={1.7} />
                    </span>
                    <span className="flex items-center gap-1.5 text-[11.5px] font-semibold text-steel-500">
                      <Clock aria-hidden className="size-3" />
                      {resource.minutes} min read
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[22px]/[1.2] font-extrabold text-surface sm:text-[26px]/[1.18]">
                    <Link href={`/resources/${resource.slug}`} className="transition-colors hover:text-brand-600">
                      {resource.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px]/[1.75] text-steel-600">{resource.blurb}</p>
                  <Link
                    href={`/resources/${resource.slug}`}
                    className="group mt-5 inline-flex items-center gap-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-600 transition-colors hover:text-brand-700"
                  >
                    Read the guide
                    <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
