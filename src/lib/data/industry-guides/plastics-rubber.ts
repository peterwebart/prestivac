import { AlertTriangle, Filter, Layers, ShieldCheck, Wind, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const plasticsRubberGuide: IndustryGuideData = {
 slug: "plastics-rubber",
 name: "Plastics & Rubber",
 titleAccent: "plastics & rubber",
 seo: {
 title: "How to Safely Recover Dust in Plastics & Rubber Manufacturing?",
 description:
 "Two combustible dusts sit side by side here — self-charging plastic dust from compounding, grinding and regrind, and carbon black from rubber and tire compounding, one of the most ignition-prone dusts of all. Both demand bonded, grounded, HEPA-retained recovery. Testing governs the plastic side; carbon black is treated as readily ignitable.",
 },
 heroIntro:
 "The industry where two combustible dusts sit side by side — self-charging plastic dust on the polymer side, and carbon black on the rubber side. Plastics processing sheds insulating polymer fines that build their own static ignition, while rubber and tire compounding handle carbon black, among the most readily ignitable dusts in industry. Both call for bonded, grounded, HEPA-retained recovery.",
 badges: [
 { icon: ShieldCheck, title: "Static & Ignition Aware", detail: "Polymer dust + carbon black" },
 { icon: Zap, title: "Self-Charging Dust", detail: "Insulating plastic fines" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine polymer & carbon retained" },
 { icon: Layers, title: "Built for Processing", detail: "Molding, extrusion, compounding" },
 ],
 stagesIntro:
 "A plastics or rubber operation blends, forms and finishes polymers and elastomers, shedding combustible dust that changes character between the plastic and rubber sides. Walk the stages and their dusts.",
 stages: [
 { label: "Resin & compound handling", detail: "Pellets and powders arrive and are conveyed; plastic powder is combustible and, as an insulator, begins accumulating static from the first transfer." },
 { label: "Compounding & mixing", detail: "Compounding blends polymers with fillers and additives, shedding mixed fine dust whose behavior — and whether it is combustible — is established by testing the actual blend." },
 { label: "Injection molding & extrusion", detail: "Molding and extrusion generate fines from feed, purge and trim; grounded recovery keeps combustible plastic dust off machines and floors." },
 { label: "Grinding & regrind", detail: "Grinding scrap and regrind is a primary fine-dust source across plastics processing — the finest, most ignitable and most static-prone fraction." },
 { label: "Rubber compounding", detail: "Rubber and tire compounding handle carbon black, one of the most readily ignitable combustible dusts — grounded, rated, HEPA-retained recovery is essential here." },
 { label: "Tire & rubber building", detail: "Building and curing rubber products sheds rubber dust and carbon-black residue, captured with bonded, rated equipment throughout the line." },
 { label: "Finishing & deflashing", detail: "Deflashing, trimming and finishing produce additional fine dust from both polymer and rubber parts, recovered at the workstation." },
 { label: "Housekeeping", detail: "Plastic and carbon fines are fine and clinging, so bonded, HEPA-retained recovery with frequent housekeeping keeps combustible dust below thresholds." },
 ],
 challengesHeading: "Self-charging polymer meets carbon black",
 challenges: [
 { icon: Zap, title: "Self-Charging Plastic Dust", detail: "Plastics are insulators, so grinding and regrind produce combustible dust that builds its own static — a built-in ignition source demanding bonded, grounded recovery." },
 { icon: AlertTriangle, title: "Carbon Black In Rubber", detail: "Rubber and tire compounding use carbon black, one of the most readily ignitable combustible dusts — grounded, rated, HEPA-retained recovery is essential." },
 { icon: Wind, title: "Regrind & Fines", detail: "Grinding scrap and regrind is a primary fine-dust source across plastics processing, liberating the most ignitable fraction." },
 { icon: Layers, title: "Compounding Dust", detail: "Compounding blends polymers with fillers and additives, shedding mixed fine dust that explosibility testing must characterize before it is specified for." },
 { icon: ShieldCheck, title: "Ground Everything", detail: "Both self-charging plastic dust and readily-ignitable carbon black demand bonded, grounded, rated recovery — the discipline is non-negotiable on both sides." },
 { icon: Filter, title: "Fine & Clinging", detail: "Plastic and carbon fines are fine and cling to equipment, so HEPA-retained recovery is essential to keep them contained." },
 ],
 materialsHeading: "What plastics & rubber manufacturing generate",
 materials: [
 { name: "Plastic & polymer dust", combustible: "Yes — and self-charging", approach: "Bonded, grounded, static-dissipative recovery", href: "/materials/plastic-dust" },
 { name: "Carbon black (rubber)", combustible: "Yes — very ignition-prone", approach: "Grounded, rated, HEPA-retained recovery", href: "/materials/carbon-black" },
 { name: "Regrind & scrap fines", combustible: "Yes", approach: "Rated recovery at the grinding source" },
 { name: "Rubber dust", combustible: "Yes", approach: "Grounded, rated recovery", href: "/materials/plastic-dust" },
 { name: "Compound additives & fillers", combustible: "Varies", approach: "HEPA-retained recovery; test the blend" },
 { name: "General processing dust", combustible: "Combustible", approach: "Routine bonded, HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in plastics & rubber",
 applicationCategorySlug: "plastics",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 studySlug: "coating-powder-automotive-finishing",
};
