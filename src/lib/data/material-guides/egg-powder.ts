import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const eggPowderGuide: MaterialGuideData = {
 slug: "egg-powder",
 name: "Egg Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Egg Powder — Combustible Dust Control",
  description:
   "Dried egg powder is a fine protein dust with a significant salmonella and allergen dimension alongside its combustibility. How to recover it without redistributing it through the plant.",
 },
 heroIntro:
  "Built for a powder where the microbiological requirement is as demanding as the fire one. Dried egg is fine, light and protein-rich, and a cleaning method that lifts it into the air fails on two counts at once — it disperses combustible fuel and it distributes a pathogen risk across the room.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic protein dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Spray drying, milling, sifting, blending, pneumatic conveying and packing" },
 { label: "Distinguishing property", value: "Carries a microbiological dimension — dispersal is a contamination event as well as a fire risk" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Dried egg products — whole egg, white and yolk powders — are produced by spray drying and then milled, sifted, blended and packed. Each of those steps produces a fine airborne fraction, and the yolk-bearing powders carry enough fat to leave adherent residues on warm surfaces in the same way milk powder does.",
 "What sets egg powder apart is that the housekeeping method has a food-safety consequence. Sweeping or blowing down redistributes a protein powder with a recognised pathogen association across surfaces, equipment and adjacent lines. A recovery method that retains what it collects is therefore doing three jobs at once: removing the fuel inventory that a primary event would loft, keeping the respirable fraction out of the air, and containing a material that must not be spread around the building.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes egg powder worth controlling",
 risks: [
 "Combustible organic dust: fine protein powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Microbiological dispersal: sweeping or blowing down spreads a pathogen-associated powder across equipment and adjacent lines.",
 "Allergen cross-contact: egg is a major allergen, so redistribution is a labelling and recall exposure, not only a hygiene one.",
 "Fat-bearing residues in yolk powders: deposits adhere to warm surfaces rather than remaining loose.",
 "Overhead accumulation: light fines settle on beams, duct tops and above suspended ceilings, out of sight and out of the cleaning schedule.",
 "Static in dry handling: dry powder through chutes and pneumatic lines accumulates charge, so a bonded conductive path matters throughout.",
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
  question: "Is egg powder combustible?",
  answer:
   "Yes. Dried egg powder is a fine organic protein dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Severity for your specific product is established by testing it as your process produces it.",
 },
 {
  question: "Why does the cleaning method matter for food safety here?",
  answer:
   "Because sweeping and compressed-air blowdown disperse the powder rather than removing it. With a pathogen-associated, major-allergen material, that spreads contamination across equipment and adjacent lines. Vacuum recovery with retained filtration takes the material out of the building instead.",
 },
 {
  question: "Do we need HEPA filtration for egg powder?",
  answer:
   "Retained absolute filtration is what stops the fine fraction being exhausted back into the room. In an operation where the same powder is a fire hazard, an allergen and a microbiological concern, a filter that passes fines defeats the purpose of cleaning at all.",
 },
 {
  question: "Should egg lines have dedicated equipment?",
  answer:
   "Commonly, yes. Egg is a major allergen and shared equipment is a cross-contact route. Dedicated units or dedicated accessory sets per line are the usual arrangement, and the segregation policy should drive the equipment decision.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Milk Powder guide", href: "/materials/milk-powder" },
 { label: "Gelatin Powder guide", href: "/materials/gelatin-powder" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Cleanroom vacuums", href: "/products/cleanroom-vacuums" },
 ],
};
