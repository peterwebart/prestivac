import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const titaniumDustGuide: MaterialGuideData = {
 slug: "titanium-dust",
 name: "Titanium Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Titanium Dust Vacuum Solutions",
 description:
 "Titanium dust is a combustible, reactive metal dust with Class D fire behavior. How it's safely collected: air-operated explosion-proof vacuums, immersion separation and grounded recovery under NFPA 484 / 660.",
 },
 heroIntro:
 "Engineered to safely collect and contain titanium dust and powders — a reactive metal whose fire behavior makes prevention the only sensible strategy, and whose fine fractions demand it.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 484 / 660 practice" },
 { icon: Filter, title: "Immersion & HEPA", detail: "Fines wetted on entry; 99.99% final stage" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded construction" },
 { icon: Factory, title: "Built for Industry", detail: "Continuous-duty recovery" },
 ],
 facts: [
 { label: "Material type", value: "Combustible, reactive metal dust" },
 { label: "Fire class", value: "Class D — water and standard agents can intensify burning titanium" },
 { label: "Governing standards", value: "NFPA 484, consolidated into NFPA 660" },
 { label: "Primary controls", value: "Air-operated drives, immersion separation, grounding & bonding" },
 ],
 overview: [
 "Titanium earns its aerospace reputation from strength and corrosion resistance in bulk — and its safety reputation from the opposite behavior when fine. Grinding and polishing dust, and the powders additive manufacturing is built on, sit in the fine, ignitable range where titanium becomes a combustible, reactive metal dust governed by NFPA 484, carried into the consolidated NFPA 660.",
 "What sets titanium apart is what happens if prevention fails: burning titanium is a Class D metal fire that water and standard agents can intensify. The engineering answer is to make burning impossible by state change — air-operated recovery with no electrical ignition sources, a verified grounding path against static, and immersion separation that wets fines the moment they enter the system.",
 ],
 industries: [
 { label: "Additive Manufacturing", href: "/#additive-manufacturing" },
 { label: "Aerospace", href: "/#aerospace" },
 { label: "Medical Devices", href: "/industries#medical-devices" },
 { label: "Automotive", href: "/#automotive" },
 { label: "CNC Machining", href: "/applications/cnc-machining" },
 { label: "Metal 3D Printing", href: "/applications/metal-3d-printing" },
 { label: "Surface Finishing", href: "/applications#metalworking-machining" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Fine titanium forms explosive clouds when dispersed — grinding, polishing and AM powder handling generate exactly that fraction",
 "Very low ignition energy in fine fractions: static discharge can be sufficient",
 "Burning titanium is a Class D metal fire — water and standard extinguishers can intensify it, which makes prevention the strategy",
 "AM process condensate ('soot') is finer and more reactive than virgin powder",
 "Settled layers on equipment and structure fuel secondary explosions — the mechanism the housekeeping standards target",
 ],
 solutions: [
 "Air-operated explosion-proof vacuums — no electrical components anywhere on the unit",
 "Immersion separation: fines pass into a liquid bath on entry and never accumulate dry",
 "Grounded, bonded conductive path from nozzle to chassis, verified — not assumed",
 "Anti-static hoses with non-sparking stainless tools at the pickup point",
 "Tested HEPA final stage (99.99% at 0.3 µm) so captured fines stay captured",
 ],
 configuration: [
 { step: "Collection tool", detail: "Grounded wand or detail nozzle at the source" },
 { step: "Anti-static hose", detail: "Conductive path, bonded end to end" },
 { step: "Air-operated EX unit", detail: "Zero electrical components in the powder area" },
 { step: "Immersion separation", detail: "Fines wetted the moment they enter" },
 { step: "Sealed container", detail: "Wetted transfer to disposition" },
 ],
 bestPractices: [
 "Verify grounding and bonding before every use — continuity, not assumption",
 "Never brush, wipe or blow down fine titanium: vacuum capture only",
 "Treat AM chamber condensate as the most reactive material on site",
 "Keep Class D extinguishing agents where titanium is handled — and design so they're never needed",
 "Dispose of collected titanium wetted and sealed, per your site's procedures",
 ],
 faqs: [
 {
 question: "Is titanium flammable?",
 answer:
 "Bulk titanium is hard to ignite; titanium fines, turnings and powder are readily ignitable and burn at extreme temperature once started. It is a combustible metal under NFPA 660 (formerly NFPA 484). Water and carbon dioxide are inappropriate on burning titanium, so the emphasis falls on preventing ignition — controlled recovery, no accumulation, no sparks near fines.",
 },
 {
 question: "Why does titanium dust collection need special equipment?",
 answer:
 "Because the recovery step itself can supply the ignition energy. Titanium fines are conductive and ignition-sensitive, so the vacuum has to be grounded and bonded throughout, free of ignition sources, and in many cases an immersion-separation approach is specified so recovered fines are kept wetted rather than accumulated dry.",
 },
 {
 question: "Is titanium dust explosive?",
 answer:
 "Fine titanium is a combustible, reactive metal dust with very low ignition energy in fine fractions — governed by NFPA 484, now within the consolidated NFPA 660. Coarse chips are not the concern; the fine dust from grinding, polishing and AM powder handling is.",
 },
 {
 question: "Why is water dangerous with burning titanium?",
 answer:
 "Burning titanium is a Class D metal fire: water and standard extinguishing agents can intensify it. That's why the engineering strategy is prevention — immersion separation wets fines on entry so a dry, ignitable accumulation never forms in the first place.",
 },
 {
 question: "What about titanium machining chips versus powder?",
 answer:
 "Chips and swarf are an operations concern; the explosion hazard lives in the fine fraction — grinding and polishing dust, and AM powders built to tens of microns. The finer the fraction, the stricter the recovery requirement.",
 },
 {
 question: "Why air-operated vacuums for titanium?",
 answer:
 "Air operation removes every electrical component from the unit — nothing to classify, derate or fail sparking near a material this ignition-sensitive. Combined with immersion separation, it addresses both halves of the hazard at once.",
 },
 ],
 studySlug: "titanium-powder-additive-manufacturing",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "accessories"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Magnesium Dust guide", href: "/materials/magnesium-dust" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
