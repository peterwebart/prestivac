import { Filter, Gauge, Layers, ShieldCheck, Wind, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const dataCentersGuide: IndustryGuideData = {
 slug: "data-centers",
 name: "Data Centers",
 titleAccent: "data centers",
 seo: {
 title: "How to Safely Recover Dust in Highly Sensitive",
 description:
 "In a data center, dust is measured in failures, not fires — zinc whiskers from raised-floor hardware, subfloor plenums that feed every server intake, and construction migration into rooms that cannot absorb it. HEPA recovery under live-load protocols.",
 },
 heroIntro:
 "The facility where dust is measured in failures, not fires — conductive zinc whiskers shed by raised-floor hardware, a subfloor plenum that doubles as the supply duct for every server intake, and uptime commitments that mean cleaning happens around running equipment, never instead of it.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Exhaust cleaner than the room" },
 { icon: ShieldCheck, title: "Live-Load Protocols", detail: "Work around running equipment" },
 { icon: Zap, title: "Static-Safe Practice", detail: "Grounded recovery near electronics" },
 { icon: Gauge, title: "Uptime-First Scheduling", detail: "Change windows, not shutdowns" },
 ],
 stagesIntro:
 "A data center's dust geography runs from the void under the tiles to the staging dock — and its most distinctive hazards are invisible until something fails. Walk the stages to see where the program earns its keep.",
 stages: [
 { label: "Raised floor & tiles", detail: "Tile lifting is the disturbance event — electroplated tiles and understructure can shed zinc whiskers, so tile work pairs with HEPA recovery at the opening, never a dry wipe-down." },
 { label: "Subfloor plenum", detail: "The void under the floor is the supply duct you can walk on — dust here is dust delivered to every server intake. Plenum recovery runs on rotation with grounded tools and HEPA retention." },
 { label: "Overhead & cable trays", detail: "Trays and ladder racks accumulate above the racks they feed — scheduled overhead recovery keeps gravity from doing the distribution." },
 { label: "Cold & hot aisles", detail: "Rack faces and perforated tiles show the loading first — aisle-level recovery protects intake filters and the airflow numbers they're specified around." },
 { label: "Power & battery rooms", detail: "UPS galleries and battery rooms carry their own residues and ventilation rules — HEPA recovery with exposure-aware handling, scheduled like everything else here: around the load." },
 { label: "Mechanical galleries", detail: "CRAC and CRAH surrounds, filter changes and belt wear all shed — vacuum support for filter service keeps the change itself from becoming the contamination event." },
 { label: "Build-outs & installs", detail: "Construction is the biggest particulate event a live hall ever hosts — containment plus HEPA recovery at the work, and concrete drilling brings the silica rules with it." },
 { label: "Loading & staging", detail: "Cardboard sheds continuously, which is why packaging stops at staging — recovery at the dock keeps the classic contaminant from ever entering the white space." },
 ],
 challengesHeading: "Failures, not fires — the sensitive-environment problem",
 challenges: [
 { icon: Zap, title: "Zinc Whiskers", detail: "Electroplated floor tiles and understructure can grow microscopic conductive filaments — disturbed, they ride the airflow into equipment and short circuits. Documented since the early raised-floor era." },
 { icon: Wind, title: "The Plenum Is the Duct", detail: "Underfloor voids supply the cooling air — whatever settles there is queued for delivery to server intakes." },
 { icon: Gauge, title: "Uptime Is the Metric", detail: "Particulate causes thermal and electrical faults long before any fire code takes interest — the consequence ledger here is availability." },
 { icon: ShieldCheck, title: "Live-Load Work", detail: "Halls don't shut down to be cleaned — protocols, change windows and static discipline replace the luxury of an empty room." },
 { icon: Layers, title: "Construction Migration", detail: "Build-outs shed concrete, drywall and packaging dust into rooms that cannot absorb it — containment and recovery travel with the work." },
 { icon: Filter, title: "Measured Cleanliness", detail: "Operators set particulate targets and inspect against them — housekeeping here is a measured deliverable, not an assumption." },
 ],
 materialsHeading: "Know the contaminants. Match the recovery.",
 materials: [
 { name: "Zinc whiskers", combustible: "No — conductive metal filaments", approach: "Specialized HEPA recovery during any tile or understructure work; never dry-sweep" },
 { name: "Concrete & subfloor dust", combustible: "No — inert mineral", approach: "HEPA recovery; silica rules apply when drilling or cutting", href: "/materials/concrete-cement-dust" },
 { name: "Drywall & construction dust", combustible: "No", approach: "Containment plus HEPA recovery during build-outs" },
 { name: "Cardboard & packaging dust", combustible: "Combustible — but contamination is the issue here", approach: "Recovery at staging; packaging never enters the white space" },
 { name: "Toner & printer residues", combustible: "Yes — combustible organic fines", approach: "HEPA-retained recovery with sealed disposal" },
 { name: "Battery-room residues", combustible: "Varies", approach: "HEPA recovery with exposure-aware, sealed handling" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in sensitive facilities",
 studySlug: "zinc-whisker-data-center",
 applicationCategorySlug: "general-maintenance",
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
};
