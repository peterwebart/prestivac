import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const garlicPowderGuide: MaterialGuideData = {
 slug: "garlic-powder",
 name: "Garlic Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Garlic Powder — Combustible Dust Control",
  description:
   "Dehydrated garlic powder is a fine combustible organic dust that is strongly hygroscopic and cakes readily. Where it accumulates in dehydration and milling, and how to recover it safely.",
 },
 heroIntro:
  "Built for dehydration and milling operations where the powder draws moisture out of the air almost as fast as it is produced. Garlic powder is fine, strongly hygroscopic and pungent enough that its spread through a building is obvious long before anyone measures the accumulation.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Dehydration, milling, grinding, sifting, blending and packing" },
 { label: "Distinguishing property", value: "Strongly hygroscopic — cakes rapidly with ambient moisture, then breaks back into fines when disturbed" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Dehydrated garlic is milled to a range of grades, and each reduction step produces a finer airborne fraction. Milling, sifting, blending and filling all liberate powder, and the material's low density means it stays suspended and travels well beyond the room where it was produced.",
 "Garlic powder is strongly hygroscopic, which shapes both handling and housekeeping. Deposits pick up ambient moisture and cake quickly, forming crusts on equipment and surfaces that look inert. They are not — mechanical disturbance breaks them back into suspendable fines. The caking also means deposits resist brushing and build in layers over time, so an accumulation survey based on what looks loose will substantially understate the fuel inventory in the building.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes garlic powder worth controlling",
 risks: [
 "Combustible organic dust: a fine, low-density powder that suspends readily and travels well beyond its point of origin.",
 "Deceptive caking: hygroscopic crusts look inert but break back into airborne fines under vibration or disturbance.",
 "Layer build-up: caked deposits resist brushing, so accumulation grows steadily between deep cleans.",
 "Milling concentration: grinding equipment produces the finest fraction and combines it with mechanical ignition sources.",
 "Overhead accumulation: light fines settle on beams, duct tops and above suspended ceilings, out of the normal cleaning path.",
 "Cross-contact control: strong aromatics carry into adjacent products, so redistribution is a product-integrity failure as well as a safety one.",
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
  question: "Is garlic powder combustible?",
  answer:
   "Yes. Dehydrated garlic powder is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Severity for your grade is established by testing the material as your process produces it.",
 },
 {
  question: "Caked garlic powder looks solid — is it still a hazard?",
  answer:
   "Yes. Hygroscopic caking makes a deposit look inert, but vibration or airflow breaks it back into suspendable fines. Treat crusted deposits as an accumulation of fuel rather than as something that has stabilised.",
 },
 {
  question: "Why does it spread so far through the plant?",
  answer:
   "Low density and fine particle size. The powder stays suspended long enough to travel on general air movement, which is why deposits turn up on high steel and in rooms well away from milling. Those overhead surfaces are the ones that matter most for secondary-event fuel.",
 },
 {
  question: "Does cleaning method affect product quality?",
  answer:
   "Directly. Blowing down or sweeping redistributes strong aromatics onto adjacent lines, which is a cross-contact problem. Vacuum recovery with retained filtration removes the material rather than relocating it.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Onion Powder guide", href: "/materials/onion-powder" },
 { label: "Spice Dust guide", href: "/materials/spice-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
