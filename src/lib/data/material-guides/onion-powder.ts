import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const onionPowderGuide: MaterialGuideData = {
 slug: "onion-powder",
 name: "Onion Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Onion Powder — Combustible Dust Control",
  description:
   "Dehydrated onion powder is a fine combustible organic dust with high sugar content that makes deposits sticky and hygroscopic.",
 },
 heroIntro:
  "Built for dehydration and milling lines handling a powder that is both hygroscopic and sugar-rich. Onion powder cakes readily, sticks to surfaces rather than shedding, and produces a fine fraction that travels well beyond the room where it was milled.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Dehydration, milling, grinding, sifting, blending and packing" },
 { label: "Distinguishing property", value: "High natural sugar content makes deposits tacky and strongly hygroscopic" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Dehydrated onion is milled to powders and granules, and the reduction steps generate the fine fraction that matters. Milling, sifting, blending and filling all put powder into the air, and the low bulk density means it stays there long enough to travel and settle across the building.",
 "The distinguishing property is sugar content. Natural sugars make onion powder both strongly hygroscopic and tacky, so deposits draw moisture, become sticky and adhere to surfaces instead of shedding. That produces layers on equipment housings and overhead steel that ordinary cleaning does not remove, and a deposit that looks like a stable crust rather than an accumulation of combustible powder. Disturbance breaks it back into fines, which is precisely what a primary event would do at scale.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes onion powder worth controlling",
 risks: [
 "Combustible organic dust: a fine, low-density powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Tacky hygroscopic deposits: sugar content makes accumulation adhere to surfaces and resist brushing.",
 "Deceptive crusting: a caked deposit looks stable but breaks back into suspendable fines under vibration or airflow.",
 "Milling concentration: grinding equipment produces the finest fraction alongside mechanical ignition sources.",
 "Overhead accumulation: light fines reach beams, duct tops and above suspended ceilings, out of the routine cleaning path.",
 "Cross-contact control: strong aromatics carry into adjacent products, making redistribution a product-integrity problem.",
 ],
 solutions: [
 "Explosion-proof recovery for a sugar-bearing powder whose deposits adhere rather than shed.",
 "Contact tooling for tacky accumulation on warm equipment surfaces.",
 "HEPA-filtered collection so the travelling fine fraction leaves the building.",
 "Overhead recovery across the plant, since low bulk density carries fines well beyond milling.",
 "Grounded, bonded conductive path through dehydration, milling and filling.",
 "Dedicated tooling where aroma or colour carryover would affect adjacent products.",
 ],
 configuration: [
 { step: "Identify the warm surfaces", detail: "Sugar content makes deposits tacky on warm equipment. Those layers grow steadily and resist brushing." },
 { step: "Treat crusts as inventory", detail: "A caked deposit looks stable but breaks back into fines under vibration." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for dehydration and milling areas." },
 { step: "Specify contact tooling", detail: "Tacky deposits need mechanical removal; a suction-only kit smears rather than clears." },
 { step: "Extend the survey beyond the department", detail: "Low density carries fines into adjacent areas that are not on the cleaning schedule." },
 ],
 bestPractices: [
 "Remove tacky deposits before they build into layers that resist cleaning.",
 "Include adjacent rooms in the survey, not just the milling area.",
 "Never blow down — it relocates sticky fines into harder-to-reach places.",
 "Keep dedicated tooling where cross-contact matters.",
 "Check the grounding path across the full flow path.",
 "Empty into sealed disposal rather than tipping in place.",
 ],
 faqs: [
 {
  question: "Is onion powder combustible?",
  answer:
   "Yes. Dehydrated onion powder is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Sugar content and particle size affect severity, which is established by testing the material as your process produces it.",
 },
 {
  question: "Why do onion powder deposits stick to everything?",
  answer:
   "Natural sugar content. It makes the powder hygroscopic and tacky, so deposits draw ambient moisture and adhere rather than shedding. That is why layers build on equipment housings and why brushing leaves a residue behind.",
 },
 {
  question: "Is a caked deposit still a fire risk?",
  answer:
   "Yes. Caking changes the appearance, not the material. Vibration and airflow break the crust back into suspendable fines, so a caked accumulation is still a fuel inventory that a primary event could loft.",
 },
 {
  question: "Can we blow down with compressed air between shifts?",
  answer:
   "It is the wrong tool for this material. Blowdown disperses the fines into a cloud and relocates deposits into places that are harder to reach, which increases both the fire risk and the cross-contact risk rather than reducing them.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Garlic Powder guide", href: "/materials/garlic-powder" },
 { label: "Sugar Dust guide", href: "/materials/sugar-dust" },
 { label: "Spice Dust guide", href: "/materials/spice-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
