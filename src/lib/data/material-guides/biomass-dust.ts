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
