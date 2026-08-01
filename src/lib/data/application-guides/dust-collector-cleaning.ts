import { AlertTriangle, Filter, Layers, Recycle, ShieldCheck, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const dustCollectorCleaningGuide: ApplicationGuideData = {
 slug: "dust-collector-cleaning",
 title: "Dust Collector Cleaning",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Dust Collector Cleaning Vacuum Solutions",
 description:
 "The collector concentrates a facility's combustible dust by design — which makes servicing it the highest-stakes housekeeping task on site. Vacuum-supported filter changes, hopper pulldowns and sealed cake handling. Recovery supports collector service; it never substitutes for deflagration protection.",
 },
 tagline: "The collector concentrates the hazard by design. Service it accordingly.",
 heroIntro:
 "Everything the capture system pulls from the plant ends up here — which makes the collector the highest fuel-load vessel on site and its service moments the highest-stakes housekeeping on the schedule. PrestiVac recovery supports filter changes, hopper pulldowns and surrounds so the material stays contained from element to drum.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Rated recovery at the vessel" },
 { icon: Filter, title: "HEPA Filtration", detail: "Cake fines retained, not freed" },
 { icon: AlertTriangle, title: "Smolder-Aware", detail: "Verified-cool material only" },
 { icon: Wrench, title: "Service-Window Ready", detail: "Built for maintenance cadence" },
 ],
 overview:
 "A dust collector's job is concentration: the capture system sweeps the facility's fugitive dust into one vessel, which means the collector holds more fuel, finer fuel, than anywhere else on site — by design. Its deflagration protection is its own engineered system: vents, isolation and suppression specified to the vessel and the dust. What that engineering does not cover is the human moments — filter changes that free cake into the air, hopper pulldowns that turn a bin of concentrated fines loose, housings and surrounds that accumulate between services. That is the vacuum program's territory: capture at the element as filters come out, sealed transfer at the hopper discharge, smolder checks for materials that self-heat, and a hard rule kept plainly in view — recovery supports collector service; it never substitutes for the collector's protection systems.",
 capabilities: [
 { icon: Filter, title: "Filter Changes", detail: "Cake captured at the element" },
 { icon: Layers, title: "Hopper Pulldowns", detail: "Concentrated fines, sealed transfer" },
 { icon: Wind, title: "Housing & Surrounds", detail: "The vessel's own housekeeping" },
 { icon: Recycle, title: "Sealed Cake Disposal", detail: "Element to drum, contained" },
 ],
 materialsHeading: "What collectors concentrate",
 materials: [
 "Mixed facility fines — the finest fraction on site",
 "Filter cake and element residues",
 "Hopper accumulations",
 "Smolder-prone organics (chaff, carbon black, coal fines)",
 "Metal fines from capture at grinding and cutting",
 "Sorbent and additive dusts",
 ],
 materialsNote: {
 text: "The collected dust keeps its identity — its own guide still governs handling —",
 link: { label: "browse the materials directory", href: "/materials" },
 },
 challengesHeading: "Challenges in collector service",
 challenges: [
 "The vessel holds the site's largest, finest fuel inventory — concentration is its job",
 "Filter changes free cake into the air exactly when workers are closest",
 "Hoppers get treated as storage — accumulated fines waiting for an ignition source",
 "Smolder-prone materials can arrive at the drum already self-heating",
 "Blow-down around a collector re-suspends the very material the system exists to capture",
 "Service happens under the facility's hazardous-energy program — cleanup must fit the procedure",
 ],
 whyHeading: "Why vacuum-supported service?",
 why: [
 "Cake comes off elements into capture, not into the service crew's breathing zone",
 "Hopper discharge runs as sealed transfer instead of an open pour",
 "Rated equipment at the one vessel where the dust is finest and densest",
 "Smolder verification built into the procedure for self-heating materials",
 "Surrounds and housings on rotation keep the vessel's exterior off the fuel map",
 "Documented service cleanup slots cleanly into the maintenance record",
 ],
 benefits: [
 { title: "Better Safety", detail: "The highest-stakes service on site runs contained instead of airborne." },
 { title: "Higher Productivity", detail: "Filter changes finish clean in one window — no second visit to chase the mess." },
 { title: "Cost Savings", detail: "Captured cake goes to the drum, not onto equipment that wears and clogs." },
 { title: "Cleaner Workplace", detail: "The area around the collector stops advertising what the collector does." },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 setup: [
 { step: "Element-side capture tools", detail: "Nozzles working the cake as filters come out" },
 { step: "Hopper discharge adaptation", detail: "Sealed transfer from bin to drum" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path at the vessel" },
 { step: "Rated recovery unit", detail: "Explosion-proof or air-operated, matched to the dust" },
 { step: "Sealed collection & disposal", detail: "Verified-cool cake, contained and dispositioned promptly" },
 ],
 setupNote: {
 text: "The collected dust decides the specification —",
 link: { label: "get a quote", href: "/get-a-quote" },
 textAfter: "about what your system captures.",
 },
 faqs: [
 {
 question: "Why is the collector the highest-risk vessel on site?",
 answer:
 "Because concentration is its purpose. The capture system delivers the facility's finest, most dispersible dust to one enclosure, continuously — so the collector holds more fuel in more ignitable form than any process vessel. That's why it carries its own deflagration engineering, and why servicing it deserves more care than any other housekeeping task.",
 },
 {
 question: "Does vacuum recovery replace explosion vents or suppression?",
 answer:
 "No — and the boundary matters. Vents, isolation and suppression are the collector's own engineered protection, specified to the vessel and dust by the people who do that work. Vacuum recovery lives on the service side: keeping filter changes, hopper pulldowns and surrounds contained. Support, never substitution.",
 },
 {
 question: "Can we just let the hopper fill and empty it monthly?",
 answer:
 "A hopper is a funnel, not a bin — letting it store material means holding concentrated fines against the day something finds them. Scheduled pulldowns with sealed transfer keep the inventory small and moving; the drum, not the hopper, is where collected dust waits for disposal.",
 },
 {
 question: "How do we handle the filter cake itself?",
 answer:
 "As the material it is: the cake keeps the identity and rules of the dust that formed it. HEPA-retained capture at the element, sealed transfer, verified-cool handling for smolder-prone materials like chaff, carbon black or coal fines, and prompt disposition — the cake never stands open.",
 },
 ],
 relatedApplications: [
 "Factory housekeeping",
 "Shutdown cleaning",
 "Kiln cleaning",
 "Conveyor cleaning",
 "Warehouse housekeeping",
 "Spill cleanup",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
