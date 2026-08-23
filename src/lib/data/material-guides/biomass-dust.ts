import { Filter, Flame, Leaf, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const biomassDustGuide: MaterialGuideData = {
 slug: "biomass-dust",
 name: "Biomass Dust",
 groupCrumb: { label: "Biomass & Renewable Energy Dusts", anchor: "biomass-dusts" },
 seo: {
  title: "Biomass Dust — Combustible Dust Control",
  description:
   "Biomass handling generates combustible dust from a feedstock that varies constantly, and stored biomass self-heats. Both properties shape the housekeeping programme.",
 },
 heroIntro:
  "Built for biomass power and fuel handling, where the feedstock changes and the material heats itself. Biomass dust is a combustible organic dust from a stream whose composition and moisture vary by delivery, and stored biomass has a well-documented self-heating record.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Leaf, title: "Variable Feedstock", detail: "Composition and moisture change between deliveries" },
 { icon: Flame, title: "Self-Heating in Storage", detail: "Documented behaviour in silos and stockpiles" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Reception, milling, screening, conveying, silo transfer, and feed to boilers or pelletisers" },
 { label: "Distinguishing property", value: "Feedstock variability and a documented self-heating tendency in bulk storage" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former agricultural and particulate standards" },
 ],
 overview: [
 "Biomass fuel handling — wood chip, agricultural residue, energy crops and mixed streams — generates dust at reception, milling, screening, conveying and every transfer to storage or combustion. Conveyor transfer points and silo loading are usually the dominant release points, and the material travels through the plant on the air movement that large handling operations create.",
 "Two properties distinguish it from a single-material dust. Feedstock variability means the material is not constant: moisture content, particle size and composition change with the delivery, so a characterisation carried out once describes one consignment rather than the ongoing stream. And biomass self-heats in bulk storage. Biological and chemical activity in stored material raises temperature internally, and silo and stockpile fires from this mechanism are a documented and recurring problem in the sector. That is a fire path requiring no external ignition source at all, which puts storage monitoring alongside housekeeping rather than after it.",
 ],
 industries: [
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Woodworking", href: "/industries/woodworking" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Paper Mills", href: "/industries/paper-mills" },
 ],
 riskHeading: "What makes biomass dust worth controlling",
 risks: [
 "Combustible organic dust: fine biomass fines suspend readily at every transfer and carry deflagration conditions in enclosures.",
 "Self-heating in storage: biological and chemical activity raises internal temperature in silos and stockpiles without any external ignition source.",
 "Feedstock variability: moisture, particle size and composition change by delivery, so one characterisation does not describe the stream.",
 "Transfer point releases: conveyor transfers and silo loading dominate the airborne load in most plants.",
 "Overhead accumulation: fines settle on structure, conveyor galleries and equipment throughout the handling chain.",
 "Off-gassing in storage: stored biomass can release gases in enclosed spaces, which is a confined-space consideration.",
 ],
 solutions: [
 "Recovery at conveyor transfer points and silo loading, which dominate release in most plants.",
 "Storage monitoring alongside housekeeping, because bulk biomass self-heats without any external ignition source.",
 "Explosion-proof construction across milling, screening and boiler feed.",
 "Periodic re-testing to reflect feedstock variability rather than relying on one characterisation.",
 "Grounded, bonded conductive path across the handling chain.",
 "Confined-space procedure for silo and bunker entry, given off-gassing behaviour.",
 ],
 configuration: [
 { step: "Start at the transfer points", detail: "Conveyor transfers and silo loading release more than any other part of the chain." },
 { step: "Treat storage as a separate control", detail: "Self-heating in silos and stockpiles is a fire path that housekeeping does not address." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for milling and conveying areas." },
 { step: "Plan for a moving target", detail: "Moisture, particle size and composition change with each delivery." },
 { step: "Bring silo entry into the entry procedure", detail: "Off-gassing in enclosed storage makes this a confined-space question." },
 ],
 bestPractices: [
 "Monitor stored material for self-heating independently of the cleaning schedule.",
 "Re-test as feedstock changes rather than relying on a single characterisation.",
 "Prioritise conveyor galleries and transfer towers.",
 "Treat silo and bunker entry as confined-space work.",
 "Verify grounding across long conveying runs.",
 "Empty into sealed disposal away from stockpiles.",
 ],
 faqs: [
 {
  question: "Is biomass dust combustible?",
  answer:
   "Yes. Biomass fines are a combustible organic dust in Class II Group G. Severity varies substantially with moisture and particle size, and because the feedstock varies, so does the result — which is an argument for periodic retesting rather than a single characterisation.",
 },
 {
  question: "Why does stored biomass catch fire on its own?",
  answer:
   "Biological and chemical activity in bulk material generates heat internally, and where that heat cannot escape it accumulates. Silo and stockpile fires from self-heating are a documented and recurring problem in this sector, and they need no external ignition source.",
 },
 {
  question: "Does feedstock variability change the equipment requirement?",
  answer:
   "It changes the confidence you can place in a single assessment. Composition and moisture shift with deliveries, so a characterisation describes a consignment rather than the stream. Building that into the review cycle is more useful than treating the first test as permanent.",
 },
 {
  question: "Is silo entry a concern?",
  answer:
   "Stored biomass can off-gas in enclosed spaces, which makes silo and bunker entry a confined-space question handled under your entry procedure rather than as routine access.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Pellet Dust guide", href: "/materials/pellet-dust" },
 { label: "Sawdust guide", href: "/materials/sawdust" },
 { label: "Agricultural Biomass Dust guide", href: "/materials/agricultural-biomass-dust" },
 { label: "Energy & Power deep dive", href: "/industries/energy" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 ],
};
