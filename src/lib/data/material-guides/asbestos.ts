import { AlertTriangle, Filter, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const asbestosGuide: MaterialGuideData = {
 slug: "asbestos",
 name: "Asbestos",
 groupCrumb: { label: "Mining & Mineral Dusts", anchor: "mining-dusts" },
 seo: {
 title: "How to Safely Recover Asbestos?",
 description:
 "Asbestos doesn't burn — it was installed as fire protection — and that is exactly why its fibers persist in the lung. A Group 1 carcinogen with its own OSHA standards, handled by licensed, accredited crews inside containment; HEPA vacuums are named equipment within that framework, never a shortcut around it.",
 },
 heroIntro:
 "Built for the material whose safety story inverted completely — installed for a century as fire protection, now a Group 1 carcinogen whose removal belongs to licensed, accredited crews inside containment. HEPA recovery is named equipment within that framework; this guide explains its role, not a way around the rules.",
 badges: [
 { icon: Filter, title: "HEPA-Tested Filtration", detail: "The filtration class the trade is built on" },
 { icon: ShieldCheck, title: "Framework-First", detail: "Licensed, accredited work only" },
 { icon: ScrollText, title: "Its Own Federal Rules", detail: "OSHA 1926.1101 / 1910.1001; EPA NESHAP" },
 { icon: AlertTriangle, title: "Group 1 Carcinogen", detail: "The hazard ledger is inhalation" },
 ],
 facts: [
 { label: "Combustibility", value: "Non-combustible — famously installed as fire protection" },
 { label: "Classification", value: "IARC Group 1 carcinogen — mesothelioma, asbestosis, lung cancer" },
 { label: "The number", value: "OSHA's PEL is 0.1 fibers per cubic centimeter — and no exposure level is established as safe" },
 { label: "Regulatory hinge", value: "Friable versus non-friable condition drives which rules apply" },
 ],
 overview: [
 "Asbestos is the material whose story inverted. Durable, heat-proof mineral fibers made it the twentieth century's fire protection, insulation and reinforcement of choice — and the same durability is the mechanism of harm: fibers fine enough to inhale persist in lung tissue, and the disease triad that follows — asbestosis, lung cancer, mesothelioma — earned asbestos its Group 1 classification and its own federal framework. OSHA's construction and general-industry standards set a permissible exposure limit of 0.1 fibers per cubic centimeter, health agencies emphasize that no exposure level is established as safe, and the EPA's NESHAP rules govern notifications for demolition and renovation. The regulatory hinge throughout is friability: material that crumbles under hand pressure releases fibers and triggers the strictest handling, while bound, intact material is managed in place or removed under controlled methods.",
 "The equipment story here is framework-first, and this page says so plainly: friable asbestos work belongs to licensed contractors and accredited workers, inside engineered containment, under the governing jurisdiction's rules — a HEPA vacuum is not a shortcut around any of that. Within the framework, HEPA-retained recovery is named equipment of the trade: wet-method removal knocks fibers down at the source, HEPA vacuum passes clean surfaces, poly and tools pass after documented pass, waste leaves sealed and manifested, and used filter elements are handled as the contaminated waste they are. Equipment is specified against the governing rules where the job is — always.",
 ],
 industries: [
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Demolition & Renovation", href: "/applications#general-maintenance" },
 { label: "Insulation Removal", href: "/applications#general-maintenance" },
 { label: "Steel Plants & Legacy Industry", href: "/industries/metalworking" },
 { label: "Facility Management", href: "/applications#general-maintenance" },
 ],
 riskHeading: "Exposure risks",
 risks: [
 "Fibers fine enough to inhale persist in lung tissue — durability is the mechanism of harm",
 "Friable material releases fibers under hand pressure — the condition that triggers the strictest rules",
 "Disturbance without containment turns a stable material into an exposure event",
 "Legacy materials surprise: older vermiculite insulation can carry asbestos contamination",
 "Dry sweeping or unrated vacuums re-suspend fibers — the methods the standards exist to prevent",
 ],
 solutions: [
 "Licensed, accredited crews working inside engineered containment — the non-negotiable frame",
 "Wet-method removal as standard practice — fibers suppressed at the source",
 "HEPA-retained vacuum passes on surfaces, poly and tools, documented pass by pass",
 "Sealed, labeled, manifested waste path from containment to disposal",
 "Used filter elements handled as contaminated waste — the filter touched what it captured",
 ],
 configuration: [
 { step: "Containment-side tools", detail: "Surface and crevice tools for the regulated area" },
 { step: "Sealed hose runs", detail: "Integrity end to end inside the barriers" },
 { step: "HEPA-tested recovery unit", detail: "Specified against the governing jurisdiction's requirements" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fibers stay captured" },
 { step: "Sealed bag-out & disposal", detail: "Waste and spent filters leave labeled and manifested" },
 ],
 bestPractices: [
 "The framework comes first: licensing, accreditation, containment, notification — then equipment",
 "Wet before disturbing — suppression at the source is standard practice, not an option",
 "Treat suspect legacy materials as asbestos until testing says otherwise",
 "Never dry-sweep, never use unrated vacuums — re-suspension is the failure mode",
 "Spent filters and collected waste follow the same sealed path as the debris",
 ],
 faqs: [
 {
 question: "Is asbestos still a risk today?",
 answer:
 "Yes. Asbestos remains in place in enormous quantities of existing buildings and equipment, and the risk arises when that material is disturbed — during renovation, demolition, maintenance or damage. Asbestos causes asbestosis, lung cancer and mesothelioma with decades of latency. OSHA regulates it under 29 CFR 1910.1001 and 1926.1101, and removal is licensed abatement work rather than a maintenance task.",
 },
 {
 question: "Is asbestos flammable or explosive?",
 answer:
 "No — famously the opposite. Asbestos was installed for a century *as* fire protection precisely because the mineral fibers don't burn. The entire hazard ledger is inhalation: fibers that persist in the lung and the disease triad that follows. There is no dust-explosion story here, and this page won't borrow one.",
 },
 {
 question: "Can we just vacuum it up with a HEPA vacuum?",
 answer:
 "No — and the distinction matters. Friable asbestos work belongs to licensed contractors and accredited workers inside engineered containment, under notification and disposal rules. Within that framework, HEPA vacuums are named equipment of the trade; outside it, they're a shortcut the rules exist to prevent. Equipment serves the framework — it never substitutes for it.",
 },
 {
 question: "What does friable versus non-friable actually mean?",
 answer:
 "It's the regulatory hinge: friable material can be crumbled by hand pressure and releases fibers readily, triggering the strictest handling; non-friable material is bound in a matrix and is managed in place or removed under controlled methods. Condition assessment — not the material's name alone — drives which rules apply.",
 },
 {
 question: "What about vermiculite and other legacy materials?",
 answer:
 "Treat them as suspect until tested. Older vermiculite insulation in particular can carry asbestos contamination — the Libby legacy — and renovation work that assumes otherwise is how exposure events happen. Testing first is cheap; the alternative isn't.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Abatement deep dive", href: "/industries/abatement" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Silica Dust guide", href: "/materials/silica-dust" },
 { label: "All mining & mineral dusts", href: "/materials#mining-dusts" },
 ],
};
