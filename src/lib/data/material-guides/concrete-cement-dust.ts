import { Filter, Gauge, HardHat, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const concreteCementDustGuide: MaterialGuideData = {
 slug: "concrete-cement-dust",
 name: "Concrete & Cement Dust",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
 title: "How to Safely Recover Concrete & Cement Dust?",
 description:
 "Concrete and cement dust don't explode — the hazards are caustic chemistry, respirable crystalline silica where concrete meets abrasive tools, and sheer volume. HEPA-retained recovery aligned with OSHA's silica standards, from kiln floor to slab grinding.",
 },
 heroIntro:
 "Built for the honest inert page — there is no explosion story to sell here. The hazards are caustic wet cement, the respirable crystalline silica that concrete cutting and grinding release, and volumes that bury any broom-based program.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Silica-capable retention — 99.99% at 0.3 µm" },
 { icon: ShieldCheck, title: "Silica-Standard Aligned", detail: "Supports 1910.1053 / 1926.1153 controls" },
 { icon: HardHat, title: "Built for Heavy Loads", detail: "Kiln dust to slab grinding" },
 { icon: Gauge, title: "High-Volume Recovery", detail: "Continuous heavy loading" },
 ],
 facts: [
 { label: "Combustibility", value: "Non-combustible — an inert mineral dust, and this page says so honestly" },
 { label: "Caustic hazard", value: "Wet portland cement is caustic — skin and eye burns are the classic injury" },
 { label: "Silica note", value: "Concrete cutting and grinding release respirable crystalline silica" },
 { label: "Governing standards", value: "OSHA silica rules (1910.1053 / 1926.1153) govern the crystalline fraction" },
 ],
 overview: [
 "Concrete and cement dust don't explode, and an honest guide leads with that: this is an inert mineral family, and no explosion-proof story applies. The real hazards sit elsewhere. Wet portland cement is caustic — the burns it causes skin and eyes are the industry's classic injury. And when concrete meets abrasive tools, the quartz in its sand and aggregate becomes respirable crystalline silica, a regulated exposure with its own OSHA standards for general industry and construction. The nuance matters in both directions: finished portland cement itself is typically low in crystalline silica, so the silica story concentrates where cutting, grinding, drilling and demolition happen — not in every bag of cement.",
 "The program is exposure-first and volume-ready. HEPA-retained vacuum capture is one of the silica rules' own named control families — shrouded tools with vacuum dust collection are how the construction standard expects grinding and drilling to run — so the recovery equipment isn't an accessory to compliance posture, it's inside it. Plant-side, kiln dust and transfer spillage arrive in volumes that demand continuous-duty recovery on defined rotations. And wet methods deserve their honest footnote: water controls airborne dust at the blade but creates caustic slurry that still has to be contained and dispositioned — both paths end in recovery, they just route through different states of the same material.",
 ],
 industries: [
 { label: "Cement & Lime Plants", href: "/applications#cement" },
 { label: "Concrete Products & Precast", href: "/applications#cement" },
 { label: "Silo & Bin Cleaning", href: "/applications/silo-cleaning" },
 { label: "Facility Renovation", href: "/applications#general-maintenance" },
 { label: "Data Centers & Sensitive Facilities", href: "/industries/data-centers" },
 ],
 riskHeading: "Health & safety risks",
 risks: [
 "Wet cement is caustic — contact burns to skin and eyes are the material's signature injury",
 "Cutting, grinding and drilling concrete release respirable crystalline silica from its quartz content",
 "Kiln dust is fine, alkaline and produced in volume — exposure control at industrial scale",
 "Sweeping makes the cloud the silica rules exist to prevent",
 "Wet suppression creates caustic slurry that hardens where it isn't managed",
 ],
 solutions: [
 "HEPA-retained recovery — the capture method the silica standards themselves point to",
 "Shroud-and-vacuum support for grinding, cutting and drilling operations",
 "Kiln-floor and transfer-point rotations sized for continuous heavy loading",
 "Sealed collection and disposal — the respirable fraction never re-enters the air",
 "Slurry management for wet-method operations before it cures in place",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools, shroud connections and crevice nozzles at the source" },
 { step: "Heavy-duty hose", detail: "Abrasion-resistant runs sized for mineral loading" },
 { step: "Continuous-duty HEPA unit", detail: "Industrial recovery specified for volume and fines together" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the crystalline fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained, documented, dispositioned — dust or slurry" },
 ],
 bestPractices: [
 "Never dry-sweep — the broom makes exactly the cloud the silica rules regulate",
 "Pair abrasive tools with shrouded vacuum capture as the standards expect",
 "Handle wet cement with the caustic respect its injury record has earned",
 "Kiln and transfer areas run defined rotations — volume never waits",
 "Document the exposure program; the silica rules are audit-shaped",
 ],
 faqs: [
 {
 question: "Is cement flammable?",
 answer:
 "No. Portland cement, concrete and their dusts are mineral and non-combustible — they will not burn and they do not produce a dust deflagration. This is a genuine and important exception among industrial dusts, and it is worth stating plainly because the real hazard is being missed when people ask about fire.",
 },
 {
 question: "Is cement dust explosive, or can cement dust explode?",
 answer:
 "No. There is no deflagration hazard from cement or concrete dust. The hazard is a health hazard: concrete cutting, grinding and demolition release respirable crystalline silica, which causes irreversible lung disease. OSHA's respirable crystalline silica standard sets a permissible exposure limit of 50 µg/m³ as an 8-hour time-weighted average, and that number — not fire risk — is what drives HEPA-filtered dust control on concrete work.",
 },
 {
 question: "Is cement dust combustible?",
 answer:
 "It is not. If your dust hazard analysis covers a mixed facility, cement and concrete dust are correctly classified as non-combustible nuisance and health dusts, while any organic or metal dusts in the same building are assessed separately for deflagration risk.",
 },
 {
 question: "Is cement dust explosive?",
 answer:
 "No — concrete and cement dusts are inert mineral materials, and this guide says so plainly rather than borrowing urgency from other dusts. The hazards that matter here are caustic chemistry, respirable crystalline silica from concrete work, and volume.",
 },
 {
 question: "Where does the silica hazard actually come from?",
 answer:
 "From concrete's quartz-bearing sand and aggregate when abrasive tools touch it — cutting, grinding, drilling and demolition. Finished portland cement itself is typically low in crystalline silica. That's why the OSHA silica standards focus on the operations, and why shrouded tools with HEPA vacuum capture are among their named controls.",
 },
 {
 question: "Should we just cut wet instead?",
 answer:
 "Wet methods control airborne dust at the blade and are often the right call — but they convert the problem into caustic slurry that must be contained and dispositioned before it cures where it lands. Both paths end in recovery; wet cutting changes the material's state, not the obligation.",
 },
 {
 question: "Is cement kiln dust something special?",
 answer:
 "It's the plant-scale version of the problem: fine, alkaline and continuous. The program answer is continuous-duty HEPA recovery on defined rotations with sealed disposal — exposure control at industrial volume rather than explosion control.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Silo & Bin Cleaning guide", href: "/applications/silo-cleaning" },
 { label: "Coal Dust guide", href: "/materials/coal-dust" },
 { label: "All mining & mineral dusts", href: "/materials#mining-dusts" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
