import { AlertTriangle, Droplets, Filter, Flame, Fuel, ShieldCheck } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const oilGasGuide: IndustryGuideData = {
 slug: "oil-gas",
 name: "Oil & Gas",
 titleAccent: "oil & gas",
 seo: {
 title: "How to Safely Recover Dust & Residue in Oil & Gas",
 description:
 "The industry that made 'explosion-proof' a household word — but here the defining hazard is the flammable atmosphere itself. Refineries are Class I hazardous locations where gases and vapors set the classification; the dust that matters is catalyst fines, petroleum coke and spent media, recovered with equipment rated for the atmosphere.",
 },
 heroIntro:
 "The industry that made the phrase 'explosion-proof' a household word — and the one where the classification comes from the atmosphere, not the dust. Refineries and petrochemical plants are Class I hazardous locations, where flammable gases and vapors set the requirement and recovery equipment must be rated for that atmosphere. The dust that matters here is narrower and specific: catalyst fines, petroleum coke and spent media.",
 badges: [
 { icon: ShieldCheck, title: "Class I Rated", detail: "For flammable-vapor atmospheres" },
 { icon: Flame, title: "Vapor-First Hazard", detail: "Gases & vapors set the classification" },
 { icon: Filter, title: "HEPA Filtration", detail: "Catalyst and coke fines retained" },
 { icon: Fuel, title: "Built for Refineries", detail: "Catalyst, coke & residue recovery" },
 ],
 stagesIntro:
 "A refinery is a continuous hydrocarbon process punctuated by specific solids — catalysts, coke and spent media — handled inside a flammable-atmosphere environment. Walk the areas where recovery equipment operates, and why its rating matters.",
 stages: [
 { label: "Crude & distillation areas", detail: "The distillation heart of the refinery is a Class I environment; general housekeeping and spill recovery here use equipment rated for the flammable atmosphere, not just for the material collected." },
 { label: "Catalytic cracking (FCC)", detail: "Fluid catalytic cracking circulates fine catalyst; fresh, equilibrium and fine spent catalyst are recovered as fine powders under HEPA-retained, sealed handling." },
 { label: "Reforming & molecular sieves", detail: "Reforming and drying units use catalysts and molecular-sieve desiccants that shed fine dust during change-outs — captured cleanly to protect both the process and the operators." },
 { label: "Coking units", detail: "Delayed and fluid coking produce petroleum coke — a combustible carbon dust that is handled on both fronts: rated recovery for the ignition side, HEPA for the respirable side." },
 { label: "Sulfur recovery", detail: "Sulfur-recovery units and handling areas generate combustible sulfur dust, recovered with grounded, rated equipment as any combustible dust would be." },
 { label: "Spent-catalyst handling", detail: "Spent catalyst can carry adsorbed hydrocarbons and metals, making it both potentially reactive and an exposure concern — sealed, contained recovery is the rule." },
 { label: "Turnarounds & maintenance", detail: "Shutdown turnarounds concentrate cleanup into rated areas and vessels over compressed schedules — the point at which rated recovery equipment is used most intensively." },
 { label: "Spill & residue cleanup", detail: "Hydrocarbon spills, sludges and residues are recovered with configurations suited to flammable liquids, inside areas where an unrated tool would itself be the ignition source." },
 ],
 challengesHeading: "When the atmosphere is the hazard",
 challenges: [
 { icon: Flame, title: "The Atmosphere Is The Hazard", detail: "Refineries are Class I locations — flammable gases and vapors set the classification, so equipment must be rated for the atmosphere itself, a different question from combustible dust." },
 { icon: AlertTriangle, title: "Catalyst Fines", detail: "FCC catalyst, molecular sieves and spent catalyst are fine, sometimes hazardous powders — recovered HEPA-retained and sealed, never with a generic vacuum." },
 { icon: Fuel, title: "Petroleum Coke Dust", detail: "Coking units produce petcoke, a combustible carbon dust that carries both an ignition and a respirable hazard on the handling side." },
 { icon: Droplets, title: "Liquids, Sludge & Residue", detail: "Hydrocarbon liquids and sludges need recovery configured for flammable materials, not the dry-dust assumptions that govern most of the plant's solids." },
 { icon: ShieldCheck, title: "Rated Equipment Only", detail: "In a Class I area, a recovery tool that could spark is itself the hazard — air-operated or rated electric only. PrestiVac's explosion-proof line is UL 1203 Certified for Class I, Group D locations (Cert. )." },
 { icon: Filter, title: "Turnarounds & Confined Spaces", detail: "Shutdown maintenance concentrates cleanup into rated areas and vessels, where recovery must hold both the atmosphere rating and the confined-space discipline." },
 ],
 materialsHeading: "What oil & gas facilities recover",
 materials: [
 { name: "FCC & spent catalyst fines", combustible: "Varies — some hazardous", approach: "HEPA-retained, sealed recovery in rated areas" },
 { name: "Petroleum coke (petcoke)", combustible: "Yes — combustible carbon", approach: "Rated recovery; respirable fraction captured", href: "/materials/coke-dust" },
 { name: "Molecular sieve & desiccant dust", combustible: "Generally low", approach: "HEPA-retained recovery on change-out" },
 { name: "Sulfur & sulfur dust", combustible: "Yes — combustible", approach: "Grounded, rated recovery", href: "/materials/sulfur-dust" },
 { name: "Hydrocarbon liquids & sludge", combustible: "Flammable", approach: "Wet-capable configuration rated for the area" },
 { name: "Spill & general residue", combustible: "Per material", approach: "Rated recovery inside Class I locations" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in oil & gas",
 applicationCategorySlug: "oil-gas",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "industrial-vacuums"],
 studySlug: "sulfur-dust-specialty-chemical-plant",
};
