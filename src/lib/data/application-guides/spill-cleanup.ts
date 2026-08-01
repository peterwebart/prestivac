import { Droplets, Filter, Gauge, Layers, Recycle, ShieldCheck, Zap } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const spillCleanupGuide: ApplicationGuideData = {
 slug: "spill-cleanup",
 title: "Spill Cleanup",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Spill Cleanup Vacuum Solutions",
 description:
 "Vacuum recovery for incidental spills — powder bag breaks that keep their material's rules, liquid leaks with slip and vapor management, and air-operated zero-electrical options for flammable areas. Emergencies belong to HAZWOPER, and the line is drawn before the spill.",
 },
 tagline: "Incidental spills, handled. Emergencies belong to HAZWOPER.",
 heroIntro:
 "Bag breaks, drum drips, process upsets — the routine releases a trained crew handles as part of the job, with recovery equipment matched to the material and staged before it's needed. And one honest line drawn in advance: where incidental ends, the emergency plan begins.",
 heroImage: {
 src: "/images/library/workers/chemical-spill-recovery.jpg",
 alt: "Operator recovering a liquid spill in a chemical processing area",
 },
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Rated recovery for combustible spills" },
 { icon: Filter, title: "HEPA Filtration", detail: "Exposure powders stay captured" },
 { icon: Zap, title: "Zero-Electrical Options", detail: "Air-operated for flammable areas" },
 { icon: Gauge, title: "Staged & Ready", detail: "Response measured in minutes" },
 ],
 overview:
 "A spill has two boundaries, and the program draws both before anything hits the floor. The first is material: a spill keeps the identity of what spilled. Flour on the floor is still a combustible dust; metal powder keeps its reactive-metal rules; an exposure-limit powder still owes HEPA retention and sealed disposal. Liquids add their own ledger — slip hazard immediately, vapor where the liquid is flammable, disposal always — and flammable liquids demand ignition-source elimination, which is exactly why air-operated recovery with zero electrical components is the flammable-area default. Wet-capable configurations exist across the lineup; confirming the right one for your specific liquids is an engineering conversation worth having before the spill. The second boundary is regulatory: OSHA's HAZWOPER framework separates incidental releases — limited quantity, no escalating hazard, handled by trained employees as routine work — from emergency responses that belong to trained response teams under 1910.120. This guide equips the incidental side. The moment a release threatens beyond routine control, the emergency plan takes over, full stop.",
 capabilities: [
 { icon: Layers, title: "Powder Spills", detail: "Bag breaks keep their material's rules" },
 { icon: Droplets, title: "Liquid Spills", detail: "Slip, vapor & disposal managed" },
 { icon: Zap, title: "Flammable-Area Response", detail: "Air-operated, grounded, zero electrical" },
 { icon: Recycle, title: "Sealed Disposition", detail: "The spill leaves in one contained step" },
 ],
 materialsHeading: "Common incidental spills",
 materials: [
 "Combustible powders (flour, sugar, resins)",
 "Metal powders & fines",
 "Flammable liquid drips & leaks",
 "Oils & coolants",
 "Process liquids & solutions",
 "Granular product spills",
 ],
 materialsNote: {
 text: "The spilled material's own guide still governs —",
 link: { label: "browse the materials directory", href: "/materials" },
 },
 challengesHeading: "Challenges in spill response",
 challenges: [
 "A spill inherits its material's rules — combustible stays combustible on the floor",
 "Wet floors are the immediate injury while the cleanup is being decided",
 "Flammable liquids pair vapor with every ignition source in reach",
 "The wrong equipment turns the cleanup itself into the ignition source",
 "The incidental-versus-emergency line has to be drawn before the spill, not during it",
 "Disposal is part of the spill — recovery that ends in an open container isn't finished",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Material-matched recovery staged in advance — the response is a walk, not a scramble",
 "Air-operated zero-electrical options remove the ignition question in flammable areas",
 "HEPA retention for exposure powders — the cleanup doesn't create the exposure",
 "Grounded, bonded equipment as the default, not the upgrade",
 "One contained step from floor to sealed disposition",
 "Documented response that slots into the spill plan and the training record",
 ],
 benefits: [
 { title: "Better Safety", detail: "The response never adds an ignition source or an exposure to the incident." },
 { title: "Higher Productivity", detail: "Staged equipment turns a line-down event into a minutes-long interruption." },
 { title: "Cost Savings", detail: "Single-pass recovery with sealed disposal — no absorbent mountains to buy and landfill." },
 { title: "Cleaner Workplace", detail: "The spill leaves completely, residue and all, instead of being spread thinner." },
 ],
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "industrial-vacuums"],
 setup: [
 { step: "Staged spill station", detail: "Unit, tools and drums positioned where the risk lives" },
 { step: "Material-matched tools", detail: "Floor tools and squeegee heads for powder and liquid" },
 { step: "Grounded, static-dissipative runs", detail: "Bonded path — mandatory around flammables" },
 { step: "Rated or air-operated unit", detail: "Matched to the material; zero-electrical for flammable areas" },
 { step: "Sealed collection & disposition", detail: "The spill leaves contained, documented, in one step" },
 ],
 setupNote: {
 text: "Liquids need configuration confirmation before staging —",
 link: { label: "get a quote", href: "/get-a-quote" },
 textAfter: "about compatibility with your specific materials.",
 },
 faqs: [
 {
 question: "Can a vacuum recover flammable liquid spills?",
 answer:
 "The class answer is why air-operated units exist: zero electrical components means zero electrical ignition sources, which makes them the flammable-area default. The specific answer — compatibility with your liquid, vapor behavior, the right configuration — is an engineering conversation to finish before the unit is staged, not after the spill.",
 },
 {
 question: "What counts as incidental versus emergency?",
 answer:
 "OSHA's HAZWOPER framework draws it: incidental releases are limited in quantity, pose no escalating hazard, and are handled by trained employees as routine work; anything beyond that is an emergency response belonging to trained teams under 1910.120. The critical discipline is drawing that line in your spill plan before anything spills — mid-incident is the wrong time to decide.",
 },
 {
 question: "Does spilling change what the material requires?",
 answer:
 "No — the floor doesn't neutralize anything. A flour spill is combustible dust demanding rated recovery; metal powder keeps its reactive-metal rules; exposure-limit powders still owe HEPA retention and sealed disposal. The material's own guide travels with it, which is why response equipment is matched to inventory in advance.",
 },
 {
 question: "What about unknown or corrosive spills?",
 answer:
 "Unknown means don't vacuum. Identify first — the SDS governs the method, the PPE and the disposal — and treat unidentified releases as escalating toward the emergency side of the line until proven otherwise. Recovery equipment serves the plan; it never substitutes for knowing what's on the floor.",
 },
 ],
 relatedApplications: [
 "Cleanroom Vacuuming",
 "Factory housekeeping",
 "Warehouse housekeeping",
 "Dust collector cleaning",
 "Shutdown cleaning",
 "Machine cleaning",
 "Loading dock cleaning",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
