import { Box, Filter, Gauge, Layers, Recycle, ShieldCheck, Wind, Zap } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const metal3dPrintingGuide: ApplicationGuideData = {
 slug: "metal-3d-printing",
 title: "Metal 3D Printing",
 titleAccent: "Powder Recovery",
 categoryCrumb: { label: "Additive Manufacturing", anchor: "additive-manufacturing" },
 seo: {
 title: "Metal 3D Printing Powder Recovery",
 description:
 "Explosion-proof vacuum solutions for metal 3D printing: safe recovery of reactive AM powders and chamber condensate across powder bed fusion, sieving and machine turnaround.",
 },
 tagline: "Safe. Contained. Economical.",
 heroIntro:
 "The powder your process is built on is a combustible, reactive metal dust — and expensive inventory. PrestiVac recovery systems handle both facts at once: ignition engineered out, fines wetted on entry, and the reuse stream protected instead of contaminated.",
 heroImage: {
 src: "/images/library/workers/am-printer-recovery.jpg",
 alt: "Operator with supplied-air protection recovering titanium alloy powder at a metal 3D printer",
 },
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 484 / 660 practice" },
 { icon: Filter, title: "Immersion & HEPA", detail: "Reactive fines wetted on entry" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded, verified" },
 { icon: Gauge, title: "Maximum Uptime", detail: "Faster machine turnaround" },
 ],
 overview:
 "Powder bed fusion spreads fine metal powder thousands of times per build — and some of it always ends up where it doesn't belong: on the build plate at unpacking, around the sieving station, on the floor after a transfer, and deposited inside the chamber as ultra-fine condensate. Each of those is a recovery task with the same two requirements: no ignition sources in the path, and no dry accumulation of a reactive metal anywhere in the system.",
 capabilities: [
 { icon: Box, title: "Build Chamber Cleanup", detail: "Unpacking & turnaround" },
 { icon: Recycle, title: "Powder Handling", detail: "Sieving stations & spills" },
 { icon: Wind, title: "Condensate & Soot", detail: "The finest, most reactive fraction" },
 { icon: Layers, title: "Depowdering", detail: "Part & plate cleanup" },
 ],
 materialsHeading: "Common AM powders",
 materials: [
 "Titanium alloys (Ti-6Al-4V)",
 "Aluminum alloys",
 "Stainless steels",
 "Nickel superalloys (Inconel)",
 "Cobalt-chrome",
 "Tool steels",
 "Polymer powders (nylon PA12)",
 ],
 materialsNote: {
 text: "Titanium and aluminum are reactive metal dusts —",
 link: { label: "see the titanium guide", href: "/materials/titanium-dust" },
 },
 challengesHeading: "Challenges in metal AM",
 challenges: [
 "AM powders are engineered fine — squarely in the ignitable range for reactive metals",
 "Chamber condensate ('soot') is finer and more reactive than virgin powder",
 "Brush-and-tray handling lofts the worst fraction at operator height",
 "Powder is expensive inventory: recovery method affects both safety and economics",
 "Shared cleaning equipment is a cross-contamination path between alloy families",
 "Nickel and cobalt powders add exposure-limit requirements on top of combustibility",
 ],
 whyHeading: "Why engineered vacuum recovery?",
 why: [
 "Air-operated explosion-proof units remove electrical ignition entirely",
 "Immersion separation wets reactive fines the moment they enter",
 "Grounded, bonded path controls static where concentration peaks",
 "HEPA-retained exhaust protects operators and the reuse stream",
 "Detail nozzles capture condensate instead of lofting it",
 "Alloy-dedicated units close the cross-contamination pathway by rule",
 ],
 benefits: [
 { title: "Better Safety", detail: "Air-operated units and immersion separation engineer ignition out of powder handling." },
 { title: "Higher Productivity", detail: "Faster, cleaner machine turnaround between builds." },
 { title: "Cost Savings", detail: "Expensive powder inventory protected; the reuse stream stays uncontaminated." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps the finest fraction away from operators." },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums"],
 setup: [
 { step: "Build chamber / depowder station", detail: "Powder and condensate at the point of generation" },
 { step: "Grounded tool kit", detail: "Stainless wands and detail nozzles, non-sparking" },
 { step: "Air-operated EX vacuum", detail: "Zero electrical components in the powder room" },
 { step: "Immersion + HEPA", detail: "Fines wetted on entry; 99.99% final stage" },
 { step: "Sealed collection", detail: "Wetted transfer to disposition — reuse stream stays separate" },
 ],
 setupNote: {
 text: "Alloy-dedicated units per material family keep the recovery path from becoming a contamination path — labeling is part of the specification, not an afterthought.",
 },
 faqs: [
 {
 question: "Can one vacuum serve all our printers?",
 answer:
 "Only within one alloy family. Cross-contamination between reactive metals — and between nickel superalloys and everything else — is a quality and safety pathway; alloy-dedicated, labeled units close it by rule.",
 },
 {
 question: "Is chamber condensate really different from the powder?",
 answer:
 "Yes — process condensate ('soot') is finer and more reactive than virgin powder. It's captured with detail nozzles at low disturbance, never brushed or blown, and treated as the most reactive material on site.",
 },
 {
 question: "Can vacuum-recovered powder go back into the build supply?",
 answer:
 "No — the reuse stream runs through the process's own sieving and qualification path. Vacuum-collected material is a disposal stream, wetted and sealed; keeping the two separate protects part quality and the powder economics.",
 },
 {
 question: "Are electric explosion-proof vacuums acceptable in the powder room?",
 answer:
 "Area classification decides — and air-operated units remove the question entirely, with no electrical components anywhere on the unit. For reactive AM powders that simplification is usually worth specifying.",
 },
 ],
 relatedApplications: [
 "Cleanroom Vacuuming",
 "Powder recovery",
 "SLS / DMLS / SLM printing",
 "Build chamber cleaning",
 "Powder recycling",
 "Binder jetting",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Titanium Dust guide", href: "/materials/titanium-dust" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 ],
 studySlug: "titanium-powder-additive-manufacturing",
};
