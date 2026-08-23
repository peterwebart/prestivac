import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const spiceDustGuide: MaterialGuideData = {
 slug: "spice-dust",
 name: "Spice Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Spice Dust — Combustible Dust & Recovery",
  description:
   "Ground spices are fine combustible organic dusts, and several carry volatile oils that add a flammable dimension.",
 },
 heroIntro:
  "Built for grinding and blending rooms, where the finest fraction in the building is produced by design. Ground spice is light, aromatic and readily suspended, and several spices carry volatile oil content that adds a flammable vapour dimension on top of the dust one.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Grinding, milling, sifting, blending, filling and packing" },
 { label: "Distinguishing property", value: "Volatile oil content in several spices adds a flammable vapour dimension alongside the dust hazard" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Spice processing is a dust-generating operation from end to end. Grinding and milling exist specifically to reduce particle size, sifting separates and liberates fines, blending tumbles material and lifts it, and filling releases it again at every transfer. The finished product specification often calls for a very fine grind, which means the process is optimised to produce exactly the fraction that suspends most readily.",
 "Several spices also carry significant volatile oil content, and that changes the picture. Oleoresin-rich materials can contribute a flammable vapour component in enclosed grinding equipment, so the assessment is not purely a dust one. Oil content also makes deposits adherent rather than loose, so accumulation on warm grinder housings builds rather than shedding. Which spices behave this way, and how strongly, is a property of the specific material and is established by testing it.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes spice dust worth controlling",
 risks: [
 "Combustible organic dust: grinding produces the finest fraction in the building by design, and it suspends at every transfer.",
 "Volatile oil content: oleoresin-rich spices can contribute a flammable vapour component inside enclosed grinding equipment.",
 "Adherent deposits: oil-bearing fines build on warm grinder and mill housings instead of shedding, so layers grow between cleans.",
 "Grinder ignition sources: mills combine the finest fraction with mechanical energy, heat and the possibility of tramp metal.",
 "Overhead accumulation: light aromatic fines travel and settle well away from the grinding room.",
 "Allergen and cross-contact control: spice blends carry allergen and product-integrity requirements, so redistribution is a quality failure too.",
 ],
 solutions: [
 "Explosion-proof recovery for grinding rooms, where the finest fraction in the plant is produced by design.",
 "Assessment of enclosed mills for a flammable vapour component from oleoresin-rich materials.",
 "Contact tooling for oil-bearing deposits that adhere to warm grinder housings.",
 "HEPA-filtered collection so aromatics are removed rather than redistributed onto adjacent lines.",
 "Dedicated units per product family where cross-contact would be a quality failure.",
 "Grounded, bonded conductive path across milling, sifting and filling.",
 ],
 configuration: [
 { step: "Start at the mill", detail: "Grinding exists to reduce particle size, so the mill is by definition the largest source of respirable fines." },
 { step: "Ask whether vapour is in play", detail: "Oleoresin-rich spices can contribute a flammable vapour component inside enclosed equipment — a Class I question, not Class II." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for grinding and blending areas." },
 { step: "Specify for adherence", detail: "Oil-bearing fines stick to warm housings. Contact tooling belongs in the kit alongside suction." },
 { step: "Plan segregation by product", detail: "Aroma carryover is a quality defect, so segregation policy shapes the equipment count." },
 ],
 bestPractices: [
 "Clean mill and sifter housings before oil-bearing layers build.",
 "Include overhead structure well beyond the grinding room — aromatic fines travel.",
 "Never use compressed air near open product.",
 "Keep dedicated tooling per product family.",
 "Check the conductive path through the whole flow, not just at the machine.",
 "Have the vapour question answered for enclosed mills rather than assumed.",
 ],
 faqs: [
 {
  question: "Is spice dust combustible?",
  answer:
   "Yes. Ground spice is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Some spices are more energetic than others, and the volatile oil content of certain materials adds a further dimension. Behaviour for your specific product is established by testing it.",
 },
 {
  question: "Does volatile oil content change the equipment requirement?",
  answer:
   "It can. Where an oleoresin-rich material contributes flammable vapour inside enclosed equipment, the assessment is no longer purely a Class II dust question. Your electrical or process engineer assigns the classification for those areas, and the equipment follows from it.",
 },
 {
  question: "Why do deposits build up on grinder housings?",
  answer:
   "Oil content makes the fines adherent. On warm surfaces they stick rather than shedding, so the layer grows steadily and ordinary wiping leaves a residue. That deposit is both a fuel inventory and a cleaning problem that gets worse the longer it is left.",
 },
 {
  question: "Can one vacuum serve several spice lines?",
  answer:
   "Only where cross-contact is acceptable. Spice operations usually have strong product-integrity and allergen requirements, so dedicated units or accessory sets per line are common, and the segregation policy drives the equipment decision.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Cinnamon Dust guide", href: "/materials/cinnamon-dust" },
 { label: "Pepper Dust guide", href: "/materials/pepper-dust" },
 { label: "Paprika Dust guide", href: "/materials/paprika-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
