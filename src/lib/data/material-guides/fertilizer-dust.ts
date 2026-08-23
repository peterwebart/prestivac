import { Filter, FlaskConical, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const fertilizerDustGuide: MaterialGuideData = {
 slug: "fertilizer-dust",
 name: "Fertilizer Dust",
 groupCrumb: { label: "Chemical Dusts", anchor: "chemical-dusts" },
 seo: {
  title: "Fertilizer Dust — Oxidiser & Dust Hazards",
  description:
   "Fertilizer dust spans combustible organics and strong oxidisers, and ammonium nitrate grades carry a detonation history.",
 },
 heroIntro:
  "Built for blending and bagging operations where the product category spans genuinely different hazards. Some fertilizer dusts are combustible; some are powerful oxidisers that make other materials burn; ammonium nitrate has a detonation record. What you are handling has to be established before anything else.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: FlaskConical, title: "Oxidiser Risk", detail: "Some grades intensify combustion of other materials" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Identify Before Handling", detail: "Ammonium nitrate grades are handled under their own rules" },
 ],
 facts: [
 { label: "Material type", value: "Varies fundamentally by grade — combustible organic dust, inert mineral, or strong oxidiser" },
 { label: "Where it is generated", value: "Blending, granulation, screening, conveying, bagging and bulk loading" },
 { label: "Distinguishing property", value: "Oxidising grades supply oxygen to a fire; ammonium nitrate carries a documented detonation history" },
 { label: "Governing standards", value: "NFPA 660 for combustible grades, with ammonium nitrate storage and handling governed separately" },
 ],
 overview: [
 "Fertilizer plants blend, granulate, screen, convey and bag a wide range of products, and every mechanical step generates dust. The bagging line and bulk loadout are typically the largest release points, and dust accumulates through the building on structural steel and equipment.",
 "The critical point is that 'fertilizer dust' is not one material. Urea and organic-based products behave as combustible dusts. Many mineral fertilizers are largely inert. Nitrate-based products are oxidisers, which means they do not merely burn — they supply oxygen that intensifies the combustion of anything else present, including the ordinary organic dust and packaging debris in the same building. Ammonium nitrate specifically has a detonation history under fire and confinement conditions that has produced some of the most destructive industrial incidents on record, and it is handled under its own regime rather than as a general dust. Identification of the specific product is therefore the first step, not a formality.",
 ],
 industries: [
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Mining & Minerals", href: "/industries/mining" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 ],
 riskHeading: "What makes fertilizer dust worth controlling",
 risks: [
 "Category spans different hazards: combustible organics, inert minerals and strong oxidisers all appear under the same heading.",
 "Oxidising grades: nitrate-based products intensify the combustion of other materials rather than simply burning themselves.",
 "Ammonium nitrate: carries a documented detonation history under fire and confinement, and is handled under its own regime.",
 "Mixed accumulation: fertilizer dust settling alongside organic dust and packaging debris creates a fuel-and-oxidiser combination.",
 "Bagging and loadout releases: the highest-volume release points in most plants, and often the least enclosed.",
 "Hygroscopic caking: many grades draw moisture and cake, then break back into fines when disturbed.",
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
  question: "Is fertilizer dust combustible?",
  answer:
   "It depends entirely on the product. Urea and organic-based fertilizers behave as combustible dusts. Many mineral fertilizers are largely inert. Nitrate grades are oxidisers, which is a different hazard again. Identify the specific product from its safety data sheet before deciding anything.",
 },
 {
  question: "What is the concern with oxidising fertilizers?",
  answer:
   "They supply oxygen to a fire rather than merely burning. That means accumulated oxidiser dust mixed with ordinary combustible dust and packaging debris produces a combination more severe than either alone — which is a reason to keep the two from accumulating together.",
 },
 {
  question: "How is ammonium nitrate treated?",
  answer:
   "Under its own storage and handling regime, not as a general dust. It has a documented detonation history under fire and confinement conditions, and the controls that apply to it go well beyond housekeeping. Your safety function should be leading that assessment.",
 },
 {
  question: "Why does caked fertilizer still matter?",
  answer:
   "Hygroscopic grades cake with ambient moisture and look stable, but disturbance breaks the deposit back into fines. The accumulation remains an inventory of material rather than an inert crust.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Urea Dust guide", href: "/materials/urea-dust" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 ],
};
