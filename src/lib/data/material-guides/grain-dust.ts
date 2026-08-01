import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const grainDustGuide: MaterialGuideData = {
 slug: "grain-dust",
 name: "Grain Dust",
 groupCrumb: { label: "Agricultural Dusts", anchor: "agricultural-dusts" },
 seo: {
 title: "How to Safely Recover Grain Dust?",
 description:
 "Grain is the one dust family with its own OSHA standard — 1910.272 and its codified 1/8-inch action level in priority areas. Explosion-proof recovery for elevators, bins and feed mills: leg surrounds, reach-first bin cleaning, scheduled priority areas.",
 },
 heroIntro:
 "Built for the industry that wrote the rules — grain handling is the one sector whose housekeeping carries its own OSHA standard, with a codified action level to schedule below rather than a judgment call to argue about. The program is built around the geography: legs, bins, pits and the priority areas the standard names.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to OSHA 1910.272 / NFPA 660 practice" },
 { icon: ScrollText, title: "Codified Frequencies", detail: "Schedule below the action level" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines retained, not redistributed" },
 { icon: Wheat, title: "Built for Grain Facilities", detail: "Elevators, bins and feed mills" },
 ],
 facts: [
 { label: "Material type", value: "Mixed organic dust — grain, chaff and starch fines" },
 { label: "Regulatory position", value: "The one dust family with its own OSHA standard — 1910.272" },
 { label: "Codified number", value: "1/8-inch action level in designated priority housekeeping areas" },
 { label: "Governing standards", value: "OSHA 1910.272; NFPA 61 legacy carried into NFPA 660" },
 ],
 overview: [
 "Grain dust holds a regulatory position no other material shares: after the elevator disaster wave of the 1970s, grain handling received its own OSHA standard, 1910.272 — housekeeping with a codified number attached. In designated priority areas, accumulation carries a 1/8-inch action level; the program's job is to schedule cleaning frequencies that keep surfaces below it, documented, rather than to argue each layer case by case.",
 "The hazard has a geography. Elevator legs concentrate suspended dust and friction ignition inside one casing — housekeeping owns the surrounds while monitoring owns the internals. Bin decks accumulate layers across enormous flat footage, bin interiors are cleaned reach-first from manways so confined-space entry becomes the exception, boot pits collect spillage plus fines below grade, and the screenings stream concentrates the finest, most ignitable fraction on site. Explosion-proof recovery, sealed disposal and the codified schedule tie it together.",
 ],
 industries: [
 { label: "Agriculture & Grain Handling", href: "/industries/agriculture" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Silo & Bin Cleaning", href: "/applications/silo-cleaning" },
 { label: "Feed Mills", href: "/industries/agriculture" },
 { label: "Grain Elevators", href: "/industries/agriculture" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "The historic hazard record — the elevator explosions that produced the only dust-specific OSHA standard",
 "Elevator legs pair suspended dust with belt and bearing friction inside one casing",
 "Bin decks and headhouse floors build layers across huge flat footage between cleanings",
 "Priority areas carry the codified 1/8-inch action level — an inspectable number, not a guideline",
 "The screenings stream concentrates the finest, most ignition-sensitive fraction on site",
 ],
 solutions: [
 "Explosion-proof recovery on frequencies scheduled below the action level in priority areas",
 "Leg surrounds on documented rotation — housekeeping outside the casing, monitoring inside it",
 "Reach-first bin interior cleaning from manways — entry becomes the permitted exception",
 "Boot pits and load-out on the schedule with tools sized for spillage plus fines",
 "Sealed disposal for screenings and collected fines — the concentrate never stands open",
 ],
 configuration: [
 { step: "Collection tool", detail: "Long-reach wands and floor tools for decks, legs and pits" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path over elevator distances" },
 { step: "Explosion-proof unit", detail: "Rated or air-operated to match the classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fines stay captured" },
 { step: "Sealed collection & disposal", detail: "Screenings and fines contained, dispositioned promptly" },
 ],
 bestPractices: [
 "Schedule priority areas below the 1/8-inch action level — and keep the records that prove it",
 "Clean bins reach-first from manways; reserve entry for genuine exceptions under full permits",
 "Treat the screenings stream as the most ignitable material on site — sealed, prompt disposition",
 "Leg surrounds on defined rotation; belt and bearing monitoring handles the inside",
 "Never sweep or blow down — vacuum capture is the method that doesn't make the cloud",
 ],
 faqs: [
 {
 question: "Is wheat dust combustible?",
 answer:
 "Yes. Wheat dust, and grain dust generally, is a combustible organic dust — the grain elevator explosion record is the reason dust control became a regulated subject in agriculture. NFPA 660 now consolidates the agricultural provisions formerly in NFPA 61, and OSHA's grain handling facilities standard applies to covered operations.",
 },
 {
 question: "Why does grain have its own OSHA standard?",
 answer:
 "Because of the record: the elevator explosion wave of the 1970s killed enough people that grain handling received dedicated rulemaking — 1910.272 — rather than relying on general-duty enforcement. It remains the only dust family with its own OSHA standard, and its housekeeping provisions carry actual numbers.",
 },
 {
 question: "What does the 1/8-inch action level actually require?",
 answer:
 "In designated priority housekeeping areas, accumulation reaching 1/8 inch triggers action — which in practice means scheduling cleaning frequencies that keep surfaces below the level, with documentation. The number converts housekeeping from judgment calls into an inspectable schedule.",
 },
 {
 question: "Are bin and silo interiors classified areas?",
 answer:
 "Filling suspends dust in the headspace, and many facilities classify vessel interiors accordingly — your Dust Hazard Analysis and area classification govern the equipment. Reach-first cleaning from manways with rated or air-operated units keeps both the ignition source and the crew outside the vessel.",
 },
 {
 question: "Do pellets and whole grain carry the same hazard as dust?",
 answer:
 "The fines govern. Whole grain and pellets are far less dispersible, but every transfer abrades a fine fraction free, and the screenings stream concentrates it. The program is specified for the dust the facility actually generates, not the commodity on the scale ticket.",
 },
 ],
 studySlug: "grain-dust-elevator-feed-mill",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Flour Dust guide", href: "/materials/flour-dust" },
 { label: "Silo & Bin Cleaning guide", href: "/applications/silo-cleaning" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
