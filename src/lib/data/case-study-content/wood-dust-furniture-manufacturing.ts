import type { CaseStudy } from "@/lib/data/case-study-types";

export const woodDustFurnitureManufacturing: CaseStudy = {
 slug: "wood-dust-furniture-manufacturing",
 title: "Managing Wood Dust in a Furniture Manufacturing",
 subtitle:
 "How a representative national furniture manufacturer closed the gap its dust collection system was never designed to cover — the fugitive fine fraction on structure, equipment and overhead steel.",
 date: "2026-07-15",
 readingTime: 8,
 hero: {
 industry: "Wood Industry",
 hazard: "Combustible organic dust & carcinogen exposure",
 material: "Wood & engineered-panel dust",
 standards: ["NFPA 660 / 664", "OSHA NEP", "IARC Group 1 exposure"],
 },
 executiveSummary: [
 "A representative cabinet and casegoods plant — the kind a national furniture manufacturer runs at scale — machines solid wood and engineered panels across CNC routers, panel saws, wide-belt sanders and edge banders. Every machine is connected to the central dust collection system, and the plant assumed that system was the dust program. It wasn't: it was the machine program.",
 "The gap was the fugitive fraction — the fine dust that escapes hoods and enclosures at every sander edge and router pass, then settles on beams, cable trays, motor housings and light fixtures. That fraction is precisely what NFPA 664's housekeeping requirements target, it is the fuel for the secondary-explosion mechanism behind historic mill disasters, and it carries wood dust's second liability: classification as a human carcinogen (IARC Group 1). The facility's Dust Hazard Analysis flagged elevated accumulations, compressed-air blowdown at cleanup, and the unrated shop vacuums doing the rest.",
 "The engineered response drew the line the plant had been missing: the collection system keeps serving the machines; explosion-proof HEPA vacuums own the fugitive fraction. Line-side units at the sanding and routing cells, extension wand kits that put overhead steel on a routine frequency instead of an annual scramble, grounded tools and static-dissipative hoses throughout, blowdown retired, and housekeeping coordinated with hot-work permits — clean before anyone cuts or welds nearby.",
 ],
 projectOverview: [
 { label: "Facility type", value: "Furniture & cabinet manufacturing plant" },
 { label: "Processes", value: "CNC routing, panel sawing, wide-belt and edge sanding, edge banding, assembly" },
 { label: "Environment", value: "High-volume production with central machine dust collection" },
 { label: "Dust generation points", value: "Sander edges, router enclosures, saw guards, transfer and offload points" },
 { label: "Housekeeping challenge", value: "Fugitive fine dust on elevated structure and equipment between deep cleans" },
 { label: "Potential ignition sources", value: "Unrated vacuum motors, static from insulating hoses, hot work, electrical equipment" },
 ],
 industryBackground: [
 "Woodworking plants generate two dust streams and often manage only one. The connected stream — chips and dust pulled through hoods into the central collection system — is engineered, ducted and filtered. The fugitive stream is everything the hoods miss: the fine fraction that drifts off a wide-belt sander's edge, escapes a router enclosure when the door opens, or puffs past a saw guard. Collection efficiency is never total, and at production volume the misses compound into layers.",
 "That fugitive fraction is the regulated one. NFPA 664, the wood processing commodity standard now carried into the consolidated NFPA 660, treats accumulated dust on building and equipment surfaces as the hazard housekeeping exists to control — because settled layers are the fuel for secondary explosions, the mechanism behind the industry's worst events. Published guidance treating layers as thin as 1/32 of an inch as credible hazard sets a threshold a busy sanding department can reach between cleanings.",
 "Wood dust also carries a liability most combustible dusts don't: it is classified as a human carcinogen (IARC Group 1). That reframes cleaning method as exposure control — sweeping and blowdown put the finest fraction airborne at breathing height during the one task guaranteed to happen every week. Engineered panels raise both stakes at once: MDF and particleboard dust is typically finer than solid-wood dust, and its resin binders add exposure considerations beyond the wood itself.",
 ],
 challenge: [
 { area: "Safety", detail: "Fugitive fines on beams, trays and equipment tops built the classic secondary-explosion fuel layer above a plant full of ignition-capable equipment." },
 { area: "Operations", detail: "Sweeping and blowdown were recursive — resuspended dust resettled, so the same surfaces were cleaned repeatedly without ever staying clean." },
 { area: "Compliance", detail: "The DHA flagged elevated accumulation, prohibited cleaning methods and unrated vacuums — direct exposure under the OSHA Combustible Dust NEP." },
 { area: "Maintenance", detail: "Fine dust ingress shortened motor and bearing life; blowdown drove fines into electrical enclosures and controls." },
 { area: "Employee exposure", detail: "A classified carcinogen was being made airborne by the cleaning method itself — the health program and the housekeeping program were in conflict." },
 { area: "Production interruptions", detail: "Overhead cleaning required lifts and line stoppage, so it was deferred to shutdowns — which let the accumulation problem deepen." },
 ],
 hazardAnalysis: [
 "Wood dust satisfies the explosion pentagon with the everyday materials of the trade. Fuel: the fugitive fine fraction from sanding and routing. Oxygen: ambient. Dispersion: blowdown, sweeping, or the vibration of production itself. Confinement: the building volume, equipment enclosures, and the ducting of the very collection system that serves the machines. Ignition: unrated cleaning equipment, static discharge, electrical gear — and hot work, woodworking's classic pairing with accumulated dust.",
 "The secondary-explosion mechanism is why elevated surfaces dominate the program. A small initiating event lofts the settled layers from beams and fixtures into a room-scale cloud, and the second event dwarfs the first. The fugitive fraction is not a cosmetic problem that the collection system almost solved — it is the specific fuel inventory the standards instruct facilities to remove on a schedule.",
 "Static electricity earns its usual attention: fine organic dust moving through an insulating hose is a charge generator, and the discharge point is inside the collection vessel where concentration peaks. The control is a continuous conductive path — hose, wand, canister, chassis — bonded and verified to ground.",
 "The exposure ledger runs in parallel. IARC Group 1 classification makes airborne wood dust a health event; capture at the nozzle with HEPA-retained exhaust addresses the fire program and the hygiene program with the same equipment, which is the quiet efficiency of doing housekeeping correctly.",
 ],
 pentagon: [
 { element: "Fuel", presence: "Fugitive fine wood and panel dust from sanding, routing and sawing" },
 { element: "Oxygen", presence: "Ambient plant atmosphere" },
 { element: "Dispersion", presence: "Compressed-air blowdown, sweeping, production vibration" },
 { element: "Confinement", presence: "Building volume, equipment enclosures, collection ducting" },
 { element: "Ignition", presence: "Unrated vacuum motors, static discharge, hot work, electrical equipment" },
 ],
 siteAssessment: [
 "Measurable dust layers on overhead steel, cable trays and light fixtures above the sanding department",
 "Compressed-air blowdown in routine use for machine exteriors and hard-to-reach surfaces",
 "Consumer-grade shop vacuums — sparking motors, plastic hoses, no grounding — in daily service",
 "Fugitive accumulation heaviest at sander edges and router cells, exactly where hood capture is weakest",
 "Collected dust and sweepings handled in open containers",
 "No coordination between housekeeping and hot-work permitting",
 ],
 solution: [
 "The specification began by drawing the boundary: the central collection system keeps its job — the machines — and explosion-proof HEPA vacuums take ownership of the fugitive fraction. Line-side units at the sanding and routing cells capture the escape paths at their source, with tested 99.99% final stages so a classified carcinogen stays captured rather than re-entering plant air.",
 "Elevated surfaces moved from an annual lift-assisted project to a routine: extension wand kits put beams, trays and fixture tops on a defined frequency from floor level, with lift-assisted deep cleans demoted to periodic verification. Grounded stainless tools and static-dissipative hoses run throughout, bonded and verified.",
 "Two program rules completed it. Blowdown was formally retired — vacuum-only methods across the plant. And housekeeping was tied into hot-work permitting: the permit checklist now includes vacuum cleaning of the work area and surroundings before torch or welder light up, closing woodworking's most notorious ignition pairing.",
 ],
 equipment: [
 { item: "Explosion-proof HEPA vacuums (EVX series, e.g. EVX-15 EX)", purpose: "Line-side fugitive-dust recovery at sanding and routing cells" },
 { item: "Extension wand kits for elevated surfaces", purpose: "Routine overhead passes without lift equipment" },
 { item: "Industrial wet/dry vacuums (AV series, e.g. AV1)", purpose: "General-area housekeeping and finishing-adjacent zones" },
 { item: "Static-dissipative hose assemblies", purpose: "Continuous conductive path from pickup point to canister" },
 { item: "Grounded stainless wands, floor and brush tools", purpose: "Non-sparking contact suited to wood surfaces and machinery" },
 { item: "Tested HEPA final-stage filtration (99.99% at 0.3 µm)", purpose: "Exposure control for a classified carcinogen" },
 { item: "Bonding and grounding kits", purpose: "Verified chassis-to-ground connection at every station" },
 { item: "Sealed collection containers", purpose: "Contained transfer of collected dust to disposal" },
 ],
 implementation: [
 { phase: "Assessment", detail: "Walk-down of fugitive-emission points and elevated accumulation; method audit against the DHA and hood-capture reality." },
 { phase: "Planning", detail: "Zone map with equipment assignments, elevated-surface frequencies and the hot-work coordination rule." },
 { phase: "Training", detail: "Operator sessions on why blowdown is retired, grounding checks, extension-wand routine and sealed disposal." },
 { phase: "Commissioning", detail: "Grounding continuity per station; suction and filtration verification against specification." },
 { phase: "Operator education", detail: "Zone method cards; hot-work permit checklist updated at the permit desk." },
 { phase: "Maintenance program", detail: "Condition-based filter service and periodic grounding re-verification folded into PM." },
 ],
 beforeAfter: [
 { aspect: "Fugitive-dust ownership", before: "Assumed covered by machine dust collection", after: "Explicitly owned by explosion-proof HEPA vacuum recovery" },
 { aspect: "Cleaning method", before: "Brooms at floor level, blowdown above", after: "Grounded vacuum recovery, floor to overhead steel" },
 { aspect: "Recovery equipment", before: "Unrated consumer shop vacuums", after: "Explosion-proof HEPA units with grounded tool sets" },
 { aspect: "Elevated surfaces", before: "Deferred to annual lift-assisted shutdowns", after: "Defined frequency via extension wands" },
 { aspect: "Hot work", before: "Permitted independently of dust conditions", after: "Vacuum cleaning of the area on the permit checklist" },
 { aspect: "Collected material", before: "Open sweepings containers", after: "Sealed containers to disposal" },
 ],
 compliance: [
 "The engineered program supports compliance with the housekeeping requirements NFPA 664 established for wood processing facilities — vacuum-based methods, defined frequencies including elevated surfaces, and control of ignition sources in the recovery path — as those requirements carry into the consolidated NFPA 660, with NFPA 652's Dust Hazard Analysis obligation as the baseline.",
 "It supports the expectations enforced under OSHA's Combustible Dust National Emphasis Program: documented schedules, appropriate equipment, and the retirement of practices that suspend dust clouds.",
 "On the health side, capture-at-source with HEPA-retained exhaust and sealed disposal supports the exposure-control program that wood dust's carcinogen classification requires — the same equipment serving both obligations. Component certifications and listings vary by model and configuration; documentation is supplied per application, and the program is described throughout as supporting compliance rather than conferring it.",
 ],
 operationalImprovements: [
 "Cleaning became single-pass: vacuum capture at the source ends the resuspend-and-resettle cycle that made sweeping and blowdown recursive across the sanding department.",
 "Overhead steel moved inside its accumulation target by routine — extension-wand passes on a defined frequency replace the annual scramble, without lifts or line stoppage.",
 "Machine and electrical reliability benefit by mechanism: retiring blowdown stops driving fines into motors, bearings and control enclosures.",
 "Operator exposure during cleaning drops by design — a classified carcinogen is captured at the nozzle with HEPA-retained exhaust instead of being lofted at breathing height. (Improvements are stated by mechanism; this representative scenario publishes no fabricated percentages.)",
 ],
 technical: [
 "Why the fugitive-fraction framing matters: dust collection systems are sized, ducted and balanced for the machines they serve — asking them to also be the housekeeping program is a category error. The fugitive fraction needs mobile, point-of-need recovery, which is what vacuum equipment is: the two systems are complements, not competitors.",
 "Why HEPA is the exposure control here: the fraction that escapes hoods, travels farthest and stays airborne longest is the same fraction a coarse filter passes — and with an IARC Group 1 material, exhaust quality is the health program. A tested 99.99% at 0.3 µm final stage returns air cleaner than the room it came from.",
 "Why elevated-surface frequency is the heart of the schedule: the secondary-explosion fuel lives overhead, and the 1/32 inch guidance is a trigger the program is designed never to reach. Extension wands make the routine cheap enough to actually happen.",
 "Why grounding is non-negotiable for an organic dust: fine wood dust moving through an insulating hose generates charge exactly like metal fines do. A conductive hose bonded through wand, canister and chassis — verified at commissioning and on PM — keeps charge at ground potential instead of storing it where dust concentration peaks.",
 ],
 faqs: [
 {
 question: "Our machines are all connected to dust collection — isn't that enough?",
 answer:
 "The collection system serves the machines; the hazard lives in the fugitive fraction the hoods miss, which settles on structure and equipment. That fraction is a housekeeping obligation under NFPA 664 — and it's what vacuum recovery exists for.",
 },
 {
 question: "Is wood dust really explosive?",
 answer:
 "Yes — wood dust is a classic combustible organic dust, and mill explosions are among the oldest documented dust disasters. The fine fraction from sanding and routing is the concern; severity is size-specific and confirmed by testing.",
 },
 {
 question: "Why is blowdown such a problem in wood shops?",
 answer:
 "It converts settled layers into exactly the airborne cloud that deflagrates, redeposits fines everywhere including inside equipment, and puts a classified carcinogen at breathing height. Combustible-dust standards heavily restrict it; vacuum recovery is the accepted alternative.",
 },
 {
 question: "Is MDF dust different from solid wood dust?",
 answer:
 "Engineered-panel dust is typically finer, which raises combustibility and exposure stakes together, and resin binders add exposure considerations beyond the wood itself. Treat it as combustible and capture it at the source.",
 },
 {
 question: "What does the carcinogen classification mean for cleaning?",
 answer:
 "Wood dust is classified as a human carcinogen (IARC Group 1), so airborne exposure during cleaning is a health event. Capture at the nozzle with HEPA-retained exhaust and sealed disposal turns housekeeping into exposure control instead of an exposure source.",
 },
 {
 question: "Why tie housekeeping to hot-work permits?",
 answer:
 "Hot work near accumulated wood dust is the industry's classic ignition pairing. Putting vacuum cleaning of the area on the permit checklist closes it structurally — the torch doesn't light until the fuel is gone.",
 },
 {
 question: "How do we clean overhead steel without lifts every time?",
 answer:
 "Extension wand kits make routine elevated passes a floor-level task on a defined frequency; lift-assisted deep cleans become periodic verification rather than the only line of defense.",
 },
 {
 question: "What standard applies to a furniture plant?",
 answer:
 "NFPA 664 is the wood processing commodity standard, now carried into the consolidated NFPA 660, with NFPA 652's Dust Hazard Analysis as the baseline. OSHA enforces housekeeping under its Combustible Dust National Emphasis Program.",
 },
 ],
 relatedIndustries: [
 { label: "Woodworking", href: "/#woodworking" },
 { label: "Paper & Packaging", href: "/industries#paper-packaging" },
 { label: "Biomass & Energy", href: "/industries#energy" },
 ],
 relatedProducts: [
 "explosion-proof-vacuums",
 "hepa-vacuums",
 "central-vacuum-systems",
 "industrial-vacuums",
 ],
 takeaways: [
 "Dust collection serves the machines; the fugitive fraction is the housekeeping gap — name the owner and the program follows.",
 "The secondary-explosion fuel lives overhead: put elevated surfaces on a defined frequency with extension wands.",
 "Retire blowdown first — it manufactures the cloud, contaminates equipment and puts a carcinogen at breathing height in one motion.",
 "HEPA-retained exhaust makes one piece of equipment serve the fire program and the health program simultaneously.",
 "Tie housekeeping to hot-work permits: clean before anyone cuts or welds nearby.",
 "Grounding is verified, not assumed — fine organic dust generates static like metal fines do.",
 ],
 taxonomy: {
 industry: "Wood Industry",
 application: "Furniture & Cabinet Manufacturing",
 hazard: "Combustible Wood Dust & Carcinogen Exposure",
 material: "Wood Dust",
 process: "CNC Routing & Sanding",
 dustClass: "Combustible Organic Dust",
 facilityType: "Furniture Manufacturing Plant",
 standards: ["NFPA 660", "NFPA 664", "NFPA 652", "OSHA NEP", "IARC Group 1 (exposure context)"],
 products: ["EVX Series explosion-proof HEPA vacuums", "Extension wand kits", "AV Series industrial vacuums", "Static-dissipative hose & tool kits"],
 personas: ["Plant Manager", "EHS Manager", "Safety & Hygiene Manager", "Maintenance Manager"],
 cluster: ["Wood Industry", "Combustible Wood Dust", "CNC Routing & Sanding", "Explosion-Proof HEPA Vacuums"],
 },
 seo: {
 metaTitle: "Wood Dust Control in Furniture Manufacturing",
 metaDescription:
 "Representative case study: how a furniture plant controls fugitive combustible wood dust with explosion-proof HEPA vacuums, elevated-surface routines and hot-work coordination under NFPA 660/664.",
 keywords: [
 "wood dust collection",
 "furniture plant combustible dust",
 "NFPA 664 housekeeping",
 "fugitive wood dust",
 "explosion proof vacuum woodworking",
 "wood dust carcinogen exposure",
 ],
 },
};
