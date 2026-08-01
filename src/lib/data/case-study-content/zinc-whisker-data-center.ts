import type { CaseStudy } from "@/lib/data/case-study-types";

export const zincWhiskerDataCenter: CaseStudy = {
 slug: "zinc-whisker-data-center",
 title: "Managing Zinc Whiskers & Subfloor Dust in a Data Center",
 subtitle:
 "How a representative colocation facility runs housekeeping where dust is measured in failures, not fires — conductive zinc whiskers freed by raised-floor work, a subfloor plenum that feeds every server intake, and cleaning that happens around a live load that never shuts down.",
 date: "2026-07-18",
 readingTime: 8,
 hero: {
 industry: "Data Centers",
 hazard: "Conductive contamination (non-combustible)",
 material: "Zinc whiskers & subfloor dust",
 standards: ["ISO 14644 practice", "ASHRAE TC 9.9", "Facility uptime SLAs"],
 },
 executiveSummary: [
 "A representative colocation data center — raised-floor white space, underfloor air distribution, live customer load under uptime service-level agreements — faces a dust problem that inverts the usual combustible-dust logic entirely. Here dust is measured in failures, not fires. The signature hazard is the zinc whisker: microscopic, electrically conductive filaments that grow from electroplated steel raised-floor tiles and understructure, break free when tiles are lifted or disturbed, and ride the cooling airflow into energized equipment, where they bridge contacts and cause intermittent faults and short circuits.",
 "The geography makes it worse. The raised floor is not just a walking surface — the void beneath it is the supply-air plenum, so whatever settles there is queued for delivery to every server intake in the room. And the facility cannot be shut down to clean: the load is live and contractually protected, so housekeeping happens around running equipment, through change windows, with static discipline and containment rather than the luxury of an empty room. None of it is a fire hazard; all of it is an availability hazard.",
 "The engineered response treated cleanliness as a measured, live-load deliverable. Any raised-floor work — tile lifts, cabling, understructure access — pairs with HEPA-retained recovery at the point of disturbance, so freed whiskers are captured rather than dispersed. Subfloor plenum recovery runs on a defined rotation with grounded tools and tested HEPA retention, because the plenum is the duct. Overhead trays, aisle faces and staging areas follow, and construction build-outs run under containment. Throughout, the equipment exhausts cleaner than the room it works in.",
 ],
 projectOverview: [
 { label: "Facility type", value: "Colocation data center — raised floor, underfloor air distribution" },
 { label: "Processes", value: "Live IT load, change-window maintenance, tenant build-outs, hardware refresh" },
 { label: "Environment", value: "Uptime-protected white space; subfloor supply plenum; no-shutdown constraint" },
 { label: "Dust generation points", value: "Raised-floor tiles and understructure, subfloor plenum, cable trays, staging dock, build-outs" },
 { label: "Housekeeping challenge", value: "Conductive contamination causing equipment failure — measured cleanliness, live load" },
 { label: "Consequence ledger", value: "Availability and equipment reliability — not fire or deflagration" },
 ],
 industryBackground: [
 "Data centers operate in a consequence regime unlike any combustible-dust industry: the dust here does not burn, it disables. Particulate causes thermal faults by insulating heat sinks and clogging filters, and electrical faults by bridging conductors — and both show up as downtime, the metric the entire facility is built to protect. Operators set particulate-cleanliness targets, borrowing from cleanroom practice, and inspect against them, so housekeeping is a measured deliverable rather than an assumption about tidiness.",
 "The zinc whisker is the industry's signature contamination hazard and has been documented since the early decades of raised-floor computing. Electroplated zinc coatings on steel floor tiles and their understructure can, over years, grow microscopic conductive filaments — whiskers — through mechanical and internal stresses. Individually invisible, they break free when tiles are lifted or flexed, become airborne, and are carried by the underfloor cooling air directly into energized equipment, where a single conductive filament across the wrong contacts causes an intermittent fault notoriously hard to diagnose. The disturbance event — tile work — is precisely the routine maintenance the facility performs constantly.",
 "The plenum architecture is the second defining feature. In an underfloor-air design, the void beneath the raised floor is the supply duct: conditioned air is pushed into it and up through perforated tiles into the equipment. That means the subfloor is not a place where dust merely rests — it is a place from which dust is actively delivered to every intake in the room. Housekeeping under the floor is therefore air-path hygiene, and it runs under the hardest operational constraint in the building: the load above never turns off, so the work is done live, through change windows, without disrupting the airflow it is protecting.",
 ],
 challenge: [
 { area: "Reliability", detail: "Conductive zinc whiskers bridging contacts caused intermittent, hard-to-trace faults — the failures-not-fires hazard at its most literal." },
 { area: "Air path", detail: "The subfloor plenum delivers whatever settles in it to every server intake; contamination there is contamination distributed room-wide." },
 { area: "Uptime constraint", detail: "The load is live and SLA-protected — no shutdown-to-clean option, so every method had to work around energized equipment." },
 { area: "Disturbance risk", detail: "Tile lifts and understructure access — routine, frequent work — are exactly the events that free whiskers into the airflow." },
 { area: "Measured cleanliness", detail: "Particulate targets are inspected against, so housekeeping outcomes had to be demonstrable, not merely visible." },
 { area: "Construction migration", detail: "Tenant build-outs generate concrete, drywall and packaging dust in rooms that cannot absorb it, adjacent to live white space." },
 ],
 hazardAnalysis: [
 "This scenario deliberately sets the explosion pentagon aside — zinc whiskers and subfloor dust are non-combustible, and the hazard is neither fire nor deflagration. The controlling framework is contamination-and-reliability: conductive particulate reaching energized equipment, and insulating particulate defeating thermal management. Documenting that inversion is part of the value here, because applying a combustible-dust mindset to a data center misreads the entire risk.",
 "The zinc whisker hazard is electrical. A whisker is a conductive metal filament; when it lands across contacts, connector pins or closely spaced conductors on an energized board, it creates a short or leakage path. Because whiskers are microscopic and can vaporize on fault, the resulting failures are intermittent and notoriously difficult to diagnose — a board fails, is replaced, and the replacement fails too, because the contamination source in the airflow was never addressed. The control is to prevent whiskers from becoming and staying airborne: capture at the disturbance, and keep the plenum clean.",
 "The thermal hazard is quieter but real. Dust insulates: a film on heat sinks, an accumulation in filters, a coating on boards all impede heat rejection, and in a density-packed hall thermal margin is already thin. Particulate that would be cosmetic in an office is a reliability factor here, which is why the cleanliness targets are numeric and inspected rather than left to judgment.",
 "The operational constraint shapes every control. Because the load is live, the recovery method itself must not introduce risk — no static discharge near energized equipment, no disruption of the airflow the plenum is maintaining, no disturbance that frees more contamination than it removes. Grounded, HEPA-retained equipment that exhausts cleaner than the room, worked through disciplined change windows, is the response the environment forces.",
 ],
 pentagon: [
 { element: "Fuel", presence: "None — zinc whiskers and subfloor dust are non-combustible (hazard is conductive, not combustible)" },
 { element: "Oxygen", presence: "Not applicable to this hazard class" },
 { element: "Dispersion", presence: "Tile disturbance and plenum airflow carry whiskers to equipment" },
 { element: "Confinement", presence: "Not applicable — the risk is contamination delivery, not deflagration" },
 { element: "Ignition", presence: "Not applicable — failures are electrical bridging and thermal, not fire" },
 ],
 siteAssessment: [
 "Electroplated raised-floor tiles and understructure of an age and type associated with whisker growth",
 "Subfloor plenum with settled dust in the active supply-air path, delivered to intakes",
 "Tile lifts and cabling performed without capture at the point of disturbance",
 "No defined plenum recovery rotation; cleaning reactive to visible dust only",
 "General cleaning with equipment not rated for the particulate targets or the live-load constraint",
 "Tenant build-out areas shedding construction dust adjacent to live white space without containment",
 ],
 solution: [
 "The program treated the disturbance event as the control point. Any raised-floor work — tile lifts, understructure access, cabling — was paired with HEPA-retained recovery at the opening, so whiskers freed by the disturbance are captured immediately rather than allowed into the airflow. Tiles suspected of whisker growth are handled as contamination sources: worked with capture present, never dry-wiped or dropped back in a way that flexes and sheds more. The principle is that the moment of disturbance and the moment of capture are the same moment.",
 "Subfloor plenum recovery ran on a defined rotation, because the plenum is the duct and its cleanliness is air-path hygiene. Grounded tools and tested HEPA retention worked the void without disrupting the supply airflow, on a schedule set to the facility's cleanliness targets rather than to visible mess. Overhead cable trays and ladder racks — which shed onto the racks they feed — joined the rotation, and cold- and hot-aisle faces and perforated tiles were recovered to protect intake filters and the airflow numbers they are specified around.",
 "Everything ran live and measured. Static discipline was absolute near energized equipment; recovery equipment was specified to exhaust cleaner than the room it worked in, so the cleaning could not itself degrade the particulate environment; and construction build-outs ran under containment with HEPA recovery at the work, with concrete drilling bringing the silica rules with it. Packaging was stopped at the staging dock so cardboard fly never entered the white space. Cleanliness outcomes were documented against the facility's targets — a deliverable, not an assumption.",
 ],
 equipment: [
 { item: "HEPA industrial vacuums (EX1 series, e.g. EX1-15 HEPA)", purpose: "Plenum, tile-work and white-space recovery — exhaust cleaner than the room" },
 { item: "Cleanroom-appropriate HEPA units", purpose: "Aisle faces, perforated tiles and equipment surrounds under cleanliness targets" },
 { item: "Grounded tool and wand kits", purpose: "Tile-lift capture, understructure and cable-tray recovery near energized equipment" },
 { item: "Static-dissipative hose assemblies", purpose: "Continuous conductive path — static discipline near live load" },
 { item: "Tested HEPA final-stage filtration (99.99% at 0.3 µm)", purpose: "Whiskers and fine particulate retained, not returned to the air path" },
 { item: "Containment and capture accessories", purpose: "Tile-disturbance capture and build-out containment adjacent to live white space" },
 { item: "Sealed collection containers", purpose: "Contained removal of conductive particulate from the facility" },
 { item: "Industrial vacuums (AV series)", purpose: "Staging dock, packaging areas and non-critical support spaces" },
 ],
 implementation: [
 { phase: "Assessment", detail: "White-space and plenum survey; raised-floor tile age and type reviewed for whisker association; particulate-target baseline." },
 { phase: "Planning", detail: "Disturbance-capture protocol for tile work; plenum rotation keyed to cleanliness targets; change-window scheduling around the live load." },
 { phase: "Training", detail: "Technician sessions on tile-lift capture, static discipline, plenum method and why cleaning must exhaust cleaner than the room." },
 { phase: "Commissioning", detail: "Grounding continuity verified; HEPA exhaust validated against room cleanliness; capture accessories fitted to tile-work kit." },
 { phase: "Operator education", detail: "Method cards for tile disturbance and plenum work; build-out containment checklist; staging-dock packaging rule posted." },
 { phase: "Maintenance program", detail: "Plenum rotation documented against particulate targets; filter service on condition; cleanliness outcomes recorded per change window." },
 ],
 beforeAfter: [
 { aspect: "Tile disturbance", before: "Lifts and cabling with no capture — whiskers freed into airflow", after: "HEPA capture at the opening; disturbance and capture are one step" },
 { aspect: "Subfloor plenum", before: "Cleaned reactively to visible dust", after: "Defined rotation keyed to cleanliness targets — the duct kept clean" },
 { aspect: "Recovery equipment", before: "Not rated for particulate targets or live load", after: "HEPA units exhausting cleaner than the room, grounded throughout" },
 { aspect: "Cleaning constraint", before: "No method suited to the no-shutdown reality", after: "Live-load protocols and change-window discipline" },
 { aspect: "Build-outs", before: "Construction dust migrating into white space", after: "Containment plus HEPA recovery at the work" },
 { aspect: "Cleanliness", before: "Assumed from visible tidiness", after: "Measured and documented against targets" },
 ],
 compliance: [
 "Data-center housekeeping is governed by facility cleanliness targets and operational agreements rather than a combustible-dust code, and this program supports them: recovery methods that meet particulate objectives, equipment validated to exhaust cleaner than the controlled space, and documented outcomes inspected against the facility's own standards. Practices commonly reference ISO 14644 cleanliness concepts and ASHRAE thermal-environment guidance as the operational backdrop.",
 "Where tenant build-outs involve concrete cutting or drilling, the respirable crystalline silica rules apply to that work exactly as they would on any construction task, and the program handles demolition silica under HEPA capture accordingly — a combustible-dust framework is explicitly not the governing instrument for the white-space contamination hazard.",
 "Component certifications and listings vary by model and configuration; documentation is supplied per application. The program is described throughout as supporting the facility's reliability and cleanliness objectives rather than conferring any certification, and this representative scenario publishes no fabricated availability figures, particulate counts or performance percentages.",
 ],
 operationalImprovements: [
 "Whisker-driven failures are addressed at the source: capturing filaments at the moment of tile disturbance breaks the cycle where a replacement board fails because the contamination in the airflow was never removed.",
 "The plenum stops distributing contamination — treating the subfloor as the supply duct it is, on a defined rotation, means the air path delivers clean air rather than settled particulate to every intake.",
 "Cleaning stops being a risk of its own — equipment that exhausts cleaner than the room and static discipline near the live load mean housekeeping no longer threatens the environment it protects.",
 "Cleanliness became demonstrable: outcomes documented against particulate targets turn housekeeping from an assumption into an inspectable deliverable. (Improvements are stated by mechanism; this representative scenario publishes no fabricated percentages.)",
 ],
 technical: [
 "Why the pentagon is set aside here: zinc whiskers and subfloor dust are non-combustible, so the hazard is contamination and reliability, not fire. Applying a combustible-dust mindset to a data center misreads the risk — the correct frame is conductive particulate reaching energized equipment and insulating particulate defeating cooling.",
 "Why the disturbance event is the control point: whiskers are largely stable until tiles are lifted or flexed, so the moment of disturbance is the moment they become airborne. Capturing at that moment — HEPA recovery present during tile work — is far more effective than trying to chase filaments already distributed by the airflow.",
 "Why the plenum rotation matters more than floor tidiness: in underfloor-air designs the subfloor is the supply duct, so dust there is actively delivered to intakes. Plenum cleanliness is air-path hygiene, which is why it runs on a defined rotation keyed to cleanliness targets rather than to whatever is visible on the walking surface.",
 "Why the equipment must exhaust cleaner than the room: in a space with numeric particulate targets, a vacuum that returns fines to the air degrades the very environment it is meant to protect. Tested HEPA retention at 99.99% at 0.3 µm, validated against room cleanliness, ensures recovery is a net improvement to the air path, not a disturbance to it.",
 ],
 faqs: [
 {
 question: "Are zinc whiskers a fire or explosion hazard?",
 answer:
 "No — they are non-combustible metal filaments, and the hazard is entirely electrical and reliability-driven. A conductive whisker bridging contacts on energized equipment causes shorts and intermittent faults. This is the data center's failures-not-fires reality: the dust disables equipment rather than igniting, so a combustible-dust framework does not govern it.",
 },
 {
 question: "What actually are zinc whiskers and where do they come from?",
 answer:
 "They are microscopic, electrically conductive filaments that grow over years from electroplated zinc coatings on steel raised-floor tiles and understructure. They stay put until the tile is lifted or flexed, then break free, become airborne, and are carried by the underfloor cooling air into equipment — where a single filament across the wrong contacts causes a fault that is very hard to diagnose.",
 },
 {
 question: "Why not just shut down and clean thoroughly?",
 answer:
 "Because the load is live and protected by uptime service-level agreements — shutting down to clean is generally not an option. That constraint shapes everything: recovery happens around energized equipment, through disciplined change windows, with static control and HEPA equipment that exhausts cleaner than the room, so the cleaning never disrupts the load or the airflow it depends on.",
 },
 {
 question: "Why is the subfloor treated differently from the rest of the room?",
 answer:
 "Because in underfloor-air designs the subfloor void is the supply-air duct — conditioned air is pushed through it and up into the equipment. Dust there is not resting; it is queued for delivery to every server intake. That makes plenum housekeeping air-path hygiene, run on a defined rotation keyed to cleanliness targets rather than to visible surface dust.",
 },
 {
 question: "How does construction inside a live facility get handled?",
 answer:
 "Under containment, with HEPA recovery at the work, because a build-out is the largest particulate event a live hall hosts. Concrete cutting or drilling brings the respirable crystalline silica rules with it and is handled accordingly, and packaging is stopped at the staging dock so cardboard fly never reaches the white space. The goal is to keep the construction particulate from ever entering the air path.",
 },
 ],
 relatedIndustries: [
 { label: "Data Centers", href: "/industries/data-centers" },
 { label: "Concrete & Cement guide", href: "/materials/concrete-cement-dust" },
 { label: "Silica Dust guide", href: "/materials/silica-dust" },
 { label: "Copper Dust guide", href: "/materials/copper-dust" },
 ],
 relatedProducts: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 takeaways: [
 "In a data center, dust is measured in failures, not fires — the hazard is conductive and thermal contamination reaching live equipment, not combustion.",
 "Zinc whiskers are microscopic conductive filaments from electroplated floor tiles; they are freed by the routine tile work the facility performs constantly, so capture at the disturbance is the control point.",
 "The subfloor plenum is the supply-air duct — dust there is delivered to every intake, making plenum recovery air-path hygiene on a defined rotation.",
 "The load never shuts down, so recovery runs live: static discipline, change windows, and equipment that exhausts cleaner than the room.",
 "Cleanliness is a measured, documented deliverable against particulate targets — not an assumption from visible tidiness.",
 ],
 taxonomy: {
 industry: "Data Centers",
 application: "White-space & plenum contamination control",
 hazard: "Conductive and thermal contamination (non-combustible)",
 material: "Zinc whiskers & subfloor dust",
 process: "Live IT load, change-window maintenance, build-outs",
 dustClass: "Non-combustible conductive particulate",
 facilityType: "Colocation data center — raised floor, underfloor air",
 standards: ["ISO 14644 practice", "ASHRAE TC 9.9", "Uptime SLAs"],
 products: ["HEPA vacuums", "Industrial vacuums", "Central vacuum systems"],
 personas: ["Facility manager", "Critical-environment operations", "Data-center M&E"],
 cluster: ["data-centers", "concrete-cement-dust", "silica-dust"],
 },
 seo: {
 metaTitle: "Data Center Zinc Whisker & Subfloor Dust Control — Representative Case Study",
 metaDescription:
 "A representative colocation facility manages conductive zinc whiskers and subfloor plenum dust where dust is measured in failures, not fires — capture at tile disturbance, plenum air-path hygiene, and HEPA recovery around a live load.",
 keywords: [
 "zinc whiskers data center",
 "data center dust control",
 "subfloor plenum cleaning",
 "raised floor contamination",
 "conductive dust equipment failure",
 "HEPA vacuum data center",
 "critical environment housekeeping",
 ],
 },
};
