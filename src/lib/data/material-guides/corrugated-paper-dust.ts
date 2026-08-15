import { FileText, Filter, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const corrugatedPaperDustGuide: MaterialGuideData = {
 slug: "corrugated-paper-dust",
 name: "Corrugated Paper Dust",
 groupCrumb: { label: "Paper & Textile Dusts", anchor: "paper-textile-dusts" },
 seo: {
  title: "Corrugated Paper Dust — Control & Recovery",
  description:
   "Corrugating and converting generate a mix of fine paper dust and starch fines, both combustible, accumulating on high steel throughout the plant.",
 },
 heroIntro:
  "Built for corrugators and converting lines, where the dust load is a combination of paper fibre and the starch adhesive that holds the board together. Both are combustible, both are fine, and both settle on overhead steel across the whole building.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: FileText, title: "Fibre and Starch Mix", detail: "Paper fines plus combustible starch adhesive" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Standards", detail: "NFPA 660 for combustible dust handling" },
 ],
 facts: [
 { label: "Material type", value: "Combustible dust, Class II Group G — cellulose fibre with starch adhesive fines" },
 { label: "Where it is generated", value: "Corrugating, slitting, die-cutting, folding, gluing, stacking and trimming" },
 { label: "Distinguishing property", value: "Two combustible components at once — cellulose fibre and starch-based adhesive fines" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former wood and particulate standards" },
 ],
 overview: [
 "Corrugating and converting are continuous dust generators. Slitting, die-cutting, trimming and folding shed cellulose fibre and fine paper dust; the starch-based adhesive used to bond the fluting contributes its own fines. High line speeds and large air volumes carry both up into the building structure.",
 "The result is a combined accumulation that is easy to underestimate because it looks like ordinary paper debris. The visible offcuts and trim on the floor are not the concern — the fine fraction that has settled on beams, cable trays, light fittings and above suspended ceilings is. Starch fines add to the picture, since starch is itself a combustible dust and the adhesive residue collects in the same places. Converting plants also tend to have long uninterrupted production runs, so the interval between genuine overhead cleaning opportunities can be measured in months.",
 ],
 industries: [
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Printing", href: "/industries/printing" },
 { label: "Paper Mills", href: "/industries/paper-mills" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 ],
 riskHeading: "What makes corrugated paper dust worth controlling",
 risks: [
 "Two combustible components: cellulose fibre and starch adhesive fines accumulate together in the same locations.",
 "Overhead accumulation: high line speeds and large air volumes carry fines into the building structure across the whole plant.",
 "Deceptive appearance: visible floor trim distracts from the fine overhead fraction that actually feeds a secondary event.",
 "Long production runs: converting plants often have few opportunities for genuine overhead cleaning access.",
 "Ignition sources on the line: drives, bearings, static and electrical equipment sit directly under the accumulation.",
 "Static generation: fast-moving paper web generates significant static charge, so bonding matters throughout.",
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
  question: "Is corrugated paper dust combustible?",
  answer:
   "Yes. Cellulose fibre dust is a combustible dust in Class II Group G, and the starch-based adhesive fines that accompany it in a corrugating plant are combustible too. Severity for your mix is established by testing the material as your process produces it.",
 },
 {
  question: "Is floor trim the problem?",
  answer:
   "Not really. Visible offcuts and trim are a housekeeping nuisance; the fine fraction on beams, cable trays, light fittings and above suspended ceilings is what would fuel a secondary event. The two are cleaned by different methods and only one of them is usually scheduled.",
 },
 {
  question: "Does the starch adhesive matter separately?",
  answer:
   "It does. Starch is itself a combustible dust, and adhesive fines settle in the same overhead locations as the paper fibre. The accumulation is a mixture rather than pure cellulose.",
 },
 {
  question: "When can overhead cleaning realistically happen?",
  answer:
   "That is the practical constraint in most converting plants — production runs are long and access is limited. It is worth planning overhead recovery into scheduled maintenance windows rather than waiting for an opportunity that does not arrive.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Paper Dust guide", href: "/materials/paper-dust" },
 { label: "Starch Dust guide", href: "/materials/starch-dust" },
 { label: "Paper & Packaging deep dive", href: "/industries/paper-packaging" },
 { label: "Central vacuum systems", href: "/products/central-vacuum-systems" },
 ],
};
