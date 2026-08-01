import { AlertTriangle, Filter, Layers, Printer, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const printingGuide: IndustryGuideData = {
 slug: "printing",
 name: "Commercial Printing",
 titleAccent: "commercial printing",
 seo: {
 title: "How to Safely Recover Dust in Commercial Printing?",
 description:
 "The pressroom generates three combustible fine powders — paper dust from cutting, trimming and folding; starch-based anti-set-off spray powder in offset printing; and fine toner in digital printing. Each is a combustible dust that accumulates on presses and structures. HEPA-retained recovery keeps them in check.",
 },
 heroIntro:
 "The industry where combustible dust hides behind an ordinary pressroom — paper dust from cutting, trimming and folding is one source, but offset printing adds a starch-based anti-set-off spray powder that coats the shop, and digital printing adds fine toner. All three are combustible fine powders, and all three accumulate on presses and structures unless captured.",
 badges: [
 { icon: ShieldCheck, title: "Combustible-Powder Aware", detail: "Paper, toner & spray powder" },
 { icon: Wind, title: "Paper & Trim Dust", detail: "Cutting and folding" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine toner & powder retained" },
 { icon: Printer, title: "Built for the Pressroom", detail: "Offset to digital" },
 ],
 stagesIntro:
 "A printing operation moves paper through cutting, printing, finishing and binding, shedding combustible dust that differs by press technology. Walk the stages and their powders.",
 stages: [
 { label: "Paper receiving & cutting", detail: "Guillotine cutting and trimming shed combustible paper dust at the front of the shop — the first and most consistent dust source in printing." },
 { label: "Offset printing", detail: "Offset presses spray a starch-based anti-set-off powder to keep freshly printed sheets from transferring ink; that fine combustible powder settles across the press and pressroom." },
 { label: "Digital printing", detail: "Digital and toner-based presses handle fine toner — a combustible polymer and carbon powder captured under HEPA-retained, sealed recovery." },
 { label: "Folding & finishing", detail: "Folding, scoring and finishing generate additional paper dust and fiber, recovered at the machines to keep the fine fraction out of the air." },
 { label: "Binding", detail: "Trimming, drilling and binding shed paper dust and adhesive residues, captured on a schedule that keeps bindery equipment clean." },
 { label: "Coating & laminating", detail: "Coating and laminating add film and coating dust; recovery keeps these fine fractions off the substrate and out of the breathing zone." },
 { label: "Packaging printing", detail: "Printing on packaging substrates combines paper dust with film and substrate fines, handled per the material with HEPA-retained recovery." },
 { label: "Housekeeping", detail: "Paper dust and spray powder settle on presses and structures, so HEPA-retained recovery with frequent housekeeping keeps fugitive combustible dust in check." },
 ],
 challengesHeading: "Three combustible powders in one pressroom",
 challenges: [
 { icon: Wind, title: "Paper & Trim Dust", detail: "Cutting, trimming, folding and finishing shed combustible paper dust throughout the pressroom — the constant background dust of printing." },
 { icon: AlertTriangle, title: "Anti-Set-Off Spray Powder", detail: "Offset printing uses starch-based spray powder to prevent ink transfer — a fine combustible powder that coats presses and the surrounding pressroom." },
 { icon: Layers, title: "Toner Is A Fine Powder", detail: "Digital printing handles fine toner, a combustible polymer and carbon powder captured HEPA-retained and sealed." },
 { icon: Printer, title: "Two Print Worlds", detail: "Offset (spray powder) and digital (toner) each shed their own combustible fine powder alongside the shared paper dust." },
 { icon: ShieldCheck, title: "It All Accumulates", detail: "Paper dust and spray powder settle on presses and structures, building fugitive combustible dust between cleanings." },
 { icon: Filter, title: "Fine & Clinging", detail: "Toner and spray powder are fine and cling to equipment, so HEPA-retained recovery is essential to keep them contained." },
 ],
 materialsHeading: "What the pressroom generates",
 materials: [
 { name: "Paper & trim dust", combustible: "Yes — combustible", approach: "HEPA-retained recovery at cutting and finishing" },
 { name: "Anti-set-off spray powder (starch)", combustible: "Yes — combustible", approach: "Grounded, rated recovery around offset presses" },
 { name: "Toner (digital)", combustible: "Yes — fine polymer/carbon", approach: "HEPA-retained, sealed recovery", href: "/materials/plastic-dust" },
 { name: "Ink & coating residues", combustible: "Varies", approach: "Sealed recovery per the material" },
 { name: "Laminate & film dust", combustible: "Varies", approach: "HEPA-retained recovery", href: "/materials/plastic-dust" },
 { name: "General pressroom dust", combustible: "Combustible", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in printing",
 applicationCategorySlug: "packaging",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "paper-dust-packaging-converting",
};
