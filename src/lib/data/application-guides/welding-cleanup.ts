import { Cog, Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const weldingCleanupGuide: ApplicationGuideData = {
 slug: "welding-cleanup",
 title: "Welding & Fabrication",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Metalworking & Machining", anchor: "metalworking-machining" },
 seo: {
 title: "Welding & Fabrication Cleanup Vacuum Solutions",
 description:
 "Industrial vacuum recovery for welding and fabrication shops — grinding fines, cooled spatter and slag, and mixed metal dust collected without blow-down, with HEPA retention for exposure-limit dusts.",
 },
 tagline: "The arc makes fume. The floor makes dust. Different systems.",
 heroIntro:
 "Fume extraction at the arc is exposure control for what's airborne. Everything that settles — grinding fines, cooled spatter, slag chips, mixed metal dust across fixtures and floors — belongs to the housekeeping program, and PrestiVac recovery collects it without the blow-down that puts it right back in the air.",
 heroImage: {
 src: "/images/library/workers/metalworking-safety-floor.jpg",
 alt: "Welding station being vacuumed clean of grinding dust and spatter",
 },
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery near hot work" },
 { icon: Filter, title: "HEPA Filtration", detail: "Exposure-limit dusts retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Continuous-duty performance" },
 ],
 overview:
 "Fabrication makes two particulate streams with two owners. Fume — the ultrafine airborne fraction created at the arc — is the extraction system's job, captured at the source while welding happens. The settled stream — grinding fines, cooled spatter and slag, blasting carryover, mixed metal dust on fixtures, ledges and floors — is the vacuum program's job. Blow-down bridges the two in exactly the wrong direction: it re-suspends settled fines into breathing zones and onto surfaces waiting for the next weld.",
 capabilities: [
 { icon: Wind, title: "Grinding Fines", detail: "The finest, most sensitive fraction" },
 { icon: Cog, title: "Spatter & Slag", detail: "Cooled solids and flux residues" },
 { icon: Filter, title: "Mixed Metal Dust", detail: "Carbon, stainless & coated steels" },
 { icon: Sparkles, title: "Weld-Prep Cleanliness", detail: "Contamination off the joint" },
 ],
 materialsHeading: "Common fabrication materials",
 materials: [
 "Carbon steel grinding dust",
 "Stainless steel grinding dust",
 "Aluminum fines",
 "Flux & slag residues",
 "Blasting media carryover",
 "Galvanized coating residues",
 ],
 materialsNote: {
 text: "Aluminum and other reactive-metal fines carry their own rules —",
 link: { label: "see the aluminum dust guide", href: "/materials/aluminum-dust" },
 },
 challengesHeading: "Challenges in welding & fabrication",
 challenges: [
 "Fume-versus-dust confusion leaves the settled stream unmanaged",
 "Grinding fines of aluminum and other reactive metals are combustible",
 "Blow-down re-suspends fines into breathing zones and onto fresh joints",
 "Spatter and slag must cool before recovery — hot material never enters a unit",
 "Stainless and coated-steel dusts carry occupational exposure limits",
 "Housekeeping is a documented, inspectable compliance obligation",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Separates the streams correctly: extraction owns the arc, recovery owns the floor",
 "Grounded, rated equipment in a space where ignition sources are guaranteed",
 "HEPA retention for dusts governed by exposure limits",
 "Single-pass removal ends the resuspend-and-resettle cycle",
 "Clean fixtures and joints protect weld quality, not just compliance",
 "Supports OSHA housekeeping obligations with documented methods",
 ],
 benefits: [
 { title: "Better Safety", detail: "Grounded recovery in a shop where sparks and hot work are the day's normal." },
 { title: "Higher Productivity", detail: "Stations turn over in one pass — no sweep, resettle, sweep again." },
 { title: "Cost Savings", detail: "Grit off the ways, fixtures and finished work cuts rework and wear." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps exposure-limit dusts out of the air." },
 ],
 recommended: ["explosion-proof-vacuums", "industrial-vacuums", "hepa-vacuums"],
 setup: [
 { step: "Fabrication station", detail: "Grinding, welding and finishing at the point of generation" },
 { step: "Grounded tool kit", detail: "Floor tools, crevice nozzles and brushes for fixtures and ledges" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated vacuum unit", detail: "Explosion-proof or HEPA industrial, matched to the dust mix" },
 { step: "Sealed collection & disposal", detail: "Cooled material only; exposure-limit dusts contained" },
 ],
 setupNote: {
 text: "Mixed-metal shops specify for the most demanding dust in the mix —",
 link: { label: "the metalworking deep dive", href: "/industries/metalworking" },
 textAfter: "walks through it.",
 },
 faqs: [
 {
 question: "We have fume extractors — why do we need vacuums too?",
 answer:
 "Different jobs. Extraction captures the ultrafine fume plume at the arc while welding happens; it does nothing about the grinding fines, spatter and mixed dust that settle across the shop. The vacuum program owns the settled stream — neither system substitutes for the other.",
 },
 {
 question: "Can I vacuum up hot slag and spatter?",
 answer:
 "No — hot or smoldering material never enters a vacuum. Let spatter and slag cool, then recover; schedule station cleanup after hot work or work a cooled zone. The rule is absolute regardless of unit rating.",
 },
 {
 question: "Are welding-area dusts actually combustible?",
 answer:
 "The grinding fines of aluminum and other reactive metals are; carbon-steel dust is generally less severe. The mix and your Dust Hazard Analysis govern — and since ignition sources are guaranteed in a fab shop, grounded, rated recovery equipment is the sensible default.",
 },
 {
 question: "What about stainless and galvanized dust?",
 answer:
 "Settled dusts from stainless and coated-steel work carry occupational exposure limits, which makes HEPA retention and sealed disposal the exposure controls for the cleanup side. The fume-side limits belong to the extraction system at the arc.",
 },
 ],
 relatedApplications: [
 "Grinding Dust",
 "Metal fabrication",
 "CNC grinding",
 "Shot blasting",
 "Surface finishing",
 "Deburring",
 "Plasma cutting",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
