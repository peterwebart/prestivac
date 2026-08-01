import {
 Car,
 Droplets,
 Filter,
 Flame,
 ShieldAlert,
 Timer,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const automotiveGuide: IndustryGuideData = {
 slug: "automotive",
 name: "Automotive",
 titleAccent: "automotive manufacturing",
 seo: {
 title: "Automotive Manufacturing Vacuum Solutions",
 description:
 "Industrial vacuum solutions for automotive plants: explosion-proof recovery for aluminum and magnesium machining fines, chips-plus-coolant streams, powder coating areas and EV battery lines — built to NFPA 660 practice.",
 },
 heroIntro:
 "An automotive plant runs half the combustible dust catalog under one roof: reactive metal fines off powertrain machining, chips swimming in coolant, charged powder in the paint shop, and — increasingly — conductive graphite on the EV line. The program is material segregation plus scheduled recovery, area by area.",
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines retained, not redistributed" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Car, title: "Built for Plants", detail: "Machining halls to final assembly" },
 ],
 stagesIntro:
 "Each production area generates its own dust family with its own rules — the stages below trace the fuel from the press shop to the loading dock.",
 stages: [
 { label: "Stamping & body-in-white", detail: "Slug fragments, lubricant mist and grinding dust around the presses — routine recovery keeps walkways and pits clear." },
 { label: "Welding & joining", detail: "Weld and grinding residues settle across fixtures and floors; vacuum recovery replaces the blow-down habit that re-suspends them." },
 { label: "Powertrain machining", detail: "Aluminum and magnesium fines are the plant's most severe dust stream — wetted, sealed explosion-proof recovery with material-dedicated units." },
 { label: "Casting & foundry operations", detail: "Sand, metal fines and thermal surroundings — heavy-duty recovery sized for abrasive mixed debris." },
 { label: "Paint shop & powder coating", detail: "The process charges powder by design — recovery equipment joins the grounded system, and waste stays segregated from reclaim." },
 { label: "EV battery line", detail: "Graphite and cathode dusts bring conductive-fines discipline — explosion-proof HEPA units and electrical rooms on a defined frequency." },
 { label: "Final assembly", detail: "Lighter duty but constant: trim debris, fastener dust and housekeeping at takt — portable units follow the line." },
 { label: "Warehouse & logistics", detail: "Spill response and rack cleaning close the loop with sealed recovery at the dock." },
 ],
 challengesHeading: "Half the dust catalog under one roof",
 challenges: [
 { icon: Flame, title: "Reactive metal fines", detail: "Aluminum machining fines run St 2 to St 3 severity, and magnesium is the most ignition-sensitive structural metal — the powertrain hall sets the plant's specification." },
 { icon: ShieldAlert, title: "Mixed-material streams", detail: "Material-dedicated, labeled equipment closes cross-contamination pathways — including the iron-oxide-plus-aluminum thermite pairing." },
 { icon: Droplets, title: "Chips plus coolant", detail: "Wet/dry explosion-proof recovery separates reclaimable coolant from solids at the machine instead of losing both to the floor." },
 { icon: Zap, title: "Charged finishing areas", detail: "Paint and powder shops charge particles on purpose — recovery equipment must be part of the bonded, grounded system before it enters." },
 { icon: Filter, title: "The EV line arrives", detail: "Graphite dust is combustible and electrically conductive — a settled film near live circuits is a fault pathway as well as a fuel layer." },
 { icon: Timer, title: "Scale and cadence", detail: "A plant this size needs defined frequencies per area and condition-based triggers — best-effort cleaning can't hold the accumulation targets." },
 ],
 materialsHeading: "Understand the dusts. Match the recovery.",
 materials: [
 { name: "Aluminum machining fines", combustible: "Yes — St 2 to St 3 severity", approach: "Wetted, sealed explosion-proof recovery; material-dedicated units", href: "/materials/aluminum-dust" },
 { name: "Magnesium fines & swarf", combustible: "Yes — most ignition-sensitive", approach: "Wetted collection, vented containers — never airtight", href: "/materials/magnesium-dust" },
 { name: "Steel & cast iron chips", combustible: "Lower severity — fines still tested", approach: "Wet/dry recovery with coolant reclaim" },
 { name: "Graphite & electrode dust", combustible: "Yes — and electrically conductive", approach: "Explosion-proof HEPA recovery; electrical rooms on schedule", href: "/materials/graphite-dust" },
 { name: "Powder coating overspray", combustible: "Yes — uncured powder", approach: "Grounded recovery; waste segregated from reclaim" },
 { name: "Brake & friction material dust", combustible: "Varies — formulation governs", approach: "HEPA capture and sealed disposal per the material documentation" },
 ],
 materialsDirectory: { label: "metal dusts", href: "/materials#metal-dusts" },
 applicationsHeading: "Applications in automotive",
 applicationCategorySlug: "automotive",
 recommended: ["explosion-proof-vacuums", "wet-dry-systems", "pneumatic-vacuums", "central-vacuum-systems"],
 studySlug: "aluminum-dust-automotive-machining",
};
