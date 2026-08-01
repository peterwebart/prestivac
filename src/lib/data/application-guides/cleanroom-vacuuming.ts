import { Filter, ScrollText, ShieldCheck, Sparkles, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const cleanroomVacuumingGuide: ApplicationGuideData = {
 slug: "cleanroom-vacuuming",
 title: "Cleanroom",
 titleAccent: "Vacuuming",
 categoryCrumb: { label: "General Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Cleanroom Vacuums — HEPA & ULPA Filtered Controlled-Area Cleaning",
 description:
 "Vacuuming inside a controlled environment without adding to the particle count. HEPA and ULPA filtration, non-shedding construction, ESD considerations and containment for pharmaceutical and semiconductor cleanrooms.",
 },
 tagline: "Cleaning without adding particles",
 heroIntro:
 "In a cleanroom the vacuum is the only piece of equipment brought in specifically to remove contamination, which makes it the one that must not contribute any. Everything about specification changes: what leaves the exhaust matters more than what enters the nozzle, and the machine's own surfaces are part of the particle budget.",
 badges: [
 { icon: Filter, title: "HEPA & ULPA Options", detail: "H14 99.995% HEPA; ULPA 99.9995% at 0.12 um" },
 { icon: Sparkles, title: "Non-Shedding Build", detail: "Smooth, wipeable, stainless construction" },
 { icon: ShieldCheck, title: "Static Control", detail: "Anti-static and ESD-aware accessories" },
 { icon: ScrollText, title: "Documented Cleaning", detail: "Records that suit validated environments" },
 ],
 overview:
 "A controlled environment is defined by its particle count, so a vacuum operating inside one is judged by its exhaust rather than its suction. Filtration has to be tested and retained: PrestiVac HEPA is rated at 99.99% absolute against a 99.97% HEPA minimum, factory H14 grades reach 99.995%, and ULPA extends to 99.9995% at 0.12 micrometres where the classification demands it. Beyond filtration, the machine itself has to stop being a source — smooth wipeable surfaces rather than textured plastic, construction that does not shed, accessories that can be cleaned and dedicated to the room, and a static strategy that accounts for both ignition risk where powders are handled and component damage where electronics are assembled. Cleanroom vacuuming is one of the few applications where a wrongly specified machine actively worsens the condition it was bought to improve.",
 capabilities: [
 { icon: Filter, title: "Tested filtration to the classification", detail: "HEPA and ULPA options so exhaust air quality matches the room rather than the corridor outside it." },
 { icon: Sparkles, title: "Wipeable, non-shedding surfaces", detail: "Stainless and smooth construction that can be cleaned down and taken through a gowning protocol." },
 { icon: ShieldCheck, title: "Static managed both ways", detail: "Anti-static where powders could ignite; ESD-aware where sensitive components are the concern. They are different requirements." },
 { icon: Wrench, title: "Contained collection", detail: "Sealed containers and liner options so the disposal step does not undo the cleaning." },
 ],
 materialsHeading: "What gets recovered in controlled areas",
 materials: [
 "Active pharmaceutical ingredients and excipient powders",
 "Fine chemical and formulation dusts from dispensing and compounding",
 "Semiconductor process particulate, including wafer lapping and dicing residue",
 "Toner, pigment and fine polymer powders in precision assembly",
 "Glove, garment and packaging fibres shed inside the room",
 "Spilled granulate and tablet fines from compression and coating operations",
 ],
 materialsNote: {
 text: "Where the powder is toxic as well as fine, exposure control rather than tidiness sets the specification.",
 link: { label: "Pharmaceutical deep dive", href: "/industries/pharmaceutical" },
 },
 challengesHeading: "Why cleanroom cleaning is its own problem",
 challenges: [
 "The exhaust is the risk: a vacuum with inadequate filtration raises the particle count of the room it is cleaning.",
 "The machine is a surface: textured housings, cable jackets and wheels all shed and all need to be wipeable and cleanable.",
 "Two static problems at once: powders may need anti-static construction to prevent ignition while nearby components need ESD control to prevent damage.",
 "Containment at disposal: the highest-exposure moment for a toxic powder is often the container change, not the recovery.",
 "Validated environments resist change: introducing equipment into a qualified space needs documentation, not just a purchase order.",
 "Compressed air is unavailable as a shortcut — blowdown is unacceptable in a controlled area, so recovery is the only route.",
 ],
 whyHeading: "Why specification is stricter here",
 why: [
 "Retained filtration is the function of the machine, not a feature of it — the room's classification is what the filter has to satisfy.",
 "Dedicated equipment prevents transfer: a vacuum that also cleans the loading dock has no business in a cleanroom.",
 "Non-shedding, wipeable construction lets the machine pass a gowning and wipe-down protocol rather than defeating it.",
 "Anti-static and ESD requirements are distinct, and facilities like battery and semiconductor plants genuinely need both addressed.",
 "Sealed collection means the pharmaceutical or toxic fraction leaves the room contained rather than at the container.",
 "Documented cleaning supports the validation and audit trail these environments run on.",
 ],
 benefits: [
 { title: "Particle count protected", detail: "Tested HEPA or ULPA retention so cleaning reduces contamination instead of relocating it into the air." },
 { title: "Operator exposure controlled", detail: "Contained recovery and sealed disposal for potent compounds and fine toxic powders." },
 { title: "Passes the protocol", detail: "Wipeable, dedicated equipment that fits gowning and wipe-down procedures rather than fighting them." },
 { title: "Audit-ready records", detail: "Documented intervals and methods that sit comfortably alongside validation documentation." },
 ],
 recommended: ["hepa-vacuums", "custom-engineered-systems", "pneumatic-vacuums", "accessories"],
 setup: [
 { step: "Start from the room classification", detail: "The classification determines the filtration requirement. Ask what a filter is tested to rather than what it is called." },
 { step: "Decide HEPA or ULPA", detail: "HEPA at 99.99% at 0.3 um is the general baseline; H14 reaches 99.995%, and ULPA extends to 99.9995% at 0.12 um where the environment requires it." },
 { step: "Resolve the static question — both halves", detail: "Anti-static construction where powders could ignite, ESD-aware specification where components are sensitive. State both if both apply." },
 { step: "Design the disposal step", detail: "Sealed containers and liners, and a defined route out of the controlled area. This is where containment is usually won or lost." },
 { step: "Dedicate and document", detail: "Assign equipment to the room, include it in the cleaning procedure, and record the passes for the audit trail." },
 ],
 setupNote: {
 text: "Where powders are both combustible and ESD-relevant — battery and semiconductor work especially — the two requirements are specified together rather than assuming one covers the other: ",
 link: { label: "anti-static versus ESD-safe", href: "/guides/esd-anti-static-vacuums" },
 },
 faqs: [
 {
 question: "What makes a vacuum suitable for a cleanroom?",
 answer:
 "Tested, retained filtration matched to the room's classification — PrestiVac HEPA at 99.99% absolute (above the 99.97% HEPA minimum), with H14 at 99.995% and ULPA at 99.9995% at 0.12 micrometres available where the environment demands it. Beyond filtration: smooth non-shedding wipeable construction, accessories that can be cleaned and dedicated to the room, contained sealed collection, and a static strategy suited to whether the concern is powder ignition, component damage, or both.",
 },
 {
 question: "What is the difference between HEPA and ULPA for cleanroom use?",
 answer:
 "They are tested at different particle sizes and efficiencies. Standard HEPA is tested to a minimum of 99.97% at 0.3 micrometres; PrestiVac units are rated at 99.99% absolute, and factory H14 grades reach 99.995%. ULPA extends further, to 99.9995% at 0.12 micrometres. Which you need follows the room classification and what you are recovering rather than a preference for the higher number.",
 },
 {
 question: "Can I use the same vacuum in the cleanroom and the rest of the plant?",
 answer:
 "No. Equipment that circulates between a controlled area and general plant carries contamination in both directions, which is why cleanroom vacuums are dedicated and labelled. It is the same principle applied to regulated toxic materials, and it is usually the first thing an auditor checks.",
 },
 {
 question: "Do cleanroom vacuums need to be ESD-safe or anti-static?",
 answer:
 "It depends which problem you have, and some facilities have both. Anti-static construction prevents a static discharge igniting combustible powder — a safety requirement. ESD-safe specification prevents electrostatic discharge damaging sensitive components — a product-protection requirement. Semiconductor and battery operations frequently need both addressed, and they should be specified explicitly rather than assumed.",
 },
 ],
 relatedApplications: [
 "mixing-blending",
 "bagging-dumping",
 "drum-filling",
 "spill-cleanup",
 "metal-3d-printing",
 "warehouse-housekeeping",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion-Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
