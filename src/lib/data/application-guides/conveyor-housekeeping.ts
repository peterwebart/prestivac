import { Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const conveyorHousekeepingGuide: ApplicationGuideData = {
 slug: "conveyor-housekeeping",
 title: "Conveyor & Transfer-Point Housekeeping",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Conveyor & Transfer-Point Housekeeping Vacuum Solutions",
 description:
 "Industrial vacuum recovery for conveyor runs and transfer points — the distributed fugitive dust that accumulates along belts, under structures and at every chute and junction, kept below the layer depths combustible-dust housekeeping standards target.",
 },
 tagline: "Transfer points are where fugitive dust is born.",
 heroIntro:
 "Every drop, chute and belt junction sheds material, and it accumulates along conveyor runs and under structures where no one is looking. This is not a point source you capture at a single machine — it is a distributed, continuous fugitive-dust problem across the whole conveying path, and the accumulation it leaves is exactly the combustible-dust housekeeping failure that so many dust incidents trace back to.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery for combustible bulk" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine fugitive dust retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Long-run, continuous coverage" },
 ],
 overview:
 "Conveying is the circulatory system of a bulk-handling plant, and transfer points are where it leaks. Every chute, junction and discharge sheds a little material, and over a shift that fugitive dust settles along belt runs, on structural steel, and on overhead surfaces throughout the plant. The result is a distributed accumulation rather than a tidy pile at one machine — and because so much of it lands out of sight and out of reach, it is the classic way combustible dust builds past safe layer depths unnoticed. Recovery here is about coverage and reach: capturing at the transfer points, and clearing the runs, structures and overhead surfaces the dust migrates to, which is why long-hose and central-vacuum approaches earn their place.",
 capabilities: [
 { icon: Wind, title: "Transfer-Point Dust", detail: "Captured where it is shed" },
 { icon: Filter, title: "Combustible Fugitive Dust", detail: "Grounded, rated recovery" },
 { icon: Sparkles, title: "Structure & Overhead", detail: "The surfaces dust migrates to" },
 { icon: Gauge, title: "Long-Run Coverage", detail: "Central vacuum and long hose" },
 ],
 materialsHeading: "Common conveyed materials",
 materials: [
 "Coal & fuel dust",
 "Grain & agricultural dust",
 "Mineral & ore dust",
 "Wood & biomass dust",
 "Combustible bulk dust",
 "Mixed fugitive dust",
 ],
 materialsNote: {
 text: "Most conveyed bulk is a combustible dust, so testing governs —",
 link: { label: "the combustible dust checklist", href: "/resources/combustible-dust-solutions" },
 },
 challengesHeading: "Challenges in conveyor housekeeping",
 challenges: [
 "Transfer points shed material continuously, shift after shift",
 "The dust is distributed along runs, not concentrated at one source",
 "Accumulation lands under conveyors, on steel and on overhead surfaces",
 "Much of it is out of sight and hard to reach",
 "Most conveyed bulk is a combustible dust",
 "Unseen layers build past safe depths — the classic housekeeping failure",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Captures fugitive dust at the transfer points where it is shed",
 "Reaches distributed runs, structures and overhead surfaces",
 "Keeps fugitive dust below the layer depths housekeeping standards target",
 "Grounded, rated recovery for combustible conveyed bulk",
 "Long-hose and central-vacuum coverage for extended runs",
 "Supports deflagration-prevention housekeeping with a documented method",
 ],
 benefits: [
 { title: "Better Safety", detail: "Fugitive dust is cleared before it accumulates past safe layer depths." },
 { title: "Higher Productivity", detail: "Cleaner conveyors run with fewer jams, spills and unplanned stops." },
 { title: "Cost Savings", detail: "Recovered material and less manual shoveling cut cost across long runs." },
 { title: "Cleaner Workplace", detail: "HEPA-retained recovery keeps migrating dust off structures and out of the air." },
 ],
 recommended: ["central-vacuum-systems", "industrial-vacuums", "explosion-proof-vacuums", "hepa-vacuums"],
 setup: [
 { step: "Conveyor run & transfer points", detail: "Chutes, junctions and discharges along the conveying path" },
 { step: "Extension & reach tooling", detail: "Wands and lances for overhead and hard-to-reach structure" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated unit or central system", detail: "Explosion-proof portable or a central vacuum for long runs" },
 { step: "Sealed collection & disposal", detail: "Combustible fugitive dust contained" },
 ],
 setupNote: {
 text: "Cleaning the bins and silos these conveyors feed is a related job —",
 link: { label: "the silo & bin cleaning guide", href: "/applications/silo-cleaning" },
 textAfter: "covers reach-first interior recovery.",
 },
 faqs: [
 {
 question: "Why do transfer points matter so much?",
 answer:
 "Because they are where conveying sheds its dust — every chute, junction and discharge leaks a little, and over time that fugitive material accumulates along runs and on structures. Since much of it lands out of sight, transfer-point dust is a leading way combustible dust builds past safe layer depths unnoticed, which is exactly what housekeeping standards aim to prevent.",
 },
 {
 question: "How do you reach long runs and overhead structure?",
 answer:
 "With reach tooling and, for extended coverage, central-vacuum or long-hose systems. Fugitive conveyor dust is spread across the plant rather than concentrated at one machine, so the recovery approach favors coverage — clearing the runs, structural steel and overhead surfaces the dust migrates to, not just the visible piles.",
 },
 {
 question: "Is the conveyed dust combustible?",
 answer:
 "Usually — coal, grain, minerals, wood and most bulk solids are combustible dusts, so the fugitive dust they shed is too. Testing your actual material governs, and grounded, rated recovery is the safe default. The whole point of transfer-point housekeeping is keeping that combustible fugitive fuel below threshold.",
 },
 {
 question: "What layer depth should we keep below?",
 answer:
 "Combustible-dust housekeeping standards target keeping accumulations below a shallow threshold layer across surfaces, because thin fugitive layers over a large area carry real deflagration potential. Rather than cite a single figure, the practical goal is disciplined, scheduled recovery that never lets fugitive dust build to a visible layer on runs, steel or overhead surfaces.",
 },
 ],
 relatedApplications: [
 "Silo & bin cleaning",
 "Bulk material handling",
 "Dust collector cleaning",
 "Warehouse housekeeping",
 "Mixing & blending",
 "Spill cleanup",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
