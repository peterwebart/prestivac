import { AlertTriangle, Droplets, Filter, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const zincDustGuide: MaterialGuideData = {
 slug: "zinc-dust",
 name: "Zinc Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Zinc Dust?",
 description:
 "Fine zinc is a combustible metal dust — and its signature twist is chemistry: zinc reacts with moisture and acids to release flammable hydrogen, so 'just wet it down' trades a dust hazard for a gas hazard, and damp collected zinc can evolve hydrogen in a sealed drum. Dry, grounded, HEPA-retained recovery.",
 },
 heroIntro:
 "Built for the metal that fights water — fine zinc is a combustible metal dust like its aluminum and magnesium cousins, but its defining nuance is chemical: zinc reacts with moisture, and more vigorously with acids, to liberate flammable hydrogen gas. So a wet cleanup can trade a dust hazard for a gas hazard, and damp collected zinc sealed in a drum can quietly build hydrogen. It is recovered dry, grounded, and stored with that chemistry in mind.",
 badges: [
 { icon: ShieldCheck, title: "Testing Governs", detail: "Fineness sets the behavior" },
 { icon: Droplets, title: "Reactivity-Aware", detail: "Water & acid liberate hydrogen" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine metal fraction retained" },
 { icon: AlertTriangle, title: "Built for Metals", detail: "Galvanizing, batteries & pigments" },
 ],
 facts: [
 { label: "Combustibility", value: "A combustible metal dust — very fine zinc fractions can be pyrophoric and burn intensely" },
 { label: "The reactivity", value: "Reacts with moisture, and more so with acids, to release flammable hydrogen gas" },
 { label: "Storage caveat", value: "Damp collected zinc can evolve hydrogen in a sealed container — dry recovery, vented storage" },
 { label: "Standard", value: "A combustible metal under NFPA 660 (former NFPA 484 metals lineage)" },
 ],
 overview: [
 "Zinc belongs to the reactive-metal end of the combustible-dust family, and it earns the full metal-dust discipline. Fine zinc is combustible, its very fine fractions can be pyrophoric — igniting on contact with air — and it burns intensely once alight, so the familiar reactive-metal controls apply: dry, grounded, bonded, rated recovery, and never water on a burning metal. Zinc fines arise across a range of processes — galvanizing and metallizing where parts are zinc-coated, battery manufacturing where zinc serves as an anode material, pigment and chemical-reduction work, and foundry and die-cast operations — and as with every metal dust, fineness and process history change the behavior, so the specification comes from testing your actual material rather than from the family's reputation.",
 "The nuance that sets zinc apart from aluminum or titanium is chemical. Zinc reacts with moisture to release hydrogen, and it does so far more vigorously in contact with acids — the kind found in pickling and cleaning lines. That single fact reshapes the housekeeping approach: a water-based cleanup or a wet vacuum can convert a manageable dust hazard into a flammable-gas hazard, and damp zinc sealed into a collection drum can accumulate hydrogen in the closed headspace over time. The control program follows directly — dry, controlled recovery with grounded, bonded, HEPA-retained equipment; collected zinc kept dry and appropriately vented rather than sealed damp; zinc fines kept away from acids and moisture; and sealed disposal that respects the same chemistry.",
 ],
 industries: [
 { label: "Galvanizing & Metallizing", href: "/industries/metalworking" },
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Foundries & Die-Cast", href: "/industries/foundry" },
 { label: "Automotive Components", href: "/industries/automotive" },
 { label: "Metals Recycling", href: "/applications#recycling" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Treating zinc as inert — fine zinc is a combustible metal dust and can be pyrophoric",
 "Using water on zinc — it reacts with moisture to release flammable hydrogen",
 "Sealing damp collected zinc in a drum — hydrogen can accumulate in the closed headspace",
 "Acid contact (pickling, cleaning areas) liberating hydrogen from zinc fines vigorously",
 "Blow-down dispersing a combustible metal cloud with an energetic ignition profile",
 ],
 solutions: [
 "Explosibility testing on your actual fines — the specification's honest foundation",
 "Dry, controlled recovery — never water, which generates hydrogen on zinc",
 "Grounded, bonded, rated recovery matched to the test result",
 "HEPA-retained capture; collected zinc kept dry and appropriately vented",
 "Sealed disposal; zinc fines kept away from acids and moisture",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for zinc dust, fines and galvanizing residue" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the test", detail: "Rated for the combustible metal per its measured explosibility" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine metal fraction stays captured" },
 { step: "Dry, vented collection", detail: "Contained but not sealed damp — no hydrogen accumulation" },
 ],
 bestPractices: [
 "Never apply water to zinc dust — it liberates flammable hydrogen",
 "Keep collected zinc dry and appropriately vented — sealed damp zinc can build hydrogen",
 "Keep zinc fines away from acids (pickling, cleaning) which release hydrogen vigorously",
 "Ground and bond everything — treat zinc as the combustible metal it is",
 "Test the actual fines rather than borrowing another metal's numbers",
 ],
 faqs: [
 {
 question: "Is zinc flammable?",
 answer:
 "Bulk zinc is not readily ignitable; zinc dust and powder are reactive combustible metal dusts. Zinc also reacts with water and acids to release hydrogen, so wet cleanup is not a neutral choice. Separately, zinc oxide fume from hot work is the classic cause of metal fume fever, which is an exposure problem rather than a fire one.",
 },
 {
 question: "Is zinc dust combustible?",
 answer:
 "Yes. Fine zinc is a combustible metal dust, and very fine fractions can be pyrophoric — igniting on contact with air. It burns intensely like other reactive metals, so it is handled under combustible-metal practice: dry, grounded, bonded, rated recovery, and never water on a metal fire.",
 },
 {
 question: "Why is water a problem with zinc?",
 answer:
 "Because zinc reacts with moisture — and far more vigorously with acids — to release flammable hydrogen gas. A water-based cleanup or a wet vacuum can trade a dust hazard for a gas hazard, and damp collected zinc sealed in a drum can accumulate hydrogen in the closed headspace. Zinc is therefore recovered dry, and collected material is kept dry and appropriately vented.",
 },
 {
 question: "Where does zinc dust come from?",
 answer:
 "Galvanizing and metallizing (zinc coating of parts), battery manufacturing (zinc anode materials), pigment and chemical-reduction processes, foundry and die-cast operations, and metals recycling. Fineness and process history vary the behavior, which is why testing your actual material governs the specification.",
 },
 {
 question: "How is zinc different from aluminum or magnesium dust?",
 answer:
 "All are reactive combustible metals handled dry and grounded, but zinc's signature nuance is hydrogen evolution: its reaction with moisture and acids liberates flammable gas. That makes moisture control and vented storage of the collected material specific priorities for zinc, layered on top of the combustible-metal discipline the whole family shares.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Magnesium Dust guide", href: "/materials/magnesium-dust" },
 { label: "Battery deep dive", href: "/industries/battery" },
 { label: "Foundry deep dive", href: "/industries/foundry" },
 ],
};
