import { Filter, ShieldCheck, Wheat, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const flourDustGuide: MaterialGuideData = {
 slug: "flour-dust",
 name: "Flour Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
 title: "How to Safely Recover Flour Dust?",
 description:
 "Flour is the archetypal combustible dust — documented since the 19th-century mill disasters — and a major food allergen in the same material. Explosion-proof HEPA recovery, allergen-aware disposal and oven-perimeter discipline under NFPA 61 / 660 practice.",
 },
 heroIntro:
 "Built for the dust that taught industry the lesson — flour's explosive potential has been documented since the great mill disasters of the nineteenth century, and modern plants add a second duty: the same fines are a major food allergen, so containment serves safety and sanitation at once.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 61 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines and allergens retained" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Wheat, title: "Built for Food Plants", detail: "Stainless construction options" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust — the archetypal example" },
 { label: "Hazard history", value: "Flour explosions documented since the 19th-century mill disasters" },
 { label: "Dual concern", value: "Combustible dust and a major food allergen in one material" },
 { label: "Governing standards", value: "NFPA 61 legacy, consolidated into NFPA 660; sanitation programs alongside" },
 ],
 overview: [
 "Flour is where the combustible-dust story begins — the mill explosions of the nineteenth century made airborne organic fines an engineering subject, and the requirements that grew into NFPA 61 and now NFPA 660 carry that history. The mechanism hasn't changed: fine starch-rich particles loft at every dump, sift and transfer, stay suspended long enough to find ignition, and settle across ledges, ducts and oven surrounds as the fuel for a secondary event.",
 "Modern food plants carry a second obligation in the same material: wheat flour is a major allergen, so the fugitive fraction is a sanitation and labeling problem as well as a fire problem. One program answers both — capture at the source with HEPA-retained exhaust, elevated surfaces on a defined frequency, allergen-aware changeover cleaning with sealed disposal, and stainless-construction recovery equipment where washdown zones and food-contact adjacency demand it.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Agriculture & Milling", href: "/industries/agriculture" },
 { label: "Bakery Operations", href: "/applications#food-processing" },
 { label: "Flour Milling", href: "/applications#food-processing" },
 { label: "Packaging Lines", href: "/applications#packaging" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "A classic deflagration fuel — fine, organic, easily suspended, with a documented disaster record older than the standards themselves",
 "Fines settle everywhere, including oven perimeters — fuel accumulating next to sustained heat",
 "Elevated surfaces, ducts and joist bays build the secondary-event inventory out of sight",
 "The same fugitive fraction is a major allergen — exposure and cross-contact obligations ride along",
 "Wet cleaning turns flour into paste that hardens in place — the tempting shortcut creates its own residue problem",
 ],
 solutions: [
 "Explosion-proof HEPA recovery — fines captured at the nozzle and retained at a tested 99.99% at 0.3 µm",
 "Capture at source at mixers, dump stations and sifters on the run schedule",
 "Elevated-surface kits put ledges, ducts and oven surrounds on routine from the floor",
 "Allergen-aware program: sealed disposal, documented changeover cleaning, dedicated tools where lines demand it",
 "Stainless construction options for washdown zones and food-area adjacency",
 ],
 configuration: [
 { step: "Collection tool", detail: "Food-area floor tools and crevice nozzles at the source" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Explosion-proof HEPA unit", detail: "Rated recovery matched to the area classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fines and allergens stay captured" },
 { step: "Sealed collection & disposal", detail: "Allergen-aware, documented, off the floor promptly" },
 ],
 bestPractices: [
 "Never sweep or blow down flour — single-pass vacuum capture only",
 "Oven perimeters earn their own defined frequency — fuel never waits next to heat",
 "Elevated surfaces on schedule; the DHA measures what daily cleaning never touches",
 "Changeover cleaning documented for allergen control as well as dust control",
 "Dry recovery first — washdown creates paste residues and leaves the elevated program untouched",
 ],
 faqs: [
 {
 question: "Is flour flammable?",
 answer:
 "Yes. Flour is a fine, starch-rich organic powder and it burns readily. In a sack it behaves like any dry organic solid, but the hazard that matters in a mill or bakery is the airborne cloud: dispersed in air inside an enclosure, flour dust can ignite and deflagrate. NFPA 660 — which consolidated the former NFPA 61 for agricultural and food processing — treats flour as a combustible dust and is the standard your program is written against.",
 },
 {
 question: "Can flour explode, and why does it happen?",
 answer:
 "A dust deflagration needs five things at once: combustible dust, oxygen, dispersion into a cloud, some degree of confinement, and an ignition source. Flour supplies the first. The reason a powder behaves so differently from a solid block is surface area — milling the same mass into fine particles exposes an enormous amount of it to oxygen, so combustion that would creep across a surface propagates through the whole cloud instead.",
 },
 {
 question: "Is flour dust combustible or explosible — is there a difference?",
 answer:
 "Combustible describes the material: flour will burn. Explosible describes what a suspended cloud of it does within a certain concentration range under confinement. The distinction matters because housekeeping controls the second condition. Your specific flour's behaviour is determined by testing, since particle size and moisture change the result.",
 },
 {
 question: "Why is flour dust considered so dangerous?",
 answer:
 "Because it is the textbook combustible organic dust: fine, starch-rich particles that suspend easily and burn fast — the mill disasters that made dust explosions an engineering subject were flour events. The standards that became NFPA 61, now consolidated into NFPA 660, were written on that record.",
 },
 {
 question: "Can we wash floors down instead of vacuuming?",
 answer:
 "Water and flour make paste that hardens where it lands, and washdown does nothing for the ledges, ducts and oven surrounds where the real inventory builds. Dry vacuum recovery removes the dust without creating a residue problem; wet methods stay where sanitation procedures specifically call for them.",
 },
 {
 question: "How does the allergen side change the program?",
 answer:
 "It raises the bar on containment: HEPA-retained exhaust so cleaning doesn't aerosolize allergen, sealed disposal, documented changeover cleans between allergen-status runs, and dedicated tools where lines require them. The same pass that controls the fire hazard produces the sanitation record.",
 },
 {
 question: "What about flour dust near ovens?",
 answer:
 "That is fuel settling beside sustained heat — the highest-consequence accumulation in the bakery. Oven perimeters get their own defined vacuum frequency, and the practice of blowing the area down with compressed air is retired first.",
 },
 ],
 studySlug: "flour-dust-commercial-bakery",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Starch Dust guide", href: "/materials/starch-dust" },
 { label: "Grain Dust guide", href: "/materials/grain-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
