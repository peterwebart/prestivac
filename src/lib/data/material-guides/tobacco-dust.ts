import { Filter, Flame, ShieldCheck, Stethoscope } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const tobaccoDustGuide: MaterialGuideData = {
 slug: "tobacco-dust",
 name: "Tobacco Dust",
 groupCrumb: { label: "Agricultural Dusts", anchor: "agricultural-dusts" },
 seo: {
 title: "How to Safely Recover Tobacco Dust?",
 description:
 "Tobacco processing dust is a combustible agricultural dust that follows the same physics as grain — and it carries a pharmacologically active compound, nicotine, alongside recognized respiratory effects for processing workers. Grounded, rated, HEPA-retained recovery serves the combustion and the exposure side.",
 },
 heroIntro:
 "A combustible farm dust that carries an active compound. Threshing, conditioning, cutting and blending tobacco generates a fine agricultural dust that deflagrates on the same physics as grain — and beyond the fire hazard, tobacco dust is associated with respiratory effects in processing workers and contains nicotine, a systemically active alkaloid. Recovery is grounded and rated for the combustion side, HEPA-retained and sealed for the exposure side.",
 badges: [
 { icon: Flame, title: "Combustible Ag Dust", detail: "Grain-dust physics" },
 { icon: Stethoscope, title: "Respiratory & Nicotine", detail: "Exposure has two dimensions" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine dust retained, sealed" },
 { icon: ShieldCheck, title: "Built for Processing", detail: "Threshing, cutting, blending" },
 ],
 facts: [
 { label: "Combustibility", value: "A combustible agricultural dust under NFPA 660 — it deflagrates like grain or flour" },
 { label: "Respiratory effects", value: "Tobacco dust exposure is associated with respiratory effects in processing workers" },
 { label: "Nicotine content", value: "The dust contains nicotine, a systemically active alkaloid — a systemic-absorption consideration" },
 { label: "Where it arises", value: "Threshing, conditioning, cutting, blending and product manufacture" },
 ],
 overview: [
 "Tobacco processing is, from a dust standpoint, an agricultural operation, and its dust behaves accordingly. Threshing and conditioning leaf, cutting and shredding, blending, and downstream product manufacture all liberate a fine tobacco dust that is a combustible agricultural dust — it deflagrates given the right particle size, concentration and ignition source, on the same physics that govern grain and flour dust. So the baseline is the established agricultural combustible-dust discipline: grounded, bonded, rated recovery, captured at the point of generation, treating the dust as the fuel it is.",
 "What distinguishes tobacco from an ordinary grain dust is the exposure dimension layered on top. Tobacco dust is associated with respiratory effects in processing workers, and the dust contains nicotine — a systemically active alkaloid — so there is a systemic-absorption consideration alongside the respiratory one. That makes HEPA-retained capture and sealed handling worthwhile as exposure controls, not just housekeeping. It is worth noting for accuracy that green tobacco sickness — acute nicotine toxicity — is associated with handling wet green leaf during harvest, a field-side dermal-absorption issue rather than a dry-dust one; the processing-dust concerns are the combustible-dust and respiratory hazards, with the dust's nicotine content a reason to keep it well contained. Across it all the approach is consistent: grounded and rated for the combustion risk, HEPA-retained and sealed for exposure, and no dry sweeping or blow-down.",
 ],
 industries: [
 { label: "Agriculture", href: "/industries/agriculture" },
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Cannabis & Hemp", href: "/industries/cannabis" },
 { label: "General Maintenance", href: "/applications/warehouse-housekeeping" },
 { label: "Packaging", href: "/applications#packaging" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "A combustible agricultural dust that deflagrates like grain or flour",
 "Respiratory effects associated with tobacco dust exposure in processing",
 "Nicotine content — a systemically active compound in the dust",
 "Dry sweeping or blow-down resuspending combustible, nicotine-bearing dust",
 "Underestimating it as harmless 'leaf dust' rather than an agricultural combustible dust",
 ],
 solutions: [
 "Grounded, rated recovery on the agricultural combustible-dust playbook",
 "HEPA-retained, sealed capture as a respiratory and systemic-absorption exposure control",
 "Capture at threshing, cutting and blending points of generation",
 "Dedicated recovery where tobacco dust is concentrated",
 "Never dry-sweep or blow down tobacco dust",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for threshing, cutting and blending dust" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the dust", detail: "Rated for the combustible agricultural dust per its behavior" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine, nicotine-bearing fraction retained" },
 { step: "Sealed collection & disposal", detail: "Contained; dust handled as an exposure control" },
 ],
 bestPractices: [
 "Treat tobacco dust as the combustible agricultural dust it is — borrow the grain-dust playbook",
 "Use HEPA capture as an exposure control for the respiratory and nicotine dimensions",
 "Capture at the threshing, cutting and blending sources, not after it settles",
 "Keep the nicotine-bearing dust well contained through sealed disposal",
 "Never dry-sweep or blow down tobacco dust",
 ],
 faqs: [
 {
 question: "What is combustible tobacco?",
 answer:
 "The phrase is used two ways. In tobacco product regulation it distinguishes products that are burned from non-combusted alternatives. In a processing plant it means something more immediate: tobacco dust and fines generated by cutting, conditioning, blending and packing are a combustible organic dust, and they accumulate in ducting, on high steel and inside equipment where ignition sources also live. If you arrived here from a plant-safety question, the second reading is the one that matters.",
 },
 {
 question: "Is tobacco dust combustible?",
 answer:
 "Yes — tobacco processing dust is a combustible agricultural dust that deflagrates on the same physics as grain or flour, given the right particle size, concentration and ignition source. The safe baseline is the established agricultural combustible-dust discipline: grounded, bonded, rated recovery captured at the source.",
 },
 {
 question: "What are the health concerns with tobacco dust?",
 answer:
 "Tobacco dust exposure is associated with respiratory effects in processing workers, and the dust contains nicotine, a systemically active alkaloid, so there is a systemic-absorption consideration on top of the respiratory one. HEPA-retained capture and sealed handling therefore serve as exposure controls, keeping the fine, nicotine-bearing dust out of the breathing zone.",
 },
 {
 question: "Is green tobacco sickness a dust hazard?",
 answer:
 "Not primarily. Green tobacco sickness — acute nicotine toxicity — is associated with handling wet green tobacco leaf during harvest, a field-side dermal-absorption issue rather than a processing-dust one. The dry-processing concerns are the combustible-dust and respiratory hazards, with the dust's nicotine content a reason to keep it well contained.",
 },
 {
 question: "Where does tobacco dust come from?",
 answer:
 "Threshing and conditioning leaf, cutting and shredding, blending, and downstream product manufacture — each liberates fine tobacco dust captured at the point of generation. It is handled as a combustible agricultural dust, with HEPA retention and sealed disposal added for the exposure dimensions.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Grain Dust guide", href: "/materials/grain-dust" },
 { label: "Agriculture deep dive", href: "/industries/agriculture" },
 { label: "Cannabis & Hemp deep dive", href: "/industries/cannabis" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
