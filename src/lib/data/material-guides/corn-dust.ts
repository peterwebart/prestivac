import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cornDustGuide: MaterialGuideData = {
 slug: "corn-dust",
 name: "Corn Dust",
 groupCrumb: { label: "Agricultural Dusts", anchor: "agricultural-dusts" },
 seo: {
 title: "How to Safely Recover Corn Dust?",
 description:
 "Corn spans the grain standard's world and the starch world — elevator housekeeping under OSHA 1910.272 on one end, cornstarch fine enough to serve as the laboratory reference dust on the other. Explosion-proof recovery across elevators, mills and ethanol plants.",
 },
 heroIntro:
 "Built for the crop that spans the whole hazard range — whole-kernel elevators governed by the grain standard on one end, cornstarch so consistent that laboratories use it as a reference dust on the other, with milling floors and ethanol plants in between.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to OSHA 1910.272 / NFPA 660 practice" },
 { icon: ScrollText, title: "Codified Frequencies", detail: "Grain-standard numbers where they apply" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: Wheat, title: "Built for Grain & Milling", detail: "Elevators, mills and ethanol plants" },
 ],
 facts: [
 { label: "Material type", value: "Organic grain dust with a starch fine fraction" },
 { label: "Reference status", value: "Cornstarch serves as a standard laboratory reference dust" },
 { label: "Regulatory position", value: "Corn handling falls under OSHA 1910.272 where facilities qualify" },
 { label: "Governing standards", value: "OSHA 1910.272; NFPA 61 legacy carried into NFPA 660" },
 ],
 overview: [
 "Corn covers more of the combustible-dust spectrum than any other crop. At the elevator, it is grain — whole kernels abrading fines at every leg, spout and transfer, governed by OSHA 1910.272 and its 1/8-inch action level in priority areas where the facility qualifies. At the mill, grinding and sifting refine the hazard along with the product. And at the fine end sits cornstarch — a dust so consistent and well-characterized that laboratories use it as a reference material, which is a practical warning wearing a technical label: the finest fraction in your plant behaves like the benchmark.",
 "The program follows the processing chain. Elevators and feed mills carry the grain geography — legs, bin decks, boot pits and the screenings stream that concentrates the most ignitable fraction on site. Milling floors add continuous fine generation at grinders and sifters. Ethanol plants add flammable vapor adjacency, where dust and alcohol can form hybrid atmospheres and equipment selection follows the Dust Hazard Analysis with extra caution. Explosion-proof recovery, codified frequencies where the grain standard applies, and sealed disposal for fines and screenings hold the line across all of it.",
 ],
 industries: [
 { label: "Agriculture & Grain Handling", href: "/industries/agriculture" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Silo & Bin Cleaning", href: "/applications/silo-cleaning" },
 { label: "Feed Mills", href: "/industries/agriculture" },
 { label: "Ethanol & Biofuels", href: "/industries/agriculture" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Whole kernels abrade a fine fraction free at every leg, spout and transfer",
 "The starch end of the chain carries reference-grade ignitability — the laboratory benchmark, at scale",
 "Elevator legs, bin decks and boot pits concentrate the classic grain geography",
 "Milling floors generate fines continuously at grinders, sifters and purifiers",
 "Ethanol plants pair corn dust with flammable vapor — hybrid atmospheres demand extra caution",
 ],
 solutions: [
 "Explosion-proof recovery on codified frequencies where 1910.272 applies, DHA-set elsewhere",
 "Leg surrounds and bin decks on documented rotation",
 "Reach-first bin interior cleaning from manways — entry becomes the permitted exception",
 "Milling-floor capture at grinders and sifters on the run schedule",
 "Hybrid-area equipment selection per the DHA; sealed disposal for fines and screenings",
 ],
 configuration: [
 { step: "Collection tool", detail: "Long-reach wands and floor tools for decks, legs and mill floors" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path over elevator distances" },
 { step: "Explosion-proof unit", detail: "Rated or air-operated to match the classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the starch fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Screenings and fines contained, dispositioned promptly" },
 ],
 bestPractices: [
 "Schedule priority areas below the 1/8-inch action level where the grain standard applies",
 "Treat cornstarch areas to the tightest frequencies — the benchmark dust deserves benchmark discipline",
 "Clean bins reach-first from manways; reserve entry for genuine exceptions under permits",
 "In ethanol plants, select equipment for the hybrid atmosphere, not the dust alone",
 "Never sweep or blow down — vacuum capture is the method that doesn't make the cloud",
 ],
 faqs: [
 {
 question: "Does OSHA 1910.272 cover corn facilities?",
 answer:
 "Yes — the grain-handling standard covers corn elevators, feed mills and the facilities that qualify under it, with the same priority-area housekeeping and 1/8-inch action level that govern wheat. Downstream processing that falls outside the standard runs on the Dust Hazard Analysis instead, under the NFPA 660 framework.",
 },
 {
 question: "Why is cornstarch used as a laboratory reference dust?",
 answer:
 "Consistency — its particle size and behavior are uniform and well-characterized enough that testing laboratories use it as a benchmark material. The practical takeaway for a plant is blunt: the finest fraction you generate behaves like the dust the laboratories calibrate against.",
 },
 {
 question: "What changes at an ethanol plant?",
 answer:
 "Flammable vapor enters the picture. Corn dust and alcohol vapor can form hybrid atmospheres that ignite more easily than either alone, so equipment selection follows the Dust Hazard Analysis with the vapor accounted for — rated or air-operated units remove the electrical ignition question entirely.",
 },
 {
 question: "Do whole kernels carry the same hazard as the dust?",
 answer:
 "The fines govern. Kernels are barely dispersible, but every transfer abrades fines free and the screenings stream concentrates them — so the program is specified for the dust the facility actually generates, from elevator boot to starch room, not the commodity on the scale ticket.",
 },
 ],
 studySlug: "grain-dust-elevator-feed-mill",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Starch Dust guide", href: "/materials/starch-dust" },
 { label: "Grain Dust guide", href: "/materials/grain-dust" },
 { label: "Flour Dust guide", href: "/materials/flour-dust" },
 { label: "Silo & Bin Cleaning guide", href: "/applications/silo-cleaning" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 ],
};
