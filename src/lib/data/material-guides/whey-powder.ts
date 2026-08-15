import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const wheyPowderGuide: MaterialGuideData = {
 slug: "whey-powder",
 name: "Whey Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Whey Powder — Combustible Dust Control",
  description:
   "Whey powder is a fine hygroscopic protein dust that cakes as it picks up moisture and suspends readily when disturbed. Where it accumulates in dairy processing and how explosion-proof HEPA recovery controls it.",
 },
 heroIntro:
  "Built for a powder that changes character with the humidity in the room. Whey is fine, light and hygroscopic — it draws moisture, cakes on surfaces, then breaks back into an airborne fraction the moment something disturbs it, which makes accumulation easy to underestimate.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic protein dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Drying, milling, sifting, blending, pneumatic conveying and bagging" },
 { label: "Distinguishing property", value: "Hygroscopic — cakes with ambient moisture, then re-suspends as fines when disturbed" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Whey is a by-product stream turned into a high-value powder, and the processing that concentrates and dries it also produces a very fine fraction. Drying, milling, sifting, blending and pneumatic transfer all liberate airborne powder, and the bagging line releases it again at every fill.",
 "Its hygroscopic behaviour is what makes housekeeping deceptive. A deposit that has drawn ambient moisture looks caked and stable — visually it reads as something that will stay put. Mechanical disturbance, vibration or airflow breaks it back into fines, so the accumulation is an inventory of suspendable fuel rather than an inert crust. That is why the assessment should be based on where deposits form rather than on how loose they currently appear.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes whey powder worth controlling",
 risks: [
 "Combustible organic dust: a fine protein powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Deceptive caking: hygroscopic deposits look stable but break back into airborne fines under vibration or disturbance.",
 "Milling and sifting concentration: the equipment producing the finest fraction sits alongside mechanical ignition sources.",
 "Overhead accumulation: light fines reach beams, duct tops and above suspended ceilings, which is the secondary-event fuel inventory.",
 "Static in dry handling: dry powder moving through chutes and pneumatic lines accumulates charge, so a conductive bonded path matters throughout.",
 "Allergen and sanitation overlap: dairy protein residues are a cross-contact concern, so cleaning has to satisfy both records.",
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
  question: "Is whey powder a combustible dust?",
  answer:
   "Yes. It is a fine organic protein powder and behaves as a combustible dust when dispersed. It sits in Class II Group G. Severity depends on particle size and moisture content, established by testing the material as your process produces it.",
 },
 {
  question: "Caked whey looks stable — is it still a hazard?",
  answer:
   "Yes, and this is the point most often missed. A hygroscopic deposit that has drawn ambient moisture looks like an inert crust, but vibration or airflow breaks it back into suspendable fines. Treat it as an accumulation of fuel rather than as something that has settled permanently.",
 },
 {
  question: "Where should we start cleaning?",
  answer:
   "Where the finest fraction is produced — milling, sifting and blending — and overhead, where light fines settle out of sight. The floor usually looks worse and matters less than the beams, duct tops and equipment housings above head height.",
 },
 {
  question: "Can we use the same vacuum across different product lines?",
  answer:
   "Only where cross-contact is acceptable. Dairy protein is an allergen concern, so many facilities dedicate units or accessory sets per line. The equipment decision follows the segregation policy rather than the other way round.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Milk Powder guide", href: "/materials/milk-powder" },
 { label: "Protein Powder guide", href: "/materials/protein-powder" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
