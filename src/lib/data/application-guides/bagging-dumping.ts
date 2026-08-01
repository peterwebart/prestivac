import { Filter, Gauge, Package, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const baggingDumpingGuide: ApplicationGuideData = {
 slug: "bagging-dumping",
 title: "Bagging & Dumping",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Bagging & Dumping Vacuum Solutions",
 description:
 "Industrial vacuum recovery for bag filling, sack dumping and FIBC handling — fine powder captured at the fill and discharge points where it enters the operator's breathing zone, grounded for combustible powder and HEPA-retained for potent materials.",
 },
 tagline: "The two dustiest moments in powder handling are filling a bag and emptying one.",
 heroIntro:
 "Filling a bag and emptying one are the two dustiest moments in powder handling — and both put fine powder right in the operator's breathing zone. Bag filling, sack and bag dumping, and FIBC handling all release the fine, often combustible dust of the material being moved. Recovery captures it at the fill and discharge points, before it reaches the operator or the floor.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery for combustible powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Potent & exposure-limit powders retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Continuous-duty performance" },
 ],
 overview:
 "Materials handling concentrates its dust at two points: charging powder into a container and discharging it back out. Bag and drum filling, manual sack dumping, and FIBC or super-sack handling each liberate airborne fines directly in the operator's breathing zone — and what that dust is depends on the material, from food and pharmaceutical powders to chemicals, pigments and cement. Combustible powders demand grounded, rated recovery; potent and exposure-limited powders demand HEPA retention and sealed handling. Capture belongs right at the fill or dump station, and the spillage that accumulates around it is the housekeeping backstop.",
 capabilities: [
 { icon: Wind, title: "Fill & Dump Dust", detail: "Captured at the point of release" },
 { icon: Filter, title: "Combustible & Exposure Powder", detail: "Grounded and HEPA-retained" },
 { icon: Package, title: "Bag & FIBC Handling", detail: "Sacks, drums and super-sacks" },
 { icon: Sparkles, title: "Station Cleanliness", detail: "Spillage cleared as it happens" },
 ],
 materialsHeading: "Common bagging & dumping materials",
 materials: [
 "Food & ingredient powders",
 "Chemical powders",
 "Pharmaceutical powders",
 "Pigment & additive powder",
 "Cement & mineral powder",
 "Mixed bagging residue",
 ],
 materialsNote: {
 text: "Combustible and potent powders each behave differently, so testing governs —",
 link: { label: "the combustible dust checklist", href: "/resources/combustible-dust-solutions" },
 },
 challengesHeading: "Challenges in bagging & dumping",
 challenges: [
 "Filling and dumping release dust directly into the operator's breathing zone",
 "Combustible organic and metal powders demand grounded, rated recovery",
 "Potent and exposure-limited powders require HEPA retention and containment",
 "FIBC and super-sack handling releases large dust clouds on discharge",
 "Spillage accumulates around fill and dump stations between cleanings",
 "Manual charging combines an ergonomic load with a dust exposure",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Captures dust at the fill and dump points where it is generated",
 "Grounded, rated equipment for combustible organic and metal powders",
 "HEPA retention and sealed handling for potent, exposure-limited powders",
 "Keeps the operator's breathing zone clear during manual charging",
 "Reduces spillage and product loss around the station",
 "Supports combustible-dust and exposure-limit compliance with documented methods",
 ],
 benefits: [
 { title: "Better Safety", detail: "Powder is captured before it reaches the operator's breathing zone." },
 { title: "Higher Productivity", detail: "Stations stay clean, so charging and dumping keep moving." },
 { title: "Cost Savings", detail: "Less spillage means less product loss and less cleanup labor." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps potent and fine powders out of the air." },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 setup: [
 { step: "Fill or dump station", detail: "Bag filling, sack dumping or FIBC discharge at the source" },
 { step: "Capture tooling", detail: "Nozzles and hoods positioned at the point of release" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated vacuum unit", detail: "Explosion-proof for combustible powder; HEPA for potent materials" },
 { step: "Sealed collection & disposal", detail: "Combustible and exposure-limit powders contained" },
 ],
 setupNote: {
 text: "The mixing step that these powders feed is the companion job —",
 link: { label: "the mixing & blending guide", href: "/applications/mixing-blending" },
 textAfter: "covers charge and discharge at the vessel.",
 },
 faqs: [
 {
 question: "Is the dust from bagging and dumping combustible?",
 answer:
 "Frequently, yes — most food, pharmaceutical and plastic powders are combustible dusts, along with many chemicals and pigments. The specific behavior depends on the material and its fineness, so testing your actual powder governs, and grounded, rated recovery is the safe default wherever combustible powder is filled or dumped.",
 },
 {
 question: "What about potent pharmaceutical powders?",
 answer:
 "Potent active ingredients carry strict occupational exposure limits, so their dust is captured under HEPA retention with sealed handling and disposal as an exposure control. Bagging and dumping are precisely the high-exposure steps where that capture matters most, positioned right at the point of release.",
 },
 {
 question: "How do you handle FIBC and super-sack dust?",
 answer:
 "Discharging a super-sack can release a large dust cloud all at once, so capture is positioned at the discharge point — the spout or dump hood — to catch it as it is released. Filling FIBCs is handled the same way at the fill head, and the surrounding area is kept clear on the housekeeping schedule.",
 },
 {
 question: "Where exactly should capture be positioned?",
 answer:
 "At the point of release — the bag spout when filling, the dump hood or grate when emptying — so the dust is caught before it rises into the operator's breathing zone. Spillage that escapes onto the floor and equipment is then cleared by scheduled housekeeping as the backstop.",
 },
 ],
 relatedApplications: [
 "Cleanroom Vacuuming",
 "Bag filling",
 "Sack dumping",
 "FIBC handling",
 "Charging & discharging",
 "Mixing & blending",
 "Bulk material handling",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
