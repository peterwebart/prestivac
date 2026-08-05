import { AlertTriangle, Filter, Flame, Shirt, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const textileGuide: IndustryGuideData = {
 slug: "textile",
 name: "Textiles & Fibers",
 titleAccent: "textiles & fibers",
 seo: {
 title: "How to Safely Recover Dust in Textile & Fiber",
 description:
 "Textile lint carries two hazards at once — accumulated fiber dust is combustible and prone to lint fires and deflagration, while cotton dust causes byssinosis, a recognized occupational respiratory disease under OSHA's cotton dust standard. Synthetic fibers add combustible-plastic behavior. HEPA-retained recovery serves both.",
 },
 heroIntro:
 "The industry whose dust is two hazards in one drift of lint — accumulated fiber dust is combustible and behind real lint fires and deflagrations, while cotton dust causes byssinosis, the 'brown lung' recognized under OSHA's cotton dust standard. From fiber opening to finishing, and across natural and synthetic fibers alike, recovery has to address the fire hazard and the respiratory one together.",
 badges: [
 { icon: ShieldCheck, title: "Dual-Hazard Aware", detail: "Combustible and respiratory" },
 { icon: Flame, title: "Lint Is Combustible", detail: "Fiber dust deflagrates" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine fiber & lint retained" },
 { icon: Shirt, title: "Built for Textiles", detail: "Opening to finishing" },
 ],
 stagesIntro:
 "A textile mill turns raw fiber into finished fabric, shedding lint and fine fiber at every mechanical step — most heavily where fiber is opened and carded. Walk the stages where capture matters.",
 stages: [
 { label: "Fiber opening & carding", detail: "Opening and carding liberate the heaviest lint load in the mill; this is the primary dust source, where both the combustible and the respiratory hazard are most concentrated." },
 { label: "Spinning", detail: "Spinning sheds fine fiber continuously along the frames; lint accumulates on machinery and overhead surfaces between cleanings, building fugitive fuel." },
 { label: "Weaving & knitting", detail: "Weaving and knitting generate airborne fiber and sizing dust; recovery keeps looms and the surrounding structure clear of accumulating lint." },
 { label: "Napping & finishing", detail: "Napping, sanding and finishing raise the fabric surface and release the finest fiber fraction — captured at the machine to protect the breathing zone." },
 { label: "Cutting & sewing", detail: "Fabric cutting and sewing shed fabric dust and fiber trim; capture at cutting tables keeps the fine fraction out of the air in garment operations." },
 { label: "Flocking", detail: "Flocking applies fine chopped fiber by design — a fine, sometimes synthetic dust handled with grounded, static-dissipative recovery." },
 { label: "Dyeing & treatment", detail: "Dye and chemical-treatment powders introduce their own dust, captured under sealed, HEPA-retained handling appropriate to the material." },
 { label: "Housekeeping", detail: "Fibrous dust mats and accumulates fast, so frequent HEPA-retained recovery is the core control keeping lint below combustion and exposure thresholds." },
 ],
 challengesHeading: "Combustion and brown lung, together",
 challenges: [
 { icon: AlertTriangle, title: "Byssinosis Risk", detail: "Cotton dust causes byssinosis ('brown lung'), a recognized occupational respiratory disease addressed by OSHA's cotton dust standard (1910.1043)." },
 { icon: Flame, title: "Lint Deflagrates", detail: "Accumulated fiber lint is a combustible dust — lint fires and dust deflagrations are a real and historic textile hazard." },
 { icon: Wind, title: "Fine Fiber Everywhere", detail: "Opening, carding and napping shed lint continuously; it settles on every surface and collects in every duct throughout the mill." },
 { icon: Shirt, title: "Synthetic Fibers Too", detail: "Synthetic-fiber and flock dust is combustible plastic dust with its own static behavior — grounded, static-dissipative recovery applies." },
 { icon: ShieldCheck, title: "Two Hazards, One Program", detail: "The same lint is both a combustion hazard and a respiratory one, so the housekeeping program is specified to satisfy both at once." },
 { icon: Filter, title: "Lint Clogs & Accumulates", detail: "Fibrous dust mats and builds up quickly, so HEPA-retained recovery with frequent, disciplined housekeeping is essential." },
 ],
 materialsHeading: "What textile manufacturing generates",
 materials: [
 { name: "Cotton & natural-fiber lint", combustible: "Yes — plus byssinosis", approach: "HEPA-retained, exposure-aware recovery", href: "/materials/cotton-wool-dust" },
 { name: "Wool & animal-fiber dust", combustible: "Yes", approach: "HEPA-retained recovery on schedule", href: "/materials/cotton-wool-dust" },
 { name: "Synthetic-fiber & flock dust", combustible: "Yes — and self-charging", approach: "Grounded, static-dissipative recovery", href: "/materials/plastic-dust" },
 { name: "Fabric cutting dust", combustible: "Yes", approach: "HEPA capture at the cutting table" },
 { name: "Dye & treatment powders", combustible: "Varies", approach: "Sealed, HEPA-retained handling" },
 { name: "General lint & fiber", combustible: "Yes", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in textiles",
 applicationCategorySlug: "textile",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "paper-dust-packaging-converting",
};
