import type { CaseStudy } from "@/lib/data/case-study-types";

export const coalDustPowerGeneration: CaseStudy = {
  slug: "coal-dust-power-generation",
  title: "Coal and Biomass Dust Housekeeping at a Power Generation Facility",
  subtitle:
    "A representative scenario: controlling carbonaceous dust and its tendency to smoulder across a fuel handling and boiler house operation.",
  date: "2026-03-04",
  readingTime: 10,
  hero: {
    industry: "Energy & Power Generation",
    hazard: "Combustible carbonaceous dust with deep-seated smouldering risk",
    material: "Coal, coke and biomass fuel dust",
    standards: ["NFPA 660", "OSHA housekeeping", "UL 1203"],
  },
  executiveSummary: [
    "Fuel handling generates carbonaceous dust at every transfer — unloading, conveying, crushing, milling and bunkering. The dust is combustible, and its defining characteristic is that it smoulders.",
    "A deep-seated glow can persist inside accumulated material long after a visible event appears resolved, then reignite. That behaviour makes what happens to recovered dust as important as the recovery itself.",
    "This representative scenario describes replacing shovel-and-blowdown practice with UL 1203 certified explosion proof vacuum recovery on a defined interval, and removing collected material from the building rather than letting containers stand.",
  ],
  projectOverview: [
    { label: "Facility type", value: "Utility-scale power generation with coal and biomass co-firing" },
    { label: "Material", value: "Coal, coke and biomass fuel dust" },
    { label: "Primary hazard", value: "Combustible carbonaceous dust and smouldering in accumulation" },
    { label: "Secondary hazard", value: "Respirable dust exposure across fuel handling" },
    { label: "Approach", value: "Explosion proof vacuum recovery with prompt removal of collected material" },
  ],
  industryBackground: [
    "Coal dust explosions are among the most thoroughly documented events in industrial safety, and the fuel handling side of a generating station reproduces the conditions in miniature: fine carbonaceous dust, confinement in conveyor galleries and transfer towers, and abundant ignition sources.",
    "Biomass co-firing adds a second combustible dust with different behaviour — lighter, more readily suspended, and prone to biological self-heating in storage.",
    "For hazardous-location purposes, carbonaceous dusts fall in Class II, Group F. NFPA 660 now consolidates the commodity standards that previously governed these materials separately.",
  ],
  challenge: [
    { area: "Conveyor galleries", detail: "Long enclosed runs accumulate dust on every horizontal surface, with drive motors and bearings distributed along them." },
    { area: "Transfer towers", detail: "Chutes and transfer points generate the finest fraction and confine it, which is the classic deflagration geometry." },
    { area: "Smouldering in collection", detail: "Recovered carbonaceous dust can hold a deep-seated glow, so a full container standing indoors is its own hazard." },
    { area: "Mill and bunker areas", detail: "Milling produces the finest material in the plant, adjacent to heat and mechanical ignition sources." },
    { area: "Established practice", detail: "Shovelling and compressed-air blowdown were the habitual methods, both of which suspend the fine fraction." },
  ],
  hazardAnalysis: [
    "The mechanism that destroys buildings is a primary event lofting accumulated dust, followed by a secondary explosion propagating through the structure. In a generating station, conveyor galleries provide both the fuel inventory and the confinement.",
    "OSHA's guidance on hazardous accumulation is commonly framed around a layer roughly 1/32 of an inch — about the thickness of a paper clip wire — across a meaningful share of the surface area.",
    "Smouldering deserves separate treatment from deflagration. A fire that appears extinguished in accumulated coal dust may be burning internally, which is why recovered material is removed from the building rather than stored.",
  ],
  pentagon: [
    { element: "Combustible dust", presence: "Coal, coke and biomass fuel fines" },
    { element: "Oxygen", presence: "Ambient throughout fuel handling" },
    { element: "Dispersion", presence: "Transfer points, chutes, milling and bunkering" },
    { element: "Confinement", presence: "Conveyor galleries, transfer towers, mill enclosures" },
    { element: "Ignition source", presence: "Bearings, drive motors, hot surfaces, self-heating in accumulation" },
  ],
  siteAssessment: [
    "Walk the conveyor galleries and transfer towers specifically looking above head height, where the fuel inventory sits.",
    "Inspect bearing and drive locations — heat plus accumulation is the combination that starts events.",
    "Establish whether biomass is co-fired, since self-heating behaviour changes storage and recovery decisions.",
    "Confirm the area classification with the station's own electrical engineer before selecting equipment.",
  ],
  solution: [
    "Retire compressed-air blowdown throughout fuel handling and replace it with vacuum recovery, so dust leaves the building rather than moving along the gallery.",
    "Deploy UL 1203 certified explosion proof vacuums, conductive and bonded from hose tip to container, suited to the Class II Group F classification assigned by the station.",
    "Specify HEPA 99.99% absolute filtration so the respirable fraction is retained during cleaning rather than redistributed through the gallery.",
    "Remove recovered material from the building promptly at end of each pass — never leave a full container standing in fuel handling.",
    "Set the interval by surface: gallery steelwork, transfer tower ledges, mill enclosure exteriors and the perimeter of every drive.",
  ],
  equipment: [
    { item: "Explosion proof vacuum, UL 1203 certified", purpose: "Recovery in classified fuel handling areas without adding an ignition source" },
    { item: "Air-operated units where plant air is available", purpose: "No electrical components in the recovery unit, well suited to continuous gallery work" },
    { item: "HEPA 99.99% absolute filtration", purpose: "Retains respirable carbonaceous fines during cleaning" },
    { item: "Anti-static hose and conductive tooling", purpose: "Maintains the grounded path where dry fuel dust generates charge" },
    { item: "RCT removable collection tank", purpose: "Rapid emptying so material can be taken out of the building at once" },
  ],
  implementation: [
    { phase: "Assess", detail: "Dust Hazard Analysis with the station's own coal and biomass tested, and classification confirmed by their engineer." },
    { phase: "Prioritise", detail: "Galleries and transfer towers first — the largest accumulations and the tightest confinement." },
    { phase: "Retire blowdown", detail: "Remove compressed air from cleaning procedures and explain the mechanism to crews." },
    { phase: "Set disposal discipline", detail: "Recovered dust leaves the building on the same shift; containers do not stand indoors." },
    { phase: "Record", detail: "Log each surface and interval so the programme is auditable." },
  ],
  beforeAfter: [
    { aspect: "Cleaning method", before: "Shovel and compressed-air blowdown", after: "Explosion proof vacuum recovery to a defined interval" },
    { aspect: "Gallery steelwork", before: "Cleaned at outage", after: "Scheduled between outages, surface by surface" },
    { aspect: "Recovered dust", before: "Containers left in the gallery", after: "Removed from the building on the same shift" },
    { aspect: "Respirable fraction", before: "Redistributed by blowdown", after: "Retained by HEPA 99.99% filtration" },
    { aspect: "Records", before: "None", after: "Logged passes supporting the DHA" },
  ],
  compliance: [
    "NFPA 660 consolidates the former commodity standards for combustible dust and retains the Dust Hazard Analysis requirement.",
    "Carbonaceous dusts sit in Class II, Group F for hazardous-location classification purposes.",
    "Area classification is assigned by the station's own engineering assessment and accepted by the authority having jurisdiction.",
  ],
  operationalImprovements: [
    "Reduced fouling of bearings and drives where dust previously accumulated against hot surfaces.",
    "Cleaner walkways and improved visibility along conveyor galleries.",
    "Less repeat cleaning, because material is removed rather than relocated.",
    "A recorded programme available to insurers and regulators.",
  ],
  technical: [
    "Carbonaceous dust smoulders: a deep-seated glow can persist unnoticed in accumulation and reignite later.",
    "Biomass adds biological self-heating potential in storage, distinct from the coal behaviour.",
    "Dust layers insulate hot surfaces, raising the surface temperature that the layer then sits on.",
    "Chronic coal dust inhalation causes coal workers' pneumoconiosis, so exposure control accompanies fire control.",
  ],
  faqs: [
    {
      question: "Is coal dust explosive?",
      answer:
        "Yes. Coal dust is a combustible carbonaceous dust in Class II, Group F, and the mining and power generation record is among the most thoroughly documented in industrial safety. It also smoulders, meaning a deep-seated glow can persist inside accumulated or stockpiled material and reignite after a visible event appears resolved.",
    },
    {
      question: "Why can't recovered coal dust sit in the collection container?",
      answer:
        "Because a full container concentrates the same fuel that was spread thinly across the gallery into one place, and carbonaceous dust can hold heat internally. The simple control is to take recovered material out of the building at the end of each cleaning pass rather than letting containers stand.",
    },
    {
      question: "Does biomass co-firing change the approach?",
      answer:
        "It adds a second combustible dust that is lighter and more readily suspended, and biomass can self-heat biologically in storage. Both fractions should be tested and covered in the Dust Hazard Analysis rather than assuming the coal assessment carries over.",
    },
    {
      question: "Where should a station start?",
      answer:
        "Conveyor galleries and transfer towers, because they combine the largest accumulations with the tightest confinement and a distribution of drive motors and bearings. Milling areas follow, since they produce the finest material in the plant.",
    },
  ],
  relatedIndustries: [
    { label: "Energy", href: "/industries/energy" },
    { label: "Coal", href: "/industries/coal" },
    { label: "Mining & Minerals", href: "/industries/mining" },
    { label: "Chemical Processing", href: "/industries/chemical" },
  ],
  relatedProducts: ["explosion-proof-vacuums", "pneumatic-vacuums", "central-vacuum-systems", "hepa-vacuums"],
  takeaways: [
    "Carbonaceous fuel dust is combustible and, distinctively, it smoulders.",
    "Conveyor galleries and transfer towers hold the fuel inventory and the confinement together.",
    "Recovered dust must leave the building — a standing container is an accumulation.",
    "Biomass co-firing introduces self-heating behaviour that coal assessments do not cover.",
    "Blowdown moves the hazard along the gallery instead of removing it.",
  ],
  taxonomy: {
    industry: "Energy & Power Generation",
    application: "Fuel handling housekeeping",
    hazard: "Combustible dust, smouldering",
    material: "Coal, coke, biomass fuel dust",
    process: "Unloading, conveying, crushing, milling, bunkering",
    dustClass: "Class II, Group F (carbonaceous dust)",
    facilityType: "Utility-scale power generation station",
    standards: ["NFPA 660", "OSHA NEP", "UL 1203"],
    products: ["Explosion proof vacuums", "Air-operated vacuums", "Central vacuum systems"],
    personas: ["Station manager", "EHS manager", "Maintenance engineer"],
    cluster: ["combustible dust", "coal dust", "biomass", "power generation"],
  },
  seo: {
    metaTitle: "Coal & Biomass Dust Control at a Power Generation Facility",
    metaDescription:
      "How a generating station controls combustible coal, coke and biomass fuel dust across conveyor galleries and milling areas with UL 1203 certified explosion proof vacuums and HEPA 99.99% filtration.",
    keywords: ["coal dust", "biomass dust", "power plant housekeeping", "combustible dust vacuum", "explosion proof vacuum"],
  },
};
