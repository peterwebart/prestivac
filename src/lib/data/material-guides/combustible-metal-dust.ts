import { AlertTriangle, Droplets, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const combustibleMetalDustGuide: MaterialGuideData = {
 slug: "combustible-metal-dust",
 name: "Combustible Metal Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Combustible Metal Dust — Which Metals Burn & How",
 description:
 "Which metals form combustible dust, why water is the wrong response, what Class II Group E means, and how metallic dust from grinding, machining and additive manufacturing should be recovered.",
 },
 heroIntro:
 "The overview page for metallic dust. Solid metal is inert to handle; the same metal reduced to fines is a different material with different rules — one where water can make a fire worse, where conductivity matters as much as combustibility, and where the recovery method is part of the safety case.",
 badges: [
 { icon: Flame, title: "Reactive When Fine", detail: "Particle size changes the material's behaviour" },
 { icon: Droplets, title: "Water Can Worsen It", detail: "Several metals liberate hydrogen when hot" },
 { icon: AlertTriangle, title: "Class II Group E", detail: "Conductive metal dust, treated most severely" },
 { icon: ShieldCheck, title: "Ignition-Free Recovery", detail: "Grounded, bonded, no-spark construction" },
 ],
 facts: [
 { label: "What makes it combustible", value: "Surface area — fines expose vastly more metal to oxygen than solid stock" },
 { label: "Classification", value: "Class II, Group E covers conductive combustible metal dusts" },
 { label: "Extinguishing class", value: "Metal fires are Class D; water and carbon dioxide are generally inappropriate" },
 { label: "Governing standard", value: "NFPA 660, which consolidated the former NFPA 484 for combustible metals" },
 ],
 overview: [
 "The question people arrive with is usually some version of are metals flammable, and the honest answer is that the metal is not the variable — the particle size is. A block of aluminium will not sustain combustion in any ordinary shop scenario. The same aluminium as grinding dust is a reactive fuel with a large surface area exposed to oxygen, and it behaves accordingly. That transformation is the whole subject: nothing about the chemistry changed, only the geometry.",
 "Which metals matter in practice? Aluminium, magnesium, titanium and zirconium are the reactive group that drives the most stringent handling, with magnesium and titanium fines notorious for igniting readily and burning at extreme temperature. Iron and steel fines, lithium, cobalt, manganese, tin, zinc, chromium and nickel all warrant assessment as combustible dusts when finely divided, with some presenting toxicity concerns that dominate the fire question — nickel and chromium in particular. Copper and brass sit at the less reactive end but should still be characterised by testing rather than assumed inert.",
 "Two features separate metal dust from organic dust. The first is water reactivity: several metals react with water at elevated temperature to liberate hydrogen, which means the instinctive response to a fire adds a second fuel. Metal fires are Class D, and water and carbon dioxide are generally inappropriate. The second is electrical conductivity, which is why the code places conductive metal dusts in Class II, Group E and treats them with particular severity — conductive dust can bridge terminals and short equipment as well as burn.",
 ],
 industries: [
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Additive Manufacturing", href: "/industries/additive-manufacturing" },
 { label: "Aerospace & Defense", href: "/industries/aerospace" },
 { label: "Foundry", href: "/industries/foundry" },
 { label: "Battery Manufacturing", href: "/industries/battery" },
 ],
 riskHeading: "Why metallic dust is handled differently from organic dust",
 risks: [
 "Particle size transforms the material: fines from grinding, cutting, polishing, blasting and powder handling behave nothing like the solid stock they came from.",
 "Water can make it worse: several reactive metals liberate hydrogen when hot and wet, so the default firefighting response introduces a second fuel.",
 "Conductive dust shorts equipment: Class II Group E dusts can bridge electrical connections, which is why the classification is treated with additional severity.",
 "Extreme burn temperatures: magnesium and titanium fines, once ignited, burn far hotter than organic material and are correspondingly difficult to control.",
 "Pyrophoric behaviour in fresh fines: very finely divided, freshly generated metal can ignite with little provocation, and heat can build inside collected material.",
 "Mixed metal accumulation: swarf bins and collection containers that combine metals, coolant and other debris create conditions nobody assessed.",
 "Smouldering in containers: recovered fines can hold heat and reignite after the visible event, so what happens to the material after recovery matters.",
 ],
 solutions: [
 "Recovery equipment that cannot supply ignition energy: conductive, grounded and bonded from hose tip to container, with anti-static accessories throughout.",
 "Immersion separation for reactive fines, where recovered material is kept wetted rather than accumulating dry in a collection vessel.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components at all.",
 "Segregation by metal, so reactive fines are not combined with other materials or with coolant in ways that were never assessed.",
 "Elimination of compressed-air blowdown, which suspends metal fines directly into the room and onto hot surfaces.",
 "Prompt removal of recovered material from the building rather than allowing containers to stand where heat can build.",
 "Class D provisions and trained response, recognising that water and carbon dioxide are not the tools for a metal fire.",
 ],
 configuration: [
 { step: "Identify the metal and the fineness", detail: "Which metal, generated by which process, at what particle size. Grinding dust and machining chips from the same alloy are different problems." },
 { step: "Establish reactivity and conductivity", detail: "Water reactivity and electrical conductivity determine both the recovery method and the classification conversation. Testing settles it; assumption does not." },
 { step: "Confirm the area classification", detail: "Group E areas generally attract the more severe Division 1 treatment where conductive dust is present in hazardous quantities. Your engineer assigns it." },
 { step: "Decide dry or immersion", detail: "For reactive fines, immersion separation keeps recovered material wetted. That is a material-specific decision, not a default." },
 { step: "Plan what happens after recovery", detail: "Storage, segregation and disposal of collected fines are part of the design, because heat build-up in containers is a real failure mode." },
 ],
 bestPractices: [
 "Never use water on burning metal fines, and make sure the people cleaning know that before they need to.",
 "Retire compressed-air blowdown at every machine that generates metal fines.",
 "Segregate metals in collection rather than combining swarf from different processes into one container.",
 "Remove recovered fines from the building promptly instead of letting containers stand in the shop.",
 "Include machine interiors, enclosure tops and overhead steel in scheduled recovery, since fines travel further than people expect.",
 "Have Class D provisions in place where reactive metals are worked, and confirm operators know which extinguishing media are wrong.",
 "Characterise your dust by testing when introducing a new alloy or process rather than reasoning from a similar metal.",
 ],
 faqs: [
 {
 question: "Which metals form combustible dust?",
 answer:
 "Aluminium, magnesium, titanium and zirconium are the most reactive group and drive the strictest handling. Iron and steel fines, lithium, cobalt, manganese, tin, zinc, chromium and nickel all warrant assessment as combustible dusts when finely divided. Copper and brass sit at the less reactive end but should still be characterised by testing. The consistent principle is that fineness, not the identity of the metal alone, determines the behaviour.",
 },
 {
 question: "Are metals flammable?",
 answer:
 "Solid metal stock is not flammable in any practical shop sense. Finely divided metal is a different matter: reducing the same metal to dust exposes an enormous surface area to oxygen, and fines from grinding, machining, blasting or powder handling can ignite and propagate. Magnesium and titanium fines are the most readily ignitable of the common industrial metals.",
 },
 {
 question: "What is Class II Group E?",
 answer:
 "Group E is the hazardous-location dust group covering combustible metal dusts — aluminium, magnesium and their commercial alloys, and other dusts whose particle size, abrasiveness and electrical conductivity present comparable hazards. It is treated with particular severity because conductive dust can short and bridge electrical equipment as well as fuel a deflagration.",
 },
 {
 question: "Why can't you use water on a metal dust fire?",
 answer:
 "Several reactive metals react with water at elevated temperature to liberate hydrogen, so applying water to burning fines can add a second fuel to the fire. Metal fires are classified Class D, and water and carbon dioxide are generally inappropriate. This is one reason prevention — no accumulation, no ignition sources, controlled recovery — carries so much of the weight with metal dust.",
 },
 {
 question: "What should someone do after inhaling metal dust?",
 answer:
 "Move away from the exposure and seek medical evaluation rather than managing it informally, and report it so the exposure gets assessed. Some metals carry specific occupational health obligations — cadmium, beryllium, lead, nickel and chromium among them — and flu-like symptoms after hot work on galvanised or brass material can indicate metal fume fever. We build recovery equipment; a clinician and your occupational health provider are the right authorities on exposure.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "wet-dry-systems", "pneumatic-vacuums", "custom-engineered-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
 { label: "Aluminum Dust guide", href: "/materials/aluminum-dust" },
 { label: "Magnesium Dust guide", href: "/materials/magnesium-dust" },
 { label: "Titanium Dust guide", href: "/materials/titanium-dust" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 ],
};
