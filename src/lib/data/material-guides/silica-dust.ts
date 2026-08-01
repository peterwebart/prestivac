import { Filter, HardHat, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const silicaDustGuide: MaterialGuideData = {
 slug: "silica-dust",
 name: "Silica Dust",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
 title: "How to Safely Recover Silica Dust?",
 description:
 "Respirable crystalline silica causes the oldest documented occupational lung disease and carries its own OSHA standards with a 50 µg/m³ exposure limit. HEPA-retained recovery — the standards' own control family — for foundries, concrete work and stone fabrication.",
 },
 heroIntro:
 "Built for the dust behind the oldest occupational disease on record — an inert mineral with no explosion story at all, and a respirable fraction serious enough to carry its own federal standards, a numeric exposure limit, and the current century's most urgent fabrication-shop crisis.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Silica-capable retention — 99.99% at 0.3 µm" },
 { icon: ShieldCheck, title: "Silica-Standard Aligned", detail: "Supports 1910.1053 / 1926.1153 controls" },
 { icon: ScrollText, title: "Its Own Federal Rules", detail: "A numeric PEL, written down" },
 { icon: HardHat, title: "Built for the Work", detail: "Shakeout floor to saw shroud" },
 ],
 facts: [
 { label: "Combustibility", value: "Non-combustible — inert mineral; the entire hazard is respirable exposure" },
 { label: "Disease record", value: "Silicosis is the oldest documented occupational lung disease" },
 { label: "The number", value: "OSHA's silica standards set a 50 µg/m³ permissible exposure limit" },
 { label: "Classification", value: "Respirable crystalline silica is an IARC Group 1 carcinogen" },
 ],
 overview: [
 "Silica's danger has been documented longer than any other dust — silicosis is the oldest occupational lung disease on record, and America's worst single industrial-disease disaster, the Hawks Nest Tunnel drilling of the 1930s, was an acute-silicosis catastrophe that helped put dust exposure into national law. The modern standards carry that history with numbers attached: OSHA's respirable crystalline silica rules for general industry and construction set a permissible exposure limit of 50 micrograms per cubic meter, require exposure assessment and controls, and — in the construction rule's control tables — name vacuum dust collection among the specified methods. The particles that matter are respirable: far too small to see, which is why a visibly 'clean' operation can still be over the limit.",
 "The modern exposure map runs from the oldest industry to the newest. Foundries remain the historic territory — molding, shakeout and sand reclamation concentrate quartz fines by design. Concrete and masonry work release silica wherever abrasive tools meet quartz aggregate. Silica sand as a blasting medium is heavily restricted and widely replaced. And engineered-stone fabrication became this century's crisis: the material carries far higher quartz content than natural stone, fabrication-shop silicosis clusters followed, and Australia answered with the world's first outright ban on engineered stone in 2024. The program across all of it is the same: HEPA-retained capture at the source, shroud-and-vacuum on the tools, restricted dry sweeping and compressed air — the standards themselves push both aside — sealed disposal, and the honest wet-method footnote that slurry dries back into dust wherever it isn't recovered.",
 ],
 industries: [
 { label: "Foundries & Casting", href: "/industries/foundry" },
 { label: "Concrete & Masonry Work", href: "/materials/concrete-cement-dust" },
 { label: "Cement & Lime Plants", href: "/applications#cement" },
 { label: "Stone & Countertop Fabrication", href: "/applications#general-maintenance" },
 { label: "Mining & Minerals", href: "/materials#mining-dusts" },
 ],
 riskHeading: "Exposure risks",
 risks: [
 "The respirable fraction is invisible — the particles that reach the deep lung can't be seen settling",
 "Foundry shakeout and sand reclamation concentrate quartz fines as the sand is reused",
 "Engineered stone carries far higher quartz content than natural stone — the fabrication-shop crisis",
 "Slurry from wet methods dries back into respirable dust wherever it isn't recovered",
 "Dry sweeping and compressed air are restricted by the standards themselves — they make the exposure",
 ],
 solutions: [
 "HEPA-retained vacuum capture — the control family the silica standards name",
 "Shroud-and-vacuum integration on saws, grinders and drills",
 "Shakeout, reclaim and fabrication floors on defined recovery rotations",
 "Slurry recovery before it cures — wet methods end in collection too",
 "Sealed disposal and exposure documentation built into the routine",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools, shroud connections and crevice nozzles at the source" },
 { step: "Abrasion-resistant hose", detail: "Runs sized for continuous mineral loading" },
 { step: "Continuous-duty HEPA unit", detail: "Specified for fines volume and exposure duty" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the respirable fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained, documented, dispositioned — dust or slurry" },
 ],
 bestPractices: [
 "Never dry-sweep or blow down — the standards restrict both because they create the exposure",
 "Capture at the tool: the shroud-and-vacuum pairing is where the limit is won",
 "Treat visibly clean as unproven — the respirable fraction doesn't show itself",
 "Recover slurry before it dries; cured slurry is tomorrow's airborne dust",
 "Document the program — a numeric PEL makes silica compliance measurable",
 ],
 faqs: [
 {
 question: "Is silica dust dangerous?",
 answer:
 "Yes — respirable crystalline silica causes silicosis, an irreversible lung disease, and is associated with lung cancer. OSHA's respirable crystalline silica standard sets a permissible exposure limit of 50 µg/m³ as an 8-hour time-weighted average, which is low enough that visible dust is well past it. Silica is not combustible; the hazard is entirely a health hazard, which is why dry sweeping and compressed-air blowdown are the wrong methods.",
 },
 {
 question: "Is silica dust combustible?",
 answer:
 "No — crystalline silica is an inert mineral with no explosion or fire story at all, and this guide says so plainly. The entire hazard is respirable exposure: particles small enough to reach the deep lung, cause silicosis, and carry an IARC Group 1 carcinogen classification.",
 },
 {
 question: "What do the OSHA silica standards actually require?",
 answer:
 "A permissible exposure limit of 50 micrograms per cubic meter as an eight-hour average, exposure assessment, engineering controls — with the construction rule's tables naming specific methods including vacuum dust collection — plus housekeeping restrictions on dry sweeping and compressed air, and medical surveillance above trigger levels. A HEPA-retained recovery program supports those controls directly.",
 },
 {
 question: "Why is engineered stone such a problem?",
 answer:
 "Quartz content. Engineered stone runs far higher in crystalline silica than natural stone, so cutting and polishing it produces exceptionally silica-rich dust — fabrication-shop silicosis clusters followed its market growth, and Australia responded with the world's first outright ban on the material in 2024. Shops still working it anywhere run the tightest capture-at-the-tool programs in the trade.",
 },
 {
 question: "We cut wet — doesn't that solve it?",
 answer:
 "It controls the dust at the blade, which is exactly what it's for — and then the slurry dries wherever it lands and returns as respirable dust. Wet methods and vacuum recovery are partners: suppression manages the moment of cutting, recovery removes the material before the water leaves it behind.",
 },
 ],
 studySlug: "silica-sand-foundry",
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Concrete & Cement guide", href: "/materials/concrete-cement-dust" },
 { label: "Foundry deep dive", href: "/industries/foundry" },
 { label: "Dust Collector Cleaning guide", href: "/applications/dust-collector-cleaning" },
 { label: "All mining & mineral dusts", href: "/materials#mining-dusts" },
 ],
};
