import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const carbonBlackGuide: MaterialGuideData = {
 slug: "carbon-black",
 name: "Carbon Black",
 groupCrumb: { label: "Chemical Dusts", anchor: "chemical-dusts" },
 seo: {
 title: "Carbon Black Vacuum Solutions",
 description:
 "Carbon black's dust cloud is comparatively hard to ignite — the distinctive hazard is bulk smoldering and deep-seated fires in collected material, plus ultrafine particles that defeat ordinary filtration. Engineered recovery under NFPA 660 practice.",
 },
 heroIntro:
 "Built for a material that inverts the usual risk picture — the cloud is comparatively hard to ignite, but the collected bulk can smolder from within, the ultrafine particles defeat ordinary filtration, and many grades conduct electricity well enough to earn graphite-level discipline around electronics.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Ultrafines retained — 99.99% at 0.3 µm" },
 { icon: Zap, title: "Static Control", detail: "Many grades electrically conductive" },
 { icon: Factory, title: "Built for Industry", detail: "Rubber, pigments, battery lines" },
 ],
 facts: [
 { label: "Material type", value: "Elemental carbon — engineered ultrafine particles" },
 { label: "Fire behavior", value: "Dust cloud comparatively hard to ignite; bulk material smolders — deep-seated fire risk" },
 { label: "Electrical behavior", value: "Many grades electrically conductive — graphite-level discipline near electronics" },
 { label: "Health & standards", value: "IARC Group 2B; NFPA 660 practice with the NFPA 652 DHA baseline" },
 ],
 overview: [
 "Carbon black is manufactured fineness: engineered ultrafine carbon particles produced by the megaton to reinforce rubber, pigment inks and coatings, and — increasingly — to make battery electrodes and polymers conductive. That last application is the clue to its electrical character: many grades conduct well enough that a settled film inside cabinets and controls deserves the same discipline graphite gets.",
 "Its fire profile inverts the usual combustible-dust picture. The dust cloud is comparatively hard to ignite — testing and the Dust Hazard Analysis still govern, as with every combustible dust — but the distinctive hazard lives in the bulk: collected carbon black can self-heat and smolder from within, producing deep-seated fires that start invisibly inside drums, hoppers and collection containers. The program therefore centers on the collected material — prompt disposition, sealed metal containers, and treating unexplained warmth or odor in stored bulk as an event — while HEPA-retained recovery keeps particles fine enough to defeat ordinary filtration from being redistributed across the plant.",
 ],
 industries: [
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Plastics & Rubber", href: "/industries#plastics-rubber" },
 { label: "Automotive & Tire", href: "/industries/automotive" },
 { label: "Electronics", href: "/industries#electronics" },
 { label: "Pigments & Inks", href: "/applications#chemical-processing" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Combustible dust — cloud ignition is comparatively difficult, but testing and your Dust Hazard Analysis govern, not reputation",
 "Bulk self-heating and smoldering: deep-seated fires can start invisibly inside collected material, drums and hoppers",
 "Ultrafine particles pass ordinary filters and stay suspended — poor filtration redistributes the material plant-wide",
 "Many grades are electrically conductive — a settled film in switchgear and controls is a fault pathway",
 "IARC Group 2B classification makes containment an exposure control as well as a fire control",
 ],
 solutions: [
 "Explosion-proof HEPA recovery — ultrafines captured at the nozzle and retained at a tested 99.99% at 0.3 µm",
 "Collected-material discipline: prompt disposition on a defined cadence, no standing bulk inside units or containers",
 "Sealed metal collection containers — air limited to any incipient smolder, monitored between transfers",
 "Grounded, bonded conductive path throughout — conductive grades demand it, and it costs nothing on the rest",
 "Electronics and control areas on a defined vacuum frequency — the conductive-film patrol",
 ],
 configuration: [
 { step: "Collection tool", detail: "Grounded nozzle or wand at the source" },
 { step: "Static-dissipative hose", detail: "Conductive path, bonded end to end" },
 { step: "Explosion-proof HEPA unit", detail: "Rated recovery matched to the area classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — ultrafines stay captured" },
 { step: "Sealed metal container", detail: "Prompt disposition; monitored for self-heating" },
 ],
 bestPractices: [
 "Never blow down or sweep carbon black — its fineness makes the worst clouds and the deepest stains in the plant",
 "No standing bulk: collected material moves out promptly on a defined cadence",
 "Treat unexplained warmth or odor in stored material as an event — deep-seated smolders start silently",
 "Run graphite-level discipline around electronics: scheduled recovery of settled films in cabinets and controls",
 "Verify HEPA integrity on service — ordinary filtration passes this material straight through",
 ],
 faqs: [
 {
 question: "Is carbon dust combustible?",
 answer:
 "Yes. Carbon black, and carbonaceous dusts generally, are combustible and fall in Class II Group F for hazardous-location purposes. Their defining characteristic is smouldering: a deep-seated glow can persist inside accumulated material unnoticed and reignite long after a visible event appeared resolved, which is why recovered carbon dust is not left standing in a collection container.",
 },
 {
 question: "What is carbon black dust?",
 answer:
 "Carbon black is a fine, engineered carbon powder used as a pigment and reinforcing filler in rubber, coatings, inks and plastics. It is extraordinarily fine and extremely difficult to contain once loose — it stains everything and travels through a building on the smallest air current. Handling it well is as much a housekeeping discipline as a fire-safety one.",
 },
 {
 question: "Is carbon black an explosion risk or a fire risk?",
 answer:
 "Both, weighted unusually: the dust cloud is comparatively hard to ignite — though testing and your DHA govern, as with every combustible dust — while the distinctive hazard is bulk smoldering: deep-seated fires that begin invisibly inside collected material. The program centers on the collected bulk for exactly that reason.",
 },
 {
 question: "Why does carbon black get absolutely everywhere?",
 answer:
 "It is engineered fineness — ultrafine particles that stay suspended for a long time, pass ordinary filters, and mark every surface they land on. HEPA-retained recovery is non-negotiable: anything less redistributes the material as it cleans.",
 },
 {
 question: "Does it conduct electricity like graphite?",
 answer:
 "Many grades do — conductivity is one of the reasons industry buys it, including for battery electrodes. Around electronics that means graphite-level discipline: settled films in cabinets and controls are fault pathways, cleaned on schedule with grounded equipment.",
 },
 {
 question: "How should collected carbon black be handled?",
 answer:
 "Promptly and sealed: deep-seated smolders can start inside drums and canisters, so collected material moves out on a defined cadence in sealed metal containers, with unexplained warmth or odor treated as an event rather than a curiosity.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "What is black dust?", href: "/guides/what-is-black-dust" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Sulfur Dust guide", href: "/materials/sulfur-dust" },
 { label: "Battery Manufacturing deep dive", href: "/industries/battery" },
 { label: "Chemical Processing deep dive", href: "/industries/chemical" },
 ],
};
