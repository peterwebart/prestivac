import { Filter, ScrollText, ShieldCheck, TreePine } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const sawdustGuide: MaterialGuideData = {
 slug: "sawdust",
 name: "Sawdust",
 groupCrumb: { label: "Biomass & Renewable Energy Dusts", anchor: "biomass-dusts" },
 seo: {
  title: "Sawdust — Combustible Dust & Recovery",
  description:
   "The fine fraction in sawdust is what matters, not the visible shavings. Where it accumulates in woodworking and how to remove it rather than relocate it.",
 },
 heroIntro:
  "Built for the part of sawdust that nobody sees. Visible shavings and chips on the floor are a housekeeping nuisance; the fine fraction that travelled and settled on overhead steel is the fuel inventory that turns an equipment fire into a building one.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: TreePine, title: "Fine Fraction Matters", detail: "Shavings are visible; fines are the hazard" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains respirable wood dust" },
 { icon: ScrollText, title: "Standards", detail: "NFPA 660, consolidating the former NFPA 664" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Sawing, routing, sanding, planing, CNC machining, edge banding and dust extraction maintenance" },
 { label: "Distinguishing property", value: "A wide particle size range where only the fine tail is the deflagration concern" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 664 for wood processing" },
 ],
 overview: [
 "Sawdust spans an enormous particle size range, from visible chips down to a respirable fraction, and the operations producing it differ in what they generate. Sawing and planing make chips and coarse dust; sanding and routing make the fine fraction. CNC machining does both at high volume.",
 "The distinction is what makes sawdust deceptive. A shop can look clean because the chips have been swept while the fine fraction has been travelling on the extraction airflow and settling on rafters, light fittings, duct tops and ledges for years. That accumulation is the material a primary event would loft into a secondary explosion, and it is invisible from floor level. Certain hardwood dusts also carry a recognised occupational health dimension, which makes retained filtration a health control as well as a fire one.",
 ],
 industries: [
 { label: "Woodworking", href: "/industries/woodworking" },
 { label: "Construction Materials", href: "/industries/construction-materials" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 ],
 riskHeading: "What makes sawdust worth controlling",
 risks: [
 "The fine fraction is the hazard: visible chips are a nuisance, while the respirable tail is what fuels a secondary event.",
 "Invisible accumulation: fines settle on rafters, light fittings, duct tops and ledges where nobody looks, sometimes for years.",
 "Sanding and routing: these operations produce the finest fraction and are frequently the least well extracted.",
 "Extraction system deposits: ductwork and collector housings accumulate the fine fraction internally.",
 "Health dimension: certain hardwood dusts carry a recognised occupational health concern, so airborne load matters independently.",
 "Static in extraction: high-velocity air moving dry dust through ducting generates charge, so bonding matters throughout.",
 ],
 solutions: [
 "Overhead recovery on rafters, light fittings and duct tops, where the fine fraction actually accumulates.",
 "Extraction system servicing, since ductwork and collector housings hold the fine fraction internally.",
 "Explosion-proof or appropriately classified equipment for sanding and routing areas.",
 "HEPA-filtered collection, given the recognised health dimension of certain hardwood dusts.",
 "Grounded, bonded conductive path through high-velocity extraction runs.",
 "Cleaning intervals set against the fine fraction rather than the visible chip load.",
 ],
 configuration: [
 { step: "Look above head height", detail: "A shop can look clean while years of fine dust sit on rafters and light fittings." },
 { step: "Separate extraction from housekeeping", detail: "Extraction handles what the tool makes; recovery handles what escaped and settled. They are different jobs." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for sanding and machining areas." },
 { step: "Target sanding and routing", detail: "These produce the fine fraction and are often the least well extracted." },
 { step: "Include the duct interior", detail: "Collector housings and ductwork accumulate the fine fraction where nobody sees it." },
 ],
 bestPractices: [
 "Clean above head height — the floor gets attention and matters least.",
 "Do not treat a dust collector as a substitute for recovery.",
 "Prioritise sanding and routing over sawing areas.",
 "Service ductwork and collector housings on a schedule.",
 "Verify bonding across extraction runs, which generate significant static.",
 "Empty into sealed disposal away from ignition sources.",
 ],
 faqs: [
 {
  question: "Is sawdust really an explosion hazard?",
  answer:
   "The fine fraction is. Chips and shavings are not the concern; the respirable tail that travels and settles overhead is what a primary event would loft into a secondary explosion. That is why a shop can look clean and still hold a substantial fuel inventory.",
 },
 {
  question: "Where should we be cleaning?",
  answer:
   "Above head height. Rafters, light fittings, duct tops, beams and ledges — the surfaces where fines have been settling out of the extraction airflow. The floor is the part that gets attention and matters least.",
 },
 {
  question: "Does a dust collector solve this?",
  answer:
   "It captures at source, which is essential and different from housekeeping. PrestiVac makes industrial vacuums rather than dust collectors — the two do different jobs. Extraction handles what is generated at the tool; vacuum recovery handles what escaped and settled.",
 },
 {
  question: "Is wood dust a health concern as well?",
  answer:
   "Certain hardwood dusts carry a recognised occupational health dimension, which is why retained absolute filtration matters. A unit that exhausts the fine fraction back into the shop increases the airborne load while appearing to clean.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Pellet Dust guide", href: "/materials/pellet-dust" },
 { label: "Woodworking deep dive", href: "/industries/woodworking" },
 { label: "Sanding application", href: "/applications/sanding" },
 { label: "Vacuum vs dust collector", href: "/guides/vacuum-vs-dust-collector" },
 ],
};
