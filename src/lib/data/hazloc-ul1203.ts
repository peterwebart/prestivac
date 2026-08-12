import type { HazardousLocationTopic } from "@/components/templates/hazardous-location";

import {
  SCOPE_EV,
  SCOPE_EX1,
  UL1203,
  UL1203_CONDITIONS,
  UL1203_NOT_CERTIFIED,
} from "@/lib/data/certification";

/**
 * UL 1203 standard page.
 *
 * Grounded in the CSA listing scope confirmed in writing by the PrestiVac
 * technical department (August 2026) and recorded in certification.ts.
 *
 * Integrity rules:
 * - Describes what the standard governs and what PrestiVac's own listing
 * covers. Does NOT state specific clause requirements from the standard
 * text, which is not held here.
 * - Class I scope is Group D only. Groups A, B and C are not covered.
 * - The listing covers electric models only. The air-operated AVX line is not
 * within it.
 * - States plainly what the listing does not assert, per the technical
 * department's own answer.
 */
export const UL1203_TOPIC: HazardousLocationTopic = {
  slug: "ul-1203",
  name: "UL 1203",
  title: "UL 1203: what the standard covers, and what a listing actually means",
  eyebrow: "Standards",
  seo: {
    title: "UL 1203 Explained — Explosion Proof Equipment",
    description:
      "UL 1203 is the standard for explosion-proof and dust-ignition-proof electrical equipment in hazardous locations. What it governs, what a listing does and does not assert, and the exact scope of PrestiVac's CSA listing.",
  },
  heroIntro:
    "UL 1203 is the North American standard for explosion-proof and dust-ignition-proof electrical equipment intended for hazardous (classified) locations. It matters in a vacuum specification because it is the basis on which an electric machine can be taken into an area where a flammable atmosphere or a combustible dust may be present. What it does not do is tell you a machine is suitable for your application — that is a narrower and more useful distinction than it first appears.",
  keyPoints: [
    "A standard for electrical equipment — it does not apply to air-operated units",
    "A listing names specific models, classes, groups and a temperature code",
    "The certified configuration includes the hoses and tools supplied with it",
    "It certifies use in a classified location — not general fitness for purpose",
  ],
  sections: [
    {
      heading: "What the standard governs",
      body: [
        `${UL1203.standard} — ${UL1203.fullTitle} — sets out how electrical equipment intended for hazardous (classified) locations is constructed and tested. It covers both of the North American protection concepts: explosion-proof construction for Class I locations, where flammable gases or vapours may be present, and dust-ignition-proof construction for Class II locations, where combustible dust is the hazard.`,
        "Because it is a standard for electrical equipment, it has nothing to say about air-operated machines. A pneumatic vacuum with no electrical components is outside its scope entirely — which is not a deficiency, it is simply a different route to the same objective. Removing the electrical ignition source and enclosing it are alternative strategies, and a pneumatic unit is not 'uncertified' for failing to hold a listing under a standard that does not apply to it.",
      ],
    },
    {
      heading: "What a listing actually says",
      body: [
        "A listing is not a general endorsement. It is a statement that a specific model, in a specific configuration, was assessed against the standard and found to meet it for a defined scope. That scope is expressed as a combination of class, division, group and temperature code, and all four parts matter.",
        "The class distinguishes gas and vapour hazards from dust hazards. The division describes how likely the hazardous atmosphere is to be present. The groups identify which families of gas or dust are covered — and this is the part most often skipped, because groups within a class differ substantially in ignition behaviour. The temperature code caps the surface temperature the equipment may reach.",
        "A unit listed for one combination is not thereby listed for another. Reading the scope is the whole exercise; reading only the words 'UL 1203 certified' tells you almost nothing about whether the machine belongs in your room.",
      ],
    },
    {
      heading: "PrestiVac's listing scope",
      body: [
        `PrestiVac's listing is Certificate ${UL1203.certificateNumber}, issued by ${UL1203.issuerLong} under Master Contract ${UL1203.masterContract}. It carries TWO distinct scopes, and they are not interchangeable.`,
        `Scope one covers the ${SCOPE_EX1.certificateWording}: ${SCOPE_EX1.summary}. Class I Group D covers propane, methane and most common hydrocarbons and industrial solvents — not Groups A, B or C, which cover acetylene, hydrogen and ethylene and represent more severe ignition behaviour. The Class II side is the full set of dust groups, including Group E conductive metal dusts.`,
        `Scope two covers the ${SCOPE_EV.certificateWording}: ${SCOPE_EV.summary}. That is materially narrower in three separate ways — no Class I coverage at all, Division 2 only rather than Division 1, and Groups F and G only, which excludes the Group E conductive metal dusts.`,
        "The distinction matters most in metalworking, aerospace and battery applications, where the dust is frequently Group E. Each model page states which scope applies to that specific unit, so it is never inferred from the series name.",
      ],
    },
    {
      heading: "Conditions attached to the configuration",
      body: [
        "A listing describes a configuration, not just a machine, and departing from that configuration means the unit is no longer in its certified state. Four conditions apply here and each is worth stating plainly.",
        ...UL1203_CONDITIONS.map((c) => `${c.title}: ${c.detail}`),
        "The accessory condition is the one that catches people out in service rather than at purchase. A hose replaced from general stores, or a tool borrowed from another machine, is a small decision that takes an expensive certified unit outside the scope of its listing without anything visibly changing.",
      ],
    },
    {
      heading: "What the listing does not assert",
      body: [
        "This is worth being explicit about, because it is where over-reading causes real problems. The listing states that the vacuum may be used in hazardous (classified) locations to recover combustible dust, within the scope named above.",
        UL1203_NOT_CERTIFIED,
        "In practice that means three things remain your responsibility. The area classification is assigned by your own electrical or process engineer and accepted by the authority having jurisdiction. The material must actually fall within the groups covered. And the unit must be installed, grounded and maintained in its listed configuration — a certified machine that has been modified, repaired outside that configuration or fitted with substitute accessories is no longer the equipment that was assessed.",
      ],
    },
    {
      heading: "How this sits alongside other standards",
      body: [
        "UL 1203 is an equipment construction standard. It is not a housekeeping standard, a process safety standard or a regulation, and it does not tell a facility what it must do — it tells a manufacturer how equipment is to be built and tested so that it can be listed for a classified location.",
        "The obligations that decide whether you need such equipment, and how a facility manages combustible dust generally, come from elsewhere: the NFPA combustible dust standards, OSHA's enforcement position, and the area classification framework in the National Electrical Code. Those are separate documents with separate scopes, and treating them as interchangeable is a common and consequential error.",
        "The ATEX and IECEx schemes used elsewhere in the world address the same underlying hazards through a different framework, with their own zone system, equipment categories and protection levels. A certification under one scheme is not a certification under another, and equipment moving between markets is assessed accordingly.",
      ],
    },
  ],
  equipmentNote: [
    `PrestiVac's ${UL1203.standard} listing is Certificate ${UL1203.certificateNumber}, issued by ${UL1203.issuer}. The EX1 HEPA line carries ${SCOPE_EX1.summary}. The EV EX HEPA line carries ${SCOPE_EV.summary} — narrower, and notably excluding Group E conductive metal dusts.`,
    "It applies to specific electric models. The air-operated AVX line is outside the standard's scope, because UL 1203 covers electrical equipment — those units address the ignition-source question by having no electrical components rather than by enclosing them.",
    "Each model page states whether that specific unit is within the listing. Where an application is borderline, bring your area classification and material identification to the conversation.",
  ],
  faqs: [
    {
      question: "Does UL 1203 certification mean a vacuum is safe for any hazardous location?",
      answer:
        "No. It means a specific model was assessed for a specific scope — named classes, divisions, groups and a temperature code. Suitability depends on matching that scope against the classification of your area. A listing outside your classification does not help you.",
    },
    {
      question: "Is PrestiVac's listing for Class I Groups A, B and C?",
      answer:
        "No. The Class I scope is Group D only. Groups A, B and C cover acetylene, hydrogen and ethylene, which present more severe ignition behaviour and are not within the listing.",
    },
    {
      question: "Are the air-operated AVX units UL 1203 certified?",
      answer:
        "No, and that is a matter of scope rather than a shortfall. UL 1203 is a standard for electrical equipment, and the AVX line has no electrical components. Those units remove the electrical ignition source entirely instead of enclosing it.",
    },
    {
      question: "Can I use my own hoses and tools with a certified unit?",
      answer:
        "Not while keeping the unit in its certified configuration. The listing covers the vacuum together with PrestiVac-supplied hoses and tools, and static-dissipating hose and filters are required. Substituting third-party accessories takes the unit outside the scope of the listing.",
    },
    {
      question: "Who decides the area classification?",
      answer:
        "Your own electrical or process engineer, accepted by the authority having jurisdiction. It is a property of your process and space. An equipment supplier cannot assign it for you, and a specification built on an assumed classification may have to be redone.",
    },
    {
      question: "What does the temperature code mean?",
      answer:
        "It caps the surface temperature the equipment may reach. It matters particularly in dust locations, because settled dust insulates a surface and an insulated surface runs hotter than the same surface would clean.",
    },
  ],
  related: [
    { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
    { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
    { label: "ATEX vs North American", href: "/hazardous-locations/atex-vs-north-american" },
    { label: "Explosion proof vs dust ignition proof", href: "/guides/explosion-proof-vs-dust-ignition-proof" },
    { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
    { label: "Get a quote", href: "/get-a-quote" },
  ],
};
