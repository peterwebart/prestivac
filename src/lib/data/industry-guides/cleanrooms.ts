import { Filter, Gauge, Layers, ShieldCheck, Sparkles, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const cleanroomsGuide: IndustryGuideData = {
 slug: "cleanrooms",
 name: "Cleanrooms & Controlled Environments",
 titleAccent: "cleanrooms & controlled environments",
 seo: {
 title: "How to Safely Recover Dust in Cleanrooms &",
 description:
 "In a cleanroom the particle count is the product spec — recovery equipment must be part of the cleanliness system, not a contaminant in it. ISO 14644 class discipline, HEPA/ULPA exhaust validated cleaner than the room, and wipe-down protocols across pharma, semiconductor and medical-device suites.",
 },
 heroIntro:
 "The one environment where the vacuum's own cleanliness is a design requirement — a cleanroom is defined by its particle count, so recovery equipment either belongs to the cleanliness system or becomes a breach in it. There is no third option.",
 heroImage: {
 src: "/images/library/workers/cleanroom-processing-stainless.jpg",
 alt: "Gowned operator performing controlled recovery beside a stainless process vessel in a cleanroom",
 },
 badges: [
 { icon: Filter, title: "HEPA / ULPA Filtration", detail: "Exhaust cleaner than the class" },
 { icon: ShieldCheck, title: "ISO 14644 Practice", detail: "The particle count is the spec" },
 { icon: Sparkles, title: "Wipe-Down Ready", detail: "Smooth, cleanable, gownable" },
 { icon: Gauge, title: "Validated Cleanliness", detail: "Documented, not assumed" },
 ],
 stagesIntro:
 "A cleanroom's contamination geography runs from the gowning threshold to the return-air path — and everything in it, including the recovery equipment, is measured against a class. Walk the stages.",
 stages: [
 { label: "Gowning & airlocks", detail: "Contamination control starts at the threshold — equipment enters wiped down and gowning-compatible, because whatever crosses the airlock is measured against the room's class from that point on." },
 { label: "ISO class zones", detail: "Rooms are rated by particle count per ISO 14644, and the rating is the product requirement — housekeeping frequencies and methods are set to hold the class, not to address visible mess." },
 { label: "Laminar-flow & work surfaces", detail: "Unidirectional airflow protects the critical work; recovery on benches and surfaces runs without disrupting that flow, capturing particles the wipe-down would otherwise redistribute." },
 { label: "Equipment & tool surfaces", detail: "Smooth, cleanable geometry is the rule — recovery tools and the unit itself must be wipe-down compatible and shed nothing, because the cleaning gear cannot become the particle source." },
 { label: "Floor & return-air path", detail: "Floors and low returns collect what settles out of the air; scheduled recovery keeps the return path clean so the room's own air handling isn't re-circulating a particle load." },
 { label: "Material transfer & pass-throughs", detail: "Every item entering sheds something — pass-through discipline and recovery at transfer points keep incoming contamination from reaching the critical zone." },
 { label: "Spills & excursions", detail: "A powder spill or a particle excursion is a class breach in progress — HEPA/ULPA-retained recovery brings the count back inside spec fast, with sealed disposal." },
 { label: "Validation & monitoring", detail: "Particle counts are measured and recorded against the class — so housekeeping outcomes are a documented deliverable, and the recovery equipment is qualified as part of that system." },
 ],
 challengesHeading: "When the particle count is the product",
 challenges: [
 { icon: Sparkles, title: "The Vacuum Is In The Spec", detail: "A cleanroom is defined by particle count, so recovery equipment must be validated as part of the cleanliness system — exhaust cleaner than the room, or it's a contaminant." },
 { icon: ShieldCheck, title: "ISO 14644 Classes", detail: "Rooms are rated by particle concentration, and the rating is a product requirement — housekeeping holds the class rather than chasing visible dirt." },
 { icon: Filter, title: "HEPA Isn't Always Enough", detail: "The most demanding classes call for ULPA-grade retention — the filtration is matched to the class the room must hold." },
 { icon: Wind, title: "Don't Disturb The Flow", detail: "Laminar and unidirectional airflow is a control in itself; recovery must clean without disrupting the airflow protecting the critical work." },
 { icon: Layers, title: "Wipe-Down Everything", detail: "Smooth, cleanable, gownable equipment is mandatory — the recovery gear enters the protocol like everything else, or it doesn't enter." },
 { icon: Gauge, title: "Cleanliness Is Measured", detail: "Particle counts are recorded against the class, so housekeeping is a validated, documented outcome — never an assumption from appearance." },
 ],
 materialsHeading: "What controlled environments manage",
 materials: [
 { name: "Fine process powders", combustible: "Varies by material", approach: "HEPA/ULPA-retained recovery; the powder's own rules still apply", href: "/materials" },
 { name: "Pharmaceutical actives & excipients", combustible: "Often yes", approach: "Contained recovery; potent-compound and combustible discipline", href: "/industries/pharmaceutical" },
 { name: "Semiconductor & electronics residues", combustible: "Toxic and/or combustible", approach: "ESD-safe, exposure-aware recovery", href: "/industries/electronics" },
 { name: "Particulate & fibers (general)", combustible: "Generally no", approach: "Class-holding recovery on the validated schedule" },
 { name: "Spill & excursion material", combustible: "Per material", approach: "Rapid HEPA/ULPA recovery; sealed disposal; class restored" },
 { name: "Medical-device manufacturing dust", combustible: "Varies", approach: "Cleanroom-compatible recovery; contamination control" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in controlled environments",
 applicationCategorySlug: "electronics",
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems", "explosion-proof-vacuums"],
 studySlug: "silicon-dust-semiconductor-fab",
};
