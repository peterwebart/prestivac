import { AlertTriangle, Filter, ShieldCheck, Stethoscope } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const manganeseDustGuide: MaterialGuideData = {
 slug: "manganese-dust",
 name: "Manganese Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Manganese Dust?",
 description:
 "Manganese is a neurotoxin — chronic overexposure causes manganism, a Parkinson-like condition — and it is ubiquitous because it is present in most steel and welding consumables, making welding fume the primary exposure route. It is also a combustible metal dust. Fume belongs to extraction; the settled fraction to HEPA-retained recovery.",
 },
 heroIntro:
 "The neurotoxin hiding in ordinary steel work. Manganese is present in most steels and welding consumables, so it turns up almost everywhere metal is welded — and chronic overexposure causes manganism, a serious Parkinson-like neurological condition. Its main exposure route is welding fume, which belongs to extraction at the arc; the settled manganese-bearing dust belongs to HEPA-retained recovery, and manganese metal dust is combustible in its own right.",
 badges: [
 { icon: Stethoscope, title: "Neurotoxin", detail: "Chronic overexposure causes manganism" },
 { icon: ShieldCheck, title: "In Most Welding Fume", detail: "Present in nearly all steel" },
 { icon: Filter, title: "HEPA & Sealed", detail: "Settled fraction retained" },
 { icon: AlertTriangle, title: "Built for Metals", detail: "Welding, steel & battery" },
 ],
 facts: [
 { label: "The health hazard", value: "A neurotoxin — chronic overexposure causes manganism, a Parkinson-like neurological condition" },
 { label: "Why it is everywhere", value: "Present in most steels and welding consumables, so welding fume is the primary exposure route" },
 { label: "Combustibility", value: "Manganese metal dust is a combustible metal in its own right" },
 { label: "Standard", value: "A combustible metal under NFPA 660, with occupational exposure limits; the fume phase drives most exposure" },
 ],
 overview: [
 "Manganese is unusual among the health-hazard metals for how ordinary its sources are. It is present in nearly all steel and in most welding consumables, which means it is generated wherever steel is welded, cut or ground — an exceptionally common set of operations. And the health concern is serious: manganese is a neurotoxin, and chronic overexposure causes manganism, a neurological condition that resembles Parkinson's disease. The combination of a serious, cumulative health effect with near-universal presence in metalworking is what makes manganese a quietly important exposure to manage rather than an exotic one.",
 "The primary exposure route is airborne welding fume, and that fume phase — the ultrafine plume at the arc — belongs to the extraction system capturing it at the source while welding happens. The recovery program owns the settled fraction: the manganese-bearing steel dust that accumulates on surfaces, fixtures and floors, captured HEPA-retained and sealed to keep it out of the breathing zone, exactly the fume-versus-dust division that governs welding generally. Manganese also appears in some battery chemistries and in specialty alloys. Underneath the health picture, manganese metal dust is a combustible metal, so grounded, rated recovery is the baseline, with the HEPA retention doing double duty for the neurotoxic exposure.",
 ],
 industries: [
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Marine & Shipbuilding", href: "/industries/marine" },
 { label: "Rail & Transit", href: "/industries/rail" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Battery Manufacturing", href: "/industries/battery" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "A neurotoxin — chronic overexposure causes manganism, a Parkinson-like condition",
 "Near-universal presence in steel and welding consumables makes exposure common",
 "Welding fume as the primary exposure route across metalworking",
 "Manganese metal dust as a combustible metal in its own right",
 "Underestimating it because it hides inside ordinary steel dust",
 ],
 solutions: [
 "Welding fume to extraction at the arc — the primary exposure route",
 "Settled manganese-bearing dust to HEPA-retained, sealed recovery",
 "Grounded, rated recovery for the combustible-metal baseline",
 "Recognize its ubiquity — treat steel dust as manganese-bearing",
 "Dedicated recovery where manganese exposure is concentrated",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for welding-area and steel grinding dust" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the hazard", detail: "Rated for the combustible metal; HEPA for the neurotoxic fraction" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — manganese-bearing fines retained, not returned" },
 { step: "Sealed collection & disposal", detail: "Contained; handled as a neurotoxic-exposure control" },
 ],
 bestPractices: [
 "Treat manganese as a neurotoxin — manganism is cumulative and serious",
 "Assume steel and welding dust is manganese-bearing — it usually is",
 "Send welding fume to extraction; recover the settled dust HEPA-retained",
 "Handle manganese metal dust as the combustible metal it is",
 "Never dry-sweep or blow down manganese-bearing dust",
 ],
 faqs: [
 {
 question: "What makes manganese a health concern?",
 answer:
 "Manganese is a neurotoxin, and chronic overexposure causes manganism — a serious neurological condition that resembles Parkinson's disease. What makes it especially worth managing is that it is present in nearly all steel and welding consumables, so exposure is common across ordinary metalworking rather than confined to an exotic process.",
 },
 {
 question: "How are people exposed to manganese?",
 answer:
 "Primarily through welding fume — manganese is in most welding consumables and steel, so the ultrafine plume at the arc carries it. That airborne fume belongs to the extraction system at the source, while the recovery program handles the settled manganese-bearing dust on surfaces and floors, captured HEPA-retained and sealed.",
 },
 {
 question: "Is manganese dust combustible?",
 answer:
 "Yes — manganese metal dust is a combustible metal in its own right, so grounded, rated recovery is the baseline. The convenient part is that the HEPA retention required for the neurotoxic-exposure control also serves the combustible-dust housekeeping, so a single properly specified system addresses both.",
 },
 {
 question: "Where does manganese dust come from?",
 answer:
 "Welding, cutting and grinding steel — because manganese is present in nearly all steel and welding consumables — plus some battery chemistries and specialty alloys. Since it hides inside ordinary steel dust, the safe assumption in a fabrication or welding environment is that the settled dust is manganese-bearing.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Nickel Dust guide", href: "/materials/nickel-dust" },
 { label: "Chromium Dust guide", href: "/materials/chromium-dust" },
 { label: "Iron & Steel Dust guide", href: "/materials/iron-dust" },
 { label: "Metalworking deep dive", href: "/industries/metalworking" },
 ],
};
