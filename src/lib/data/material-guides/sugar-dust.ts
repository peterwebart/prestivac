import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const sugarDustGuide: MaterialGuideData = {
 slug: "sugar-dust",
 name: "Sugar Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
 title: "How to Safely Recover Combustible Sugar Dust?",
 description:
 "Sugar dust reshaped modern combustible-dust enforcement after the 2008 Georgia refinery disaster. Explosion-proof HEPA recovery for conveying galleries, elevator legs and packaging mezzanines — dry-first methods for a material that melts, caramelizes and hardens.",
 },
 heroIntro:
 "Built for the dust that defined the modern enforcement era — the 2008 Georgia sugar refinery disaster put accumulated sugar dust at the center of national combustible-dust policy, and the finest powdered grades remain among the most ignition-sensitive organic dusts a food plant handles.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 61 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Factory, title: "Built for Food Plants", detail: "Stainless construction options" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust — finest grades are the most sensitive" },
 { label: "Hazard history", value: "The 2008 Georgia refinery disaster reshaped national dust enforcement" },
 { label: "Regulatory legacy", value: "Catalyst for OSHA's Combustible Dust National Emphasis Program era" },
 { label: "Governing standards", value: "NFPA 61 legacy, consolidated into NFPA 660" },
 ],
 overview: [
 "Sugar wrote the most recent chapter in the combustible-dust record. In 2008, accumulated sugar dust in the conveying and packaging areas of a Georgia refinery fueled a secondary-explosion chain that killed fourteen workers; the federal investigation that followed became the case study behind the modern enforcement era and its National Emphasis Program. The mechanism was the classic one — fine dust settled above and around equipment, waiting for a primary event to lift it.",
 "The material itself spans a wide sensitivity range. Granulated sugar is relatively coarse, but every transfer abrades a fine fraction free, and powdered and icing grades are milled fine deliberately — the most ignition-sensitive form in the plant. Sugar adds one more trap: heat melts it to syrup and chars it to carbon, so hot-surface contact and wet shortcuts create hardened residues instead of clean floors. The program is dry-first: explosion-proof HEPA recovery through conveying galleries, elevator legs and packaging mezzanines on frequencies the Dust Hazard Analysis sets, with sealed disposal and stainless options where washdown zones demand them.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Confectionery", href: "/applications#food-processing" },
 { label: "Bakery Operations", href: "/applications#food-processing" },
 { label: "Cane & Beet Processing", href: "/industries/agriculture" },
 { label: "Packaging Lines", href: "/applications#packaging" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Powdered and icing grades are milled fine on purpose — the most ignition-sensitive form on site",
 "Conveying galleries and bucket-elevator legs concentrate suspension and friction in one geography",
 "The 2008 record shows the pattern: accumulation above and around packaging equipment, out of sight",
 "Heat melts sugar to syrup and chars it — hot surfaces turn fugitive dust into hardened residue",
 "Hygroscopic clumping masks the fine, dispersible fraction that rides along with it",
 ],
 solutions: [
 "Explosion-proof HEPA recovery on frequencies the Dust Hazard Analysis sets",
 "Conveying galleries and elevator-leg surrounds on documented rotation",
 "Packaging mezzanines and overhead surfaces on elevated-surface kits from the floor",
 "Dry-first method — recover the dust before any wet sanitation step touches it",
 "Sealed collection and disposal; stainless construction options for food-area adjacency",
 ],
 configuration: [
 { step: "Collection tool", detail: "Food-area floor tools and crevice nozzles at the source" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Explosion-proof HEPA unit", detail: "Rated recovery matched to the area classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained, documented, off the floor promptly" },
 ],
 bestPractices: [
 "Never sweep or blow down sugar — single-pass vacuum capture only",
 "Conveying galleries and elevator legs earn their own defined frequencies",
 "Powdered-sugar rooms run the tightest schedule in the plant",
 "Dry recovery comes before wet sanitation — washdown on standing dust makes syrup, then char",
 "Document the schedule; the 2008 record is the argument for why",
 ],
 faqs: [
 {
 question: "Is sugar dust explosive?",
 answer:
 "Sugar dust is a combustible organic dust, and a suspended cloud of it within its explosible range under confinement can deflagrate given an ignition source. The refinery and confectionery incident record is why sugar handling is treated seriously. Severity is material- and particle-size-specific and is established by testing your own product rather than assumed.",
 },
 {
 question: "Why did sugar dust reshape national enforcement?",
 answer:
 "Because the 2008 Georgia refinery disaster — fourteen deaths from a secondary-explosion chain fueled by accumulated sugar dust — became the federal case study for what deferred housekeeping costs. The investigation's findings drove the modern Combustible Dust National Emphasis Program era and the inspection playbook facilities see today.",
 },
 {
 question: "Is granulated sugar itself explosive?",
 answer:
 "Coarse granules are far less dispersible and far harder to ignite — the hazard lives in the fine fraction. Every conveyor transfer abrades fines free, and powdered and icing grades are milled fine deliberately, which makes them the most sensitive form in the plant. Specify for the finest fraction present, not the bag label.",
 },
 {
 question: "Can we wash sugar dust down instead?",
 answer:
 "Water dissolves it into syrup that dries to a film, and hot surfaces char it in place — the shortcut creates a residue problem while leaving elevated accumulation untouched. Dry vacuum recovery removes the dust first; wet sanitation follows where food-safety procedures require it.",
 },
 {
 question: "Where does sugar dust accumulate worst?",
 answer:
 "Conveying galleries, bucket-elevator boots and heads, and the overhead surfaces above packaging lines — elevated, warm and out of sight. That is exactly the geography the 2008 investigation documented, and it is where the defined-frequency schedule earns its keep.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Flour Dust guide", href: "/materials/flour-dust" },
 { label: "Grain Dust guide", href: "/materials/grain-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
