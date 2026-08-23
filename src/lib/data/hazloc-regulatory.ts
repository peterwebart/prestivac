import type { HazardousLocationTopic } from "@/components/templates/hazardous-location";

import { UL1203_EQUIPMENT_NOTE } from "@/lib/data/certification";

/**
 * Regulatory and international scheme pages.
 *
 * Integrity rules: as hazloc-nfpa.ts. Describes what each framework governs
 * and how the schemes relate. No clause numbers, no numeric thresholds, no
 * assertion that any equipment confers compliance. ATEX and IECEx approvals
 * are explicitly NOT claimed for PrestiVac equipment.
 */

const EQUIPMENT_NOTE_COMMON = [
  "PrestiVac manufactures industrial vacuums. We do not manufacture dust collectors, and housekeeping equipment is one element of a dust safety programme rather than the whole of it.",
  UL1203_EQUIPMENT_NOTE,
];

const NO_ATEX_NOTE =
  "PrestiVac does not claim ATEX or IECEx approval. Our certification is North American: UL 1203, listed by CSA. Where equipment is required under one of those schemes, ask for the documentation applicable to your jurisdiction rather than treating a North American listing as equivalent.";

export const REGULATORY_TOPICS: HazardousLocationTopic[] = [
  {
    slug: "nfpa-70-nec",
    name: "NFPA 70 / NEC",
    title: "NFPA 70 and the NEC: where area classification comes from",
    eyebrow: "Standards",
    seo: {
      title: "NFPA 70 / NEC Hazardous Area Classification",
      description:
        "The National Electrical Code is where the Class, Division and Group system originates. How classification works, who assigns it.",
    },
    heroIntro:
      "The National Electrical Code, published as NFPA 70, is where the North American hazardous location framework comes from. Every 'Class II, Division 1, Group E' designation traces back to it. Understanding that the classification is a property of your facility — not of any equipment — is the single most useful thing to take from it.",
    keyPoints: [
      "The NEC defines the Class, Division and Group framework",
      "Classification describes your space, not the equipment in it",
      "It is assigned by your engineer and accepted by the AHJ",
      "Equipment is then selected to match — never the reverse",
    ],
    sections: [
      {
        heading: "What the framework describes",
        body: [
          "The system has three parts working together. Class identifies the kind of hazardous material present — Class I for flammable gases and vapours, Class II for combustible dust, Class III for ignitible fibres and flyings. Division describes how likely that material is to be present in an ignitible concentration: Division 1 under normal operating conditions, Division 2 under abnormal conditions such as equipment failure or container rupture.",
          "Groups then narrow it to the specific families of material, because ignition behaviour varies substantially within a class. Class I splits into Groups A through D; Class II into Groups E, F and G. Temperature codes cap the surface temperature equipment may reach.",
        ],
      },
      {
        heading: "Classification is about your facility",
        body: [
          "This is the point most often inverted. The classification describes the space and the process — what materials are present, in what quantities, under what conditions, and how likely a hazardous atmosphere is. It is a property of your facility, established by studying it.",
          "It is assigned by your own electrical or process engineer and accepted by the authority having jurisdiction. An equipment supplier cannot assign it for you, and no equipment certificate can determine it. Equipment is then selected to suit the classification that already exists.",
        ],
      },
      {
        heading: "Why the order matters",
        body: [
          "Specifying equipment before the classification is established produces work that may have to be redone. A specification built on an assumed Division 2 that turns out to be Division 1 is not a small adjustment — it changes what equipment is eligible.",
          "The reverse error is subtler and more common: choosing equipment first and then describing the area in terms that make the equipment fit. That is working backwards from a product, and the classification stops being an assessment of the hazard.",
        ],
      },
      {
        heading: "The zone system",
        body: [
          "The NEC also recognises a zone system, aligned more closely with the international approach, as an alternative to the Division system. It exists so that facilities working to international practice can classify consistently, and so equipment certified under either framework can be applied appropriately.",
          "The two frameworks are not interchangeable term for term. Where both are in play, the mapping between them needs deliberate attention rather than assumption.",
        ],
      },
    ],
    equipmentNote: EQUIPMENT_NOTE_COMMON,
    faqs: [
      {
        question: "Who assigns the area classification?",
        answer:
          "Your own electrical or process engineer, accepted by the authority having jurisdiction. It is a property of your process and space, and an equipment supplier cannot determine it for you.",
      },
      {
        question: "What is the difference between Division 1 and Division 2?",
        answer:
          "Division 1 means the hazardous atmosphere is expected under normal operating conditions. Division 2 means it is expected only under abnormal conditions, such as equipment failure or container rupture.",
      },
      {
        question: "Does the NEC tell me I need an explosion-proof vacuum?",
        answer:
          "It establishes the classification framework and what electrical equipment is suitable in a classified area. Whether housekeeping equipment is required, and how, comes from the combustible dust standards and your own hazard assessment.",
      },
    ],
    related: [
      { label: "ATEX", href: "/hazardous-locations/atex" },
      { label: "Explosion proof vs dust ignition proof", href: "/guides/explosion-proof-vs-dust-ignition-proof" },
      { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
      { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
      { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "osha-combustible-dust",
    name: "OSHA & combustible dust",
    title: "OSHA and combustible dust: no single standard, real obligations",
    eyebrow: "Regulation",
    seo: {
      title: "OSHA Combustible Dust Requirements Explained",
      description:
        "There is no single OSHA combustible dust standard. How the General Duty Clause, the National Emphasis Program and existing standards combine into obligations.",
    },
    heroIntro:
      "Facilities frequently ask which OSHA combustible dust standard applies to them, and the answer surprises people: there isn't one comprehensive standard. That does not mean there are no obligations. It means they arrive through a combination of routes, and the absence of a single document is a poor basis for assuming the hazard is unregulated.",
    keyPoints: [
      "No single comprehensive OSHA combustible dust standard exists",
      "The General Duty Clause applies to recognised serious hazards",
      "A National Emphasis Program directs inspection activity",
      "Existing standards on housekeeping and electrical areas still apply",
    ],
    sections: [
      {
        heading: "The General Duty Clause",
        body: [
          "The General Duty Clause obliges employers to provide a workplace free from recognised hazards likely to cause death or serious harm. It is how OSHA addresses serious hazards for which no specific standard exists, and combustible dust has been cited under it.",
          "'Recognised' does a lot of work in that sentence. Industry consensus standards — the NFPA combustible dust documents — are part of how a hazard becomes recognised, which is why those standards carry weight even though they are not themselves regulations. A facility cannot reasonably argue a dust hazard was unrecognised when consensus standards address it directly.",
        ],
      },
      {
        heading: "The National Emphasis Program",
        body: [
          "OSHA has maintained a Combustible Dust National Emphasis Program, which directs inspection resources toward facilities likely to have the hazard. An NEP does not create new obligations; it determines where enforcement attention goes.",
          "The practical consequence is that facilities handling combustible dust have an elevated likelihood of inspection, and that inspectors arrive looking for the hazard specifically rather than encountering it incidentally.",
        ],
      },
      {
        heading: "Standards that do apply",
        body: [
          "Several existing standards bear on combustible dust without being about it. Housekeeping requirements address accumulation. Requirements covering electrical installations in hazardous locations address equipment suitability in classified areas. Hazard communication addresses informing workers about the materials they handle.",
          "Taken together with the General Duty Clause, the obligations are substantive even though they are distributed across several documents rather than gathered into one.",
        ],
      },
      {
        heading: "What this means practically",
        body: [
          "The absence of a single standard is not a gap to rely on. The workable position is to identify whether your materials are combustible by testing them, assess the hazard formally, and control accumulation and ignition sources — which is what the consensus standards describe and what an inspection will look for.",
          "Regulatory positions and enforcement programmes change over time. Confirm the current position rather than working from a summary, and where the stakes are significant, take advice from someone who follows it professionally.",
        ],
      },
    ],
    equipmentNote: EQUIPMENT_NOTE_COMMON,
    faqs: [
      {
        question: "Is there an OSHA combustible dust standard?",
        answer:
          "Not a single comprehensive one. Obligations arrive through the General Duty Clause, existing standards on housekeeping and hazardous-location electrical equipment, and hazard communication requirements, with inspection activity directed by a National Emphasis Program.",
      },
      {
        question: "Do NFPA standards carry legal weight?",
        answer:
          "They are consensus standards rather than regulations, but they contribute to a hazard being 'recognised' for General Duty Clause purposes, and they are frequently adopted into local codes or required by insurers.",
      },
      {
        question: "Does buying certified equipment satisfy OSHA?",
        answer:
          "No. Appropriate equipment addresses part of the hazard. The obligations concern the whole programme — identifying the material, assessing the hazard, controlling accumulation and ignition sources, and training people.",
      },
    ],
    related: [
      { label: "NFPA 654", href: "/hazardous-locations/nfpa-654" },
      { label: "The cost of a dust explosion", href: "/guides/cost-of-a-dust-explosion" },
      { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
      { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
      { label: "NFPA 660", href: "/hazardous-locations/nfpa-660" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "atex",
    name: "ATEX",
    title: "ATEX: the European framework for explosive atmospheres",
    eyebrow: "Standards",
    seo: {
      title: "ATEX Explained — Zones, Categories, Marking",
      description:
        "ATEX governs equipment and workplaces where explosive atmospheres may occur in the EU. Zones, equipment categories, protection levels.",
    },
    heroIntro:
      "ATEX is the European framework covering explosive atmospheres. It addresses the same physical hazards as the North American system through a different structure — zones rather than divisions, equipment categories, and a marking scheme that encodes the equipment's intended application. Certification under one scheme is not certification under the other.",
    keyPoints: [
      "Two directives: one for equipment, one for workplaces",
      "Zones describe likelihood, with a separate set for dust and gas",
      "Equipment categories and protection levels map to zones",
      "Not interchangeable with North American certification",
    ],
    sections: [
      {
        heading: "Two directives, two responsibilities",
        body: [
          "ATEX comprises two instruments. One governs equipment and protective systems intended for use in potentially explosive atmospheres, and applies to manufacturers placing products on the market. The other governs workplaces, and applies to employers operating sites where explosive atmospheres may occur.",
          "The split matters because it separates the manufacturer's obligation to certify equipment from the operator's obligation to classify areas, assess risk and select appropriate equipment. Both exist; they are not the same duty.",
        ],
      },
      {
        heading: "Zones rather than divisions",
        body: [
          "ATEX classifies by zone according to how likely an explosive atmosphere is to be present and for how long. Dust and gas have separate zone sets — dust zones are numbered 20, 21 and 22, and gas zones 0, 1 and 2, running from most to least likely in each case.",
          "The North American Division system compresses a similar continuum into two steps rather than three, which is one reason mapping between the schemes is approximate rather than exact. A three-level and a two-level system do not align term for term.",
        ],
      },
      {
        heading: "Categories, protection levels and marking",
        body: [
          "Equipment is assigned a category reflecting the level of protection it provides, which determines the zones it may be used in. Equipment Protection Levels express the same idea in a form aligned with international practice, distinguishing dust and gas applications.",
          "ATEX marking encodes this compactly: the equipment group, the category, whether it is intended for gas or dust atmospheres, the protection concept, the gas or dust group and the temperature classification. Reading the marking tells you what the equipment is for — which is the point of a standardised format.",
        ],
      },
      {
        heading: "Why the schemes are not interchangeable",
        body: [
          "The frameworks address the same physics but differ in classification structure, testing regime, certification body arrangements and marking. Equipment certified under one has not been assessed under the other, and treating a certificate from one scheme as evidence of compliance with the other is a substantive error rather than a technicality.",
          NO_ATEX_NOTE,
        ],
      },
    ],
    equipmentNote: [
      ...EQUIPMENT_NOTE_COMMON,
      NO_ATEX_NOTE,
    ],
    faqs: [
      {
        question: "Are PrestiVac vacuums ATEX certified?",
        answer:
          "No. We do not claim ATEX or IECEx approval. Our certification is North American — UL 1203, listed by CSA, covering Class I Divisions 1 & 2 Group D and Class II Divisions 1 & 2 Groups E, F & G at Temperature Code T3C.",
      },
      {
        question: "How do ATEX zones map to Divisions?",
        answer:
          "Approximately rather than exactly. ATEX uses three zones per atmosphere type where the North American system uses two divisions, so the mapping is a matter of judgement rather than a lookup table.",
      },
      {
        question: "What do the dust zone numbers mean?",
        answer:
          "Dust zones are 20, 21 and 22, running from an atmosphere present continuously or for long periods, through occasionally in normal operation, to unlikely and short-lived if it occurs at all.",
      },
    ],
    related: [
      { label: "NFPA 70 / NEC", href: "/hazardous-locations/nfpa-70-nec" },
      { label: "ATEX vs North American", href: "/hazardous-locations/atex-vs-north-american" },
      { label: "IECEx", href: "/hazardous-locations/iecex" },
      { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "iecex",
    name: "IECEx",
    title: "IECEx: the international certification scheme",
    eyebrow: "Standards",
    seo: {
      title: "IECEx Explained — International Ex Certification",
      description:
        "IECEx is the international scheme for equipment in explosive atmospheres, built on the IEC 60079 standards. How it relates to ATEX and to North American certification.",
    },
    heroIntro:
      "IECEx is the international certification scheme for equipment used in explosive atmospheres. Its purpose is to reduce duplication: equipment assessed once against the international standards can be recognised across participating countries, rather than being re-tested for each market.",
    keyPoints: [
      "Built on the IEC 60079 series of international standards",
      "Designed to reduce duplicated testing across markets",
      "Shares technical basis with ATEX but is a distinct scheme",
      "Separate again from North American certification",
    ],
    sections: [
      {
        heading: "What the scheme does",
        body: [
          "IECEx provides a common framework for assessing and certifying equipment against the IEC 60079 series. Certification bodies and testing laboratories operate under agreed rules, so that an assessment carried out in one participating country is recognisable in others.",
          "The problem it addresses is real: without it, a manufacturer selling internationally faces repeated assessment of the same equipment against substantially similar requirements, and purchasers face certificates they have no basis for evaluating.",
        ],
      },
      {
        heading: "Relationship to ATEX",
        body: [
          "ATEX and IECEx share much of their technical basis, because ATEX requirements draw on the same international standards. That similarity makes them easy to conflate, but they remain distinct: ATEX is a European legal framework with mandatory application in its jurisdiction, while IECEx is a voluntary international certification scheme.",
          "In practice equipment often carries both, assessed against a common technical core through two certification routes. Carrying one does not automatically confer the other.",
        ],
      },
      {
        heading: "Relationship to North American certification",
        body: [
          "The North American framework developed separately, with its own classification structure, its own standards and its own certification arrangements. A UL 1203 listing and an IECEx certificate are not equivalent documents, and neither substitutes for the other.",
          "For equipment moving between markets this means assessment under each applicable scheme rather than translation between certificates.",
        ],
      },
      {
        heading: "What to ask for",
        body: [
          "The useful request is the documentation applicable to your jurisdiction and to the specific configuration you intend to buy. A certificate names an equipment identifier, a scope and the standards assessed against — those are the parts that determine whether it helps you.",
          NO_ATEX_NOTE,
        ],
      },
    ],
    equipmentNote: [
      ...EQUIPMENT_NOTE_COMMON,
      NO_ATEX_NOTE,
    ],
    faqs: [
      {
        question: "Is IECEx the same as ATEX?",
        answer:
          "No. They share much of their technical basis through the IEC 60079 standards, but ATEX is a European legal framework with mandatory application in its jurisdiction and IECEx is a voluntary international certification scheme.",
      },
      {
        question: "Does IECEx certification satisfy North American requirements?",
        answer:
          "No. The North American framework has its own classification structure, standards and certification arrangements. Equipment is assessed under each applicable scheme.",
      },
      {
        question: "Are PrestiVac vacuums IECEx certified?",
        answer:
          "No. We do not claim ATEX or IECEx approval. Our certification is UL 1203, listed by CSA.",
      },
    ],
    related: [
      { label: "NFPA 70 / NEC", href: "/hazardous-locations/nfpa-70-nec" },
      { label: "ATEX", href: "/hazardous-locations/atex" },
      { label: "ATEX vs North American", href: "/hazardous-locations/atex-vs-north-american" },
      { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];
