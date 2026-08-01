import { Filter, Home, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const leadDustGuide: MaterialGuideData = {
 slug: "lead-dust",
 name: "Lead Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Lead Dust?",
 description:
 "Lead-bearing dusts aren't a combustion story — the ledger is toxicological, with OSHA's own lead standards, a 50 µg/m³ exposure limit, and the RRP rule that names HEPA vacuums by requirement. Renovation, battery recycling, foundry alloys and firing ranges.",
 },
 heroIntro:
 "Built for the metal whose dust follows workers home — a toxicological ledger with its own federal standards, an exposure limit with a number attached, a renovation rule that requires HEPA vacuums by name, and a documented pathway that puts families in the exposure plan whether it's written down or not.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Named in the RRP rule itself" },
 { icon: ScrollText, title: "Its Own Federal Rules", detail: "OSHA 1910.1025 / 1926.62; EPA RRP" },
 { icon: Home, title: "Take-Home Aware", detail: "The pathway the standards address" },
 { icon: ShieldCheck, title: "Sealed Handling", detail: "Capture without re-suspension" },
 ],
 facts: [
 { label: "Combustibility", value: "Typical lead-bearing dusts are not combustible — the ledger is toxicological" },
 { label: "The number", value: "OSHA's lead standards set a 50 µg/m³ permissible exposure limit" },
 { label: "Named equipment", value: "The EPA's RRP rule explicitly requires HEPA vacuums for lead-paint work" },
 { label: "The pathway", value: "Take-home exposure on clothing and skin is documented — hygiene is in the standards" },
 ],
 overview: [
 "Lead dust runs on a toxicological ledger, and it runs deep: OSHA's general-industry and construction lead standards set a permissible exposure limit of 50 micrograms per cubic meter with medical surveillance behind it, public-health agencies hold that no safe blood lead level has been identified in children, and the EPA's Renovation, Repair and Painting rule governs work in pre-1978 housing — naming HEPA vacuums as required equipment in so many words. The reason the rules reach past the fence line is the pathway the record documents: lead dust travels home on clothing, skin and vehicles, which is why hygiene facilities, protective clothing and clean-change requirements are written into the standards. A lead program that ends at the gate isn't finished.",
 "The exposure map is wider than old paint. Renovation and abatement generate chips and dust wherever pre-1978 coatings are disturbed. Battery recycling handles lead oxides and pastes at industrial volume. Foundries pouring leaded brass and bronze shed lead-bearing grinding dust in the fettling room. And indoor firing ranges are lead-dust environments by mechanism — priming compounds and bullet fragmentation dose every surface downrange. Across all of it the recovery logic is the same: HEPA-retained capture so cleaning never re-suspends what the limit counts, sealed disposal, restricted dry sweeping and compressed air, and surfaces verified rather than assumed.",
 ],
 industries: [
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Battery Recycling", href: "/industries/battery" },
 { label: "Foundries & Leaded Alloys", href: "/industries/foundry" },
 { label: "Firing Ranges", href: "/applications#general-maintenance" },
 { label: "Renovation & Facility Work", href: "/applications#general-maintenance" },
 ],
 riskHeading: "Exposure risks",
 risks: [
 "The respirable and ingestible fractions do the damage — the dust you track matters as much as the dust you breathe",
 "Take-home exposure is the documented pathway — clothing, skin and vehicles carry the workplace home",
 "Pre-1978 coatings turn routine renovation into regulated lead work",
 "Ranges dose surfaces continuously — priming compounds and fragmentation are the mechanism",
 "Dry sweeping and blow-down re-suspend exactly what the 50 µg/m³ limit counts",
 ],
 solutions: [
 "HEPA-retained recovery — the equipment class the RRP rule names outright",
 "Sealed collection and disposal — captured lead never gets a second flight",
 "Surface-by-surface work patterns that match how the rules verify cleanliness",
 "Range and fettling-room rotations scheduled like the exposure sources they are",
 "Hygiene-first integration — recovery supports the clean-change discipline the standards require",
 ],
 configuration: [
 { step: "Surface & crevice tools", detail: "Sills, floors, fixtures and range surfaces" },
 { step: "Sealed hose runs", detail: "Integrity from nozzle to drum" },
 { step: "HEPA recovery unit", detail: "Specified for lead work and the governing rule" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the counted fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained, documented, dispositioned as lead waste" },
 ],
 bestPractices: [
 "Never dry-sweep or blow down — re-suspension is the exposure event",
 "Assume pre-1978 coatings are lead until testing says otherwise",
 "Treat take-home as part of the program — hygiene and clean-change are in the standards for a reason",
 "Ranges get scheduled recovery, not occasional cleanup — the dosing is continuous",
 "Spent filters and collected dust leave as lead waste, sealed and labeled",
 ],
 faqs: [
 {
 question: "Is lead dust dangerous?",
 answer:
 "Yes, and cumulatively so. Lead is a systemic toxin affecting the nervous system, kidneys and blood, with children especially vulnerable to material carried home on clothing. OSHA regulates it under 29 CFR 1910.1025 with a permissible exposure limit of 50 µg/m³. Lead dust is not a fire hazard — the reason your cleaning method is regulated is exposure, and dry sweeping is not an acceptable method where the standard applies.",
 },
 {
 question: "Is lead dust combustible?",
 answer:
 "Typical lead-bearing dusts — paint chips and dust, range residues, oxide dusts — are not a combustion story. The ledger here is toxicological, governed by OSHA's lead standards and the EPA's renovation rules, and this guide keeps the hazard where the record puts it.",
 },
 {
 question: "Why do the rules name HEPA vacuums specifically?",
 answer:
 "Because capture without re-suspension is the whole game at a 50 µg/m³ limit. The RRP rule requires HEPA vacuums for lead-paint work in so many words, and the OSHA standards restrict the methods — dry sweeping, compressed air — that put settled lead back into the air being measured.",
 },
 {
 question: "What is take-home exposure?",
 answer:
 "The documented pathway where workplace lead travels home on clothing, skin, boots and vehicles — it's why the standards require hygiene facilities, protective clothing and clean changes. A recovery program supports that discipline by keeping surfaces and gear clean enough that there's less to carry; families are in the exposure plan whether or not anyone wrote them in.",
 },
 {
 question: "Why are firing ranges a lead issue?",
 answer:
 "Mechanism: priming compounds discharge lead with every shot and bullets fragment on impact, so ranges dose their surfaces continuously downrange. HEPA-retained recovery on a defined schedule, sealed disposal, and no dry methods — the management core of every well-run range program.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Recovered dust: reclaim or dispose?", href: "/guides/recovered-dust-disposal-and-reclaim" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Abatement deep dive", href: "/industries/abatement" },
 { label: "Asbestos guide", href: "/materials/asbestos" },
 { label: "Silica Dust guide", href: "/materials/silica-dust" },
 { label: "Battery deep dive", href: "/industries/battery" },
 ],
};
