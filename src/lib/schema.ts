import { SCOPE_EV, SCOPE_EX1, UL1203 } from "@/lib/data/certification";
import { FAQ } from "@/lib/data/faq";
import { site } from "@/lib/site";

/**
 * Organization + WebSite + WebPage + Product + BreadcrumbList in a single
 * @graph so the homepage ships one linked-data block.
 */
export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        alternateName: site.name,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        /**
         * 40 years, per the technical department (August 2026). Expressed as a
         * founding year rather than a duration so it does not go stale.
         */
        foundingDate: "1986",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: site.phone,
          email: site.email,
          areaServed: "US",
          availableLanguage: "en",
        },
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/images/logo-white.png`,
        },
        /**
         * Verified official profiles, supplied by the client. These are the
         * strongest signal available for entity disambiguation — they let a
         * search engine confirm that this Organization and those profiles are
         * the same entity. Only add a URL here that has been confirmed as an
         * official PrestiVac property.
         */
        sameAs: [
          "https://www.linkedin.com/company/prestivac/",
          "https://www.facebook.com/prestivac",
        ],
        /**
         * Stated narrowly on purpose. The certificate carries two scopes and the
         * broader one applies to the EX1 line only, so this names the certificate
         * and points at the page that explains both rather than asserting a
         * single site-wide scope. See lib/data/certification.ts.
         */
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name: `${UL1203.standard} (${UL1203.edition}) — ${UL1203.issuerLong} Certificate ${UL1203.certificateNumber}`,
          recognizedBy: { "@type": "Organization", name: UL1203.issuerLong },
          url: `${site.url}/hazardous-locations/ul-1203`,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#organization` },
        primaryImageOfPage: `${site.url}/images/og.jpg`,
      },
      {
        "@type": "Product",
        "@id": `${site.url}/#product`,
        name: "Explosion Proof Industrial Vacuum Systems",
        description:
          "Explosion-proof, HEPA-filtered industrial vacuum systems with anti-static grounding and stainless steel construction for combustible dust and hazardous materials.",
        brand: { "@type": "Brand", name: site.name },
        manufacturer: { "@id": `${site.url}/#organization` },
        category: "Industrial Vacuum Cleaners",
        image: `${site.url}/images/og.jpg`,
        /**
         * Certification expressed per scope, never merged. An AI system reading
         * this should not be able to conclude that the EV line carries Class I
         * or Group E coverage, because it does not.
         */
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Certification",
            value: `${UL1203.standard} (${UL1203.edition}), ${UL1203.issuerLong} Certificate ${UL1203.certificateNumber}`,
          },
          {
            "@type": "PropertyValue",
            name: "Certified scope — EX1 HEPA line",
            value: SCOPE_EX1.summary,
          },
          {
            "@type": "PropertyValue",
            name: "Certified scope — EV EX HEPA line",
            value: `${SCOPE_EV.summary} (no Class I, no Group E)`,
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: FAQ.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

/** WebPage + BreadcrumbList graph for subpages (/products, /resources, /about). */
export function subpageJsonLd(page: {
  name: string;
  description: string;
  path: string;
  /** Intermediate breadcrumb levels between Home and this page. */
  parents?: { name: string; path: string }[];
}) {
  const url = `${site.url}${page.path}`;
  const parents = page.parents ?? [];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: page.name,
        description: page.description,
        isPartOf: { "@id": `${site.url}/#website` },
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          ...parents.map((parent, index) => ({
            "@type": "ListItem",
            position: index + 2,
            name: parent.name,
            item: `${site.url}${parent.path}`,
          })),
          {
            "@type": "ListItem",
            position: parents.length + 2,
            name: page.name,
            item: url,
          },
        ],
      },
    ],
  };
}

/** FAQPage structured data for pages that publish a Q&A block. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}


/**
 * Article node for guide pages.
 *
 * `author` and `publisher` are BOTH the Organization. These guides are written
 * by PrestiVac as a company; inventing a named human expert to satisfy an
 * E-E-A-T checkbox would be fabrication.
 *
 * Dates come from git history via scripts/generate-content-dates.mjs. Where no
 * real date exists the properties are omitted rather than filled with today.
 */
export function articleJsonLd(article: {
  path: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  about?: string[];
}) {
  const url = `${site.url}${article.path}`;
  return {
    "@type": "Article",
    "@id": `${url}/#article`,
    headline: article.headline,
    description: article.description,
    mainEntityOfPage: { "@id": `${url}/#webpage` },
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    image: `${site.url}/images/og.jpg`,
    ...(article.datePublished ? { datePublished: article.datePublished } : {}),
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
    ...(article.about?.length ? { about: article.about.map((name) => ({ "@type": "Thing", name })) } : {}),
  };
}

/**
 * Product node for a specific vacuum model.
 *
 * Deliberately omits `offers`, `price`, `availability`, `aggregateRating` and
 * `review`: PrestiVac publishes none of those, and fabricating them to earn
 * rich results would be both false and a manual-action risk.
 *
 * Certification is expressed per model from certification.ts, so an uncertified
 * model carries no certification property at all and a certified one carries
 * only its own scope.
 */
export function productJsonLd(product: {
  path: string;
  name: string;
  description: string;
  image: string;
  category: string;
  properties?: { name: string; value: string }[];
}) {
  const url = `${site.url}${product.path}`;
  return {
    "@type": "Product",
    "@id": `${url}/#product`,
    name: product.name,
    description: product.description,
    image: site.url + product.image,
    sku: product.name,
    model: product.name,
    category: product.category,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@id": `${site.url}/#organization` },
    ...(product.properties?.length
      ? {
          additionalProperty: product.properties.map((p) => ({
            "@type": "PropertyValue",
            name: p.name,
            value: p.value,
          })),
        }
      : {}),
  };
}
