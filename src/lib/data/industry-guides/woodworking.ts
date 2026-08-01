import {
 Filter,
 Flame,
 HardHat,
 ShieldAlert,
 Timer,
 TreePine,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const woodworkingGuide: IndustryGuideData = {
 slug: "woodworking",
 name: "Woodworking",
 titleAccent: "woodworking & furniture manufacturing",
 seo: {
 title: "Woodworking Vacuum Solutions",
 description:
 "Industrial vacuum solutions for furniture plants, cabinet shops and wood processing: explosion-proof HEPA recovery for a classic combustible dust that is also an IARC Group 1 exposure, built to NFPA 664 / 660 practice.",
 },
 heroIntro:
 "Wood dust carries two hazards in one material: it's a classic combustible dust with its own legacy standard, and it's a classified human carcinogen. The extraction system captures most of what each machine makes — the housekeeping program exists for the fraction that escapes and settles.",
 heroImage: {
 src: "/images/library/workers/woodshop-sawdust.jpg",
 alt: "Operator vacuuming sawdust beside a panel saw in a woodworking shop",
 },
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 664 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Carcinogen retained, not redistributed" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: TreePine, title: "Built for Wood Shops", detail: "Sanding fines to shavings" },
 ],
 stagesIntro:
 "Every cutting, shaping and smoothing operation makes its own dust fraction — the finer the process, the finer and more dispersible the dust. The stages below trace where the fuel is generated and where it settles.",
 stages: [
 { label: "Lumber receiving & storage", detail: "Handling and cutting to length generate the coarse fraction — racks and floor zones join the scheduled rotation early." },
 { label: "Rough milling", detail: "Planers, rips and moulders throw chips and dust in volume; extraction takes most, the escape fraction starts settling on structure." },
 { label: "CNC routing & machining", detail: "Nested-based routing makes fine dust continuously inside the enclosure — line-side vacuum recovery keeps the cell inside its accumulation target." },
 { label: "Sanding & finishing prep", detail: "The finest, most dispersible fraction on site comes off wide-belt and hand sanding — HEPA-filtered explosion-proof duty, captured at source." },
 { label: "Assembly & joinery", detail: "Drilling, doweling and fitting shed dust at benches spread across the floor — portable recovery follows the work." },
 { label: "Finishing & coating", detail: "Dust control protects the finish as much as the program: settled fines ruin coats, and uncured overspray is handled per its own chemistry." },
 { label: "Dust collection surrounds", detail: "The collector, ducts and filter house concentrate everything the system captures — their perimeters earn a defined vacuum frequency." },
 { label: "Packaging & shipping", detail: "Residual dust vibrates free during wrapping and crating — the last cleaning pass protects product and dock alike." },
 ],
 challengesHeading: "One dust, two hazards, one program",
 challenges: [
 { icon: Flame, title: "A classic combustible dust", detail: "Wood dust shaped NFPA 664 — now consolidated into NFPA 660 — and deflagration-capable fines come off every sanding and machining head." },
 { icon: Filter, title: "A classified carcinogen", detail: "Wood dust is an IARC Group 1 exposure — HEPA retention and sealed disposal are health controls as much as fire controls." },
 { icon: ShieldAlert, title: "The fugitive fraction", detail: "Extraction captures most of what's made at the machine; the fraction that escapes settles on structure and becomes the accumulation the DHA measures." },
 { icon: Timer, title: "Sanding makes the worst of it", detail: "The finest, most dispersible dust on site comes off sanders — highest ignition sensitivity and highest exposure in the same stream." },
 { icon: HardHat, title: "Housekeeping method matters", detail: "Compressed air and dry sweeping re-suspend settled fines into exactly the clouds the program exists to prevent — vacuum recovery is the compliant method." },
 { icon: TreePine, title: "Elevated surfaces", detail: "Beams, ducts, fixtures and joist bays accumulate out of sight — the classic secondary-explosion fuel that scheduled structure cleaning removes." },
 ],
 materialsHeading: "Understand the wood dusts. Match the recovery.",
 materials: [
 { name: "Hardwood dust", combustible: "Yes — and an IARC Group 1 exposure", approach: "Explosion-proof HEPA recovery; sealed disposal", href: "/materials/wood-dust" },
 { name: "Softwood dust", combustible: "Yes", approach: "Explosion-proof recovery on a defined frequency" },
 { name: "MDF & engineered board dust", combustible: "Yes — resin-bonded fines", approach: "HEPA recovery; treated as the most dispersible fraction" },
 { name: "Sanding fines", combustible: "Yes — finest fraction", approach: "Capture at source plus scheduled structure cleaning" },
 { name: "Chips & shavings", combustible: "Lower dispersibility — still fuel", approach: "Routine recovery before traffic mills the coarse fraction into fines" },
 { name: "Uncured finishing overspray", combustible: "Varies — coating chemistry governs", approach: "Segregated handling per the coating documentation" },
 ],
 materialsDirectory: { label: "wood dusts", href: "/materials#wood-dusts" },
 applicationsHeading: "Applications in woodworking",
 applicationCategorySlug: "woodworking",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 studySlug: "wood-dust-furniture-manufacturing",
};
