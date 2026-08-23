import { AlertTriangle, Droplet, Filter, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const mercuryGuide: MaterialGuideData = {
 slug: "mercury",
 name: "Mercury",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
  title: "Mercury Recovery — Vacuum & Containment",
  description:
   "Mercury is a liquid metal that vaporises at room temperature, so recovery is a vapour containment problem. Why an ordinary vacuum makes a spill dramatically worse.",
 },
 heroIntro:
  "Built for the one recovery job where using the wrong equipment is measurably worse than doing nothing. Mercury is a liquid metal that evaporates at room temperature, and an ordinary vacuum takes a contained spill and atomises it into a building-wide vapour exposure.",
 badges: [
 { icon: ShieldCheck, title: "Dedicated Recovery", detail: "Purpose-built collection, never a general-purpose unit" },
 { icon: Droplet, title: "Liquid Metal", detail: "Vaporises at room temperature — the vapour is the hazard" },
 { icon: Filter, title: "Vapour Adsorption", detail: "An adsorption stage beyond particulate filtration" },
 { icon: AlertTriangle, title: "Never a Shop Vacuum", detail: "Ordinary vacuums disperse and contaminate permanently" },
 ],
 facts: [
 { label: "Material type", value: "Liquid metal — vaporises at ambient temperature. Not a combustible dust." },
 { label: "Where it is encountered", value: "Lamp and thermometer breakage, dental amalgam, chlor-alkali plants, laboratories, meters and switchgear, decommissioning" },
 { label: "Distinguishing property", value: "The vapour is odourless and colourless, and it is the primary exposure route — the visible beads are not the whole problem" },
 { label: "Governing standards", value: "Occupational exposure limits for mercury vapour; hazardous waste rules for the recovered material" },
 ],
 overview: [
 "Mercury is encountered as spilled beads from broken lamps, thermometers and manometers, as dental amalgam waste, in chlor-alkali and instrumentation settings, and during decommissioning of older equipment. It is the only common industrial metal that is liquid at room temperature, and it beads and rolls into floor joints, under equipment and into crevices where it cannot be seen.",
 "The critical point is that mercury evaporates continuously at ambient temperature, and the vapour is odourless and colourless. A spill left in place is a persistent exposure source, and residue trapped in a floor seam goes on releasing vapour long after the visible beads are gone. That is why recovery matters — and why the method matters more than the promptness.",
 ],
 industries: [
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Medical Devices", href: "/industries/medical-devices" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 ],
 riskHeading: "Why an ordinary vacuum makes a mercury spill worse",
 risks: [
 "Atomisation: a general-purpose vacuum breaks mercury into fine droplets and drives them through the airstream, converting a localised spill into a building-wide vapour release.",
 "Permanent contamination of the machine: mercury retained in the motor, hose and housing keeps releasing vapour afterwards, so the vacuum becomes a mobile emission source.",
 "Filtration does not stop vapour: particulate filtration, including HEPA, does not retain mercury vapour — adsorption is a separate requirement.",
 "Invisible residue: beads roll into seams, joints and equipment bases where they continue to evaporate unseen.",
 "Heating accelerates release: a warm motor exhaust raises the vapour release rate at the moment the material is passing through it.",
 "Waste classification: recovered mercury and contaminated media are regulated waste, so collection has to keep them contained for disposal.",
 ],
 solutions: [
 "Dedicated mercury recovery equipment, never a general-purpose vacuum used once and returned to the pool.",
 "An adsorption stage beyond particulate filtration, because vapour is not retained by a filter medium.",
 "Sealed collection that keeps recovered mercury contained for regulated disposal rather than transferring it to an open container.",
 "Equipment dedicated to the material permanently — a unit used for mercury does not return to general duty.",
 "Recovery of the invisible fraction from seams, joints and equipment bases, not only the visible beads.",
 "Documented handover of recovered material into the facility's hazardous waste stream.",
 ],
 configuration: [
 { step: "Confirm the material first", detail: "Mercury recovery is a specialist application. Establish that mercury is what you have, and its extent, before selecting equipment." },
 { step: "Never use a general-purpose unit", detail: "This is the one case where reaching for the shop vacuum produces a materially worse outcome than leaving the spill until proper equipment arrives." },
 { step: "Specify vapour adsorption", detail: "Particulate filtration does not retain mercury vapour. The adsorption stage is a separate specification item." },
 { step: "Dedicate the equipment", detail: "A unit used for mercury stays with mercury. Cross-use spreads contamination into every subsequent application." },
 { step: "Plan the waste route", detail: "Recovered mercury and contaminated media are regulated waste. Confirm the disposal route before recovery, not after." },
 ],
 bestPractices: [
 "Treat mercury recovery as a specialist procedure with its own equipment, not as an unusual housekeeping task.",
 "Never use a general-purpose or shop vacuum on mercury under any circumstances.",
 "Recover from seams, floor joints and equipment bases, where beads settle out of sight and keep evaporating.",
 "Keep the dedicated unit labelled and segregated so it cannot be drawn back into general use.",
 "Ventilate during and after recovery, and confirm the area before returning it to normal occupancy.",
 "Route recovered material and contaminated media into the regulated waste stream with documentation.",
 ],
 faqs: [
 {
  question: "Can we vacuum up a mercury spill?",
  answer:
   "Not with a general-purpose vacuum. It atomises the mercury and drives it through the airstream, turning a localised spill into a building-wide vapour release, and it permanently contaminates the machine so it keeps emitting afterwards. Mercury recovery requires dedicated equipment.",
 },
 {
  question: "Does HEPA filtration capture mercury?",
  answer:
   "It captures particulate. Mercury vapour is not particulate, so a filter medium does not retain it — adsorption is a separate requirement. A HEPA unit alone is not a mercury solution.",
 },
 {
  question: "Is mercury a combustible dust?",
  answer:
   "No. It is a liquid metal, and the hazard is toxicity through vapour inhalation rather than deflagration. It appears in this directory because recovery equipment is specified for it, not because it burns.",
 },
 {
  question: "Can the unit be reused for other materials afterwards?",
  answer:
   "It should not be. Mercury retained in a machine continues to release vapour, so a unit used for mercury stays dedicated to it. Returning it to general duty spreads contamination into every subsequent application.",
 },
 ],
 recommended: ["pneumatic-vacuums", "industrial-vacuums", "hepa-vacuums", "custom-engineered-systems"],
 related: [
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Toxic liquid recovery", href: "/guides/toxic-liquid-recovery" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 { label: "Get a quote", href: "/get-a-quote" },
 ],
};
