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
