import type { CaseStudy } from "@/lib/data/case-study-types";

export const berylliumDustNationalLaboratory: CaseStudy = {
  slug: "beryllium-dust-national-laboratory",
  title: "Regulated Metal Dust Control in a Government",
  subtitle:
    "A representative scenario: containing beryllium and other regulated metal dusts across a machining and materials research facility.",
  date: "2026-03-19",
  readingTime: 10,
  hero: {
    industry: "Government & Research",
    hazard: "Regulated toxic metal dust with sensitisation risk",
    material: "Beryllium, copper-beryllium alloy and mixed metal fines",
    standards: ["OSHA 1910.1024", "NFPA 660", "UL 1203"],
  },
  executiveSummary: [
    "Research and defence facilities machine materials that production plants rarely see, and beryllium is the clearest example: hazardous at airborne concentrations far below ordinary dust limits, with an immune-mediated disease mechanism.",
    "Because copper-beryllium is frequently only a few percent of an alloy, the hazard often travels unrecognised under a part description that says nothing about beryllium at all.",
    "This representative scenario describes containing regulated metal dust with dedicated HEPA 99.99% filtered recovery, sealed disposal, and equipment that never leaves the regulated area.",
  ],
  projectOverview: [
    { label: "Facility type", value: "Government research laboratory with machining and materials capability" },
    { label: "Material", value: "Beryllium and copper-beryllium alloy fines, mixed metal dust" },
    { label: "Primary hazard", value: "Sensitisation and chronic beryllium disease" },
    { label: "Secondary hazard", value: "Combustible metal dust where fines accumulate" },
    { label: "Approach", value: "Dedicated HEPA recovery, sealed disposal, documented cleaning" },
  ],
  industryBackground: [
    "Beryllium provokes an immune response in susceptible people — sensitisation — which can progress to chronic beryllium disease, an irreversible granulomatous lung condition. Beryllium and its compounds are also classified as carcinogenic to humans by IARC.",
    "OSHA regulates it under a dedicated substance standard, 29 CFR 1910.1024, with exposure limits far below those for ordinary dusts, plus regulated areas, medical surveillance for sensitisation, and housekeeping provisions that rule out dry methods.",
    "Research facilities compound the problem with variety: a single shop may machine copper-beryllium, aluminium, titanium and stainless in the same week, each with different hazards.",
  ],
  challenge: [
    { area: "Unlabelled alloys", detail: "Copper-beryllium is often a small percentage of an alloy, so exposure occurs during work nobody flagged as beryllium work." },
    { area: "Minute concentrations matter", detail: "The airborne levels of concern sit far below what looks or feels dusty, so operator perception is not a control." },
    { area: "Persistent surface contamination", detail: "Beryllium settles on surfaces, tools and clothing and stays there, travelling on shared equipment." },
    { area: "Mixed materials in one shop", detail: "Reactive metals, regulated toxics and ordinary steel are machined in the same space in the same week." },
    { area: "Disposal exposure", detail: "The container change is frequently the highest-exposure moment in the whole cycle, not the recovery." },
  ],
  hazardAnalysis: [
    "Because the mechanism is immunological rather than simply dose-linear, the protective strategy is to keep airborne beryllium as close to absent as achievable rather than merely below a threshold.",
    "Dry sweeping and compressed-air blowdown are not acceptable methods for removing accumulation where a substance standard applies: both re-suspend a regulated carcinogen into the breathing zone.",
    "Fine metal dust is also assessed as a combustible metal dust. That is a secondary consideration alongside the toxicity, not a substitute for it — and it is why grounding and bonding still matter.",
  ],
  pentagon: [
    { element: "Combustible dust", presence: "Fine metal fines from machining and grinding" },
    { element: "Oxygen", presence: "Ambient in the machining area" },
    { element: "Dispersion", presence: "Grinding, deburring, sawing and sweeping" },
    { element: "Confinement", presence: "Machine enclosures and local extraction ducting" },
    { element: "Ignition source", presence: "Grinding sparks, hot surfaces, static in dry fines" },
  ],
  siteAssessment: [
    "Establish alloy composition with suppliers before machining unfamiliar stock — beryllium content is routinely invisible in a part description.",
    "Work from the exposure assessment required by the applicable substance standard rather than from equipment preference.",
    "Identify which areas are regulated, and confirm that no equipment crosses between regulated and general shop use.",
    "Confirm classification for combustible metal dust with the facility's own engineer where fines accumulate.",
  ],
  solution: [
    "Dedicate HEPA 99.99% filtered vacuums to the regulated area, labelled and never circulated into general shop use.",
    "Eliminate dry sweeping and compressed-air blowdown entirely wherever beryllium may be present.",
    "Capture at source on grinding, deburring and sawing operations so particulate is collected as generated rather than after it has spread.",
    "Treat filter and container changes as controlled procedures with sealed liners and a defined route out as regulated waste.",
    "Specify conductive, grounded and bonded recovery throughout, since the fines are also a combustible metal dust.",
    "Record every cleaning pass — where a substance standard applies, the cleaning record is part of the compliance file.",
  ],
  equipment: [
    { item: "HEPA 99.99% absolute filtration vacuum", purpose: "Retains regulated metal dust rather than discharging it to the room" },
    { item: "Dedicated, labelled units per regulated area", purpose: "Prevents transfer of regulated material on shared equipment" },
    { item: "Sealed collection with liner options", purpose: "Controls the container change, the highest-exposure step" },
    { item: "Anti-static hose and conductive tooling", purpose: "Maintains the grounded path for combustible metal fines" },
    { item: "Source-capture tooling for grinding and deburring", purpose: "Collects particulate at generation rather than after dispersal" },
  ],
  implementation: [
    { phase: "Identify", detail: "Confirm which materials and areas are in scope, including alloys where beryllium content is not obvious." },
    { phase: "Assess exposure", detail: "Monitoring under the applicable substance standard drives the controls; equipment follows that determination." },
    { phase: "Dedicate", detail: "Assign and label equipment to regulated areas with a physical control on movement." },
    { phase: "Procedure", detail: "Write the filter and container change as a controlled step with the specified protection." },
    { phase: "Record", detail: "Log cleaning as part of the compliance file, not as informal housekeeping." },
  ],
  beforeAfter: [
    { aspect: "Cleaning method", before: "Sweeping and shop vacuums", after: "Dedicated HEPA 99.99% filtered recovery" },
    { aspect: "Equipment movement", before: "Shared across the whole shop", after: "Dedicated and labelled per regulated area" },
    { aspect: "Disposal", before: "Improvised at end of shift", after: "Sealed liners, defined route, regulated waste" },
    { aspect: "Alloy verification", before: "Assumed from part description", after: "Confirmed with the supplier before machining" },
    { aspect: "Records", before: "None", after: "Cleaning logged as part of the compliance file" },
  ],
  compliance: [
    "OSHA's beryllium standard, 29 CFR 1910.1024, establishes exposure assessment, regulated areas, medical surveillance for sensitisation and housekeeping provisions.",
    "Other regulated metals encountered in research settings carry their own standards, including lead (1910.1025), cadmium (1910.1027) and hexavalent chromium (1910.1026).",
    "NFPA 660 governs the combustible metal dust aspect, which applies in addition to — not instead of — the toxicity controls.",
  ],
  operationalImprovements: [
    "A clear boundary between regulated and general shop equipment, which is usually the first thing an auditor checks.",
    "Lower surface contamination and less transfer on tools and clothing.",
    "Defensible documentation supporting the medical surveillance provisions.",
    "One method that satisfies both the toxicity controls and the combustible metal dust requirements.",
  ],
  technical: [
    "Beryllium sensitisation is immune-mediated, so susceptibility varies and low exposures matter.",
    "Copper-beryllium alloys are the most widespread source and are frequently unlabelled in shop practice.",
    "Fine metal dust is assessed as combustible metal dust independently of its toxicity.",
    "Water is inappropriate on burning reactive metal fines, which are Class D.",
  ],
  faqs: [
    {
      question: "Is beryllium dust really hazardous at low concentrations?",
      answer:
        "Yes, and that is what makes it unusual. Beryllium provokes an immune response called sensitisation in susceptible people, which can progress to chronic beryllium disease — irreversible and potentially disabling. OSHA regulates it under a dedicated standard, 29 CFR 1910.1024, with exposure limits far below those for ordinary dusts.",
    },
    {
      question: "How would a shop know beryllium is present?",
      answer:
        "Often it would not, without asking. Copper-beryllium alloys are frequently only a few percent beryllium and appear in springs, connectors, non-sparking tools, moulds and aerospace parts. Confirming alloy composition with the supplier before machining unfamiliar stock is the practical control.",
    },
    {
      question: "Can the same vacuum be used elsewhere in the facility?",
      answer:
        "No. Equipment that recovers a regulated substance and then cleans elsewhere moves a compliance problem into a new part of the building. Dedicated, labelled units that stay inside the regulated area are standard practice, and it is usually the first thing an auditor checks.",
    },
    {
      question: "Is beryllium dust also a fire hazard?",
      answer:
        "Finely divided beryllium is assessed as a combustible metal dust and should be tested rather than assumed. But the reason it is controlled so tightly is toxicological — the exposure limits, not the fire risk, determine how accumulation must be removed.",
    },
  ],
  relatedIndustries: [
    { label: "Aerospace & Defense", href: "/industries/aerospace" },
    { label: "Metalworking & Machining", href: "/industries/metalworking" },
    { label: "Medical Devices", href: "/industries/medical-devices" },
    { label: "Education & Research", href: "/industries/education" },
  ],
  relatedProducts: ["hepa-vacuums", "explosion-proof-vacuums", "pharmaceutical-vacuums", "custom-engineered-systems"],
  takeaways: [
    "Beryllium is hazardous at concentrations far below what looks dusty, with an irreversible disease mechanism.",
    "Copper-beryllium alloys carry the hazard into work nobody flagged as beryllium work.",
    "Dry sweeping and blowdown are not acceptable where a substance standard applies.",
    "Equipment must be dedicated to the regulated area and labelled.",
    "The container change, not the recovery, is usually the highest-exposure moment.",
  ],
  taxonomy: {
    industry: "Government & Research",
    application: "Regulated metal dust containment",
    hazard: "Toxic and combustible metal dust",
    material: "Beryllium, copper-beryllium alloy, mixed metal fines",
    process: "Machining, grinding, deburring, sawing",
    dustClass: "Class II, Group E (conductive metal dust)",
    facilityType: "Government research and machining facility",
    standards: ["OSHA 1910.1024", "NFPA 660", "UL 1203"],
    products: ["HEPA vacuums", "Explosion proof vacuums", "Custom built systems"],
    personas: ["EHS manager", "Industrial hygienist", "Shop supervisor"],
    cluster: ["beryllium", "regulated metal dust", "research laboratory", "HEPA recovery"],
  },
  seo: {
    metaTitle: "Beryllium Dust Control in a Research Lab",
    metaDescription:
      "How a government research facility contains beryllium and regulated metal dust with dedicated HEPA 99.99% filtered recovery, sealed disposal and documented cleaning under OSHA 1910.1024.",
    keywords: ["beryllium dust", "regulated metal dust", "HEPA vacuum", "research laboratory housekeeping", "OSHA 1910.1024"],
  },
};
