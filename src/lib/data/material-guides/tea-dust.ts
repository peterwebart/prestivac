import { Filter, Leaf, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const teaDustGuide: MaterialGuideData = {
 slug: "tea-dust",
 name: "Tea Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
 title: "Tea Dust — Combustibility, Respiratory Hazards & Safe Recovery",
 description:
 "Tea dust and fannings are a combustible organic dust with a documented respiratory dimension. Where they accumulate in blending, sifting and packing, and how explosion-proof HEPA recovery controls both hazards.",
 },
 heroIntro:
 "Built for the fine fraction that every tea operation produces and few account for. Cutting, sorting, blending and packing all abrade leaf into dust and fannings — a light organic powder that suspends easily, and one with a respiratory record among tea workers as well as a combustible-dust classification.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Leaf, title: "Organic Combustible Dust", detail: "Fine, dry and readily airborne" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust from processed tea leaf" },
 { label: "Where it is generated", value: "Cutting, sorting, sifting, blending, bagging and packing" },
 { label: "Respiratory dimension", value: "Tea dust exposure is associated with occupational asthma and reduced lung function in tea workers" },
 { label: "Governing standards", value: "NFPA 660 (consolidating the former NFPA 61)" },
 ],
 overview: [
 "Tea is handled as a dry leaf product, and every mechanical step reduces some of it to dust. Cutting and sorting break leaf; sifting separates grades and liberates fannings; blending tumbles material and lifts fines; bagging and packing release them again at the point of transfer. The result is a light, dry organic powder that stays airborne long enough to travel and settles on high steel, ducting and equipment housings well away from where it was created.",
 "That puts tea dust in the same category as other food and agricultural dusts: a combustible organic dust governed by NFPA 660 following its consolidation of the former NFPA 61. It also carries a respiratory story of its own — tea dust exposure has been associated with occupational asthma and measurable reductions in lung function among workers in tea processing, which means the cleaning programme is doing two jobs. Removing accumulation takes away the fuel a primary ignition would disperse, and retained filtration keeps the fine fraction out of the air people breathe while cleaning.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cannabis", href: "/industries/cannabis" },
 { label: "Textile", href: "/industries/textile" },
 ],
 riskHeading: "What makes tea dust worth controlling",
 risks: [
 "Combustible organic dust: fine, dry and readily suspended at every transfer, with the deflagration conditions routinely present inside enclosures.",
 "Accumulation above head height: light fines settle on beams, ledges, duct tops and equipment housings — the surfaces that feed a secondary event and get inspected least.",
 "Respiratory exposure: tea dust has been associated with occupational asthma and reduced lung function in processing workers, so the airborne load matters shift after shift.",
 "Sifting and blending concentration: grading and blending equipment produces the finest fraction in the building and combines it with mechanical ignition sources.",
 "Static in dry handling: dry leaf and fines moving through chutes and pneumatic lines accumulate charge, so conductive, bonded equipment matters throughout.",
 "Sanitation overlap: fines are also a cross-contact and pest concern, so cleaning has to satisfy sanitation records as well as fire prevention.",
 ],
 solutions: [
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path from hose tip to container.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "HEPA filtration tested to 99.99% at 0.3 um so the respirable fraction is retained rather than returned to the room.",
 "Elimination of compressed-air blowdown in blending and packing areas, which converts settled fines directly into a cloud.",
 "Defined-frequency recovery on high steel, sifter and blender housings, conveyor runs and packing lines.",
 "One documented cleaning pass serving both the dust programme and sanitation records.",
 ],
 configuration: [
 { step: "Find where the fines are made", detail: "Sifting, grading and blending produce the finest fraction. Start the programme there rather than where the floor looks worst." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the classification for handling and blending areas, which determines acceptable equipment." },
 { step: "Specify the conductive chain", detail: "Anti-static hose and conductive accessories bonded to the unit — the accessory chain is part of the grounding path." },
 { step: "Address both hazards in one pass", detail: "Retained HEPA filtration means the cleaning that removes fuel also reduces the inhalable organic load." },
 { step: "Write frequencies into the DHA", detail: "A Dust Hazard Analysis turns the accumulation map into defined intervals and a record that the pass happened." },
 ],
 bestPractices: [
 "Treat sifter and blender enclosures as priority accumulation zones, not as occasional deep-clean targets.",
 "Never blow down tea dust with compressed air; it creates precisely the suspended cloud the programme exists to prevent.",
 "Include high steel and duct tops in the schedule, since that is where the secondary-event fuel sits.",
 "Ground and bond the whole recovery chain and inspect anti-static hoses as routine.",
 "Empty collection into sealed disposal away from ignition sources rather than tipping containers in place.",
 "Use the cleaning record for both sanitation and dust-programme documentation.",
 ],
 faqs: [
 {
 question: "Is tea dust combustible?",
 answer:
 "Yes. Tea dust and fannings are a fine, dry organic powder and behave as a combustible dust, suspending readily at transfer points. It belongs in the same conversation as other food and agricultural dusts, governed by NFPA 660 following its consolidation of the former NFPA 61. As always, your specific material's behaviour is established by testing, since particle size and moisture change the result.",
 },
 {
 question: "Is tea dust harmful to breathe?",
 answer:
 "Tea dust exposure has been associated with occupational asthma and measurable reductions in lung function among workers in tea processing. That respiratory dimension is why retained HEPA filtration matters in a tea plant — a cleaning pass should reduce the airborne load rather than redistribute it.",
 },
 {
 question: "Where does tea dust accumulate?",
 answer:
 "Wherever leaf is cut, graded, blended or packed. The dust that matters most for explosion risk is the fine fraction that settles above head height — beams, ledges, duct tops and the outside of sifter and blender housings — because that is the inventory a primary event would loft.",
 },
 {
 question: "Can we sweep tea dust instead of vacuuming?",
 answer:
 "Sweeping lofts the fines and cannot reach the overhead surfaces where the real fuel inventory sits. Vacuum recovery with a grounded, bonded, HEPA-filtered unit removes the material from the building instead of relocating it, and reaches the surfaces a broom never will.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Coffee Dust guide", href: "/materials/coffee-dust" },
 { label: "Tobacco Dust guide", href: "/materials/tobacco-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
