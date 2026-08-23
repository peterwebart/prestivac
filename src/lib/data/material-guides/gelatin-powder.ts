import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const gelatinPowderGuide: MaterialGuideData = {
 slug: "gelatin-powder",
 name: "Gelatin Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Gelatin Powder — Combustible Dust Control",
  description:
   "Gelatin powder is a combustible organic protein dust that is strongly hygroscopic and gels on contact with water, which rules out wet cleanup methods.",
 },
 heroIntro:
  "Built for gelatin handling in food and pharmaceutical operations, where the material's defining property makes the obvious cleanup method the wrong one. Gelatin is strongly hygroscopic and gels on contact with water — wetting a spill produces an adhesive mass rather than a solution.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic protein dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Milling, sifting, blending, tote dumping, capsule and tablet manufacturing, conveying and filling" },
 { label: "Distinguishing property", value: "Gels on contact with water — wet cleanup produces an adhesive mass, so dry recovery is the practical method" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Gelatin is supplied as a dry powder or granule and handled across food, confectionery and pharmaceutical manufacturing — capsule shells, gummies, stabilisers and setting agents. Milling, sifting, blending and dumping all liberate a fine airborne fraction, and pharmaceutical applications add cleanroom and containment requirements on top.",
 "Its hydrocolloid behaviour is what shapes the housekeeping method. Gelatin absorbs water and gels, so hosing down or wet-wiping a spill turns loose powder into an adhesive mass that is harder to remove than what was there before, and which then dries into a tenacious film on equipment. Dry recovery with retained filtration is the practical route, and it is also the one that satisfies the combustible dust requirement — a case where the material property and the safety requirement point at the same method.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes gelatin powder worth controlling",
 risks: [
 "Combustible organic dust: fine protein powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Wet cleanup counterproductive: gelatin gels on contact with water, producing an adhesive mass that dries into a tenacious film.",
 "Strongly hygroscopic: deposits draw ambient moisture and cake, then break back into fines when disturbed.",
 "Dumping and blending releases: manual tote and sack handling is the largest repeated release point.",
 "Pharmaceutical overlap: capsule and tablet manufacturing adds containment and cleanroom requirements to the dust one.",
 "Overhead accumulation: light fines settle on beams, duct tops and equipment housings above head height.",
 ],
 solutions: [
 "Dry recovery only — wetting a gelatin spill produces an adhesive mass that is harder to remove than the powder.",
 "Explosion-proof construction across milling, sifting and dumping where the fine fraction is produced.",
 "HEPA-filtered collection, with cleanroom-grade specification where capsule manufacturing applies.",
 "Contact tooling for hygroscopic crusts that resist suction alone.",
 "Grounded, bonded conductive path through dry handling and transfer.",
 "Containment-appropriate equipment where the material feeds pharmaceutical production.",
 ],
 configuration: [
 { step: "Rule out wet methods first", detail: "Gelatin gels on contact with water. Hosing or wet-wiping makes the problem worse and leaves a film that dries tenacious." },
 { step: "Identify the downstream use", detail: "Pharmaceutical capsule production adds containment and cleanroom requirements to the dust question." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for milling and powder handling areas." },
 { step: "Specify contact tooling", detail: "Hygroscopic crusts need mechanical removal alongside suction." },
 { step: "Plan the dump station", detail: "Tote and sack handling is the largest repeated release point." },
 ],
 bestPractices: [
 "Never wash gelatin down — dry recovery is both the practical and the compliant method.",
 "Break and remove crusts rather than working around them.",
 "Apply cleanroom specification where the material feeds capsule production.",
 "Prioritise the mill, sifter and dump station.",
 "Verify grounding continuity across the flow path.",
 "Empty into sealed disposal away from production.",
 ],
 faqs: [
 {
  question: "Is gelatin powder combustible?",
  answer:
   "Yes. Gelatin is a fine organic protein powder and behaves as a combustible dust when dispersed, sitting in Class II Group G. Severity depends on grade and particle size and is established by testing your material.",
 },
 {
  question: "Can we wash gelatin dust down rather than vacuum it?",
  answer:
   "It is counterproductive. Gelatin gels on contact with water, so hosing or wet-wiping turns loose powder into an adhesive mass that is harder to remove and dries into a tenacious film on equipment. Dry recovery is the practical method and it satisfies the dust requirement at the same time.",
 },
 {
  question: "Does caked gelatin still present a hazard?",
  answer:
   "Yes. Hygroscopic caking changes the appearance rather than the material — disturbance breaks the deposit back into suspendable fines, so it remains an accumulation of fuel.",
 },
 {
  question: "What changes in a pharmaceutical setting?",
  answer:
   "Containment and cleanroom requirements are added to the combustible dust one. Equipment is specified for the classification of the area and for the containment standard the product requires, and the two requirements are assessed together rather than sequentially.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Pharmaceutical vacuums", href: "/products/pharmaceutical-vacuums" },
 { label: "Protein Powder guide", href: "/materials/protein-powder" },
 { label: "Cleanroom vacuums", href: "/products/cleanroom-vacuums" },
 { label: "Pharmaceutical deep dive", href: "/industries/pharmaceutical" },
 ],
};
