import { AlertTriangle, Cpu, Filter, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const tinDustGuide: MaterialGuideData = {
 slug: "tin-dust",
 name: "Tin Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Tin Dust?",
 description:
 "Tin is comparatively mild — low in toxicity and less ignition-prone than the reactive metals — but it is rarely encountered pure. In solder work it travels with lead (toxic in legacy solder) and flux fume (a respiratory irritant), and tin fines are still a combustible metal to test. The companions usually drive the controls.",
 },
 heroIntro:
 "The mild metal that travels with worse company. Tin itself is comparatively low in toxicity and less ignition-prone than the reactive metals — but it is rarely found pure. In solder and tinning work it arrives with lead, still present in legacy solder and the real hazard there, and with flux fume that irritates the airways. Tin fines are a combustible metal to test, and the companions usually set the controls.",
 badges: [
 { icon: ShieldCheck, title: "Comparatively Mild", detail: "Low toxicity for a metal" },
 { icon: AlertTriangle, title: "Watch the Companions", detail: "Lead in old solder, flux fume" },
 { icon: Filter, title: "HEPA & Sealed", detail: "Where lead is present" },
 { icon: Cpu, title: "Built for Electronics", detail: "Solder, dross & plating" },
 ],
 facts: [
 { label: "Comparatively mild", value: "Tin metal is low in toxicity and its dust less ignition-prone than the reactive metals" },
 { label: "The companions", value: "Rarely pure — solder brings lead (toxic in legacy alloys) and flux fume (a respiratory irritant)" },
 { label: "Still a metal dust", value: "Tin fines are a combustible metal in their own right — test the material" },
 { label: "Standard", value: "A combustible metal under NFPA 660, though the companions often drive the exposure controls" },
 ],
 overview: [
 "Tin is one of the gentler metals in dust terms — comparatively low in toxicity, and its dust less ignition-prone than reactive metals like aluminum or titanium. On its own it would be a modest concern, handled as a combustible metal dust to be tested and captured. But tin is rarely encountered pure. Its defining industrial context is solder — tin-lead alloys historically, tin-based lead-free alloys today — along with tinning and tin-plating, and that context is where the real hazards enter, because what accompanies the tin matters more than the tin itself.",
 "Two companions dominate. In legacy solder, lead is present and is the serious hazard — a toxic, exposure-limited metal that turns solder dross and dust into a lead-exposure problem regardless of how mild the tin is. Flux is the other: the rosin-based fluxes used in soldering produce fume that is a respiratory irritant and a recognized cause of occupational asthma. As in welding, the fume phase at the iron or wave belongs to extraction, while the settled dross and dust belong to recovery — and where lead is present, that settled fraction is captured HEPA-retained and sealed as a lead-exposure control. Lead-free tin-based solders remove the lead concern but not the flux one, and tin's own combustible-metal baseline still calls for grounded, rated recovery.",
 ],
 industries: [
 { label: "Electronics", href: "/industries/electronics" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Aerospace", href: "/industries/aerospace" },
 { label: "Medical Devices", href: "/industries/medical-devices" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Assuming solder dust is 'just tin' — lead in legacy solder is the real hazard",
 "Flux fume as a respiratory irritant and cause of occupational asthma",
 "Tin fines as a combustible metal in their own right",
 "Dry sweeping or blow-down resuspending lead-bearing solder dust",
 "Conflating leaded and lead-free solder — the hazard profile differs",
 ],
 solutions: [
 "HEPA-retained, sealed capture wherever lead-bearing solder is present",
 "Grounded, rated recovery for tin's combustible-metal baseline",
 "Identify leaded versus lead-free solder — it changes the exposure picture",
 "Flux fume to extraction; settled dross and dust to recovery",
 "Dedicated recovery where lead exposure is a concern",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for solder dross, tin dust and plating residue" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the hazard", detail: "Rated for combustible tin; HEPA where lead-bearing dust is present" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — lead-bearing fines retained, not returned" },
 { step: "Sealed collection & disposal", detail: "Lead-bearing material handled as a lead-exposure control" },
 ],
 bestPractices: [
 "Look past the tin to its companions — lead and flux drive the real risk",
 "Treat any lead-bearing solder dust as a lead-exposure hazard: HEPA, sealed",
 "Send flux fume to extraction; recover the settled dross and dust",
 "Handle tin's own dust as the combustible metal it is",
 "Know whether your solder is leaded or lead-free — it changes the controls",
 ],
 faqs: [
 {
 question: "Is tin dust dangerous?",
 answer:
 "Tin itself is comparatively mild — low in toxicity and less ignition-prone than the reactive metals — so on its own it is a modest combustible-metal concern. The danger in practice comes from what tin travels with: lead in legacy solder, and flux fume. Those companions usually drive the controls more than the tin does.",
 },
 {
 question: "What about lead in solder?",
 answer:
 "In legacy tin-lead solder, the lead is the serious hazard — a toxic, exposure-limited metal — so solder dross and dust are captured HEPA-retained and sealed as a lead-exposure control. Lead-free (tin-based) solders remove that concern, but knowing which you have is essential, because the hazard profile is quite different.",
 },
 {
 question: "Is soldering flux a hazard?",
 answer:
 "The rosin-based fluxes used in soldering produce fume that is a respiratory irritant and a recognized cause of occupational asthma. That airborne fume belongs to the extraction system at the iron or wave, while the recovery program owns the settled dross and dust — the two complement each other, as in welding.",
 },
 {
 question: "Is tin itself combustible?",
 answer:
 "Tin dust is a combustible metal, though less ignition-prone than reactive metals like aluminum or titanium, so it is tested and handled with grounded, rated recovery as a baseline. Where lead-bearing solder is involved, the lead-exposure controls layer on top of that combustible-metal handling.",
 },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Copper Dust guide", href: "/materials/copper-dust" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Electronics deep dive", href: "/industries/electronics" },
 { label: "Automotive deep dive", href: "/industries/automotive" },
 ],
};
