import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const soyProteinGuide: MaterialGuideData = {
 slug: "soy-protein",
 name: "Soy Protein",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Soy Protein Dust — Combustible Dust Control",
  description:
   "Soy protein isolate and concentrate are fine combustible organic dusts and major allergens. Where they accumulate in processing and blending.",
 },
 heroIntro:
  "Built for soy processing and blending operations handling a powder that is a combustible dust and a major allergen at the same time. Soy protein isolate is very fine, suspends readily, and carries a cross-contact requirement that shapes the whole cleaning programme.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic protein dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Drying, milling, sifting, blending, pneumatic conveying, tote dumping and filling" },
 { label: "Distinguishing property", value: "Major allergen — redistribution during cleaning is a labelling and recall exposure" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Soy protein isolate and concentrate are produced by extraction and drying, then milled and sifted to specification before being blended into finished products. Each mechanical step liberates fines, and the isolate grades in particular are very fine powders that suspend on the slightest air movement.",
 "Soy is one of the major allergens, and that changes what a cleaning failure costs. A method that disperses rather than removes — sweeping, or compressed-air blowdown — carries soy protein onto adjacent lines and equipment, which is a cross-contact event with labelling and recall consequences well beyond the housekeeping budget. Recovery that retains what it collects addresses the fire hazard and the allergen requirement in the same pass, which is usually how the equipment case gets made in these plants.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes soy protein worth controlling",
 risks: [
 "Combustible organic dust: very fine protein powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Major allergen: dispersal onto adjacent lines is a cross-contact event with labelling and recall consequences.",
 "Isolate fineness: high-grade isolates are among the finest powders in a food plant and travel accordingly.",
 "Dumping and blending releases: manual tote and sack dumping is the largest repeated release point.",
 "Overhead accumulation: light fines settle on beams, duct tops and above suspended ceilings across the whole area.",
 "Static in dry handling: dry powder through chutes and pneumatic lines accumulates charge, so a bonded conductive path matters throughout.",
 ],
 solutions: [
 "Retained-filtration recovery so a major allergen is removed from the building rather than relocated.",
 "Dedicated units or accessory sets per line, with a documented cleaning pass between products.",
 "Explosion-proof construction across drying, milling and blending where isolate fines are produced.",
 "Source capture at tote and sack dumping, the largest repeated release point.",
 "Grounded, bonded conductive path through dry handling and pneumatic transfer.",
 "Overhead recovery across the area, since isolate grades travel on minimal air movement.",
 ],
 configuration: [
 { step: "Let allergen policy lead", detail: "Dispersal is the failure mode here. Segregation should drive the equipment plan rather than be retrofitted to it." },
 { step: "Identify the grade", detail: "Isolates are among the finest powders in a food plant and behave accordingly." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for drying, milling and blending areas." },
 { step: "Fix the dump station", detail: "Manual dumping releases the most material in the shortest time." },
 { step: "Document the cleaning pass", detail: "Between-product cleaning is a labelling control, so it needs a record, not just a routine." },
 ],
 bestPractices: [
 "Never sweep or blow down — with a major allergen that is a cross-contact event.",
 "Keep dedicated units or accessory sets per line.",
 "Record each between-product cleaning pass.",
 "Prioritise the dump station and the overhead above it.",
 "Verify the conductive path from tool to container.",
 "Empty into sealed disposal outside the production area.",
 ],
 faqs: [
 {
  question: "Is soy protein dust combustible?",
  answer:
   "Yes. Soy protein isolate and concentrate are fine organic dusts and behave as combustible dusts when dispersed, sitting in Class II Group G. Severity depends on grade and particle size and is established by testing your material.",
 },
 {
  question: "Why does the allergen status change the cleaning method?",
  answer:
   "Because dispersal is the failure mode. Sweeping and blowdown move soy protein onto adjacent lines rather than removing it, and with a major allergen that is a cross-contact event with labelling and recall consequences. Retained-filtration vacuum recovery takes the material out of the building.",
 },
 {
  question: "Should soy lines have dedicated equipment?",
  answer:
   "Commonly, yes — dedicated units or at least dedicated accessory sets, with a documented cleaning pass between products. The segregation policy should drive the equipment decision rather than being retrofitted to it.",
 },
 {
  question: "Which grade produces the worst dust?",
  answer:
   "Isolates, generally. They are among the finest powders in a food plant, which means they suspend on minimal air movement and settle far from where they were released.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Protein Powder guide", href: "/materials/protein-powder" },
 { label: "Pea Protein guide", href: "/materials/pea-protein" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
