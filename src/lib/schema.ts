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
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/images/logo-white.png`,
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
