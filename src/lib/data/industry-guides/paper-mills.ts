import { AlertTriangle, FileText, Filter, Flame, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const paperMillsGuide: IndustryGuideData = {
 slug: "paper-mills",
 name: "Paper Mills & Converting",
 titleAccent: "paper mills & converting",
 seo: {
 title: "How to Safely Recover Dust in Paper Mills & Converting?",
 description:
 "Cellulose is combustible, and converting turns it into dust — slitting, sheeting, winding and folding shed fine paper dust continuously, with tissue converting the dustiest of all. Paper dust is a combustible particulate solid under NFPA 660, joined by mineral coating and filler dust. HEPA-retained recovery keeps accumulation in check.",
 },
 heroIntro:
 "The industry where a familiar, benign material becomes a combustible dust the moment it is converted — cellulose burns, and slitting, sheeting, winding and folding turn paper into fine airborne dust continuously. Tissue and towel converting are the dustiest of all. Paper dust is a combustible particulate solid, joined by the mineral coating and filler dust the process adds.",
 badges: [
 { icon: ShieldCheck, title: "Combustible-Cellulose Aware", detail: "Paper dust burns" },
 { icon: Flame, title: "A Combustible Dust", detail: "NFPA 660 particulate solid" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine paper & fiber retained" },
 { icon: FileText, title: "Built for Paper", detail: "Mill to converting" },
 ],
 stagesIntro:
 "Papermaking is largely wet at the machine and increasingly dusty as the product is dried, finished and converted. Walk the stages where fine combustible dust arises and accumulates.",
 stages: [
 { label: "Pulp & stock prep", detail: "Stock preparation is wet and enclosed; recovery here addresses dried residues and fiber around the equipment rather than the process stream itself." },
 { label: "Paper machine", detail: "The wet end of the paper machine generates little airborne dust, but broke handling and dried edges begin to shed fiber that later steps multiply." },
 { label: "Drying & calendering", detail: "As the sheet dries and is calendered, it begins releasing fine paper dust; housekeeping keeps accumulation off the machine and surrounding structure." },
 { label: "Coating", detail: "Mineral coatings and fillers such as clay and calcium carbonate add fine mineral dust to the paper stream, captured under HEPA-retained recovery." },
 { label: "Slitting & winding", detail: "Slitting and winding shed fine paper dust continuously along the edges and rolls — a primary dust-generation point in converting." },
 { label: "Sheeting & converting", detail: "Cutting to sheets, folding and forming products liberate the fine paper-dust fraction that combustible-dust practice targets." },
 { label: "Tissue converting", detail: "Tissue and towel converting generate the highest fine-dust load in the industry, clinging to machinery and building up across the converting hall." },
 { label: "Housekeeping", detail: "Fine paper dust settles on overhead surfaces and in ducts, so frequent HEPA-retained recovery is the core control keeping fugitive fuel below thresholds." },
 ],
 challengesHeading: "A benign material that burns as dust",
 challenges: [
 { icon: Flame, title: "Cellulose Is Combustible", detail: "Paper and cellulose dust is a combustible particulate solid under NFPA 660 — accumulated dust deflagrates like any fine organic dust." },
 { icon: Wind, title: "Converting Makes Dust", detail: "Slitting, sheeting, winding and folding shed fine paper dust continuously — the converting side is the dusty side of the industry." },
 { icon: AlertTriangle, title: "Tissue Is The Dustiest", detail: "Tissue and towel converting generate the highest fine-dust load, clinging to machinery and structures throughout the hall." },
 { icon: FileText, title: "Coating & Filler Dust", detail: "Mineral coatings and fillers such as clay and calcium carbonate add fine mineral dust to the paper stream." },
 { icon: ShieldCheck, title: "Accumulation Is The Risk", detail: "Fine paper dust settles on overhead surfaces and in ducts, building fugitive fuel between cleanings." },
 { icon: Filter, title: "Fibrous & Clinging", detail: "Paper fiber mats and accumulates, so HEPA-retained recovery with frequent, disciplined housekeeping is essential." },
 ],
 materialsHeading: "What paper mills & converting generate",
 materials: [
 { name: "Paper & cellulose dust", combustible: "Yes — combustible", approach: "Grounded, rated recovery on the deflagration logic", href: "/materials/wood-dust" },
 { name: "Tissue & fine paper dust", combustible: "Yes", approach: "HEPA-retained recovery at converting" },
 { name: "Mineral coating & filler dust", combustible: "Generally no", approach: "HEPA-retained recovery on schedule" },
 { name: "Cellulose fiber", combustible: "Yes", approach: "Rated recovery for the fine fraction" },
 { name: "Recycled-fiber dust", combustible: "Yes", approach: "Rated recovery; watch for contaminants" },
 { name: "General mill dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in paper & converting",
 applicationCategorySlug: "paper",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "paper-dust-packaging-converting",
};
