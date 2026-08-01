import { Cog, Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const thermalSprayGuide: ApplicationGuideData = {
 slug: "thermal-spray",
 title: "Thermal Spray & Coating",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Metalworking & Machining", anchor: "metalworking-machining" },
 seo: {
 title: "Thermal Spray & Coating Vacuum Solutions",
 description:
 "Industrial vacuum recovery for thermal spray — plasma, HVOF, arc and flame spray — where reactive-metal feedstock and the overspray that never adheres are both combustible powders. Grounded, rated recovery reclaims valuable feedstock and keeps the booth clean.",
 },
 tagline: "Not all of it lands — and what doesn't is combustible powder.",
 heroIntro:
 "Thermal spray melts metal or ceramic feedstock and drives it onto a surface — but not all of it adheres. The result is two powder streams: unused feedstock and the fine overspray that collects on booth surfaces. Where the feedstock is a reactive metal, both are combustible, and the feedstock is valuable enough that recovery pays for itself in reclaim alone.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery for reactive powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine metal & ceramic fractions retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Continuous-duty performance" },
 ],
 overview:
 "Thermal spray — plasma, HVOF, arc and flame spray — applies metal and ceramic coatings from powder or wire feedstock, and transfer efficiency is never total. What misses the part becomes two things: reclaimable feedstock and fine overspray dust that settles across the booth. Metal feedstock such as aluminum, titanium, MCrAlY and tungsten carbide is combustible where the metal is reactive, and so is its overspray; ceramic feedstock is respirable. Booth dust collection handles the airborne plume, while recovery captures the settled overspray, keeps the booth clean, and reclaims feedstock that is often expensive by the kilogram.",
 capabilities: [
 { icon: Wind, title: "Overspray Dust", detail: "The fraction that never adheres" },
 { icon: Filter, title: "Reactive-Metal Powder", detail: "Combustible feedstock & overspray" },
 { icon: Cog, title: "Feedstock Powder", detail: "Reclaimed where valuable" },
 { icon: Sparkles, title: "Booth Cleanliness", detail: "Surfaces kept clear between runs" },
 ],
 materialsHeading: "Common thermal-spray materials",
 materials: [
 "Metal spray powder (Al, Ti, MCrAlY)",
 "Overspray fines",
 "Tungsten carbide powder",
 "Ceramic feedstock dust",
 "Reclaimable feedstock",
 "Mixed booth residue",
 ],
 materialsNote: {
 text: "Reactive-metal feedstock carries its own combustible rules —",
 link: { label: "see the titanium dust guide", href: "/materials/titanium-dust" },
 },
 challengesHeading: "Challenges in thermal spray",
 challenges: [
 "Reactive-metal feedstock and its overspray are combustible",
 "Feedstock is valuable, so reclaim versus disposal matters",
 "Ceramic overspray is respirable and demands HEPA retention",
 "Overspray accumulates on booth surfaces between runs",
 "Fume at the gun and settled dust in the booth are different jobs",
 "Mixing feedstocks risks both reactivity and coating-quality problems",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Reclaims valuable feedstock that would otherwise be discarded",
 "Grounded, rated equipment for combustible reactive-metal overspray",
 "HEPA retention for respirable ceramic and exposure-limit dust",
 "Keeps the booth clean so overspray does not accumulate",
 "Dedicated recovery keeps feedstocks from cross-contaminating",
 "Supports combustible-dust compliance with documented methods",
 ],
 benefits: [
 { title: "Better Safety", detail: "Combustible metal overspray is grounded and captured, not left to build up." },
 { title: "Higher Productivity", detail: "A clean booth turns over faster between coating runs." },
 { title: "Cost Savings", detail: "Reclaimed feedstock offsets the cost of expensive spray powder." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps respirable overspray out of the air." },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums"],
 setup: [
 { step: "Spray booth", detail: "Plasma, HVOF, arc or flame spray at the coating station" },
 { step: "Grounded tool kit", detail: "Nozzles and brushes for booth surfaces and fixtures" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated vacuum unit", detail: "Explosion-proof or HEPA industrial, matched to the feedstock" },
 { step: "Sealed collection & reclaim", detail: "Feedstock reclaimed; combustible overspray contained" },
 ],
 setupNote: {
 text: "Reactive-metal powder handling shares its discipline with additive manufacturing —",
 link: { label: "the metal 3D printing guide", href: "/applications/metal-3d-printing" },
 textAfter: "walks through the powder-management side.",
 },
 faqs: [
 {
 question: "Is thermal-spray overspray combustible?",
 answer:
 "Where the feedstock is a reactive metal — aluminum, titanium, MCrAlY and similar — yes, both the feedstock and its overspray are combustible, and the overspray is often the finer, more sensitive fraction. Grounded, rated recovery is the sensible default, while ceramic feedstocks are handled for their respirable rather than their combustion hazard.",
 },
 {
 question: "Can I reclaim the feedstock powder?",
 answer:
 "Often it is worth doing — spray feedstocks like MCrAlY and carbides are expensive by the kilogram, so recovering usable overspray and unused powder offsets real cost. Reclaim is balanced against contamination and specification requirements, but the economics frequently favor capturing rather than discarding it.",
 },
 {
 question: "How is this different from booth dust collection?",
 answer:
 "They are complementary, much like fume extraction and floor recovery in welding. Booth dust collection captures the airborne plume at the gun during spraying; recovery handles the overspray that settles on booth surfaces and fixtures afterward, and reclaims feedstock. Neither substitutes for the other.",
 },
 {
 question: "Does it matter if we run several feedstocks?",
 answer:
 "It can, on two fronts. Mixing reactive-metal powders raises reactivity concerns, and cross-contaminating one feedstock into another is a coating-quality problem. Operations sensitive to either keep dedicated recovery per feedstock rather than sharing a single unit across materials.",
 },
 ],
 relatedApplications: [
 "Grinding Dust",
 "Plasma spray",
 "HVOF",
 "Arc spray",
 "Coating",
 "Metal 3D printing",
 "Surface finishing",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
