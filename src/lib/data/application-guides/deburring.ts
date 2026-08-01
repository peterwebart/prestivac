import { Cog, Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const deburringGuide: ApplicationGuideData = {
 slug: "deburring",
 title: "Deburring & Finishing",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Metalworking & Machining", anchor: "metalworking-machining" },
 seo: {
 title: "Deburring & Finishing Vacuum Solutions",
 description:
 "Industrial vacuum recovery for deburring, edge-breaking and surface finishing — the fine, often reactive metal fines from benches, tumblers and finishing machines, captured at the source with grounded, HEPA-retained equipment.",
 },
 tagline: "Every edge you clean up becomes dust somewhere else.",
 heroIntro:
 "Deburring, edge-breaking and surface finishing remove what machining leaves behind — and every burr and edge removed becomes fine metal dust, often the finest and most reactive fraction in the shop. From hand benches to vibratory tumblers to finishing machines, recovery captures it at the source before it settles across the floor.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery for reactive fines" },
 { icon: Filter, title: "HEPA Filtration", detail: "Exposure-limit dusts retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Continuous-duty performance" },
 ],
 overview:
 "Finishing is where machining's leftovers become airborne. Manual deburring, vibratory and rotary tumbling, and abrasive finishing all shave fine metal from part edges and surfaces — and that fine fraction is frequently the most reactive one a shop produces. For aluminum, titanium and other reactive metals, deburring fines carry the full combustible-metal rules; for stainless and coated alloys, they carry exposure limits. Capture belongs at the bench and the finishing machine, and the finest, most sensitive dust is exactly what a grounded, rated recovery system is built to hold.",
 capabilities: [
 { icon: Wind, title: "Fine Metal Fines", detail: "The finest, most sensitive fraction" },
 { icon: Filter, title: "Reactive-Metal Dust", detail: "Combustible aluminum & titanium" },
 { icon: Sparkles, title: "Finishing-Media Dust", detail: "Tumbling and vibratory residue" },
 { icon: Cog, title: "Bench & Machine Capture", detail: "Manual and automated stations" },
 ],
 materialsHeading: "Common deburring & finishing materials",
 materials: [
 "Aluminum deburring fines",
 "Steel & stainless fines",
 "Titanium finishing dust",
 "Tumbling & vibratory media dust",
 "Mixed metal fines",
 "Polishing compound residue",
 ],
 materialsNote: {
 text: "Reactive-metal fines carry their own combustible rules —",
 link: { label: "see the aluminum dust guide", href: "/materials/aluminum-dust" },
 },
 challengesHeading: "Challenges in deburring & finishing",
 challenges: [
 "Deburring produces the finest, most ignition-sensitive metal fraction in the shop",
 "Aluminum, titanium and reactive-metal fines are combustible",
 "Vibratory and rotary tumbling generate their own media dust",
 "Dust comes from both manual benches and automated finishing machines",
 "Mixed-metal shops risk cross-contamination between reactive powders",
 "Stainless and coated-alloy fines carry occupational exposure limits",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Captures the finest fraction at the bench and the machine",
 "Grounded, rated equipment for combustible reactive-metal fines",
 "HEPA retention for dusts governed by exposure limits",
 "Dedicated recovery keeps reactive powders from mixing where it matters",
 "Clean parts and surfaces protect finish quality, not just safety",
 "Supports combustible-dust and exposure-limit compliance",
 ],
 benefits: [
 { title: "Better Safety", detail: "The most reactive fines in the shop are captured, not left to accumulate." },
 { title: "Higher Productivity", detail: "Finishing stations stay clean and parts move without a resettle cycle." },
 { title: "Cost Savings", detail: "Reclaimed finishing media and cleaner parts cut waste and rework." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps fine metal dust out of the air." },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums"],
 setup: [
 { step: "Finishing station", detail: "Hand deburring, tumbling or machine finishing at the source" },
 { step: "Grounded tool kit", detail: "Crevice nozzles and brushes for benches and machine housings" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated vacuum unit", detail: "Explosion-proof or HEPA industrial, matched to the metal" },
 { step: "Sealed collection & disposal", detail: "Reactive and exposure-limit fines contained" },
 ],
 setupNote: {
 text: "Mixed-metal shops specify for the most demanding fine in the mix —",
 link: { label: "the metalworking deep dive", href: "/industries/metalworking" },
 textAfter: "walks through it.",
 },
 faqs: [
 {
 question: "Are deburring fines really combustible?",
 answer:
 "For reactive metals, yes — and often more so than the machining chips they come from, because deburring produces a finer fraction. Aluminum, titanium and magnesium fines are combustible; steel is generally less severe. Your material and Dust Hazard Analysis govern, and grounded, rated recovery is the safe default for reactive-metal shops.",
 },
 {
 question: "What about tumbling and vibratory finishing media?",
 answer:
 "Vibratory and rotary tumbling generate their own dust from the media as well as the parts — a mixed fine dust captured with HEPA retention. Where the parts are reactive metals, that media dust is bound up with combustible metal fines and handled to the same standard.",
 },
 {
 question: "We run several metals — does cross-contamination matter?",
 answer:
 "It can, on two fronts. Mixing reactive-metal powders can raise reactivity concerns, and cross-contaminating one alloy's dust into another is a quality problem for the parts. Shops sensitive to either keep dedicated recovery per material rather than a shared unit.",
 },
 {
 question: "Manual benches or finishing machines — which needs recovery?",
 answer:
 "Both. Hand deburring sheds fines right in the operator's breathing zone, while automated finishing machines concentrate dust at the equipment. Capture is specified for each — at the bench and at the machine — so neither source is left to settle across the shop.",
 },
 ],
 relatedApplications: [
 "Grinding Dust",
 "Surface finishing",
 "CNC machining",
 "Tumbling",
 "Polishing",
 "Grinding",
 "Edge-breaking",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
