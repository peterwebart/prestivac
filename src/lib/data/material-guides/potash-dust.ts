import { Filter, Pickaxe, Recycle, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const potashDustGuide: MaterialGuideData = {
 slug: "potash-dust",
 name: "Potash Dust",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
  title: "Potash Dust — Mineral Dust Control",
  description:
   "Potash is non-combustible, so the hazard is not deflagration. It is corrosive to equipment, irritant to airways and hygroscopic enough to cake hard on every surface.",
 },
 heroIntro:
  "Built for potash handling, where the material is genuinely not a combustion hazard and the problems are corrosion, caking and respiratory irritation. Potash draws moisture aggressively, sets hard on equipment and attacks steel while it does it.",
 badges: [
 { icon: ShieldCheck, title: "Robust Industrial Construction", detail: "Built for corrosive, high-volume mineral dust" },
 { icon: Pickaxe, title: "Non-Combustible Mineral", detail: "Hazard is corrosion and irritation, not deflagration" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains an irritant respirable fraction" },
 { icon: Recycle, title: "Corrosion Resistance", detail: "Stainless construction matters for this duty" },
 ],
 facts: [
 { label: "Material type", value: "Non-combustible mineral dust — potassium salts" },
 { label: "Where it is generated", value: "Mining, crushing, screening, drying, compaction, conveying, storage and rail or ship loadout" },
 { label: "Distinguishing property", value: "Strongly hygroscopic and corrosive to carbon steel; irritant to airways, eyes and skin" },
 { label: "Governing standards", value: "Occupational exposure controls; not an NFPA 660 combustible dust material" },
 ],
 overview: [
 "Potash is produced and moved in very large tonnages through crushing, screening, drying, compaction and loadout. Dust is generated continuously, and because the operations are large and often partly open, both airborne load and accumulation are constant features of the site rather than exceptional events.",
 "Being clear about the hazard helps: potash is non-combustible, so the dust explosion framework does not apply to it. What does apply is corrosion, caking and irritation. Potash is strongly hygroscopic — deposits pull moisture from the air, set hard, and become tenacious crusts that resist ordinary cleaning. Combined with that moisture, the salt attacks carbon steel, so accumulation on structure and equipment causes progressive corrosion damage rather than a fire risk. Airborne potash is also an irritant to airways, eyes and skin, which is why the airborne load still matters even though the fire question does not.",
 ],
 industries: [
 { label: "Mining & Minerals", href: "/industries/mining" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Marine & Shipyard", href: "/industries/marine" },
 { label: "Rail", href: "/industries/rail" },
 ],
 riskHeading: "What makes potash dust worth controlling",
 risks: [
 "Corrosion: potash combined with ambient moisture attacks carbon steel, so accumulation causes progressive structural and equipment damage.",
 "Hard caking: strong hygroscopicity sets deposits into tenacious crusts that resist brushing and build over time.",
 "Respiratory and skin irritation: airborne potash irritates airways, eyes and skin, so the airborne load matters regardless of the fire question.",
 "Very high volumes: continuous generation through crushing, drying, compaction and loadout.",
 "Not a combustible dust: applying the deflagration framework here misdirects effort from the controls that actually matter.",
 "Equipment corrosion: recovery equipment used in this duty needs corrosion-resistant construction to survive it.",
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
  question: "Is potash combustible?",
  answer:
   "No. Potash is a non-combustible mineral, so the combustible dust framework does not apply to it. Being straightforward about that matters, because effort spent on deflagration controls here is effort not spent on corrosion and exposure, which are the real problems.",
 },
 {
  question: "What is the main damage mechanism then?",
  answer:
   "Corrosion. Potash is strongly hygroscopic, and deposits combined with drawn moisture attack carbon steel. Accumulation on structure, equipment and electrical enclosures causes progressive damage that is expensive and slow to reverse.",
 },
 {
  question: "Why does the dust still need controlling?",
  answer:
   "Airborne potash irritates airways, eyes and skin, and deposits cake hard on every surface they reach. Removing it protects both the workforce and the plant, even though the fire argument does not apply.",
 },
 {
  question: "What construction should recovery equipment have?",
  answer:
   "Corrosion-resistant. A unit used continuously in potash duty is exposed to the same corrosive salt as the rest of the plant, so stainless construction and sealed housings matter more here than explosion protection does.",
 },
 ],
 recommended: ["industrial-vacuums", "hepa-vacuums", "central-vacuum-systems", "custom-engineered-systems"],
 related: [
 { label: "Phosphate Dust guide", href: "/materials/phosphate-dust" },
 { label: "Fertilizer Dust guide", href: "/materials/fertilizer-dust" },
 { label: "Mining deep dive", href: "/industries/mining" },
 { label: "Industrial vacuums", href: "/products/industrial-vacuums" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 ],
};
