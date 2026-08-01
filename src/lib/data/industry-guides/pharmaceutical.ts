import {
 ClipboardCheck,
 FileText,
 Filter,
 Flame,
 HardHat,
 ShieldAlert,
 Sparkles,
 Timer,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const pharmaceuticalGuide: IndustryGuideData = {
 slug: "pharmaceutical",
 name: "Pharmaceutical Manufacturing",
 titleAccent: "pharmaceutical manufacturing",
 seo: {
 title: "Pharmaceutical Manufacturing Vacuum Solutions",
 description:
 "Industrial vacuum solutions for pharmaceutical manufacturing: HEPA-filtered, stainless, containment-oriented systems for API powders, lactose, excipients and cleanroom environments.",
 },
 heroIntro:
 "Sterile environments, potent powders, validated cleaning and combustible excipients — pharmaceutical housekeeping carries more simultaneous requirements than any other industry. The equipment has to satisfy all of them at once.",
 heroImage: {
 src: "/images/industries/pharmaceutical-hero.jpg",
 alt: "Operator vacuuming a pharmaceutical processing area with a stainless PrestiVac unit",
 },
 badges: [
 { icon: Sparkles, title: "Stainless Construction", detail: "Wash-down friendly, hygienic surfaces" },
 { icon: Filter, title: "HEPA Filtration", detail: "99.99% at 0.3 µm final stage" },
 { icon: ShieldAlert, title: "Containment-Oriented", detail: "Capture at source, sealed disposal" },
 { icon: ClipboardCheck, title: "Validation-Friendly", detail: "Documented, repeatable cleaning methods" },
 ],
 stagesIntro:
 "Powder escapes at every step between the warehouse and the blister pack — each stage below is a dust generation point with its own recovery requirement.",
 stages: [
 { label: "Raw material handling", detail: "Bag dumps and container transfers liberate excipient and API dust at receiving — the program's first capture point, and where sealed disposal habits are set." },
 { label: "Weighing & dispensing", detail: "Open-powder operations at the scale head concentrate exposure and combustible fines in one small footprint — capture at source with HEPA-retained exhaust is the control." },
 { label: "Mixing & blending", detail: "Charging and discharging blenders puffs fine powder every batch; grounded vacuum recovery between batches keeps the room inside its accumulation and carryover targets." },
 { label: "Granulation", detail: "Wet or dry, the transfer points before and after granulation shed fines — and changeover cleaning here is on the validation record." },
 { label: "Drying", detail: "Dried granule handling re-liberates dust as material moves; dryer surrounds earn a defined frequency of their own." },
 { label: "Compression & coating", detail: "Tablet presses shed punch-and-die dust continuously into their enclosures — line-side recovery keeps it out of the room and the next product." },
 { label: "Packaging", detail: "Bottle and blister lines vibrate residual fines free at every station; documented vacuum passes protect both compliance and finish quality." },
 { label: "Warehouse & dispatch", detail: "Spill response and rack cleaning close the loop — sealed recovery so a dropped drum never becomes an airborne event." },
 ],
 challengesHeading: "Complex environments demand exact equipment",
 challenges: [
 { icon: ShieldAlert, title: "Cross-contamination", detail: "Product carryover between batches and lines is a quality event — recovery equipment must capture, contain and clean down." },
 { icon: Flame, title: "Combustible powders", detail: "Lactose, starches, sugars, cellulose and many APIs are combustible dusts; housekeeping falls under NFPA combustible-dust requirements." },
 { icon: ClipboardCheck, title: "Cleaning validation", detail: "Cleaning must be consistent and demonstrable — a defined vacuum method beats variable manual technique." },
 { icon: FileText, title: "Regulatory documentation", detail: "GMP expectations reach housekeeping: defined methods, schedules and records." },
 { icon: Timer, title: "Downtime & efficiency", detail: "Changeover cleaning is on the critical path; faster, single-pass recovery shortens it." },
 { icon: HardHat, title: "Worker exposure", detail: "Potent compounds drive exposure limits far below nuisance-dust levels — capture at the source with HEPA-retained exhaust." },
 ],
 materialsHeading: "Understand the dusts. Choose the right recovery.",
 materials: [
 { name: "Lactose", combustible: "Yes", approach: "HEPA-filtered recovery; explosion-proof where quantity and area classification require" },
 { name: "API powders", combustible: "Commonly — treat as combustible until tested", approach: "Containment-oriented HEPA recovery sized to the compound's exposure limit" },
 { name: "Sugar", combustible: "Yes", approach: "Explosion-proof recovery; a classic combustible dust" },
 { name: "Starch", combustible: "Yes", approach: "Explosion-proof recovery with grounded accessories" },
 { name: "Microcrystalline cellulose", combustible: "Yes", approach: "HEPA-filtered recovery; grounded path for fine fractions" },
 { name: "Talc", combustible: "No — inert mineral", approach: "HEPA-filtered recovery for hygiene and exposure control" },
 ],
 materialsDirectory: { label: "pharmaceutical dusts", href: "/materials#pharmaceutical-dusts" },
 applicationsHeading: "Applications in pharma",
 applicationCategorySlug: "pharmaceutical",
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "central-vacuum-systems", "accessories"],
 studySlug: "lactose-dust-pharmaceutical-tablet",
};
