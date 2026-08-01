import { Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const mixingBlendingGuide: ApplicationGuideData = {
 slug: "mixing-blending",
 title: "Mixing & Blending",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Chemical Processing", anchor: "chemical-processing" },
 seo: {
 title: "Mixing & Blending Vacuum Solutions",
 description:
 "Industrial vacuum recovery for powder mixing and blending — dust captured at charging and discharge, grounded and rated for combustible powders, HEPA-retained and sealed for potent materials, with fast, dedicated changeover cleaning between batches.",
 },
 tagline: "Every batch sheds the powder it's made from.",
 heroIntro:
 "Mixing and blending combine dry powders — and shed them at every step. Charging the vessel, the blending action itself, and discharge each release the fine, often combustible dust of whatever is being blended, from food and pharmaceutical powders to chemicals and pigments. Recovery captures it at the mixer and keeps the changeover between batches clean.",
 heroImage: {
 src: "/images/library/workers/blending-tank-cleanup.jpg",
 alt: "Operator vacuuming a blending vessel clean between batches",
 },
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery for combustible powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Potent & exposure-limit powders retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Fast batch turnover" },
 ],
 overview:
 "Blending is dusty by nature. Dumping powders into a mixer, the blending action, and discharging the batch all liberate airborne fines — and what that dust is depends entirely on the recipe: combustible organic powders in food, pharma and plastics; metal powders; pigments; chemicals. Two problems run alongside the dust. Cross-contamination between batches is a quality failure, and combustible powders demand grounded, rated recovery. Capture belongs at the charge and discharge points, and changeover cleaning — clearing the vessel and the room before the next batch — is where the vacuum earns its place.",
 capabilities: [
 { icon: Wind, title: "Charge & Discharge Dust", detail: "The dustiest points of a batch" },
 { icon: Filter, title: "Combustible Powder", detail: "Grounded, rated recovery" },
 { icon: Sparkles, title: "Changeover Cleanliness", detail: "Clean vessel between batches" },
 { icon: Gauge, title: "Batch Turnover", detail: "Fast, repeatable cleanup" },
 ],
 materialsHeading: "Common blended materials",
 materials: [
 "Food & ingredient powders",
 "Pharmaceutical powders",
 "Plastic & polymer powder",
 "Pigments & additives",
 "Chemical powders",
 "Mixed batch residue",
 ],
 materialsNote: {
 text: "Combustible organic powders each behave differently, so testing governs — start with",
 link: { label: "the combustible dust checklist", href: "/resources/combustible-dust-solutions" },
 },
 challengesHeading: "Challenges in mixing & blending",
 challenges: [
 "Charging, blending and discharge each release fine airborne powder",
 "Combustible organic and metal powders demand grounded, rated recovery",
 "Cross-contamination between batches is a quality failure, not just a mess",
 "Changeover cleaning between recipes is a recurring time burden",
 "Blend rooms accumulate fugitive dust on every surface",
 "Potent pharmaceutical powders carry strict occupational exposure limits",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Captures dust at the charge and discharge points where it is generated",
 "Grounded, rated equipment for combustible organic and metal powders",
 "HEPA retention and sealed handling for potent, exposure-limited powders",
 "Dedicated recovery prevents cross-contamination between batches",
 "Fast, repeatable changeover cleaning keeps the line turning",
 "Supports combustible-dust and exposure-limit compliance with documented methods",
 ],
 benefits: [
 { title: "Better Safety", detail: "Combustible blend dust is captured and grounded, not left to accumulate." },
 { title: "Higher Productivity", detail: "Changeovers happen faster when cleanup is one repeatable pass." },
 { title: "Cost Savings", detail: "Less product loss and less rework from cross-contaminated batches." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps potent and fine powders out of the air." },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 setup: [
 { step: "Mixer or blender", detail: "Ribbon, paddle, tumble or high-shear at the charge/discharge points" },
 { step: "Grounded tool kit", detail: "Crevice nozzles and brushes for the vessel and surrounds" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated vacuum unit", detail: "Explosion-proof for combustible powder; HEPA for potent materials" },
 { step: "Sealed collection & disposal", detail: "Cross-contamination and exposure controlled" },
 ],
 setupNote: {
 text: "Potent pharmaceutical and food powders raise the exposure stakes —",
 link: { label: "the pharmaceutical deep dive", href: "/industries/pharmaceutical" },
 textAfter: "covers containment.",
 },
 faqs: [
 {
 question: "Is blended powder dust combustible?",
 answer:
 "Very often, yes — most food, pharmaceutical and plastic powders are combustible dusts, as are many chemicals and pigments. The specific behavior depends on the material and its fineness, so testing your actual powder governs, and grounded, rated recovery is the safe default wherever combustible powder is blended.",
 },
 {
 question: "How do I keep batches from cross-contaminating?",
 answer:
 "Thorough changeover cleaning of the vessel and surrounds between recipes, and, where cross-contamination is a serious quality or allergen concern, dedicated recovery equipment per product line rather than a shared unit. Recovery makes that changeover fast and repeatable instead of a slow manual clean.",
 },
 {
 question: "What about potent pharmaceutical powders?",
 answer:
 "Potent active ingredients carry strict occupational exposure limits, so their dust is captured under HEPA retention with sealed handling and disposal as an exposure control. In those settings recovery is typically dedicated to the material and integrated with the containment strategy of the suite.",
 },
 {
 question: "Where should capture be positioned?",
 answer:
 "At the dustiest points of the batch — charging powders in and discharging the blend out — plus changeover cleaning of the vessel itself. Blend rooms also accumulate fugitive dust on surrounding surfaces, so scheduled housekeeping backs up the point-of-generation capture.",
 },
 ],
 relatedApplications: [
 "Cleanroom Vacuuming",
 "Powder blending",
 "Batch mixing",
 "Charging & discharging",
 "Bagging & dumping",
 "Tank cleaning",
 "Changeover cleaning",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
