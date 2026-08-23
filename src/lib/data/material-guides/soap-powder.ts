import { Filter, ScrollText, ShieldCheck, Sparkles } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const soapPowderGuide: MaterialGuideData = {
 slug: "soap-powder",
 name: "Soap Powder",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
  title: "Soap Powder — Combustible Dust Control",
  description:
   "Powdered soap is a combustible organic dust that is strongly hygroscopic, alkaline and slippery when wetted, which rules out washing spills down.",
 },
 heroIntro:
  "Built for soap and surfactant powder handling, where the obvious cleanup method makes things worse. Soap powder is combustible, strongly hygroscopic, alkaline enough to irritate skin and airways, and turns any wetted spill into a slip hazard.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Sparkles, title: "Alkaline Irritant", detail: "Irritates skin, eyes and airways" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Standards", detail: "NFPA 660 for combustible dust handling" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Spray drying, milling, screening, blending, conveying, tote dumping and packing" },
 { label: "Distinguishing property", value: "Alkaline and strongly hygroscopic; wetting a spill produces a slippery film rather than removing it" },
 { label: "Governing standards", value: "NFPA 660 for combustible dust handling" },
 ],
 overview: [
 "Soap and surfactant powders are produced by spray drying and then milled, screened, blended and packed. Every one of those steps liberates fines, and the spray-dried product is by design a light, readily dispersed powder.",
 "Two properties make the housekeeping decision straightforward once they are understood. Soap powder is alkaline, so airborne dust irritates skin, eyes and the respiratory tract — the airborne load is an exposure issue as well as a fire one. And washing a spill down is counterproductive: the powder is hygroscopic and surface-active, so wetting produces a slippery film that spreads across the floor and into drains rather than removing the material. Dry recovery with retained filtration handles the fire hazard, the exposure and the slip risk in one operation.",
 ],
 industries: [
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 ],
 riskHeading: "What makes soap powder worth controlling",
 risks: [
 "Combustible organic dust: spray-dried soap powder suspends readily and carries deflagration conditions in enclosures.",
 "Alkaline irritation: airborne dust irritates skin, eyes and the respiratory tract, so airborne load is an exposure concern.",
 "Wet cleanup counterproductive: wetting produces a slippery surface-active film that spreads rather than removing the material.",
 "Slip hazard: any moisture reaching a soap powder deposit creates an immediate floor safety problem.",
 "Strongly hygroscopic: deposits draw ambient moisture, cake, then break back into fines when disturbed.",
 "Overhead accumulation: light spray-dried powder settles on structure and equipment well beyond the process area.",
 ],
 solutions: [
 "Dry recovery only — wetting a soap spill produces a slippery surface-active film that spreads rather than removing anything.",
 "Explosion-proof construction across spray drying, milling and blending where the fine fraction is produced.",
 "Retained filtration, because alkaline dust exhausted back into the room is a skin and airway exposure.",
 "Immediate recovery of floor spills, since any moisture reaching a deposit creates a slip hazard.",
 "Grounded, bonded conductive path through dry handling and pneumatic transfer.",
 "Contact tooling for hygroscopic crusts that form on equipment between shifts.",
 ],
 configuration: [
 { step: "Rule out washing down", detail: "Surface-active powder plus water gives a spreading film and a slip hazard, not a clean floor." },
 { step: "Start at the spray dryer", detail: "The dried product is by design light and readily dispersed; that is where the finest fraction originates." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for drying and blending areas." },
 { step: "Treat filtration as exposure control", detail: "Alkaline dust irritates skin, eyes and airways, so retention matters as much as collection." },
 { step: "Plan for caking", detail: "Hygroscopic deposits set on equipment; contact tooling is needed alongside suction." },
 ],
 bestPractices: [
 "Never wash soap powder down — dry recovery avoids both the film and the slip hazard.",
 "Treat alkaline airborne dust as an exposure issue, not only a fire one.",
 "Clear floor spills immediately rather than at end of shift.",
 "Break crusted deposits rather than brushing over them.",
 "Verify grounding continuity across the full flow path.",
 "Empty into sealed disposal away from wash-down areas.",
 ],
 faqs: [
 {
  question: "Is soap powder combustible?",
  answer:
   "Yes. Spray-dried soap and surfactant powders are fine organic dusts and behave as combustible dusts in Class II Group G. Severity depends on formulation and particle size and is established by testing your material.",
 },
 {
  question: "Can we just wash soap powder spills down?",
  answer:
   "It makes things worse. The powder is surface-active and hygroscopic, so wetting produces a slippery film that spreads across the floor and into drains rather than removing the material. Dry recovery removes it properly and avoids creating a slip hazard.",
 },
 {
  question: "Is the dust harmful to breathe?",
  answer:
   "It is alkaline, so airborne soap dust irritates the airways, eyes and skin. That makes retained filtration relevant beyond the fire case — a unit that exhausts fines back into the room raises the exposure it was brought in to reduce.",
 },
 {
  question: "Does caked soap powder still matter?",
  answer:
   "Yes. Hygroscopic caking changes the appearance but not the material; disturbance breaks the deposit back into suspendable fines, so it remains an accumulation of combustible powder.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Detergent Powder guide", href: "/materials/detergent-powder" },
 { label: "Cosmetic Powder guide", href: "/materials/cosmetic-powder" },
 { label: "Chemical deep dive", href: "/industries/chemical" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
 ],
};
