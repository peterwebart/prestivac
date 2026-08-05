import { AlertTriangle, Filter, Flame, Leaf, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const cannabisGuide: IndustryGuideData = {
 slug: "cannabis",
 name: "Cannabis & Hemp",
 titleAccent: "cannabis & hemp",
 seo: {
 title: "How to Safely Recover Dust in Cannabis & Hemp",
 description:
 "A fast-growing industry meeting a hazard the established ones learned the hard way — cannabis and hemp dust is a combustible agricultural dust, and grinding, milling, trimming and trichome handling generate fine combustible powder. Extraction adds flammable-solvent (Class I) considerations. Grounded, rated, HEPA-retained recovery.",
 },
 heroIntro:
 "A young, fast-growing industry meeting a hazard the established ones learned the hard way — cannabis and hemp dust is a combustible agricultural dust, no different in physics from grain or flour. Grinding, milling, trimming and especially trichome and kief handling generate fine combustible powder, while extraction adds flammable-solvent considerations. The safety discipline is the mature one; the industry is simply newer to it.",
 badges: [
 { icon: ShieldCheck, title: "Combustible-Dust Aware", detail: "An agricultural dust like any other" },
 { icon: Flame, title: "Extraction-Aware", detail: "Flammable solvents, Class I areas" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine plant & trichome fines retained" },
 { icon: Leaf, title: "Built for Processing", detail: "Trim, mill, sieve & extract" },
 ],
 stagesIntro:
 "A cannabis or hemp operation moves harvested plant material through drying, size reduction, concentration and extraction, shedding progressively finer combustible dust along the way. Walk the stages where capture belongs.",
 stages: [
 { label: "Drying & curing", detail: "Drying rooms shed plant dust and fine particulate as material cures; recovery keeps fugitive combustible dust off surfaces before the dustier size-reduction steps begin." },
 { label: "Trimming & de-stemming", detail: "Trimming and de-stemming liberate fine plant dust continuously — an agricultural combustible dust captured at the workstation rather than allowed to accumulate." },
 { label: "Grinding & milling", detail: "Grinding and milling flower into fine material is a primary dust-generation point, producing the fine, readily ignitable fraction that combustible-dust practice targets." },
 { label: "Sieving & trichome / kief collection", detail: "Sieving to collect trichomes and kief concentrates the finest, most resin-rich powder in the plant — a fine combustible dust captured with grounded, dedicated recovery." },
 { label: "Extraction", detail: "Ethanol, hydrocarbon and CO2 extraction introduce flammable solvents and Class I atmospheres; recovery in these areas uses equipment rated for the atmosphere, not just the dust." },
 { label: "Post-processing & decarboxylation", detail: "Winterization, distillation and decarboxylation generate residues and fine powders handled under sealed, rated recovery appropriate to the solvents in use." },
 { label: "Formulation & packaging", detail: "Producing and packaging isolate, powder and infused products sheds fine combustible organic dust captured at the filling and blending points." },
 { label: "Housekeeping", detail: "Recovery supports the facility's dust and flammable-liquid controls, keeping combustible plant dust below the accumulation thresholds that deflagration practice targets." },
 ],
 challengesHeading: "A mature hazard in a young industry",
 challenges: [
 { icon: AlertTriangle, title: "Combustible Plant Dust", detail: "Cannabis and hemp dust is a combustible agricultural dust — its physics match grain and flour, so grinding and milling fines are handled with grounded, rated recovery." },
 { icon: Wind, title: "Trichome & Kief Concentration", detail: "Sieving concentrates the finest, most resin-rich powder in the plant — a fine combustible dust that warrants dedicated, HEPA-retained capture." },
 { icon: Flame, title: "Extraction Solvent Flammability", detail: "Ethanol and hydrocarbon extraction create Class I flammable atmospheres — recovery equipment must be rated for the atmosphere in those areas." },
 { icon: Leaf, title: "A Young Industry", detail: "Cannabis and hemp processing grew fast, and its dust-safety maturity is still catching up to the hazard — the discipline exists; the sector is newer to applying it." },
 { icon: ShieldCheck, title: "Borrow The Grain-Dust Playbook", detail: "The safest starting point is the established agricultural combustible-dust practice — grounded, rated, HEPA-retained recovery, adapted to a resinous, fine plant powder." },
 { icon: Filter, title: "Fine, Resinous Dust", detail: "The dust is not only fine but resinous, so it clings and builds up — HEPA-retained recovery with disciplined housekeeping keeps accumulation in check." },
 ],
 materialsHeading: "What cannabis & hemp processing generates",
 materials: [
 { name: "Dried plant & trim dust", combustible: "Yes — combustible biomass", approach: "Grounded, rated recovery, the agricultural-dust way", href: "/materials/grain-dust" },
 { name: "Trichome & kief powder", combustible: "Yes — fine and resinous", approach: "HEPA-retained, grounded, dedicated recovery" },
 { name: "Milled flower & fine powder", combustible: "Yes", approach: "Rated recovery at the milling source" },
 { name: "Extraction residues & spent biomass", combustible: "Combustible", approach: "Rated, solvent-aware recovery" },
 { name: "Flammable extraction solvents", combustible: "Flammable (Class I)", approach: "Rated, wet-capable configuration in classified areas" },
 { name: "Isolate & CBD powder", combustible: "Combustible organic", approach: "HEPA-retained, sealed recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in cannabis & hemp",
 applicationCategorySlug: "agriculture",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "grain-dust-elevator-feed-mill",
};
