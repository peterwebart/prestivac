import { Filter, Gauge, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const starchDustGuide: MaterialGuideData = {
 slug: "starch-dust",
 name: "Starch Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
 title: "Is Starch Dust Combustible? Safe Starch Powder",
 description:
 "Starch powder is a combustible organic dust — cornstarch is the reference dust laboratories calibrate against. How starch dust behaves, why it is so easily suspended, and how to recover it safely with explosion-proof, HEPA-filtered equipment.",
 },
 heroIntro:
 "Built for the powder that laboratories use as their benchmark. Cornstarch is fine, dry and uniform enough to serve as a standard reference dust in explosion testing — which means the starch in your plant is not an ordinary powder to be swept up, it is the material other dusts get compared to.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Gauge, title: "Reference-Grade Fineness", detail: "Suspends on the least disturbance" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Fine combustible organic powder (polysaccharide)" },
 { label: "Common sources", value: "Corn, wheat, potato, tapioca and rice starch" },
 { label: "Reference status", value: "Cornstarch is used as a standard laboratory reference dust" },
 { label: "Governing standards", value: "NFPA 660 (consolidating the former NFPA 61); OSHA combustible dust guidance" },
 ],
 overview: [
 "Starch is the powder that dust-explosion science calibrates against. Because cornstarch is dry, fine and remarkably uniform, laboratories use it as a reference material in explosibility testing — and that laboratory status carries an uncomfortable practical implication for anyone handling it in volume. The starch accumulating on a beam above a packaging line is not an inert food ingredient in that location. It is fuel, in the particle size that burns fastest, sitting where a disturbance can suspend it.",
 "What makes starch demanding is not chemistry but behaviour. It is extremely easily aerosolized: pouring, bag dumping, sifting, pneumatic conveying and even foot traffic put it into the air, and once airborne it settles slowly and travels — which is how starch ends up on high ledges, inside electrical enclosures and on top of ducting far from where it is handled. That distribution is the hazard. A primary ignition anywhere in the building can disturb those accumulations and produce the secondary event that causes the real damage. Recovery equipment therefore has to remove starch without generating an ignition source and without blowing the accumulation back into suspension, which rules out compressed-air blowdown and ordinary shop vacuums alike.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 ],
 riskHeading: "Why starch dust behaves the way it does",
 risks: [
 "Reference-grade fineness: starch is used as a benchmark dust in explosibility testing precisely because it is fine, dry and consistent — the fraction in your plant behaves like the standard.",
 "Suspends on almost nothing: bag dumping, sifting, pneumatic transfer and ordinary traffic aerosolize starch readily, and it stays airborne long enough to travel well away from the handling point.",
 "Hidden distribution: because it settles slowly, starch accumulates on high steel, cable trays, duct tops and inside enclosures — the surfaces that get inspected least and that feed a secondary event.",
 "Static accumulation: dry starch moving through hoses, chutes and conveying lines generates static, which is why conductive, bonded and grounded equipment matters throughout the recovery path.",
 "Deep accumulation in equipment: starch packs into sifters, bucket elevators and dryer housings, where heat sources and confinement are already present.",
 "Allergen and sanitation overlap: in food plants, starch is also a changeover and cross-contact concern, so cleaning has to satisfy sanitation records as well as fire prevention.",
 ],
 solutions: [
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path from hose tip to collection container, so the cleaning step cannot become the ignition source.",
 "Air-operated units where compressed air is available and the area classification favours a drive with no electrical components at all.",
 "HEPA filtration tested to 99.99% at 0.3 µm, so fine starch is retained rather than discharged back into the room during cleaning.",
 "Retirement of compressed-air blowdown in starch areas — it converts a settled accumulation directly into a suspended cloud.",
 "Sealed collection and disposal, so recovered starch leaves the building without a second aerosolization step at the container.",
 "Defined-frequency vacuuming of the surfaces that actually accumulate: high steel, ledges, duct tops, sifter and elevator housings, and the perimeters of any heated equipment.",
 ],
 configuration: [
 { step: "Identify the starch and its fines", detail: "Corn, wheat, potato, tapioca and rice starches differ in particle size and moisture. Testing your own material establishes its behaviour rather than assuming the reference case." },
 { step: "Confirm the area classification", detail: "Your electrical or process engineer assigns the classification for each handling area. That determines which power units and construction are acceptable before any model is chosen." },
 { step: "Specify the conductive path", detail: "Anti-static hose, conductive wands and accessories, and a bonded connection to the unit — the accessory chain is part of the grounding, not an add-on to it." },
 { step: "Set filtration to the requirement", detail: "HEPA retention where exhaust air quality matters, with filter and container changes planned as a procedure rather than improvised at end of shift." },
 { step: "Write the frequencies into the program", detail: "Map the surfaces that accumulate, assign an interval to each, and record the pass. A Dust Hazard Analysis is what turns that map into a defensible program." },
 ],
 bestPractices: [
 "Treat high steel and duct tops as primary cleaning targets, not as an annual project — that is where the secondary-event fuel lives.",
 "Never use compressed air to clean starch accumulations; the practice creates exactly the suspended cloud the program exists to prevent.",
 "Keep sifter, elevator and dryer housings on a defined internal cleaning interval, since packed starch sits next to both heat and confinement.",
 "Ground and bond everything in the recovery chain, and inspect anti-static hoses for damage as a routine item.",
 "Empty collection containers into sealed disposal rather than tipping them, and do it away from ignition sources.",
 "Use the same cleaning pass to satisfy sanitation and allergen changeover records — one documented procedure, two obligations met.",
 ],
 faqs: [
 {
 question: "Is starch dust combustible?",
 answer:
 "Yes. Starch is a fine organic powder and it is combustible — cornstarch is well enough characterised that laboratories use it as a reference dust in explosibility testing. In a bag it behaves like any dry organic solid; the hazard that matters industrially is the suspended cloud, which can ignite and deflagrate given confinement and an ignition source. NFPA 660, which consolidated the former NFPA 61 for food and agricultural processing, is the standard your program is written against.",
 },
 {
 question: "Is starch powder explosive?",
 answer:
 "A dust deflagration requires five conditions together: combustible dust, oxygen, dispersion into a cloud, confinement, and an ignition source. Starch reliably supplies the first, and it is unusually good at supplying the third because it aerosolizes so easily. That is why housekeeping is the primary control — removing the accumulation removes the fuel that a primary event would otherwise disperse.",
 },
 {
 question: "Why is powdered starch treated as more hazardous than the raw crop?",
 answer:
 "Surface area. Milling the same mass of material into a fine powder exposes far more of it to oxygen, so combustion propagates through a cloud instead of creeping across a surface. Starch sits at the fine end of that scale, which is precisely why it serves as a laboratory benchmark.",
 },
 {
 question: "Can we sweep or blow down starch instead of vacuuming?",
 answer:
 "Both make the problem worse in the moment they are performed. Sweeping lofts the fines, and compressed-air blowdown converts a settled layer directly into a suspended cloud — the condition a dust program exists to avoid. Vacuum recovery with a grounded, bonded, HEPA-filtered unit removes the material instead of relocating it.",
 },
 {
 question: "Does starch dust need HEPA filtration?",
 answer:
 "Where exhaust air quality is part of the requirement — sanitation, allergen control, or simply not returning fines to a room you have just cleaned — HEPA filtration tested to 99.99% at 0.3 µm is what keeps captured starch captured. In a food plant the cleaning pass usually has to satisfy both the fire program and the sanitation record, and retained filtration is what allows one pass to do both.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Dust explosion basics", href: "/guides/dust-explosion-basics" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Flour Dust guide", href: "/materials/flour-dust" },
 { label: "Corn Dust guide", href: "/materials/corn-dust" },
 { label: "Bagging & Dumping guide", href: "/applications/bagging-dumping" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
