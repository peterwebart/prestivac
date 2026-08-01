import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const magnesiumDustGuide: MaterialGuideData = {
 slug: "magnesium-dust",
 name: "Magnesium Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Magnesium Dust Vacuum Solutions",
 description:
 "Magnesium is among the most ignitable structural metals — Class D fire behavior, hydrogen evolution when wet. How its fines are safely collected under NFPA 484 / 660: air-operated vacuums, vented wet collection, verified grounding.",
 },
 heroIntro:
 "Built for the most ignition-sensitive of the common structural metals — where even the collected material keeps making demands: wetting controls ignition, hydrogen evolution demands venting, and nothing about magnesium tolerates improvisation.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 484 / 660 practice" },
 { icon: Filter, title: "Vented Wet Collection", detail: "Ignition controlled; hydrogen managed" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded construction" },
 { icon: Factory, title: "Built for Industry", detail: "Die casting to finish machining" },
 ],
 facts: [
 { label: "Material type", value: "Combustible, highly reactive metal dust" },
 { label: "Fire class", value: "Class D — water and even CO2 can intensify or sustain burning magnesium" },
 { label: "Wet-handling caution", value: "Wet magnesium fines evolve hydrogen — vented containers, never airtight" },
 { label: "Governing standards", value: "NFPA 484, consolidated into NFPA 660" },
 ],
 overview: [
 "Magnesium sits at the sharp end of the combustible-metals family. It is among the most ignitable of the common structural metals — machining magnesium dry carries a documented chip-fire risk, and its fine fractions ignite with very little energy. Burning magnesium is a Class D fire in the fullest sense: water reacts with it, and it can sustain combustion even in carbon dioxide, which removes two reflexive responses from the table and makes prevention the entire strategy.",
 "Collection adds a wrinkle unique among the metals in this library: wetting is how ignition is controlled — wet-type collection is the established practice for magnesium fines under NFPA 484 — but wet magnesium evolves hydrogen. The engineered answer holds both facts at once: fines are wetted on entry to prevent a dry, ignitable accumulation, and everything downstream is vented, promptly handled and never sealed airtight. Dedicated, grounded, air-operated equipment closes the ignition side of the specification.",
 ],
 industries: [
 { label: "Automotive", href: "/#automotive" },
 { label: "Aerospace", href: "/#aerospace" },
 { label: "Metal Fabrication", href: "/#metalworking" },
 { label: "CNC Machining", href: "/applications/cnc-machining" },
 { label: "Die Casting", href: "/applications#metalworking-machining" },
 { label: "Surface Finishing", href: "/applications#metalworking-machining" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Among the most ignitable structural metals — fine fractions ignite with very little energy, and dry machining carries documented chip-fire risk",
 "Class D fire behavior: water reacts with burning magnesium, and combustion can be sustained even in CO2",
 "Wet magnesium fines and swarf evolve hydrogen — sealed, unvented storage turns collected material into a new hazard",
 "Settled fines on equipment and structure fuel secondary explosions — the mechanism the housekeeping standards target",
 "Mixing magnesium fines with iron oxides can create thermite-sensitive mixtures — dedicated collection avoids it",
 ],
 solutions: [
 "Air-operated explosion-proof vacuums — no electrical components anywhere on the unit",
 "Wet collection with hydrogen venting: fines wetted on entry, containers vented and promptly handled",
 "Grounded, bonded conductive path from nozzle to chassis, verified — not assumed",
 "Anti-static hoses with non-sparking stainless tools at the pickup point",
 "Magnesium-dedicated equipment — no shared units across metal families",
 ],
 configuration: [
 { step: "Collection tool", detail: "Grounded wand or nozzle at the source" },
 { step: "Anti-static hose", detail: "Conductive path, bonded end to end" },
 { step: "Air-operated EX unit", detail: "Zero electrical components near the material" },
 { step: "Vented wet separation", detail: "Fines wetted on entry; hydrogen vented, never trapped" },
 { step: "Vented transfer container", detail: "Prompt, wetted handling to disposition — never airtight" },
 ],
 bestPractices: [
 "Verify grounding and bonding before every use — continuity, not assumption",
 "Never sweep, blow down or dry-brush magnesium fines: vacuum capture only",
 "Vent everything wet: containers, separators and sludge handling — hydrogen must never accumulate",
 "Handle collected sludge promptly on a defined schedule; no standing wet accumulations",
 "Keep Class D agents where magnesium is worked — and design the program so they're never needed",
 ],
 faqs: [
 {
 question: "Is magnesium flammable?",
 answer:
 "Yes — notably so. Magnesium is among the most readily ignitable structural metals, and its fines and powder burn at extreme temperature once lit. Water is actively dangerous on burning magnesium because it liberates hydrogen. Prevention is the whole strategy: no accumulation, no ignition sources, Class D methods, and recovery equipment that cannot spark.",
 },
 {
 question: "Is magnesium dust more dangerous than aluminum dust?",
 answer:
 "It is generally more ignition-sensitive — magnesium is among the most ignitable structural metals, with documented chip-fire risk even in machining. Both are severe combustible metal dusts under NFPA 484/660; magnesium simply leaves less margin for improvisation.",
 },
 {
 question: "Why can't water or CO2 be used on burning magnesium?",
 answer:
 "Burning magnesium reacts with water and can sustain combustion even in carbon dioxide — both can intensify a Class D metal fire. That's why the engineering posture is prevention: no dry accumulation, no ignition source, wetted collection with the hydrogen consequence managed by venting.",
 },
 {
 question: "If wetting magnesium makes hydrogen, why is wet collection the practice?",
 answer:
 "Because the alternative — dry, ignitable fines inside a collection vessel — is worse, and the hydrogen consequence is manageable by design: wet-type collection under NFPA 484 practice pairs wetting-on-entry with vented containers and prompt sludge handling. The rule is simple: wet magnesium is never sealed airtight.",
 },
 {
 question: "What about magnesium machining chips and swarf?",
 answer:
 "Magnesium is the metal where coarser fractions still demand respect — chip fires during dry machining are a documented hazard, and wet swarf evolves hydrogen in storage. Vented, dedicated handling applies to the swarf stream as much as the fines.",
 },
 ],
 studySlug: "magnesium-fines-automotive-components",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "accessories"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Titanium Dust guide", href: "/materials/titanium-dust" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
