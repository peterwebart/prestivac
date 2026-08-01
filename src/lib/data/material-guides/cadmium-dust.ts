import { AlertTriangle, Filter, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cadmiumDustGuide: MaterialGuideData = {
 slug: "cadmium-dust",
 name: "Cadmium Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Cadmium Dust & Fume — Toxicity, Exposure Control & Safe Recovery",
 description:
 "Cadmium is a carcinogenic heavy metal regulated under its own OSHA standard. Where cadmium dust and fume arise, why dry sweeping and compressed air are prohibited practice, and how HEPA vacuum recovery controls exposure.",
 },
 heroIntro:
 "Built for a metal whose hazard is overwhelmingly toxicological rather than explosive. Cadmium has its own OSHA substance standard, is classified as carcinogenic to humans, and damages kidneys and lungs at exposures far below what feels dusty — which makes how you clean it a regulated question, not a housekeeping preference.",
 badges: [
 { icon: AlertTriangle, title: "Regulated Carcinogen", detail: "OSHA substance standard 29 CFR 1910.1027" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: ScrollText, title: "Written Programme", detail: "Exposure assessment and medical surveillance" },
 { icon: ShieldCheck, title: "Contained Recovery", detail: "Sealed disposal, no dry sweeping" },
 ],
 facts: [
 { label: "Material type", value: "Toxic heavy metal — dust, fume and compounds" },
 { label: "Primary hazard", value: "Chronic toxicity and carcinogenicity, not deflagration" },
 { label: "Health targets", value: "Kidneys and lungs; classified as carcinogenic to humans by IARC" },
 { label: "Governing standard", value: "OSHA cadmium standard, 29 CFR 1910.1027" },
 ],
 overview: [
 "Cadmium is the case where the fire question is the wrong question. It appears in nickel-cadmium battery production, electroplating, pigments, stabilisers, and — the exposure route that catches people out most often — silver brazing alloys and older solders, where heating generates cadmium oxide fume. Fine cadmium metal powder is treated as a combustible metal dust and tested accordingly, but that is not what makes cadmium notorious. Its toxicity is.",
 "Cadmium accumulates in the body, concentrating in the kidneys over years of low-level exposure, and it is classified as carcinogenic to humans. Because of that, cadmium is one of the substances OSHA regulates under its own dedicated standard rather than as generic particulate — 29 CFR 1910.1027, which brings exposure assessment, engineering controls, regulated areas, medical surveillance and specific housekeeping obligations. That last point is the one that reaches the cleaning cupboard: where a substance standard applies, dry sweeping and compressed-air blowdown are not acceptable methods of removing accumulation, and HEPA-filtered vacuum recovery is the expected control.",
 ],
 industries: [
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Electronics", href: "/industries/electronics" },
 { label: "Recycling", href: "/industries/recycling" },
 { label: "Paints & Coatings", href: "/industries/paints-coatings" },
 ],
 riskHeading: "Why cadmium is handled differently",
 risks: [
 "Regulated carcinogen: cadmium is classified as carcinogenic to humans, and OSHA regulates it under a dedicated substance standard rather than as nuisance dust.",
 "Cumulative kidney damage: cadmium accumulates over years, so harm arises from long-run low-level exposure rather than from a single visible event.",
 "Fume from hot work: silver brazing alloys, older solders and torch work generate cadmium oxide fume, which is respirable immediately and is often not recognised as cadmium exposure at all.",
 "Invisible at hazardous concentrations: the airborne levels that matter are far below what looks or feels dusty, so operator perception is not a control.",
 "Cross-contamination routes: cadmium travels on clothing, skin and tools, which is why regulated areas, hygiene facilities and controlled laundering appear in the standard.",
 "Fine metal powder combustibility: as with other finely divided metals, cadmium powder is assessed as a combustible metal dust — a secondary consideration alongside the toxicity, not a substitute for it.",
 ],
 solutions: [
 "HEPA-filtered vacuum recovery tested to 99.99% at 0.3 µm, so captured cadmium is retained rather than discharged back into the breathing zone.",
 "Complete elimination of dry sweeping and compressed-air blowdown in cadmium areas — both re-suspend a regulated carcinogen directly into the air operators breathe.",
 "Sealed collection and disposal, with containers and liners handled as regulated waste rather than tipped into general refuse.",
 "Dedicated equipment kept within the regulated area, so cadmium is not carried into clean parts of the plant on hoses and wands.",
 "Recovery at the source for brazing and soldering stations, capturing fume and settled residue close to where it is generated.",
 "Documented cleaning intervals that form part of the written compliance programme, not an informal end-of-shift habit.",
 ],
 configuration: [
 { step: "Confirm which standard applies", detail: "Cadmium work is governed by OSHA's cadmium standard where it applies, and the exposure assessment drives the controls. Establish that footing before specifying equipment." },
 { step: "Specify HEPA retention", detail: "Filtration tested to 99.99% at 0.3 µm is the baseline for a regulated toxic metal. Ask what the filter is tested to, not what it is called." },
 { step: "Plan the disposal path first", detail: "The highest-exposure moment is often the container change, not the cleaning pass. Sealed liners and a defined route out of the building matter as much as suction." },
 { step: "Dedicate the equipment", detail: "Assign vacuums, hoses and tools to the regulated area. Shared equipment is the most common cross-contamination route in practice." },
 { step: "Record every pass", detail: "Where a substance standard applies, the cleaning record is part of the compliance file. Build the logging into the procedure." },
 ],
 bestPractices: [
 "Treat brazing and soldering stations as cadmium points of interest, since alloy composition is the exposure route people miss most often.",
 "Never dry sweep or blow down a cadmium area — both convert settled material into an inhalable cloud of a regulated carcinogen.",
 "Keep cadmium equipment inside the regulated area and label it, so it cannot migrate into general plant use.",
 "Change filters and empty containers using the documented procedure, with the protection the exposure assessment specifies.",
 "Include cadmium surfaces in the written housekeeping schedule with defined intervals rather than cleaning on appearance.",
 "Confirm alloy and material composition with suppliers, because cadmium content is not always obvious from a part description.",
 ],
 faqs: [
 {
 question: "Is cadmium dust dangerous?",
 answer:
 "Yes, and its danger is chronic rather than dramatic. Cadmium accumulates in the body — concentrating in the kidneys — and is classified as carcinogenic to humans. Harm comes from repeated low-level inhalation over time at concentrations well below what looks dusty, which is why cadmium is regulated under its own OSHA substance standard, 29 CFR 1910.1027, rather than treated as ordinary particulate.",
 },
 {
 question: "Where does cadmium exposure actually come from?",
 answer:
 "Nickel-cadmium battery manufacture, electroplating, pigments and stabilisers are the obvious sources. The one that surprises people is hot work: silver brazing alloys and some older solders contain cadmium, and heating them generates cadmium oxide fume at the operator's face. Recycling and scrap processing also concentrate cadmium from mixed feedstock.",
 },
 {
 question: "Can I sweep up cadmium dust?",
 answer:
 "No. Dry sweeping and compressed-air blowdown both put a regulated carcinogen back into the air, and where the OSHA cadmium standard applies they are not acceptable methods for removing accumulation. HEPA-filtered vacuum recovery with sealed disposal is the expected control.",
 },
 {
 question: "Is cadmium flammable or combustible?",
 answer:
 "Finely divided cadmium powder is assessed as a combustible metal dust and should be tested rather than assumed, as with other fine metals. But framing cadmium primarily as a fire hazard misses the point — the reason it is regulated, and the reason your housekeeping method matters, is its chronic toxicity and carcinogenicity.",
 },
 {
 question: "What should someone do after inhaling cadmium dust or fume?",
 answer:
 "Treat it as an occupational health matter, not something to manage informally: move away from the exposure and seek medical evaluation, and report it so the exposure is assessed and recorded. Where a substance standard applies there is usually a medical surveillance provision, and your occupational health provider is the right route. We build recovery equipment — we are not a medical authority, and cadmium exposure warrants a clinician.",
 },
 ],
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "pneumatic-vacuums", "custom-engineered-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Recovered dust: reclaim or dispose?", href: "/guides/recovered-dust-disposal-and-reclaim" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Beryllium Dust guide", href: "/materials/beryllium-dust" },
 { label: "Battery Manufacturing deep dive", href: "/industries/battery" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 ],
};
