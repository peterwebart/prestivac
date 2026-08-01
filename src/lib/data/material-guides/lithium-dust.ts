import { Droplets, Filter, Flame, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const lithiumDustGuide: MaterialGuideData = {
 slug: "lithium-dust",
 name: "Lithium Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "How to Safely Recover Lithium Dust?",
 description:
 "Lithium is the water-reactive combustible metal at the heart of the battery boom — lithium metal reacts violently with water and even air moisture, releasing hydrogen and heat, burns intensely, and requires Class D handling where water makes a fire worse. Dry, grounded, sealed recovery, in the dry-room conditions battery work already demands.",
 },
 heroIntro:
 "The water-reactive combustible metal at the heart of the battery boom — lithium metal reacts violently with water, and even with the moisture in ordinary air, releasing hydrogen and heat. It burns intensely, water makes a lithium metal fire worse rather than better, and fine lithium can be pyrophoric. Recovery is dry, grounded and sealed, in the low-humidity conditions battery manufacturing already runs.",
 badges: [
 { icon: Flame, title: "Reactive Metal", detail: "Burns intensely; Class D, never water" },
 { icon: Droplets, title: "Water Is Dangerous", detail: "Reacts with water and air moisture" },
 { icon: Filter, title: "HEPA & Sealed", detail: "Fine reactive fines contained" },
 { icon: Zap, title: "Built for Batteries", detail: "Anodes, cathodes & dry rooms" },
 ],
 facts: [
 { label: "The reactivity", value: "Lithium metal reacts violently with water — and with air moisture — releasing flammable hydrogen and heat" },
 { label: "Combustibility", value: "A reactive combustible metal; fine lithium can be pyrophoric and burns intensely" },
 { label: "Fire class", value: "A Class D metal fire — water and standard extinguishers make it worse, not better" },
 { label: "Handling condition", value: "Kept dry and often handled in low-humidity dry rooms; collected material sealed" },
 ],
 overview: [
 "Lithium sits at the most reactive end of the combustible-metal family, and its defining property is hostility to water. Lithium metal reacts with liquid water and even with the humidity in ordinary air, generating flammable hydrogen and heat; in fine form it can be pyrophoric, igniting on air contact. A lithium metal fire is a Class D metal fire, where water and ordinary extinguishers accelerate rather than suppress it. This is why lithium metal battery work is done in dry rooms — low-humidity environments that keep the metal from reacting with atmospheric moisture — and why the recovery approach is dry, grounded and sealed from end to end, never wet.",
 "It is worth separating lithium metal from lithium compounds. Lithium metal and lithium-metal anodes are the highly reactive form described above. The lithium-bearing cathode powders that dominate battery manufacturing — the mixed oxides used in common cell chemistries — are far less reactive than the metal, but they are fine, valuable and handled carefully as combustible or exposure-relevant powders in their own right, and battery recycling streams can contain reactive lithium along with everything else. Across all of it the discipline is consistent: dry, grounded, HEPA-retained and sealed recovery, dedicated to the material, with water kept away from anything containing lithium metal.",
 ],
 industries: [
 { label: "Battery Manufacturing", href: "/industries/battery" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "Electronics", href: "/industries/electronics" },
 { label: "Additive Manufacturing", href: "/applications/metal-3d-printing" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Applying water to lithium metal — it reacts violently, releasing hydrogen and heat",
 "Air moisture alone reacting with reactive lithium — hence dry-room handling",
 "Fine lithium behaving pyrophorically, igniting on contact with air",
 "Treating a lithium fire as an ordinary fire — it is Class D and water makes it worse",
 "Battery-recycling streams carrying reactive lithium mixed with other materials",
 ],
 solutions: [
 "Dry recovery only — never water, and never a wet method, on anything with lithium metal",
 "Handling in the low-humidity dry-room conditions battery work already provides",
 "Grounded, bonded, rated recovery matched to the reactive metal",
 "HEPA-retained, sealed collection; dedicated to the material",
 "Class D fire provisions in place; standard extinguishers kept away",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for lithium fines, anode material and powder" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the metal", detail: "Rated for the reactive combustible metal; dry operation" },
 { step: "Sealed, dry collection", detail: "Contained and moisture-excluded — no water anywhere in the path" },
 { step: "Class D provisions", detail: "Metal-fire measures in place; water and standard extinguishers away" },
 ],
 bestPractices: [
 "Never apply water — or any wet method — to lithium metal or lithium-metal fines",
 "Keep collected lithium dry and sealed; exclude moisture from the whole path",
 "Handle in dry-room conditions where the process provides them",
 "Ground and bond everything — treat lithium as the reactive combustible metal it is",
 "Separate lithium metal (highly reactive) from cathode powders in your handling plan",
 ],
 faqs: [
 {
 question: "Why is water so dangerous with lithium?",
 answer:
 "Lithium metal reacts with water — and even with the moisture in air — to release flammable hydrogen and heat, and a lithium metal fire is a Class D fire that water accelerates rather than suppresses. So recovery is strictly dry, wet methods are off the table for anything containing lithium metal, and reactive lithium is handled in low-humidity dry rooms.",
 },
 {
 question: "Is lithium dust pyrophoric?",
 answer:
 "Fine lithium metal can be, meaning it can ignite on contact with air. That, plus its reaction with atmospheric moisture, is why lithium metal work is done in controlled dry-room conditions and why recovery is grounded, dry and sealed, treating lithium as one of the more hazardous reactive metals.",
 },
 {
 question: "Are battery cathode powders the same hazard as lithium metal?",
 answer:
 "No. Lithium metal and lithium-metal anodes are the highly water-reactive form. The lithium-bearing cathode powders used in most cell chemistries are much less reactive, though still fine, valuable and handled carefully as combustible or exposure-relevant powders. Your handling plan should distinguish the two, since the metal demands the strictest dry, Class D discipline.",
 },
 {
 question: "What about battery recycling?",
 answer:
 "Recycling streams can contain reactive lithium mixed with everything else in a spent cell, which is part of what makes battery recycling hazardous. It is handled dry, grounded, HEPA-retained and sealed, with the recycling deep dive covering the broader uncharacterized-stream problem that surrounds it.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Zinc Dust guide", href: "/materials/zinc-dust" },
 { label: "Magnesium Dust guide", href: "/materials/magnesium-dust" },
 { label: "Battery deep dive", href: "/industries/battery" },
 { label: "Recycling deep dive", href: "/industries/recycling" },
 ],
};
