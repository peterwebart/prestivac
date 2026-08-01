import { Filter, Gauge, HardHat, Layers, Recycle, ShieldCheck, Wind } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const warehouseHousekeepingGuide: ApplicationGuideData = {
 slug: "warehouse-housekeeping",
 title: "Warehouse Housekeeping",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Warehouse Housekeeping Vacuum Solutions",
 description:
 "Industrial vacuum programs for warehouses and distribution centers — rack tops and beams on long-reach rotation, continuous cardboard fly, dock and staging discipline, and OSHA's walking-surface and storage-area housekeeping obligations.",
 },
 tagline: "A warehouse inherits its inventory's dust.",
 heroIntro:
 "Whatever the racks hold, the building collects — bagged powders shed, cardboard flies continuously, and forklift traffic redistributes all of it daily. PrestiVac recovery puts rack tops, beams, aisles and docks on a documented rotation that brooms and blow-down never touch.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Options", detail: "Rated units where inventory demands" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines captured, not redistributed" },
 { icon: Gauge, title: "High-Volume Recovery", detail: "Aisle miles on a schedule" },
 { icon: HardHat, title: "Rack-Scale Reach", detail: "Beams and tops from the floor" },
 ],
 overview:
 "A warehouse's dust profile is inherited: a building full of bagged flour carries a combustible-dust program; a building full of bolts carries a nuisance one — and most carry both, aisle by aisle. Three streams do the accumulating. Stored product sheds through bag pores, box seams and case breaks. Cardboard sheds continuously — the fly is generated every time a case moves. And traffic redistributes everything: forklifts and air movement lift settled dust from floors onto beams, rack tops, light fixtures and sprinkler lines, the elevated surfaces that inspections find and brooms never reach. OSHA's expectations are written down — walking-working surfaces kept clean and orderly, storage areas kept free of accumulation that creates hazards — and a documented vacuum rotation is how a building this size actually meets them.",
 capabilities: [
 { icon: Layers, title: "Rack Tops & Beams", detail: "Elevated-surface logic at rack scale" },
 { icon: Wind, title: "Cardboard Fly", detail: "The continuous shedder, captured" },
 { icon: Recycle, title: "Dock & Staging", detail: "Where packaging dust starts — and stops" },
 { icon: HardHat, title: "Aisle Floors", detail: "Traffic lanes on high-frequency rotation" },
 ],
 materialsHeading: "Common warehouse dusts",
 materials: [
 "Cardboard & packaging fly",
 "Bagged-product leakage (flour, sugar, powders)",
 "Pallet and wood debris",
 "Shrink-wrap and plastic fines",
 "Concrete floor dust",
 "General facility dust",
 ],
 materialsNote: {
 text: "If the racks hold combustible powders, the inventory's own rules apply —",
 link: { label: "browse the materials directory", href: "/materials" },
 },
 challengesHeading: "Challenges in warehouse housekeeping",
 challenges: [
 "The dust profile changes with the inventory — the program has to read the racks",
 "Rack tops, beams and fixtures accumulate out of sight and out of broom reach",
 "Cardboard fly regenerates with every case picked — it never stays swept",
 "Forklift traffic and dock air redistribute floor dust upward all shift",
 "Walking-surface and storage-area housekeeping are written OSHA obligations",
 "Square footage defeats casual methods — only a scheduled rotation covers it",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Single-pass capture — traffic can't redistribute what's been removed",
 "Long-reach kits put rack tops and beams on routine from the floor",
 "HEPA retention keeps fines out of the air a busy building keeps moving",
 "Rated equipment options where bagged combustibles set the requirement",
 "A documented rotation is inspectable evidence, not a claim",
 "Dock and staging discipline stops packaging dust at the door",
 ],
 benefits: [
 { title: "Better Safety", detail: "Elevated fuel comes down on schedule instead of waiting for an inspection to find it." },
 { title: "Higher Productivity", detail: "Aisles clean in one pass — no sweep, resettle, sweep again across acres of floor." },
 { title: "Cost Savings", detail: "Grit off floors and equipment cuts wheel, door and conveyor wear building-wide." },
 { title: "Cleaner Workplace", detail: "HEPA-retained capture keeps the air as clean as the floors." },
 ],
 recommended: ["industrial-vacuums", "hepa-vacuums", "central-vacuum-systems", "explosion-proof-vacuums"],
 setup: [
 { step: "Aisle & dock floor tools", detail: "Wide tools sized for lane mileage and dock grit" },
 { step: "Long-reach kit", detail: "Rack tops, beams and fixtures from standing positions" },
 { step: "Durable hose runs", detail: "Abrasion-resistant lengths for building-scale coverage" },
 { step: "Industrial or rated unit", detail: "Matched to the inventory's dust profile" },
 { step: "Sealed collection & disposal", detail: "Captured fines leave the building contained" },
 ],
 setupNote: {
 text: "Inventory decides the specification —",
 link: { label: "get a quote", href: "/get-a-quote" },
 textAfter: "about what your racks actually hold.",
 },
 faqs: [
 {
 question: "Is warehouse dust actually combustible?",
 answer:
 "It depends entirely on the racks. Bagged flour, sugar, powders and resins shed combustible fines through every pore and seam; hardware and finished goods mostly shed cardboard and nuisance dust. Most buildings carry both profiles aisle by aisle — which is why the program starts by reading the inventory, and a Dust Hazard Analysis governs where combustibles live.",
 },
 {
 question: "Do rack tops really matter that much?",
 answer:
 "They're the warehouse version of the elevated-surface problem: accumulation building where nobody looks, above traffic that can loft it. Long-reach recovery puts beams, tops and fixtures on a defined rotation from the floor — no ladders, no waiting for the annual shutdown.",
 },
 {
 question: "What does OSHA actually require here?",
 answer:
 "Walking-working surfaces kept clean, orderly and sanitary, and storage areas kept free of accumulations that create hazards — written obligations, not suggestions. A documented vacuum rotation with defined frequencies is how a building measured in acres demonstrates both.",
 },
 {
 question: "How do we deal with cardboard dust?",
 answer:
 "Accept that it regenerates — every case picked sheds more — and beat it with discipline instead of chasing it: recovery at the dock and staging areas where packaging concentrates, high-frequency rotation in pick lanes, and sealed disposal so the fly leaves the building instead of touring it.",
 },
 ],
 relatedApplications: [
 "Factory housekeeping",
 "Spill cleanup",
 "Shutdown cleaning",
 "Conveyor cleaning",
 "Dust collector cleaning",
 "Loading dock cleaning",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
