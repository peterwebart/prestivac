import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cottonWoolDustGuide: MaterialGuideData = {
 slug: "cotton-wool-dust",
 name: "Cotton & Wool Dust",
 groupCrumb: { label: "Paper & Textile Dusts", anchor: "paper-textile-dusts" },
 seo: {
 title: "How to Safely Recover Cotton & Wool Dust?",
 description:
 "Cotton dust carries its own OSHA standard — 1910.1043, the byssinosis rule — and ignitable fibers define their own hazardous-location class. HEPA-retained recovery for card rooms, overheads and motor housings, where lint fires flash across surfaces.",
 },
 heroIntro:
 "Built for the mill's two hazards in one material — a respirable fine fraction serious enough to earn cotton its own OSHA standard, and a fiber fraction whose flash-fire behavior gave ignitable flyings their own hazardous-location class.",
 badges: [
 { icon: ShieldCheck, title: "Fire & Explosion Safe", detail: "Built for Class III fiber areas" },
 { icon: Filter, title: "HEPA Filtration", detail: "The respirable fraction stays captured" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded — blends generate charge" },
 { icon: Factory, title: "Built for Textile Mills", detail: "Card room to weave room" },
 ],
 facts: [
 { label: "Material type", value: "Combustible fibers and flyings — with a respirable fine fraction" },
 { label: "Own federal standard", value: "Cotton dust carries OSHA 1910.1043 — the byssinosis standard" },
 { label: "Hazard class", value: "Ignitable fibers and flyings define Class III hazardous locations" },
 { label: "Fire behavior", value: "Lint flashes and propagates across surfaces rather than exploding as a cloud" },
 ],
 overview: [
 "Cotton dust is two hazards sharing a name. The fine, respirable fraction — at its worst in card rooms — caused enough byssinosis, the 'brown lung' of the mills, that cotton earned its own OSHA standard: 1910.1043, with exposure limits and engineering controls attached. The fiber fraction is the fire side: lint and flyings blanket machinery, overheads and motor housings, and when they ignite they flash and travel across coated surfaces rather than detonating as a cloud — behavior distinctive enough that ignitable fibers define their own hazardous-location class, Class III.",
 "The geography writes the schedule. Opening and blending shed trash and fly; carding concentrates the respirable fraction the standard tightens around; spinning and winding regenerate fly hourly; weaving coats everything downstream; and wool adds its carding and scouring streams — a combustible keratin fiber with an occupational history of its own. The program answers both hazards in one pass: HEPA-retained recovery so cleaning never re-suspends what the standard limits, overhead and motor-housing rotations that keep fuel off ignition sources, grounded equipment for static-generating blends, and never compressed air — the method the exposure logic and the fire logic both forbid.",
 ],
 industries: [
 { label: "Textile Manufacturing", href: "/applications#textile" },
 { label: "Ginning & Fiber Prep", href: "/industries/agriculture" },
 { label: "Nonwovens & Converting", href: "/applications#textile" },
 { label: "Paper Mills & Converting", href: "/industries#paper-mills" },
 { label: "Upholstery & Furniture", href: "/applications#textile" },
 ],
 riskHeading: "Fire & exposure risks",
 risks: [
 "Lint on motors, drives and overheads puts fuel directly on the ignition sources",
 "Fiber fires flash and propagate across lint-coated surfaces — fast, low, and building-wide",
 "Card-room fines are the respirable fraction the byssinosis standard exists for",
 "Dryer and oven lint is the textile fire's oldest starting point",
 "Synthetic blends generate static charge as they run",
 "Fly regenerates hourly — accumulation outpaces casual cleaning schedules",
 ],
 solutions: [
 "Overhead and motor-housing rotations — fuel comes off the ignition sources on schedule",
 "Card-room HEPA program aligned with the standard's engineering-control logic",
 "Equipment appropriate to Class III fiber areas, grounded end to end",
 "High-frequency fly recovery at cards, frames and winders",
 "Dryer-area lint discipline with cooled-material verification",
 "Sealed collection and disposal — the respirable fraction never re-enters the air",
 ],
 configuration: [
 { step: "Collection tool", detail: "Soft-surface and overhead tools for frames, guards and housings" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path — blends charge as they run" },
 { step: "Fiber-rated recovery unit", detail: "Specified for Class III areas and lint volumes" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the byssinosis fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "High-volume lint contained; documented and dispositioned" },
 ],
 bestPractices: [
 "Never use compressed air — the exposure logic and the fire logic both forbid it",
 "Motors, drives and overheads carry their own defined frequencies",
 "The card room runs the tightest schedule in the mill",
 "Ground everything — synthetic content turns every frame into a generator",
 "Recover dryer lint on cooled equipment only, and never let it wait",
 ],
 faqs: [
 {
 question: "Is cotton dust combustible?",
 answer:
 "Yes. Cotton dust and lint are combustible organic material, and lint accumulation on overhead surfaces and in machinery is a well-documented fire and deflagration concern in textile plants. Lint also blocks and insulates equipment, which introduces the hot-surface problem alongside the fuel problem.",
 },
 {
 question: "Why is cotton dust regulated separately?",
 answer:
 "Because of byssinosis — the respiratory disease historically called brown lung, caused by inhaling cotton dust over time. OSHA regulates it under a dedicated standard, 29 CFR 1910.1043, which is unusual for an organic dust and reflects how well documented the health effect is. So cotton dust carries a fire hazard and a specific regulated health hazard at once.",
 },
 {
 question: "Why does cotton dust have its own OSHA standard?",
 answer:
 "Byssinosis — the chronic 'brown lung' of textile workers — was documented heavily enough that OSHA issued 1910.1043 with exposure limits and engineering controls specific to cotton dust. Housekeeping that re-suspends settled dust works directly against the standard, which is why HEPA-retained vacuum recovery is the method that fits it.",
 },
 {
 question: "Do lint fires actually explode?",
 answer:
 "Typically they flash — fibers propagate flame across lint-coated surfaces at speed rather than detonating as a suspended cloud. That distinctive behavior is why ignitable fibers and flyings carry their own hazardous-location designation, Class III. It is a different mechanism than a dust deflagration, not a lesser one.",
 },
 {
 question: "Is wool the same hazard as cotton?",
 answer:
 "Wool is a combustible keratin fiber with its own processing streams — carding and scouring fly — and its own occupational history. The recovery logic carries over intact: the fine fraction stays HEPA-captured, the fiber fraction comes off machinery and overheads on schedule, and nothing gets blown down.",
 },
 {
 question: "What changes with synthetic blends?",
 answer:
 "Static and melt behavior. Polyester and nylon content turns running frames into charge generators, so grounding is non-negotiable — and synthetics melt and drip where natural fibers char, which changes how a fire travels. The blend on the frame, not the label on the bale, sets the specification.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
