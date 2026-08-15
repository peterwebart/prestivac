import { Filter, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const pigmentDustGuide: MaterialGuideData = {
 slug: "pigment-dust",
 name: "Pigment Dust",
 groupCrumb: { label: "Chemical Dusts", anchor: "chemical-dusts" },
 seo: {
  title: "Pigment Dust — Combustible Dust & Recovery",
  description:
   "Pigment powders are very fine, intensely colouring dusts, some organic and combustible, some containing heavy metals. Why identification comes before any cleaning decision.",
 },
 heroIntro:
  "Built for pigment handling, where two very different hazards share a product category. Organic pigments are combustible dusts; some inorganic pigments carry heavy metals with a toxicity requirement instead. The particle size that makes both of them work as colourants is what makes them travel.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Sparkles, title: "Extremely Fine Fraction", detail: "Sub-micron grades suspend on minimal air movement" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: FlaskConical, title: "Identify Before Cleaning", detail: "Organic vs heavy-metal pigments differ fundamentally" },
 ],
 facts: [
 { label: "Material type", value: "Organic pigments: combustible dust, Class II Group G. Some inorganic pigments: heavy-metal toxicity rather than combustibility" },
 { label: "Where it is generated", value: "Weighing, dispersion, milling, blending, tote dumping and packing" },
 { label: "Distinguishing property", value: "Extremely fine particle size and intense colouring power — contamination is visible at trace levels" },
 { label: "Governing standards", value: "NFPA 660 for combustible grades; occupational exposure limits for heavy-metal pigments" },
 ],
 overview: [
 "Pigments are engineered to be as fine as possible, because particle size drives colour strength and dispersion. That makes them among the most readily airborne powders in any plant that handles them — paint and coatings, plastics compounding, printing inks, cosmetics and construction products.",
 "The category covers two fundamentally different hazard profiles. Organic pigments are combustible dusts and are assessed as such. Some inorganic pigments contain heavy metals, where the governing issue is toxicity and exposure control rather than deflagration. A few present both. This is why identification comes first: the same-looking fine coloured powder can require an explosion-protection answer, a containment answer, or both, and the safety data sheet for the specific pigment is where that is settled.",
 ],
 industries: [
 { label: "Paints & Coatings", href: "/industries/paints-coatings" },
 { label: "Plastics & Rubber", href: "/industries/plastics-rubber" },
 { label: "Printing", href: "/industries/printing" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 { label: "Construction Materials", href: "/industries/construction-materials" },
 ],
 riskHeading: "What makes pigment dust worth controlling",
 risks: [
 "Two hazard profiles in one category: organic pigments are combustible; some inorganic pigments carry heavy metals instead.",
 "Extreme fineness: pigments are engineered for small particle size, so they suspend on minimal air movement and travel throughout the building.",
 "Visible contamination: intense colouring power means trace carryover onto other products is immediately obvious and commercially costly.",
 "Weighing and dispersion releases: manual weighing of small quantities of very fine powder is a repeated, largely open release point.",
 "Heavy-metal exposure: where lead, cadmium or chromium pigments are handled, retained filtration is an exposure control rather than a preference.",
 "Overhead accumulation: fine pigment settles on high steel and duct tops, where it is both a fuel inventory and a cross-contamination reservoir.",
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
  question: "Are all pigment dusts combustible?",
  answer:
   "No, and that distinction matters. Organic pigments are generally combustible dusts in Class II Group G. Some inorganic pigments are not combustible but carry heavy metals, where the requirement is exposure control. Identify the specific pigment from its safety data sheet before deciding the approach.",
 },
 {
  question: "Why is filtration grade so important for pigments?",
  answer:
   "Because of the particle size and, for some grades, the toxicity. A vacuum that passes the fine fraction exhausts pigment back into the room — which spreads visible contamination across other products and, with heavy-metal pigments, creates an exposure event.",
 },
 {
  question: "How do we stop colour carryover between products?",
  answer:
   "Dedicated units or dedicated accessory sets per colour family, and a documented cleaning pass between products. With pigments, cross-contact is visible at trace levels, so the segregation policy tends to be stricter than the safety case alone would require.",
 },
 {
  question: "Where is the biggest release point?",
  answer:
   "Manual weighing and dispersion, in most plants. Small quantities of very fine powder handled in the open, repeatedly, put more into the air than the larger but more enclosed transfers do.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Dye Powder guide", href: "/materials/dye-powder" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Paints & Coatings deep dive", href: "/industries/paints-coatings" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 ],
};
