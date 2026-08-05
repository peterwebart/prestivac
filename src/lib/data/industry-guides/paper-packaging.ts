import { AlertTriangle, Filter, Flame, Package, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const paperPackagingGuide: IndustryGuideData = {
 slug: "paper-packaging",
 name: "Paper & Packaging",
 titleAccent: "paper & packaging",
 seo: {
 title: "How to Safely Recover Dust in Paper & Packaging",
 description:
 "Converting board and film into boxes, cartons and flexible packaging is a high-volume dust industry — combustible cardboard and paperboard dust from die-cutting and folding, joined by the starch adhesive corrugators use. Distinct from paper production; here the dust comes from converting at speed. HEPA-retained recovery.",
 },
 heroIntro:
 "The industry that converts board and film into boxes, cartons and flexible packaging — and its dust is combustible cardboard and paperboard, joined by the starch adhesive corrugators run. This is the converting side of paper: die-cutting, slitting and folding at speed generate the dust, while paper production itself is covered in the paper mills guide. High-volume converting means high-volume dust.",
 badges: [
 { icon: ShieldCheck, title: "Combustible-Cellulose Aware", detail: "Cardboard dust burns" },
 { icon: Flame, title: "A Combustible Dust", detail: "NFPA 660 particulate solid" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine paper & starch retained" },
 { icon: Package, title: "Built for Converting", detail: "Corrugated, cartons, die-cut" },
 ],
 stagesIntro:
 "A packaging-converting operation turns incoming board and film into finished packaging, shedding combustible dust at each mechanical step. Walk the converting stages where capture belongs.",
 stages: [
 { label: "Board & film receiving", detail: "Incoming paperboard, corrugated stock and flexible film are handled and staged; edge dust and fiber begin the converting dust stream from the first cut." },
 { label: "Corrugating", detail: "The corrugator bonds fluting to liner using starch adhesive; that starch is a fine combustible powder that, with board dust, coats the corrugating line." },
 { label: "Printing", detail: "Printing on packaging substrates sheds paper and substrate dust; the pressroom dust story is covered further in the printing guide." },
 { label: "Die-cutting", detail: "Die-cutting board into blanks is a primary, high-volume dust-generation point — combustible board dust and trim captured at the machine." },
 { label: "Folding & gluing", detail: "Folder-gluers form cartons and cases at speed, shedding paperboard dust and adhesive residue recovered on a tight schedule." },
 { label: "Flexible-packaging converting", detail: "Slitting and converting film produces plastic dust and trim — a self-charging polymer dust handled with grounded, static-dissipative recovery." },
 { label: "Waste & baler handling", detail: "Trim and scrap are conveyed to balers, a dusty concentration point where combustible fiber accumulates and is recovered before it spreads." },
 { label: "Housekeeping", detail: "High-volume converting sheds fine, clinging paper dust across the plant, so HEPA-retained recovery with frequent housekeeping keeps fugitive fuel in check." },
 ],
 challengesHeading: "Cellulose and starch, at converting speed",
 challenges: [
 { icon: Flame, title: "Cardboard Dust Is Combustible", detail: "Paperboard and corrugated dust is a combustible particulate solid under NFPA 660 — accumulated dust deflagrates like any fine organic dust." },
 { icon: AlertTriangle, title: "Starch Corrugating Adhesive", detail: "Corrugators use starch-based adhesive — a fine combustible powder that coats the corrugating line alongside the board dust." },
 { icon: Wind, title: "High-Volume Die-Cutting", detail: "Die-cutting and folding at speed generate combustible board dust and trim continuously — the dusty heart of converting." },
 { icon: Package, title: "Flexible-Film Dust", detail: "Converting flexible film sheds self-charging plastic dust and trim, handled with grounded, static-dissipative recovery." },
 { icon: ShieldCheck, title: "Accumulation Is The Risk", detail: "Fine paper dust settles on machinery and structures, building fugitive combustible fuel between cleanings across a high-throughput plant." },
 { icon: Filter, title: "Fibrous & Clinging", detail: "Paper fiber mats and accumulates, so HEPA-retained recovery with frequent, disciplined housekeeping is essential." },
 ],
 materialsHeading: "What packaging converting generates",
 materials: [
 { name: "Cardboard & paperboard dust", combustible: "Yes — combustible", approach: "Grounded, rated recovery on the deflagration logic", href: "/materials/wood-dust" },
 { name: "Starch corrugating adhesive dust", combustible: "Yes — combustible", approach: "Grounded, rated recovery around the corrugator" },
 { name: "Corrugated trim & fines", combustible: "Yes", approach: "HEPA-retained recovery at die-cutting" },
 { name: "Flexible-film & laminate dust", combustible: "Yes — self-charging", approach: "Grounded, static-dissipative recovery", href: "/materials/plastic-dust" },
 { name: "Adhesive & coating residue", combustible: "Varies", approach: "Sealed recovery per the material" },
 { name: "General converting dust", combustible: "Combustible", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in paper & packaging",
 applicationCategorySlug: "packaging",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "paper-dust-packaging-converting",
};
