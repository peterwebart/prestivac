import { Filter, FlaskConical, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const ureaDustGuide: MaterialGuideData = {
 slug: "urea-dust",
 name: "Urea Dust",
 groupCrumb: { label: "Chemical Dusts", anchor: "chemical-dusts" },
 seo: {
  title: "Urea Dust — Combustible Dust & Recovery",
  description:
   "Urea prill and granule handling generates a strongly hygroscopic dust that cakes hard on surfaces and releases ammonia on decomposition when heated.",
 },
 heroIntro:
  "Built for urea handling in fertilizer and chemical plants, and increasingly in diesel exhaust fluid production. Urea dust is strongly hygroscopic, cakes into hard deposits that resist ordinary cleaning, and decomposes on heating to release ammonia.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: FlaskConical, title: "Releases Ammonia on Heating", detail: "Thermal decomposition produces irritant vapour" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Standards", detail: "NFPA 660 for combustible dust handling" },
 ],
 facts: [
 { label: "Material type", value: "Combustible dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Prilling and granulation, screening, conveying, bagging, bulk loadout and DEF production" },
 { label: "Distinguishing property", value: "Strongly hygroscopic — cakes into hard deposits; decomposes on heating to release ammonia" },
 { label: "Governing standards", value: "NFPA 660, with ammonia exposure controls where thermal decomposition is possible" },
 ],
 overview: [
 "Urea is produced as prills or granules and handled in bulk through screening, conveying, bagging and loadout. Attrition between particles during every transfer generates dust, and the volumes involved mean accumulation builds quickly. Diesel exhaust fluid production has added a further stream of urea handling in facilities that did not previously deal with it.",
 "Two properties shape the housekeeping approach. Urea is strongly hygroscopic, so deposits draw ambient moisture and set into hard cake that resists brushing and builds over time — a deposit that looks like part of the equipment rather than an accumulation. And on heating, urea decomposes and releases ammonia, which means a fire or hot surface in a urea handling area produces an irritant vapour problem on top of the fire itself. That is worth accounting for in emergency planning as well as in day-to-day cleaning.",
 ],
 industries: [
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Energy & Power", href: "/industries/energy" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 ],
 riskHeading: "What makes urea dust worth controlling",
 risks: [
 "Combustible dust: urea fines suspend at transfer points and carry deflagration conditions inside enclosures.",
 "Hard caking: strong hygroscopicity sets deposits into cake that resists brushing and builds steadily between cleans.",
 "Ammonia on decomposition: heating produces irritant vapour, adding an exposure dimension to any fire or hot-surface event.",
 "High-volume attrition: bulk handling generates dust continuously through screening, conveying and loadout.",
 "Deceptive deposits: caked urea reads as part of the equipment rather than as an accumulation of combustible material.",
 "Corrosion interaction: urea deposits combined with moisture can accelerate corrosion on structural steel and equipment.",
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
  question: "Is urea dust combustible?",
  answer:
   "Yes. Urea fines behave as a combustible dust in Class II Group G. Severity depends on particle size, which in urea handling is largely a function of attrition during transfer, and is established by testing your material.",
 },
 {
  question: "Why does urea cake so hard?",
  answer:
   "It is strongly hygroscopic. Deposits draw ambient moisture, then set as they dry, producing hard cake that brushing will not remove. The layer builds steadily and eventually looks like part of the equipment rather than an accumulation.",
 },
 {
  question: "What happens if urea is heated in a fire?",
  answer:
   "It decomposes and releases ammonia, which is an irritant vapour. That adds an exposure and evacuation dimension to any fire in a urea handling area, and it is worth reflecting in emergency planning rather than discovering during an incident.",
 },
 {
  question: "Is DEF production the same handling problem?",
  answer:
   "The dust side is the same material and behaves the same way. Diesel exhaust fluid production has brought urea handling into facilities that had no previous experience of it, which is often where the housekeeping programme has not yet caught up with the material.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Fertilizer Dust guide", href: "/materials/fertilizer-dust" },
 { label: "Chemical deep dive", href: "/industries/chemical" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
 ],
};
