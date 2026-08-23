import type { HazardousLocationTopic } from "@/components/templates/hazardous-location";

import { UL1203_EQUIPMENT_NOTE } from "@/lib/data/certification";

/**
 * NFPA standards pages.
 *
 * Integrity rules:
 * - Describes WHAT each standard governs, who publishes it, and how the
 * documents relate. Does NOT state clause numbers, numeric thresholds or
 * specific compliance obligations — those require the standard text and
 * change between editions.
 * - Every page tells the reader to work from the edition their AHJ enforces.
 * - PrestiVac certification is referenced only via certification.ts scope:
 * CSA Certificate 70122393. TWO scopes, never merged — see certification.ts.
 * - No claim is made that any equipment makes a facility compliant.
 */

const EDITION_NOTE =
  "Standards are revised on a cycle, and the edition your authority having jurisdiction enforces is the one that governs. Work from that edition rather than from a summary.";

const EQUIPMENT_NOTE_COMMON = [
  "PrestiVac manufactures industrial vacuums. We do not manufacture dust collectors, and housekeeping equipment is one element of a dust safety programme rather than the whole of it.",
  UL1203_EQUIPMENT_NOTE,
];

export const NFPA_TOPICS: HazardousLocationTopic[] = [
  {
    slug: "nfpa-660",
    name: "NFPA 660",
    title: "NFPA 660: the consolidated combustible dust standard",
    eyebrow: "Standards",
    seo: {
      title: "NFPA 660 — Consolidated Combustible Dust",
      description:
        "NFPA 660 brings the separate combustible dust standards into one document. What it consolidated, why the change was made.",
    },
    heroIntro:
      "For years the combustible dust requirements lived across half a dozen NFPA documents — a fundamentals standard, several industry-specific ones, and a separate standard for metals. Facilities handling more than one material had to reconcile them. NFPA 660 consolidates that set into a single standard with a common core and commodity-specific chapters.",
    keyPoints: [
      "Consolidates the previously separate combustible dust standards",
      "Common fundamentals plus commodity- and industry-specific chapters",
      "The underlying technical requirements largely carried across",
      "Which edition applies is determined by your AHJ",
    ],
    sections: [
      {
        heading: "What was consolidated",
        body: [
          "NFPA 660 brings together the standards that previously governed combustible dust separately: the fundamentals standard, the standard for combustible particulate solids in general industry, the combustible metals standard, and the industry-specific documents covering agricultural and food processing, sulfur, and wood processing.",
          "The practical driver was that facilities frequently fell under several at once. A food plant with a metal parts operation, or a woodworking facility handling coatings, had to work across multiple documents with overlapping and occasionally divergent requirements. A single standard with a common core removes that reconciliation problem.",
        ],
      },
      {
        heading: "How it is structured",
        body: [
          "The structure is a common core of fundamentals that applies across all combustible dusts, followed by chapters that address specific commodities and industries where the hazard behaves differently enough to warrant it. Metal dusts are the clearest example — they behave differently from organic dusts in ways that change both prevention and response.",
          "That means reading it is a two-step exercise: the fundamentals apply to you, and then you identify which commodity chapters also apply. Facilities handling multiple materials may find several do.",
        ],
      },
      {
        heading: "What carried across",
        body: [
          "Consolidation was largely an organisational change rather than a technical rewrite. The core concepts that drove the previous standards carry across: the requirement to determine whether the materials you handle are combustible, to assess the hazard formally, to control accumulation, and to manage ignition sources.",
          "The hazard assessment remains the pivot on which the rest turns. It establishes what you are handling and how severe the hazard is, and its conclusions drive the housekeeping, equipment and process decisions that follow.",
        ],
      },
      {
        heading: "Where housekeeping equipment fits",
        body: [
          "Dust accumulation is the mechanism behind the secondary explosion — the event that causes most of the destruction and most of the casualties in dust incidents. Controlling accumulation is therefore not a tidiness matter but a central control, and the method used to control it is part of the assessment rather than separate from it.",
          "That is where vacuum selection enters. The equipment has to be appropriate to the area classification and to the material, and it has to avoid becoming an ignition source itself. It does not, by itself, discharge any obligation under the standard.",
        ],
      },
      {
        heading: "Which edition applies",
        body: [
          EDITION_NOTE,
          "Adoption is not automatic. A jurisdiction may enforce the consolidated standard, or may still be working to the legacy documents, and insurers and corporate standards can impose their own requirements independently. Confirm which applies to you before designing to it.",
        ],
      },
    ],
    equipmentNote: EQUIPMENT_NOTE_COMMON,
    faqs: [
      {
        question: "Does NFPA 660 replace NFPA 652, 654 and 484?",
        answer:
          "It consolidates them, along with the agricultural, sulfur and wood processing standards, into a single document. Whether the consolidated standard or the legacy documents apply to you depends on what your authority having jurisdiction enforces.",
      },
      {
        question: "Do I still need a dust hazard analysis?",
        answer:
          "The formal hazard assessment remains central to the framework. It is what establishes whether your materials are combustible and how severe the hazard is, and its conclusions drive everything downstream.",
      },
      {
        question: "Does buying certified equipment make us compliant?",
        answer:
          "No. Certified equipment addresses one element — that the vacuum is suitable for the classified area and does not introduce an ignition source. Compliance is a property of the whole programme: assessment, housekeeping, ignition control, process design and training.",
      },
    ],
    related: [
      { label: "NFPA 654", href: "/hazardous-locations/nfpa-654" },
      { label: "OSHA & combustible dust", href: "/hazardous-locations/osha-combustible-dust" },
      { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
      { label: "NFPA 652", href: "/hazardous-locations/nfpa-652" },
      { label: "NFPA 484", href: "/hazardous-locations/nfpa-484" },
      { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "nfpa-652",
    name: "NFPA 652",
    title: "NFPA 652: the fundamentals standard for combustible dust",
    eyebrow: "Standards",
    seo: {
      title: "NFPA 652 — Combustible Dust Fundamentals",
      description:
        "NFPA 652 established the common baseline for combustible dust across industries, including the dust hazard analysis requirement.",
    },
    heroIntro:
      "NFPA 652 was the fundamentals standard — the document that established a common baseline across every industry handling combustible dust, sitting above the industry-specific standards rather than replacing them. Its most consequential contribution was making the dust hazard analysis an explicit, formal requirement rather than an implied good practice.",
    keyPoints: [
      "Established the common baseline across all industries",
      "Made the dust hazard analysis an explicit requirement",
      "Sat above the industry-specific standards, not instead of them",
      "Now consolidated into NFPA 660",
    ],
    sections: [
      {
        heading: "What it established",
        body: [
          "Before the fundamentals standard, a facility's obligations depended on which industry-specific document applied, and facilities that fell between them or across several had genuine ambiguity about the baseline. NFPA 652 set out requirements common to all combustible dust regardless of industry, with the industry-specific standards layering on top.",
          "The central obligation was determining whether the materials you handle are in fact combustible — by testing rather than assumption — and then formally assessing the hazard they present.",
        ],
      },
      {
        heading: "The dust hazard analysis",
        body: [
          "The DHA is a systematic assessment of where combustible dust exists in a facility, how it can be dispersed and ignited, and what controls are in place. It is not a walk-through or a checklist exercise; it examines the process, the material, the equipment and the building.",
          "Its output drives everything else. Housekeeping frequency, equipment selection, ignition source controls and process changes all follow from what the analysis finds. This is why equipment specification properly comes after the assessment rather than before it.",
        ],
      },
      {
        heading: "Testing before assumption",
        body: [
          "A recurring finding is that facilities are surprised by their own materials. Combustibility depends heavily on particle size, and the fine fraction generated by a process frequently behaves very differently from the bulk material being handled. Something inert as granules can present a genuine hazard as dust.",
          "The standard's position is that this is settled by testing the material as it actually exists in the process, not by reasoning from the material category.",
        ],
      },
      {
        heading: "Where it stands now",
        body: [
          "NFPA 652 has been consolidated into NFPA 660 along with the other combustible dust standards. The fundamentals it established carry across into the consolidated document's common core.",
          EDITION_NOTE,
        ],
      },
    ],
    equipmentNote: EQUIPMENT_NOTE_COMMON,
    faqs: [
      {
        question: "Is NFPA 652 still current?",
        answer:
          "It has been consolidated into NFPA 660. Whether your authority having jurisdiction enforces the consolidated standard or still references the legacy document varies, so confirm which applies to you.",
      },
      {
        question: "What is a dust hazard analysis?",
        answer:
          "A systematic assessment of where combustible dust exists in a facility, how it can be dispersed and ignited, and what controls are in place. It examines the process, material, equipment and building, and its conclusions drive housekeeping and equipment decisions.",
      },
      {
        question: "How do I know if my dust is combustible?",
        answer:
          "By testing the material as it exists in your process. Combustibility depends strongly on particle size, and the fine fraction a process generates often behaves differently from the bulk material.",
      },
    ],
    related: [
      { label: "NFPA 654", href: "/hazardous-locations/nfpa-654" },
      { label: "NFPA 484", href: "/hazardous-locations/nfpa-484" },
      { label: "Dust hazard analysis", href: "/guides/dust-hazard-analysis" },
      { label: "NFPA 660", href: "/hazardous-locations/nfpa-660" },
      { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "nfpa-654",
    name: "NFPA 654",
    title: "NFPA 654: combustible particulate solids in general industry",
    eyebrow: "Standards",
    seo: {
      title: "NFPA 654 — Combustible Particulate Solids",
      description:
        "NFPA 654 addressed fire and dust explosion prevention where combustible particulate solids are manufactured, processed or handled.",
    },
    heroIntro:
      "NFPA 654 was the general-industry standard for combustible particulate solids — the document that applied where a facility manufactured, processed, blended, conveyed or handled combustible dusts that did not fall under one of the more specific standards. In practice it covered a very large share of manufacturing.",
    keyPoints: [
      "Applied broadly across general manufacturing",
      "Addressed accumulation, ignition control and process design",
      "Excluded materials covered by more specific standards",
      "Now consolidated into NFPA 660",
    ],
    sections: [
      {
        heading: "What it covered",
        body: [
          "The standard addressed fire and dust explosion prevention in facilities handling combustible particulate solids — chemicals, plastics, pharmaceuticals, pigments, resins and a wide range of manufactured powders. Metals were addressed separately because they behave differently, as were agricultural products, sulfur and wood processing.",
          "Its scope covered the facility as a system: how material is handled and conveyed, how dust escapes into the workplace, how it accumulates, and how ignition sources are managed around it.",
        ],
      },
      {
        heading: "Accumulation as the central concern",
        body: [
          "The recurring theme is accumulation. A primary event inside a piece of equipment is survivable and often contained. What causes catastrophic outcomes is the pressure wave from that event lifting dust that has settled on floors, beams, ledges and above ceilings, creating a much larger cloud that then ignites.",
          "This is why housekeeping is treated as a control rather than as maintenance, and why the places dust settles unseen — elevated surfaces, structural steel, above suspended ceilings — matter as much as the floor.",
        ],
      },
      {
        heading: "Ignition source management",
        body: [
          "Alongside accumulation, the standard addressed the ignition sources that could initiate an event: electrical equipment inappropriate to the area, mechanical sparks, hot surfaces, static discharge, hot work and self-heating within accumulated material.",
          "Housekeeping equipment sits at the intersection of both concerns. It exists to remove accumulation, and it must not itself introduce an ignition source while doing so — which is the whole basis for specifying vacuums built for classified areas.",
        ],
      },
      {
        heading: "Where it stands now",
        body: [
          "NFPA 654 has been consolidated into NFPA 660, with its technical content carried into the common core and the relevant commodity chapters.",
          EDITION_NOTE,
        ],
      },
    ],
    equipmentNote: EQUIPMENT_NOTE_COMMON,
    faqs: [
      {
        question: "Did NFPA 654 cover metal dusts?",
        answer:
          "No — combustible metals were addressed by NFPA 484, because they behave differently enough to warrant separate treatment, particularly regarding water and extinguishing methods.",
      },
      {
        question: "Why does dust on beams and ledges matter?",
        answer:
          "Because a primary event lifts it. Settled dust on elevated surfaces is the fuel for the secondary explosion, which is typically far more destructive than the event that started it.",
      },
      {
        question: "Is compressed air acceptable for cleaning up dust?",
        answer:
          "It is generally discouraged, because blowing disperses settled material into a cloud rather than removing it. Removal and containment is the objective.",
      },
    ],
    related: [
      { label: "NFPA 652", href: "/hazardous-locations/nfpa-652" },
      { label: "The cost of a dust explosion", href: "/guides/cost-of-a-dust-explosion" },
      { label: "NFPA 660", href: "/hazardous-locations/nfpa-660" },
      { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
      { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },

  {
    slug: "nfpa-484",
    name: "NFPA 484",
    title: "NFPA 484: combustible metals need their own standard",
    eyebrow: "Standards",
    seo: {
      title: "NFPA 484 — Combustible Metals Standard",
      description:
        "Combustible metal dusts behave differently from organic dusts — including reacting with water. Why metals were governed separately.",
    },
    heroIntro:
      "Combustible metals were governed by their own standard for a straightforward reason: they behave differently from organic dusts in ways that change both prevention and response. The most consequential difference is that some react with water, which means the instinctive response to a fire can make it substantially worse.",
    keyPoints: [
      "Metal dusts can react with water — extinguishing method matters",
      "Some fine metal dusts are pyrophoric when freshly generated",
      "Group E conductive dusts bring an electrical hazard as well",
      "Now consolidated into NFPA 660 as a commodity chapter",
    ],
    sections: [
      {
        heading: "Why metals are treated separately",
        body: [
          "Several metals react with water, producing hydrogen — which introduces a flammable gas into an event that was already a fire. Applying water to certain metal fires is therefore not merely ineffective but actively dangerous, and the extinguishing agents appropriate to organic dust fires may be inappropriate here.",
          "This single property is why metals could not simply be folded into the general particulate standard, and it remains the reason metal dust recovery is specified differently.",
        ],
      },
      {
        heading: "Pyrophoric behaviour and particle size",
        body: [
          "Freshly generated fine metal dust can ignite spontaneously on exposure to air. Grinding, machining, polishing and blasting all produce exactly that: fine, freshly exposed, chemically active particles. The material can be entirely stable as stock and hazardous as swarf.",
          "Titanium, magnesium, aluminium and zirconium are the commonly cited examples, but behaviour varies by alloy, by particle size and by how the dust was generated, which is why testing the material as it exists in your process matters more than the metal's general reputation.",
        ],
      },
      {
        heading: "Conductivity and the electrical hazard",
        body: [
          "Metal dusts fall in Class II Group E, the conductive dust group. Conductivity adds a hazard that organic dusts do not have: accumulated dust can bridge and short electrical equipment, causing failures and creating ignition sources independently of the combustion risk.",
          "That is why equipment intended for metal dust environments is assessed against Group E specifically, and why the group designation on a certificate matters rather than the general phrase 'dust rated'.",
        ],
      },
      {
        heading: "What this means for recovery",
        body: [
          "Recovery equipment for combustible metal dust has to address ignition sources, static and conductivity together, and the question of whether the material can be safely wetted has to be settled before any wet method or immersion approach is considered.",
          "Immersion separation — drawing material into a liquid bath so it is wetted on capture and never forms a dry cloud inside the machine — is an effective strategy for some materials and inappropriate for others precisely because of the water reactivity question. It is a material-specific decision.",
          "Mixing metal dusts is its own hazard. Different metals collected into a common container can react with each other, so dedicated recovery per material is often the correct arrangement rather than an inconvenience.",
        ],
      },
    ],
    equipmentNote: [
      ...EQUIPMENT_NOTE_COMMON,
      "Group E conductive metal dust falls within the Class II scope of our listing. Whether a specific material can be safely wetted, and whether immersion separation is appropriate, is a property of that material and is established by testing it.",
    ],
    faqs: [
      {
        question: "Can I use water on a metal dust fire?",
        answer:
          "Not without knowing the material. Several metals react with water to produce hydrogen, which introduces a flammable gas into the event. The appropriate extinguishing method is a property of the specific metal.",
      },
      {
        question: "Can I vacuum aluminium or titanium dust?",
        answer:
          "With equipment specified for it. That means addressing ignition sources, static and conductivity, and determining first whether the material can be safely wetted — which decides whether immersion approaches are available.",
      },
      {
        question: "Can one vacuum handle several different metal dusts?",
        answer:
          "Generally not into a shared container. Different metals collected together can react with each other, so dedicated recovery per material is commonly the right arrangement.",
      },
      {
        question: "Why does Group E matter specifically?",
        answer:
          "Group E is the conductive dust group. Conductivity means accumulation can bridge and short electrical equipment as well as provide fuel, which is a hazard organic dusts do not present.",
      },
    ],
    related: [
      { label: "NFPA 70 / NEC", href: "/hazardous-locations/nfpa-70-nec" },
      { label: "Metal AM powder", href: "/materials/metal-additive-manufacturing-powder" },
      { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
      { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
      { label: "Aluminum dust", href: "/materials/aluminum-dust" },
      { label: "NFPA 660", href: "/hazardous-locations/nfpa-660" },
      { label: "Get a quote", href: "/get-a-quote" },
    ],
  },
];
