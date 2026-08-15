import { Filter, Flame, Leaf, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const pelletDustGuide: MaterialGuideData = {
 slug: "pellet-dust",
 name: "Pellet Dust",
 groupCrumb: { label: "Biomass & Renewable Energy Dusts", anchor: "biomass-dusts" },
 seo: {
  title: "Pellet Dust — Combustible Dust Control",
  description:
   "Wood and biomass pellet handling generates fines through attrition at every transfer, and pellet fines are finer and drier than the material they came from.",
 },
 heroIntro:
  "Built for pellet production, storage and handling, where the dust is created by the pellets rubbing against each other and everything else. Pellet fines are drier and finer than the feedstock they were made from, which makes them more readily dispersed, not less.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Leaf, title: "Attrition-Generated Fines", detail: "Dust is created at every transfer point" },
 { icon: Flame, title: "Self-Heating in Storage", detail: "Documented in pellet silos and bulk storage" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Pelletising, cooling, screening, conveying, silo loading, ship and rail loadout, and end-user handling" },
 { label: "Distinguishing property", value: "Fines are generated continuously by attrition and are drier and finer than the original feedstock" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former wood and particulate standards" },
 ],
 overview: [
 "Pellets are made specifically to be dense, dry and handleable, and that is exactly why they generate dust. Every transfer — conveyor to conveyor, into silos, into ships and rail cars, into end-user hoppers — abrades pellet surfaces against each other, producing fines continuously. A handling chain with many transfer points produces more dust than one with few, regardless of how well any individual point is enclosed.",
 "Those fines are drier and finer than the feedstock the pellets were made from, because pelletising involves drying and compression. That makes them more readily dispersed than the original material, and it means an operation that handled green feedstock without a serious dust problem can find that pelletising has created one. Bulk pellet storage also carries a documented self-heating record, and off-gassing in enclosed pellet storage is a recognised confined-space hazard in this sector.",
 ],
 industries: [
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Woodworking", href: "/industries/woodworking" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Marine & Shipyard", href: "/industries/marine" },
 { label: "Rail", href: "/industries/rail" },
 ],
 riskHeading: "What makes pellet dust worth controlling",
 risks: [
 "Attrition at every transfer: fines are generated continuously by pellets abrading against each other and against equipment.",
 "Drier and finer than feedstock: pelletising dries and compresses, so the resulting fines disperse more readily than the original material.",
 "Transfer point multiplication: each additional handling step in the chain adds to the total dust generated.",
 "Self-heating in bulk storage: documented in pellet silos, requiring monitoring independent of housekeeping.",
 "Off-gassing: enclosed pellet storage can release gases, making silo entry a confined-space question.",
 "Loadout releases: ship and rail loading move large tonnages quickly and are typically the least enclosed points.",
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
  question: "Where does pellet dust actually come from?",
  answer:
   "Attrition. Pellets rubbing against each other and against equipment at every transfer point produce fines continuously. That means the dust load tracks the number of handling steps in the chain as much as the tonnage moved.",
 },
 {
  question: "Are pellet fines worse than the original wood dust?",
  answer:
   "More readily dispersed, generally. Pelletising involves drying and compression, so the fines that come off are drier and finer than the feedstock the pellets were made from. An operation that handled green material without difficulty can find pelletising has created a dust problem.",
 },
 {
  question: "Do pellet silos self-heat?",
  answer:
   "Bulk pellet storage carries a documented self-heating record, and it needs no external ignition source. Storage monitoring belongs alongside the housekeeping programme rather than being treated as a separate concern.",
 },
 {
  question: "Is entry into pellet storage a hazard?",
  answer:
   "Enclosed pellet storage can off-gas, which is a recognised confined-space hazard in this sector. Silo and bunker entry should go through your confined-space procedure rather than being treated as routine.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Biomass Dust guide", href: "/materials/biomass-dust" },
 { label: "Sawdust guide", href: "/materials/sawdust" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Energy & Power deep dive", href: "/industries/energy" },
 { label: "Woodworking deep dive", href: "/industries/woodworking" },
 ],
};
