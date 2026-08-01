import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cocoaDustGuide: MaterialGuideData = {
 slug: "cocoa-dust",
 name: "Cocoa Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
 title: "How to Safely Recover Cocoa Dust?",
 description:
 "Cocoa sheds a dust stream at every step — shell fines at winnowing, powder at grinding and pressing — and its fat content makes deposits cling to warm equipment. Explosion-proof HEPA recovery with allergen-aware disposal for chocolate and confectionery plants.",
 },
 heroIntro:
 "Built for the confectionery floor — cocoa sheds its own dust stream at every process step, the residual fat makes deposits cling and layer on warm equipment, and the milk powder handled beside it means the same recovery pass carries allergen duty too.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 61 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Factory, title: "Built for Confectionery", detail: "Stainless construction options" },
 ],
 facts: [
 { label: "Material type", value: "Fat-bearing organic dust — a combustible fine powder" },
 { label: "Process reality", value: "Winnowing, grinding and pressing each shed their own dust stream" },
 { label: "Neighboring hazard", value: "Chocolate plants handle milk powder — a major allergen — alongside it" },
 { label: "Governing standards", value: "NFPA 61 legacy, consolidated into NFPA 660" },
 ],
 overview: [
 "Cocoa's dust follows the process. Winnowing frees shell fragments and fines in a continuous, light stream; grinding and pulverizing produce the fine powder itself; pressing and conveying shed fractions at every transfer. Cocoa powder is an established combustible organic dust — fine, dry and dispersible — and its residual cocoa-butter content adds a housekeeping wrinkle: deposits cling and layer on warm equipment instead of staying loose, so the accumulation builds exactly where heat lives.",
 "Chocolate plants carry a second obligation in the next silo over: milk powder, a major food allergen, is handled alongside cocoa on most lines, so the recovery program serves allergen control and dust safety in one pass — HEPA-retained exhaust, sealed disposal, documented changeover cleaning. The method is dry-first: fat plus water smears into paste on warm surfaces, so vacuum recovery comes before any wet sanitation step, with stainless construction options where washdown zones and food-contact adjacency demand them.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Confectionery", href: "/applications#food-processing" },
 { label: "Bakery Operations", href: "/applications#food-processing" },
 { label: "Bean Handling & Storage", href: "/industries/agriculture" },
 { label: "Packaging Lines", href: "/applications#packaging" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Fine cocoa powder is a classic deflagration fuel — dry, organic and easily suspended",
 "Residual fat makes deposits cling and layer on warm equipment — fuel accumulating where heat lives",
 "The winnowing shell stream runs continuously and travels light",
 "Conveying and silo transfer points shed fines at every hand-off",
 "Milk-powder adjacency stacks allergen obligations onto the same housekeeping pass",
 ],
 solutions: [
 "Explosion-proof HEPA recovery on frequencies the Dust Hazard Analysis sets",
 "Capture at winnowing and grinding — the two continuous generators",
 "Warm-equipment perimeters and press surrounds on their own defined schedule",
 "Allergen-aware program: sealed disposal, documented changeover cleaning",
 "Dry-first method with stainless construction options for food-area adjacency",
 ],
 configuration: [
 { step: "Collection tool", detail: "Food-area floor tools and crevice nozzles at the source" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Explosion-proof HEPA unit", detail: "Rated recovery matched to the area classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fines and allergen dust stay captured" },
 { step: "Sealed collection & disposal", detail: "Contained, documented, off the floor promptly" },
 ],
 bestPractices: [
 "Never sweep or blow down cocoa — single-pass vacuum capture only",
 "Warm-equipment perimeters earn defined frequencies — clinging deposits build there first",
 "Dry recovery before wet sanitation — fat and water smear into paste on warm surfaces",
 "Document changeover cleans; the allergen record and the dust record are the same pass",
 "Let the Dust Hazard Analysis set frequencies for winnowing and grinding surrounds",
 ],
 faqs: [
 {
 question: "Is cocoa powder really an explosion hazard?",
 answer:
 "Yes — it is an established combustible organic dust: fine, dry and readily dispersible, which is why it appears on standard combustible-dust lists and in confectionery Dust Hazard Analyses. The fine fraction from grinding and pulverizing governs the specification.",
 },
 {
 question: "Does the fat content change the program?",
 answer:
 "It changes where the dust goes. Residual cocoa butter makes fines cling and layer on warm equipment instead of staying loose, so press surrounds and warm perimeters accumulate first — and wet shortcuts smear the material into paste. Dry vacuum recovery on a defined schedule, then wet sanitation where procedures require it.",
 },
 {
 question: "What about allergens on a chocolate line?",
 answer:
 "Cocoa itself is not among the major allergens — the milk powder beside it is. One HEPA-retained recovery program with sealed disposal and documented changeover cleaning serves both duties: the dust-safety record and the allergen-control record come from the same pass.",
 },
 {
 question: "Where does cocoa dust accumulate worst?",
 answer:
 "The winnowing area's continuous shell stream, pulverizer and grinder surrounds, conveying transfer points, and the warm surfaces around presses — the fat-bearing fines favor exactly the equipment that runs hot.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Sugar Dust guide", href: "/materials/sugar-dust" },
 { label: "Flour Dust guide", href: "/materials/flour-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
