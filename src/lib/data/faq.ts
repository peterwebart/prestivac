export type FaqCategory =
 | "explosion-safety"
 | "standards"
 | "selection"
 | "applications"
 | "operation";

export const FAQ_CATEGORIES: { id: FaqCategory | "all"; label: string }[] = [
 { id: "all", label: "All" },
 { id: "explosion-safety", label: "Explosion Safety" },
 { id: "standards", label: "Standards & Compliance" },
 { id: "selection", label: "Equipment Selection" },
 { id: "applications", label: "Applications" },
 { id: "operation", label: "Operation & Maintenance" },
];

export type FaqItem = {
 id: string;
 category: FaqCategory;
 question: string;
 answer: string;
 related: { label: string; href: string }[];
};

export const FAQ: FaqItem[] = [
 {
 id: "electric-or-air-operated",
 category: "selection",
 question: "Should I choose an electric or an air-operated vacuum?",
 answer:
 "It usually comes down to two things: your area classification and whether you have adequate compressed air at the point of use. An air-operated unit is driven by compressed air through a venturi, so there is no electric motor, no switch and no cord in the recovery unit at all — which removes the electrical ignition question from the drive entirely and suits long continuous running. Electric units suit facilities without sufficient plant air. Both are built with the same conductive, grounded and bonded recovery path, because the dust carries static regardless of what drives the machine. Air units are louder, which is worth planning for in occupied areas.",
 related: [
 { label: "Electric vs air-operated", href: "/products/explosion-proof-vacuums" },
 { label: "Air-operated range", href: "/products/pneumatic-vacuums" },
 ],
 },
 {
 id: "hepa-vs-ulpa",
 category: "selection",
 question: "What is the difference between HEPA and ULPA filtration?",
 answer:
 "They are tested at different particle sizes and efficiencies. Standard HEPA is tested to a minimum of 99.97% efficiency at 0.3 micrometres; PrestiVac units are rated at 99.99% absolute, and factory H14 grades reach 99.995%. ULPA extends further, to 99.9995% at 0.12 micrometres. Which you need follows the requirement — the room classification, the exposure limit, or the sanitation standard — rather than a preference for the larger number. Ask what a filter is tested to rather than what it is called.",
 related: [
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 { label: "Cleanroom vacuuming", href: "/applications/cleanroom-vacuuming" },
 ],
 },
 {
 id: "do-you-supply-dust-collectors",
 category: "selection",
 question: "Do you supply dust collectors?",
 answer:
 "No. We manufacture industrial vacuums — explosion-proof, HEPA, air-operated, wet and dry, central systems and custom-built units. A dust collector is a different machine: high air volume at low suction, capturing dust at the source through fixed ducting. A vacuum is lower volume at high suction, removing what has already settled. Most dust programmes need both, and we would rather point you to a collection-system specialist for that half than sell you the wrong equipment.",
 related: [
 { label: "Vacuum vs dust collector", href: "/guides/vacuum-vs-dust-collector" },
 { label: "Combustible dust vacuums", href: "/combustible-dust" },
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 id: "which-certification-applies",
 category: "standards",
 question: "Which of your vacuums are certified, and for what?",
 answer:
 "The EX1 HEPA line is UL 1203 Certified under UL 1203 certification, covering Class I, Group D; Class II, Groups E, F and G; Temperature Code T3C, with the scope described as \"Dry Vacuum Cleaner, Model Ex 1-xx HEPA.\" Coverage varies by line and configuration, so the honest answer for any specific unit is to read it off the certificate — ask us for the documents that apply to the configuration you are specifying and to your jurisdiction. We do not claim ATEX or intrinsic-safety approvals.",
 related: [
 { label: "Hazardous location vacuums", href: "/hazardous-location-vacuums" },
 { label: "ATEX vs North American", href: "/hazardous-locations/atex-vs-north-american" },
 ],
 },
 {
 id: "one-vacuum-multiple-materials",
 category: "selection",
 question: "Can one vacuum handle several different materials?",
 answer:
 "Sometimes, but it is worth checking rather than assuming. The constraints are the most demanding material in the mix, the classification of every area the unit will enter, and whether any of the materials should be kept separate. Reactive metal fines should not be combined with other debris or with coolant, and regulated toxic materials such as lead, cadmium and beryllium call for dedicated equipment that never leaves the regulated area. A unit that also cleans the loading dock has no business in a cleanroom.",
 related: [
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "Dusts & materials directory", href: "/materials" },
 ],
 },
 {
 id: "how-often-should-we-clean",
 category: "operation",
 question: "How often should we vacuum a dust area?",
 answer:
 "That comes out of your Dust Hazard Analysis rather than a general rule, because it depends on generation rate, the surfaces involved and the material. What a good programme looks like is specific: a map of which surfaces actually accumulate — including high steel, ledges, duct tops and equipment housings — an interval assigned to each, a defined method, and a record that the pass happened. Cleaning on appearance is the pattern to move away from, because the accumulations that matter most are usually the ones nobody can see from the floor.",
 related: [
 { label: "What a DHA involves", href: "/guides/dust-hazard-analysis" },
 { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
 ],
 },
 {
 id: "why-not-compressed-air",
 category: "operation",
 question: "Why can't we use compressed air to blow down dust?",
 answer:
 "Because it deliberately creates the condition a dust programme exists to prevent. A dust deflagration needs the dust dispersed into a cloud, and blowdown does exactly that — often in an area that already has confinement and ignition sources. It also relocates material rather than removing it, so the same dust settles somewhere else in the building, frequently somewhere less accessible. Vacuum recovery with retained filtration takes the material out instead.",
 related: [
 { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
 { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
 ],
 },
 {
 id: "what-is-immersion-separation",
 category: "operation",
 question: "What is immersion separation, and when is it needed?",
 answer:
 "It is an approach where recovered material is drawn into a liquid medium rather than collected dry, so reactive fines stay wetted instead of accumulating in a container where heat can build. It comes up with reactive metal dusts — aluminium, magnesium, titanium and zirconium in particular — where dry accumulation of fines is the failure mode you most want to design out. Whether it is appropriate is a material-specific decision, not a default, and it should follow from your assessment of the dust rather than from a product preference.",
 related: [
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "Wet & dry systems", href: "/products/wet-dry-systems" },
 ],
 },
 {
 id: "do-you-build-custom",
 category: "selection",
 question: "Do you build custom systems?",
 answer:
 "Yes — custom-built systems are part of the range, and with more than 200 versions built over the years most requirements have a precedent. The useful thing to bring is constraints rather than a specification: the material, the area classification, the duty cycle, the footprint available, and how recovered material needs to leave the building. Those five determine what can be built, and asking early about the certification documents your compliance process will require means the build produces them.",
 related: [
 { label: "Custom engineered systems", href: "/products/custom-engineered-systems" },
 { label: "All products", href: "/products" },
 ],
 },
 {
 id: "anti-static-vs-esd",
 category: "explosion-safety",
 question: "Is an anti-static vacuum the same as an ESD-safe vacuum?",
 answer:
 "No, though the physics overlaps. Anti-static construction in dust handling exists to stop a static discharge igniting combustible dust — the goal is area safety. ESD-safe equipment in electronics exists to stop electrostatic discharge damaging sensitive components — the goal is protecting product. Both rely on controlled conductivity and a path to ground, but they are specified against different requirements. Battery and semiconductor operations frequently need both, and should say so explicitly rather than assuming one covers the other.",
 related: [
 { label: "ESD & anti-static vacuums", href: "/guides/esd-anti-static-vacuums" },
 { label: "Electronics deep dive", href: "/industries/electronics" },
 ],
 },
 {
 id: "what-makes-explosion-proof",
 category: "explosion-safety",
 question: "What makes a vacuum explosion proof?",
 answer:
 "Every component in the recovery path is engineered so it cannot become an ignition source: conductive, grounded and bonded construction from hose tip to chassis, non-sparking contact materials, filtration that keeps fine dust away from the power unit, and a drive suited to the environment — dust-ignition-protected electrics where permitted, or fully air-operated units with no electrical components at all.",
 related: [
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 ],
 },
 {
 id: "regular-shop-vacuum",
 category: "explosion-safety",
 question: "Why can't I use a regular shop vacuum?",
 answer:
 "A standard vacuum concentrates the hazard: its motor sparks by design, its plastic hose generates static charge exactly where dust concentration is highest, and its exhaust re-suspends the finest particles back into the air. With combustible dust, that combines fuel, dispersion and ignition source in one tool.",
 related: [
 { label: "What is combustible dust?", href: "/resources/combustible-dust-solutions" },
 { label: "Dust Risk Checker", href: "/resources/risk-checker" },
 ],
 },
 {
 id: "need-explosion-proof",
 category: "explosion-safety",
 question: "Do I need an explosion-proof vacuum?",
 answer:
 "If the dust in your facility is combustible — and most fine organic powders and metal fines are — housekeeping equipment must be engineered for it. The trigger is usually a Dust Hazard Analysis identifying combustible dust, or a classified area rating that governs every piece of equipment used there. When in doubt, have the material tested and speak with an engineer.",
 related: [
 { label: "Dust Hazard Analysis", href: "/resources/dust-hazard-analysis" },
 { label: "Solution Finder", href: "/#solution-finder" },
 ],
 },
 {
 id: "what-is-combustible-dust",
 category: "explosion-safety",
 question: "What is combustible dust and why is it dangerous?",
 answer:
 "Fine particles that can ignite and burn rapidly when suspended in air — and explode when confined. Flour, sugar, grain, wood, most plastics and nearly all metal fines qualify. Settled dust is the fuel for devastating secondary explosions: a layer as thin as 1/32 of an inch over a small fraction of a room can constitute a hazard.",
 related: [
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "Bakery flour dust case study", href: "/case-studies/flour-dust-commercial-bakery" },
 ],
 },
 {
 id: "ignite-inside-vacuum",
 category: "explosion-safety",
 question: "Can combustible dust ignite inside a vacuum?",
 answer:
 "Inside unrated equipment, yes — sparking motors, static discharge and hot surfaces are all present where dust concentration peaks. Engineered systems remove those ignition sources: grounded conductive paths control static, power units are protected or air-operated, and for reactive metal fines, immersion separation collects the material directly into a liquid bath.",
 related: [
 { label: "Product Explorer", href: "/#explorer" },
 { label: "Aluminum Dust", href: "/materials/aluminum-dust" },
 ],
 },
 {
 id: "which-standards-apply",
 category: "standards",
 question: "What standards apply to combustible dust housekeeping?",
 answer:
 "NFPA 652 sets the fundamentals, including the Dust Hazard Analysis requirement; NFPA 654 covers combustible particulate processing, NFPA 484 covers metals, with NFPA 61 and 664 for food and wood facilities — all consolidating into NFPA 660. OSHA enforces housekeeping under its Combustible Dust National Emphasis Program. Your DHA and local authority govern what applies to your site.",
 related: [
 { label: "NFPA Standards Guide", href: "/resources/nfpa-guide" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Standards & Compliance", href: "/#compliance" },
 ],
 },
 {
 id: "class-ii-div-1",
 category: "standards",
 question: "What is a Class II Division 1 area?",
 answer:
 "A North American electrical-area classification where combustible dust is present in the air under normal operating conditions (Division 1) or only under abnormal conditions (Division 2). Equipment used in these areas must be suitable for the classification — which is why fully air-operated vacuums, with no electrical components, are a common choice there.",
 related: [
 { label: "Pneumatic Vacuums", href: "/products/pneumatic-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 ],
 },
 {
 id: "atex-vs-iecex",
 category: "standards",
 question: "What is the difference between ATEX and IECEx?",
 answer:
 "ATEX is the European Union's legal framework for equipment used in potentially explosive atmospheres; IECEx is the international certification scheme built on the same IEC standards. Both use comparable zone concepts for dust (Zones 20, 21, 22). Which applies depends on where the equipment operates — North American sites typically follow the NEC class/division system instead.",
 related: [
 { label: "NFPA Standards Guide", href: "/resources/nfpa-guide" },
 ],
 },
 {
 id: "hepa-required",
 category: "standards",
 question: "Is HEPA filtration required for combustible dust?",
 answer:
 "Not universally mandated — but practically essential for fine dust. HEPA at 99.99% efficiency keeps captured fines captured instead of exhausting them back into the plant air, which matters for combustible loading, operator exposure and product hygiene alike. For potent or toxic powders, filtration level is usually driven by exposure limits rather than combustibility.",
 related: [
 { label: "HEPA Vacuums", href: "/products/hepa-vacuums" },
 { label: "Pharma tablet plant case study", href: "/case-studies/lactose-dust-pharmaceutical-tablet" },
 ],
 },
 {
 id: "choosing-a-vacuum",
 category: "selection",
 question: "How do I choose the right industrial vacuum?",
 answer:
 "Start from the material: is it combustible, toxic, wet or abrasive? Then the environment: is the area classified? Then the duty: how much, how often, over what distances? Those answers determine construction, filtration, power source and whether a portable unit or a central system fits. Our solution finder walks through exactly these questions.",
 related: [
 { label: "Solution Finder", href: "/#solution-finder" },
 { label: "All products", href: "/products" },
 ],
 },
 {
 id: "what-is-central-vacuum",
 category: "selection",
 question: "What is a central vacuum system?",
 answer:
 "A fixed installation: a remote power unit and separator connected to inlet drops throughout the facility through engineered piping. Operators clean at each drop without moving equipment, and collected material consolidates at a single discharge point. Central systems suit facilities with many cleaning points or continuous housekeeping demand.",
 related: [
 { label: "Central Vacuum Systems", href: "/products/central-vacuum-systems" },
 { label: "Layout Estimator", href: "/products#layout-estimator" },
 ],
 },
 {
 id: "vacuum-aluminum-safely",
 category: "applications",
 question: "Can I vacuum aluminum dust safely?",
 answer:
 "Yes — with equipment engineered for it. Fine aluminum is among the most severe combustible metal dusts, governed by NFPA 484. Safe recovery means grounded, bonded, explosion-proof construction, and for fine or reactive fractions, immersion separation that collects the material directly into a liquid bath. In classified areas, air-operated units remove electrical ignition sources entirely.",
 related: [
 { label: "Aluminum Dust", href: "/materials/aluminum-dust" },
 { label: "Automotive case study", href: "/case-studies/aluminum-dust-automotive-machining" },
 ],
 },
 {
 id: "cnc-machine-cleaning",
 category: "applications",
 question: "What's the right way to clean CNC machines and enclosures?",
 answer:
 "Vacuum recovery at the machine — never compressed-air blowdown, which turns settled chips and fines into an airborne cloud. A wet/dry industrial unit handles chips, fines and coolant together; where the material is a combustible metal, the vacuum must be explosion-proof and grounded, with immersion options for fine fractions.",
 related: [
 { label: "CNC Machining application", href: "/applications/cnc-machining" },
 { label: "Wet & Dry Systems", href: "/products/wet-dry-systems" },
 ],
 },
 {
 id: "wet-and-dry",
 category: "operation",
 question: "Can one vacuum handle both liquids and dry dust?",
 answer:
 "Only if it's designed for it. Wet & dry systems are configured for coolant, wash-down water and slurry as readily as dry material — and where the dry fraction is combustible, the unit needs explosion-proof wet recovery configuration. Putting liquids into a dry-only vacuum ruins filtration and can create hazards of its own.",
 related: [
 { label: "Wet & Dry Systems", href: "/products/wet-dry-systems" },
 ],
 },
 {
 id: "filter-replacement",
 category: "operation",
 question: "How often should filters be replaced?",
 answer:
 "By condition, not just calendar: rising pressure drop and falling suction are the practical signals, with frequency driven by duty cycle and material. With combustible or hazardous dust, filter service is part of the housekeeping program itself — captured material and spent filters are handled and disposed of in sealed containers.",
 related: [
 { label: "Accessories & filters", href: "/products/accessories" },
 ],
 },
];
