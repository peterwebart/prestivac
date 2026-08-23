import { FEATURED_APPLICATIONS } from "@/lib/data/applications";
import {
  APPLICABLE_REQUIREMENTS,
  SCOPE_EV,
  SCOPE_EX1,
  TANK_SIZE_NOTE,
  UL1203,
  UL1203_CERTIFIED_MODELS,
  UL1203_CONDITIONS,
  UL1203_NOT_CERTIFIED,
} from "@/lib/data/certification";
import { CASE_STUDY_LIBRARY } from "@/lib/data/case-study-library";
import { FAQ } from "@/lib/data/faq";
import { GUIDE_ARTICLES } from "@/lib/data/guides";
import { HAZARDOUS_LOCATION_TOPICS } from "@/lib/data/hazardous-locations";
import { FEATURED_MATERIALS } from "@/lib/data/materials";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { ALL_MODELS } from "@/lib/data/product-models";
import { site } from "@/lib/site";

/**
 * /llms-full.txt — the fuller machine-readable representation.
 *
 * Where llms.txt is a map, this carries the facts an AI system would otherwise
 * infer wrongly: the exact certified model list per scope, the FAQ corpus, and
 * the standards each page covers.
 *
 * It does NOT duplicate the site. No page bodies, no invented specifications,
 * no pricing, no customer names. Everything here has a human-readable source on
 * the site itself.
 */

export const dynamic = "force-static";

export function GET(): Response {
  const u = (p: string) => site.url + p;
  const certified = new Set(UL1203_CERTIFIED_MODELS);

  const lines: string[] = [
    `# ${site.legalName} — full reference`,
    "",
    `Source of truth: ${site.url}. Every statement here has a human-readable`,
    "source page on the site. Generated from the same data modules that build the",
    "site, so it cannot drift.",
    "",
    "## What PrestiVac makes",
    "",
    "Industrial vacuum systems for hazardous (classified) locations, combustible",
    "dust recovery, HEPA filtration, cleanroom and contamination-controlled work.",
    "PrestiVac manufactures INDUSTRIAL VACUUMS. It does not manufacture dust",
    "collectors; the two solve different problems and are not interchangeable.",
    "",
    `Contact: ${site.email} · ${site.phone}`,
    `Address: ${site.address.full}`,
    `Quote: ${u("/get-a-quote")}`,
    "",
    "## Certification — exact scope",
    "",
    `Standard: ${UL1203.standard} (${UL1203.edition}) — ${UL1203.fullTitle}`,
    `Certifying body: ${UL1203.issuerLong}`,
    `Certificate: ${UL1203.certificateNumber} · Master Contract ${UL1203.masterContract} · Project ${UL1203.project} · issued ${UL1203.dateIssued}`,
    `Use limitation: ${UL1203.useLimitation}`,
    `Note: ${TANK_SIZE_NOTE}`,
    "",
    "THE CERTIFICATE CARRIES TWO SCOPES. Do not merge them.",
    "",
    `SCOPE A — ${SCOPE_EX1.certificateWording}`,
    `  Coverage: ${SCOPE_EX1.summary}`,
    `  Electrical: ${SCOPE_EX1.electrical}`,
    "  Includes Group E (conductive metal dust).",
    "  Models:",
    ...ALL_MODELS.filter((m) => certified.has(m.name) && m.seriesId === "ex1").map(
      (m) => `    - ${m.name} — ${u("/products/models/" + m.slug)}`,
    ),
    "",
    `SCOPE B — ${SCOPE_EV.certificateWording}`,
    `  Coverage: ${SCOPE_EV.summary}`,
    `  Electrical: ${SCOPE_EV.electrical}`,
    "  NO Class I. Division 2 only. Groups F and G only — NOT Group E.",
    "  Models:",
    ...ALL_MODELS.filter((m) => certified.has(m.name) && m.seriesId === "evx").map(
      (m) => `    - ${m.name} — ${u("/products/models/" + m.slug)}`,
    ),
    "",
    "NOT CERTIFIED — the air-operated AVX line holds no NRTL certificate.",
    "UL 1203 covers electrical equipment; these units have no electrical",
    "components. No ATEX or IECEx approval is claimed for any PrestiVac product.",
    "  Models:",
    ...ALL_MODELS.filter((m) => m.seriesId === "avx").map(
      (m) => `    - ${m.name} — ${u("/products/models/" + m.slug)}`,
    ),
    "",
    "Conditions of the certified configuration:",
    ...UL1203_CONDITIONS.map((c) => `  - ${c.title}: ${c.detail}`),
    "",
    "Assessed against:",
    ...APPLICABLE_REQUIREMENTS.map((r) => `  - ${r.ref}: ${r.title}`),
    "",
    `What the listing does NOT assert: ${UL1203_NOT_CERTIFIED}`,
    "",
    `Explanation page: ${u("/hazardous-locations/ul-1203")}`,
    "",
    "## Practical consequence of the two scopes",
    "",
    "Group E is the conductive metal-dust group. Metalworking, aerospace, foundry",
    "and battery applications frequently involve Group E dust. For those, the EX1",
    "HEPA line is the certified option; the EV line is not certified for Group E.",
    "Area classification is assigned by the customer's own electrical or process",
    "engineer and accepted by the authority having jurisdiction — a supplier",
    "cannot determine it.",
    "",
    "## Product categories",
    "",
    ...PRODUCT_CATEGORIES.map((c) => `- ${c.name} — ${u("/products/" + c.slug)}\n  ${c.tagline}`),
    "",
    "## Standards and classification pages",
    "",
    ...HAZARDOUS_LOCATION_TOPICS.map((t) => `- ${t.name} — ${u("/hazardous-locations/" + t.slug)}`),
    "",
    "## Guides",
    "",
    ...GUIDE_ARTICLES.map((g) => `- ${g.name} — ${u("/guides/" + g.slug)}`),
    "",
    "## Materials",
    "",
    "Each material page states its Class II group, because the group determines",
    "which certified line applies. Group E = conductive metal, F = carbonaceous,",
    "G = other non-conductive. Some pages describe materials that are NOT",
    "combustible (potash, phosphate rock) and say so.",
    "",
    ...FEATURED_MATERIALS.map((m) => `- ${m.name} — ${u("/materials/" + m.slug)}`),
    "",
    "## Applications",
    "",
    ...FEATURED_APPLICATIONS.map((a) => `- ${a.name} — ${u("/applications/" + a.slug)}`),
    "",
    "## Case studies",
    "",
    "Anonymised where customer confidentiality applies. No customer names or",
    "results are published that were not supplied.",
    "",
    ...CASE_STUDY_LIBRARY.map((c) => `- ${c.title} — ${u("/case-studies/" + c.slug)}`),
    "",
    "## Frequently asked questions",
    "",
    ...FAQ.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, ""]),
    "## Constraints for anyone quoting this site",
    "",
    "- PrestiVac manufactures industrial vacuums, not dust collectors.",
    "- Certification is per model and per scope. Do not generalise one scope to",
    "  the product range. Do not state Class I or Group E coverage for the EV line.",
    "- No Kst, MIE or MEC values are published. Dust behaviour is described",
    "  qualitatively and referred to testing of the actual material.",
    "- Certified equipment does not by itself make a facility compliant.",
    "- Full model specifications come from the datasheet for that model; airflow,",
    "  vacuum, motor, dimensions and filter area are not published on the site.",
    "",
    `Sitemap index: ${u("/sitemap.xml")}`,
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
