import { AlertTriangle, Filter, Layers, Printer, ShieldCheck, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const additiveManufacturingGuide: IndustryGuideData = {
 slug: "additive-manufacturing",
 name: "Additive Manufacturing",
 titleAccent: "additive manufacturing",
 seo: {
 title: "How to Safely Recover Powder in Additive Manufacturing?",
 description:
 "The one industry built on handling, by design, the exact material combustible-dust standards were written to control — loose reactive-metal and polymer powder as feedstock. From loading to depowdering to sieving and reuse, the whole workflow is powder handling, and the powder is fuel. Dedicated, grounded, HEPA-retained recovery.",
 },
 heroIntro:
 "The industry whose feedstock is the hazard — additive manufacturing handles, by design, the loose reactive-metal and polymer powder that combustible-dust standards were written to control. From receiving to loading, depowdering, sieving and reuse, the entire workflow is powder handling, and that powder is fuel. Recovery is dedicated, grounded, and HEPA-retained at every step.",
 heroImage: {
 src: "/images/library/workers/am-postprocess-recovery.jpg",
 alt: "Operator with supplied-air protection recovering metal powder at an additive-manufacturing post-processing station",
 },
 badges: [
 { icon: AlertTriangle, title: "Powder Is The Feedstock", detail: "Reactive metal & polymer, by design" },
 { icon: Layers, title: "Whole-Lifecycle Capture", detail: "Load, depowder, sieve, recycle" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine reactive fractions retained" },
 { icon: Printer, title: "Metal & Polymer AM", detail: "Powder bed to binder jetting" },
 ],
 stagesIntro:
 "An additive-manufacturing operation moves powder through a closed loop — in, into the machine, out with the part, sieved, and back again. Every transfer sheds loose powder. Walk the lifecycle where capture belongs.",
 stages: [
 { label: "Powder receiving & storage", detail: "Reactive-metal and polymer powders arrive and are stored as the plant's feedstock; handling begins under inert-aware, grounded discipline because the material is combustible from the moment it is unpacked." },
 { label: "Machine loading", detail: "Charging the build chamber transfers loose powder — the first routine dust-generation point, captured at the source rather than allowed to escape into the room." },
 { label: "Printing & build", detail: "During the build, loose powder surrounds the part; process gas and condensate management belong to the machine, while housekeeping addresses what escapes to surfaces." },
 { label: "Depowdering & part extraction", detail: "Removing the part from its powder cake is the dustiest step — captured with dedicated, grounded recovery, because this is where the largest volume of loose reactive powder is liberated." },
 { label: "Powder sieving & reclaim", detail: "Unused powder is sieved and returned to inventory; sieving sheds fines continuously, so reclaim stations are a primary capture point and the powder is treated as both asset and hazard." },
 { label: "Post-processing & finishing", detail: "Support removal, machining and finishing generate additional fines — the metalworking side of AM, covered in depth in the metal 3D printing application guide." },
 { label: "Polymer AM (SLS)", detail: "Selective-laser-sintering and similar polymer processes handle nylon and comparable powders — combustible plastic dust that, as an insulator, builds its own static charge." },
 { label: "Powder recycling & disposal", detail: "End-of-life powder and captured fines are contained and disposed under sealed handling — mixed or spent powder is never returned to a clean stream." },
 ],
 challengesHeading: "A workflow that is all powder handling",
 challenges: [
 { icon: AlertTriangle, title: "Reactive-Metal Powder", detail: "Titanium, aluminum, cobalt-chromium and nickel-alloy powders are combustible metals — in AM the feedstock is quite literally fuel, handled under full combustible-metal rules." },
 { icon: Zap, title: "Static-Sensitive Fines", detail: "Fine metal and polymer powders build static readily — grounded, bonded, static-dissipative recovery is required throughout the powder loop." },
 { icon: Layers, title: "Every Step Sheds Powder", detail: "Loading, depowdering, sieving and reclaim each liberate loose powder, so capture spans the entire lifecycle rather than a single point." },
 { icon: Printer, title: "Polymer AM Burns Too", detail: "SLS and other polymer processes handle nylon and similar powders — combustible plastic dust with its own static behavior, not a milder exception." },
 { icon: ShieldCheck, title: "Dedicated, Never Cross-Used", detail: "Different powders — and metal versus polymer — are kept on dedicated recovery; mixing is both a reactivity hazard and a powder-contamination failure." },
 { icon: Filter, title: "Asset And Hazard At Once", detail: "Reclaimed powder is valuable to recover cleanly and dangerous to let escape — HEPA-retained, sealed capture serves both the economics and the safety case." },
 ],
 materialsHeading: "The powders additive manufacturing handles",
 materials: [
 { name: "Titanium powder", combustible: "Yes — reactive", approach: "Immersion-separator or rated recovery; dedicated to the material", href: "/materials/titanium-dust" },
 { name: "Aluminum powder", combustible: "Yes — severe", approach: "Grounded, rated, dedicated recovery", href: "/materials/aluminum-dust" },
 { name: "Nickel-alloy (Inconel) powder", combustible: "Combustible + health", approach: "HEPA-retained, sealed, dedicated", href: "/materials/nickel-dust" },
 { name: "Cobalt-chrome powder", combustible: "Combustible + toxic", approach: "HEPA-retained, sealed handling" },
 { name: "Polymer powder (nylon PA12)", combustible: "Yes — self-charging", approach: "Grounded, static-dissipative recovery", href: "/materials/plastic-dust" },
 { name: "Stainless & tool-steel powder", combustible: "Combustible as fine powder", approach: "Rated recovery per explosibility testing" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in additive manufacturing",
 applicationCategorySlug: "additive-manufacturing",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 studySlug: "titanium-powder-additive-manufacturing",
};
