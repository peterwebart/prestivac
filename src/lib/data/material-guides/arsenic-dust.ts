import { AlertTriangle, Filter, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const arsenicDustGuide: MaterialGuideData = {
 slug: "arsenic-dust",
 name: "Arsenic Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Arsenic Metal & Dust — Toxicity, Regulation & Safe Recovery",
 description:
 "Inorganic arsenic is a regulated human carcinogen with its own OSHA standard. Where arsenic dust arises in smelting, semiconductor and treated-wood work, and why HEPA vacuum recovery replaces dry cleaning.",
 },
 heroIntro:
 "Built for a metalloid whose hazard is chemical, not combustible. Inorganic arsenic is a regulated human carcinogen with its own OSHA substance standard, and the practical consequence for a plant is that accumulation has to be removed by contained methods rather than swept, blown or hosed around.",
 badges: [
 { icon: AlertTriangle, title: "Regulated Carcinogen", detail: "OSHA inorganic arsenic standard 29 CFR 1910.1018" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Written Programme", detail: "Exposure monitoring and regulated areas" },
 { icon: ShieldCheck, title: "Contained Recovery", detail: "Sealed disposal; no dry sweeping" },
 ],
 facts: [
 { label: "Material type", value: "Toxic metalloid - dust, fume and inorganic compounds" },
 { label: "Primary hazard", value: "Carcinogenicity and systemic toxicity, not deflagration" },
 { label: "Classification", value: "Arsenic and inorganic arsenic compounds are classified as carcinogenic to humans by IARC" },
 { label: "Governing standard", value: "OSHA inorganic arsenic standard, 29 CFR 1910.1018" },
 ],
 overview: [
 "Arsenic is a metalloid rather than a true metal, and its industrial significance is almost entirely toxicological. Inorganic arsenic and its compounds are classified as carcinogenic to humans, with lung and skin cancers among the documented outcomes alongside systemic effects from chronic exposure. OSHA regulates it under a dedicated substance standard, 29 CFR 1910.1018, which establishes exposure monitoring, regulated areas, hygiene provisions and housekeeping requirements.",
 "Where does it turn up? Non-ferrous smelting and refining is the classic setting, since arsenic occurs as an impurity in copper, lead and gold ores and concentrates in flue dusts. Semiconductor manufacturing uses gallium arsenide, where machining, lapping and cleaning of wafers can liberate arsenic-bearing particulate. Legacy chromated copper arsenate treated timber remains a source during cutting and demolition, and glass, pigment and alloy production have historical arsenic uses that persist in some sites and in the dust left behind by earlier ones. In each case the material is fine, the exposure is inhalation or ingestion, and dry cleaning methods make the problem airborne.",
 ],
 industries: [
 { label: "Mining & Minerals", href: "/industries/mining" },
 { label: "Electronics", href: "/industries/electronics" },
 { label: "Recycling", href: "/industries/recycling" },
 { label: "Glass & Ceramics", href: "/industries/glass-ceramics" },
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 ],
 riskHeading: "Why arsenic dust is a contained-recovery problem",
 risks: [
 "Regulated human carcinogen: inorganic arsenic is classified as carcinogenic to humans and regulated by OSHA under a dedicated substance standard.",
 "Chronic systemic toxicity: repeated low-level exposure produces effects well beyond the respiratory tract, so the goal is elimination of exposure rather than tolerance of a little.",
 "Concentrates in process dusts: in smelting and refining, arsenic reports to flue and baghouse dusts, so the fine fraction is the hazardous fraction.",
 "Ingestion as a real route: arsenic on hands, clothing and surfaces reaches people through eating and smoking, which is why hygiene provisions sit alongside air controls.",
 "Legacy contamination: treated timber, older glass and pigment operations leave arsenic in accumulated dust long after the process changed.",
 "Unrecognised in semiconductor work: gallium arsenide is an arsenic exposure route that a general electronics housekeeping programme may not have accounted for.",
 ],
 solutions: [
 "HEPA-filtered vacuum recovery tested to 99.99% at 0.3 um so captured arsenic-bearing dust is retained rather than returned to the room.",
 "Elimination of dry sweeping and compressed-air blowdown wherever arsenic may be present, including legacy accumulation.",
 "Sealed collection and disposal handled as regulated waste, with the container change treated as a controlled step.",
 "Dedicated equipment retained within the regulated area to prevent transfer on hoses, wands and wheels.",
 "Source capture at cutting, lapping and demolition operations that liberate arsenic-bearing particulate.",
 "Documented cleaning intervals that form part of the written programme, including areas holding historical accumulation.",
 ],
 configuration: [
 { step: "Determine whether arsenic is present", detail: "Ore assays, alloy and substrate composition, and the history of the building all matter. Legacy accumulation is a common surprise during demolition and refit." },
 { step: "Work from the exposure assessment", detail: "Where the OSHA inorganic arsenic standard applies, monitoring drives the controls. Equipment follows that determination." },
 { step: "Specify tested HEPA retention", detail: "For a regulated carcinogen, retained filtration is the function of the machine. Confirm what the filter is tested to." },
 { step: "Design disposal as a procedure", detail: "Sealed liners, defined transport route, controlled container change - the highest-exposure moment is usually not the cleaning pass." },
 { step: "Dedicate and label equipment", detail: "Keep arsenic-area equipment inside the regulated area, labelled, and out of general plant circulation." },
 ],
 bestPractices: [
 "Treat baghouse and flue dust as the concentrated fraction in smelting and refining, and handle it accordingly.",
 "Never dry sweep or blow down potential arsenic accumulation, including in legacy areas being cleared.",
 "Support the hygiene provisions - handwashing, no eating in regulated areas, controlled clothing - because ingestion is a genuine route.",
 "Check substrate composition in semiconductor work; gallium arsenide operations warrant their own assessment.",
 "Assume treated timber from earlier decades may be arsenic-bearing when cutting or demolishing it.",
 "Log cleaning of arsenic areas as part of the compliance record rather than as routine housekeeping.",
 ],
 faqs: [
 {
 question: "Is arsenic metal toxic?",
 answer:
 "Yes. Inorganic arsenic and its compounds are classified as carcinogenic to humans by IARC, with lung and skin cancers among documented outcomes, alongside systemic effects from chronic exposure. OSHA regulates inorganic arsenic under a dedicated substance standard, 29 CFR 1910.1018, which sets exposure monitoring, regulated areas and hygiene requirements.",
 },
 {
 question: "Is arsenic flammable?",
 answer:
 "Arsenic is not valued or feared as a fuel, and framing it as a fire hazard misses what matters. Finely divided arsenic, like other fine particulate, should be characterised by testing rather than assumption - but the reason arsenic is controlled is its carcinogenicity and systemic toxicity, which is what determines how accumulation must be removed.",
 },
 {
 question: "Where does arsenic dust come from in industry?",
 answer:
 "Non-ferrous smelting and refining, where arsenic occurs as an ore impurity and concentrates in flue and baghouse dusts; semiconductor work involving gallium arsenide; cutting or demolishing legacy chromated copper arsenate treated timber; and historical glass, pigment and alloy operations, which often leave arsenic in accumulated dust.",
 },
 {
 question: "How should arsenic-contaminated dust be cleaned up?",
 answer:
 "With contained methods: HEPA-filtered vacuum recovery and sealed disposal, with dedicated equipment kept inside the regulated area. Dry sweeping and compressed-air blowdown are the wrong methods because they make a regulated carcinogen airborne. Where the OSHA standard applies, the cleaning method and its records are part of compliance.",
 },
 ],
 recommended: ["hepa-vacuums", "wet-dry-systems", "custom-engineered-systems", "accessories"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Cadmium Dust guide", href: "/materials/cadmium-dust" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 ],
};
