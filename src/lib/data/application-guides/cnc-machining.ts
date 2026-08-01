import { Cog, Droplets, Filter, Gauge, Recycle, ShieldCheck, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const cncMachiningGuide: ApplicationGuideData = {
 slug: "cnc-machining",
 title: "CNC Machining",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Metalworking & Machining", anchor: "metalworking-machining" },
 seo: {
 title: "CNC Machining Vacuum Solutions",
 description:
 "Explosion-proof industrial vacuums built to safely collect metal chips, combustible fine dust and coolant from CNC machining operations — grounded, filtered and built for continuous duty.",
 },
 tagline: "Clean. Safe. Productive.",
 heroIntro:
 "PrestiVac explosion-proof industrial vacuums are built to safely collect metal chips, fine dust and coolant from CNC machining operations — at the machine, without creating the dust cloud you're trying to prevent.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA & classified-area principles" },
 { icon: Filter, title: "Advanced Filtration", detail: "HEPA & multi-stage options" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Continuous-duty performance" },
 ],
 overview:
 "CNC machining produces a mix of metal chips, fines and coolant that creates safety hazards, equipment wear and downtime if not managed properly. The chips are an operations problem; the fine fraction from grinding, sanding and dry machining is the safety problem — with many metals it is combustible, and the wrong cleaning method turns it into an airborne cloud. Vacuum recovery at the machine handles both.",
 capabilities: [
 { icon: Cog, title: "Metal Chips", detail: "Turnings, swarf & fines" },
 { icon: Droplets, title: "Coolant & Oil", detail: "Emulsion & oil recovery" },
 { icon: Wind, title: "Fine Dust", detail: "Grinding & machining dust" },
 { icon: Recycle, title: "Swarf Recovery", detail: "Recover & reuse valuable material" },
 ],
 materialsHeading: "Common CNC machining materials",
 materials: [
 "Aluminum & aluminum alloys",
 "Stainless steel",
 "Carbon steel",
 "Cast iron",
 "Titanium",
 "Brass & copper alloys",
 "Magnesium",
 ],
 materialsNote: {
 text: "Fine aluminum, titanium and magnesium are combustible metal dusts —",
 link: { label: "see the aluminum dust guide", href: "/materials/aluminum-dust" },
 },
 challengesHeading: "Challenges in CNC machining",
 challenges: [
 "Combustible metal fines can create explosion hazards",
 "Coolant and oil spills cause slip hazards and contamination",
 "Chip buildup accelerates machine wear and unplanned downtime",
 "Manual cleaning is slow, recursive and pulls operators off production",
 "Fine dust affects worker health and plant air quality",
 "Housekeeping is a documented, inspectable compliance obligation",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Explosion-proof construction for combustible metal dust",
 "Recovery at the source ends the resuspend-and-resettle cycle",
 "Coolant and valuable swarf recovered instead of lost",
 "Cleaner enclosures extend machine and tooling life",
 "Capture-at-nozzle with HEPA exhaust protects operators",
 "Supports compliance with OSHA housekeeping and NFPA standards",
 ],
 benefits: [
 { title: "Better Safety", detail: "Explosion-proof recovery removes the ignition-and-cloud pairing at the machine." },
 { title: "Higher Productivity", detail: "Single-pass cleanup returns spindle time instead of consuming it." },
 { title: "Cost Savings", detail: "Coolant and valuable swarf recovered instead of lost to the floor." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust protects operators and plant air quality." },
 ],
 recommended: ["explosion-proof-vacuums", "wet-dry-systems", "pneumatic-vacuums"],
 setup: [
 { step: "CNC machine tool", detail: "Chips, fines and coolant at the point of generation" },
 { step: "Hose & tool kit", detail: "Static-dissipative hose with grounded wands and nozzles" },
 { step: "Vacuum unit", detail: "Explosion-proof, wet/dry or air-operated to match material and area" },
 { step: "Filtration stage", detail: "Multi-stage separation with tested HEPA final stage" },
 { step: "Collection & disposal", detail: "Sealed containers; wetted handling for reactive fines" },
 ],
 setupNote: {
 text: "Portable at each machine, or fixed inlet drops on a central system —",
 link: { label: "the layout estimator", href: "/products#layout-estimator" },
 textAfter: "gives a preliminary read.",
 },
 faqs: [
 {
 question: "Can one vacuum handle chips, fines and coolant together?",
 answer:
 "Yes — wet/dry explosion-proof units separate liquids from solids in stages, recovering coolant for reclaim while fines are retained at the filtration stage. Matching the unit to your chip load and coolant volume is part of the specification.",
 },
 {
 question: "Do I need explosion-proof equipment for steel or cast iron machining?",
 answer:
 "Ferrous dusts are generally less severe than aluminum, titanium or magnesium fines — but many shops machine mixed materials, and the fine fraction plus your area classification decide. If reactive metals are anywhere in the mix, specify for them; your Dust Hazard Analysis governs.",
 },
 {
 question: "Portable units at each machine, or a central system?",
 answer:
 "Portables win for flexible cells and changing layouts; fixed inlet drops on a central system win for dense, permanent machine rows. The layout estimator gives a preliminary read on the crossover point for your floor.",
 },
 {
 question: "How should collected metal fines be handled?",
 answer:
 "Sealed — and for reactive fines like fine aluminum, wetted per the material guide, with condition-based emptying so no dry accumulation stands inside the unit between uses.",
 },
 ],
 relatedApplications: [
 "Grinding Dust",
 "CNC grinding",
 "Laser cutting",
 "Metal fabrication",
 "Deburring",
 "Surface finishing",
 "Machine shops",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
 studySlug: "aluminum-dust-automotive-machining",
};
