import { Filter, ScrollText, ShieldCheck, Sparkles } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const waxPowderGuide: MaterialGuideData = {
 slug: "wax-powder",
 name: "Wax Powder",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
  title: "Wax Powder — Combustible Dust Control",
  description:
   "Powdered and micronised waxes are combustible dusts with low melting points, so deposits soften on warm surfaces and frictional heat can melt material inside equipment.",
 },
 heroIntro:
  "Built for micronised wax handling in coatings, printing inks, cosmetics and polymer processing. Wax powder is combustible, and its low melting point means deposits soften and adhere on warm surfaces rather than staying loose.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Sparkles, title: "Low Melting Point", detail: "Deposits soften and adhere on warm surfaces" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Standards", detail: "NFPA 660 for combustible dust handling" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Micronising, milling, screening, weighing, blending, tote dumping and packing" },
 { label: "Distinguishing property", value: "Low melting point — deposits soften on warm surfaces and frictional heat can melt material inside equipment" },
 { label: "Governing standards", value: "NFPA 660 for combustible dust handling" },
 ],
 overview: [
 "Micronised waxes — polyethylene, paraffin, carnauba, amide waxes — are used as additives in coatings, inks, cosmetics and polymer compounding. They are milled specifically to very fine particle sizes, and the weighing and blending operations that use them handle that fine powder repeatedly.",
 "The low melting point shapes the whole handling picture. Deposits on warm equipment surfaces soften and adhere rather than remaining loose, building layers that resist ordinary cleaning. Inside milling and conveying equipment, frictional heat can soften or melt material, causing build-up, blockages and, in the wrong circumstances, a hot surface where none was intended. Wax is also a hydrocarbon-based fuel in powder form, which means the combustible dust assessment is entirely applicable despite the material feeling benign in bulk.",
 ],
 industries: [
 { label: "Paints & Coatings", href: "/industries/paints-coatings" },
 { label: "Printing", href: "/industries/printing" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 { label: "Plastics & Rubber", href: "/industries/plastics-rubber" },
 { label: "Chemical", href: "/industries/chemical" },
 ],
 riskHeading: "What makes wax powder worth controlling",
 risks: [
 "Combustible organic dust: micronised wax is a hydrocarbon fuel in powder form and behaves as a combustible dust.",
 "Low melting point: deposits soften on warm surfaces, adhere and build layers that resist ordinary cleaning.",
 "Frictional heating in equipment: milling and conveying can soften material internally, causing build-up and hot surfaces.",
 "Very fine particle size: micronising produces a fraction that suspends on minimal air movement.",
 "Deceptive bulk appearance: wax feels inert as a solid, which leads operations to underestimate the powder form.",
 "Weighing and blending releases: repeated open handling of fine additive powder dominates the airborne load.",
 ],
 solutions: [
 "Explosion-proof recovery for micronised wax, a hydrocarbon fuel in powder form.",
 "Scheduled cleaning of warm equipment surfaces, where the low melting point makes deposits soften and adhere.",
 "Assessment of frictional heating inside mills and conveying, which can soften material and create a hot surface.",
 "HEPA-filtered collection retaining an extremely fine micronised fraction.",
 "Contact tooling for softened deposits that smear rather than lift.",
 "Grounded, bonded conductive path through weighing, blending and transfer.",
 ],
 configuration: [
 { step: "Map the warm surfaces first", detail: "Low melting point means deposits soften and stick wherever equipment runs warm." },
 { step: "Ask about frictional heat", detail: "Milling and conveying can soften wax internally, causing build-up and an unintended hot surface." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for micronising and blending areas." },
 { step: "Specify for smearing, not just fines", detail: "Softened deposits need contact tooling; suction alone spreads them." },
 { step: "Fix the weighing station", detail: "Repeated open handling of fine additive powder dominates the airborne load." },
 ],
 bestPractices: [
 "Clean warm surfaces before softened deposits build into layers.",
 "Include frictional heating in the ignition source assessment for mills.",
 "Do not be misled by wax feeling inert in bulk — the powder is a fuel.",
 "Prioritise the weighing and micronising areas.",
 "Verify the conductive path from tool to container.",
 "Empty into sealed disposal away from heat sources.",
 ],
 faqs: [
 {
  question: "Is wax powder combustible?",
  answer:
   "Yes. Micronised wax is a hydrocarbon-based fuel in powder form and behaves as a combustible dust in Class II Group G. The material feeling inert in solid form is exactly why the powder form gets underestimated.",
 },
 {
  question: "Why do wax deposits build up on equipment?",
  answer:
   "The low melting point. On warm surfaces the deposit softens and adheres rather than shedding, so layers accumulate and brushing smears rather than removes. Inside equipment, frictional heat can soften material and cause build-up and blockages.",
 },
 {
  question: "Does frictional heating create an ignition source?",
  answer:
   "It can create a hot surface where none was intended, and material softening inside equipment changes how heat is retained. That belongs in the ignition source assessment for milling and conveying equipment rather than being assumed away.",
 },
 {
  question: "Where should cleaning focus?",
  answer:
   "Warm equipment surfaces where deposits adhere, and the overhead structure around micronising and blending, where the finest fraction settles. Both build steadily and neither is removed by ordinary sweeping.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Plastic Dust guide", href: "/materials/plastic-dust" },
 { label: "Cosmetic Powder guide", href: "/materials/cosmetic-powder" },
 { label: "Paints & Coatings deep dive", href: "/industries/paints-coatings" },
 { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
 ],
};
