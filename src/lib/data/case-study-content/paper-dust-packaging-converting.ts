import type { CaseStudy } from "@/lib/data/case-study-types";

export const paperDustPackagingConverting: CaseStudy = {
  slug: "paper-dust-packaging-converting",
  title: "Controlling Paper and Corrugated Dust in a",
  subtitle:
    "A representative scenario: how a high-speed corrugated converting operation brought fibre dust under control without slowing the lines.",
  date: "2026-02-18",
  readingTime: 9,
  hero: {
    industry: "Paper & Packaging",
    hazard: "Combustible cellulose dust and fibre accumulation",
    material: "Paper, corrugated board and starch-based adhesive dust",
    standards: ["NFPA 660", "OSHA housekeeping", "UL 1203"],
  },
  executiveSummary: [
    "Converting operations generate cellulose dust at every cut, score, slit and stack. It is light, it travels, and it settles on overhead steel and inside machine guarding far from where it was created.",
    "Because paper dust looks benign, it is frequently swept or blown down. Both practices move the fuel rather than removing it, and blowdown puts a combustible cloud into a room that already contains drive motors, heaters and static.",
    "This representative scenario describes recovering fibre dust at the converting lines with UL 1203 certified explosion proof vacuums, replacing compressed-air blowdown and giving the plant a documented housekeeping interval per surface.",
  ],
  projectOverview: [
    { label: "Facility type", value: "High-speed corrugated converting and packaging plant" },
    { label: "Material", value: "Paper and corrugated fibre dust with starch adhesive fines" },
    { label: "Primary hazard", value: "Combustible dust accumulation feeding a secondary event" },
    { label: "Secondary hazard", value: "Respiratory irritation and machine fouling" },
    { label: "Approach", value: "Explosion proof vacuum recovery on a defined interval, blowdown retired" },
  ],
  industryBackground: [
    "Corrugated converting runs board through cutting, creasing, folding and gluing at speed. Every one of those operations abrades fibre, and the fine fraction is light enough to stay airborne long after the board has moved on.",
    "Cellulose dust is combustible. NFPA 660, which consolidated the former commodity standards including NFPA 664 for wood and cellulose processing, treats accumulation control as a core requirement rather than good practice.",
    "The complicating factor in packaging plants is starch-based adhesive. Dried starch fines mix with paper dust, and starch is fine enough to serve as a laboratory reference dust in explosibility testing.",
  ],
  challenge: [
    { area: "Accumulation above the lines", detail: "Fibre settles on overhead steel, cable trays and duct tops — the surfaces nobody inspects and the ones that feed a secondary explosion." },
    { area: "Inside machine guarding", detail: "Dust packs into guards, drive enclosures and conveyor housings, insulating hot surfaces and fouling sensors." },
    { area: "Blowdown as habit", detail: "Compressed air was the established cleaning method at shift change, deliberately suspending the accumulation the programme needed to remove." },
    { area: "Production pressure", detail: "Any cleaning method that required stopping the lines for long periods would not survive contact with the schedule." },
    { area: "Mixed material", detail: "Paper fibre combined with dried starch adhesive fines behaves differently from either material alone." },
  ],
  hazardAnalysis: [
    "A deflagration needs combustible dust, oxygen, dispersion, confinement and an ignition source. Converting lines supply four of those routinely, which leaves accumulation as the condition housekeeping controls.",
    "OSHA's guidance on hazardous accumulation is commonly framed around a dust layer roughly the thickness of a paper clip wire — about 1/32 of an inch — over a meaningful share of the floor area. Fibre reaches that depth on overhead surfaces long before anyone notices it at floor level.",
    "Severity is material and particle-size specific. Testing the plant's own dust, rather than reasoning from a similar mill, is what makes a Dust Hazard Analysis meaningful.",
  ],
  pentagon: [
    { element: "Combustible dust", presence: "Cellulose fibre and dried starch adhesive fines" },
    { element: "Oxygen", presence: "Ambient — not controllable in an open plant" },
    { element: "Dispersion", presence: "Cutting, slitting and stacking at line speed" },
    { element: "Confinement", presence: "Machine guarding, ducting and conveyor housings" },
    { element: "Ignition source", presence: "Drive motors, bearings, heaters, static from dry board" },
  ],
  siteAssessment: [
    "Map where fibre is generated: cutting and slitting stations produce the finest fraction, and stacking releases it again.",
    "Inspect above head height. Beams, ledges, duct tops and the outside of enclosures hold the inventory that matters.",
    "Open machine guarding during a planned stop — packed dust inside guards is routinely the largest single accumulation in the building.",
    "Establish the area classification with the plant's own electrical or process engineer before selecting equipment.",
  ],
  solution: [
    "Retire compressed-air blowdown across converting entirely, and replace it with vacuum recovery so material leaves the building instead of relocating.",
    "Deploy UL 1203 certified explosion proof vacuums with a conductive, grounded and bonded path from hose tip to collection container, and anti-static hose rather than ordinary plastic.",
    "Specify HEPA 99.99% absolute filtration so the respirable fibre fraction is retained rather than discharged back over the lines during cleaning.",
    "Assign cleaning to defined surfaces at defined intervals — overhead steel, duct tops, guard interiors and the perimeter of heated equipment — and record each pass.",
    "Use RCT removable collection tanks so operators empty units with a lever rather than dismantling the power head, keeping cleaning within the time available between runs.",
  ],
  equipment: [
    { item: "Explosion proof vacuum, UL 1203 certified", purpose: "Recovery in classified converting areas without introducing an ignition source" },
    { item: "HEPA 99.99% absolute filtration", purpose: "Retains fine cellulose and starch fines instead of returning them to the room" },
    { item: "Anti-static hose and conductive tooling", purpose: "Completes the grounded path where dry fibre generates charge" },
    { item: "RCT removable collection tank", purpose: "Fast, low-exposure emptying between production runs" },
    { item: "Extension wands for overhead work", purpose: "Reaches the beams and duct tops that hold the secondary-event fuel" },
  ],
  implementation: [
    { phase: "Assess", detail: "Dust Hazard Analysis with the plant's own material tested, and area classification confirmed by their engineer." },
    { phase: "Specify", detail: "Match unit count and capacity to the number of simultaneous operators and the interval required." },
    { phase: "Retire blowdown", detail: "Remove compressed-air cleaning from converting procedures and communicate why, not just what." },
    { phase: "Train", detail: "Operators shown the accumulation map, the interval for each surface and the emptying procedure." },
    { phase: "Record", detail: "Log every pass so the programme is auditable and improvable rather than habitual." },
  ],
  beforeAfter: [
    { aspect: "Cleaning method", before: "Compressed-air blowdown at shift change", after: "Explosion proof vacuum recovery on a defined interval" },
    { aspect: "Overhead surfaces", before: "Cleaned during occasional shutdowns", after: "Scheduled surface-by-surface with a logged interval" },
    { aspect: "Fine fraction", before: "Returned to the room by shop-grade filtration", after: "Retained by HEPA 99.99% absolute filtration" },
    { aspect: "Guard interiors", before: "Cleaned when a fault occurred", after: "Part of the planned interval, opened and vacuumed" },
    { aspect: "Documentation", before: "Informal practice", after: "Recorded passes supporting the DHA" },
  ],
  compliance: [
    "NFPA 660 consolidates the former commodity standards, including the cellulose provisions previously in NFPA 664, and retains the Dust Hazard Analysis requirement.",
    "OSHA has no single comprehensive combustible dust standard for general industry; enforcement runs through the Combustible Dust National Emphasis Program, the General Duty Clause and specific standards bearing on housekeeping and hazardous-location installations.",
    "Equipment used in a classified area must be suitable for the classification assigned by the facility's own engineering assessment.",
  ],
  operationalImprovements: [
    "Cleaner machine surfaces and guarding reduce fibre transfer onto finished board.",
    "Fewer sensor faults and less fouling of drives where dust previously packed into enclosures.",
    "Cleaning fits between runs rather than requiring an extended stop.",
    "A documented programme that an auditor or insurer can review.",
  ],
  technical: [
    "Cellulose dust is combustible; the fine fraction produced by cutting and slitting is the fraction that matters.",
    "Dried starch adhesive fines are exceptionally fine and easily suspended, and starch is used as a reference dust in explosibility testing.",
    "Dust layers insulate hot surfaces, so accumulation on a drive enclosure creates the hazard it then feeds.",
    "Grounding and bonding matter independently of the drive, because dry board and fibre generate static in the recovery path.",
  ],
  faqs: [
    {
      question: "Is paper dust really combustible?",
      answer:
        "Yes. Cellulose is combustible, and the fine dust produced by cutting, slitting and stacking behaves as a combustible dust. It is easy to underestimate because bulk paper is handled safely by hand, but particle size — not the material alone — determines the behaviour.",
    },
    {
      question: "Why not just blow the lines down with compressed air?",
      answer:
        "Because it creates the exact condition a dust programme exists to prevent. Blowdown suspends settled dust into a cloud, in a room that already has confinement and ignition sources. It also relocates the material rather than removing it, usually to overhead surfaces where nobody sees it.",
    },
    {
      question: "Does starch adhesive change the hazard?",
      answer:
        "It adds a second combustible fraction that is finer and more easily suspended than paper fibre. Starch is well enough characterised to serve as a laboratory reference dust, so a converting plant using starch adhesives should have both fractions considered in its Dust Hazard Analysis.",
    },
    {
      question: "How often should converting areas be cleaned?",
      answer:
        "That comes out of the Dust Hazard Analysis rather than a general rule, because it depends on generation rate and the surfaces involved. What matters is that the interval is defined per surface, the method removes rather than relocates, and the pass is recorded.",
    },
  ],
  relatedIndustries: [
    { label: "Paper & Packaging", href: "/industries/paper-packaging" },
    { label: "Paper Mills", href: "/industries/paper-mills" },
    { label: "Printing", href: "/industries/printing" },
    { label: "Woodworking", href: "/industries/woodworking" },
  ],
  relatedProducts: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "pneumatic-vacuums"],
  takeaways: [
    "Paper and corrugated dust is combustible; the fine fraction from converting is the hazard.",
    "Starch adhesive fines add a second, finer combustible fraction to the assessment.",
    "Blowdown is the wrong method — it disperses the fuel it appears to remove.",
    "The accumulation that matters is above head height and inside guarding.",
    "A defined interval per surface, recorded, is what makes the programme defensible.",
  ],
  taxonomy: {
    industry: "Paper & Packaging",
    application: "Converting line housekeeping",
    hazard: "Combustible dust",
    material: "Paper and corrugated fibre, starch adhesive fines",
    process: "Cutting, creasing, slitting, folding, gluing",
    dustClass: "Class II, Group G (non-conductive combustible dust)",
    facilityType: "Corrugated converting and packaging plant",
    standards: ["NFPA 660", "OSHA NEP", "UL 1203"],
    products: ["Explosion proof vacuums", "HEPA vacuums", "Central vacuum systems"],
    personas: ["Plant manager", "EHS manager", "Maintenance supervisor"],
    cluster: ["combustible dust", "paper dust", "packaging", "converting"],
  },
  seo: {
    metaTitle: "Paper & Corrugated Dust Control in Packaging",
    metaDescription:
      "How a corrugated converting plant controls combustible paper and starch adhesive dust with UL 1203 certified explosion proof vacuums and HEPA 99.99% filtration, replacing compressed-air blowdown.",
    keywords: ["paper dust", "corrugated dust", "packaging plant housekeeping", "combustible dust vacuum", "explosion proof vacuum"],
  },
};
