import { AlertTriangle, Filter, ShieldCheck, Stethoscope } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const chromiumDustGuide: MaterialGuideData = {
 slug: "chromium-dust",
 name: "Chromium Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Chromium Dust?",
 description:
 "Chromium's hazard depends on its oxidation state — metallic chromium dust is a combustible metal, but hexavalent chromium, Cr(VI), is a potent carcinogen with its own OSHA standard, generated in hot and oxidizing processes and present in chromate materials. HEPA-retained, sealed recovery for the Cr(VI)-bearing fraction.",
 },
 heroIntro:
 "The metal whose hazard depends on its oxidation state. Metallic chromium dust is a combustible metal handled like any reactive metal, but the serious health concern is hexavalent chromium — Cr(VI) — a potent carcinogen with a dedicated OSHA standard, generated in hot and oxidizing processes and present in chromate coatings. Knowing which form you have governs how the dust is handled.",
 badges: [
 { icon: Stethoscope, title: "Cr(VI) Carcinogen", detail: "A dedicated OSHA standard" },
 { icon: ShieldCheck, title: "Oxidation State Matters", detail: "Metallic vs hexavalent" },
 { icon: Filter, title: "HEPA & Sealed", detail: "Cr(VI)-bearing fines retained" },
 { icon: AlertTriangle, title: "Built for Metals", detail: "Stainless, plating & thermal spray" },
 ],
 facts: [
 { label: "The health headline", value: "Hexavalent chromium, Cr(VI), is a potent carcinogen with its own OSHA standard; metallic and trivalent chromium are far less hazardous" },
 { label: "Combustibility", value: "Metallic chromium dust is a combustible metal, handled under combustible-metal practice" },
 { label: "Where Cr(VI) arises", value: "Hot and oxidizing processes and chromate coatings — not all chromium dust contains it" },
 { label: "Standard", value: "A combustible metal under NFPA 660, with OSHA's Cr(VI) standard (1910.1026) governing the hexavalent form" },
 ],
 overview: [
 "Chromium is unusual in that its hazard hinges on chemistry, not just fineness. Metallic chromium — Cr(0) — and trivalent chromium, Cr(III), are comparatively low in toxicity, and metallic chromium dust from grinding and machining is treated as a combustible metal dust. Hexavalent chromium, Cr(VI), is another matter entirely: it is a potent human carcinogen serious enough to carry its own dedicated OSHA standard. The two are not interchangeable, and the central question with any chromium-bearing dust is which form is present, because that determines whether you are managing a combustible-metal hazard, a potent carcinogen, or both.",
 "Cr(VI) is generated where chromium meets heat and oxidation, and it is present in chromate materials. Stainless-steel hot work, thermal spraying of chromium, and chromate coatings and plating are the classic sources, and in those settings the settled dust and overspray can carry Cr(VI). Where it does, capture is HEPA-retained and sealed as a carcinogen-exposure control, with recovery typically dedicated to the material; the airborne fume phase at an arc belongs to extraction, while recovery owns the settled fraction, much as it does in welding generally. Metallic chromium grinding, by contrast, follows the standard combustible-metal pattern — grounded, rated, HEPA-retained — and testing plus process knowledge establish where the Cr(VI) hazard actually lives.",
 ],
 industries: [
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Aerospace", href: "/industries/aerospace" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Electronics (Plating)", href: "/industries/electronics" },
 { label: "Medical Devices", href: "/industries/medical-devices" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Treating all chromium dust alike — Cr(VI) is a potent carcinogen, metallic chromium is not",
 "Cr(VI) generated in hot and oxidizing work (stainless hot work, thermal spray of chromium)",
 "Chromate coatings and plating dust carrying hexavalent chromium",
 "Metallic chromium grinding dust as a combustible metal in its own right",
 "Dry sweeping or blow-down resuspending Cr(VI)-bearing dust",
 ],
 solutions: [
 "HEPA-retained, sealed capture for any dust that may carry Cr(VI)",
 "Grounded, rated recovery for metallic chromium as a combustible metal",
 "Identify where Cr(VI) arises — heat, oxidation and chromate materials — and control there",
 "Dedicated recovery in chromate, plating and thermal-spray settings",
 "Fume-phase Cr(VI) at the arc to extraction; settled dust to recovery",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for chromium dust, chromate residue and thermal-spray overspray" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the hazard", detail: "Rated for combustible metallic chromium; HEPA for Cr(VI)-bearing dust" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — Cr(VI)-bearing fines retained, not returned" },
 { step: "Sealed collection & disposal", detail: "Contained; hexavalent-bearing material handled as a carcinogen" },
 ],
 bestPractices: [
 "Establish which chromium form you have — it changes the hazard entirely",
 "Treat any Cr(VI)-bearing dust as a carcinogen: HEPA-retained, sealed, dedicated",
 "Handle metallic chromium grinding dust as the combustible metal it is",
 "Focus Cr(VI) control on heat, oxidation and chromate materials",
 "Never dry-sweep or blow down chromium dust that may carry Cr(VI)",
 ],
 faqs: [
 {
 question: "Is chromium dust dangerous?",
 answer:
 "The answer depends on oxidation state, which is the whole story with chromium. Metallic chromium and trivalent chromium are far less hazardous than hexavalent chromium, which is a recognised carcinogen and is regulated by OSHA under 29 CFR 1910.1026. Hexavalent chromium is generated by processes such as welding and grinding stainless steel and by chromate coatings — so the hazard is often created by the operation rather than present in the raw material.",
 },
 {
 question: "Is chromium dust carcinogenic?",
 answer:
 "It depends on the form. Hexavalent chromium — Cr(VI) — is a potent carcinogen with its own OSHA standard, while metallic chromium and trivalent chromium are far less hazardous. So the first question with any chromium-bearing dust is which form is present, because that determines whether you are controlling a carcinogen, a combustible metal, or both.",
 },
 {
 question: "Where does hexavalent chromium come from?",
 answer:
 "Cr(VI) is generated where chromium meets heat and oxidation — stainless-steel hot work and thermal spraying of chromium among them — and it is present in chromate coatings and plating. In those settings settled dust and overspray can carry it, which is why that fraction is captured HEPA-retained and sealed as an exposure control.",
 },
 {
 question: "Is metallic chromium dust combustible?",
 answer:
 "Yes — metallic chromium dust is a combustible metal, handled under combustible-metal practice with grounded, rated, HEPA-retained recovery. That is a separate consideration from the Cr(VI) health hazard, and where a dust presents both, the recovery addresses the combustible-metal and carcinogen concerns together.",
 },
 {
 question: "How does this relate to welding fume?",
 answer:
 "In stainless hot work, Cr(VI) is largely an airborne-fume issue at the arc, which belongs to the extraction system. The recovery program owns the settled dust — chromate residue, thermal-spray overspray and grinding dust — and captures the Cr(VI)-bearing fraction of that sealed and HEPA-retained. The two systems complement rather than replace each other.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Nickel Dust guide", href: "/materials/nickel-dust" },
 { label: "Cobalt Dust guide", href: "/materials/cobalt-dust" },
 { label: "Metalworking deep dive", href: "/industries/metalworking" },
 { label: "Aerospace deep dive", href: "/industries/aerospace" },
 ],
};
