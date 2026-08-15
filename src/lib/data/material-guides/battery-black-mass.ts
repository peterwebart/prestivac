import { BatteryCharging, CircuitBoard, Filter, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const batteryBlackMassGuide: MaterialGuideData = {
 slug: "battery-black-mass",
 name: "Battery Black Mass",
 groupCrumb: { label: "Battery Manufacturing Dusts", anchor: "battery-dusts" },
 seo: {
  title: "Battery Black Mass — Recycling Dust Control",
  description:
   "Black mass from battery recycling is a conductive, metal-bearing, potentially reactive dust that can also retain residual charge. One of the most demanding recovery materials there is.",
 },
 heroIntro:
  "Built for battery recycling, where the recovered material combines almost every hazard in this directory at once. Black mass carries conductive metal content, carbonaceous graphite, potentially reactive lithium compounds, toxicity, and the possibility of residual stored energy.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: BatteryCharging, title: "Residual Energy", detail: "Feedstock may retain stored charge" },
 { icon: CircuitBoard, title: "Conductive Metal Content", detail: "Group E considerations — EX1 scope only" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains a toxic metal-bearing fraction" },
 ],
 facts: [
 { label: "Material type", value: "Mixed conductive metal-bearing dust — Group E considerations apply alongside carbonaceous content" },
 { label: "Where it is generated", value: "Shredding, crushing, screening, separation, drying and bagging in battery recycling" },
 { label: "Distinguishing property", value: "Combines conductivity, toxicity, possible water reactivity and possible residual stored charge in one material" },
 { label: "Governing standards", value: "NFPA 660 and NFPA 484 considerations for reactive metal content, with hazardous-location classification under NFPA 70" },
 ],
 overview: [
 "Black mass is the fine fraction recovered when lithium-ion cells are shredded and separated — a mixture of cathode and anode material containing lithium, nickel, cobalt, manganese and graphite, in proportions that vary with the feedstock. It is produced by mechanical size reduction, which means dust generation is intrinsic to the process rather than incidental.",
 "It is one of the most demanding materials in this directory because several hazards apply simultaneously. The metal content makes it conductive, which brings Group E considerations. Lithium compounds may be water-reactive, so wet methods cannot be assumed safe. The metals involved carry toxicity and exposure limits. And upstream of separation, incompletely discharged cells can retain stored energy, so thermal events in shredding and handling are a documented problem in this sector rather than a theoretical one. Feedstock variability compounds all of it: what arrived this week may not behave like last week's.",
 ],
 industries: [
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Mining & Minerals", href: "/industries/mining" },
 ],
 riskHeading: "What makes black mass worth controlling",
 risks: [
 "Conductive metal content: brings Group E considerations, which are covered by the EX1 scope and not by the EV scope.",
 "Possible water reactivity: lithium compounds mean wet methods and immersion cannot be assumed safe without testing.",
 "Toxicity: nickel, cobalt and manganese content carry exposure limits, so retained filtration is an exposure control.",
 "Residual stored energy: incompletely discharged feedstock can produce thermal events during shredding and handling.",
 "Feedstock variability: composition changes with the cells received, so material behaviour is not constant between batches.",
 "Fine fraction by design: the process exists to produce a fine separated powder, so dust generation is intrinsic.",
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
  question: "Which certified line applies to black mass?",
  answer:
   "Because of the conductive metal content, Group E considerations apply — and Group E is within the EX1 HEPA scope on our CSA listing, not within the EV EX HEPA scope, which covers Groups F and G only. Confirm the classification of your area with your engineer and let us match the line to it.",
 },
 {
  question: "Can black mass be recovered wet?",
  answer:
   "Not without establishing the material's behaviour first. Lithium compounds may be water-reactive, so wetting and immersion approaches cannot be assumed safe. That is settled by testing the material as your process produces it, and feedstock variability means it is worth revisiting rather than testing once.",
 },
 {
  question: "What about residual charge in the feedstock?",
  answer:
   "Incompletely discharged cells retaining stored energy is a recognised problem in this sector and has produced thermal events during shredding and handling. That is a process-control question upstream of housekeeping, but it shapes the ignition-source assessment for the whole area.",
 },
 {
  question: "Why does feedstock variability matter for equipment?",
  answer:
   "Because the material is a mixture whose composition follows whatever cells arrived. Chemistry, metal content and reactivity are not constant between batches, so a specification based on one characterisation may not describe next month's material.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "custom-engineered-systems", "industrial-vacuums"],
 related: [
 { label: "Conductive Carbon guide", href: "/materials/conductive-carbon" },
 { label: "Lithium Dust guide", href: "/materials/lithium-dust" },
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "Battery Manufacturing deep dive", href: "/industries/battery" },
 { label: "NFPA 484", href: "/hazardous-locations/nfpa-484" },
 ],
};
