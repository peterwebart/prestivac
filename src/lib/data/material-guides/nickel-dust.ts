import { AlertTriangle, Filter, ShieldCheck, Stethoscope } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const nickelDustGuide: MaterialGuideData = {
 slug: "nickel-dust",
 name: "Nickel Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Nickel Dust?",
 description:
 "Fine nickel is a combustible metal dust — but it is unusual in that its health hazard rivals its fire hazard. Nickel and many nickel compounds are recognized respiratory carcinogens, and nickel is a leading skin sensitizer, so exposure control weighs as heavily as deflagration control. HEPA-retained recovery serves both.",
 },
 heroIntro:
 "Built for the metal with two serious hazards at once — fine nickel is a combustible metal dust handled like any reactive metal, but it is also a recognized respiratory carcinogen and one of the most common skin sensitizers, so the exposure ledger weighs as heavily as the fire ledger. The fortunate part: the same HEPA-retained, grounded recovery that controls the combustion risk also controls the exposure.",
 badges: [
 { icon: Stethoscope, title: "Health-First", detail: "Carcinogen & sensitizer — exposure matters" },
 { icon: ShieldCheck, title: "Testing Governs", detail: "Fineness sets the behavior" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine fraction retained, sealed disposal" },
 { icon: AlertTriangle, title: "Built for Metals", detail: "Batteries, superalloys & plating" },
 ],
 facts: [
 { label: "Combustibility", value: "A combustible metal dust — handled under combustible-metal practice" },
 { label: "The health hazard", value: "A recognized respiratory carcinogen and common skin sensitizer — exposure control rivals fire control" },
 { label: "Dual duty", value: "HEPA-retained capture serves the exposure goal and the combustible-dust goal at once" },
 { label: "Standard", value: "A combustible metal under NFPA 660, with occupational exposure limits in force" },
 ],
 overview: [
 "Nickel sits in the combustible-metal family and takes the full metal-dust discipline — dry, grounded, bonded, rated recovery, specified against explosibility testing of the actual fines. Those fines arise wherever nickel and its alloys are worked: machining nickel superalloys such as the Inconel-type materials used in aerospace and energy, nickel powder in battery cathode manufacturing, electroplating operations, and metal additive manufacturing of nickel-alloy powders. On the combustion side, nickel behaves as a reactive metal dust and is treated as one — the point this page makes is that combustion is only half the story.",
 "What sets nickel apart is that its health hazard is at least as serious as its fire hazard, and arguably more so in day-to-day exposure terms. Nickel and many nickel compounds are recognized respiratory carcinogens, and nickel is among the most common causes of allergic contact dermatitis — a potent skin sensitizer. Respirable nickel dust therefore carries real occupational-exposure obligations, which makes HEPA-retained capture and sealed handling essential rather than optional. The convenient truth is that the two objectives coincide: the grounded, rated, HEPA-retaining recovery that prevents a metal-dust deflagration is exactly the equipment that keeps carcinogenic fines out of the breathing zone. In battery-cathode and Inconel additive-manufacturing contexts the recovery is typically dedicated to the material, both to protect the process and to keep the carcinogenic, combustible fines contained and separate — and dry sweeping or blow-down, which resuspend the dust, are off the table on both health and fire grounds.",
 ],
 industries: [
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Aerospace (Superalloys)", href: "/industries/aerospace" },
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Additive Manufacturing", href: "/applications/metal-3d-printing" },
 { label: "Electronics", href: "/industries/electronics" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Treating nickel as only a fire hazard — it is a recognized carcinogen and sensitizer too",
 "Under-controlling exposure — respirable nickel dust carries serious occupational-health obligations",
 "Skin contact and cross-contamination — nickel is a leading contact sensitizer",
 "Dry sweeping or blow-down — resuspends a carcinogenic, combustible metal dust",
 "Ignoring the combustible-metal side in machining and AM — fine nickel fines still deflagrate",
 ],
 solutions: [
 "HEPA-retained recovery — serving exposure control and combustible-dust control together",
 "Grounded, bonded, rated recovery matched to explosibility testing of your fines",
 "Sealed handling and disposal; hygiene discipline to limit skin and take-home exposure",
 "Dedicated recovery in battery-cathode and Inconel additive-manufacturing contexts",
 "Never dry-sweep or blow down a carcinogenic combustible metal dust",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for nickel dust, machining fines and powder" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the test", detail: "Rated where the combustible-metal side requires it" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — carcinogenic fines retained, not returned" },
 { step: "Sealed collection & disposal", detail: "Contained; hygiene-conscious handling of collected material" },
 ],
 bestPractices: [
 "Treat nickel as a health hazard first — carcinogen and sensitizer — and a fire hazard too",
 "Capture with HEPA — the one control that serves exposure and combustion goals at once",
 "Never dry-sweep or blow down — you resuspend a carcinogenic metal dust",
 "Limit skin contact and take-home pathways — nickel is a leading sensitizer",
 "Ground, bond and test — the combustible-metal side is real in machining and AM",
 ],
 faqs: [
 {
 question: "Is nickel flammable?",
 answer:
 "Bulk nickel is not readily ignitable; fine nickel powder is a combustible metal dust and is handled as one. The dominant reason nickel dust is controlled tightly, though, is toxicity rather than fire: nickel compounds are classified as carcinogenic to humans by IARC, and nickel is a well-documented respiratory and skin sensitiser.",
 },
 {
 question: "Is nickel dust combustible?",
 answer:
 "Yes. Fine nickel is a combustible metal dust handled under combustible-metal practice — dry, grounded, rated recovery. But nickel is unusual in that its health hazard is at least as serious as its fire hazard, so the recovery program is driven by both considerations together rather than by combustion alone.",
 },
 {
 question: "What makes nickel a health concern?",
 answer:
 "Nickel and many nickel compounds are recognized respiratory carcinogens, and nickel is one of the most common causes of allergic contact dermatitis — a potent skin sensitizer. Respirable nickel dust therefore carries serious occupational-exposure obligations, and HEPA-retained capture with sealed handling is essential. Conveniently, the same capture that controls exposure also controls the combustible-dust risk.",
 },
 {
 question: "Where does nickel dust come from?",
 answer:
 "Machining nickel superalloys such as the Inconel-type materials used in aerospace and energy, nickel powder in battery cathode manufacturing, electroplating, and metal additive manufacturing of nickel-alloy powders. Fineness and process history vary the behavior, so testing your actual material governs the specification.",
 },
 {
 question: "Can one vacuum handle nickel's dual hazard?",
 answer:
 "The good news is that the health and fire controls point the same way: HEPA-retained, grounded, rated recovery with sealed disposal serves both. In battery-cathode and Inconel additive-manufacturing contexts the recovery is typically dedicated to the material — both to protect the process and to keep the carcinogenic, combustible fines contained and separate from other streams.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Battery deep dive", href: "/industries/battery" },
 { label: "Aerospace deep dive", href: "/industries/aerospace" },
 ],
};
