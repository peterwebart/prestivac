import { AlertTriangle, Filter, HardHat, Layers, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const constructionMaterialsGuide: IndustryGuideData = {
 slug: "construction-materials",
 name: "Construction Materials",
 titleAccent: "construction materials",
 seo: {
 title: "How to Safely Recover Dust in Construction",
 description:
 "The industry that makes what buildings are made of — cement, concrete products, gypsum board and brick — where the defining hazard, like glass and ceramics, is respirable crystalline silica rather than deflagration. From raw grinding to product cutting, HEPA-retained, exposure-controlled recovery is the priority.",
 },
 heroIntro:
 "The industry that manufactures what buildings are made of — cement, ready-mix and precast concrete, gypsum board and brick — and whose defining hazard is a slow one: respirable crystalline silica, present from raw grinding through to the cutting of finished products. Like glass and ceramics, this is a health-first recovery problem, where HEPA-retained, exposure-controlled capture matters more than deflagration protection.",
 badges: [
 { icon: ShieldCheck, title: "Health-First", detail: "Respirable silica is the hazard" },
 { icon: Wind, title: "Respirable Silica", detail: "Cement to product cutting" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine mineral fractions retained" },
 { icon: HardHat, title: "Built for Building Products", detail: "Cement, precast, gypsum, brick" },
 ],
 stagesIntro:
 "Building-products manufacturing turns raw minerals into cement, concrete, board and brick, generating silica-bearing dust from grinding through to the cutting of cured products. Walk the stages where exposure control matters.",
 stages: [
 { label: "Raw grinding & milling", detail: "Grinding limestone, clay and aggregate for cement and products produces fine, silica-bearing mineral dust — the first respirable source, captured at the mills." },
 { label: "Kiln & clinker", detail: "Cement kilns and clinker handling generate dust in largely enclosed processes; housekeeping addresses settled mineral dust around the equipment." },
 { label: "Cement grinding & bagging", detail: "Finish grinding and bagging cement are dusty steps producing caustic, silica-bearing dust — captured to protect both the breathing zone and the skin." },
 { label: "Ready-mix & precast", detail: "Batching and precast operations handle cement and aggregate; fugitive silica-bearing dust is recovered on a schedule that keeps surfaces and equipment clear." },
 { label: "Gypsum board manufacture", detail: "Producing gypsum wallboard sheds fine gypsum and additive dust, captured with HEPA-retained recovery across the board line." },
 { label: "Brick & block", detail: "Forming and firing brick and block work with silica-bearing clays; grinding and finishing fired product releases respirable silica." },
 { label: "Product cutting & fabrication", detail: "Cutting and grinding cured concrete, brick and block is the exposure step regulators focus on — respirable crystalline silica captured at the source." },
 { label: "Housekeeping", detail: "Because the hazard is chronic rather than explosive, disciplined HEPA-retained housekeeping is itself the primary occupational-health control." },
 ],
 challengesHeading: "A slow hazard, from grinding to cutting",
 challenges: [
 { icon: Wind, title: "Respirable Crystalline Silica", detail: "Cement, aggregate and concrete products are silica-bearing, so respirable silica — at its 50 µg/m³ limit — is the defining hazard, demanding HEPA-retained, exposure-controlled recovery." },
 { icon: AlertTriangle, title: "Cutting Cured Products", detail: "Cutting and grinding cured concrete, brick and block releases respirable silica — the exposure step regulators focus on most." },
 { icon: Layers, title: "Dust By Volume", detail: "Building-products manufacturing handles minerals at scale, so fugitive fine dust accumulates quickly on structures and equipment between cleanings." },
 { icon: HardHat, title: "Cement Is Caustic Too", detail: "Cement dust is caustic as well as silica-bearing, so capture protects skin and eyes as well as lungs." },
 { icon: ShieldCheck, title: "Health-First Program", detail: "Because the hazard is chronic disease more than explosion, HEPA-retained housekeeping is the primary occupational-health control." },
 { icon: Filter, title: "Gypsum & Mineral Dust", detail: "Gypsum board and mineral products add their own fine dust, captured HEPA-retained on the housekeeping schedule." },
 ],
 materialsHeading: "What construction-materials manufacturing generates",
 materials: [
 { name: "Cement & concrete dust", combustible: "No — caustic + respirable", approach: "HEPA-retained, exposure-controlled recovery", href: "/materials/concrete-cement-dust" },
 { name: "Respirable crystalline silica", combustible: "No — severe respirable hazard", approach: "HEPA-retained, exposure-controlled recovery", href: "/materials/silica-dust" },
 { name: "Aggregate & mineral fines", combustible: "No", approach: "HEPA-retained recovery on schedule" },
 { name: "Gypsum board dust", combustible: "Generally no", approach: "HEPA-retained recovery across the board line" },
 { name: "Brick & clay dust", combustible: "No — silica-bearing", approach: "HEPA, exposure-aware recovery", href: "/materials/silica-dust" },
 { name: "General mineral dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in construction materials",
 applicationCategorySlug: "cement",
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems", "explosion-proof-vacuums"],
 studySlug: "silica-sand-foundry",
};
