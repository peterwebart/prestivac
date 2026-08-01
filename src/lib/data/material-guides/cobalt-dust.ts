import { AlertTriangle, Filter, ShieldCheck, Stethoscope } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const cobaltDustGuide: MaterialGuideData = {
 slug: "cobalt-dust",
 name: "Cobalt Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Cobalt Dust?",
 description:
 "Cobalt is a combustible metal dust, but its health hazard leads — a recognized carcinogen and potent sensitizer, and the cause of hard-metal lung disease where it is bound with tungsten carbide. Exposure control drives the recovery program, and HEPA-retained capture serves both the health and the combustion case.",
 },
 heroIntro:
 "The metal where the health hazard leads the conversation — cobalt is a recognized carcinogen and a potent sensitizer, and in combination with tungsten carbide it causes hard-metal lung disease. It is also a combustible metal dust. That pairing makes exposure control the driver here, with grounded, HEPA-retained recovery serving the health case and the combustion case at the same time.",
 badges: [
 { icon: Stethoscope, title: "Health-First", detail: "Carcinogen, sensitizer, hard-metal lung" },
 { icon: ShieldCheck, title: "Combustible Too", detail: "A reactive metal dust" },
 { icon: Filter, title: "HEPA Filtration", detail: "Carcinogenic fines retained, sealed" },
 { icon: AlertTriangle, title: "Built for Metals", detail: "Carbide, battery & superalloy" },
 ],
 facts: [
 { label: "The health hazard", value: "A recognized carcinogen and potent sensitizer; with tungsten carbide, the cause of hard-metal lung disease" },
 { label: "Combustibility", value: "A combustible metal dust — handled under combustible-metal practice as well" },
 { label: "Dual duty", value: "HEPA-retained, sealed capture serves the exposure goal and the combustion goal at once" },
 { label: "Standard", value: "A combustible metal under NFPA 660, with occupational exposure limits in force" },
 ],
 overview: [
 "Cobalt takes the full combustible-metal discipline — dry, grounded, rated recovery — but the reason it demands careful handling is its health profile, which is more serious than most metals a shop encounters. Cobalt and many cobalt compounds are recognized carcinogens and potent sensitizers, capable of both skin and respiratory sensitization. Most distinctively, cobalt bound with tungsten carbide — the cemented-carbide 'hard metal' used for cutting tools and wear parts — is associated with hard-metal lung disease, a specific and serious occupational lung condition. Cobalt fines arise in cemented-carbide tool grinding and manufacture, in nickel- and cobalt-base superalloy machining, in battery cathode production, in magnet manufacture, and in additive manufacturing of cobalt-chromium powders.",
 "Because the health hazard leads, the recovery program is built around exposure control, and the fortunate part is that the same measures address the combustion risk. Respirable cobalt dust is captured with HEPA-retained equipment and handled sealed, keeping carcinogenic, sensitizing fines out of the breathing zone — and that grounded, rated, HEPA-retaining recovery is exactly what a combustible metal dust requires. Hard-metal (carbide) grinding is a particular focus, since it combines cobalt with the hard carbide fraction. In battery-cathode and cobalt-chromium additive-manufacturing settings the recovery is typically dedicated to the material, both to protect the process and to keep the hazardous fines contained and separate from other streams.",
 ],
 industries: [
 { label: "Metalworking (Carbide)", href: "/industries/metalworking" },
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Aerospace (Superalloys)", href: "/industries/aerospace" },
 { label: "Medical Devices", href: "/industries/medical-devices" },
 { label: "Additive Manufacturing", href: "/applications/metal-3d-printing" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Treating cobalt as a routine metal — it is a recognized carcinogen and potent sensitizer",
 "Hard-metal lung disease from cobalt bound with tungsten carbide in cemented-carbide work",
 "Skin and respiratory sensitization from repeated exposure",
 "Dry sweeping or blow-down resuspending carcinogenic, combustible metal dust",
 "Under-controlling the combustible-metal side in grinding and additive manufacturing",
 ],
 solutions: [
 "HEPA-retained recovery — serving exposure control and combustible-dust control together",
 "Grounded, bonded, rated recovery matched to explosibility testing of the fines",
 "Sealed handling and disposal; hygiene discipline to limit skin and take-home exposure",
 "Dedicated recovery in carbide-grinding, battery-cathode and cobalt-chrome AM settings",
 "Never dry-sweep or blow down a carcinogenic combustible metal dust",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for cobalt dust, carbide-grinding fines and powder" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the test", detail: "Rated where the combustible-metal side requires it" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — carcinogenic fines retained, not returned" },
 { step: "Sealed collection & disposal", detail: "Contained; hygiene-conscious handling of collected material" },
 ],
 bestPractices: [
 "Treat cobalt as a health hazard first — carcinogen, sensitizer, hard-metal lung — and a fire hazard too",
 "Capture with HEPA — the one control that serves exposure and combustion goals at once",
 "Give cemented-carbide grinding particular attention — cobalt plus carbide is the hard-metal-lung pairing",
 "Never dry-sweep or blow down — you resuspend a carcinogenic metal dust",
 "Limit skin contact and take-home pathways — cobalt is a potent sensitizer",
 ],
 faqs: [
 {
 question: "Is cobalt dust combustible?",
 answer:
 "Yes — fine cobalt is a combustible metal dust and is handled under combustible-metal practice. But cobalt is a case where the health hazard leads: it is a recognized carcinogen and sensitizer, so the recovery program is driven by exposure control, with the combustion controls falling naturally out of the same grounded, HEPA-retained approach.",
 },
 {
 question: "What is hard-metal lung disease?",
 answer:
 "It is a serious occupational lung condition associated with exposure to cobalt bound with tungsten carbide — the cemented-carbide 'hard metal' used for cutting tools and wear parts. Because carbide tool grinding liberates exactly this combination, it is a particular focus for HEPA-retained capture and sealed handling of the dust.",
 },
 {
 question: "Where does cobalt dust come from?",
 answer:
 "Cemented-carbide tool grinding and manufacture, nickel- and cobalt-base superalloy machining, battery cathode production, magnet manufacture, and additive manufacturing of cobalt-chromium powders. Fineness and process history vary the behavior, so testing your actual material governs the combustible-metal specification.",
 },
 {
 question: "Can one vacuum handle cobalt's dual hazard?",
 answer:
 "Yes, because the health and combustion controls point the same way: HEPA-retained, grounded, rated recovery with sealed disposal serves both. In carbide-grinding, battery-cathode and cobalt-chrome additive settings the recovery is typically dedicated to the material to protect the process and keep the hazardous fines contained.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Nickel Dust guide", href: "/materials/nickel-dust" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Battery deep dive", href: "/industries/battery" },
 { label: "Medical Devices deep dive", href: "/industries/medical-devices" },
 ],
};
