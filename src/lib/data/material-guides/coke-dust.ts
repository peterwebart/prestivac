import { Filter, Flame, HardHat, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cokeDustGuide: MaterialGuideData = {
 slug: "coke-dust",
 name: "Coke Dust",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
 title: "How to Safely Recover Coke Dust?",
 description:
 "Coke's low volatile content makes its dust less reactive than coal's — but less isn't none, and coke-oven emissions carry their own OSHA standard, 1910.1029. HEPA-retained explosion-safe recovery for batteries, screening stations and blast-furnace stockhouses.",
 },
 heroIntro:
 "Built for coal's high-temperature offspring — a dust less reactive than its parent but wrapped in some of the strictest exposure rules in heavy industry, handled where everything nearby is hot and the cooled-material rule does real work.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Exposure-limit retention — 99.99% at 0.3 µm" },
 { icon: Flame, title: "Hot-Material Discipline", detail: "Cooled, verified material only" },
 { icon: HardHat, title: "Built for Heavy Industry", detail: "Batteries, stockhouses & foundries" },
 ],
 facts: [
 { label: "Material type", value: "Low-volatile carbonaceous dust — the pyrolysis product of coal" },
 { label: "Reactivity nuance", value: "Less reactive than coal dust — less is not none; testing governs" },
 { label: "Own federal standard", value: "Coke-oven emissions carry OSHA 1910.1029 and a Group 1 carcinogen classification" },
 { label: "Governing standards", value: "NFPA 660 framework for the dust; 1910.1029 for the emissions" },
 ],
 overview: [
 "Coke is coal baked in oxygen-starved ovens until the volatiles leave — and since volatile content is what drives coal dust's reactivity, coke dust arrives less eager to ignite than its parent. That is a nuance, not a pass: explosibility varies by coke and by how fine the fraction runs, screening and handling make the finest cuts, and the honest specification comes from testing your own material, not from assuming the family reputation covers you. Less reactive is not non-reactive.",
 "The larger story around coke is exposure. Coke-oven emissions are classified as carcinogenic to humans and carry their own OSHA standard — 1910.1029 — which turns housekeeping near the batteries into exposure control first: HEPA-retained recovery, sealed disposal, documentation, and never compressed air, which would put the regulated material back into breathing zones. Add the geography's other constant — heat, from pushing and quenching through hot screenings — and the cooled-material rule is absolute: verified-cool recovery only, from oven side to blast-furnace stockhouse to foundry charging floor.",
 ],
 industries: [
 { label: "Coal & Power Generation", href: "/industries/coal" },
 { label: "Steelmaking & Blast Furnace", href: "/industries/metalworking" },
 { label: "Foundries", href: "/industries/metalworking" },
 { label: "Utilities & Energy", href: "/applications#energy" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 ],
 riskHeading: "Explosion, fire & exposure risks",
 risks: [
 "The fine fraction can still deflagrate — explosibility varies by coke, so testing decides, not assumption",
 "Screening and transfer stations generate the finest, most sensitive cut on site",
 "Battery-area dust rides with coke-oven emissions — a Group 1 exposure stream under 1910.1029",
 "Hot coke, quench areas and warm screenings make smoldering material a constant possibility",
 "Blow-down near batteries doubles the harm — cloud formation and regulated exposure at once",
 ],
 solutions: [
 "HEPA-retained explosion-safe recovery, specified from your material's own test data",
 "Battery surrounds run exposure-first: sealed collection, documented disposal, no compressed air",
 "Screening and transfer stations on their own defined rotation",
 "Cooled-material verification before every recovery pass — the rule is absolute",
 "Stockhouse and charging floors on the schedule the Dust Hazard Analysis sets",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for battery surrounds and screening bases" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Explosion-safe HEPA unit", detail: "Rated recovery matched to test data and classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the exposure fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Cooled material only; contained, documented, dispositioned promptly" },
 ],
 bestPractices: [
 "Test your coke fines — explosibility varies enough that the specification comes from data",
 "Cooled, verified material only — hot or smoldering coke never enters a unit",
 "Never blow down near the batteries — 1910.1029's logic forbids re-suspending the stream",
 "Sealed, prompt disposal: collected fines don't stand open near heat",
 "Document the battery-area program — the exposure record and the dust record are one",
 ],
 faqs: [
 {
 question: "Is coke flammable?",
 answer:
 "Yes. Coke is a carbon fuel, and coke dust is a combustible dust. Its particular characteristic is a tendency to smoulder — a deep-seated glow inside accumulated material that can persist unnoticed and later reignite, which is why recovered coke dust is not left sitting in collection containers.",
 },
 {
 question: "Is coke dust explosive like coal dust?",
 answer:
 "Less so — the oven drove off the volatiles that make coal dust eager. But explosibility varies by coke and by fineness, and screening stations produce fine cuts that can still deflagrate. The honest answer is a test report on your own material; 'less reactive' never earned anyone an exemption.",
 },
 {
 question: "What does OSHA 1910.1029 mean for cleanup crews?",
 answer:
 "It makes battery-area housekeeping part of exposure control. Coke-oven emissions are a regulated carcinogen stream, so the recovery program runs HEPA-retained capture, sealed disposal and documentation — and compressed air is off the table entirely, because re-suspending the material is exactly what the standard exists to prevent.",
 },
 {
 question: "Can we recover warm coke fines from the quench area?",
 answer:
 "Only after they are verified cool. Coke leaves the oven incandescent and holds heat stubbornly; smoldering material never enters a vacuum regardless of rating. Schedule recovery behind cool-down and treat the verification as part of the procedure, not a judgment call.",
 },
 {
 question: "What about coke at foundries?",
 answer:
 "Cupola charging and coke breakage shed the same fines on a smaller scale — the testing logic and the cooled-material rule carry over intact. The metalworking deep dive covers the surrounding program those floors run.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
   { label: "Power generation case study", href: "/case-studies/coal-dust-power-generation" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "What is black dust?", href: "/guides/what-is-black-dust" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Coal Dust guide", href: "/materials/coal-dust" },
 { label: "Coal & Power deep dive", href: "/industries/coal" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Metalworking deep dive", href: "/industries/metalworking" },
 ],
};
