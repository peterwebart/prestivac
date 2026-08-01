import { FileText, Filter, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const paperDustGuide: MaterialGuideData = {
 slug: "paper-dust",
 name: "Paper & Pulp Dust",
 groupCrumb: { label: "Paper & Textile Dusts", anchor: "paper-textile-dusts" },
 seo: {
 title: "How to Safely Recover Paper & Pulp Dust?",
 description:
 "Paper and pulp dust is combustible cellulose — a particulate solid under NFPA 660 that deflagrates like any fine organic dust, and a fibrous one that mats, clings and clogs. Generated wherever paper is converted, printed or packaged, it is recovered grounded and HEPA-retained, with frequent housekeeping the core control.",
 },
 heroIntro:
 "The familiar material that becomes a combustible dust the moment it is worked — paper and pulp dust is cellulose, and cellulose burns. As a fine dust it is a combustible particulate solid that deflagrates like flour or wood, and as a fibrous one it mats, clings and clogs. It turns up wherever paper is converted, printed or packaged, and the control is consistent: grounded, HEPA-retained recovery and frequent housekeeping.",
 badges: [
 { icon: Flame, title: "Combustible Cellulose", detail: "A fine organic dust that deflagrates" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine paper & fiber retained" },
 { icon: FileText, title: "Built for Paper", detail: "Converting, printing, packaging" },
 { icon: ShieldCheck, title: "Fibrous & Clinging", detail: "It mats and accumulates" },
 ],
 facts: [
 { label: "Combustibility", value: "A combustible cellulose particulate solid under NFPA 660 — it deflagrates like any fine organic dust" },
 { label: "Physical behavior", value: "Fibrous — it mats, clings and accumulates on surfaces and in ducts" },
 { label: "Recycled fiber", value: "Recycled-fiber dust can carry contaminants picked up in prior use" },
 { label: "Where it arises", value: "Converting, printing, packaging and especially tissue operations" },
 ],
 overview: [
 "Paper and pulp dust is a case study in a benign material turning hazardous once divided finely enough. Bulk paper is inert to the eye, but the dust from cutting, slitting, sheeting, folding and converting is combustible cellulose — a particulate solid under NFPA 660 that will deflagrate given the right particle size, concentration and ignition source, exactly as flour or wood dust does. It is also physically awkward: fibrous, it mats and clings to machinery, packs into ducts, and builds up on overhead surfaces, which is both a housekeeping burden and a way for fugitive fuel to accumulate unseen.",
 "This is the material behind several of the paper-sector industries — it is the dust generated in paper mills and converting, in commercial printing, and in paper and packaging converting, and the recovery approach is shared across all of them. Tissue and towel operations are the dustiest, throwing off the finest fraction; recycled-fiber streams add the possibility of contaminants carried over from prior use. Across the board the discipline is grounded, rated recovery treating the dust as the combustible cellulose it is, HEPA retention for the fine fraction, and frequent, disciplined housekeeping — because with a dust that clings and mats, keeping accumulation below threshold is the core control.",
 ],
 industries: [
 { label: "Paper Mills & Converting", href: "/industries/paper-mills" },
 { label: "Commercial Printing", href: "/industries/printing" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Woodworking", href: "/industries/woodworking" },
 { label: "General Maintenance", href: "/applications/warehouse-housekeeping" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Combustible cellulose dust that deflagrates like any fine organic dust",
 "Fibrous dust that mats, clings and packs into ducts and machinery",
 "Fugitive accumulation on overhead surfaces building unseen fuel",
 "Recycled-fiber dust carrying contaminants from prior use",
 "Tissue and fine-paper operations producing the finest, most ignitable fraction",
 ],
 solutions: [
 "Grounded, rated recovery treating the dust as combustible cellulose",
 "HEPA retention for the fine paper and fiber fraction",
 "Frequent, disciplined housekeeping — the core control for a clinging dust",
 "Capture at converting, printing and packaging points of generation",
 "Contaminant awareness where recycled fiber is processed",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for paper dust, trim and fiber" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the dust", detail: "Rated for combustible cellulose per its behavior" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained; clinging fiber cleared before it accumulates" },
 ],
 bestPractices: [
 "Treat paper and pulp dust as the combustible cellulose it is",
 "Keep after it frequently — fibrous dust mats and clings quickly",
 "Watch overhead surfaces and ducts where fugitive fuel hides",
 "Give tissue and fine-paper operations extra attention — they are dustiest",
 "Account for contaminants where recycled fiber is processed",
 ],
 faqs: [
 {
 question: "Is paper dust really combustible?",
 answer:
 "Yes — paper and pulp dust is combustible cellulose, a particulate solid under NFPA 660 that deflagrates like flour or wood dust given the right particle size, concentration and ignition source. Bulk paper is inert, but the fine dust from cutting, converting and finishing is a genuine combustible-dust hazard.",
 },
 {
 question: "Why is paper dust such a housekeeping problem?",
 answer:
 "Because it is fibrous — it mats and clings to machinery, packs into ducts, and builds up on overhead surfaces rather than settling neatly. That makes accumulation both hard to see and quick to occur, so frequent, disciplined HEPA-retained housekeeping is the core control for keeping fugitive fuel below threshold.",
 },
 {
 question: "Where does paper and pulp dust come from?",
 answer:
 "Converting operations — slitting, sheeting, folding and forming — along with commercial printing and paper-and-packaging converting, with tissue and towel operations the dustiest of all. It is the shared dust behind the paper-mills, printing and paper-and-packaging industries, which each cover the sector context in more detail.",
 },
 {
 question: "Does recycled fiber change the hazard?",
 answer:
 "It can add a contaminant dimension. Recycled-fiber streams may carry material picked up in prior use, so beyond the baseline combustible-cellulose handling, recovery accounts for whatever contaminants the specific stream might contain, captured HEPA-retained and sealed.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
   { label: "Packaging converting case study", href: "/case-studies/paper-dust-packaging-converting" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Paper Mills deep dive", href: "/industries/paper-mills" },
 { label: "Commercial Printing deep dive", href: "/industries/printing" },
 { label: "Paper & Packaging deep dive", href: "/industries/paper-packaging" },
 ],
};
