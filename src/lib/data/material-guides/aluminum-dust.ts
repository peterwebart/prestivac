import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const aluminumDustGuide: MaterialGuideData = {
 slug: "aluminum-dust",
 name: "Aluminum Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Aluminum Dust Vacuum Solutions",
 description:
 "Aluminum dust is one of the most severe combustible metal dusts. How it's safely collected: grounded explosion-proof vacuums, immersion separation and HEPA filtration under NFPA 484 / 660.",
 },
 heroIntro:
 "Engineered to safely collect and contain aluminum dust and powders in environments where safety, performance and compliance are non-negotiable — because with fine aluminum, they are.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 484 / 660 practice" },
 { icon: Filter, title: "Advanced Filtration", detail: "HEPA final stage; immersion options" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded construction" },
 { icon: Factory, title: "Built for Industry", detail: "Continuous-duty recovery" },
 ],
 facts: [
 { label: "Material type", value: "Combustible metal dust" },
 { label: "Severity", value: "Fine fractions reach the highest explosion classes (St 2–St 3)" },
 { label: "Governing standards", value: "NFPA 484, consolidated into NFPA 660" },
 { label: "Primary controls", value: "Grounding & bonding, immersion separation, HEPA exhaust" },
 ],
 overview: [
 "Aluminum's combustibility rises steeply as particle size falls. Chips and swarf are an operations nuisance; the fine dust from grinding, sanding, polishing and dry machining is a genuine explosion hazard — severe enough that combustible metals have their own standard, NFPA 484, carried into the consolidated NFPA 660.",
 "Safe recovery is an engineering problem with a known solution: remove every ignition source from the collection path, keep the material from ever existing as a dry dispersed cloud, and handle what's collected wetted or sealed. That is precisely what grounded explosion-proof construction, immersion separation and HEPA-retained exhaust do — each control mapping to one leg of the hazard.",
 ],
 industries: [
 { label: "Metal Fabrication", href: "/#metalworking" },
 { label: "Aerospace", href: "/#aerospace" },
 { label: "Automotive", href: "/#automotive" },
 { label: "Additive Manufacturing", href: "/#additive-manufacturing" },
 { label: "CNC Machining", href: "/applications/cnc-machining" },
 { label: "Surface Finishing", href: "/applications#metalworking-machining" },
 { label: "Foundries", href: "/applications#metalworking-machining" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Fine aluminum dust forms explosive clouds when dispersed in air — cleaning method is the difference between a layer and a cloud",
 "Very low ignition energy for fine fractions: a static discharge can be sufficient",
 "Settled layers fuel secondary explosions — the mechanism behind the worst incidents",
 "Reactivity extends to water contact in confined, unvented accumulations (hydrogen generation), which is why disposal method matters",
 "Mixing aluminum fines with rust or other metal oxides can create thermite-sensitive mixtures — dedicated collection avoids it",
 ],
 solutions: [
 "Explosion-proof construction with grounded, bonded conductive path from nozzle to chassis",
 "Anti-static hoses and non-sparking stainless tools at the pickup point",
 "Immersion separation for fine and reactive fractions — dust is wetted the moment it enters",
 "Tested HEPA final stage (99.99% at 0.3 µm) so captured fines stay captured",
 "Air-operated units where area classification calls for zero electrical components",
 ],
 configuration: [
 { step: "Collection tool", detail: "Grounded wand or nozzle at the source" },
 { step: "Anti-static hose", detail: "Conductive path, bonded end to end" },
 { step: "Vacuum unit", detail: "Explosion-proof; air-operated for classified areas" },
 { step: "Separation & filtration", detail: "Immersion bath or multi-stage + HEPA" },
 { step: "Sealed container", detail: "Wetted or contained transport to disposal" },
 ],
 bestPractices: [
 "Verify grounding and bonding before every use — continuity, not assumption",
 "Match filter media to fine aluminum; inspect and service on condition",
 "Never create dust clouds: vacuum pickup, not blowdown or dry sweeping",
 "Empty and clean units on schedule — no dry accumulation left standing",
 "Dispose of collected aluminum dust wetted or sealed, per your site's waste procedure",
 ],
 faqs: [
 {
 question: "Is aluminum flammable?",
 answer:
 "A solid aluminium extrusion is difficult to ignite. Fine aluminium powder is effectively a different material: a reactive combustible metal dust that ignites far more readily and burns at very high temperature. NFPA 660, which absorbed the former NFPA 484 for combustible metals, is the governing standard, and it is the reason metal fines are never treated like ordinary shop debris.",
 },
 {
 question: "Is aluminum dust combustible, and can water be used on it?",
 answer:
 "It is combustible, and water is the wrong response — aluminium reacts with water at elevated temperature to liberate hydrogen, which adds a second fuel to an existing fire. Combustible metal dusts call for Class D methods and for recovery equipment that avoids creating an ignition source in the first place.",
 },
 {
 question: "Is aluminum dust really explosive?",
 answer:
 "Fine aluminum dust is among the most severe combustible dusts, reaching the highest standard explosion classes, with very low ignition energy in fine fractions. Coarse chips and swarf are not the concern — the fine dust from sanding, grinding and dry machining is.",
 },
 {
 question: "Can I use a regular vacuum for aluminum dust?",
 answer:
 "No. A standard vacuum adds ignition sources — sparking motor, static-generating hose — exactly where dust concentration peaks. Aluminum fines call for grounded explosion-proof equipment, with immersion separation for the finest fractions.",
 },
 {
 question: "What is immersion separation?",
 answer:
 "A collection architecture where the inlet stream passes directly into a liquid bath, wetting the dust on entry so no dry, ignitable accumulation ever forms inside the vacuum — the approach NFPA 484 points to for fine and reactive metal fines.",
 },
 {
 question: "Which standard governs aluminum dust?",
 answer:
 "NFPA 484 for combustible metals, now carried into the consolidated NFPA 660. OSHA enforces housekeeping under its Combustible Dust National Emphasis Program; your Dust Hazard Analysis and local authority define your specific obligations.",
 },
 ],
 studySlug: "aluminum-dust-automotive-machining",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "accessories"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Titanium Dust guide", href: "/materials/titanium-dust" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Magnesium Dust guide", href: "/materials/magnesium-dust" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 { label: "Dust Hazard Analysis", href: "/resources/dust-hazard-analysis" },
 ],
};
