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
 "Industrial recovery built for continuous high-volume attrition dust through screening and loadout.",
 "Contact tooling for hard hygroscopic cake that brushing will not remove.",
 "Corrosion-aware construction, since urea deposits with moisture attack structural steel.",
 "Explosion-proof specification where classification requires it in enclosed handling.",
 "Grounded, bonded conductive path through conveying and bagging.",
 "Ammonia awareness in emergency planning, given thermal decomposition behaviour.",
 ],
 configuration: [
 { step: "Follow the transfer points", detail: "Attrition between prills generates dust continuously; the dust load tracks handling steps, not just tonnage." },
 { step: "Plan for hard cake", detail: "Hygroscopic deposits set into cake that resists brushing and looks like part of the equipment." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for handling and bagging areas." },
 { step: "Account for decomposition", detail: "Heating releases ammonia, which adds an exposure dimension to any fire in the area." },
 { step: "Include corrosion in the survey", detail: "Deposits plus moisture accelerate corrosion on steel and equipment." },
 ],
 bestPractices: [
 "Remove cake mechanically before it sets into a layer indistinguishable from the plant.",
 "Reflect ammonia release in emergency planning, not just in the safety data sheet.",
 "Watch for corrosion under long-standing deposits.",
 "Prioritise screening, conveying and loadout.",
 "Verify the grounding path across the handling chain.",
 "Empty into sealed disposal away from stored product.",
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
