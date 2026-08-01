import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const graphiteDustGuide: MaterialGuideData = {
 slug: "graphite-dust",
 name: "Graphite Dust",
 groupCrumb: { label: "Battery Dusts", anchor: "battery-dusts" },
 seo: {
 title: "Graphite Dust Vacuum Solutions",
 description:
 "Graphite dust is combustible and electrically conductive — a dual hazard. How it's safely collected: grounded explosion-proof HEPA vacuums and scheduled electrical-room recovery under NFPA 652 / 660.",
 },
 heroIntro:
 "Engineered to safely collect a dust that fights on two fronts — combustible carbon fines that are also electrically conductive, threatening the plant's electrical infrastructure and its safety case with the same accumulation.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 652 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "99.99% at 0.3 µm final stage" },
 { icon: Zap, title: "Conductive-Dust Aware", detail: "Grounded recovery; electrics on schedule" },
 { icon: Factory, title: "Built for Industry", detail: "Continuous-duty recovery" },
 ],
 facts: [
 { label: "Material type", value: "Combustible carbon dust — electrically conductive" },
 { label: "Dual hazard", value: "Deflagration fuel and electrical tracking / short-circuit risk" },
 { label: "Governing standards", value: "NFPA 652 / 654 practice, consolidated into NFPA 660" },
 { label: "Primary controls", value: "Grounded EX recovery, HEPA exhaust, defined electrical-room frequency" },
 ],
 overview: [
 "Graphite is a combustible carbon dust — and unlike most combustible dusts, it conducts electricity. That second property changes the housekeeping mission: settled fines don't need to deflagrate to shut a plant down, because on busbars, panel internals and motor control centers they track, bridge and short. One dust, two failure modes, one recovery program.",
 "Battery manufacturing has made graphite the fastest-growing housekeeping problem in industry — anode lines handle it by the ton — but it has always been present in foundries, EDM shops, seal and lubricant manufacturing, and recycling. The engineering answer is consistent: grounded explosion-proof recovery with HEPA-retained exhaust, and a schedule that treats electrical rooms as first-class cleaning zones rather than afterthoughts.",
 ],
 industries: [
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Automotive & EV", href: "/#automotive" },
 { label: "Electronics & Semiconductors", href: "/industries#electronics" },
 { label: "Metalworking & Foundries", href: "/#metalworking" },
 { label: "Recycling", href: "/industries#recycling" },
 { label: "Mining & Minerals", href: "/industries#mining" },
 ],
 riskHeading: "Explosion & electrical risks",
 risks: [
 "Fine graphite forms explosive clouds when dispersed — mixing, transfer and cutting operations generate exactly that fraction",
 "Conductive fines settle onto busbars, panels and motor control centers, creating tracking and short-circuit hazards independent of combustibility",
 "Settled layers on elevated surfaces fuel secondary explosions — the mechanism the housekeeping standards target",
 "The dust marks everything it touches, but visibility is deceptive: the hazardous fine fraction travels farther than the staining suggests",
 "Airborne fine carbon is an exposure concern in its own right — capture at source with retained exhaust",
 ],
 solutions: [
 "Explosion-proof construction with a grounded, bonded conductive path from nozzle to chassis",
 "Tested HEPA final stage (99.99% at 0.3 µm) — fine carbon that escapes filtration is redistribution, not recovery",
 "Anti-static hoses and non-sparking stainless tools at the pickup point",
 "Electrical rooms, MCCs and panel vicinities on their own defined vacuum frequency",
 "Continuous-duty units where generation never stops — electrode lines, mixers, conveyors",
 ],
 configuration: [
 { step: "Collection tool", detail: "Grounded wand or detail nozzle at the source" },
 { step: "Anti-static hose", detail: "Conductive path, bonded end to end" },
 { step: "EX vacuum unit", detail: "Explosion-proof; grounded and verified" },
 { step: "Multi-stage + HEPA", detail: "Mass loading staged; fines retained at 99.99%" },
 { step: "Sealed container", detail: "Contained transfer to disposal" },
 ],
 bestPractices: [
 "Verify grounding and bonding before every use — continuity, not assumption",
 "Give electrical infrastructure its own scheduled vacuum frequency with non-sparking tools",
 "Never blow down or dry-sweep fine carbon: vacuum capture only",
 "Service filters on condition — graphite's fine fraction loads media quickly",
 "Dispose of collected graphite sealed, per your site's waste procedures",
 ],
 faqs: [
 {
 question: "Is graphite dust combustible and conductive?",
 answer:
 "Both, and the combination is why graphite deserves attention. It is a carbonaceous combustible dust in Class II Group F with a tendency to smoulder, and it is electrically conductive — so accumulation can bridge and short electrical equipment as well as provide fuel. In battery and electrode manufacturing that conductivity is the reason housekeeping standards are set as tightly as they are.",
 },
 {
 question: "Is graphite dust combustible?",
 answer:
 "Yes — graphite and carbon black are combustible carbon dusts, with severity depending on particle size and confirmed by testing. The fine fraction generated by mixing, transfer and cutting operations is the concern.",
 },
 {
 question: "Why is graphite's conductivity a problem?",
 answer:
 "Because settled conductive fines track, bridge and short on energized equipment — panels, busbars, motor control centers. It's a second hazard from the same dust, and it's why electrical rooms deserve their own defined cleaning frequency.",
 },
 {
 question: "Where is graphite dust generated?",
 answer:
 "Battery anode production is the fastest-growing source — graphite is handled by the ton in mixing rooms and shed as electrode dust at slitting and notching. Foundry facings, EDM operations, seals and lubricant manufacturing, and recycling streams generate it too.",
 },
 {
 question: "Is HEPA filtration necessary for graphite?",
 answer:
 "Effectively yes: the fine fraction that matters for combustibility, conductivity and exposure alike is the fraction a coarse filter passes. A tested 99.99% at 0.3 µm final stage keeps captured carbon captured.",
 },
 ],
 studySlug: "graphite-dust-ev-battery-plant",
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "central-vacuum-systems", "accessories"],
 related: [
   { label: "Power generation case study", href: "/case-studies/coal-dust-power-generation" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "What is black dust?", href: "/guides/what-is-black-dust" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Battery Manufacturing deep dive", href: "/industries/battery" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Titanium Dust guide", href: "/materials/titanium-dust" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
