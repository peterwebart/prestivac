import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const maltDustGuide: MaterialGuideData = {
 slug: "malt-dust",
 name: "Malt Dust",
 groupCrumb: { label: "Agricultural Dusts", anchor: "agricultural-dusts" },
 seo: {
 title: "Malt Dust — Combustibility, Respiratory Hazards &",
 description:
 "Malt dust is a combustible grain-derived dust with a respiratory dimension of its own. Where it accumulates in malting, brewing and distilling, and how explosion-proof vacuum recovery controls it.",
 },
 heroIntro:
 "Built for the dust that brewing and distilling generate at every transfer. Malt is grain, so it carries the grain dust explosion record with it - and malting adds a respiratory hazard of its own that ordinary grain handling does not.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Grain-Derived Dust", detail: "Combustible organic dust from barley and other grains" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust from malted grain, chiefly barley" },
 { label: "Where it is generated", value: "Malting, milling, grist handling, mash tun charging, spent-grain handling" },
 { label: "Respiratory dimension", value: "Malt dust exposure is associated with occupational asthma and hypersensitivity responses" },
 { label: "Governing standards", value: "NFPA 660 (consolidating the former NFPA 61); OSHA grain handling provisions where applicable" },
 ],
 overview: [
 "Malt dust is grain dust with extra steps. Barley is steeped, germinated and kilned, then milled to grist - and every one of those transfers abrades fines. The result is a fine, dry organic dust that suspends easily, accumulates on high steel and inside equipment, and belongs squarely in the combustible dust conversation that NFPA 660 now governs after consolidating the former NFPA 61 for agricultural and food processing. Maltings, breweries and distilleries all generate it, and the grist mill and mash tun charging point are usually where the inventory is largest.",
 "What distinguishes malt from generic grain dust is the respiratory picture. Malt dust exposure is associated with occupational asthma, and malting has a documented history of hypersensitivity responses linked to fungal contamination of germinating and kilned grain - the condition described historically as malt worker's lung arises from mould exposure in that environment rather than from the grain itself. That means the cleaning programme is doing two jobs: removing the fuel that a primary ignition would disperse, and reducing the airborne organic load that operators inhale shift after shift.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Cannabis", href: "/industries/cannabis" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 ],
 riskHeading: "What makes malt dust a two-sided problem",
 risks: [
 "Combustible organic dust: malt is grain-derived, fine and dry, and suspends readily - the conditions a deflagration needs are routinely present at transfers.",
 "Accumulation on high steel: fines settle on beams, ledges, duct tops and equipment housings, which is precisely the fuel inventory that turns a primary event into a secondary one.",
 "Grist mill concentration: milling generates the finest fraction in the building, and mill enclosures combine fuel, confinement and mechanical ignition sources.",
 "Respiratory exposure: malt dust is associated with occupational asthma, and malting environments have a documented history of hypersensitivity responses linked to fungal contamination.",
 "Spent grain and moisture: wet spent grain handling introduces mould growth potential where residue is left in place.",
 "Static in dry conveying: dry grist moving through chutes and pneumatic lines accumulates charge, so conductive, bonded equipment matters throughout.",
 ],
 solutions: [
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path so the cleaning pass cannot become the ignition source.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "HEPA filtration tested to 99.99% at 0.3 um, keeping fine organic dust out of the air operators breathe during cleaning.",
 "Retirement of compressed-air blowdown in grist and malt handling areas, which otherwise creates the suspended cloud directly.",
 "Defined-frequency recovery on high steel, mill enclosures, conveyor runs and the mash tun charging area.",
 "Prompt removal of spent grain residue so damp organic material is not left to develop mould in place.",
 ],
 configuration: [
 { step: "Map where fines are generated", detail: "Milling and transfer points produce the finest fraction. Start the programme where the material is finest, not where the floor looks worst." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the classification for grist and handling areas, and that determines acceptable equipment." },
 { step: "Specify the conductive chain", detail: "Anti-static hose and conductive accessories bonded to the unit - the accessory chain is part of the grounding path." },
 { step: "Address both hazards in one pass", detail: "Retained HEPA filtration means the same cleaning that removes fuel also reduces the inhalable organic load." },
 { step: "Write frequencies into the DHA", detail: "A Dust Hazard Analysis converts the accumulation map into defined intervals and a record that the pass happened." },
 ],
 bestPractices: [
 "Treat the grist mill and its surroundings as the highest-priority accumulation zone in the building.",
 "Never blow down malt dust with compressed air; it converts a settled layer into a cloud in seconds.",
 "Include high steel, duct tops and mill enclosure interiors in the schedule, not just accessible floors.",
 "Clear spent grain residue promptly rather than allowing damp organic material to sit and develop mould.",
 "Ground and bond the whole recovery chain, and inspect anti-static hoses as a routine item.",
 "Use the cleaning record to serve both the dust programme and sanitation documentation.",
 ],
 faqs: [
 {
 question: "Is malt dust combustible?",
 answer:
 "Yes. Malt is grain-derived, and malt dust is a fine, dry combustible organic dust that suspends readily at transfer points. It belongs in the same conversation as grain and flour dust, governed by NFPA 660 following its consolidation of the former NFPA 61 for agricultural and food processing. Your specific material's behaviour is established by testing, since particle size and moisture change the result.",
 },
 {
 question: "Is malt dust harmful to breathe?",
 answer:
 "Malt dust exposure is associated with occupational asthma, and malting environments have a documented history of hypersensitivity responses linked to fungal contamination of germinating and kilned grain. That respiratory dimension is why retained HEPA filtration matters in a malt house - cleaning should reduce the inhalable load, not redistribute it.",
 },
 {
 question: "Where does malt dust accumulate in a brewery or distillery?",
 answer:
 "Wherever malt is moved or reduced: intake and conveying, the grist mill and its enclosure, chutes and transfer points, and the mash tun charging area. The dust that matters most for explosion risk is the fine fraction that settles on high steel, ledges and duct tops, away from where anyone routinely looks.",
 },
 {
 question: "Can we just sweep the malt house floor?",
 answer:
 "Sweeping lofts the fines and leaves the accumulations that actually feed a secondary event untouched, since those sit above head height. Vacuum recovery with a grounded, bonded, HEPA-filtered unit removes the material instead of relocating it, and reaches the surfaces a broom never will.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "central-vacuum-systems", "hepa-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Grain Dust guide", href: "/materials/grain-dust" },
 { label: "Starch Dust guide", href: "/materials/starch-dust" },
 { label: "Silo & Bin Cleaning guide", href: "/applications/silo-cleaning" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
