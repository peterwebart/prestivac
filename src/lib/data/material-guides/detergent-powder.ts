import { Filter, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const detergentPowderGuide: MaterialGuideData = {
 slug: "detergent-powder",
 name: "Detergent Powder",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
  title: "Detergent Powder — Combustible Dust Control",
  description:
   "Detergent powder blends combustible surfactants with alkaline builders, enzymes that are respiratory sensitisers, and in some formulations oxidising bleach components.",
 },
 heroIntro:
  "Built for detergent manufacturing, where a single product combines several different hazards. Detergent powder mixes combustible surfactants, caustic builders, enzyme components that are recognised respiratory sensitisers, and in some formulations oxidising bleach.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: FlaskConical, title: "Enzyme Sensitisers", detail: "Recognised occupational respiratory sensitisers" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains sensitising and irritant fractions" },
 { icon: Sparkles, title: "Oxidising Components", detail: "Some formulations contain bleach constituents" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G — with alkaline, enzymatic and sometimes oxidising components" },
 { label: "Where it is generated", value: "Spray drying, post-dosing, blending, screening, conveying, tote dumping and packing" },
 { label: "Distinguishing property", value: "Enzyme components are recognised respiratory sensitisers; some formulations include oxidising bleach constituents" },
 { label: "Governing standards", value: "NFPA 660 for combustible dust, with sensitiser and exposure controls for the enzyme fraction" },
 ],
 overview: [
 "Detergent powder is a formulated blend rather than a single substance: spray-dried base powder, surfactants, alkaline builders, enzymes, optical brighteners and in many formulations bleach components. It is produced by spray drying and post-dosing, and the blending, screening and packing stages that follow all liberate dust.",
 "The hazard picture reflects the formulation. The surfactant and organic content makes it a combustible dust. The alkaline builders make the dust irritant. The enzyme components are recognised occupational respiratory sensitisers, and enzyme sensitisation in detergent manufacturing is one of the better-documented occupational asthma stories in industry — which is why airborne enzyme dust is controlled tightly in this sector. Where oxidising bleach constituents are present, they add a further consideration, since oxidisers intensify the combustion of other materials rather than merely burning themselves.",
 ],
 industries: [
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 ],
 riskHeading: "What makes detergent powder worth controlling",
 risks: [
 "Combustible organic dust: surfactant and organic content makes the blend a combustible dust in Class II Group G.",
 "Enzyme sensitisation: enzyme components are recognised respiratory sensitisers with a documented occupational asthma history in this sector.",
 "Alkaline irritation: builder content makes airborne dust irritant to skin, eyes and airways.",
 "Oxidising constituents: bleach components in some formulations intensify the combustion of other materials.",
 "Post-dosing releases: adding enzymes and actives to base powder is a repeated handling step for the most hazardous components.",
 "Overhead accumulation: light spray-dried powder settles throughout the production area, carrying the enzyme fraction with it.",
 ],
 solutions: [
 "Source capture at post-dosing, where enzymes and actives are added to base powder.",
 "Retained filtration specified against enzyme sensitisation, where routine low-level exposure is the mechanism.",
 "Explosion-proof construction across spray drying, blending and packing.",
 "Segregation where oxidising bleach constituents must not accumulate alongside other combustible dust.",
 "Grounded, bonded conductive path through dry handling and transfer.",
 "Overhead recovery across the production area, since spray-dried powder carries the enzyme fraction with it.",
 ],
 configuration: [
 { step: "Prioritise post-dosing", detail: "This is where the most hazardous components are handled directly and repeatedly." },
 { step: "Treat enzyme dust as a sensitiser", detail: "Sensitisation develops through repeated low-level exposure, so routine airborne load is the control target." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for drying and blending areas." },
 { step: "Check for oxidising constituents", detail: "Bleach components intensify combustion of other materials; keep them from accumulating together." },
 { step: "Extend the survey overhead", detail: "Light spray-dried powder distributes the enzyme fraction across the whole area." },
 ],
 bestPractices: [
 "Capture at post-dosing rather than cleaning up afterwards.",
 "Control routine airborne load, not just visible spills — that is what sensitisation depends on.",
 "Keep oxidising and combustible accumulations apart.",
 "Include overhead structure across the production area.",
 "Verify grounding continuity throughout dry handling.",
 "Empty into sealed disposal away from the blending area.",
 ],
 faqs: [
 {
  question: "Is detergent powder a combustible dust?",
  answer:
   "Yes. The surfactant and organic content makes it a combustible dust in Class II Group G. It also carries alkaline, enzymatic and sometimes oxidising components, so the assessment is broader than the fire question alone.",
 },
 {
  question: "Why are the enzyme components significant?",
  answer:
   "They are recognised respiratory sensitisers, and enzyme sensitisation in detergent manufacturing is one of the better-documented occupational asthma histories in industry. Sensitisation develops through repeated low-level exposure, which makes routine airborne dust — not just spills — the thing to control.",
 },
 {
  question: "What do oxidising bleach components change?",
  answer:
   "Oxidisers supply oxygen to a fire rather than merely burning. Where they are present in the formulation, accumulated dust mixed with other combustible material is a more severe combination than either alone.",
 },
 {
  question: "Which step needs the most attention?",
  answer:
   "Post-dosing, in most plants — the stage where enzymes and actives are added to the base powder. It handles the most hazardous components directly and repeatedly, so source capture there does more than general cleaning elsewhere.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Soap Powder guide", href: "/materials/soap-powder" },
 { label: "Chemical deep dive", href: "/industries/chemical" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
 ],
};
