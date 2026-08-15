import { CircuitBoard, Filter, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const conductiveCarbonGuide: MaterialGuideData = {
 slug: "conductive-carbon",
 name: "Conductive Carbon",
 groupCrumb: { label: "Battery Manufacturing Dusts", anchor: "battery-dusts" },
 seo: {
  title: "Conductive Carbon — Group F Dust Control",
  description:
   "Conductive carbon additives used in battery electrodes are carbonaceous Group F dusts that are also electrically conductive, so accumulation shorts equipment as well as feeding fire.",
 },
 heroIntro:
  "Built for electrode manufacturing, where the additive that makes the cell work is a carbonaceous dust that also conducts. Conductive carbon blacks and graphite additives are extremely fine, they travel, and where they settle they can bridge electrical equipment.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: CircuitBoard, title: "Electrically Conductive", detail: "Accumulation can bridge and short equipment" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains an extremely fine carbonaceous fraction" },
 { icon: Flame, title: "Group F Carbonaceous", detail: "Can hold a deep-seated smoulder when collected" },
 ],
 facts: [
 { label: "Material type", value: "Combustible carbonaceous dust, Class II Group F — and electrically conductive" },
 { label: "Where it is generated", value: "Additive weighing and dumping, slurry mixing, electrode coating, calendering and dry-room handling" },
 { label: "Distinguishing property", value: "Conductive as well as combustible — deposits can bridge electrical equipment independently of any fire risk" },
 { label: "Governing standards", value: "NFPA 660, with hazardous-location classification under NFPA 70" },
 ],
 overview: [
 "Conductive carbon additives — carbon blacks and fine graphites — are blended into electrode slurries to give the coating its electrical conductivity. They are among the finest powders in a battery plant, and the weighing and dumping steps that introduce them into mixers are the largest release points.",
 "Because the additive is chosen for its conductivity, the dust that escapes is conductive too. That produces a hazard distinct from combustion: accumulation on and inside electrical equipment can bridge conductors, causing tracking, shorting and equipment failure — which is both a reliability problem and a way of creating the ignition source that the rest of the programme is trying to eliminate. Carbonaceous material also holds a deep-seated smoulder inside a collected volume with no visible surface indication, so a full container is not inert simply because nothing can be seen.",
 ],
 industries: [
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Electronics", href: "/industries/electronics" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Energy & Power", href: "/industries/energy" },
 ],
 riskHeading: "What makes conductive carbon worth controlling",
 risks: [
 "Carbonaceous combustible dust: Class II Group F, and fine enough to suspend on minimal air movement.",
 "Electrical conductivity: deposits bridge conductors and can cause tracking and shorting in equipment enclosures.",
 "Self-created ignition sources: conductive accumulation inside electrical equipment is a route to the very ignition source the programme excludes.",
 "Deep-seated smouldering: collected carbonaceous material can smoulder internally with no surface indication.",
 "Weighing and dumping releases: additive introduction into mixers is the largest single release point in most plants.",
 "Dry-room interaction: humidity control in electrode areas keeps the powder dry and readily airborne.",
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
  question: "Is conductive carbon a combustible dust?",
  answer:
   "Yes, and it sits in Class II Group F as a carbonaceous dust. It is also electrically conductive, which adds a separate hazard: accumulation can bridge and short electrical equipment quite apart from any combustion.",
 },
 {
  question: "Does Group F affect which PrestiVac line applies?",
  answer:
   "Group F is covered by both of our certified lines. It is Group E — conductive metal dust — that is covered by the EX1 scope only. Since battery plants frequently handle both carbon additives and metal-bearing powders, it is worth confirming per material rather than per building.",
 },
 {
  question: "Why does conductivity matter if the dust is not metal?",
  answer:
   "Because the electrical consequence is the same. Conductive carbon settling in and on electrical enclosures can bridge conductors, causing tracking and failure — which is a reliability problem and a way of creating an ignition source in an area designed to have none.",
 },
 {
  question: "Can collected carbon be stored before disposal?",
  answer:
   "Carbonaceous material can hold a deep-seated smoulder inside a collected volume with nothing visible at the surface. Empty into sealed disposal away from ignition sources and storage rather than leaving full containers standing.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Battery Black Mass guide", href: "/materials/battery-black-mass" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Battery Manufacturing deep dive", href: "/industries/battery" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 ],
};
