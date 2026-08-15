import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const paprikaDustGuide: MaterialGuideData = {
 slug: "paprika-dust",
 name: "Paprika Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Paprika Dust — Combustible Dust Control",
  description:
   "Ground paprika is a fine combustible organic dust with sugar and oil content that makes deposits tacky and staining. How to recover it without spreading colour and fuel through the plant.",
 },
 heroIntro:
  "Built for grinding and blending lines handling a powder that announces every housekeeping failure in colour. Paprika is fine, light and carries both sugar and oil content, so deposits are tacky, they stain, and they build on surfaces rather than shedding.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Grinding, milling, sifting, blending, filling and packing" },
 { label: "Distinguishing property", value: "Sugar and oil content produce tacky, strongly staining deposits that resist brushing" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Dried peppers are milled to paprika powders across several grades, and the grinding operation produces the fine fraction that suspends most readily. Sifting, blending and filling liberate it again, and the low density carries it through the building on ordinary air movement.",
 "Sugar and oil content give paprika two practical characteristics. Deposits are tacky and adhere to warm equipment surfaces rather than shedding, so layers build and resist ordinary cleaning. And the pigment stains, which means accumulation is unusually visible — a rare case where the housekeeping problem advertises itself. That visibility is worth using: where paprika deposits appear on high steel and duct tops is a direct map of where the finer, less visible fraction of every other powder in the building is settling too.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes paprika dust worth controlling",
 risks: [
 "Combustible organic dust: a fine milled powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Tacky adherent deposits: sugar and oil content make accumulation stick to warm surfaces and resist brushing.",
 "Staining: pigment carries into adjacent products and onto surfaces, making redistribution a visible quality failure.",
 "Mill concentration: grinding produces the finest fraction alongside mechanical ignition sources.",
 "Overhead accumulation: light fines settle on beams and duct tops, where deposits are visible but rarely cleaned.",
 "Cross-contact control: colour and aromatics carry into adjacent lines, so dispersal is a product-integrity problem.",
 ],
 solutions: [
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path from hose tip to container.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "HEPA filtration tested to 99.99% at 0.3 um so the respirable fraction is retained rather than returned to the room.",
 "Elimination of compressed-air blowdown, which converts settled fines directly into a suspended cloud.",
 "Defined-frequency recovery on high steel, equipment housings, conveyor runs and packing lines.",
 "One documented cleaning pass serving both the dust programme and sanitation records.",
 ],
 configuration: [
 { step: "Find where the fines are made", detail: "Milling, sifting, blending and transfer produce the finest fraction. Start the programme there rather than where the floor looks worst." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the classification for handling areas, which determines which equipment is eligible." },
 { step: "Specify the conductive chain", detail: "Anti-static hose and conductive accessories bonded to the unit — the accessory chain is part of the grounding path, not an add-on." },
 { step: "Match filtration to the fraction", detail: "Fine food powders defeat general-purpose filtration. Retained HEPA keeps the respirable fraction out of the room." },
 { step: "Write frequencies into the DHA", detail: "A Dust Hazard Analysis turns the accumulation map into defined intervals and a record that the pass happened." },
 ],
 bestPractices: [
 "Treat equipment enclosures as priority accumulation zones, not occasional deep-clean targets.",
 "Never blow down with compressed air; it creates precisely the suspended cloud the programme exists to prevent.",
 "Include high steel, duct tops and above suspended ceilings in the schedule — that is where secondary-event fuel sits.",
 "Ground and bond the whole recovery chain and inspect anti-static hoses as routine.",
 "Empty collection into sealed disposal away from ignition sources rather than tipping containers in place.",
 "Use the cleaning record for both sanitation and dust-programme documentation.",
 ],
 faqs: [
 {
  question: "Is paprika dust combustible?",
  answer:
   "Yes. Ground paprika is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Sugar and oil content affect its behaviour, and severity for your grade is established by testing it.",
 },
 {
  question: "Why do paprika deposits resist cleaning?",
  answer:
   "Sugar and oil content make the fines tacky, so they adhere to warm equipment surfaces instead of shedding. Brushing smears rather than removes them, and the layer keeps building between deep cleans.",
 },
 {
  question: "Is the staining useful for anything?",
  answer:
   "It is, as a diagnostic. Where paprika shows up on high steel and duct tops is a visible map of where all the finer, less visible dust in the building is settling. Use it to set the accumulation survey rather than treating it purely as a cleanliness nuisance.",
 },
 {
  question: "Can we use the same unit on other spice lines?",
  answer:
   "Only where colour and aroma cross-contact is acceptable, which it usually is not. Dedicated units or dedicated accessory sets per line are the common arrangement in spice operations.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Spice Dust guide", href: "/materials/spice-dust" },
 { label: "Pigment Dust guide", href: "/materials/pigment-dust" },
 { label: "Pepper Dust guide", href: "/materials/pepper-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
