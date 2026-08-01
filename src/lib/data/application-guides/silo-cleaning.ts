import { Filter, Gauge, HardHat, Layers, Recycle, ShieldCheck, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const siloCleaningGuide: ApplicationGuideData = {
 slug: "silo-cleaning",
 title: "Silo & Bin Cleaning",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Silo & Bin Cleaning Vacuum Solutions",
 description:
 "Explosion-proof vacuum recovery for silo and bin interiors, decks and boot pits — reach-first cleaning from manways that turns confined-space entry into the permitted exception, with HEPA retention and sealed disposal.",
 },
 tagline: "Reach first. Enter last. Document everything.",
 heroIntro:
 "Silos and bins concentrate combustible dust three ways at once — residues clinging to interior walls and cones, layers building across decks and headspaces, and spillage collecting in the pits below. PrestiVac long-reach explosion-proof recovery cleans most of it from outside the vessel, so entry becomes the exception, not the chore.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Rated for classified headspaces" },
 { icon: Filter, title: "HEPA Filtration", detail: "Crew protected at the opening" },
 { icon: Wrench, title: "Long-Reach Tooling", detail: "Interior recovery from outside" },
 { icon: Gauge, title: "High-Volume Recovery", detail: "Bulk residues to fine layers" },
 ],
 overview:
 "Emptying a silo never empties it — residues cling to walls, cones and ledges, fines settle across bin decks and headhouse floors, and every filling cycle suspends dust inside the headspace. Cleaning that geometry with brooms means scaffolding, climbing and confined-space entry: the riskiest routine task most facilities have. The reach-first method inverts it — long-reach vacuum recovery works from manways and openings, the crew stays outside, and entry is reserved for the genuine exceptions under a full permit.",
 capabilities: [
 { icon: Layers, title: "Interior Residues", detail: "Walls, cones & ledges after empty-out" },
 { icon: Wind, title: "Deck & Headspace Layers", detail: "The secondary-explosion inventory" },
 { icon: HardHat, title: "Boot Pits & Surrounds", detail: "Spillage plus fines below grade" },
 { icon: Recycle, title: "Sealed Disposal", detail: "Contained transfer out of the vessel" },
 ],
 materialsHeading: "Common silo & bin materials",
 materials: [
 "Grain & feed dust",
 "Flour & milled products",
 "Sugar",
 "Wood pellets & biomass",
 "Plastic pellets & regrind",
 "Cement & raw meal",
 "Lime & minerals",
 ],
 materialsNote: {
 text: "Grain facilities carry their own codified housekeeping numbers —",
 link: { label: "see the agriculture deep dive", href: "/industries/agriculture" },
 },
 challengesHeading: "Challenges in silo & bin cleaning",
 challenges: [
 "Residues cling to walls and cones long after the vessel reads empty",
 "Deck and headspace layers build the classic secondary-explosion fuel inventory",
 "Confined-space entry stacks atmosphere, engulfment and dust risks on one task",
 "Headspaces can be classified — unrated gear inside the vessel is an ignition source",
 "Height and geometry defeat brooms, scaffolds and compressed air",
 "Frequencies, permits and methods are documented, inspectable obligations",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Reach-first recovery from manways turns entry into the permitted exception",
 "Explosion-proof equipment matched to the vessel's classification",
 "HEPA-retained exhaust protects the crew working at the opening",
 "Long-reach kits put decks, ledges and spouting on routine from standing positions",
 "Single-pass removal — nothing redistributed to clean twice",
 "Supports the confined-space program and the housekeeping schedule together",
 ],
 benefits: [
 { title: "Better Safety", detail: "Every avoided entry is the largest single risk reduction available in the routine." },
 { title: "Higher Productivity", detail: "Turnarounds shorten when cleaning doesn't wait on scaffolds and entry crews." },
 { title: "Cost Savings", detail: "Reach-first work cuts permit, attendant and rescue-standby overhead per cleaning." },
 { title: "Cleaner Workplace", detail: "HEPA capture at the manway keeps fines out of the crew's breathing zone." },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 setup: [
 { step: "Manway access point", detail: "Work planned around openings — geometry decides the tooling" },
 { step: "Long-reach tool set", detail: "Extension wands and angled nozzles for walls, cones and ledges" },
 { step: "Static-dissipative hose runs", detail: "Bonded, conductive path over the distance to grade" },
 { step: "Explosion-proof unit at grade", detail: "Rated or air-operated to match the classification" },
 { step: "Sealed collection & disposal", detail: "Contained transfer out; material handled per its own rules" },
 ],
 setupNote: {
 text: "Manway positions and interior geometry decide the reach plan —",
 link: { label: "get a quote", href: "/get-a-quote" },
 textAfter: "about your vessels.",
 },
 faqs: [
 {
 question: "Does reach-first cleaning eliminate confined-space permits?",
 answer:
 "No — it makes them rare. Most routine interior cleaning becomes an outside job from manways and openings; when geometry genuinely requires entry, the full permit process applies exactly as before. The win is frequency: the riskiest routine task stops being routine.",
 },
 {
 question: "The material is bridged or caked — can a vacuum clear it?",
 answer:
 "Bulk bridging and ratholes are a mechanical dislodging job for specialized silo-cleaning methods. Vacuum recovery owns what comes before and after — the residues, fines and layers — and keeps crews out of the vessel while the loosened material is removed.",
 },
 {
 question: "Is the inside of a silo a classified area?",
 answer:
 "It can be — filling suspends dust in the headspace, and many facilities classify vessel interiors accordingly. Your Dust Hazard Analysis and area classification govern the equipment; rated or air-operated units remove the ignition question from the vessel entirely.",
 },
 {
 question: "Why not wash the interior down instead?",
 answer:
 "For combustible dusts, dry vacuum removal is generally preferred — washdown creates slurry and drainage problems, doesn't suit moisture-sensitive products, and leaves the deck-and-headspace program untouched. Material-specific handling follows the product's own rules.",
 },
 ],
 relatedApplications: [
 "Hopper cleaning",
 "Mixer cleaning",
 "Dust recovery",
 "Spill cleanup",
 "Shutdown cleaning",
 "Factory housekeeping",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
 studySlug: "grain-dust-elevator-feed-mill",
};
