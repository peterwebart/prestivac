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
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path from hose tip to container.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "HEPA filtration tested to 99.99% at 0.3 um so the respirable fraction is retained rather than returned to the room.",
 "Elimination of compressed-air blowdown, which converts settled material directly into a suspended cloud.",
 "Defined-frequency recovery on high steel, equipment housings, conveyor runs and transfer points.",
 "Sealed container removal so collected material leaves the area without a second dispersal event.",
 ],
 configuration: [
 { step: "Identify where the fines are made", detail: "Size reduction, transfer and separation produce the finest fraction. Start there rather than where the floor looks worst." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the area classification, which determines which equipment is eligible." },
 { step: "Specify the conductive chain", detail: "Anti-static hose and conductive accessories bonded to the unit — the accessory chain is part of the grounding path." },
 { step: "Match filtration to the fraction", detail: "Fine dusts defeat general-purpose filtration. Retained absolute filtration keeps the respirable fraction out of the room." },
 { step: "Write frequencies into the DHA", detail: "A Dust Hazard Analysis turns the accumulation map into defined intervals and a record that the pass happened." },
 ],
 bestPractices: [
 "Treat equipment enclosures and overhead steel as priority accumulation zones rather than occasional deep-clean targets.",
 "Never blow down with compressed air; it creates precisely the suspended cloud the programme exists to prevent.",
 "Include duct tops, cable trays and above suspended ceilings in the schedule — that is where secondary-event fuel sits.",
 "Ground and bond the whole recovery chain and inspect anti-static hoses as routine.",
 "Empty collection into sealed disposal away from ignition sources rather than tipping containers in place.",
 "Record each pass so the housekeeping frequency is evidenced rather than asserted.",
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
