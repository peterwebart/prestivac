import { AlertTriangle, Filter, Layers, ShieldCheck, Sparkles, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const cosmeticsGuide: IndustryGuideData = {
 slug: "cosmetics",
 name: "Cosmetics & Personal Care",
 titleAccent: "cosmetics & personal care",
 seo: {
 title: "How to Safely Recover Cosmetic & Personal-Care",
 description:
 "Loose powders, talc, pigments, mica and pressed-powder overspray behave like any fine organic dust — combustible fractions, GMP contamination control, and pigment cross-contamination all at once. HEPA-retained recovery for cosmetics manufacturing and compounding.",
 },
 heroIntro:
 "The industry where the dust looks harmless and behaves like every other fine powder — combustible organic fractions, exacting contamination and cross-color control, and the honest exception that talc itself is inert while the pigments, starches and binders around it are not.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Fine pigment fractions retained" },
 { icon: ShieldCheck, title: "GMP-Aware", detail: "Contamination control built in" },
 { icon: Sparkles, title: "Cross-Color Clean", detail: "No pigment carryover between batches" },
 { icon: AlertTriangle, title: "Combustible-Aware", detail: "The powders that are; the ones that aren't" },
 ],
 stagesIntro:
 "A cosmetics line runs from raw powder intake to pressed-and-packed product, shedding fine dust at every transfer. Walk the stages — the hazard is rarely what the delicate product suggests.",
 stages: [
 { label: "Raw powder intake & weighing", detail: "Talc, starches, pigments and actives arrive as fine powders — dispensing and weighing shed the finest airborne fraction, and recovery starts at the scale." },
 { label: "Blending & milling", detail: "Mixers and mills generate dust and heat; combustible organic powders here follow the same deflagration logic as any fine dust, so recovery is grounded and rated to the material." },
 { label: "Pressing & compaction", detail: "Pressed-powder and cake production sheds overspray and fines around the press — high-frequency recovery keeps color off the next batch and fuel off the floor." },
 { label: "Pigment & color handling", detail: "Colorants are the cross-contamination hazard: a trace of one shade in another is a rejected batch, so pigment areas run dedicated recovery and disciplined changeovers." },
 { label: "Loose-powder filling", detail: "Filling loose powders is the dustiest step in the plant — capture at the filler protects both the product's contamination limits and the operator's breathing zone." },
 { label: "Aerosol & spray products", detail: "Spray and aerosol lines add propellant and overspray considerations; flammable propellants point to the same ignition-source discipline the rest of the plant follows." },
 { label: "Cleanroom & GMP areas", detail: "Fill-finish and sensitive compounding run under GMP contamination control — cleanroom-compatible, HEPA-retained recovery that exhausts cleaner than the room." },
 { label: "Packaging & QC", detail: "Final packaging and inspection shed residual powder and packaging fines — routine recovery keeps QC surfaces and gauging clean." },
 ],
 challengesHeading: "Delicate product, ordinary dust physics",
 challenges: [
 { icon: AlertTriangle, title: "Combustible Organics", detail: "Starches, some pigments and many actives are combustible fine powders — the pretty product obeys the same dust-explosion physics as flour or sugar." },
 { icon: Sparkles, title: "Cross-Color Carryover", detail: "A trace of one pigment in another batch is a rejection — pigment areas need dedicated recovery and disciplined color changeovers." },
 { icon: ShieldCheck, title: "GMP Contamination Control", detail: "Cosmetics manufacturing runs contamination limits like a regulated process — housekeeping is a quality control, not a cosmetic one." },
 { icon: Wind, title: "Loose Powder Is Airborne", detail: "Filling and weighing loose powders generate the plant's highest airborne fraction — capture at the source protects product and operator alike." },
 { icon: Layers, title: "The Talc Exception", detail: "Talc itself is an inert mineral and non-combustible — but the pigments, starches and binders blended with it frequently are not. The blend sets the rule." },
 { icon: Filter, title: "Fine, Respirable Fractions", detail: "Cosmetic powders are milled fine by design, so the respirable fraction is significant — HEPA retention and sealed handling stay in the program." },
 ],
 materialsHeading: "Know the powder. Match the recovery.",
 materials: [
 { name: "Talc & mineral bases", combustible: "No — inert mineral", approach: "HEPA-retained recovery for contamination control; the blend may still be combustible", href: "/materials/silica-dust" },
 { name: "Starches & organic fillers", combustible: "Yes — combustible fine powder", approach: "Grounded, rated recovery on the deflagration logic any fine dust follows", href: "/materials/corn-dust" },
 { name: "Pigments & colorants", combustible: "Varies", approach: "Dedicated recovery; disciplined cross-color changeovers" },
 { name: "Actives & specialty powders", combustible: "Often yes", approach: "HEPA capture with sealed, contamination-controlled handling" },
 { name: "Pressed-powder overspray", combustible: "Per formulation", approach: "High-frequency press-area recovery; fuel off the floor" },
 { name: "Packaging & general dust", combustible: "Low", approach: "Routine recovery on the housekeeping schedule" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in cosmetics manufacturing",
 applicationCategorySlug: "pharmaceutical",
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 studySlug: "lactose-dust-pharmaceutical-tablet",
};
