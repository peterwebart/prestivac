import { AlertTriangle, Filter, Layers, ShieldCheck, Ship, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const marineGuide: IndustryGuideData = {
 slug: "marine",
 name: "Marine & Shipbuilding",
 titleAccent: "marine & shipbuilding",
 seo: {
 title: "How to Safely Recover Dust in Marine & Shipbuilding?",
 description:
 "Shipyard dust is dominated by two things — abrasive blasting, which produces huge volumes of spent media mixed with coating debris, and legacy coatings on older vessels that carry lead and heavy metals. Add welding fume, fiberglass composite dust and confined-space work. HEPA-retained, sealed recovery for a toxic-and-respirable mix.",
 },
 heroIntro:
 "Heavy industry at outdoor scale, where the signature dust hazards are abrasive blasting and legacy coatings — surface preparation produces enormous volumes of spent media mixed with paint debris, and older vessels carry lead-based and heavy-metal coatings that blasting and grinding liberate as toxic dust. Welding fume, fiberglass composite dust and confined-space work round out a demanding recovery picture.",
 badges: [
 { icon: ShieldCheck, title: "Legacy-Coating Aware", detail: "Lead & heavy metals" },
 { icon: Wind, title: "Abrasive-Blast Dust", detail: "Spent media + coating debris" },
 { icon: Filter, title: "HEPA Filtration", detail: "Toxic & fine fractions retained" },
 { icon: Ship, title: "Built for Shipyards", detail: "Blast, weld, grind & fair" },
 ],
 stagesIntro:
 "Shipbuilding and repair move from surface preparation through fabrication to outfitting, much of it in semi-open or confined spaces. Walk the stages where dust and its recovery matter most.",
 stages: [
 { label: "Surface prep & abrasive blasting", detail: "Blasting generates the shipyard's largest dust volume — spent media mixed with coating debris — where some legacy media is silica-bearing and adds a respirable hazard." },
 { label: "Coating removal", detail: "Removing paint from older vessels liberates lead-based and heavy-metal coating dust, captured under HEPA-retained, sealed handling as a toxic-exposure control." },
 { label: "Welding & cutting", detail: "Welding, thermal cutting and gouging generate metal fume and fines throughout fabrication; recovery keeps the work zones and adjacent surfaces clear." },
 { label: "Grinding & fairing", detail: "Grinding welds and fairing hull surfaces produce metal grinding dust — combustible as a fine fraction and captured at the point of work." },
 { label: "Composite fabrication", detail: "Fiberglass and carbon-composite fabrication for hulls and components sheds fine, irritating dust handled with HEPA capture." },
 { label: "Outfitting & assembly", detail: "Fit-out generates mixed construction dust from many trades working in parallel — recovered on a schedule that keeps the vessel's interior clean." },
 { label: "Confined-space work", detail: "Tanks, holds and double-bottoms concentrate dust and fume in confined spaces under strict entry discipline, where portable recovery supports the entry plan." },
 { label: "Housekeeping", detail: "At outdoor and interior scale alike, recovery is targeted at work zones and confined spaces, keeping toxic and respirable fractions from accumulating." },
 ],
 challengesHeading: "Blasting, legacy coatings, and confined spaces",
 challenges: [
 { icon: AlertTriangle, title: "Legacy Lead Coatings", detail: "Older vessels carry lead-based and heavy-metal coatings — blasting and grinding them liberates toxic dust demanding HEPA-retained, sealed handling." },
 { icon: Wind, title: "Abrasive-Blast Dust", detail: "Blasting produces huge volumes of spent media mixed with coating debris, and some legacy media is silica-bearing, adding a respirable-silica hazard." },
 { icon: Layers, title: "Composite Dust", detail: "Fiberglass and carbon-composite fabrication sheds fine, irritating dust that is captured with HEPA-retained recovery." },
 { icon: Ship, title: "Confined Spaces", detail: "Tanks, holds and double-bottoms concentrate dust and fume in confined spaces under strict entry discipline — recovery supports the entry plan." },
 { icon: ShieldCheck, title: "Toxic + Respirable Mix", detail: "The blast-and-coating stream mixes toxic (lead) and respirable (silica) fractions, so recovery is HEPA-retained and sealed for both at once." },
 { icon: Filter, title: "Outdoor Scale", detail: "Shipyard work happens at massive scale in semi-open conditions, so capture is targeted at the work zone and confined spaces rather than the whole yard." },
 ],
 materialsHeading: "What shipyards recover",
 materials: [
 { name: "Legacy coating dust (lead)", combustible: "Toxic", approach: "HEPA-retained, sealed handling", href: "/materials/lead-dust" },
 { name: "Spent abrasive media", combustible: "Varies; some silica-bearing", approach: "HEPA capture; respirable-silica aware", href: "/materials/silica-dust" },
 { name: "Welding fume & metal fines", combustible: "Varies", approach: "HEPA-retained recovery", href: "/applications/welding-cleanup" },
 { name: "Composite (fiberglass) dust", combustible: "Irritant", approach: "HEPA capture at the fabrication source" },
 { name: "Steel grinding dust", combustible: "Combustible as fine dust", approach: "Rated recovery where the fraction is fine" },
 { name: "General shipyard dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in marine & shipbuilding",
 applicationCategorySlug: "marine",
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 studySlug: "coating-powder-automotive-finishing",
};
