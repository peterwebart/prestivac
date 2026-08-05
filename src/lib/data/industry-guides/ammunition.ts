import { AlertTriangle, Filter, Layers, ScrollText, ShieldCheck, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const ammunitionGuide: IndustryGuideData = {
 slug: "ammunition",
 name: "Ammunition & Firearms",
 titleAccent: "ammunition & firearms",
 seo: {
 title: "Ammunition & Firearms Manufacturing Vacuum",
 description:
 "Vacuum programs for the machining, casing and range sides of ammunition and firearms facilities — brass chips, machining swarf and range lead. Primer and propellant areas run under explosive-materials rules (NFPA 495, ATF), a hard boundary this page respects.",
 },
 heroIntro:
 "Two safety cultures share one campus here — precision machining's rules on one side, explosive-materials law on the other. This program serves the machining, casing and range sides; primer and propellant areas run under NFPA 495 and ATF frameworks with equipment and methods specified to those rules, a boundary this page draws in ink.",
 badges: [
 { icon: ShieldCheck, title: "Boundary-First", detail: "Energetic areas: their rules govern" },
 { icon: Filter, title: "HEPA Filtration", detail: "Range lead and fines retained" },
 { icon: Zap, title: "Grounding Discipline", detail: "Absolute, everywhere on site" },
 { icon: Layers, title: "Built for Brass & Steel", detail: "Case forming to final machining" },
 ],
 stagesIntro:
 "From brass coil to proof range, the work alternates between conventional machining and energetic-materials territory. Walk the stages — and watch where the boundary falls.",
 stages: [
 { label: "Case forming & annealing", detail: "Draw presses and trimmers shed brass chips and lube residues continuously — floor and press-base recovery on the shift schedule keeps the conventional side conventional." },
 { label: "Projectile & jacket production", detail: "Swaging and jacketing work copper and lead together — recovery runs HEPA-retained with lead's sealed-handling duty riding along." },
 { label: "Primer operations", detail: "Primary explosives territory. Methods, equipment and cleanup here are specified under the facility's energetic-materials procedures and governing rules — primer residues are never generic vacuum cleanup, full stop." },
 { label: "Propellant handling & loading", detail: "Smokeless propellant runs under NFPA 495 and ATF frameworks — static discipline absolute, equipment specified to those rules only, and this program stops at that line." },
 { label: "Firearms machining", detail: "Receivers, barrels and slides are CNC territory — steel and aluminum chips recovered under the machining program, alloy by alloy." },
 { label: "Assembly & finishing", detail: "Fitting, coating and final assembly shed mixed fines — routine recovery keeps precision surfaces and gauging clean." },
 { label: "Test range & proofing", detail: "Proof firing doses the range with lead — and range dust can carry unburned propellant, which is cleared under energetic-residue procedures before routine lead recovery proceeds." },
 { label: "Packaging & warehousing", detail: "Cartons and finished goods run the warehouse program — packaging fly at staging, aisles on rotation, nothing exotic by design." },
 ],
 challengesHeading: "Two safety cultures, one campus",
 challenges: [
 { icon: AlertTriangle, title: "Energetic Boundaries", detail: "Primer and propellant areas run under explosive-materials rules — equipment and cleanup methods are specified there, and only there." },
 { icon: ScrollText, title: "ATF & NFPA 495", detail: "Licensing and the Explosive Materials Code frame the energetic side of the house — the program defers to that frame by design." },
 { icon: Filter, title: "The Range Lead Program", detail: "Priming compounds and bullet fragmentation dose range surfaces continuously — HEPA recovery on schedule is the management core." },
 { icon: Zap, title: "Static Is Different Here", detail: "Grounding discipline is good practice everywhere and absolute law near energetics — one habit, campus-wide." },
 { icon: Layers, title: "Brass Everywhere", detail: "Cases, chips, trim and swarf accumulate at every forming and machining station — low ignition risk, constant volume." },
 { icon: ShieldCheck, title: "Unburned Propellant", detail: "Range and loading-area dust can carry live propellant grains — energetic-residue clearance comes before routine recovery, always." },
 ],
 materialsHeading: "Know the side of the line",
 materials: [
 { name: "Brass & copper chips", combustible: "Low — oils ride along", approach: "Industrial recovery on the shift schedule", href: "/materials/copper-dust" },
 { name: "Range lead dust", combustible: "No — toxic", approach: "HEPA recovery on defined schedule; sealed disposal", href: "/materials/lead-dust" },
 { name: "Steel & aluminum machining chips", combustible: "Per alloy", approach: "Machining-program recovery, alloy by alloy", href: "/materials/aluminum-dust" },
 { name: "Primer residues", combustible: "Energetic — primary explosives", approach: "Facility energetic-materials procedures only — never generic vacuum cleanup" },
 { name: "Smokeless propellant", combustible: "Energetic", approach: "NFPA 495 / ATF domain — methods and equipment specified under those rules" },
 { name: "Packaging & general dust", combustible: "Low", approach: "Warehouse-program recovery at staging and aisles" },
 ],
 materialsDirectory: { label: "metal dusts", href: "/materials#metal-dusts" },
 applicationsHeading: "Applications on the conventional side",
 applicationCategorySlug: "metalworking-machining",
 recommended: ["industrial-vacuums", "hepa-vacuums", "explosion-proof-vacuums"],
 studySlug: "sulfur-dust-specialty-chemical-plant",
};
