import { AlertTriangle, Filter, Layers, Recycle, ScrollText, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const abatementGuide: IndustryGuideData = {
 slug: "abatement",
 name: "Abatement & Remediation",
 titleAccent: "abatement & remediation",
 seo: {
 title: "Abatement & Remediation Vacuum Solutions",
 description:
 "HEPA vacuum programs for the trades where HEPA is written into the rules — asbestos abatement, lead and RRP work, mold remediation and demolition silica. Containment-side recovery, sealed bag-out discipline, and equipment specified against the governing jurisdiction's requirements.",
 },
 heroIntro:
 "The trades where HEPA filtration isn't a preference — it's written into the rules. Work happens inside containment, waste leaves sealed and labeled, clearance decides when it's done, and every piece of equipment is specified with the governing jurisdiction's requirements in hand.",
 badges: [
 { icon: Filter, title: "HEPA-Tested Filtration", detail: "The filtration class the rules name" },
 { icon: ShieldCheck, title: "Regulation-Aware", detail: "Asbestos, lead & RRP frameworks" },
 { icon: Wind, title: "Containment-Side Ready", detail: "Works inside the barriers" },
 { icon: Recycle, title: "Sealed Waste Path", detail: "Bag-out discipline built in" },
 ],
 stagesIntro:
 "Abatement is a choreography of boundaries — build the containment, hold the pressure, remove the hazard, seal the waste, prove the clearance. Walk the stages to see where recovery equipment carries the work.",
 stages: [
 { label: "Assessment & planning", detail: "Surveys identify the hazard, and the governing rules — federal, state, local — set the methods and the equipment requirements before anything is disturbed." },
 { label: "Containment build", detail: "Poly barriers, decontamination chambers and signage define the regulated area — the boundary every later step depends on." },
 { label: "Negative air & pressure", detail: "HEPA-exhausted negative-air machines hold the pressure differential — their own equipment class, distinct from vacuums, each doing its named job." },
 { label: "Wet-method removal", detail: "Asbestos-containing materials are wetted before disturbance as standard practice — suppression at the source, with recovery handling what settles." },
 { label: "HEPA vacuum passes", detail: "The named equipment of the trade — surfaces, poly, ledges and tools vacuumed with HEPA retention as the rules direct, pass after documented pass." },
 { label: "Bag-out & load-out", detail: "Waste leaves sealed, labeled and manifested — the chain of custody is part of the removal, not an afterthought." },
 { label: "Final clean & clearance", detail: "Visual inspection and clearance criteria per the governing rule decide when containment comes down — the finish line is measured, not declared." },
 { label: "Decon & equipment care", detail: "Filters and collected waste are handled as the hazard they touched — used HEPA elements from abatement work are contaminated waste, disposed accordingly." },
 ],
 challengesHeading: "Where the rules name the equipment",
 challenges: [
 { icon: ScrollText, title: "HEPA Is Written In", detail: "The lead RRP rule explicitly requires HEPA vacuums; asbestos practice is built on them — the equipment class is named, not chosen." },
 { icon: AlertTriangle, title: "Regulated Carcinogens", detail: "Asbestos is a Group 1 carcinogen with its own OSHA standards; lead carries its own — the work exists because the materials are this serious." },
 { icon: Wind, title: "The Boundary Is Everything", detail: "Containment and negative pressure define the job — equipment that works inside the barriers without breaking them is the requirement." },
 { icon: Layers, title: "Legacy Surprises", detail: "Older vermiculite insulation can carry asbestos contamination — the Libby legacy — so suspect materials are treated as such until tested." },
 { icon: Filter, title: "Spores Are Particles Too", detail: "Mold remediation runs the same capture-and-contain logic — with the honest first step that the moisture source gets fixed or the mold returns." },
 { icon: ShieldCheck, title: "Jurisdiction Rules Equipment", detail: "Abatement equipment must satisfy the governing rules where the job is — specify with those requirements in hand, always." },
 ],
 materialsHeading: "Know the hazard. Follow its rules.",
 materials: [
 { name: "Asbestos-containing debris", combustible: "No — regulated carcinogen", approach: "Wetted removal; HEPA recovery inside containment; sealed disposal per the governing rules", href: "/materials/asbestos" },
 { name: "Lead paint chips & dust", combustible: "No", approach: "RRP and lead-standard methods — HEPA vacuums named in the rule; sealed bag-out", href: "/materials/lead-dust" },
 { name: "Demolition silica", combustible: "No — inert", approach: "HEPA capture at the work; the silica standards govern", href: "/materials/silica-dust" },
 { name: "Mold & spore debris", combustible: "No", approach: "Containment plus HEPA capture — moisture source corrected first" },
 { name: "Vermiculite insulation", combustible: "No", approach: "Treated as suspect for asbestos until tested; handled accordingly" },
 { name: "Contaminated general debris", combustible: "Varies", approach: "Assessment-driven handling under the applicable rule" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in abatement work",
 applicationCategorySlug: "general-maintenance",
 recommended: ["hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 studySlug: "silica-sand-foundry",
};
