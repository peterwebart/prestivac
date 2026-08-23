import { Filter, Flame, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const milkPowderGuide: MaterialGuideData = {
 slug: "milk-powder",
 name: "Milk Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Milk Powder — Combustible Dust Control",
  description:
   "Spray-dried milk powder is a combustible organic dust with a high fat and protein content that makes residues sticky and self-heating a genuine concern.",
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
 "Explosion-proof recovery sized for the dryer hall, where the finest fraction and the most heat occur together.",
 "Heated-surface cleaning on a defined interval, because fat-bearing deposits bake on rather than brushing off.",
 "HEPA-filtered collection so the respirable fraction leaves the building instead of resettling on warm plant.",
 "Sealed container removal, keeping the emptying step out of the dryer and packing areas entirely.",
 "Conductive, grounded and bonded hose and tool sets throughout pneumatic conveying zones.",
 "Cleaning records that satisfy the dust programme and the dairy sanitation regime in one pass.",
 ],
 configuration: [
 { step: "Start at the dryer discharge", detail: "Spray drying and cyclone handling produce the finest powder in the plant and combine it with the most heat." },
 { step: "Map the warm surfaces", detail: "Fat-bearing deposits adhere where surfaces run warm — dryer skins, conveying lines, motor housings. Those are the priority, not the floor." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the classification for drying and conveying areas." },
 { step: "Specify for adhesion, not just fines", detail: "Deposits that stick need contact tooling, not only suction. Brush and scraper tools belong in the accessory set." },
 { step: "Set frequency against self-heating", detail: "Warm fat-bearing accumulation supports self-heating, so the interval is a fire control rather than a cleanliness one." },
 ],
 bestPractices: [
 "Clean warm surfaces before deposits bake into layers that no longer respond to brushing.",
 "Treat the dryer and cyclone envelope as the highest-priority zone in the building.",
 "Never blow down near the packing line — it puts product-contact surfaces into the airborne path.",
 "Inspect the grounding path through pneumatic conveying runs as a routine item.",
 "Empty into sealed disposal away from heat sources, given the self-heating behaviour.",
 "Log every pass so sanitation and the dust programme share one record.",
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
