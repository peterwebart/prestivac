import { CircuitBoard, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const copperDustGuide: MaterialGuideData = {
 slug: "copper-dust",
 name: "Copper Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Copper Dust?",
 description:
 "Copper is among the least ignition-prone metal dusts — many samples test non-explosible, and testing governs. The real ledgers: conductive contamination on live equipment, exposure limits, and recycling's hybrid streams where benign copper rides with combustible insulation fines.",
 },
 heroIntro:
 "Built for the conductor's dust — a metal that resists ignition better than almost any other, which is exactly why its hazards hide elsewhere: conductive fines tracking across live equipment, occupational limits on the fume side, and recycling streams where the copper tests benign while the insulation fines riding with it do not.",
 badges: [
 { icon: ShieldCheck, title: "Honest Classification", detail: "Testing governs — never assumption" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines and companions retained" },
 { icon: Zap, title: "Conductive-Aware", detail: "Tracking risk on live equipment" },
 { icon: CircuitBoard, title: "Built for the Trades", detail: "Fabrication, recycling & casings" },
 ],
 facts: [
 { label: "Combustibility", value: "Among the least ignition-prone metal dusts — many samples test non-explosible" },
 { label: "The caveat", value: "'Many' is not 'yours' — fines vary by process, and testing governs" },
 { label: "Conductive risk", value: "Copper fines on live equipment bridge, track and short" },
 { label: "Exposure note", value: "Metal fume fever is a fume-side phenomenon; dust-side limits still apply" },
 ],
 overview: [
 "Copper earns the honest-nuance treatment: it sits among the least ignition-prone metal dusts, and many copper dust samples test outright non-explosible — a real distinction from the aluminum-and-magnesium end of the metals family, and this page says so plainly. The caveat carries equal weight: 'many' is not 'yours.' Fineness and process history change behavior, granulation and polishing produce different fines than sawing, and the specification comes from testing your material rather than borrowing the family's mild reputation. Meanwhile copper's signature hazard is the one its virtue creates — it conducts. Fines that settle on busbars, contactors and boards bridge, track and short, which puts copper housekeeping in the same failures-not-fires ledger a data center runs.",
 "The exposure and companionship ledgers finish the picture. Metal fume fever belongs to the fume side — welding and thermal work — while the dust side runs milder but still carries occupational limits, so HEPA retention and hygiene stay in the program. And copper rarely travels alone: cable recycling's granulators shed copper and plastic insulation fines together — a hybrid stream where the metal may test benign while the polymer fraction is honestly combustible — and brass streams can carry lead's exposure duty. Specify for the mix on your floor: HEPA-retained recovery, conductive-dust discipline near live equipment, granulator-line rotations, and sealed disposal where the companions demand it.",
 ],
 industries: [
 { label: "Ammunition & Casings", href: "/industries/ammunition" },
 { label: "Foundries & Brass", href: "/industries/foundry" },
 { label: "Electrical Fabrication", href: "/applications#electronics" },
 { label: "Cable & Metals Recycling", href: "/applications#recycling" },
 { label: "Data Centers & Live Equipment", href: "/industries/data-centers" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Assuming the family reputation — your fines' behavior comes from a test report, not a table",
 "Conductive fines on live equipment bridge and track — the electrical-side failure mode",
 "Recycling's hybrid streams: benign copper riding with honestly combustible insulation fines",
 "Brass and bronze streams can carry lead's exposure obligations",
 "Blow-down spreads conductive fines exactly where they do electrical damage",
 ],
 solutions: [
 "Explosibility testing on your actual fines — the specification's honest foundation",
 "HEPA-retained recovery for fines, companions and any lead-bearing streams",
 "Conductive-dust discipline: scheduled recovery around live electrical equipment",
 "Granulator and reclaim lines on defined rotations, specified for the hybrid stream",
 "Sealed disposal where lead or other companions ride along",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for chips, fines and swarf" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the mix", detail: "Rated where the stream's companions demand it" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fines and companions stay captured" },
 { step: "Sealed collection & disposal", detail: "Contained — lead-bearing streams handled as such" },
 ],
 bestPractices: [
 "Test before you classify — copper's mild reputation is a family average, not your data",
 "Keep fines off live equipment on a schedule; conductive dust fails things quietly",
 "Specify recycling lines for the whole stream — the insulation fines are the combustible fraction",
 "Treat brass-stream dust as lead-bearing until analysis says otherwise",
 "Never blow down — redistribution is both the electrical and the exposure failure",
 ],
 faqs: [
 {
 question: "Is copper flammable?",
 answer:
 "Bulk copper is not flammable and is difficult to ignite. Finely divided copper powder is treated as a potentially combustible metal dust and must be assessed by testing rather than assumption — particle size drives the answer. The more common day-to-day exposure concern with copper dust and fume is respiratory irritation.",
 },
 {
 question: "Is copper dust explosive?",
 answer:
 "It's among the least ignition-prone metal dusts, and many samples test non-explosible — a genuine distinction this page states plainly. The equally plain caveat: behavior varies with fineness and process, so your classification comes from testing your material. 'Usually benign' never specified anyone's equipment.",
 },
 {
 question: "If it barely burns, why does it need a program?",
 answer:
 "Because its hazards live elsewhere. Copper conducts — fines on live equipment bridge and track, the quiet electrical failure mode. Occupational limits apply on the exposure side. And copper keeps company: insulation fines in recycling streams are honestly combustible, and brass dust can carry lead's obligations.",
 },
 {
 question: "What's the issue with cable recycling?",
 answer:
 "The hybrid stream. Granulators liberate copper and plastic insulation fines together, so the recovered dust is a mix where the metal may test benign while the polymer fraction burns readily. The line is specified for the whole stream — which usually means rated recovery even though the copper alone wouldn't demand it.",
 },
 {
 question: "Does copper dust cause metal fume fever?",
 answer:
 "Metal fume fever is a fume-side phenomenon — the ultrafine oxides of welding and thermal work, handled by extraction at the source. The settled-dust side runs milder but still carries occupational limits, which keeps HEPA retention and hygiene in the housekeeping program.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Foundry deep dive", href: "/industries/foundry" },
 { label: "Ammunition deep dive", href: "/industries/ammunition" },
 ],
};
