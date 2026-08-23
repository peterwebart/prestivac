import { Filter, Flame, Layers, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const textileFibersGuide: MaterialGuideData = {
 slug: "textile-fibers",
 name: "Textile Fibers",
 groupCrumb: { label: "Paper & Textile Dusts", anchor: "paper-textile-dusts" },
 seo: {
  title: "Textile Fibers — Class III Flyings & Lint",
  description:
   "Textile lint and flyings are classified as Class III ignitible fibers rather than Class II dust, which changes the equipment question.",
 },
 heroIntro:
  "Built for spinning, weaving and finishing areas where the accumulation is lint and flyings rather than powder. This is the one material family in the directory that is Class III rather than Class II — a distinction that changes how the area is classified and what equipment applies.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Layers, title: "Class III, Not Class II", detail: "Ignitible fibers and flyings, not combustible dust" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: Flame, title: "Rapid Flame Spread", detail: "Lint accumulation carries fire across a space quickly" },
 ],
 facts: [
 { label: "Material type", value: "Ignitible fibers and flyings — Class III, distinct from Class II combustible dust" },
 { label: "Where it is generated", value: "Opening, carding, spinning, weaving, knitting, cutting, finishing and dryer exhaust" },
 { label: "Distinguishing property", value: "Classified as Class III fibers and flyings rather than Class II dust; fine fibre fragments still behave as dust" },
 { label: "Governing standards", value: "NFPA 70 Article 500 series for Class III classification; NFPA 660 where a fine dust fraction is present" },
 ],
 overview: [
 "Textile processing sheds fibre at every mechanical stage. Opening and carding release the largest quantities, spinning and weaving add continuously, and cutting and finishing generate short fragments. The result is lint that accumulates on machinery, overhead structure, lighting and ventilation, plus a genuinely fine fraction from fragment breakdown.",
 "The classification distinction matters for equipment selection. Ignitible fibers and flyings are Class III in the North American framework, not Class II. That is a different classification from the combustible dust regime that governs most of this directory, and equipment listings name the classes they cover — so a Class II listing does not by itself address a Class III area. Lint also behaves differently in a fire: rather than a deflagration, the characteristic hazard is extremely rapid flame spread across accumulated fibre, carrying fire through a space faster than people can respond. Where synthetic fibres are processed, melting and dripping add another dimension again.",
 ],
 industries: [
 { label: "Textile", href: "/industries/textile" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Medical Devices", href: "/industries/medical-devices" },
 ],
 riskHeading: "What makes textile fiber accumulation worth controlling",
 risks: [
 "Class III classification: ignitible fibers and flyings are classified separately from Class II combustible dust, which changes equipment eligibility.",
 "Rapid flame spread: accumulated lint carries fire across a space quickly rather than producing a single deflagration event.",
 "Machinery accumulation: lint packs into drives, bearings, motors and electrical enclosures, combining fuel with ignition sources.",
 "Overhead and ventilation build-up: fibre collects on structure, lighting and duct surfaces throughout the mill.",
 "Fine fraction from fragmentation: fibre breakdown produces a genuinely fine dust alongside the visible lint.",
 "Synthetic fibres: melting and dripping behaviour adds a further hazard where synthetics are processed.",
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
  question: "Are textile fibers a combustible dust?",
  answer:
   "They are classified differently. Ignitible fibers and flyings fall under Class III in the North American framework, whereas combustible dusts are Class II. A fine dust fraction from fibre fragmentation can also be present, so some areas involve both — which is a question for your electrical or process engineer rather than one to settle from the material name.",
 },
 {
  question: "Does a Class II listing cover a Class III area?",
  answer:
   "Not by itself. Equipment certificates name the classes they cover. Our UL 1203 listing is Class I and Class II — confirm the classification of your area with your engineer and check it against the listing scope before specifying.",
 },
 {
  question: "What is the characteristic fire behaviour?",
  answer:
   "Extremely rapid flame spread across accumulated lint, rather than the deflagration behaviour typical of a dust cloud. Fire moves across the accumulation faster than people can respond, which is why lint on overhead structure and machinery is the thing to remove.",
 },
 {
  question: "Where does lint cause the most trouble?",
  answer:
   "Packed into machinery — drives, bearings, motors and electrical enclosures. That places fuel in direct contact with ignition sources, which is why machinery cleaning intervals matter as much as floor and overhead work.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Cotton & Wool Dust guide", href: "/materials/cotton-wool-dust" },
 { label: "Textile deep dive", href: "/industries/textile" },
 { label: "NFPA 70 / NEC", href: "/hazardous-locations/nfpa-70-nec" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Get a quote", href: "/get-a-quote" },
 ],
};
