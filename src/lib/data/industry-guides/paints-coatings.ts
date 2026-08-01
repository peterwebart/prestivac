import { AlertTriangle, Droplets, Filter, Flame, Palette, ShieldCheck } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const paintsCoatingsGuide: IndustryGuideData = {
 slug: "paints-coatings",
 name: "Paints & Coatings",
 titleAccent: "paints & coatings",
 seo: {
 title: "How to Safely Recover Dust in Paint & Coatings Manufacturing?",
 description:
 "Paint and coatings manufacturing runs two hazards side by side — fine combustible pigment and resin powders on the dry side, and flammable solvents (Class I atmospheres) on the wet side. Powder-coating production adds combustible thermoset powder. Recovery is matched to whichever hazard the area presents.",
 },
 heroIntro:
 "The industry where fine powder meets flammable solvent in the same building — coatings manufacturing handles combustible pigment and resin powders on the dry side and flammable solvents on the wet side, with powder-coating production adding a combustible thermoset powder of its own. Recovery is specified to whichever hazard the area actually presents.",
 badges: [
 { icon: ShieldCheck, title: "Dual-Hazard Aware", detail: "Combustible powder & flammable solvent" },
 { icon: Flame, title: "Solvent-Aware", detail: "Class I areas on the wet side" },
 { icon: Filter, title: "HEPA Filtration", detail: "Pigment & filler fines retained" },
 { icon: Palette, title: "Built for Coatings", detail: "Liquid paint & powder coating" },
 ],
 stagesIntro:
 "A coatings plant blends powders into liquids or produces dry powder coating, shedding fine dust on the dry side and running flammable solvents on the wet side. Walk the stages and the hazard each one presents.",
 stages: [
 { label: "Raw-material handling", detail: "Pigments, extenders, fillers and resins arrive as fine powders; handling begins with the recognition that organic pigments and resins are combustible while mineral fillers are respirable." },
 { label: "Weighing & dispensing", detail: "Dispensing fine powders sheds the finest airborne fraction at the scale — captured at the source to protect both the combustible-dust picture and the operator's breathing zone." },
 { label: "Dispersion & milling", detail: "High-shear dispersion and milling generate dust and, on solvent-borne lines, flammable vapor — so the area's classification, not just the material, drives the recovery specification." },
 { label: "Let-down & mixing", detail: "Solvent-borne let-down and thinning create Class I flammable atmospheres; recovery here uses equipment rated for the atmosphere, configured for flammable liquids where spills occur." },
 { label: "Powder-coating manufacture", detail: "Producing powder coating involves extruding, grinding and classifying thermoset polymer — a combustible plastic dust handled with grounded, static-dissipative recovery." },
 { label: "Filling & packaging", detail: "Filling liquid and powder products sheds residual material; powder filling in particular is a fugitive-dust point captured on a tight schedule." },
 { label: "Spray & application areas", detail: "Where coatings are applied, overspray — wet or powder — accumulates; recovery keeps booths and surrounding surfaces clear per the material applied." },
 { label: "Housekeeping", detail: "Recovery supports the plant's dust-collection and flammable-liquid controls, keeping combustible powder below layer thresholds and solvent residues contained." },
 ],
 challengesHeading: "Powder on one side, solvent on the other",
 challenges: [
 { icon: AlertTriangle, title: "Combustible Pigments & Resins", detail: "Organic pigments and resin powders are combustible fine dusts — handled with grounded, rated recovery, exactly as any combustible organic dust." },
 { icon: Flame, title: "Flammable Solvents", detail: "Solvent-borne dispersion, let-down and thinning create Class I flammable atmospheres, so recovery equipment must be rated for the atmosphere on the wet side." },
 { icon: Droplets, title: "Solvent-Borne Liquids & Sludge", detail: "Spills and residues on solvent lines need recovery configured for flammable liquids, not the dry-dust assumptions of the powder side." },
 { icon: Filter, title: "Respirable Fillers", detail: "Extenders such as calcium carbonate and talc are largely inert and non-combustible, while silica fillers are respirable — HEPA retention covers the fine mineral fraction either way." },
 { icon: ShieldCheck, title: "Heavy-Metal Pigments", detail: "Where legacy or specialty pigments carry heavy-metal components, that dust is captured under sealed, HEPA-retained handling as an exposure control." },
 { icon: Palette, title: "Powder-Coating Powder", detail: "Thermoset powder-coating material is a combustible plastic dust with static behavior — grounded, static-dissipative recovery, covered further in the powder coating application guide." },
 ],
 materialsHeading: "What coatings manufacturing handles",
 materials: [
 { name: "Organic pigments & resins", combustible: "Yes — combustible", approach: "Grounded, rated recovery from the source", href: "/materials/plastic-dust" },
 { name: "Extenders & fillers (calcium carbonate, talc)", combustible: "Largely inert / non-combustible", approach: "HEPA-retained recovery of the fine fraction" },
 { name: "Silica filler", combustible: "No — respirable hazard", approach: "HEPA, exposure-controlled recovery", href: "/materials/silica-dust" },
 { name: "Powder-coating powder", combustible: "Yes — thermoset polymer", approach: "Grounded, static-dissipative recovery", href: "/applications/powder-coating" },
 { name: "Solvents & solvent-borne material", combustible: "Flammable", approach: "Rated, wet-capable configuration in Class I areas" },
 { name: "Heavy-metal pigments (where present)", combustible: "Toxic", approach: "Sealed, HEPA-retained handling", href: "/materials/lead-dust" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in paints & coatings",
 applicationCategorySlug: "chemical-processing",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 studySlug: "coating-powder-automotive-finishing",
};
