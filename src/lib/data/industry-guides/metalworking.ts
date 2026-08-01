import {
 Droplets,
 Flame,
 HardHat,
 ShieldAlert,
 Timer,
 Wrench,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const metalworkingGuide: IndustryGuideData = {
 slug: "metalworking",
 name: "Metalworking & Machining",
 titleAccent: "metalworking & machining",
 seo: {
 title: "Metalworking & Machining Vacuum Solutions",
 description:
 "Industrial vacuum solutions for machine shops and fabricators: explosion-proof wet/dry recovery for chips, fines and coolant across changing material mixes — built to NFPA 660 practice.",
 },
 heroIntro:
 "A machine shop's hazard profile changes with its order book — aluminum this week, titanium the next, cast iron in between. Chips, fines and coolant arrive together at every spindle, and the recovery program has to be specified for the most demanding material that ever crosses the floor.",
 heroImage: {
 src: "/images/library/workers/metalworking-safety-floor.jpg",
 alt: "Operator vacuuming metal chips on a machine-shop floor under safety signage",
 },
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Droplets, title: "Wet/Dry Recovery", detail: "Chips, fines and coolant in one pass" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Wrench, title: "Built for the Shop Floor", detail: "Job shop to production cell" },
 ],
 stagesIntro:
 "Every process on the floor makes its own mix of chips, fines and liquid — the stages below trace where each fraction is generated and what recovery it demands.",
 stages: [
 { label: "Sawing & cutoff", detail: "Coarse chips and cutting fluid at the front of every job — routine recovery keeps the first operation from seeding the whole floor." },
 { label: "CNC milling & turning", detail: "The main event: chips, fines and coolant mist together at every enclosure — wet/dry explosion-proof recovery at the machine, sized for the material mix." },
 { label: "Grinding & finishing", detail: "The finest fraction on site, generated next to its own ignition source — sparks and fine dust separated by capture at the wheel and scheduled surrounds." },
 { label: "Deburring & polishing", detail: "Hand and media finishing shed fines across benches — portable HEPA recovery follows the work." },
 { label: "Welding & fabrication", detail: "Grinding dust and weld residues settle on fixtures and floors — vacuum passes replace the compressed-air blow-down that re-suspends them." },
 { label: "EDM & specialty processes", detail: "Sludges and fine residues with their own handling rules — recovered per the process documentation." },
 { label: "Parts washing & inspection", detail: "Residual fines and fluid carryover — the clean room of the shop stays clean by schedule, not by accident." },
 { label: "Shipping & housekeeping", detail: "Elevated ledges, machine tops and rafters accumulate between jobs — structure cleaning on a defined rotation closes the loop." },
 ],
 challengesHeading: "Specified for the worst material on the floor",
 challenges: [
 { icon: Flame, title: "The order book sets the hazard", detail: "Job shops don't control what alloy arrives next — recovery specified for reactive metals covers the week cast iron gives way to magnesium." },
 { icon: ShieldAlert, title: "Reactive alloys in the mix", detail: "Aluminum, magnesium and titanium fines each carry their own rules — material-dedicated containers and wetted handling when they're on the schedule." },
 { icon: Droplets, title: "Coolant everywhere", detail: "Chips arrive wet — wet/dry recovery separates reclaimable coolant from solids at the machine instead of losing both to the floor." },
 { icon: Timer, title: "Grinding makes the finest dust", detail: "The most ignition-sensitive fraction on site is generated inches from a shower of sparks — capture at source is the control." },
 { icon: HardHat, title: "The compressed-air habit", detail: "Blowing down machines turns settled fines into clouds — vacuum recovery is the method that doesn't create the hazard it's cleaning." },
 { icon: Wrench, title: "Hidden accumulation", detail: "Machine tops, ways covers, ledges and rafters collect fines out of sight — the DHA measures what the daily sweep never touches." },
 ],
 materialsHeading: "Understand the dusts. Match the recovery.",
 materials: [
 { name: "Aluminum machining fines", combustible: "Yes — St 2 to St 3 severity", approach: "Wetted, sealed explosion-proof recovery", href: "/materials/aluminum-dust" },
 { name: "Magnesium fines & swarf", combustible: "Yes — most ignition-sensitive", approach: "Wetted collection, vented containers — never airtight", href: "/materials/magnesium-dust" },
 { name: "Titanium chips & fines", combustible: "Yes — chip fires documented", approach: "Wetted, material-dedicated recovery; no water on burning metal", href: "/materials/titanium-dust" },
 { name: "Steel & cast iron chips", combustible: "Lower severity — fines still tested", approach: "Wet/dry recovery with coolant reclaim" },
 { name: "Grinding swarf & sludge", combustible: "Varies — wet handling changes the picture", approach: "Recovered wet where the process allows; dried accumulations treated as fines" },
 { name: "Coolant-wet mixed chips", combustible: "Recovery question — separation first", approach: "Wet/dry units split liquid for reclaim, solids for sealed disposal" },
 ],
 materialsDirectory: { label: "metal dusts", href: "/materials#metal-dusts" },
 applicationsHeading: "Applications in metalworking",
 applicationCategorySlug: "metalworking-machining",
 recommended: ["explosion-proof-vacuums", "wet-dry-systems", "pneumatic-vacuums", "industrial-vacuums"],
 studySlug: "aluminum-dust-automotive-machining",
};
