import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const peaProteinGuide: MaterialGuideData = {
 slug: "pea-protein",
 name: "Pea Protein",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Pea Protein Dust — Combustible Dust Control",
  description:
   "Pea protein isolate is a very fine combustible organic dust produced in fast-growing plant-protein operations. Where it accumulates and how explosion-proof HEPA recovery controls it.",
 },
 heroIntro:
  "Built for plant-protein plants where capacity has often grown faster than the housekeeping programme around it. Pea protein isolate is a very fine, low-density powder that suspends on minimal air movement and settles across the whole building rather than near the equipment that released it.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic protein dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Drying, milling, air classification, sifting, blending, conveying and filling" },
 { label: "Distinguishing property", value: "Air classification produces an extremely fine low-density fraction that travels throughout the building" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Pea protein is produced by milling and separating pea flour into protein and starch fractions, frequently by air classification, then drying and blending to specification. Air classification is a process designed to separate by particle size, which means it concentrates and handles an exceptionally fine fraction as a matter of normal operation.",
 "That fineness is the defining characteristic for housekeeping. The powder suspends on minimal air movement, stays airborne long enough to travel through the building, and settles on overhead surfaces well away from the equipment that released it. Plants in this sector have also frequently expanded capacity quickly, and a housekeeping programme sized for the original throughput will understate the accumulation rate at the current one — which is worth checking explicitly rather than assuming the existing schedule still fits.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes pea protein worth controlling",
 risks: [
 "Combustible organic dust: an extremely fine protein powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Air classification fines: the separation process concentrates and handles the finest fraction as normal operation.",
 "Building-wide travel: low density means the powder settles far from its release point, including on surfaces nobody associates with the process.",
 "Capacity growth outpacing housekeeping: schedules set at commissioning frequently no longer match current throughput.",
 "Overhead accumulation: fines reach beams, duct tops and above suspended ceilings across the whole plant.",
 "Static in dry handling: dry low-density powder through pneumatic lines accumulates charge, so a bonded conductive path matters throughout.",
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
  question: "Is pea protein dust combustible?",
  answer:
   "Yes. Pea protein isolate and concentrate are fine organic dusts and behave as combustible dusts when dispersed, sitting in Class II Group G. Severity depends on grade and particle size and is established by testing your material.",
 },
 {
  question: "Why does it settle so far from the equipment?",
  answer:
   "Low bulk density and very fine particle size. The powder stays suspended long enough to travel on general air movement, so deposits appear on overhead surfaces in areas that are not obviously part of the process — and those surfaces are rarely on the cleaning schedule.",
 },
 {
  question: "Our plant expanded — does the cleaning schedule still fit?",
  answer:
   "Worth checking explicitly. Accumulation tracks throughput, so a frequency set at commissioning will understate the requirement after a capacity increase. That reassessment belongs in the Dust Hazard Analysis rather than being judged by appearance.",
 },
 {
  question: "Is pea protein an allergen concern like soy?",
  answer:
   "It is not among the major allergens in the way soy is, but pea protein allergy is recognised and cross-contact policies vary by market and customer. Follow your own segregation policy; the equipment arrangement should follow from it.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Soy Protein guide", href: "/materials/soy-protein" },
 { label: "Protein Powder guide", href: "/materials/protein-powder" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Central vacuum systems", href: "/products/central-vacuum-systems" },
 ],
};
