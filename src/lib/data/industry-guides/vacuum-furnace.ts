import { AlertTriangle, Filter, Flame, ShieldCheck, Wind, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const vacuumFurnaceGuide: IndustryGuideData = {
 slug: "vacuum-furnace",
 name: "Vacuum Furnace & Heat Treatment",
 titleAccent: "vacuum furnace & heat treatment",
 seo: {
 title: "How to Safely Recover Dust in Vacuum Furnace & Heat Treatment?",
 description:
 "The furnace itself is lined with combustible dust — vacuum-furnace hot zones use graphite insulation, elements and fixtures, so maintenance and cleanout generate conductive, combustible graphite dust in confined spaces. Add metal condensate, braze and sintering powders. Rated, bonded, HEPA-retained recovery.",
 },
 heroIntro:
 "The industry where the furnace itself is lined with combustible dust — vacuum-furnace hot zones are built from graphite insulation, heating elements and fixtures, so maintenance and cleanout liberate graphite dust that is both combustible and electrically conductive, often inside a confined hot zone. Metal condensate, braze residues and sintering powders round out a recovery picture that demands rated, bonded equipment.",
 badges: [
 { icon: ShieldCheck, title: "Graphite & Confined-Space Aware", detail: "Hot-zone cleanout" },
 { icon: Flame, title: "Furnace Hot Zones", detail: "Graphite-lined" },
 { icon: Filter, title: "HEPA Filtration", detail: "Conductive fines retained" },
 { icon: Zap, title: "Conductive Graphite Dust", detail: "Bond & ground" },
 ],
 stagesIntro:
 "Vacuum heat-treating and its cousins — brazing and sintering — generate dust from the furnace lining itself and from the materials processed. Walk the stages where recovery belongs.",
 stages: [
 { label: "Hot-zone maintenance", detail: "Graphite insulation and felt in the hot zone degrade and shed conductive, combustible graphite dust — the signature dust of vacuum-furnace work, captured with rated, bonded recovery." },
 { label: "Heating-element service", detail: "Graphite heating elements erode over time, adding conductive graphite dust to the maintenance stream during inspection and replacement." },
 { label: "Furnace cleanout", detail: "Cleaning the chamber removes graphite soot and metal condensate from inside a confined hot zone, under confined-space discipline and with static-safe equipment." },
 { label: "Metal-condensate removal", detail: "Vacuum processing deposits metal condensate on cold surfaces; depending on the alloys run, that condensate can be reactive and is recovered sealed and carefully." },
 { label: "Brazing", detail: "Vacuum and controlled-atmosphere brazing handle fine braze powders and residues — metal powders carrying combustible-metal rules where reactive." },
 { label: "Sintering & powder metallurgy", detail: "Sintering handles metal powder as feedstock; loose powder is a combustible metal captured with grounded, rated, dedicated recovery." },
 { label: "Quench area", detail: "Oil-quench areas generate flammable-liquid residues, recovered with wet-capable, rated equipment configured for the material." },
 { label: "Housekeeping", detail: "Hot-zone soot and fines are fine and clinging, so HEPA-retained recovery keeps conductive, combustible dust from accumulating on equipment and surfaces." },
 ],
 challengesHeading: "A furnace built from combustible dust",
 challenges: [
 { icon: Zap, title: "Conductive Graphite Dust", detail: "Hot-zone graphite insulation and elements shed dust that is both combustible and electrically conductive — rated, bonded, conductive-aware recovery is required." },
 { icon: Flame, title: "Confined Hot-Zone Cleanout", detail: "Furnace cleanout happens inside confined hot zones coated in graphite soot and condensate, under confined-space discipline with static-safe equipment." },
 { icon: AlertTriangle, title: "Metal Condensate", detail: "Vacuum processing deposits metal condensate that can be reactive depending on the alloys processed — recovered sealed and carefully." },
 { icon: Wind, title: "Braze & Sintering Powders", detail: "Brazing and sintering (powder metallurgy) handle fine metal and braze powders that carry combustible-metal rules." },
 { icon: ShieldCheck, title: "Combustible + Conductive", detail: "Graphite dust is combustible and electrically conductive at once, so recovery must be both rated and static-safe — neither property can be ignored." },
 { icon: Filter, title: "Fine Soot & Fines", detail: "Hot-zone soot and fines are fine and clinging, so HEPA-retained recovery is essential to keep them contained." },
 ],
 materialsHeading: "What furnace work generates",
 materials: [
 { name: "Graphite hot-zone dust", combustible: "Yes — and conductive", approach: "Rated, bonded, conductive-aware recovery", href: "/materials/graphite-dust" },
 { name: "Metal condensate", combustible: "Varies — some reactive", approach: "Sealed, careful recovery per the alloys run" },
 { name: "Braze powders & residues", combustible: "Metal powder", approach: "Rated recovery for the fine fraction" },
 { name: "Sintering / powder-met metal powder", combustible: "Combustible metal", approach: "Grounded, rated, dedicated recovery", href: "/materials/titanium-dust" },
 { name: "Quench oil residue", combustible: "Flammable liquid", approach: "Wet-capable, rated configuration" },
 { name: "General furnace dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in heat treatment",
 applicationCategorySlug: "metalworking-machining",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "titanium-powder-additive-manufacturing",
};
