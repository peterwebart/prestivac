import { Filter, Pill, ShieldCheck, Sparkles } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cosmeticPowderGuide: MaterialGuideData = {
 slug: "cosmetic-powder",
 name: "Cosmetic Powder",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
  title: "Cosmetic Powder — Combustible Dust Control",
  description:
   "Cosmetic powders combine combustible organic components with talc, pigments and micas in extremely fine grades, handled in facilities with strict contamination control.",
 },
 heroIntro:
  "Built for colour cosmetics manufacturing, where the powders are among the finest handled anywhere and the contamination requirement is as strict as the safety one. Cosmetic powders combine organic binders and fillers with talc, pigments and micas.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Sparkles, title: "Extremely Fine Grades", detail: "Micronised to sub-micron in some products" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: Pill, title: "Contamination Control", detail: "Cleanroom and GMP requirements apply" },
 ],
 facts: [
 { label: "Material type", value: "Mixed — combustible organic components with mineral fillers, Class II Group G where combustible" },
 { label: "Where it is generated", value: "Weighing, micronising, blending, pressing, filling and packing" },
 { label: "Distinguishing property", value: "Extremely fine grades combined with strict contamination and colour-carryover control" },
 { label: "Governing standards", value: "NFPA 660 for combustible components, alongside GMP and exposure controls" },
 ],
 overview: [
 "Colour cosmetics manufacturing handles a wide range of powders: talc and mineral fillers, micas and pearlescent pigments, organic and inorganic colourants, and binders. Weighing, micronising, blending, pressing and filling all generate airborne powder, and the grades used are among the finest handled in any industry because texture and coverage depend on particle size.",
 "The mix determines the hazard. Organic components and binders are combustible; mineral fillers are largely not; some pigments carry heavy metal content with its own exposure requirement. That means identification per formulation rather than per category. Layered on top is a contamination-control regime — GMP requirements, colour carryover between products, and product integrity standards that are frequently stricter than the safety case alone would demand. Retained filtration and dedicated equipment tend to be driven by that requirement, with the dust safety benefit following from it.",
 ],
 industries: [
 { label: "Cosmetics", href: "/industries/cosmetics" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Cleanrooms", href: "/industries/cleanrooms" },
 { label: "Paints & Coatings", href: "/industries/paints-coatings" },
 ],
 riskHeading: "What makes cosmetic powder worth controlling",
 risks: [
 "Mixed hazard profile: organic components are combustible, mineral fillers largely are not, and some pigments carry heavy metals.",
 "Extremely fine grades: micronised powders suspend on minimal air movement and travel throughout the facility.",
 "Colour carryover: pigment contamination is visible at trace levels, making redistribution an immediate quality failure.",
 "GMP and contamination control: cleanroom requirements govern equipment selection alongside the dust question.",
 "Weighing releases: manual weighing of fine powders in small quantities is the dominant repeated release point.",
 "Heavy-metal pigments: where present, retained filtration is an exposure control rather than a preference.",
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
  question: "Are cosmetic powders combustible?",
  answer:
   "It depends on the formulation. Organic components and binders are combustible and sit in Class II Group G; mineral fillers such as talc largely are not. Because products are blends, identification is per formulation rather than per category.",
 },
 {
  question: "What usually drives the equipment decision here?",
  answer:
   "Contamination control, more often than the dust safety case. GMP requirements, colour carryover between products and product integrity standards tend to be stricter than the safety argument alone, and the dust benefit follows from meeting them.",
 },
 {
  question: "How do we handle colour carryover?",
  answer:
   "Dedicated units or dedicated accessory sets per colour family, with a documented cleaning pass between products. Pigment contamination is visible at trace levels, so the segregation policy is usually tighter than in other powder industries.",
 },
 {
  question: "Do heavy-metal pigments change the requirement?",
  answer:
   "Where they are present, retained absolute filtration becomes an exposure control rather than a preference, and the safety data sheet for the specific pigment governs. That assessment is per pigment, not per product line.",
 },
 ],
 recommended: ["hepa-vacuums", "cleanroom-vacuums", "pharmaceutical-vacuums", "explosion-proof-vacuums"],
 related: [
 { label: "Pigment Dust guide", href: "/materials/pigment-dust" },
 { label: "Talc and mineral fillers", href: "/materials/silica-dust" },
 { label: "Cleanroom vacuums", href: "/products/cleanroom-vacuums" },
 { label: "Cosmetics deep dive", href: "/industries/cosmetics" },
 { label: "Wax Powder guide", href: "/materials/wax-powder" },
 ],
};
