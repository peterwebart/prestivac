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
