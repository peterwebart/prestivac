import { Filter, Flame, FlaskConical, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const activatedCarbonGuide: MaterialGuideData = {
 slug: "activated-carbon",
 name: "Activated Carbon",
 groupCrumb: { label: "Chemical Dusts", anchor: "chemical-dusts" },
 seo: {
  title: "Activated Carbon — Self-Heating & Recovery",
  description:
   "Activated carbon is a carbonaceous Group F dust with a documented self-heating and oxygen-depletion record.",
 },
 heroIntro:
  "Built for a material whose hazards mostly come from what it has already adsorbed. Activated carbon is a carbonaceous dust in its own right, it self-heats in bulk, it depletes oxygen in enclosed spaces, and a spent bed carries whatever it was installed to capture.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Flame, title: "Self-Heating Material", detail: "Known for spontaneous heating in bulk storage" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains a fine respirable carbonaceous dust" },
 { icon: FlaskConical, title: "Adsorbed Load", detail: "Spent carbon carries the contaminant it captured" },
 ],
 facts: [
 { label: "Material type", value: "Combustible carbonaceous dust, Class II Group F" },
 { label: "Where it is generated", value: "Bed loading and change-out, milling, screening, pneumatic transfer and spill cleanup" },
 { label: "Distinguishing property", value: "Self-heats in bulk, depletes oxygen in enclosed spaces, and spent media carries its adsorbed contaminant" },
 { label: "Governing standards", value: "NFPA 660, with hazardous-location classification under NFPA 70" },
 ],
 overview: [
 "Activated carbon is used wherever something needs to be adsorbed out of a gas or liquid stream — solvent recovery, air treatment, water purification, process gas cleanup. It arrives and is handled as granules or pellets, and the handling itself generates a fine carbonaceous dust at loading, change-out, screening and transfer.",
 "Two properties make it distinctive. The first is self-heating: activated carbon is well known for spontaneous heating in bulk, particularly when freshly activated or when it has adsorbed oxidisable material, and it can consume oxygen from an enclosed space to the point where entry becomes dangerous. The second is that a spent bed is defined by what it captured. Carbon removed from a solvent recovery duty carries flammable solvent; carbon from a process stream may carry something toxic. The recovery method has to address the carbon and its load together, which means identifying the adsorbed material before the change-out is planned rather than after.",
 ],
 industries: [
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Oil & Gas", href: "/industries/oil-gas" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 ],
 riskHeading: "What makes activated carbon worth controlling",
 risks: [
 "Carbonaceous combustible dust: fine carbon dust is Class II Group F and suspends readily during change-out and transfer.",
 "Self-heating in bulk: spontaneous heating is a documented behaviour, especially in fresh media or carbon loaded with oxidisable material.",
 "Oxygen depletion: bulk carbon can consume oxygen from an enclosed space, making vessel and silo entry a confined-space hazard.",
 "Adsorbed contaminant: spent media carries whatever it captured — flammable solvent, or a toxic process component.",
 "Deep-seated smouldering: carbonaceous material can smoulder inside a collected volume with no surface indication for hours.",
 "Fine respirable fraction: handling generates a dust that stays airborne and reaches well beyond the change-out point.",
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
  question: "Is activated carbon dust combustible?",
  answer:
   "Yes. It is a carbonaceous dust and sits in Class II Group F. It also self-heats in bulk, which is a fire path that does not require an external ignition source at all — a distinction worth keeping clear when assessing storage as well as handling.",
 },
 {
  question: "Why does spent carbon need different handling from fresh?",
  answer:
   "Because it carries its adsorbed load. Carbon from a solvent recovery duty holds flammable solvent; carbon from a process stream may hold something toxic. Identify what the bed captured before planning the change-out — the adsorbed material frequently governs the method rather than the carbon does.",
 },
 {
  question: "Is vessel entry a concern?",
  answer:
   "Bulk activated carbon can deplete oxygen in an enclosed space. Vessel, silo and hopper entry around this material is a confined-space question that should be handled under your entry procedure rather than treated as routine.",
 },
 {
  question: "Can collected carbon be left in the container overnight?",
  answer:
   "It is not advisable. Carbonaceous material can hold a deep-seated smoulder with no visible surface indication, and activated carbon self-heats in bulk. Empty into sealed disposal away from ignition sources and storage rather than leaving a full container standing in the plant.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Flammable liquid recovery", href: "/guides/flammable-liquid-recovery" },
 { label: "Chemical deep dive", href: "/industries/chemical" },
 { label: "Recovered dust: reclaim or dispose?", href: "/guides/recovered-dust-disposal-and-reclaim" },
 ],
};
