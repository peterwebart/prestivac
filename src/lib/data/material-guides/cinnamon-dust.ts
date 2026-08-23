import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cinnamonDustGuide: MaterialGuideData = {
 slug: "cinnamon-dust",
 name: "Cinnamon Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Cinnamon Dust — Combustible Dust Control",
  description:
   "Ground cinnamon is a fine combustible organic dust carrying volatile oil content. Where it accumulates in grinding and blending.",
 },
 heroIntro:
  "Built for grinding rooms handling a bark that is milled specifically to a fine powder. Cinnamon carries significant volatile oil content, which makes deposits adherent on warm surfaces and adds a flammable vapour dimension inside enclosed grinding equipment.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Grinding, milling, sifting, blending, filling and packing" },
 { label: "Distinguishing property", value: "High volatile oil content — adherent deposits and a possible flammable vapour component in enclosed equipment" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Cinnamon is milled from bark to a fine powder, and the grinding operation is by definition producing the fraction that suspends most readily. Sifting, blending and filling then liberate it repeatedly, and the low density carries it through the building on ordinary air movement.",
 "Volatile oil content is what distinguishes it from a plain organic dust. Cinnamon's oil fraction makes deposits adherent on warm mill and grinder housings rather than loose, so layers build and resist brushing. In enclosed grinding equipment the oil fraction can also contribute a flammable vapour component, which means the hazard assessment for those enclosures is not purely a Class II dust question. Whether that applies at your grind and throughput is a property of the material and the equipment, established by assessment rather than assumed.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes cinnamon dust worth controlling",
 risks: [
 "Combustible organic dust: grinding produces the finest fraction by design and it suspends at every subsequent transfer.",
 "Volatile oil fraction: can contribute a flammable vapour component inside enclosed grinding and milling equipment.",
 "Adherent deposits: oil-bearing fines build on warm housings instead of shedding, so layers grow between cleans.",
 "Mill ignition sources: grinding combines the finest fraction with mechanical energy, heat and possible tramp metal.",
 "Overhead accumulation: light aromatic fines travel and settle on high steel well away from the grinding room.",
 "Cross-contact control: strong aromatics carry into adjacent products, so redistribution is a quality failure as well as a safety one.",
 ],
 solutions: [
 "Explosion-proof recovery for bark milling, where fine production is the purpose of the operation.",
 "A vapour assessment for enclosed mills, given the volatile oil fraction.",
 "Contact tooling for oil-bearing deposits that adhere to warm mill housings.",
 "HEPA-filtered collection so aromatic fines are removed rather than carried to adjacent lines.",
 "Grounded, bonded conductive path through milling, sifting and filling.",
 "Dedicated tooling per product family to protect against aroma carryover.",
 ],
 configuration: [
 { step: "Begin at the mill housing", detail: "Grinding bark to a fine powder concentrates both the finest fraction and the adherent oil content." },
 { step: "Settle the vapour question", detail: "Volatile oil inside enclosed equipment may be a Class I consideration rather than a Class II one." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for grinding areas." },
 { step: "Specify for sticky fines", detail: "Oil-bearing deposits need contact tooling; suction alone leaves a residue." },
 { step: "Include the surrounding structure", detail: "Light aromatic fines settle on high steel well outside the grinding room." },
 ],
 bestPractices: [
 "Clean mill housings on a defined interval rather than when deposits become visible.",
 "Have the enclosed-equipment vapour question answered explicitly.",
 "Extend overhead recovery beyond the grinding room.",
 "Avoid compressed air near open product entirely.",
 "Keep dedicated tooling per product family.",
 "Verify the conductive path from tool to container.",
 ],
 faqs: [
 {
  question: "Is cinnamon dust combustible?",
  answer:
   "Yes. Ground cinnamon is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Its volatile oil content adds a further dimension. Behaviour for your specific grind is established by testing it.",
 },
 {
  question: "Does the oil content change the classification?",
  answer:
   "It can, inside enclosed grinding equipment where a flammable vapour component may be present. That is a Class I consideration rather than a Class II one, and the classification for those areas is assigned by your electrical or process engineer, not inferred from the material name.",
 },
 {
  question: "Why do deposits build on the grinder rather than falling off?",
  answer:
   "The oil fraction makes the fines adherent on warm surfaces. They stick, build in layers and resist brushing, so the accumulation grows steadily and ordinary cleaning leaves a residue.",
 },
 {
  question: "Where is the priority cleaning zone?",
  answer:
   "The mill and sifter housings and the overhead steel around them. Grinding produces the finest fraction in the building, and the light fines settle above head height where they form the inventory a primary event would loft.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Spice Dust guide", href: "/materials/spice-dust" },
 { label: "Pepper Dust guide", href: "/materials/pepper-dust" },
 { label: "Sugar Dust guide", href: "/materials/sugar-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
