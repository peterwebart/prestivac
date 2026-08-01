import { AlertTriangle, Filter, Layers, Pickaxe, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const miningGuide: IndustryGuideData = {
 slug: "mining",
 name: "Mining & Minerals",
 titleAccent: "mining & minerals",
 seo: {
 title: "How to Safely Recover Dust in Mining & Mineral Processing?",
 description:
 "The original dust industry — where dust is measured by the ton and the same fugitive cloud is both an explosion risk and, at the respirable scale, a slow-motion health catastrophe. Silica-bearing minerals, explosive coal and sulfides, and massive-tonnage handling, controlled at the source in processing facilities.",
 },
 heroIntro:
 "The industry that wrote the first chapters of occupational-dust regulation — where dust is measured by the ton and the same fugitive cloud is two hazards at once: an explosion risk in the case of coal and sulfides, and at the respirable scale a slow-motion health catastrophe. In crushing, screening, milling and bagging facilities, that dual hazard is managed where the dust is generated.",
 badges: [
 { icon: ShieldCheck, title: "Dual-Hazard Aware", detail: "Explosion and chronic disease" },
 { icon: Wind, title: "Respirable Silica", detail: "The deadliest occupational dust" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine and respirable fractions" },
 { icon: Pickaxe, title: "Built for Processing", detail: "Crushing, screening & bagging" },
 ],
 stagesIntro:
 "A mineral operation reduces raw rock to sized, packaged product, shedding dust at every crush, screen and transfer — at a scale few other industries match. Walk the processing and handling stages where a vacuum earns its place.",
 stages: [
 { label: "Crushing & primary reduction", detail: "Primary and secondary crushing liberate the first, coarsest dust and the fine respirable fraction beneath it; recovery targets fugitive accumulation around crushers rather than the raw stream." },
 { label: "Screening & classification", detail: "Screening and classification generate airborne fines continuously — the surfaces and structures around them accumulate a dust that is, depending on the mineral, respirable, combustible, or both." },
 { label: "Milling & grinding", detail: "Fine grinding produces the most respirable and, for coal and sulfides, the most ignitable fraction; capture here protects both the breathing zone and the ignition-source picture." },
 { label: "Conveying & transfer points", detail: "Transfer points are the classic fugitive-dust source — every drop sheds a cloud, and the settled accumulation on conveyors and structures is what scheduled recovery removes." },
 { label: "Storage & silos", detail: "Silos and bins accumulate dust in confined, sometimes combustible conditions; silo housekeeping follows dedicated procedures and supports the facility's deflagration protections." },
 { label: "Bagging & packaging", detail: "Bagging and dumping are among the dustiest steps in the plant — capture at the packaging line protects operators from respirable exposure and keeps fugitive fuel off the floor." },
 { label: "Control & electrical rooms", detail: "Settled mineral dust in electrical and control rooms is both an ignition risk and a source of equipment failure — routine HEPA-retained recovery keeps these spaces clean." },
 { label: "Dust collectors & housekeeping", detail: "Recovery supports — never replaces — the plant's dust-collection and deflagration systems, keeping fugitive dust below the layer depths that housekeeping standards target." },
 ],
 challengesHeading: "Two hazards in one cloud, at scale",
 challenges: [
 { icon: Wind, title: "Respirable Crystalline Silica", detail: "Silica-bearing minerals produce the deadliest occupational dust — respirable crystalline silica carries a 50 µg/m³ exposure limit and demands HEPA-retained, exposure-controlled recovery." },
 { icon: AlertTriangle, title: "Explosive Coal & Sulfides", detail: "Coal, lignite and metal-sulfide dusts deflagrate — the explosion side of the mineral cloud, handled with grounded, rated recovery where those materials are processed." },
 { icon: Layers, title: "Dust By The Ton", detail: "Scale is the defining challenge — fugitive accumulation builds on structures and equipment at massive tonnage, faster than in almost any other industry." },
 { icon: Filter, title: "It Settles Everywhere", detail: "Transfer points, structures and overhead surfaces accumulate combustible and respirable dust between cleanings — the fugitive fraction is the one that matters." },
 { icon: ShieldCheck, title: "Two Hazards, One Program", detail: "The same dust is an explosion risk and a chronic-health hazard, so the housekeeping program is specified to satisfy both at once." },
 { icon: Pickaxe, title: "Electrical & Control Spaces", detail: "Settled mineral dust in electrical and control rooms is both an ignition source and a cause of equipment failure — a priority for scheduled recovery." },
 ],
 materialsHeading: "What mineral processing generates",
 materials: [
 { name: "Silica-bearing mineral dust", combustible: "No — but a severe respirable hazard", approach: "HEPA-retained, exposure-controlled recovery", href: "/materials/silica-dust" },
 { name: "Coal & lignite dust", combustible: "Yes", approach: "Grounded, rated recovery on the deflagration logic", href: "/materials/coal-dust" },
 { name: "Limestone & lime dust", combustible: "No", approach: "Routine HEPA-retained recovery", href: "/materials/concrete-cement-dust" },
 { name: "Metal ore & sulfide fines", combustible: "Often yes", approach: "Rated recovery; test the ore's behavior" },
 { name: "Graphite & carbon minerals", combustible: "Yes — and conductive", approach: "Rated, conductive-aware recovery", href: "/materials/graphite-dust" },
 { name: "Gypsum & industrial minerals", combustible: "Generally no", approach: "Routine recovery on the housekeeping schedule" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in mineral processing",
 applicationCategorySlug: "mining",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "coal-dust-power-generation",
};
