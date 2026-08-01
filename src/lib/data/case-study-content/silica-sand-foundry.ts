import type { CaseStudy } from "@/lib/data/case-study-types";

export const silicaSandFoundry: CaseStudy = {
 slug: "silica-sand-foundry",
 title: "Controlling Silica Sand & Reactive-Metal Dust in a Foundry",
 subtitle:
 "How a representative jobbing foundry runs housekeeping on the oldest dust hazard and the hottest floor at once — silica sand keyed to the exposure standards while shakeout concentrates the respirable fraction, and reactive-metal casting cells carry their own combustible-dust rules on the same shop floor.",
 date: "2026-07-18",
 readingTime: 9,
 hero: {
 industry: "Foundries & Casting",
 hazard: "Respirable crystalline silica; reactive-metal fines",
 material: "Silica sand & aluminum casting dust",
 standards: ["OSHA 1910.1053", "NFPA 660 / 484", "NFPA 660 / 61"],
 },
 executiveSummary: [
 "A representative jobbing foundry — pouring aluminum and gray iron on the same floor, with a green-sand molding line, mechanical shakeout, sand reclamation, and a fettling and grinding room — carries two distinct dust programs on one shop floor. The dominant hazard is the oldest documented occupational disease in industry: respirable crystalline silica, liberated wherever the sand system mixes, molds, shakes out and reclaims. It is governed not by a combustible-dust framework but by OSHA's respirable crystalline silica standard, 29 CFR 1910.1053, with a permissible exposure limit of 50 micrograms per cubic meter and no safe exposure level established.",
 "The second program overlaps it in space. The aluminum casting cells generate reactive-metal fines during grinding and finishing — a combustible-metal hazard under the framework NFPA 484 established, now consolidated into NFPA 660 — and gray iron work adds its own dust. A single housekeeping regime therefore has to satisfy an exposure standard measured in micrograms and a deflagration standard measured in accumulation depth, sometimes on adjacent equipment.",
 "The engineered response separated the logic by hazard while unifying the equipment discipline. Silica-bearing areas — shakeout, reclamation, molding and their surrounds — run HEPA-retained recovery on frequencies keyed to the exposure standard's controls, with shakeout treated as the concentration peak it is. The aluminum finishing cells run explosion-proof recovery under the combustible-metal rules, dedicated and never cross-used with the iron or sand streams. Grounded equipment, the cooled-material rule, and sealed disposal apply floor-wide, because a foundry floor is hot everywhere and mixes streams by default.",
 ],
 projectOverview: [
 { label: "Facility type", value: "Jobbing foundry — aluminum & gray iron on one floor" },
 { label: "Processes", value: "Sand mulling, molding, core making, melting, pouring, shakeout, reclamation, fettling & grinding" },
 { label: "Environment", value: "Hot floor throughout; adjacent silica and reactive-metal streams" },
 { label: "Dust generation points", value: "Muller, molding line, shakeout, reclaim system, grinding room, furnace maintenance" },
 { label: "Housekeeping challenge", value: "An exposure standard (µg/m³) and a deflagration standard (layer depth) on one floor" },
 { label: "Potential ignition sources", value: "Molten metal and pours, hot castings, grinding sparks, unrated equipment, static" },
 ],
 industryBackground: [
 "Foundry work is the historic silica industry — the trade where silicosis was first characterized at industrial scale, and the disease record here predates by decades the standards that now govern the exposure. The mechanism is intrinsic to sand casting: silica sand is the mold medium, and every step that forms, breaks or recycles a mold liberates respirable quartz fines. Unlike combustible dusts, the primary silica hazard is not fire but disease, and its governing instrument is OSHA's respirable crystalline silica standard, 29 CFR 1910.1053, with a numeric permissible exposure limit and mandated exposure controls.",
 "Shakeout is the defining event. Separating the solidified casting from its sand mold — mechanically, with vibration and impact — liberates burned sand and the finest quartz fraction at the highest rate anywhere in the plant. Sand reclamation compounds it: each reuse cycle thermally and mechanically abrades the sand, milling the grains finer and concentrating the respirable fraction as a feature of the process, not a defect. A silica program in a foundry is therefore built around these two operations first, with molding and general surrounds following.",
 "The second hazard rides on the metal side. Foundries pouring aluminum and magnesium generate reactive-metal fines during grinding and finishing that fall under the combustible-metal framework NFPA 484 built and NFPA 660 now consolidates — a genuine deflagration hazard demanding explosion-proof recovery and dedicated, never-cross-used equipment. Where a foundry pours reactive metals and casts in silica sand under one roof, the two programs share a floor but never share a vacuum: mixing an aluminum-fines stream with an iron-and-sand stream is precisely the cross-contamination the metal rules forbid.",
 ],
 challenge: [
 { area: "Safety", detail: "Two hazard classes on one floor — respirable silica as a disease exposure, reactive-metal fines as a deflagration risk — with different controls sometimes required on adjacent equipment." },
 { area: "Operations", detail: "Shakeout and reclamation generate silica continuously through the production day; brooms and compressed air redistributed the finest fraction instead of removing it." },
 { area: "Compliance", detail: "Silica-bearing areas had no housekeeping keyed to the 1910.1053 controls, and the aluminum cells had no dedicated combustible-metal recovery — dual exposure." },
 { area: "Maintenance", detail: "Fine sand worked into drives, bearings and switchgear; reclaimed-sand fines migrated far beyond the shakeout area on foot and forklift traffic." },
 { area: "Employee exposure", detail: "Respirable quartz at shakeout and grinding — invisible at the size that reaches the deep lung, and put airborne by exactly the dry methods in use." },
 { area: "Production interruptions", detail: "A reactive-metal event in the finishing cells would be facility-scale; the silica exposure was a chronic-health liability accruing every shift." },
 ],
 hazardAnalysis: [
 "The silica hazard is toxicological, not combustible, and the distinction drives the whole program. Crystalline silica is an inert mineral — it does not burn or explode — so the pentagon framework does not apply to it. What applies is the exposure pathway: respirable particles, far too fine to see, penetrating to the deep lung and causing silicosis and lung cancer over time. The controlling number is OSHA's 50 µg/m³ permissible exposure limit, and the controlling insight is that a visibly clean floor proves nothing about the respirable fraction.",
 "The reactive-metal hazard, by contrast, does assemble the pentagon. In the aluminum finishing cells: fuel as fine aluminum grinding dust; oxygen ambient; dispersion from grinding and any blowdown; confinement in equipment, ducts and low points; ignition from grinding sparks, hot surfaces, unrated equipment and static. This is a genuine deflagration scenario governed by the combustible-metal framework, and it demands explosion-proof recovery and dedicated handling — the opposite discipline from a nuisance-dust cleanup.",
 "Shakeout concentrates the silica exposure the way an elevator leg concentrates grain dust — it is the single operation where the respirable fraction peaks, because breaking the mold is precisely the act of shattering bonded sand back into fine particles. Reclamation extends the peak: milling the sand finer with each cycle means the reclaim system handles a progressively more respirable stream. The program's frequencies are weighted to these operations accordingly.",
 "Cross-contamination is its own hazard on a mixed floor. The reactive-metal rules forbid combining an aluminum-fines stream with other materials, because the combustible fraction's behavior changes unpredictably in a mixture — and because a vacuum used on both becomes a path between them. Dedicated, labeled, never-cross-used recovery for the aluminum cells is not an efficiency choice; it is the metal standard's requirement, enforced by physically separate equipment.",
 ],
 pentagon: [
 { element: "Fuel", presence: "Reactive aluminum fines in the finishing cells (silica sand is inert — exposure, not fuel)" },
 { element: "Oxygen", presence: "Ambient atmosphere throughout the floor" },
 { element: "Dispersion", presence: "Grinding, shakeout vibration, blowdown, traffic" },
 { element: "Confinement", presence: "Grinding enclosures, ducts, reclaim equipment, low points" },
 { element: "Ignition", presence: "Grinding sparks, hot castings and pours, unrated equipment, static" },
 ],
 siteAssessment: [
 "Respirable-sand accumulation across shakeout, reclaim and molding surrounds, redistributed daily by dry methods",
 "No housekeeping frequency keyed to the 1910.1053 exposure controls in silica-bearing areas",
 "Aluminum finishing cells cleaned with the same shop vacuum used on iron and sand — a cross-contamination path",
 "Brooms and compressed air facility-wide; the finest, most respirable fraction put airborne at breathing height",
 "Reclaimed-sand fines tracked far beyond the shakeout area on foot and forklift traffic",
 "Collected material handled open; no cooled-material verification before recovery near hot operations",
 ],
 solution: [
 "The program split by hazard while unifying equipment discipline. Silica-bearing areas first: HEPA-retained recovery assigned to shakeout, reclamation, molding and their surrounds on documented frequencies keyed to the exposure standard's controls — shakeout weighted as the concentration peak, reclaim treated as a progressively finer stream. The logic is exposure control: capture the respirable fraction at the source before it reaches breathing height, and never re-suspend it with dry methods again.",
 "The aluminum finishing cells got a separate, dedicated program: explosion-proof recovery under the combustible-metal framework, physically distinct and labeled, never cross-used with the iron or sand streams. This equipment satisfies the deflagration standard the silica gear does not address, and its separation is itself a control — the vacuum can never become a path between the reactive-metal stream and anything else on the floor.",
 "Floor-wide disciplines tied the two together. Grounded, bonded equipment throughout — because a foundry floor generates static and ignition sources everywhere; the cooled-material rule enforced without exception, since castings, slag and spills hold heat and smoldering material never enters any unit; and sealed disposal closing every stream. Dry sweeping and compressed air were retired shop-wide, and the housekeeping schedule was documented per area against the standard each area answers to — micrograms on the sand side, accumulation depth on the metal side.",
 ],
 equipment: [
 { item: "Explosion-proof vacuums (EVX series, e.g. EVX-25 EX RCT HEPA)", purpose: "Dedicated reactive-metal recovery in the aluminum finishing cells — never cross-used" },
 { item: "HEPA industrial vacuums (EX1 series, e.g. EX1-25 RCT HEPA)", purpose: "Silica recovery at shakeout, reclamation and molding surrounds" },
 { item: "Long-reach and floor tool kits", purpose: "Shakeout structure, reclaim equipment surrounds and molding-line ledges" },
 { item: "Static-dissipative hose assemblies", purpose: "Continuous conductive path on both programs" },
 { item: "Grounded stainless floor tools and crevice nozzles", purpose: "Burned-sand accumulation and grinding-cell fines" },
 { item: "Tested HEPA final-stage filtration (99.99% at 0.3 µm)", purpose: "Respirable quartz retained — the exposure fraction stays captured" },
 { item: "Bonding and grounding kits with verification points", purpose: "Charge control checked at commissioning and on PM" },
 { item: "Sealed collection containers", purpose: "Contained disposal — silica and reactive-metal streams kept separate" },
 ],
 implementation: [
 { phase: "Assessment", detail: "Floor walk-down mapping silica-bearing areas against 1910.1053 and reactive-metal cells against the combustible-metal framework; method audit." },
 { phase: "Planning", detail: "Two frequency maps — exposure-keyed on the sand side, accumulation-keyed on the metal side; equipment separation plan for the aluminum cells." },
 { phase: "Training", detail: "Operator sessions on the two programs, why the aluminum vacuum is never cross-used, grounding checks and the cooled-material rule." },
 { phase: "Commissioning", detail: "Grounding continuity per station; suction and HEPA verification; dedicated-equipment labeling and storage separation." },
 { phase: "Operator education", detail: "Area method cards distinguishing silica from reactive-metal zones; cooled-material verification posted at hot operations." },
 { phase: "Maintenance program", detail: "Housekeeping schedule documented per area and standard; filter service on condition; separation audited on PM." },
 ],
 beforeAfter: [
 { aspect: "Silica-bearing areas", before: "No exposure-keyed frequency; dry methods", after: "HEPA recovery keyed to the 1910.1053 controls; shakeout weighted" },
 { aspect: "Aluminum finishing cells", before: "Shared shop vacuum — a cross-contamination path", after: "Dedicated explosion-proof recovery, never cross-used" },
 { aspect: "Cleaning method", before: "Brooms and compressed air facility-wide", after: "Grounded vacuum recovery; blowdown retired shop-wide" },
 { aspect: "Respirable fraction", before: "Redistributed at breathing height", after: "Captured at source with tested HEPA retention" },
 { aspect: "Hot material", before: "No cooled-material verification", after: "Cooled-material rule enforced without exception" },
 { aspect: "Collected material", before: "Open, streams mixed", after: "Sealed disposal; silica and metal streams separated" },
 ],
 compliance: [
 "The engineered program supports compliance with OSHA's respirable crystalline silica standard (29 CFR 1910.1053): housekeeping methods that avoid dry sweeping and compressed air where feasible alternatives exist, HEPA-filtered vacuum recovery as an exposure control, and frequencies weighted to the operations — shakeout and reclamation — where the respirable fraction concentrates. Exposure assessment and medical surveillance remain the employer's obligations under the standard.",
 "On the reactive-metal side it supports the combustible-metal requirements NFPA 484 established and NFPA 660 now consolidates: dedicated, non-cross-used recovery for the aluminum-fines stream, explosion-proof equipment in the classified finishing cells, and the accumulation discipline the framework expects — with NFPA 652's Dust Hazard Analysis obligation as the baseline across both programs.",
 "Component certifications and listings vary by model and configuration; documentation is supplied per application. The two programs are described throughout as supporting compliance with the distinct standards they answer to — an exposure standard on the silica side, a deflagration standard on the metal side — rather than conferring it, and the representative scenario publishes no fabricated exposure measurements or performance percentages.",
 ],
 operationalImprovements: [
 "Silica housekeeping became an exposure control instead of a cosmetic cleanup — frequencies weighted to shakeout and reclamation, where the respirable fraction actually concentrates, rather than spread evenly by visible mess.",
 "The reactive-metal cross-contamination path closed by physical separation — the aluminum-cell vacuum can no longer become a route between the combustible-metal stream and the rest of the floor.",
 "Reclaimed-sand migration dropped as capture moved to the source — less fine sand tracked into drives, bearings and switchgear on traffic, so the maintenance program stopped inheriting the housekeeping program's misses.",
 "Cleaning-time exposure fell by mechanism: source capture with HEPA-retained exhaust replaced the dry methods that put respirable quartz airborne at breathing height. (Improvements are stated by mechanism; this representative scenario publishes no fabricated percentages.)",
 ],
 technical: [
 "Why silica is not a pentagon problem: crystalline silica is inert — it neither burns nor explodes — so the combustible-dust framework simply does not apply to it. The controlling logic is exposure: a 50 µg/m³ limit on a respirable fraction too fine to see, which is why HEPA retention and source capture, not accumulation depth, define the silica program.",
 "Why shakeout and reclamation set the frequencies: these are the operations that shatter and re-mill bonded sand back into respirable fines, so they concentrate the exposure the way an elevator leg concentrates grain dust. Weighting the schedule to them means the program targets where the respirable fraction actually peaks, not where the floor merely looks dirty.",
 "Why the aluminum cells get their own vacuum: the combustible-metal rules forbid mixing a reactive-metal stream with other materials, and a shared vacuum is a mixing path. Dedicated, labeled, never-cross-used recovery is the standard's requirement enforced physically — separation is the control, not just good practice.",
 "Why the cooled-material rule is absolute on this floor: a foundry is hot everywhere — castings, slag, spills, grinding — and smoldering material drawn into any vacuum is a fire in the canister. Verified-cool recovery is enforced without exception precisely because the floor gives so many ways to forget it.",
 ],
 faqs: [
 {
 question: "Is foundry silica a combustible-dust hazard?",
 answer:
 "No — crystalline silica is inert; it neither burns nor explodes. It is governed as a health exposure under OSHA's respirable crystalline silica standard (29 CFR 1910.1053), with a 50 µg/m³ permissible exposure limit. The combustible-dust hazard on a foundry floor comes from the reactive-metal fines — aluminum and magnesium — not from the sand.",
 },
 {
 question: "Why can't one vacuum handle the whole floor?",
 answer:
 "Because the aluminum finishing cells generate reactive-metal fines governed by the combustible-metal framework, which forbids mixing that stream with other materials — and a shared vacuum is exactly such a mixing path. The aluminum cells run dedicated, never-cross-used explosion-proof recovery; the silica and iron streams run separate HEPA equipment. Separation is a required control.",
 },
 {
 question: "Why is shakeout singled out?",
 answer:
 "Shakeout is where the respirable silica fraction peaks — separating the casting from its mold means shattering bonded sand back into fine, airborne particles at the highest rate in the plant. Reclamation extends the peak by milling the sand finer each cycle. The housekeeping frequencies are weighted to these operations because that is where the exposure concentrates.",
 },
 {
 question: "Does wet cutting or wet sand handling solve the silica exposure?",
 answer:
 "Wet methods suppress airborne dust at the source and have their place, but slurry dries and returns as respirable dust wherever it is not recovered, and green-sand moisture does not eliminate the fines liberated at shakeout and reclamation. HEPA-retained vacuum recovery remains the housekeeping control; wet methods complement it where the process allows.",
 },
 {
 question: "What about the gray iron dust?",
 answer:
 "Iron dust is a comparatively low combustible-dust hazard and is handled on the general housekeeping program with HEPA retention for the exposure side. It is kept separate from the aluminum-fines stream — the reactive-metal separation discipline governs the whole floor, so the iron and sand streams and the aluminum stream never share recovery equipment.",
 },
 ],
 relatedIndustries: [
 { label: "Foundries & Casting", href: "/industries/foundry" },
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Silica Dust guide", href: "/materials/silica-dust" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 ],
 relatedProducts: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 takeaways: [
 "A foundry floor carries two dust programs at once: respirable silica as a health exposure under 1910.1053, and reactive-metal fines as a deflagration hazard under the combustible-metal framework.",
 "Silica is inert — the pentagon does not apply; the control is exposure-based, keyed to a 50 µg/m³ limit and a respirable fraction too fine to see.",
 "Shakeout and reclamation concentrate the respirable silica fraction and set the housekeeping frequencies — reclaimed sand gets finer, and more respirable, with every cycle.",
 "The aluminum finishing cells run dedicated, never-cross-used explosion-proof recovery — stream separation is a required control, not an efficiency preference.",
 "Grounding, the cooled-material rule and sealed disposal apply floor-wide, because a foundry is hot and mixes streams by default.",
 ],
 taxonomy: {
 industry: "Foundries & Casting",
 application: "Shakeout, reclamation & finishing housekeeping",
 hazard: "Respirable crystalline silica; reactive-metal deflagration",
 material: "Silica sand & aluminum casting dust",
 process: "Sand casting, shakeout, reclamation, fettling & grinding",
 dustClass: "Inert respirable (silica); combustible metal (aluminum)",
 facilityType: "Jobbing foundry — aluminum & gray iron",
 standards: ["OSHA 1910.1053", "NFPA 660", "NFPA 484", "NFPA 652"],
 products: ["Explosion-proof vacuums", "HEPA vacuums", "Industrial vacuums"],
 personas: ["EHS manager", "Foundry operations", "Industrial hygienist"],
 cluster: ["foundry", "silica-dust", "aluminum-dust", "metalworking"],
 },
 seo: {
 metaTitle: "Foundry Silica & Reactive-Metal Dust Control — Representative Case Study",
 metaDescription:
 "A representative foundry runs two dust programs on one floor: respirable crystalline silica under OSHA 1910.1053 and reactive-metal fines under the combustible-metal framework. Shakeout, reclamation and dedicated aluminum-cell recovery.",
 keywords: [
 "foundry silica dust",
 "respirable crystalline silica foundry",
 "shakeout dust control",
 "sand reclamation silica",
 "foundry combustible metal dust",
 "OSHA 1910.1053 foundry",
 "explosion proof vacuum foundry",
 ],
 },
};
