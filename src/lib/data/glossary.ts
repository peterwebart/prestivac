/**
 * Technical glossary.
 *
 * Every term here is explained in full somewhere on the site, and `href` points
 * at that page. That is deliberate: a definition with no human-readable source
 * is exactly the kind of machine-only content the brief prohibits, and it also
 * makes the glossary useful rather than a dead end.
 *
 * Integrity rules as elsewhere: no Kst, MIE or MEC values, no clause numbers,
 * and certification scope is described rather than asserted. Where a term has a
 * precise meaning in a standard we say what it governs, not what it requires.
 */

export type GlossaryTerm = {
  term: string;
  /** Common alternative or abbreviation, shown alongside the term. */
  also?: string;
  definition: string;
  href?: string;
};

export type GlossaryGroup = {
  id: string;
  heading: string;
  summary: string;
  terms: GlossaryTerm[];
};

export const GLOSSARY: GlossaryGroup[] = [
  {
    id: "classification",
    heading: "Hazardous location classification",
    summary:
      "The North American framework for describing what hazard is present in a space and how likely it is to be there. Assigned by your engineer, not by an equipment supplier.",
    terms: [
      {
        term: "Class I",
        definition:
          "A location where flammable gases, vapours or liquids may be present in quantities sufficient to produce an ignitible mixture.",
        href: "/hazardous-locations/class-i-division-1",
      },
      {
        term: "Class II",
        definition:
          "A location where combustible dust may be present. This is the classification that governs most industrial housekeeping equipment.",
        href: "/hazardous-locations/class-ii-division-1",
      },
      {
        term: "Class III",
        definition:
          "A location where ignitible fibres or flyings are present. Distinct from Class II combustible dust — textile lint falls here rather than in the dust regime.",
        href: "/materials/textile-fibers",
      },
      {
        term: "Division 1",
        definition:
          "The hazardous atmosphere is expected to be present under normal operating conditions.",
        href: "/hazardous-locations/class-ii-division-1",
      },
      {
        term: "Division 2",
        definition:
          "The hazardous atmosphere is expected only under abnormal conditions, such as equipment failure or container rupture.",
        href: "/hazardous-locations/class-ii-division-2",
      },
      {
        term: "Group D",
        definition:
          "A Class I gas group covering propane, methane and most common hydrocarbons and industrial solvents. Groups A, B and C cover acetylene, hydrogen and ethylene, which ignite more readily.",
        href: "/hazardous-locations/class-i-division-1",
      },
      {
        term: "Group E",
        definition:
          "The Class II group for conductive metal dust. Conductivity is a hazard in itself — accumulation can bridge and short electrical equipment quite apart from combustion.",
        href: "/hazardous-locations/class-ii-groups-e-f-g",
      },
      {
        term: "Group F",
        definition: "The Class II group for carbonaceous dusts — coal, coke, carbon black, graphite.",
        href: "/hazardous-locations/class-ii-groups-e-f-g",
      },
      {
        term: "Group G",
        definition:
          "The Class II group for the remaining non-conductive dusts: flour, grain, sugar, wood, plastics and most chemical powders.",
        href: "/hazardous-locations/class-ii-groups-e-f-g",
      },
      {
        term: "Temperature code",
        also: "T-code",
        definition:
          "A cap on the surface temperature equipment may reach. It matters most in dust locations, because a settled dust layer insulates a surface and an insulated surface runs hotter than a clean one.",
        href: "/hazardous-locations/ul-1203",
      },
      {
        term: "Authority Having Jurisdiction",
        also: "AHJ",
        definition:
          "The body that accepts the area classification and enforces the applicable code. Your classification is assigned by your own engineer and accepted by the AHJ; a supplier cannot determine it.",
        href: "/hazardous-locations/nfpa-70-nec",
      },
    ],
  },
  {
    id: "protection",
    heading: "Protection concepts",
    summary:
      "Different engineering routes to the same objective: equipment that cannot ignite the atmosphere it works in.",
    terms: [
      {
        term: "Explosion proof",
        definition:
          "A construction concept for Class I locations. The enclosure contains an internal ignition and cools the escaping gases enough that they cannot ignite the surrounding atmosphere. A containment strategy.",
        href: "/guides/explosion-proof-vs-dust-ignition-proof",
      },
      {
        term: "Dust ignition proof",
        definition:
          "A construction concept for Class II locations. Dust is excluded from the enclosure and external surface temperatures are held low enough that settled dust cannot be ignited. An exclusion and temperature strategy.",
        href: "/guides/explosion-proof-vs-dust-ignition-proof",
      },
      {
        term: "Nonincendive",
        definition:
          "Equipment whose normal operation cannot ignite a specified hazardous atmosphere. Associated with Division 2 rather than Division 1, because it addresses normal operation rather than fault conditions.",
        href: "/hazardous-locations/class-ii-division-2",
      },
      {
        term: "Intrinsic safety",
        definition:
          "Limiting the electrical and thermal energy in a circuit so that it cannot ignite the atmosphere even under fault conditions. A different concept from enclosure-based protection.",
        href: "/hazardous-locations/intrinsically-safe-vacuums",
      },
      {
        term: "NRTL",
        definition:
          "Nationally Recognized Testing Laboratory — a body recognised to certify equipment against applicable standards. CSA is the NRTL for PrestiVac's listing.",
        href: "/hazardous-locations/ul-1203",
      },
    ],
  },
  {
    id: "standards",
    heading: "Standards and regulation",
    summary:
      "What each document governs. None of them makes a facility compliant on its own, and they are not interchangeable.",
    terms: [
      {
        term: "UL 1203",
        definition:
          "The North American standard for explosion-proof and dust-ignition-proof electrical equipment in hazardous locations. It covers electrical equipment, so it does not apply to air-operated machines.",
        href: "/hazardous-locations/ul-1203",
      },
      {
        term: "NFPA 660",
        definition:
          "The consolidated combustible dust standard, bringing together the previously separate fundamentals, particulate solids, metals, agricultural, sulfur and wood processing documents.",
        href: "/hazardous-locations/nfpa-660",
      },
      {
        term: "NFPA 652",
        definition:
          "The former fundamentals standard for combustible dust, which established the dust hazard analysis as an explicit requirement. Now consolidated into NFPA 660.",
        href: "/hazardous-locations/nfpa-652",
      },
      {
        term: "NFPA 484",
        definition:
          "The former combustible metals standard. Metals were treated separately because several react with water and some fines are pyrophoric.",
        href: "/hazardous-locations/nfpa-484",
      },
      {
        term: "NFPA 70",
        also: "NEC",
        definition:
          "The National Electrical Code, where the Class, Division and Group classification framework originates.",
        href: "/hazardous-locations/nfpa-70-nec",
      },
      {
        term: "ATEX",
        definition:
          "The European framework for explosive atmospheres, using zones rather than divisions. Not interchangeable with North American certification.",
        href: "/hazardous-locations/atex",
      },
      {
        term: "IECEx",
        definition:
          "The international certification scheme built on the IEC 60079 standards. Shares a technical basis with ATEX but is a distinct scheme.",
        href: "/hazardous-locations/iecex",
      },
      {
        term: "General Duty Clause",
        definition:
          "The OSHA provision requiring employers to provide a workplace free from recognised serious hazards. It is how combustible dust is addressed where no specific standard applies.",
        href: "/hazardous-locations/osha-combustible-dust",
      },
      {
        term: "Dust Hazard Analysis",
        also: "DHA",
        definition:
          "A systematic assessment of where combustible dust exists in a facility, how it can be dispersed and ignited, and what controls are in place. Its conclusions drive housekeeping and equipment decisions.",
        href: "/guides/dust-hazard-analysis",
      },
    ],
  },
  {
    id: "dust",
    heading: "Dust behaviour",
    summary:
      "How the hazard actually works, and the properties that decide how a material must be handled.",
    terms: [
      {
        term: "Combustible dust",
        definition:
          "A finely divided solid that will burn when dispersed as a cloud. Combustibility rises sharply as particle size falls, so a material inert as granules can be hazardous as dust.",
        href: "/guides/types-of-combustible-dust",
      },
      {
        term: "Deflagration",
        definition:
          "Combustion propagating through a dust cloud at subsonic speed. The pressure rise inside a confined enclosure is what causes damage.",
        href: "/guides/dust-explosion-basics",
      },
      {
        term: "Secondary explosion",
        definition:
          "The larger event that follows when a primary deflagration lifts dust accumulated on floors, beams and ledges into a much bigger cloud. This is what destroys buildings.",
        href: "/guides/dust-explosion-basics",
      },
      {
        term: "Dust pentagon",
        definition:
          "The five conditions a dust deflagration requires: fuel, dispersion, confinement, oxygen and an ignition source. Removing any one prevents the event.",
        href: "/guides/dust-explosion-basics",
      },
      {
        term: "Pyrophoric",
        definition:
          "Able to ignite spontaneously on exposure to air. Freshly generated fine metal dust from grinding or machining can behave this way even where the stock material is stable.",
        href: "/materials/combustible-metal-dust",
      },
      {
        term: "Hygroscopic",
        definition:
          "Drawing moisture from the air. Hygroscopic powders cake into deposits that look inert but break back into suspendable fines when disturbed.",
        href: "/materials/urea-dust",
      },
      {
        term: "Self-heating",
        definition:
          "Internal temperature rise in bulk stored material from biological or chemical activity. A fire path requiring no external ignition source, documented in biomass, carbonaceous and fat-bearing powders.",
        href: "/materials/biomass-dust",
      },
      {
        term: "Fugitive dust",
        definition:
          "The fraction that escapes capture at source and settles elsewhere in the building, typically above head height. It is the inventory a primary event would loft.",
        href: "/guides/dust-explosion-basics",
      },
      {
        term: "Black mass",
        definition:
          "The fine fraction recovered from shredded lithium-ion cells, containing lithium, nickel, cobalt, manganese and graphite. Conductive, potentially water-reactive and toxic.",
        href: "/materials/battery-black-mass",
      },
    ],
  },
  {
    id: "equipment",
    heading: "Equipment and filtration",
    summary: "Terms that appear on specifications and datasheets, and what they actually govern.",
    terms: [
      {
        term: "HEPA",
        definition:
          "An absolute filter grade defined by retention at the most penetrating particle size — the size hardest to capture, which is not the smallest.",
        href: "/guides/hepa-vs-ulpa-filtration",
      },
      {
        term: "ULPA",
        definition:
          "A higher absolute grade than HEPA. It retains more at the hardest particle size but resists airflow more and loads sooner, which costs suction.",
        href: "/guides/hepa-vs-ulpa-filtration",
      },
      {
        term: "MPPS",
        definition:
          "Most Penetrating Particle Size — the particle size at which a filter medium performs worst, and the size at which absolute grades are rated.",
        href: "/guides/how-to-select-hepa-filtration",
      },
      {
        term: "Airflow",
        also: "CFM",
        definition:
          "Volume of air moved per unit time. Airflow carries material along the hose and keeps it in suspension over distance.",
        href: "/guides/how-to-size-an-industrial-vacuum",
      },
      {
        term: "Vacuum pressure",
        also: "water lift",
        definition:
          "The pressure differential the unit generates. Vacuum lifts material initially and dislodges it from where it has settled. It trades against airflow.",
        href: "/guides/how-to-size-an-industrial-vacuum",
      },
      {
        term: "Duty cycle",
        definition:
          "How long the unit runs continuously. A design requirement affecting motor, cooling and filter sizing — not simply a usage pattern.",
        href: "/guides/how-to-select-an-industrial-vacuum",
      },
      {
        term: "Immersion separation",
        also: "IS",
        definition:
          "Drawing material into a liquid bath so it is wetted on capture and never forms a dry dispersed cloud inside the machine. Suitability depends on whether the material can be safely wetted.",
        href: "/guides/wet-vs-dry-recovery",
      },
      {
        term: "Static dissipative",
        definition:
          "Construction that allows accumulated charge to bleed away rather than building to a discharge. Required for hoses and filters within PrestiVac's certified configuration.",
        href: "/guides/grounding-and-bonding",
      },
      {
        term: "Bonding",
        definition:
          "Connecting conductive parts together so they remain at the same electrical potential. The vacuum requirement is a continuous bonded path from tool through hose to container.",
        href: "/guides/grounding-and-bonding",
      },
      {
        term: "Grounding",
        definition:
          "Connecting the bonded assembly to earth so charge has a route away. A grounded machine with a non-conductive hose does not achieve the requirement.",
        href: "/guides/grounding-and-bonding",
      },
      {
        term: "Removable Collection Tank",
        also: "RCT",
        definition:
          "A container that detaches for removal and emptying, so collected material leaves the area without a second dispersal event.",
        href: "/products/explosion-proof-vacuums",
      },
      {
        term: "Dust collector",
        definition:
          "Fixed equipment capturing dust at source through ducting. Different from an industrial vacuum, which recovers what has already escaped and settled. PrestiVac manufactures vacuums, not dust collectors.",
        href: "/guides/vacuum-vs-dust-collector",
      },
    ],
  },
];

export const GLOSSARY_TERM_COUNT = GLOSSARY.reduce((n, g) => n + g.terms.length, 0);
