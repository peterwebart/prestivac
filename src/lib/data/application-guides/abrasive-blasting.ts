import { Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const abrasiveBlastingGuide: ApplicationGuideData = {
 slug: "abrasive-blasting",
 title: "Abrasive Blasting",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "Metalworking & Machining", anchor: "metalworking-machining" },
 seo: {
 title: "Abrasive Blasting Vacuum Solutions",
 description:
 "Industrial vacuum recovery for abrasive blasting — spent media separated from the coating debris it stripped, with HEPA retention for lead, heavy-metal and silica-bearing fractions, and reclaim of reusable abrasive.",
 },
 tagline: "Blasting makes two dusts: the coating you removed and the media you used.",
 heroIntro:
 "Abrasive blasting strips a surface and, in the same pass, produces an enormous mixed dust — spent media plus the coating and substrate debris it removed. On older work that debris can carry lead and heavy metals; some media is silica-bearing. Recovery reclaims the reusable abrasive and keeps the hazardous fraction contained rather than airborne.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded recovery where needed" },
 { icon: Filter, title: "HEPA Filtration", detail: "Lead, heavy-metal & silica retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "High-volume, continuous duty" },
 ],
 overview:
 "Blast cleanup is a two-part stream with two different jobs. The spent abrasive is often reclaimable — separated, cleaned and returned to the pot. The coating and substrate debris stripped off is the hazardous part: legacy lead-based coatings, other heavy metals, and the respirable fines, including crystalline silica where mineral media is used. Blast rooms concentrate huge volumes in one place; field blasting spreads it across a site. Recovery separates the reclaimable media from the waste and keeps the toxic and respirable fraction contained instead of resuspended.",
 capabilities: [
 { icon: Wind, title: "Spent Abrasive Media", detail: "Reclaim versus waste, separated" },
 { icon: Filter, title: "Coating Debris", detail: "Lead & heavy-metal paint chips" },
 { icon: Sparkles, title: "Surface Cleanliness", detail: "A clean blast profile" },
 { icon: Gauge, title: "High-Volume Recovery", detail: "Blast-room scale" },
 ],
 materialsHeading: "Common blasting materials",
 materials: [
 "Spent abrasive media",
 "Lead-based coating debris",
 "Heavy-metal paint chips",
 "Silica-bearing media dust",
 "Rust & mill scale",
 "Mixed blast residue",
 ],
 materialsNote: {
 text: "Legacy lead-based coatings carry their own exposure rules —",
 link: { label: "see the lead dust guide", href: "/materials/lead-dust" },
 },
 challengesHeading: "Challenges in abrasive blasting",
 challenges: [
 "The stream is mixed — reclaimable media bound up with hazardous coating debris",
 "Legacy lead-based and heavy-metal coating debris is toxic and must be contained",
 "Silica-bearing media adds a respirable crystalline-silica hazard",
 "Blasting generates enormous dust volumes, in blast rooms and in the field",
 "The reclaim-versus-disposal decision shapes how the stream is captured",
 "Containment differs between an enclosed blast room and open field work",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Separates reclaimable abrasive from the waste fraction it strips",
 "HEPA retention for lead, heavy-metal and silica-bearing dust",
 "Contains the toxic debris instead of resuspending it into breathing zones",
 "High-volume recovery sized for blast-room throughput",
 "Supports lead and silica exposure-limit compliance with documented methods",
 "Keeps the blast profile clean for the coating that follows",
 ],
 benefits: [
 { title: "Better Safety", detail: "Toxic coating debris and respirable media stay contained, not airborne." },
 { title: "Higher Productivity", detail: "Reclaimable media returns to the pot instead of the dumpster." },
 { title: "Cost Savings", detail: "Abrasive reuse and less waste disposal cut the cost of every job." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps lead and silica out of the air." },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums"],
 setup: [
 { step: "Blast area or room", detail: "Enclosed blast room or field surface prep at the work" },
 { step: "HEPA recovery unit", detail: "Sized for high-volume media and fine toxic debris" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Media-reclaim consideration", detail: "Separate reusable abrasive from the waste fraction" },
 { step: "Sealed collection & disposal", detail: "Lead, heavy-metal and silica fractions contained" },
 ],
 setupNote: {
 text: "Shipyards and structural blasting concentrate the legacy-coating hazard —",
 link: { label: "the marine & shipbuilding deep dive", href: "/industries/marine" },
 textAfter: "walks through it.",
 },
 faqs: [
 {
 question: "Can I reclaim and reuse the abrasive?",
 answer:
 "Often, yes — much blasting media is designed to be recovered, cleaned and reused. The value of recovery is separating that reusable fraction from the spent, contaminated debris it strips off. How aggressively you reclaim shapes the recovery setup, but the hazardous debris is contained either way.",
 },
 {
 question: "What about blasting old structures with lead paint?",
 answer:
 "Legacy lead-based and other heavy-metal coatings are a serious exposure hazard, so the debris is captured under HEPA retention and sealed disposal as a toxic-exposure control. This is common on older bridges, tanks and vessels, and it governs the cleanup regardless of the media used.",
 },
 {
 question: "Is blasting media combustible or a silica risk?",
 answer:
 "Media itself is generally not combustible, but some mineral media is silica-bearing, adding a respirable crystalline-silica hazard to the dust. HEPA retention covers that fine fraction; where the stripped substrate contributes reactive-metal fines, grounded, rated recovery is the sensible default.",
 },
 {
 question: "Blast room versus field blasting — does it change recovery?",
 answer:
 "The hazard is the same; the containment differs. A blast room concentrates enormous dust volume in one enclosure sized for high-volume recovery, while field blasting spreads it across a site and leans on portable, HEPA-retained recovery focused on the work zone.",
 },
 ],
 relatedApplications: [
 "Grinding Dust",
 "Surface preparation",
 "Shot blasting",
 "Coating removal",
 "Rust removal",
 "Deburring",
 "Sandblasting",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
