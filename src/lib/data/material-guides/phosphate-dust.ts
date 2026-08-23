import { Filter, Pickaxe, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const phosphateDustGuide: MaterialGuideData = {
 slug: "phosphate-dust",
 name: "Phosphate Dust",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
  title: "Phosphate Dust — Mineral Dust Control",
  description:
   "Phosphate rock dust is largely non-combustible, and its real hazards are silica content and respiratory exposure.",
 },
 heroIntro:
  "Built for phosphate rock handling, where the honest answer is that the dust is not primarily a combustion hazard. Phosphate rock dust is a mineral dust whose significance is respiratory — including possible crystalline silica content — rather than explosive.",
 badges: [
 { icon: ShieldCheck, title: "Robust Industrial Construction", detail: "Built for continuous high-volume mineral dust" },
 { icon: Pickaxe, title: "Mineral Dust", detail: "Largely non-combustible; hazard is respiratory" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains respirable crystalline silica fraction" },
 { icon: ScrollText, title: "Exposure Controls", detail: "Silica exposure limits govern rather than NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Mineral dust — largely non-combustible. Respiratory hazard rather than deflagration hazard" },
 { label: "Where it is generated", value: "Mining, crushing, screening, drying, conveying, stockpiling and ship or rail loading" },
 { label: "Distinguishing property", value: "May contain crystalline silica; elemental phosphorus is a completely different and pyrophoric material" },
 { label: "Governing standards", value: "Occupational exposure limits for respirable crystalline silica; not primarily an NFPA 660 material" },
 ],
 overview: [
 "Phosphate rock is mined, crushed, screened, dried and moved in very large volumes, and every one of those steps generates mineral dust. Loadout and stockpiling are typically the largest release points, and the quantities involved mean accumulation and airborne load are continuous rather than occasional.",
 "It is worth being straightforward about the hazard: phosphate rock dust is largely non-combustible, and presenting it as a dust explosion risk would misdirect the control effort. What matters is respiratory exposure, and specifically the possibility of crystalline silica in the ore, which carries its own exposure limits and health consequences. A separate point of confusion deserves flagging — elemental phosphorus is an entirely different material, pyrophoric and hazardous in ways phosphate rock is not. The two are not interchangeable despite the similar names.",
 ],
 industries: [
 { label: "Mining & Minerals", href: "/industries/mining" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Construction Materials", href: "/industries/construction-materials" },
 { label: "Marine & Shipyard", href: "/industries/marine" },
 ],
 riskHeading: "What makes phosphate dust worth controlling",
 risks: [
 "Respirable crystalline silica: phosphate ore may contain silica, which carries exposure limits and long-term health consequences.",
 "Very high volumes: mining and loadout generate continuous dust, so accumulation and airborne load are constant rather than episodic.",
 "Not primarily combustible: treating it as a deflagration hazard misdirects effort away from the exposure controls that matter.",
 "Elemental phosphorus confusion: a different material entirely, pyrophoric, and not to be conflated with phosphate rock.",
 "Abrasive dust: mineral dust wears equipment and requires robust construction for sustained duty.",
 "Loadout and stockpile releases: the largest single sources in most operations, and the least enclosed.",
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
  question: "Is phosphate dust combustible?",
  answer:
   "Phosphate rock dust is largely non-combustible. Its significance is respiratory rather than explosive, and the controls that matter are exposure controls. Saying otherwise would point the effort in the wrong direction.",
 },
 {
  question: "What is the actual hazard then?",
  answer:
   "Respirable dust, and in particular the possibility of crystalline silica in the ore. Silica exposure carries defined limits and long-term health consequences, which makes retained absolute filtration and dust suppression the relevant controls.",
 },
 {
  question: "Is elemental phosphorus the same thing?",
  answer:
   "No — completely different. Elemental phosphorus is pyrophoric and hazardous in ways phosphate rock is not. The similar names cause genuine confusion, and the two require entirely different handling.",
 },
 {
  question: "What construction suits this duty?",
  answer:
   "Mineral dust is abrasive and the volumes are high, so robust industrial construction and sustained-duty capability matter more here than explosion protection does. Filtration selection follows the silica question.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems", "pneumatic-vacuums"],
 related: [
 { label: "Silica Dust guide", href: "/materials/silica-dust" },
 { label: "Potash Dust guide", href: "/materials/potash-dust" },
 { label: "Mining deep dive", href: "/industries/mining" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 { label: "Industrial vacuums", href: "/products/industrial-vacuums" },
 ],
};
