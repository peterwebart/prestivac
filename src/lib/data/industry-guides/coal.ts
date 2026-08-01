import { AlertTriangle, Filter, Flame, HardHat, Layers, ScrollText, ShieldCheck } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const coalGuide: IndustryGuideData = {
 slug: "coal",
 name: "Coal & Power Generation",
 titleAccent: "coal & power generation",
 seo: {
 title: "Coal & Power Generation Vacuum Solutions",
 description:
 "Explosion-proof vacuum programs for the coal surface world — unloading pits, conveyor galleries, transfer towers, crusher houses, tripper decks and bunker floors — with self-heating discipline, cooled-material rules and HEPA recovery on the ash side.",
 },
 heroIntro:
 "The oldest combustible dust in the record still runs the most vertical geography in industry — coal climbs from unloading pit to bunker floor through galleries, towers and tripper decks, shedding fines at every elevation. The housekeeping program follows it floor by floor.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines and ash retained" },
 { icon: Flame, title: "Self-Heating Aware", detail: "Cooled, sealed, prompt disposal" },
 { icon: HardHat, title: "Built for Heavy Industry", detail: "Pit floor to tripper deck" },
 ],
 stagesIntro:
 "Coal's path through a plant is vertical — every lift and transfer sheds fines onto the floor below. Walk the stages to see where dust generates and where the recovery program earns its keep.",
 stages: [
 { label: "Rail & truck unloading", detail: "Rotary dumpers and receiving hoppers make the first cloud of the day — pit floors and surrounds join the scheduled rotation with tools sized for spillage plus fines." },
 { label: "Stockyard & reclaim", detail: "Stockpiles self-heat from within, lower-rank coals most readily — reclaim hoppers and feeder surrounds run on defined frequencies with cooled-material verification built in." },
 { label: "Conveyors & galleries", detail: "Belt spillage and carryback settle the length of every elevated run — gallery floors are the classic float-dust inventory, recovered on rotation, never blown down." },
 { label: "Transfer towers", detail: "Chute turbulence concentrates fines floor by floor down the tower — each level carries its own frequency and the vertical hose runs stay bonded end to end." },
 { label: "Crusher house", detail: "Size reduction is the finest generation point on site — crusher surrounds and the floors below run the tightest schedule in the yard." },
 { label: "Tripper deck & bunker bays", detail: "The deck above the bunkers is the textbook accumulation floor — elevated, warm and out of the daily traffic. Defined-frequency recovery keeps the inventory from building over the fuel supply." },
 { label: "Pulverizer & mill floors", detail: "Fines around mills meet hot surfaces and classified areas — rated or air-operated recovery with the cooled-material rule enforced without exception." },
 { label: "Ash & baghouse support", detail: "Fly and bottom ash are largely incombustible but carry exposure duty — HEPA-retained recovery, sealed disposal and vacuum support for collector servicing instead of compressed air." },
 ],
 challengesHeading: "The oldest dust in the record, still writing entries",
 challenges: [
 { icon: ScrollText, title: "The Oldest Record", detail: "Coal dust's explosibility has been documented since the 1840s mine investigations — the record predates every other dust standard." },
 { icon: Flame, title: "Volatile-Driven Reactivity", detail: "Reactivity rises with volatile content — bituminous and sub-bituminous fines govern the equipment specification." },
 { icon: HardHat, title: "Two Jurisdictions", detail: "Mines run under MSHA with rock-dusting rules; surface plants answer to OSHA and the NFPA framework, now consolidated in NFPA 660." },
 { icon: Layers, title: "Elevated Inventory", detail: "Tripper decks and transfer towers layer fines high above ignition-rich equipment, out of daily sight." },
 { icon: AlertTriangle, title: "Self-Heating Coal", detail: "Stockpiles and bunkers smolder from within — smoldering material near any equipment is the forbidden event." },
 { icon: Filter, title: "Ash-Side Exposure", detail: "Trace constituents, including mercury, put exposure control on the ash-side housekeeping program." },
 ],
 materialsHeading: "Know the streams. Match the recovery.",
 materials: [
 { name: "Coal dust (bituminous & sub-bituminous)", combustible: "Yes — volatile-driven", approach: "Explosion-proof recovery on DHA frequencies, floor by floor", href: "/materials/coal-dust" },
 { name: "Lignite & lower-rank fines", combustible: "Yes — self-heating prone", approach: "Cooled-material verification; sealed, prompt disposal" },
 { name: "Coke dust", combustible: "Yes", approach: "Explosion-proof recovery; exposure controls for oven-emission adjacency", href: "/materials/coke-dust" },
 { name: "Fly ash", combustible: "Generally no — incombustible", approach: "HEPA-retained recovery; exposure limits do the governing" },
 { name: "Bottom ash & slag", combustible: "No", approach: "Industrial recovery — cooled material only" },
 { name: "Limestone & sorbent dust", combustible: "No — inert", approach: "Nuisance-dust recovery on the sanitation schedule", href: "/materials/concrete-cement-dust" },
 ],
 materialsDirectory: { label: "mining & mineral dusts", href: "/materials#mining-dusts" },
 applicationsHeading: "Applications in coal & power",
 applicationCategorySlug: "energy",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "coal-dust-power-generation",
};
