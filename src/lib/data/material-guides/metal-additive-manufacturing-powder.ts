import { Flame, Layers, Recycle, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const metalAdditiveManufacturingPowderGuide: MaterialGuideData = {
 slug: "metal-additive-manufacturing-powder",
 name: "Metal AM Powder",
 groupCrumb: { label: "Additive Manufacturing Powders", anchor: "additive-manufacturing-powders" },
 seo: {
  title: "Metal AM Powder — Group E Recovery",
  description:
   "Metal additive manufacturing powders are conductive Group E dusts, frequently reactive, and valuable enough that recovery method affects reuse.",
 },
 heroIntro:
  "Built for metal 3D printing, where the powder is simultaneously a Group E conductive dust, a potentially pyrophoric reactive metal, and an expensive feedstock that the operation would prefer to reclaim rather than dispose of.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Layers, title: "Group E Conductive Metal", detail: "EX1 scope covers Group E; EV scope does not" },
 { icon: Flame, title: "Reactive & Pyrophoric Grades", detail: "Titanium and aluminium powders ignite readily" },
 { icon: Recycle, title: "Reclaim Value", detail: "Recovery method affects whether powder can be reused" },
 ],
 facts: [
 { label: "Material type", value: "Conductive combustible metal powder — Class II Group E" },
 { label: "Where it is generated", value: "Build chamber depowdering, sieving, powder handling, recycling loops and post-processing" },
 { label: "Distinguishing property", value: "Engineered spherical particle size distribution — uniformly fine by design, and readily dispersed" },
 { label: "Governing standards", value: "NFPA 484 principles for combustible metals, carried into NFPA 660; classification under NFPA 70" },
 ],
 overview: [
 "Metal additive manufacturing uses powders engineered to a tight, uniformly fine particle size distribution, because that is what produces consistent melting and part density. That specification is precisely what makes the material readily dispersed — an AM powder is fine by design in a way that incidental process dust never is.",
 "The materials involved are frequently reactive. Titanium and aluminium powders in AM grades ignite readily, and freshly exposed surfaces from the build and handling process are chemically active. They are conductive, placing them in Class II Group E, which matters directly for equipment selection: Group E is within the EX1 HEPA scope of our CSA listing and is not within the EV scope, which covers Groups F and G only. There is also a commercial dimension absent from most dust work — AM powder is expensive, operations reclaim and re-sieve it, and a recovery method that contaminates or mixes powders destroys value as well as creating a hazard.",
 ],
 industries: [
 { label: "Additive Manufacturing", href: "/industries/additive-manufacturing" },
 { label: "Aerospace", href: "/industries/aerospace" },
 { label: "Medical Devices", href: "/industries/medical-devices" },
 { label: "Metalworking", href: "/industries/metalworking" },
 { label: "Automotive", href: "/industries/automotive" },
 ],
 riskHeading: "What makes metal AM powder worth controlling",
 risks: [
 "Group E conductive metal dust: covered by the EX1 HEPA scope on our listing, and not by the EV scope.",
 "Reactive and pyrophoric grades: titanium and aluminium AM powders ignite readily, and fresh surfaces are chemically active.",
 "Engineered fineness: the tight particle size distribution that makes the process work also makes the powder disperse readily.",
 "Water reactivity: reactive metal powders may react with water, so wet methods cannot be assumed safe.",
 "Cross-contamination destroys value: mixing alloys or contaminating powder makes an expensive feedstock unusable.",
 "Depowdering exposure: build chamber depowdering is the largest release point and often the most manual step.",
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
  question: "Which certified line covers metal AM powder?",
  answer:
   "Group E applies, and Group E is within the EX1 HEPA scope of CSA Certificate 70122393. It is not within the EV EX HEPA scope, which covers Class II Division 2 Groups F and G only. Confirm your area classification with your engineer and let us match the line to it.",
 },
 {
  question: "Can AM powder be recovered wet?",
  answer:
   "Not without establishing the material's behaviour. Reactive metal powders may react with water, and immersion approaches depend entirely on the specific alloy. That is settled by testing rather than assumed from the metal family.",
 },
 {
  question: "Does recovery method affect powder reuse?",
  answer:
   "Substantially. AM powder is expensive and operations reclaim and re-sieve it, so a recovery method that introduces contamination or mixes alloys destroys the feedstock value. Dedicated recovery per alloy is the usual arrangement for that reason as well as the safety one.",
 },
 {
  question: "Where is the biggest release point?",
  answer:
   "Build chamber depowdering, in most operations. It is manual, it handles loose fine powder directly, and it happens after every build — which makes it the step where both exposure and dispersal are highest.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "custom-engineered-systems"],
 related: [
 { label: "Titanium Dust guide", href: "/materials/titanium-dust" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "NFPA 484", href: "/hazardous-locations/nfpa-484" },
 { label: "Additive Manufacturing deep dive", href: "/industries/additive-manufacturing" },
 ],
};
