import {
 Filter,
 Flame,
 FlaskConical,
 HardHat,
 ShieldAlert,
 Timer,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const chemicalGuide: IndustryGuideData = {
 slug: "chemical",
 name: "Chemical Processing",
 titleAccent: "chemical processing",
 seo: {
 title: "Chemical Processing Vacuum Solutions",
 description:
 "Industrial vacuum solutions for chemical plants: explosion-proof recovery for organic powders, resins and intermediates where combustibility, reactivity and exposure limits arrive in the same material — built to NFPA 660 practice in classified areas.",
 },
 heroIntro:
 "Chemical dusts rarely carry one hazard at a time — the same powder can be combustible, toxic and reactive, and it's often handled where solvent vapors share the air. The SDS and the Dust Hazard Analysis decide together, and the recovery equipment has to satisfy the area classification before it satisfies anything else.",
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Exposure control as much as fire control" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: FlaskConical, title: "Built for Process Areas", detail: "Classified zones to warehouses" },
 ],
 stagesIntro:
 "Powder moves through a chemical plant in charges, transfers and packing runs — every open handling point below generates dust, and the enclosed ones add solvent vapor to the picture.",
 stages: [
 { label: "Raw material receiving", detail: "Bag dumps, drum transfers and super-sack handling liberate powder at intake — capture at source with sealed disposal starts the program." },
 { label: "Charging & dispensing", detail: "Open charging into reactors and mixers is the classic exposure-plus-combustibility point — often inside a classified area where the vacuum's own rating is the first specification." },
 { label: "Reaction & processing", detail: "Enclosed while it runs; the risk lives at sampling ports, seal surrounds and cleanup edges — plus solvent vapors that make hybrid mixtures more easily ignitable than the dust alone." },
 { label: "Drying & milling", detail: "Dryers re-liberate fines and mills make the finest fraction by design — HEPA explosion-proof duty at its heaviest." },
 { label: "Blending & compounding", detail: "Every charge and discharge puffs powder; grounded recovery between batches holds the accumulation and carryover targets." },
 { label: "Packaging & drumming", detail: "Filling heads and drum tops shed residue continuously — line-side recovery on the run schedule, sealed containers per the SDS." },
 { label: "Utilities & dust collection", detail: "The collector house and duct runs concentrate whatever the plant makes — their perimeters earn a defined vacuum frequency." },
 { label: "Warehouse & spill response", detail: "A torn bag is a chemistry question before it's a cleaning question — recovery method per the SDS, sealed disposal always." },
 ],
 challengesHeading: "Three hazard axes in one powder",
 challenges: [
 { icon: Flame, title: "Combustible, toxic, reactive", detail: "The same intermediate can deflagrate, poison and react with water — the SDS and the DHA are read together before a recovery method is chosen." },
 { icon: ShieldAlert, title: "Classified areas", detail: "Zone-rated spaces set the equipment specification — recovery units must match the area classification, with air-operated options removing the electrical question entirely." },
 { icon: Zap, title: "Hybrid mixtures", detail: "Dust suspended in solvent vapor ignites more easily than either alone — housekeeping in solvent areas carries the process area's full discipline." },
 { icon: Timer, title: "Milling makes it worse on purpose", detail: "Micronizing exists to make particles smaller — the finest, most ignition-sensitive fraction on site is the product itself." },
 { icon: Filter, title: "Exposure limits bind first", detail: "For potent compounds the occupational exposure limit governs before combustibility does — HEPA retention and sealed handling serve both." },
 { icon: HardHat, title: "Wash-down isn't universal", detail: "Water-reactive materials rule out the hose — dry vacuum recovery per the SDS is the method that works for the whole catalog." },
 ],
 materialsHeading: "Understand the dusts. Match the recovery.",
 materials: [
 { name: "Organic intermediates & APIs", combustible: "Yes — commonly combustible", approach: "Explosion-proof HEPA recovery; exposure limits set the containment level" },
 { name: "Resins & polymer powders", combustible: "Yes", approach: "Explosion-proof recovery; grounded accessories throughout" },
 { name: "Sulfur", combustible: "Yes — very low ignition energy", approach: "Explosion-proof recovery with rigorous grounding; sealed disposal", href: "/materials/sulfur-dust" },
 { name: "Carbon black", combustible: "Yes — smolder-prone in bulk", approach: "HEPA recovery; collected material monitored, sealed and moved out", href: "/materials/carbon-black" },
 { name: "Oxidizers", combustible: "Oxidizer — not a fuel, intensifies fire", approach: "Segregated recovery; never mixed with combustible streams" },
 { name: "Water-reactive powders", combustible: "Varies — water-reactive; methods per SDS", approach: "Dry recovery only; disposition per the material documentation" },
 ],
 materialsDirectory: { label: "chemical dusts", href: "/materials#chemical-dusts" },
 applicationsHeading: "Applications in chemical processing",
 applicationCategorySlug: "chemical-processing",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 studySlug: "sulfur-dust-specialty-chemical-plant",
};
