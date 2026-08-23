import { Filter, Flame, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const agriculturalBiomassDustGuide: MaterialGuideData = {
 slug: "agricultural-biomass-dust",
 name: "Agricultural Biomass Dust",
 groupCrumb: { label: "Biomass & Renewable Energy Dusts", anchor: "biomass-dusts" },
 seo: {
  title: "Agricultural Biomass Dust — Control & Recovery",
  description:
   "Straw, husk and crop residue dust is combustible, highly variable, and often carries silica and mould spores alongside the deflagration hazard.",
 },
 heroIntro:
  "Built for handling crop residues as fuel and feedstock — straw, husk, bagasse, stover. The dust is combustible, the feedstock composition varies by season and source, and it frequently carries silica and biological contamination that the fire assessment alone would miss.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Variable Crop Feedstock", detail: "Composition changes by season and source" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains silica and biological fractions" },
 { icon: Flame, title: "Self-Heating in Storage", detail: "Bulk crop residue heats in stockpiles" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Reception, shredding, milling, screening, conveying, baling and boiler or digester feed" },
 { label: "Distinguishing property", value: "Frequently carries crystalline silica (notably rice husk) and mould spores alongside the combustible fraction" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61, with silica and bioaerosol exposure controls" },
 ],
 overview: [
 "Agricultural residues are handled as fuel and feedstock in growing volumes — straw, rice husk, bagasse, corn stover, nut shells. Reception, shredding, milling and conveying all generate dust, and the low bulk density of most of these materials means the fines travel readily through the handling chain.",
 "Two additional hazards travel with the combustible one. Several crop residues carry significant silica content — rice husk notably so — which brings respirable crystalline silica exposure into an operation that may be assessing itself purely as a biomass dust site. And crop material stored before use develops mould, so handling it disperses spores as well as dust, which is a recognised occupational respiratory concern in agricultural handling. Both are reasons the filtration requirement here is about what the unit retains rather than only about what it picks up.",
 ],
 industries: [
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Paper Mills", href: "/industries/paper-mills" },
 ],
 riskHeading: "What makes agricultural biomass dust worth controlling",
 risks: [
 "Combustible organic dust: crop residue fines suspend readily and carry deflagration conditions in enclosures and silos.",
 "Crystalline silica content: several residues, rice husk in particular, carry silica with its own exposure limits.",
 "Mould and bioaerosols: stored crop material develops mould, so handling disperses spores as well as dust.",
 "Feedstock variability: composition changes by crop, season and supplier, so a single characterisation does not describe the stream.",
 "Self-heating in storage: bulk crop residue heats in stockpiles and bunkers without external ignition.",
 "Low bulk density: fines travel readily and settle across the whole handling chain rather than near the source.",
 ],
 solutions: [
 "Retained filtration specified against silica and bioaerosol content, not only the combustible fraction.",
 "Recovery at reception, shredding and milling, where residue handling releases most material.",
 "Storage monitoring for self-heating in stockpiles and bunkers.",
 "Periodic re-testing as crop, season and supplier change the material.",
 "Grounded, bonded conductive path across the handling chain.",
 "Explosion-proof construction where classification requires it in enclosed handling.",
 ],
 configuration: [
 { step: "Ask what the residue contains", detail: "Several crop residues carry crystalline silica — rice husk notably — which brings its own exposure limits." },
 { step: "Account for mould", detail: "Stored crop material develops mould, so handling disperses spores alongside dust." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for shredding and milling areas." },
 { step: "Re-test by season", detail: "Composition changes with crop, season and supplier; one characterisation describes one consignment." },
 { step: "Monitor stockpiles", detail: "Bulk crop residue heats through biological activity with no external ignition source." },
 ],
 bestPractices: [
 "Specify filtration against silica and spores, not just combustible fines.",
 "Re-test as feedstock changes rather than annually by habit.",
 "Monitor stockpiles and bunkers for self-heating.",
 "Prioritise reception and shredding, the largest release points.",
 "Verify grounding across conveying runs.",
 "Empty into sealed disposal away from stored residue.",
 ],
 faqs: [
 {
  question: "Is agricultural biomass dust combustible?",
  answer:
   "Yes. Crop residue fines are a combustible organic dust in Class II Group G. Because feedstock varies by crop, season and supplier, severity varies too — periodic retesting describes the stream better than a single characterisation does.",
 },
 {
  question: "Why does silica come into it?",
  answer:
   "Several crop residues carry significant silica content, with rice husk the most notable. That brings respirable crystalline silica exposure into an operation that may be assessing itself purely as a biomass dust site, and silica has its own exposure limits and health consequences.",
 },
 {
  question: "Is mould a real concern in handling?",
  answer:
   "Yes. Crop material stored before use develops mould, and handling disperses spores along with the dust. Respiratory effects from bioaerosol exposure in agricultural handling are well recognised, which is another reason retained filtration matters here.",
 },
 {
  question: "Does stored crop residue self-heat?",
  answer:
   "Bulk crop residue heats in stockpiles and bunkers through biological activity, with no external ignition source required. Storage monitoring belongs alongside the housekeeping programme.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Biomass Dust guide", href: "/materials/biomass-dust" },
 { label: "Grain Dust guide", href: "/materials/grain-dust" },
 { label: "Silica Dust guide", href: "/materials/silica-dust" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 { label: "Energy & Power deep dive", href: "/industries/energy" },
 ],
};
