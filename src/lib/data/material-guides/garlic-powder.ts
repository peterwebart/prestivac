import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const garlicPowderGuide: MaterialGuideData = {
 slug: "garlic-powder",
 name: "Garlic Powder",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Garlic Powder — Combustible Dust Control",
  description:
   "Dehydrated garlic powder is a fine combustible organic dust that is strongly hygroscopic and cakes readily. Where it accumulates in dehydration and milling.",
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
 "Explosion-proof recovery specified for a low-density powder that travels far beyond the mill.",
 "Contact tooling for hygroscopic crusts that resist brushing.",
 "HEPA-filtered collection so strong aromatics are removed rather than relocated.",
 "Overhead recovery on structure and duct tops across the whole building, not just the milling room.",
 "Grounded, bonded conductive path through dehydration, milling and packing.",
 "Dedicated tooling where aroma carryover into other products would be a defect.",
 ],
 configuration: [
 { step: "Follow the powder, not the process", detail: "Low density means deposits appear in rooms nobody associates with milling. Survey the building, not the department." },
 { step: "Plan for crusting", detail: "Hygroscopic caking sets quickly. Contact tooling is needed; suction alone will leave the layer." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for dehydration and milling areas." },
 { step: "Match filtration to the fine fraction", detail: "The fraction that travels furthest is the finest, and it is the one general-purpose filtration passes." },
 { step: "Set frequency against humidity", detail: "Caking rate tracks ambient moisture, so the interval is seasonal rather than fixed." },
 ],
 bestPractices: [
 "Survey the whole building — this powder does not stay where it was made.",
 "Break and remove crusts rather than brushing over them.",
 "Prioritise overhead steel and duct tops, where the travelling fraction lands.",
 "Avoid compressed air entirely; it spreads aroma as well as dust.",
 "Keep dedicated tooling where cross-contact matters.",
 "Verify hose and tool grounding continuity routinely.",
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
