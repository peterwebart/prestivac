import type { Metadata } from "next";
import Link from "next/link";

import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { GLOSSARY, GLOSSARY_TERM_COUNT } from "@/lib/data/glossary";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const description =
  "Plain definitions of the terms that appear on hazardous-location specifications: class, division, group, temperature code, HEPA, bonding, deflagration and more.";

export const metadata: Metadata = {
  title: "Glossary",
  description,
  alternates: { canonical: "/glossary" },
  openGraph: { url: "/glossary", title: "Industrial Vacuum & Dust Glossary", description },
};

export default function GlossaryPage() {
  /**
   * DefinedTermSet is the correct schema for a glossary and is unusually
   * well-suited to AI retrieval: each term is an addressable entity with a
   * definition and a source page, rather than prose an assistant has to infer
   * a definition from. Every term links to the page that explains it in full,
   * so nothing here exists only as structured data.
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...subpageJsonLd({
        name: "Glossary",
        description,
        path: "/glossary",
        parents: [{ name: "Knowledge Center", path: "/resources" }],
      })["@graph"],
      {
        "@type": "DefinedTermSet",
        "@id": `${site.url}/glossary/#termset`,
        name: "Industrial vacuum, combustible dust and hazardous location glossary",
        description,
        url: `${site.url}/glossary`,
        publisher: { "@id": `${site.url}/#organization` },
        hasDefinedTerm: GLOSSARY.flatMap((group) =>
          group.terms.map((t) => ({
            "@type": "DefinedTerm",
            "@id": `${site.url}/glossary/#${slugify(t.term)}`,
            name: t.term,
            ...(t.also ? { alternateName: t.also } : {}),
            description: t.definition,
            inDefinedTermSet: { "@id": `${site.url}/glossary/#termset` },
            ...(t.href ? { url: site.url + t.href } : {}),
          })),
        ),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <PageHero
        eyebrow="Knowledge Center"
        title="Glossary"
        description={`${GLOSSARY_TERM_COUNT} terms that appear on hazardous-location specifications, defined plainly. Each links to the page that explains it in full.`}
      >
        <nav aria-label="Glossary sections" className="mt-8 flex flex-wrap gap-2">
          {GLOSSARY.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-white/20 bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] text-white/80 backdrop-blur-sm transition-colors hover:border-brand-500/70 hover:text-white"
            >
              {group.heading}
            </a>
          ))}
        </nav>
      </PageHero>

      {GLOSSARY.map((group, index) => (
        <section
          key={group.id}
          id={group.id}
          aria-labelledby={`${group.id}-heading`}
          className={`scroll-mt-24 py-14 lg:py-16 ${index % 2 === 0 ? "bg-steel-50" : "bg-white"}`}
        >
          <Container>
            <h2
              id={`${group.id}-heading`}
              className="font-display text-[24px]/[1.15] font-extrabold text-surface sm:text-[28px]"
            >
              {group.heading}
            </h2>
            <p className="mt-3 max-w-3xl text-[14.5px]/[1.7] text-steel-600">{group.summary}</p>

            <dl className="mt-8 grid gap-x-10 gap-y-6 lg:grid-cols-2">
              {group.terms.map((t) => (
                <div key={t.term} id={slugify(t.term)} className="scroll-mt-28">
                  <dt className="font-display text-[15.5px] font-extrabold text-surface">
                    {t.term}
                    {t.also ? (
                      <span className="ml-2 font-sans text-[12.5px] font-semibold uppercase tracking-[0.06em] text-steel-500">
                        {t.also}
                      </span>
                    ) : null}
                  </dt>
                  <dd className="mt-1.5 text-[13.5px]/[1.7] text-steel-600">
                    {t.definition}
                    {t.href ? (
                      <>
                        {" "}
                        <Link
                          href={t.href}
                          className="font-semibold text-brand-600 underline-offset-2 hover:underline"
                        >
                          Read more
                        </Link>
                      </>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ))}

      <FinalCta />
    </>
  );
}

/** Stable anchor id per term, so a definition can be linked to directly. */
function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
