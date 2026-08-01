import { Filter, Flame, ShieldCheck, Stethoscope } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const corkDustGuide: MaterialGuideData = {
 slug: "cork-dust",
 name: "Cork Dust",
 groupCrumb: { label: "Wood Dusts", anchor: "wood-dusts" },
 seo: {
 title: "How to Safely Recover Cork Dust?",
 description:
 "Cork dust surprises people twice — it is a genuinely combustible natural dust, and moldy cork dust is associated with suberosis, a hypersensitivity pneumonitis known as cork worker's lung. Cutting, grinding and sanding cork for stoppers, flooring and insulation generates it. Grounded, HEPA-retained recovery for both hazards.",
 },
 heroIntro:
 "The wine-stopper material that surprises people twice. Cork is tree bark, and its dust is a genuinely combustible natural dust — but it carries a second, less obvious hazard: moldy cork dust is associated with suberosis, a hypersensitivity pneumonitis long known as cork worker's lung. Cutting, grinding and sanding cork for stoppers, flooring and insulation generates it, and recovery addresses both the combustion and the respiratory side.",
 badges: [
 { icon: Flame, title: "Combustible Natural Dust", detail: "Tree bark, finely divided" },
 { icon: Stethoscope, title: "Suberosis Risk", detail: "Cork worker's lung from moldy dust" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine cork fraction retained" },
 { icon: ShieldCheck, title: "Built for Cork Processing", detail: "Stoppers, flooring, insulation" },
 ],
 facts: [
 { label: "Combustibility", value: "A combustible natural dust — a fine organic particulate under NFPA 660" },
 { label: "The health hazard", value: "Moldy cork dust is associated with suberosis, a hypersensitivity pneumonitis (cork worker's lung)" },
 { label: "Where it arises", value: "Cutting, grinding and sanding cork for stoppers, flooring, gaskets and insulation" },
 { label: "Handling", value: "Grounded, HEPA-retained recovery serves the combustion and the respiratory concern" },
 ],
 overview: [
 "Cork tends to be filed away as harmless — it is the stuff of wine stoppers and bulletin boards — but as a fine dust it is a genuine combustible organic dust, and it has a distinctive health hazard on top of that. Cork is the bark of the cork oak, and cutting, grinding, sanding and finishing it for stoppers, flooring, gaskets, insulation and soundproofing throws off a fine dust that will deflagrate like other fine organic dusts under the right conditions. That alone puts it in combustible-dust territory, handled with grounded, rated, HEPA-retained recovery.",
 "The health dimension is what makes cork stand out among natural dusts. Suberosis — historically called cork worker's lung or cork-handler's disease — is a hypersensitivity pneumonitis associated with inhaling moldy cork dust, driven by the mold that can grow on cork during storage rather than the cork itself. That makes dust capture and HEPA retention an exposure control as well as a housekeeping and combustion measure, keeping the fine, potentially mold-bearing dust out of the breathing zone. Cork dust arises across cork-processing operations from stopper manufacture to flooring and insulation production, and the recovery approach is consistent: capture at the source, HEPA-retained and sealed, treating cork as the combustible and potentially sensitizing dust it is.",
 ],
 industries: [
 { label: "Woodworking", href: "/industries/woodworking" },
 { label: "Construction Materials", href: "/industries/construction-materials" },
 { label: "Food & Beverage (Stoppers)", href: "/industries/food-beverage" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "General Maintenance", href: "/applications/warehouse-housekeeping" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "A combustible natural dust that deflagrates like other fine organic dusts",
 "Suberosis (cork worker's lung), a hypersensitivity pneumonitis from moldy cork dust",
 "Mold growth on stored cork driving the respiratory hazard",
 "Fine dust from cutting, grinding and sanding accumulating on surfaces",
 "Dry sweeping or blow-down resuspending combustible, potentially mold-bearing dust",
 ],
 solutions: [
 "Grounded, rated recovery treating cork as a combustible organic dust",
 "HEPA retention as an exposure control against fine, potentially mold-bearing dust",
 "Capture at cutting, grinding and sanding points of generation",
 "Sealed collection and disposal; dust kept from accumulating",
 "Never dry-sweep or blow down cork dust",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for cork cutting, grinding and sanding dust" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the dust", detail: "Rated for combustible organic dust per its behavior" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine, potentially mold-bearing fraction retained" },
 { step: "Sealed collection & disposal", detail: "Contained; dust cleared before it accumulates" },
 ],
 bestPractices: [
 "Do not dismiss cork — its dust is genuinely combustible",
 "Treat HEPA capture as a suberosis exposure control, not just housekeeping",
 "Remember the hazard tracks moldy cork dust — storage conditions matter",
 "Capture at the cutting and sanding source, not after it settles",
 "Never dry-sweep or blow down cork dust",
 ],
 faqs: [
 {
 question: "Is cork dust really combustible?",
 answer:
 "Yes — cork is tree bark, and its fine dust is a combustible organic dust that will deflagrate like other fine organic dusts under the right particle size, concentration and ignition source. The familiar, inert-seeming bulk material misleads; the dust from cutting, grinding and sanding is a genuine combustible-dust hazard handled with grounded, rated, HEPA-retained recovery.",
 },
 {
 question: "What is suberosis?",
 answer:
 "Suberosis — historically called cork worker's lung or cork-handler's disease — is a hypersensitivity pneumonitis associated with inhaling moldy cork dust. The driver is the mold that can grow on cork during storage rather than the cork itself, which is why dust capture and HEPA retention serve as an exposure control alongside their combustion and housekeeping roles.",
 },
 {
 question: "Where does cork dust come from?",
 answer:
 "Cutting, grinding, sanding and finishing cork for stoppers, flooring, gaskets, insulation and soundproofing. Each of those operations throws off a fine dust captured at the source, HEPA-retained and sealed, with the same approach whether the end product is a wine stopper or a flooring tile.",
 },
 {
 question: "Does storage condition matter?",
 answer:
 "For the respiratory hazard, yes — because suberosis tracks moldy cork dust, the mold that grows on cork under damp storage conditions is central to the exposure. Good storage reduces that risk, while HEPA-retained capture keeps the fine, potentially mold-bearing dust out of the breathing zone during processing.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Woodworking deep dive", href: "/industries/woodworking" },
 { label: "Construction Materials deep dive", href: "/industries/construction-materials" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
