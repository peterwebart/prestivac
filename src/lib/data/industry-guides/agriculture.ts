import {
 Filter,
 Flame,
 HardHat,
 ShieldAlert,
 Timer,
 Wheat,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const agricultureGuide: IndustryGuideData = {
 slug: "agriculture",
 name: "Agriculture & Grain Handling",
 titleAccent: "agriculture & grain handling",
 seo: {
 title: "Agriculture & Grain Handling Vacuum Solutions",
 description:
 "Industrial vacuum solutions for grain elevators, feed mills and agricultural processing: explosion-proof recovery for grain dust under NFPA 61 / 660 and OSHA's grain handling standard.",
 },
 heroIntro:
 "Grain dust wrote the history of dust explosions, and it's the one material family with its own codified housekeeping number — OSHA's grain handling standard sets a 1/8-inch action level in priority areas. Elevators, legs, galleries and mills each generate the fuel; the program's job is to keep removing it.",
 heroImage: {
 src: "/images/library/workers/food-production-hygiene.jpg",
 alt: "Grain elevator complex with steel storage silos and conveying legs",
 },
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 61 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines retained, not redistributed" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Wheat, title: "Built for Bulk", detail: "Headhouse to load-out" },
 ],
 stagesIntro:
 "Grain liberates dust at every transfer between the receiving pit and the load-out spout — each stage below is a generation point, and the enclosed ones concentrate fuel and ignition together.",
 stages: [
 { label: "Receiving & pit", detail: "Dump turbulence at intake is the first generation point — boot pits join the scheduled rotation with tools sized for spillage plus fines." },
 { label: "Elevator legs & conveying", detail: "The priority areas: suspended dust and friction ignition share one casing — housekeeping outside, bearing and belt monitoring inside." },
 { label: "Storage bins & silos", detail: "Bin decks accumulate layers across huge flat footage; interiors are cleaned reach-first so confined-space entry becomes the exception." },
 { label: "Drying", detail: "Heat plus airflow re-entrains fines — dryer perimeters on a defined vacuum frequency." },
 { label: "Cleaning & screening", detail: "The screenings stream concentrates the finest, most ignitable fraction on site — sealed recovery and disposal." },
 { label: "Milling & grinding", detail: "The feed mill makes its own fine fraction continuously — HEPA-filtered explosion-proof duty, with a central-system option for fixed equipment." },
 { label: "Feed processing", detail: "Pelleting dust and additive handling add exposure considerations on top of combustibility." },
 { label: "Load-out", detail: "Spout dust and truck-bay housekeeping close the loop — the last transfer point is still a transfer point." },
 ],
 challengesHeading: "The original combustible dust, still earning its reputation",
 challenges: [
 { icon: Flame, title: "Historic hazard, codified rules", detail: "Grain elevator explosions shaped this field — NFPA 61 and OSHA's grain handling facilities standard (29 CFR 1910.272) both govern housekeeping directly." },
 { icon: ShieldAlert, title: "The 1/8-inch action level", detail: "OSHA's grain standard sets a codified accumulation trigger in priority housekeeping areas — a number the program is designed never to reach." },
 { icon: Zap, title: "Elevator legs concentrate risk", detail: "Enclosed bucket elevators combine suspended dust with friction ignition sources — slipping belts, hot bearings — making leg areas the classic initiation point." },
 { icon: HardHat, title: "Confined spaces", detail: "Bins and silos complicate cleaning; long-reach vacuum recovery reduces how often anyone has to enter at all." },
 { icon: Timer, title: "Seasonal surge", detail: "Harvest compresses a year's dust generation into weeks — the housekeeping program has to scale with throughput." },
 { icon: Wheat, title: "Horizontal surface area", detail: "Bin decks, gallery floors and headhouse levels accumulate layers across enormous flat footage between cleanings." },
 ],
 materialsHeading: "Understand the grain dusts. Match the recovery.",
 materials: [
 { name: "Grain dust (mixed)", combustible: "Yes — the historic hazard", approach: "Explosion-proof recovery; priority areas on the 1/8-inch action-level frequency", href: "/materials/grain-dust" },
 { name: "Corn dust", combustible: "Yes", approach: "Explosion-proof recovery with grounded accessories", href: "/materials/corn-dust" },
 { name: "Wheat & flour dust", combustible: "Yes", approach: "Explosion-proof HEPA recovery; elevated surfaces on schedule", href: "/materials/flour-dust" },
 { name: "Soybean dust", combustible: "Yes", approach: "Explosion-proof recovery; sealed disposal" },
 { name: "Feed & pellet dust", combustible: "Yes", approach: "HEPA-filtered recovery in mill and pelleting areas" },
 { name: "Treated seed dust", combustible: "Combustibility varies — treatment chemistry adds exposure handling", approach: "HEPA capture and sealed disposal per the treatment's documentation" },
 ],
 materialsDirectory: { label: "agricultural dusts", href: "/materials#agricultural-dusts" },
 applicationsHeading: "Applications in agriculture",
 applicationCategorySlug: "agriculture",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 studySlug: "grain-dust-elevator-feed-mill",
};
