import { Filter, Flame, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const milkPowderGuide: MaterialGuideData = {
 slug: "milk-powder",
 name: "Milk Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Milk Powder — Combustible Dust Control",
  description:
   "Spray-dried milk powder is a combustible organic dust with a high fat and protein content that makes residues sticky and self-heating a genuine concern. Where it accumulates in drying and packing, and how to recover it safely.",
 },
 heroIntro:
  "Built for the fines that spray-drying and pneumatic conveying leave behind. Milk powder is light, readily suspended and — because of its fat content — leaves residues that bake onto warm surfaces rather than brushing off, which is exactly the accumulation that a primary event would loft.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Flame, title: "Self-Heating Risk", detail: "Fat-bearing deposits in warm locations" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Spray dryer discharge, cyclones, pneumatic conveying, sifting, bagging and packing" },
 { label: "Distinguishing property", value: "Fat content produces sticky residues on warm surfaces and supports self-heating in accumulated deposits" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61 for agricultural and food processing" },
 ],
 overview: [
 "Spray drying turns liquid milk into a fine free-flowing powder, and every stage after that point generates airborne fines: dryer discharge, cyclone and baghouse handling, pneumatic conveying, sifting, blending, and the bagging line. The particle size that makes the product dissolve well is the same particle size that suspends readily and travels through a building.",
 "What separates milk powder from a dry mineral dust is its composition. Fat and protein content mean deposits on warm surfaces do not stay loose — they soften, adhere and build into layers that resist ordinary cleaning, and accumulated deposits in warm locations can support self-heating. That combination matters because the layer is both the fuel a secondary event would use and a fire risk in its own right, and because it is precisely the deposit that a broom will not remove.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes milk powder worth controlling",
 risks: [
 "Combustible organic dust: fine, dry and readily suspended at every transfer point, with deflagration conditions routinely present inside enclosures.",
 "Fat-bearing residues: deposits adhere to warm surfaces near dryers and conveying lines rather than remaining loose, building layers that ordinary cleaning misses.",
 "Self-heating in accumulation: warm deposits of fat-bearing powder can support self-heating, which is a fire path independent of any external ignition source.",
 "Dryer and cyclone concentration: the equipment producing the finest fraction combines it with heat and mechanical ignition sources in one place.",
 "Overhead accumulation: light fines settle on beams, duct tops and above suspended ceilings, which is the inventory a primary event would loft.",
 "Sanitation overlap: residues are a microbiological and allergen concern as well as a fire one, so cleaning must satisfy both records.",
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
  question: "Is milk powder combustible?",
  answer:
   "Yes. Spray-dried milk powder is a fine organic dust and behaves as a combustible dust, suspending readily at transfer points. It sits in Class II Group G, the non-conductive dust group. The severity for your specific powder depends on particle size, fat content and moisture, which is established by testing the material as your process produces it.",
 },
 {
  question: "Why do milk powder deposits stick to equipment?",
  answer:
   "Fat content. On warm surfaces near dryers and conveying lines the deposit softens and adheres rather than staying loose, then builds in layers. That is why sweeping and wiping leave a residue behind and why the accumulation continues to grow between deep cleans.",
 },
 {
  question: "Can milk powder self-heat?",
  answer:
   "Accumulated deposits of fat-bearing powder in warm locations can support self-heating. That is a fire path that does not need an external ignition source, and it is a reason to remove deposits on a defined schedule rather than when they become visible.",
 },
 {
  question: "Does the same vacuum handle allergen control?",
  answer:
   "A unit with retained HEPA filtration removes the powder from the building rather than redistributing it, which serves both the dust programme and allergen segregation. Where different products must not cross-contact, dedicated units or dedicated accessories per line are the usual arrangement.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Whey Powder guide", href: "/materials/whey-powder" },
 { label: "Protein Powder guide", href: "/materials/protein-powder" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
