import { AlertTriangle, Droplets, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const calciumDustGuide: MaterialGuideData = {
 slug: "calcium-dust",
 name: "Calcium Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Is Calcium Flammable? Calcium Metal vs Calcium Compounds",
 description:
 "Calcium metal is a water-reactive combustible metal; calcium carbonate and lime are not. Why the distinction decides everything about handling, and how reactive calcium fines are recovered safely.",
 },
 heroIntro:
 "Built for a material whose name covers two completely different hazards. Calcium metal is a reactive combustible metal that liberates hydrogen on contact with water. Calcium carbonate — limestone, chalk, ground marble — is an inert mineral that does not burn at all. Getting the two confused is the most consequential mistake in this entry.",
 badges: [
 { icon: AlertTriangle, title: "Two Different Materials", detail: "Metal is reactive; carbonate is inert" },
 { icon: Droplets, title: "Water-Reactive", detail: "Calcium metal liberates hydrogen with water" },
 { icon: Flame, title: "Class D Provisions", detail: "Water and CO2 inappropriate on burning fines" },
 { icon: ShieldCheck, title: "Ignition-Free Recovery", detail: "Grounded, bonded, no-spark construction" },
 ],
 facts: [
 { label: "Calcium metal", value: "Reactive combustible metal — water-reactive, ignites as fines" },
 { label: "Calcium carbonate", value: "Non-combustible mineral (limestone, chalk, ground marble) — a nuisance and respirable dust, not a fuel" },
 { label: "Calcium oxide / hydroxide", value: "Quicklime and hydrated lime — caustic and strongly exothermic with water, but not fuels" },
 { label: "Governing standard", value: "NFPA 660, which consolidated the former NFPA 484 for combustible metals" },
 ],
 overview: [
 "Ask whether calcium is flammable and the honest answer begins with a question back: which calcium? Calcium metal — used as a reducing agent and deoxidiser in metallurgy, in calcium-lead battery alloys and in certain chemical processes — is a reactive alkaline-earth metal. As fines and powder it ignites readily, burns hot, and reacts with water to liberate hydrogen, which makes the instinctive firefighting response actively counterproductive. It sits with magnesium and the other reactive metals under the provisions NFPA 660 absorbed from NFPA 484, and it belongs in the conductive metal dust group for classification purposes.",
 "Calcium carbonate is a different material entirely. Limestone, chalk, ground marble and precipitated calcium carbonate are minerals: they do not burn, they do not deflagrate, and no amount of fineness changes that. They are still worth controlling as respirable nuisance dust, and quarried or crushed stone can carry crystalline silica depending on the deposit — but that is a health question, not a fire one. Calcium oxide and calcium hydroxide sit in a third category: quicklime and hydrated lime are caustic and react strongly exothermically with water, causing burns and generating heat, without being fuels. Establishing which of the three you actually have is the first step, because the correct handling for one is wrong for the others.",
 ],
 industries: [
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Foundry", href: "/industries/foundry" },
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "Construction Materials", href: "/industries/construction-materials" },
 ],
 riskHeading: "What calcium metal fines actually do",
 risks: [
 "Water reactivity: calcium metal reacts with water to liberate hydrogen, so wetting burning or hot fines adds a second fuel rather than extinguishing anything.",
 "Ready ignition as fines: bulk calcium is manageable, but the powder and turnings produced by machining, grinding or handling ignite far more easily.",
 "Class D fire: water and carbon dioxide are inappropriate on burning calcium fines, which makes prevention the whole strategy rather than a preference.",
 "Conductive metal dust: for classification purposes calcium fines sit with the conductive metal dusts, which are treated with additional severity because they can bridge electrical connections.",
 "Moisture in storage: reactive metal fines left in a container in a humid building are a slow problem developing quietly.",
 "Name confusion: assuming calcium behaves like calcium carbonate — or vice versa — leads to the wrong recovery method and the wrong fire response.",
 ],
 solutions: [
 "Recovery equipment that cannot supply ignition energy: conductive, grounded and bonded throughout, with anti-static accessories.",
 "Immersion separation where the assessment supports it, keeping recovered reactive fines wetted under a suitable medium rather than accumulating dry.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "Strict segregation of calcium metal fines from other materials, from coolant and from moisture.",
 "Elimination of compressed-air blowdown, which suspends reactive fines and can carry them onto hot surfaces.",
 "Prompt removal of recovered material from the building rather than allowing containers to stand where heat or moisture can reach them.",
 "Class D provisions and trained response, with operators clear that water is the wrong tool.",
 ],
 configuration: [
 { step: "Establish which calcium you have", detail: "Metal, carbonate, or oxide and hydroxide. The three demand different handling, and the material name alone does not tell you." },
 { step: "Test the fines", detail: "For calcium metal, combustibility and reactivity are established by testing the actual material rather than inferred from a similar metal." },
 { step: "Confirm the classification", detail: "Conductive metal dust in hazardous quantities generally attracts the more severe treatment. Your engineer assigns it." },
 { step: "Decide dry or immersion", detail: "Reactive fines often warrant immersion separation so recovered material stays wetted under a suitable medium. That is material-specific, not a default." },
 { step: "Plan storage and disposal", detail: "Segregated, dry, promptly removed. Reactive fines sitting in a container are the failure mode to design out." },
 ],
 bestPractices: [
 "Never apply water to burning or hot calcium metal fines, and make sure everyone who might clean the area knows that in advance.",
 "Keep calcium metal fines segregated from other swarf, from coolant and from moisture.",
 "Retire compressed-air blowdown anywhere reactive metal fines are generated.",
 "Remove recovered fines from the building promptly instead of letting containers stand.",
 "Label collection clearly, since the consequence of mixing reactive fines with other waste is borne by whoever handles it next.",
 "Do not transfer assumptions from calcium carbonate handling to calcium metal, or the reverse.",
 ],
 faqs: [
 {
 question: "Is calcium flammable?",
 answer:
 "Calcium metal is — it is a reactive alkaline-earth metal that ignites readily as fines, burns hot, and reacts with water to release hydrogen. Calcium carbonate, which is what most people encounter as limestone, chalk or ground marble, is a non-combustible mineral and does not burn at all. Calcium oxide and hydroxide (quicklime and hydrated lime) are caustic and react exothermically with water but are not fuels. Which calcium you have determines the answer completely.",
 },
 {
 question: "Is calcium carbonate dust combustible?",
 answer:
 "No. Calcium carbonate is a mineral and does not deflagrate regardless of how fine it is. It is still worth controlling as respirable nuisance dust, and quarried or crushed stone may carry crystalline silica depending on the deposit — but that is a health hazard rather than a fire hazard.",
 },
 {
 question: "Why can't you use water on burning calcium?",
 answer:
 "Because calcium metal reacts with water to liberate hydrogen, so applying water to burning fines introduces a second fuel. Calcium metal fires are Class D, where water and carbon dioxide are generally inappropriate. This is the same reason prevention carries most of the weight with reactive metals: no accumulation, no ignition sources, controlled recovery.",
 },
 {
 question: "How should calcium metal fines be recovered?",
 answer:
 "With equipment that cannot become the ignition source — conductive, grounded and bonded throughout, with anti-static accessories and a drive suitable for the classification. Where the assessment supports it, immersion separation keeps recovered fines wetted under a suitable medium rather than accumulating dry in a container. Segregate the material, keep it away from moisture, and get it out of the building rather than storing it.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "wet-dry-systems", "pneumatic-vacuums", "custom-engineered-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Toxic liquid recovery", href: "/guides/toxic-liquid-recovery" },
 { label: "Combustible metal dust", href: "/materials/combustible-metal-dust" },
 { label: "Magnesium Dust guide", href: "/materials/magnesium-dust" },
 { label: "Lithium Dust guide", href: "/materials/lithium-dust" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 ],
};
