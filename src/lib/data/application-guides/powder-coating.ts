import { Box, Cog, Filter, Gauge, Layers, ShieldCheck, Wind, Zap } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const powderCoatingGuide: ApplicationGuideData = {
 slug: "powder-coating",
 title: "Powder Coating",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Metalworking & Machining", anchor: "metalworking-machining" },
 seo: {
 title: "Powder Coating Vacuum Solutions",
 description:
 "Explosion-proof vacuum solutions for powder coating operations: combustible polymer coating powders recovered safely in an electrostatic environment — color change, booth cleanout and fugitive overspray under NFPA 33 / 660.",
 },
 tagline: "Grounded. Contained. Color-change ready.",
 heroIntro:
 "Powder coating charges combustible polymer powder on purpose — which makes ungrounded cleanup equipment uniquely wrong for the environment. PrestiVac recovery systems close the loop the booth doesn't: fugitive overspray, color changeover and hopper cleanout, with grounding verified end to end.",
 heroImage: {
 src: "/images/library/workers/am-powder-recovery.jpg",
 alt: "Vacuum nozzle recovering fine white powder from a shop floor",
 },
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 33 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines retained; next color protected" },
 { icon: Zap, title: "Static Control", detail: "Grounded recovery in an electrostatic process" },
 { icon: Gauge, title: "Faster Color Change", detail: "Single-pass cleanout on the critical path" },
 ],
 overview:
 "The spray booth reclaims overspray by design — that's the process working. The housekeeping gap is everything the booth's own recovery doesn't own: fugitive powder that settles beyond capture, hopper and feed-area spills, rack and fixture buildup, and the color-change cleanout that sits directly on the production schedule. Coating powders are combustible polymer dusts, the environment is deliberately electrostatic, and the collected material is a waste stream that must never contaminate the reclaim stream.",
 capabilities: [
 { icon: Layers, title: "Color Changeover", detail: "Booth cleanout on the critical path" },
 { icon: Box, title: "Booth & Hopper Areas", detail: "Feed spills & residual powder" },
 { icon: Wind, title: "Fugitive Overspray", detail: "Beyond the booth's capture" },
 { icon: Cog, title: "Racks & Fixtures", detail: "Hanger and conveyor buildup" },
 ],
 materialsHeading: "Common coating powders",
 materials: [
 "Epoxy powders",
 "Polyester powders",
 "Epoxy-polyester hybrids",
 "Polyurethane powders",
 "Acrylic powders",
 "TGIC & TGIC-free polyesters",
 ],
 materialsNote: {
 text: "Coating powders are combustible polymer dusts — check yours against",
 link: { label: "the chemical dusts directory", href: "/materials#chemical-dusts" },
 },
 challengesHeading: "Challenges in powder coating",
 challenges: [
 "Coating powders are combustible polymer dusts — NFPA 33 spray-application territory, inside NFPA 652/660's DHA obligation",
 "The process is deliberately electrostatic: charge is everywhere, and ungrounded cleanup gear adds risk exactly where it concentrates",
 "Color-change cleanout sits on the production critical path — housekeeping speed is throughput",
 "Fugitive powder settles beyond booth capture, on structure and equipment",
 "Reclaim purity: floor-collected and fugitive powder is waste, and mixing streams contaminates expensive reclaim",
 "Exposure considerations vary by chemistry — TGIC-bearing powders carry stricter handling",
 ],
 whyHeading: "Why engineered vacuum recovery?",
 why: [
 "Explosion-proof construction for combustible polymer dust",
 "Grounded, bonded path — the non-negotiable in an electrostatic process",
 "Single-pass cleanout shortens color change instead of stretching it",
 "HEPA-retained exhaust keeps fines out of booth air and the next color",
 "Stream separation protects reclaim purity by rule, not vigilance",
 "Supports compliance with NFPA 33 / 660 and OSHA housekeeping",
 ],
 benefits: [
 { title: "Better Safety", detail: "Grounded explosion-proof recovery in a process that charges powder by design." },
 { title: "Higher Productivity", detail: "Color change becomes a plannable single-pass method on the schedule." },
 { title: "Cost Savings", detail: "Stream separation protects expensive reclaim powder from contamination." },
 { title: "Cleaner Workplace", detail: "HEPA-retained fines stay out of booth air and the next color." },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums"],
 setup: [
 { step: "Booth / color-change point", detail: "Residual and fugitive powder at the source" },
 { step: "Grounded tool kit", detail: "Stainless wands and crevice tools, non-sparking" },
 { step: "EX vacuum unit", detail: "Explosion-proof; grounding verified before use" },
 { step: "Multi-stage + HEPA", detail: "Powder load staged; fines retained at 99.99%" },
 { step: "Sealed waste container", detail: "Kept strictly separate from the reclaim stream" },
 ],
 setupNote: {
 text: "Collected floor and fugitive powder is a waste stream — reclaim purity lives in the booth's own recovery system, and keeping the two separate is the specification.",
 },
 faqs: [
 {
 question: "The booth already recovers overspray — what's left for a vacuum?",
 answer:
 "Everything outside the booth's capture: fugitive powder on structure and equipment, hopper and feed spills, rack buildup, and the color-change cleanout itself. The booth is a process recovery system, not a housekeeping program.",
 },
 {
 question: "Why is grounding emphasized so heavily here?",
 answer:
 "Because the process charges powder electrostatically on purpose — static is guaranteed, not incidental. Recovery equipment must be part of the grounded system, verified before use; an ungrounded vacuum is an isolated conductor in a charged space.",
 },
 {
 question: "Can vacuum-collected powder be fed back to reclaim?",
 answer:
 "No — floor-collected and fugitive powder is contaminated by definition and is handled as waste in sealed, segregated containers. Reclaim purity lives in the booth's own loop; the streams never mix.",
 },
 {
 question: "Does cured coating create a dust hazard?",
 answer:
 "The fused film on finished parts is inert — the hazard is the uncured powder. That's why the program targets booth perimeters, hoppers, changeovers and fugitive settlement rather than finished work.",
 },
 ],
 relatedApplications: [
 "Surface finishing",
 "Sanding",
 "Abrasive blasting",
 "Metal fabrication",
 "Welding cleanup",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 { label: "Dust Risk Checker", href: "/resources/risk-checker" },
 ],
 studySlug: "coating-powder-automotive-finishing",
};
