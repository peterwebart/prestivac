import { AlertTriangle, Filter, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const ironDustGuide: MaterialGuideData = {
 slug: "iron-dust",
 name: "Iron & Steel Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Iron & Steel Dust?",
 description:
 "The metal dust that is everywhere and most often dismissed — fine iron and steel dust is combustible, can be pyrophoric, and deflagrates under the right conditions, even though bulk steel looks inert. Less energetic than aluminum or titanium, but real. Grounded, rated, HEPA-retained recovery, governed by testing.",
 },
 heroIntro:
 "The metal dust that is everywhere and most often underestimated — because a bar of steel is so obviously inert, it surprises people that fine iron and steel dust is combustible, can be pyrophoric, and deflagrates under the right conditions. It is less energetic than aluminum or titanium, but it is real, and it is generated in nearly every machine shop, foundry and fabrication floor there is.",
 badges: [
 { icon: ShieldCheck, title: "Combustible — Yes", detail: "Fine iron deflagrates" },
 { icon: Flame, title: "Often Underestimated", detail: "Bulk steel looks inert" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine metal fraction retained" },
 { icon: AlertTriangle, title: "Built for Metals", detail: "Grinding, machining, powder-met" },
 ],
 facts: [
 { label: "Combustibility", value: "Fine iron and steel dust is combustible; very fine iron powder can be pyrophoric" },
 { label: "The severity", value: "Less energetic than aluminum or titanium — but a genuine deflagration hazard under the right conditions" },
 { label: "The trap", value: "Bulk steel's obvious inertness leads to the fine dust being dismissed" },
 { label: "Standard", value: "A combustible metal under NFPA 660 — testing establishes the specification" },
 ],
 overview: [
 "Iron is the metal dust hiding in plain sight. Because structural steel is so plainly non-flammable, the fine dust it produces is routinely assumed to be harmless — but fine iron and steel dust is a combustible metal dust, very fine iron powder can be pyrophoric, and iron dust will deflagrate given the right particle size, concentration and ignition source. It is genuinely less energetic than the reactive light metals like aluminum, magnesium and titanium, and that is exactly what makes it dangerous: the reduced severity encourages the dismissal, and the dust is present almost everywhere metal is worked — grinding, cutting, machining, shot blasting, and foundry operations all produce it, and powder metallurgy handles iron powder as a primary feedstock.",
 "The practical picture is a matter of fineness and honesty about the hazard. Coarse chips and turnings are not the concern; the fine grinding and machining fraction is, along with the loose powder in powder-metallurgy work. Rust — iron oxide — is already oxidized and is not the combustible hazard; it is the fine metallic iron that matters. Because behavior varies with particle size and alloy, testing establishes whether and how severely a given stream deflagrates, and the recovery program follows the standard combustible-metal pattern scaled to the result: grounded, bonded, rated recovery, captured at the source, with HEPA retention for the fine fraction and sealed collection.",
 ],
 industries: [
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Foundries", href: "/industries/foundry" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Additive Manufacturing", href: "/applications/metal-3d-printing" },
 { label: "Rail & Transit", href: "/industries/rail" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Dismissing iron dust because bulk steel is obviously inert",
 "Fine grinding and machining dust deflagrating under the right conditions",
 "Very fine iron powder behaving pyrophorically",
 "Confusing rust (already oxidized, not the hazard) with fine metallic iron (the hazard)",
 "Letting the lower severity justify skipping grounded, rated recovery entirely",
 ],
 solutions: [
 "Explosibility testing on your actual fines — it establishes whether and how severely the stream deflagrates",
 "Grounded, bonded, rated recovery scaled to the test result",
 "Capture at the source — grinding, machining, blasting and powder-met stations",
 "HEPA retention for the fine fraction; sealed collection",
 "Focus on the fine dust, not the coarse chips and turnings",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for grinding fines, machining dust and iron powder" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the test", detail: "Rated for the combustible metal per its measured explosibility" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine metal fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained; fine iron kept dry" },
 ],
 bestPractices: [
 "Do not dismiss iron dust — the fine fraction is a genuine combustible metal dust",
 "Test the actual fines — particle size and alloy set whether and how it deflagrates",
 "Ground and bond everything, scaled to the tested severity",
 "Target the fine grinding and machining fraction, not coarse chips",
 "Keep fine iron dry and treat rust as a separate, non-combustible material",
 ],
 faqs: [
 {
 question: "Is steel dust combustible?",
 answer:
 "Fine steel dust behaves like fine iron dust: grinding fines, shot-blast dust and very fine freshly generated powder can ignite and smoulder inside collected material, and the finest fresh fines can behave pyrophorically. Solid steel stock is not a fire risk; the dust from working it is a combustible metal dust and is handled as one.",
 },
 {
 question: "Is iron flammable?",
 answer:
 "A steel plate is not going to catch fire, but fine iron and steel dust is a different question — grinding fines, shot-blast dust and very fine fresh iron powder can ignite, smoulder inside collected material, and in the finest freshly-generated form behave pyrophorically. That is why grinding and blasting debris is treated as a combustible metal dust rather than as swept-up grit.",
 },
 {
 question: "Is iron and steel dust really combustible?",
 answer:
 "Yes — fine iron and steel dust is a combustible metal dust, very fine iron powder can be pyrophoric, and iron dust deflagrates given the right particle size, concentration and ignition source. It is less energetic than aluminum or titanium, but 'less energetic' is not 'inert,' and the fine fraction is a real hazard that testing quantifies.",
 },
 {
 question: "Why is iron dust so often underestimated?",
 answer:
 "Because bulk steel is so obviously non-flammable that the fine dust seems harmless by association, and because iron's deflagration severity is genuinely lower than the reactive light metals. That combination invites dismissal — which is exactly why grounded, rated recovery matters, since the dust is present in nearly every metalworking operation.",
 },
 {
 question: "Is rust a combustible hazard?",
 answer:
 "No — rust is iron oxide, already oxidized, and is not the combustible concern. The hazard is the fine metallic iron produced by grinding, machining and powder work. Keeping that distinction clear helps focus recovery on the fine metallic fraction that actually deflagrates.",
 },
 {
 question: "Where does iron and steel dust come from?",
 answer:
 "Grinding, cutting and machining steel; shot blasting; foundry operations; and powder metallurgy, which handles iron powder as a primary feedstock. The coarse chips and turnings are not the concern — it is the fine grinding, machining and powder fraction, and testing your actual stream governs how it is specified.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Copper Dust guide", href: "/materials/copper-dust" },
 { label: "Metalworking deep dive", href: "/industries/metalworking" },
 { label: "Foundry deep dive", href: "/industries/foundry" },
 ],
};
