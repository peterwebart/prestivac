import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const proteinPowderGuide: MaterialGuideData = {
 slug: "protein-powder",
 name: "Protein Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Protein Powder — Combustible Dust Control",
  description:
   "Protein powders are fine combustible organic dusts produced in high-throughput blending and filling operations. Where they accumulate and how explosion-proof HEPA recovery controls them.",
 },
 heroIntro:
  "Built for the blending and filling rooms behind the supplement industry, where large volumes of very fine powder move through the building every shift. Protein powders are light, readily suspended and blended in operations that put the finest fraction into the air by design.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic protein dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Blending, sifting, pneumatic conveying, tote dumping, filling and packing" },
 { label: "Distinguishing property", value: "High-throughput blending and manual tote dumping put large volumes of very fine powder into the air" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Protein powder manufacturing is a blending operation more than a chemical one: bulk protein isolates and concentrates arrive as fine powders, are dumped into blenders with flavourings and additives, then sifted, conveyed and filled. Manual tote and sack dumping is where the largest single release usually happens, and it happens repeatedly through every shift.",
 "The fine particle size that gives the product its mouthfeel and dispersibility is the same particle size that suspends readily and travels. Because the operations are high-throughput and largely open at the dump station, the airborne load in these rooms can be substantial without anything having gone wrong. That makes source capture at the dump point and defined-frequency overhead recovery the two interventions that change the accumulation picture most.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes protein powder worth controlling",
 risks: [
 "Combustible organic dust: fine protein powder that suspends readily and carries deflagration conditions inside blenders and enclosures.",
 "Manual dumping releases: tote and sack dumping is the largest single release point and repeats through every shift.",
 "High throughput: large volumes mean accumulation builds quickly, so intervals that suit a low-volume plant are inadequate here.",
 "Overhead accumulation: light fines reach beams, duct tops and above suspended ceilings across the whole room.",
 "Static in dry handling: dry powder through chutes and pneumatic lines accumulates charge, so a bonded conductive path matters throughout.",
 "Allergen cross-contact: dairy, soy and other allergen-bearing proteins share equipment, making redistribution a labelling exposure.",
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
  question: "Are protein powders combustible?",
  answer:
   "Yes. Protein isolates and concentrates are fine organic dusts and behave as combustible dusts when dispersed, sitting in Class II Group G. Severity depends on particle size and composition, established by testing the material as your process handles it.",
 },
 {
  question: "Where is the biggest release point?",
  answer:
   "Manual tote and sack dumping into blenders, in most operations. It is open by design, it repeats through every shift, and it releases a large volume of very fine powder in a short time. Source capture there changes the airborne load more than any other single intervention.",
 },
 {
  question: "How often should overhead cleaning happen?",
  answer:
   "More often than a low-throughput plant, because accumulation tracks volume. The interval belongs in the Dust Hazard Analysis rather than being set by appearance — by the time overhead deposits are visible from the floor, the inventory is already substantial.",
 },
 {
  question: "Does shared equipment create an allergen problem?",
  answer:
   "It can. Dairy and soy proteins are major allergens and blending lines frequently share equipment. Dedicated units or accessory sets, and a documented cleaning pass between products, are the usual controls.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Whey Powder guide", href: "/materials/whey-powder" },
 { label: "Soy Protein guide", href: "/materials/soy-protein" },
 { label: "Pea Protein guide", href: "/materials/pea-protein" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
