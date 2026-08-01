import {
 BatteryCharging,
 Filter,
 Flame,
 HardHat,
 ShieldAlert,
 Timer,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const batteryGuide: IndustryGuideData = {
 slug: "battery",
 name: "Battery Manufacturing",
 titleAccent: "battery manufacturing",
 seo: {
 title: "Battery Manufacturing Vacuum Solutions",
 description:
 "Industrial vacuum solutions for battery manufacturing: explosion-proof HEPA recovery for combustible, conductive graphite and carbon dusts, exposure-limited cathode powders and dry-room assembly environments.",
 },
 heroIntro:
 "Combustible carbon dusts that are also conductive, cathode powders governed by exposure limits, dry rooms that constrain every piece of equipment — and all of it running 24/7. Battery-plant housekeeping is a specification problem before it's a cleaning one.",
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 652 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "99.99% at 0.3 µm — the exposure control" },
 { icon: Zap, title: "Conductive-Dust Aware", detail: "Grounded recovery, electrical rooms on schedule" },
 { icon: Timer, title: "Continuous Duty", detail: "Built for 24/7 electrode lines" },
 ],
 stagesIntro:
 "Powder enters at the front of the plant and dust generation follows the electrode all the way to assembly — each stage below has its own recovery requirement.",
 stages: [
 { label: "Powder handling & mixing", detail: "Graphite and cathode powders charged by the ton — peak combustible-dust concentration, and where explosion-proof HEPA recovery earns its specification." },
 { label: "Coating", detail: "The slurry stage itself is wet; the dust risk lives at powder feed points and cleanup edges around the coater." },
 { label: "Drying", detail: "Oven entry and exit re-entrain fines as coated electrode moves — perimeter surfaces on a defined frequency." },
 { label: "Calendering", detail: "Compressed electrode sheds edge dust at the rollers; conductive fines start migrating toward drives and controls here." },
 { label: "Slitting & notching", detail: "Continuous electrode dust at every cutting station for as long as the line runs — the case for fixed inlet drops on a continuous-duty central system." },
 { label: "Cell assembly (dry room)", detail: "Ultra-low-humidity housekeeping with dry-room-compatible HEPA units — every piece of equipment entering the space is a moisture and particle question." },
 { label: "Formation & aging", detail: "Lighter dust duty, but conductive-film patrol of electrical rooms and racks continues on schedule." },
 { label: "Module & pack", detail: "Trim, terminal and busbar work near live circuits — grounded, non-sparking recovery keeps conductive fines off the electrics." },
 ],
 challengesHeading: "Three hazards, one dust program",
 challenges: [
 { icon: Flame, title: "Combustible carbon dusts", detail: "Graphite and carbon black are combustible carbon dusts, handled by the ton in mixing rooms — squarely inside NFPA 652/660's DHA obligation." },
 { icon: Zap, title: "Conductive fines", detail: "The same graphite that fuels a deflagration also tracks and shorts on energized equipment — housekeeping doubles as electrical-infrastructure protection." },
 { icon: ShieldAlert, title: "Exposure-limited powders", detail: "Nickel- and cobalt-bearing cathode materials carry strict occupational exposure limits — HEPA capture and sealed disposal, whatever the combustibility test says." },
 { icon: HardHat, title: "Dry-room constraints", detail: "Assembly happens at ultra-low humidity; every piece of equipment entering the space is a moisture and particle question." },
 { icon: Timer, title: "Continuous generation", detail: "Slitting and notching shed electrode dust for as long as the line runs — there is no weekly shutdown to catch up in." },
 { icon: BatteryCharging, title: "Gigafactory scale", detail: "Kilometers of coated electrode per shift multiply every small emission into a program-sized housekeeping load." },
 ],
 materialsHeading: "Understand the powders. Match the recovery.",
 materials: [
 { name: "Graphite", combustible: "Yes — and electrically conductive", approach: "Explosion-proof HEPA recovery; electrical rooms on a defined vacuum frequency", href: "/materials/graphite-dust" },
 { name: "Carbon black / conductive carbon", combustible: "Yes — and electrically conductive", approach: "Explosion-proof HEPA recovery with grounded accessories" },
 { name: "NMC cathode powder", combustible: "Typically low as an oxide — verify by testing", approach: "HEPA capture and sealed disposal driven by Ni/Co exposure limits" },
 { name: "LFP cathode powder", combustible: "Typically low as an oxide — verify by testing", approach: "HEPA-filtered recovery; exposure assessment governs" },
 { name: "Lithium compounds (hydroxide, carbonate)", combustible: "No — caustic handling concern", approach: "Sealed HEPA recovery per the site's chemical-handling program" },
 { name: "PVDF and binder powders", combustible: "Yes — combustible polymer powders", approach: "Explosion-proof recovery in powder-handling areas" },
 ],
 materialsDirectory: { label: "battery manufacturing dusts", href: "/materials#battery-dusts" },
 applicationsHeading: "Applications in battery manufacturing",
 applicationCategorySlug: "battery-manufacturing",
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "central-vacuum-systems", "accessories"],
 studySlug: "graphite-dust-ev-battery-plant",
};
