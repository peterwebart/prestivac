import type { CaseStudy } from "@/lib/data/case-study-types";

export const coatingPowderAutomotiveFinishing: CaseStudy = {
 slug: "coating-powder-automotive-finishing",
 title: "Controlling Coating Powder in an Automotive Finishing Operation",
 subtitle:
 "How a representative automotive components finisher brought fugitive coating powder and color-change cleanout under control — grounded recovery in a process that charges combustible polymer dust on purpose.",
 date: "2026-07-15",
 readingTime: 8,
 hero: {
 industry: "Automotive",
 hazard: "Combustible polymer dust in an electrostatic process",
 material: "Coating powder (epoxy / polyester)",
 standards: ["NFPA 660 / 652", "NFPA 33", "OSHA NEP"],
 },
 executiveSummary: [
 "A representative automotive components finishing plant — the kind that powder-coats wheels, brackets, frames and trim for the major vehicle producers — runs multiple electrostatic spray booths across two shifts. The booths reclaim overspray by design; that part of the process worked. What the plant hadn't engineered was everything outside the booth's own capture: fugitive powder settling on structure and equipment, hopper and feed-area spills, rack and fixture buildup, and the color-change cleanout that gated the production schedule.",
 "The hazard profile has a built-in irony. Coating powders are combustible polymer dusts — squarely inside NFPA 33's spray-application scope and NFPA 652/660's Dust Hazard Analysis obligation — and the process deliberately charges that powder electrostatically. Cleaning the environment with unrated vacuums and compressed-air blowdown meant adding ignition-capable equipment and dispersion events to a space already saturated with charge. The facility's DHA flagged exactly that, along with cross-contamination between the waste and reclaim powder streams.",
 "The engineered response: explosion-proof HEPA vacuums with grounding verified before every use — the non-negotiable in an electrostatic process — a defined color-change method that made cleanout a scheduled single pass instead of an open-ended scramble, booth-perimeter and elevated surfaces on their own frequency, and a stream-separation rule: vacuum-collected powder is waste, always sealed, never near the reclaim system.",
 ],
 projectOverview: [
 { label: "Facility type", value: "Automotive components finishing plant" },
 { label: "Processes", value: "Pretreatment, electrostatic powder application, curing, racking and packing" },
 { label: "Environment", value: "Multiple spray booths; two-shift operation with frequent color changes" },
 { label: "Dust generation points", value: "Booth openings and perimeters, hopper and feed areas, racks and fixtures, color-change cleanout" },
 { label: "Housekeeping challenge", value: "Fugitive combustible polymer powder in a deliberately electrostatic environment" },
 { label: "Potential ignition sources", value: "Unrated vacuum motors, static discharge, spray equipment, cure-oven proximity" },
 ],
 industryBackground: [
 "Powder coating works by giving finely ground polymer powder — epoxies, polyesters and their hybrids — an electrostatic charge and spraying it at grounded parts, which the charged particles wrap and cling to before an oven fuses them into a continuous film. The cured film is inert; the uncured powder is the dust, and it is a combustible organic dust like most fine polymers.",
 "The booth is a recovery system in its own right: overspray is pulled through the booth's capture and either reclaimed for reuse or collected as waste, because coating powder is expensive enough that reclaim economics matter. But booth capture is bounded by the booth. Fugitive powder escapes at openings, rides parts and racks out on the conveyor, spills at hoppers and feed lines, and settles on the structure around the finishing area — the fraction no booth was ever going to own.",
 "The electrostatic nature of the process is what sharpens the housekeeping specification. In most plants, static is an incidental hazard to be controlled; in a powder coating operation, charge is the operating principle, present by design throughout the area. That makes grounding of every piece of recovery equipment — hose, wand, canister, chassis, verified rather than assumed — the first line of the specification instead of a footnote, and it makes unrated cleanup equipment uniquely wrong for the environment.",
 ],
 challenge: [
 { area: "Safety", detail: "Combustible polymer powder accumulated beyond booth capture in a space saturated with electrostatic charge — fuel and ignition conditions assembled by the process itself." },
 { area: "Operations", detail: "Color-change cleanout sat directly on the production schedule; slow, improvised cleaning stretched every changeover." },
 { area: "Compliance", detail: "The DHA flagged unrated vacuums, blowdown practices and undocumented methods — exposure under NFPA 33/660 expectations and the OSHA Combustible Dust NEP." },
 { area: "Maintenance", detail: "Fugitive powder migrated into conveyor mechanisms, controls and the cure-oven vicinity — fuel settling near heat." },
 { area: "Employee exposure", detail: "Fine polymer powder at cleaning time, with chemistry-dependent handling requirements — TGIC-bearing polyesters carry stricter limits." },
 { area: "Production interruptions", detail: "Cross-contamination between waste and reclaim streams risked spoiling expensive reclaim powder and the finish quality it feeds." },
 ],
 hazardAnalysis: [
 "The explosion pentagon assembles around the booths with unusual help from the process. Fuel: fine combustible polymer powder, ground to spray-grade fineness on purpose. Oxygen: ambient. Dispersion: blowdown, sweeping, and the ordinary turbulence of color-change cleanout. Confinement: booths, ducting, hopper enclosures, the finishing bay itself. Ignition: the process supplies electrostatic charge by design — the specification's job is to make sure the recovery path adds none of its own.",
 "NFPA 33 governs spray application of combustible materials and meets the combustible-dust fundamentals of NFPA 652 — the Dust Hazard Analysis obligation — now carried into the consolidated NFPA 660. Between them, the expectations are consistent: control accumulations, use appropriate recovery equipment, and retire methods that suspend dust clouds.",
 "The secondary-explosion mechanism gives fugitive powder its significance. Settled polymer fines on beams, ledges and equipment tops are the fuel for the event after the event; published guidance treating layers as thin as 1/32 of an inch as credible hazard sets a trigger a busy finishing line reaches between deep cleans — especially where blowdown keeps redistributing the inventory instead of removing it.",
 "Cure-oven proximity deserves its own line: fugitive powder settling near sustained heat is fuel positioned next to an ignition-adjacent zone. Perimeter frequency around ovens, with grounded vacuum recovery, converts that from a standing condition into a managed one.",
 ],
 pentagon: [
 { element: "Fuel", presence: "Fine epoxy/polyester coating powder — fugitive, spilled and residual" },
 { element: "Oxygen", presence: "Ambient finishing-bay atmosphere" },
 { element: "Dispersion", presence: "Blowdown, sweeping, color-change cleanout turbulence" },
 { element: "Confinement", presence: "Booths, ducting, hopper enclosures, bay volume" },
 { element: "Ignition", presence: "Electrostatic charge by process design; unrated cleanup equipment" },
 ],
 siteAssessment: [
 "Fugitive powder film on structure, conveyor components and surfaces around booth openings",
 "Compressed-air blowdown in routine use for booth walls and color-change cleanout",
 "Consumer-grade vacuums — sparking motors, plastic hoses, no grounding — in service beside electrostatic equipment",
 "Powder accumulation at hopper and feed areas renewed every shift",
 "Vacuum-collected and swept powder stored open, adjacent to the reclaim system",
 "No defined perimeter frequency around cure ovens",
 ],
 solution: [
 "The specification led with grounding, because the environment demanded it: explosion-proof HEPA vacuums with a bonded conductive path from nozzle to chassis, verified before every use — not because coating powder is the most severe dust in this library, but because the process guarantees charge will be present when the equipment is.",
 "Color change became a method instead of a scramble: a defined sequence with grounded tools, single-pass vacuum cleanout of booth interior, hopper and feed area, HEPA-retained exhaust so fines from the outgoing color never ride the air into the incoming one, and a duration the production schedule can actually plan around.",
 "Two program rules completed it. Stream separation: vacuum-collected powder is waste — sealed containers, stored away from the reclaim system, no exceptions — so reclaim purity is protected by rule rather than vigilance. And perimeter frequency: booth surroundings, elevated surfaces and the cure-oven vicinity on defined vacuum schedules, retiring blowdown from the finishing bay entirely.",
 ],
 equipment: [
 { item: "Explosion-proof HEPA vacuums (EVX series, e.g. EVX-15 EX)", purpose: "Booth cleanout, hopper areas and fugitive-powder recovery" },
 { item: "Static-dissipative hose assemblies", purpose: "Continuous conductive path in an electrostatic environment" },
 { item: "Grounded stainless wands, crevice and detail tools", purpose: "Non-sparking contact for booth interiors, racks and fixtures" },
 { item: "Tested HEPA final-stage filtration (99.99% at 0.3 µm)", purpose: "Fines retained — color integrity and exposure control together" },
 { item: "Bonding and grounding kits with verification points", purpose: "Grounding checked before every use, not assumed" },
 { item: "Sealed waste containers, segregated from reclaim", purpose: "Stream separation by rule" },
 { item: "Extension wand kit for elevated surfaces", purpose: "Perimeter and overhead frequency without lifts" },
 ],
 implementation: [
 { phase: "Assessment", detail: "Walk-down of booths, hoppers, racks and oven perimeters; method audit against the DHA and NFPA 33 expectations." },
 { phase: "Planning", detail: "Color-change method definition; perimeter frequency map; waste-versus-reclaim routing." },
 { phase: "Training", detail: "Operator sessions on grounding verification, the color-change sequence and stream separation." },
 { phase: "Commissioning", detail: "Grounding continuity per station; suction and filtration verification against specification." },
 { phase: "Operator education", detail: "Method cards at each booth; changeover checklist at the schedule board." },
 { phase: "Maintenance program", detail: "Condition-based filter service and grounding re-verification folded into PM." },
 ],
 beforeAfter: [
 { aspect: "Color-change cleanout", before: "Open-ended blowdown and improvisation", after: "Defined single-pass vacuum method with plannable duration" },
 { aspect: "Recovery equipment", before: "Unrated consumer vacuums beside electrostatic gear", after: "Explosion-proof HEPA units, grounding verified before use" },
 { aspect: "Fugitive powder", before: "Redistributed by blowdown", after: "Captured at source; perimeter surfaces on defined frequency" },
 { aspect: "Cure-oven vicinity", before: "No defined cleaning frequency", after: "Scheduled grounded vacuum passes" },
 { aspect: "Waste vs reclaim streams", before: "Open containers adjacent to reclaim", after: "Sealed waste containers, segregated by rule" },
 { aspect: "Housekeeping basis", before: "Undocumented, changeover-driven", after: "Zoned schedule aligned to the DHA" },
 ],
 compliance: [
 "The engineered program supports compliance with NFPA 33's expectations for spray application of combustible materials and with the combustible-dust fundamentals NFPA 652 established — the DHA-informed housekeeping program, appropriate recovery equipment and the elimination of dust-suspending methods — as carried into the consolidated NFPA 660.",
 "It supports the housekeeping expectations enforced under OSHA's Combustible Dust National Emphasis Program: documented frequencies, appropriate equipment, and blowdown retired from routine practice.",
 "Chemistry-dependent exposure handling — including the stricter requirements around TGIC-bearing powders — is supported by capture-at-source, HEPA-retained exhaust and sealed disposal. Component certifications and listings vary by model and configuration; documentation is supplied per application, and the program is described throughout as supporting compliance rather than conferring it.",
 ],
 operationalImprovements: [
 "Color change became plannable: a defined single-pass method with fixed tools has a duration the schedule can commit to, instead of an open-ended cleanout that stretched every changeover.",
 "Finish quality is protected by mechanism: HEPA-retained exhaust and stream separation keep outgoing-color fines out of the incoming color and contamination out of the reclaim system.",
 "Fugitive accumulation stays inside its targets — perimeter and elevated surfaces on defined frequency end the blowdown redistribution cycle that kept resetting the problem.",
 "Operator exposure during cleaning drops by design: capture at the nozzle with retained exhaust replaces the methods that put fine polymer powder airborne at breathing height. (Improvements are stated by mechanism; this representative scenario publishes no fabricated percentages.)",
 ],
 technical: [
 "Why grounding leads the specification here: the process charges powder deliberately, so the finishing bay is an environment where static is guaranteed rather than incidental. Recovery equipment must be part of the grounded system — conductive hose bonded through wand, canister and chassis, verified before use — because anything else introduces an isolated conductor into a charged space.",
 "Why cured versus uncured is the operative distinction: the fused film on a finished part is inert; the hazard is the uncured powder — fugitive, spilled or residual. The housekeeping program targets the powder state, which is why booth perimeters, hoppers and changeout matter and finished racks don't.",
 "Why stream separation is a rule, not a preference: reclaim powder feeds finish quality and carries real cost, and floor-collected material is contaminated by definition. Sealed, segregated waste containers make the boundary physical — vigilance-based separation fails on the busiest day, which is exactly when changeovers stack up.",
 "Why HEPA earns its place twice: the fine fraction that threatens the DHA is the same fraction that drifts into the next color's air. A tested 99.99% at 0.3 µm final stage serves the safety program and the quality program with one filter.",
 ],
 faqs: [
 {
 question: "Is powder coating powder really combustible?",
 answer:
 "Yes — coating powders are finely ground polymers (epoxies, polyesters, hybrids), and fine polymer dusts are combustible organic dusts. NFPA 33 governs the spray application; the combustible-dust fundamentals of NFPA 652/660 apply to the housekeeping.",
 },
 {
 question: "The booth already recovers overspray — what's left to manage?",
 answer:
 "Everything outside the booth's capture: fugitive powder on structure and equipment, hopper and feed spills, rack and fixture buildup, and the color-change cleanout itself. The booth is a process recovery system, not a housekeeping program.",
 },
 {
 question: "Why is grounding so emphasized in powder coating?",
 answer:
 "Because the process charges powder electrostatically on purpose — static is present by design, not by accident. Recovery equipment must be part of the grounded system, verified before use; an ungrounded vacuum is an isolated conductor in a charged space.",
 },
 {
 question: "Can vacuum-collected powder go back into the reclaim system?",
 answer:
 "No — floor-collected and fugitive powder is contaminated by definition and is treated as waste in sealed, segregated containers. Reclaim purity lives in the booth's own recovery loop; keeping the streams separate protects it by rule.",
 },
 {
 question: "Does the cured coating create a dust hazard?",
 answer:
 "The fused film on finished parts is inert. The hazard is the uncured powder — which is why the program targets booth perimeters, hoppers, changeovers and fugitive settlement rather than finished work.",
 },
 {
 question: "Why does color change drive the housekeeping method?",
 answer:
 "Because it's the most frequent, most schedule-critical cleaning event in the operation. A defined single-pass vacuum method gives it a plannable duration and keeps outgoing-color fines out of the incoming color's air.",
 },
 {
 question: "What about TGIC powders?",
 answer:
 "TGIC-bearing polyesters carry stricter exposure handling than most coating chemistries. Capture-at-source with HEPA-retained exhaust and sealed disposal is the recovery-side answer; your chemistry's documentation governs the specifics.",
 },
 {
 question: "Why keep a cleaning frequency around the cure ovens?",
 answer:
 "Fugitive powder settling near sustained heat is fuel positioned beside an ignition-adjacent zone. A defined perimeter frequency with grounded vacuum recovery keeps that condition managed instead of standing.",
 },
 ],
 relatedIndustries: [
 { label: "Automotive", href: "/#automotive" },
 { label: "Paints & Coatings", href: "/industries#paints-coatings" },
 { label: "Metalworking", href: "/#metalworking" },
 ],
 relatedProducts: [
 "explosion-proof-vacuums",
 "hepa-vacuums",
 "industrial-vacuums",
 "accessories",
 ],
 takeaways: [
 "The booth is a process recovery system, not a housekeeping program — fugitive powder, hoppers, racks and changeovers need an owner.",
 "In an electrostatic process, grounding leads the specification: verified before use, because charge is guaranteed by design.",
 "Color change is the schedule-critical cleaning event — give it a defined single-pass method with a plannable duration.",
 "Cured film is inert; uncured powder is the dust. Target the powder state.",
 "Stream separation by rule: vacuum-collected powder is waste, sealed and segregated — reclaim purity is protected physically, not by vigilance.",
 "One HEPA stage serves two programs: the DHA's fine fraction and the next color's air are the same particles.",
 ],
 taxonomy: {
 industry: "Automotive",
 application: "Powder Coating",
 hazard: "Combustible Polymer Dust in an Electrostatic Process",
 material: "Coating Powder (Epoxy / Polyester)",
 process: "Electrostatic Powder Application & Color Change",
 dustClass: "Combustible Organic (Polymer) Dust",
 facilityType: "Automotive Components Finishing Plant",
 standards: ["NFPA 660", "NFPA 652", "NFPA 33", "OSHA NEP"],
 products: ["EVX Series explosion-proof HEPA vacuums", "Static-dissipative hose & tool kits", "Extension wand kits", "Sealed waste containers"],
 personas: ["Plant Manager", "EHS Manager", "Finishing Line Supervisor", "Maintenance Manager"],
 cluster: ["Automotive", "Combustible Polymer Dust", "Powder Coating", "Explosion-Proof HEPA Vacuums"],
 },
 seo: {
 metaTitle: "Coating Powder Control in Automotive Finishing | Case Study",
 metaDescription:
 "Representative case study: how an automotive finishing plant controls combustible coating powder — grounded explosion-proof HEPA recovery, color-change methods and stream separation under NFPA 33/660.",
 keywords: [
 "powder coating dust collection",
 "coating powder combustible dust",
 "NFPA 33 housekeeping",
 "color change cleanout",
 "electrostatic powder recovery",
 "powder coating booth cleaning",
 ],
 },
};
