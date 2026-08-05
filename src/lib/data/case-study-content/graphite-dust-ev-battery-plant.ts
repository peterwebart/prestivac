import type { CaseStudy } from "@/lib/data/case-study-types";

export const graphiteDustBatteryPlant: CaseStudy = {
 slug: "graphite-dust-ev-battery-plant",
 title: "Controlling Electrode Dust in an EV Battery Cell",
 subtitle:
 "How a representative North American cell manufacturer manages graphite and electrode dust across mixing rooms, slitting lines and dry-room assembly — where the dust is combustible, conductive and exposure-limited all at once.",
 date: "2026-07-15",
 readingTime: 9,
 heroImage: {
 src: "/images/library/workers/battery-module-line.jpg",
 alt: "Operator vacuuming graphite dust on a battery production line",
 },
 hero: {
 industry: "Battery Manufacturing",
 hazard: "Combustible, conductive carbon dust",
 material: "Graphite & electrode dust",
 standards: ["NFPA 660 / 652", "OSHA NEP", "Exposure limits (Ni/Co)"],
 },
 executiveSummary: [
 "A representative North American EV battery cell plant — the gigafactory-class facility every major vehicle producer now depends on — runs electrode manufacturing and cell assembly around the clock. Powder is the front end of the process: graphite and conductive carbon for anodes, cathode active materials for the other electrode, handled by the ton in mixing rooms before becoming slurry, coated foil, and finally cells.",
 "The dust profile is unusual in three directions at once. Graphite and carbon black are combustible carbon dusts — and electrically conductive, so the same fines that build explosion fuel also settle into electrical equipment as a tracking and short-circuit hazard. Cathode powders invert the problem: as metal oxides they are typically low-explosibility, but nickel and cobalt content puts them under strict occupational exposure limits. And downstream, slitting and notching shed fine electrode dust along kilometers of coated foil per shift. The facility's Dust Hazard Analysis flagged unrated vacuums in the mixing area and undocumented cleaning along the slitting lines.",
 "The engineered response matched equipment to zone: explosion-proof HEPA vacuums for the powder and mixing rooms, a continuous-duty central vacuum with fixed inlet drops along the slitting and notching lines, dry-room-compatible HEPA units for assembly areas, grounded stainless tools and static-dissipative hoses throughout, and a placement rule the conductive dust demanded — electrical rooms and panels on a defined vacuum frequency of their own.",
 ],
 projectOverview: [
 { label: "Facility type", value: "EV battery cell plant — electrode manufacturing & assembly" },
 { label: "Processes", value: "Powder handling & mixing, coating, drying, calendering, slitting & notching, dry-room cell assembly, formation" },
 { label: "Environment", value: "Continuous 24/7 production; ultra-low-humidity dry rooms in assembly" },
 { label: "Dust generation points", value: "Powder charging and mixing, slitter and notching stations, trim and scrap handling, electrode transport" },
 { label: "Housekeeping challenge", value: "Conductive carbon fines at scale, plus exposure-limited cathode powders" },
 { label: "Potential ignition sources", value: "Unrated vacuum motors, static from insulating hoses, dense electrical infrastructure throughout" },
 ],
 industryBackground: [
 "Battery cell manufacturing begins as powder metallurgy at industrial scale. Anode lines handle graphite and conductive carbon black; cathode lines handle active materials such as NMC or LFP; both are mixed with binders into slurry, coated onto foil, dried, calendered, and cut to size. Every dry-powder transfer upstream and every cutting operation downstream liberates fines — and the plant runs continuously, so accumulation never waits for a convenient moment.",
 "Graphite and carbon black are the materials that set the housekeeping requirement. Both are combustible carbon dusts — and both are electrically conductive, which is the property most housekeeping programs have never had to think about. Conductive fines that settle onto busbars, into motor control centers or across panel internals create tracking and short-circuit hazards entirely separate from the deflagration one. The dust attacks the plant's electrical system and its safety case simultaneously.",
 "Cathode powders complicate the picture in the opposite direction. As metal oxides, materials like NMC are typically low-explosibility — they are already oxidized — and explosibility should be confirmed by testing rather than assumed either way. What is not in doubt is the exposure side: nickel and cobalt content places these powders under strict occupational exposure limits, which makes capture-at-source with HEPA-retained exhaust the operating requirement regardless of what the combustibility test returns.",
 ],
 challenge: [
 { area: "Safety", detail: "Combustible graphite and carbon black fines accumulated in mixing areas and along slitting lines — with conductivity adding an electrical-fault hazard the DHA had to treat separately." },
 { area: "Operations", detail: "Continuous production meant cleaning competed with output on every shift; there is no weekly shutdown in a cell plant's rhythm." },
 { area: "Compliance", detail: "The DHA flagged unrated vacuums in powder areas and undocumented methods on the electrode lines — exposure under the OSHA Combustible Dust NEP." },
 { area: "Maintenance", detail: "Conductive fines migrating into electrical rooms and equipment threatened the plant's most failure-intolerant infrastructure." },
 { area: "Employee exposure", detail: "Nickel- and cobalt-bearing cathode powders carry strict exposure limits; recovery had to hold captured fines, not redistribute them." },
 { area: "Production interruptions", detail: "An electrical fault traced to conductive dust means line stoppage measured in cells not produced — housekeeping quality gated uptime directly." },
 ],
 hazardAnalysis: [
 "The explosion pentagon assembles in the powder rooms exactly as it does in any carbon-dust facility. Fuel: fine graphite and carbon black, charged and mixed by the ton. Oxygen: ambient. Dispersion: powder charging, spills, and any energetic cleaning method. Confinement: mixing rooms, ducting, equipment enclosures. Ignition: the recovery path itself is where unrated equipment traditionally adds it — sparking motors and static-generating hoses in the one place dust concentration peaks.",
 "Conductivity is the second ledger. Graphite fines do not need to deflagrate to shut a plant down: settled on energized equipment, they track, bridge and short. That converts housekeeping from a periodic chore into electrical-infrastructure protection — panels, motor control centers and drive cabinets earn their own defined vacuum frequency, and the equipment doing that cleaning must itself add no ignition or fault risk.",
 "The exposure ledger belongs mostly to the cathode side. Whatever explosibility testing shows for oxide powders, nickel and cobalt exposure limits govern how they are handled — which means capture at the source, tested HEPA final stages, and sealed disposal. A recovery method that passes the combustibility question but exhausts fines back into room air fails the requirement that actually binds.",
 "The secondary-explosion mechanism ties the program together as everywhere: layers on elevated surfaces and equipment tops are the fuel for the event after the event. Published guidance treating accumulations as thin as 1/32 of an inch as credible hazard sets the housekeeping trigger; a plant coating kilometers of electrode per shift reaches it faster than most.",
 ],
 pentagon: [
 { element: "Fuel", presence: "Fine graphite, carbon black and electrode dust from mixing through notching" },
 { element: "Oxygen", presence: "Ambient plant atmosphere" },
 { element: "Dispersion", presence: "Powder charging, spills, cutting operations, energetic cleaning" },
 { element: "Confinement", presence: "Mixing rooms, ducting, equipment enclosures" },
 { element: "Ignition", presence: "Unrated vacuum motors, static discharge — amid dense electrical infrastructure" },
 ],
 siteAssessment: [
 "Graphite and carbon-black accumulation on equipment and elevated surfaces in the mixing area",
 "Fine electrode dust along slitter and notching stations, renewed continuously by production",
 "Consumer-grade vacuums — sparking motors, plastic hoses, no grounding — in powder-adjacent service",
 "Conductive dust film reaching electrical rooms and panel vicinity without a defined cleaning frequency",
 "Cathode-powder area cleaning without HEPA-retained exhaust or sealed disposal",
 "No dry-room-compatible recovery provision in assembly areas",
 ],
 solution: [
 "The specification followed the plant's zones. Powder and mixing rooms: explosion-proof HEPA vacuums with grounded stainless tools — ignition engineered out where combustible carbon concentrations are highest, captured fines retained at the tested 99.99% final stage.",
 "Slitting and notching lines: a continuous-duty central vacuum with fixed inlet drops at each station, sized for the reality that electrode dust generation never stops while the line runs. Operators clean at the drop; collected material consolidates at one controlled discharge; the power unit lives outside the production envelope.",
 "Assembly and electrical infrastructure: dry-room-compatible HEPA units for the low-humidity assembly areas, and a placement rule the conductive dust demanded — electrical rooms, MCCs and panel vicinities on their own defined vacuum frequency, cleaned with grounded non-sparking tools so the protection never becomes the fault source. Cathode-powder areas added sealed, contained disposal to satisfy the exposure limits end to end.",
 ],
 equipment: [
 { item: "Explosion-proof HEPA vacuums (EVX series, e.g. EVX-15 EX)", purpose: "Powder and mixing rooms — combustible carbon fines captured and retained" },
 { item: "Continuous-duty central vacuum with fixed inlet drops", purpose: "Slitting and notching lines; power unit outside the production envelope" },
 { item: "Dry-room-compatible HEPA units", purpose: "Assembly-area housekeeping within low-humidity constraints" },
 { item: "Static-dissipative hose assemblies", purpose: "Continuous conductive path from pickup point to canister" },
 { item: "Grounded stainless wands, floor tools and detail nozzles", purpose: "Non-sparking contact — including around electrical infrastructure" },
 { item: "Tested HEPA final-stage filtration (99.99% at 0.3 µm)", purpose: "Exposure control for nickel- and cobalt-bearing powders" },
 { item: "Bonding and grounding kits with verification points", purpose: "Charge control checked at commissioning and on PM" },
 { item: "Sealed collection containers", purpose: "Contained transfer of cathode-area and mixed fines to disposal" },
 ],
 implementation: [
 { phase: "Assessment", detail: "Zone walk-down from powder receiving through formation; conductive-dust survey of electrical rooms; method audit against the DHA." },
 { phase: "Planning", detail: "Equipment per zone; inlet-drop placement along slitting lines; electrical-room frequency map; disposal routes for cathode-area material." },
 { phase: "Training", detail: "Operator sessions on grounding checks, conductive-dust rules near energized equipment, and sealed disposal." },
 { phase: "Commissioning", detail: "Grounding continuity per station; suction verification at each drop; filtration integrity confirmation." },
 { phase: "Operator education", detail: "Zone method cards; electrical-room checklist on its defined frequency." },
 { phase: "Maintenance program", detail: "Condition-based filter service, grounding re-verification and central-system checks folded into PM." },
 ],
 beforeAfter: [
 { aspect: "Powder-room recovery", before: "Unrated consumer vacuums", after: "Explosion-proof HEPA units with grounded tools" },
 { aspect: "Slitting-line cleaning", before: "Undocumented manual passes between demands", after: "Fixed inlet drops on a continuous-duty central system" },
 { aspect: "Electrical infrastructure", before: "Conductive film addressed reactively after faults", after: "Defined vacuum frequency with non-sparking grounded tools" },
 { aspect: "Cathode-powder areas", before: "Exhaust re-entrained fines; open handling", after: "HEPA-retained exhaust; sealed disposal" },
 { aspect: "Assembly areas", before: "No dry-room-suitable recovery provision", after: "Dry-room-compatible HEPA units" },
 { aspect: "Housekeeping basis", before: "Shift-dependent, undocumented", after: "Zoned schedule aligned to the DHA" },
 ],
 compliance: [
 "The engineered program supports compliance with the fundamentals NFPA 652 established and NFPA 660 now carries: a DHA-informed housekeeping program, appropriate recovery equipment for combustible carbon dusts, and the elimination of practices that suspend fines. It supports the expectations enforced under OSHA's Combustible Dust National Emphasis Program.",
 "On the exposure side, capture-at-source with tested HEPA final stages and sealed disposal supports the industrial-hygiene program that nickel- and cobalt-bearing powders require — the recovery equipment implements the control the exposure assessment specifies.",
 "The conductive-dust provisions — defined frequencies for electrical rooms, non-sparking grounded tools around energized equipment — support the plant's electrical-safety program alongside the combustible-dust one. Component certifications and listings vary by model and configuration; documentation is supplied per application, and the program is described throughout as supporting compliance rather than conferring it.",
 ],
 operationalImprovements: [
 "Electrode-line housekeeping stopped competing with production: fixed drops at each slitting and notching station make cleaning a between-cycles motion instead of an equipment-staging event.",
 "Electrical reliability improves by mechanism — conductive fines are removed on schedule from the rooms and panels where they cause faults, with tools that add no fault risk of their own.",
 "Cathode-area exposure control tightened end to end: capture at the nozzle, HEPA-retained exhaust, sealed disposal — no step in the chain re-releases what was captured. (Improvements are stated by mechanism; this representative scenario publishes no fabricated percentages.)",
 "Cleaning became single-pass in the powder rooms: vacuum capture at the source ends the resuspend-and-resettle cycle, keeping zones inside their accumulation targets between scheduled passes.",
 ],
 technical: [
 "Why conductivity changes the specification: graphite fines bridge and track on energized equipment, so the housekeeping program inherits an electrical-protection mission. That drives three choices — defined frequencies for electrical rooms, non-sparking grounded tools for work near panels, and recovery equipment whose own construction adds no ignition or fault path.",
 "Why the oxide nuance matters: cathode active materials are metal oxides — already oxidized, typically low-explosibility, though testing settles it per material. Writing the specification as if NMC behaved like graphite would miss the real requirement: nickel and cobalt exposure limits, which HEPA-retained exhaust and sealed disposal answer regardless of the combustibility result.",
 "Why a central system owns the slitting lines: electrode dust generation is continuous while the line runs, and the stations are fixed. Fixed inlet drops match a continuous source with a continuous-duty system, keep the power unit's heat, noise and exhaust out of the production envelope, and consolidate collected material at one controlled discharge.",
 "Why dry-room compatibility is a real constraint: assembly areas hold ultra-low humidity because cell chemistry demands it, and every piece of equipment entering the space is a moisture and particle question. HEPA units specified for dry-room service give assembly the housekeeping capability without compromising the environment it exists to protect.",
 ],
 faqs: [
 {
 question: "Is graphite dust really combustible?",
 answer:
 "Yes — graphite and carbon black are combustible carbon dusts, and fine fractions accumulate exactly where battery plants generate them: mixing rooms and electrode lines. Severity is material- and size-specific and should be confirmed by testing.",
 },
 {
 question: "Why does conductive dust matter beyond combustibility?",
 answer:
 "Because graphite fines are electrically conductive: settled on busbars, panels or motor control centers they track, bridge and short. The housekeeping program protects the electrical infrastructure as well as controlling explosion fuel — two hazards, one dust.",
 },
 {
 question: "Are cathode powders like NMC explosive?",
 answer:
 "As metal oxides they are typically low-explosibility — they are already oxidized — though testing should confirm it per material. The binding requirement is usually exposure: nickel and cobalt content places these powders under strict occupational limits, which drives HEPA capture and sealed disposal.",
 },
 {
 question: "What about lithium — isn't that the dangerous part?",
 answer:
 "Cell plants mostly handle lithium in compound form (hydroxide, carbonate, and within oxide cathode materials), which is a caustic-handling and exposure question rather than a metallic-lithium fire one. Metallic lithium concerns belong to emerging anode chemistries and to recycling streams, each with their own controls.",
 },
 {
 question: "Why fixed inlet drops on the slitting lines?",
 answer:
 "Electrode dust generation is continuous while the line runs, and the stations don't move. A continuous-duty central system with a drop at each station matches the source, removes equipment staging from every cleaning pass, and consolidates material at one discharge.",
 },
 {
 question: "Can regular vacuums be used in the dry rooms?",
 answer:
 "Assembly dry rooms constrain everything that enters them — moisture, particles, exhaust. Dry-room-compatible HEPA units are specified for exactly that service; general-purpose equipment is how the environment gets compromised.",
 },
 {
 question: "How often should electrical rooms be cleaned?",
 answer:
 "On their own defined frequency, set by how quickly conductive film accumulates at your site — the point is that it is scheduled and documented, performed with grounded non-sparking tools, rather than triggered by the first fault.",
 },
 {
 question: "How is collected electrode dust disposed of?",
 answer:
 "Sealed, per the site's waste procedures — especially from cathode areas, where the exposure limits that drove HEPA capture apply equally to the container transfer at the end of the chain.",
 },
 ],
 relatedIndustries: [
 { label: "Battery Manufacturing — industry deep dive", href: "/industries/battery" },
 { label: "Automotive", href: "/#automotive" },
 { label: "Electronics & Semiconductors", href: "/industries#electronics" },
 { label: "Recycling", href: "/industries#recycling" },
 ],
 relatedProducts: [
 "hepa-vacuums",
 "explosion-proof-vacuums",
 "central-vacuum-systems",
 "accessories",
 ],
 takeaways: [
 "Battery-plant dust is three problems in one: combustible carbon, conductive fines, and exposure-limited metal powders — the program must answer all three.",
 "Conductivity turns housekeeping into electrical-infrastructure protection: give panels and MCCs their own defined vacuum frequency.",
 "Don't write the cathode spec off the anode's hazard: oxides are typically low-explosibility, but nickel and cobalt exposure limits bind regardless — HEPA and sealed disposal answer them.",
 "Continuous dust sources get continuous-duty answers: fixed inlet drops along slitting and notching lines match the way electrode dust is actually generated.",
 "Dry rooms constrain the equipment that serves them — specify recovery for the environment, not despite it.",
 "Grounding is verified, not assumed, everywhere fine carbon moves through a hose.",
 ],
 taxonomy: {
 industry: "Battery Manufacturing",
 application: "Electrode Production & Cell Assembly",
 hazard: "Combustible, Conductive Carbon Dust & Metal-Powder Exposure",
 material: "Graphite",
 process: "Mixing, Slitting & Notching",
 dustClass: "Combustible Carbon Dust (conductive)",
 facilityType: "EV Battery Cell Plant",
 standards: ["NFPA 660", "NFPA 652", "OSHA NEP", "Occupational exposure limits (Ni/Co)", "ATEX principles (where applicable)"],
 products: ["EVX Series explosion-proof HEPA vacuums", "Continuous-duty central vacuum systems", "Dry-room-compatible HEPA units", "Static-dissipative hose & tool kits"],
 personas: ["Plant Manager", "EHS Manager", "Electrical Reliability Engineer", "Maintenance Manager"],
 cluster: ["Battery Manufacturing", "Conductive Carbon Dust", "Electrode Production", "HEPA Explosion-Proof Vacuums"],
 },
 seo: {
 metaTitle: "Electrode Dust Control in an EV Battery Plant",
 metaDescription:
 "Representative case study: how an EV battery cell plant manages combustible, conductive graphite and electrode dust with explosion-proof HEPA vacuums and a continuous-duty central system under NFPA 660.",
 keywords: [
 "battery manufacturing dust control",
 "graphite dust vacuum",
 "electrode dust collection",
 "EV gigafactory housekeeping",
 "conductive dust electrical hazard",
 "NFPA 652 battery plant",
 ],
 },
};
