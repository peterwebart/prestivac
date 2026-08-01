import { Filter, Flame, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const coalDustGuide: MaterialGuideData = {
 slug: "coal-dust",
 name: "Coal Dust",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
 title: "How to Safely Recover Coal Dust?",
 description:
 "Coal dust is the oldest documented dust-explosion hazard — investigated since the 1840s. Explosion-proof recovery for the surface world: conveyor galleries, transfer towers, tripper decks and bunker floors, with self-heating discipline and cooled-material rules.",
 },
 heroIntro:
 "Built for the dust that started the whole record — coal's explosibility has been investigated since the 1840s, and the modern surface plant still runs its classic geography: galleries, transfer towers, tripper decks and bunker floors where float dust settles high above ignition-rich equipment.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Flame, title: "Self-Heating Aware", detail: "Cooled material only — always" },
 ],
 facts: [
 { label: "Material type", value: "Combustible carbonaceous dust — reactivity rises with volatile content" },
 { label: "Historic record", value: "The oldest documented dust-explosion hazard — investigated since the 1840s" },
 { label: "Jurisdiction", value: "Mines under MSHA; surface handling under OSHA and the NFPA framework" },
 { label: "Self-heating", value: "Stockpiles and bunkers can smolder — lower-rank coals most readily" },
 ],
 overview: [
 "Coal dust is where the dust-explosion record begins. Michael Faraday's investigation of the 1844 Haswell colliery disaster identified airborne coal dust's role in propagating mine explosions — six decades before any other industry took fine particles seriously — and the 1907 Monongah disaster, the worst in American history, drove the creation of the federal Bureau of Mines. Mining answered with rock dusting: blanketing entries with inert limestone dust so a flame front finds diluted fuel. The inerting instinct that produced it still echoes through modern combustible-dust practice.",
 "This guide addresses the surface world — power plants, preparation and handling facilities governed by OSHA and the NFPA framework now consolidated in NFPA 660 — where the geography is unloading pits, conveyor galleries, transfer towers, crusher houses, tripper decks and bunker floors. Two properties shape the program. Reactivity rises with volatile content, so bituminous and sub-bituminous dusts govern the specification. And coal self-heats: stockpiles and bunkers can smolder from within, lower-rank coals most readily, which makes the cooled-material rule absolute and prompt sealed disposal non-negotiable.",
 ],
 industries: [
 { label: "Coal & Power Generation", href: "/industries/coal" },
 { label: "Silo & Bunker Cleaning", href: "/applications/silo-cleaning" },
 { label: "Utilities & Energy", href: "/applications#energy" },
 { label: "Cement & Lime Plants", href: "/applications#cement" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Float coal dust in galleries and enclosures is the classic propagation fuel — the mechanism the 1840s investigations identified",
 "Volatile content drives reactivity — bituminous and sub-bituminous fines set the specification",
 "Tripper decks and transfer towers layer fines high above ignition-rich equipment",
 "Stockpiles and bunkers self-heat — smoldering material approaching any equipment is the forbidden event",
 "Wet suppression fines cake, dry out and cycle back to dust — moisture postpones, it doesn't remove",
 "Ash-side handling adds exposure duty for trace constituents, including mercury",
 ],
 solutions: [
 "Explosion-proof recovery on frequencies the Dust Hazard Analysis sets for each floor",
 "Gallery, transfer-tower and tripper-deck rotations — the elevated inventory comes down on schedule",
 "Cooled-material discipline: verified-cool recovery only, sealed and dispositioned promptly",
 "Reach-first bunker and silo work from access points — entry stays the permitted exception",
 "HEPA-retained recovery on the ash side, where exposure limits do the governing",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and long-reach wands for decks, galleries and pits" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path over tower and gallery distances" },
 { step: "Explosion-proof unit", detail: "Rated or air-operated to match the classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fines stay captured" },
 { step: "Sealed collection & disposal", detail: "Cooled material only; contained and dispositioned promptly" },
 ],
 bestPractices: [
 "Never sweep or blow down — float dust made airborne is the propagation mechanism itself",
 "Verify material is cool before recovery — smoldering coal never enters a vacuum",
 "Collected fines don't wait: sealed, prompt disposal denies self-heating a place to start",
 "Tripper decks and transfer floors carry their own defined frequencies",
 "In MSHA territory, vacuum recovery complements rock-dusting programs — it never replaces them",
 ],
 faqs: [
 {
 question: "Is coal dust explosive?",
 answer:
 "Yes. Coal dust is a combustible carbonaceous dust in Class II Group F, and coal mine and power plant explosions are among the most thoroughly documented dust events on record. It also smoulders — a deep-seated glow inside stockpiled or collected material can persist and reignite. Separately, chronic coal dust inhalation causes coal workers' pneumoconiosis, so exposure control sits alongside fire control.",
 },
 {
 question: "Is coal dust really that explosive?",
 answer:
 "It owns the oldest record of any dust. Float coal dust propagating explosions through mine entries was identified by Faraday's 1844 Haswell investigation, and the same physics applies wherever fine coal suspends — reactivity rising with volatile content, so bituminous and sub-bituminous fines govern the specification.",
 },
 {
 question: "Does MSHA or OSHA govern our program?",
 answer:
 "Underground and surface mines run under MSHA, with its own rules including rock dusting. Power plants, prep plants and handling facilities outside mine jurisdiction run under OSHA and the NFPA combustible-dust framework, now consolidated in NFPA 660 — that surface world is what this guide addresses.",
 },
 {
 question: "Can I vacuum up smoldering coal fines?",
 answer:
 "Never — cooled, verified material only, whatever the unit's rating. Coal self-heats in stockpiles and bunkers, lower-rank coals most readily, so recovery follows verification, and collected fines go to sealed, prompt disposal rather than standing in the drum where self-heating could restart.",
 },
 {
 question: "Doesn't wet suppression handle the dust?",
 answer:
 "It knocks down airborne dust at the source — and then the wet fines cake on structure, dry out, and return as dust. Suppression and housekeeping are partners: the spray manages generation in the moment, vacuum recovery removes the settled inventory before it accumulates into fuel.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "industrial-vacuums", "hepa-vacuums"],
 related: [
   { label: "Power generation case study", href: "/case-studies/coal-dust-power-generation" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "What is black dust?", href: "/guides/what-is-black-dust" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Coal & Power deep dive", href: "/industries/coal" },
 { label: "Silo & Bin Cleaning guide", href: "/applications/silo-cleaning" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
