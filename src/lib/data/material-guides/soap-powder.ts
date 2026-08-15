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
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path from hose tip to container.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "HEPA filtration tested to 99.99% at 0.3 um so the respirable fraction is retained rather than returned to the room.",
 "Elimination of compressed-air blowdown, which converts settled material directly into a suspended cloud.",
 "Defined-frequency recovery on high steel, equipment housings, conveyor runs and transfer points.",
 "Sealed container removal so collected material leaves the area without a second dispersal event.",
 ],
 configuration: [
 { step: "Identify where the fines are made", detail: "Size reduction, transfer and separation produce the finest fraction. Start there rather than where the floor looks worst." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the area classification, which determines which equipment is eligible." },
 { step: "Specify the conductive chain", detail: "Anti-static hose and conductive accessories bonded to the unit — the accessory chain is part of the grounding path." },
 { step: "Match filtration to the fraction", detail: "Fine dusts defeat general-purpose filtration. Retained absolute filtration keeps the respirable fraction out of the room." },
 { step: "Write frequencies into the DHA", detail: "A Dust Hazard Analysis turns the accumulation map into defined intervals and a record that the pass happened." },
 ],
 bestPractices: [
 "Treat equipment enclosures and overhead steel as priority accumulation zones rather than occasional deep-clean targets.",
 "Never blow down with compressed air; it creates precisely the suspended cloud the programme exists to prevent.",
 "Include duct tops, cable trays and above suspended ceilings in the schedule — that is where secondary-event fuel sits.",
 "Ground and bond the whole recovery chain and inspect anti-static hoses as routine.",
 "Empty collection into sealed disposal away from ignition sources rather than tipping containers in place.",
 "Record each pass so the housekeeping frequency is evidenced rather than asserted.",
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
