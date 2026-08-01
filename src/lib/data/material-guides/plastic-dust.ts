import { Filter, Recycle, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const plasticDustGuide: MaterialGuideData = {
 slug: "plastic-dust",
 name: "Plastic & Polymer Dust",
 groupCrumb: { label: "Plastics & Rubber Dusts", anchor: "plastics-rubber-dusts" },
 seo: {
 title: "How to Safely Recover Plastic & Polymer Dust?",
 description:
 "Most thermoplastics and resins are combustible dusts — polyethylene, polypropylene, ABS, PET and nylon ignite readily as fines. And because plastics are insulators, the dust charges itself: a combustible cloud that can supply its own static ignition. Behavior varies widely by polymer, so testing governs.",
 },
 heroIntro:
 "Built for the dust that makes its own spark — most plastics and polymers are combustible fines, and because the material is an electrical insulator it builds triboelectric charge as it's ground, conveyed and handled, so a combustible cloud can arrive carrying its own ignition source. Behavior spans a huge range across polymers, which is exactly why testing, not reputation, governs.",
 badges: [
 { icon: ShieldCheck, title: "Testing Governs", detail: "Kst varies widely by polymer & fineness" },
 { icon: Zap, title: "Static-Aware", detail: "Insulators charge themselves — bond & ground" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine polymer fractions retained" },
 { icon: Recycle, title: "Built for Plastics", detail: "Molding, grinding, recycling & SLS" },
 ],
 facts: [
 { label: "Combustibility", value: "Most thermoplastics and resins are combustible dusts — polyethylene, polypropylene, ABS, PET and nylon among the readily ignitable" },
 { label: "The variability", value: "Behavior spans a wide range — polyolefins ignite readily, PVC's chlorine makes it less so; testing governs" },
 { label: "Built-in ignition", value: "Plastics are insulators — triboelectric static builds as dust is handled, an ignition source the material creates itself" },
 { label: "Standard", value: "A combustible particulate solid under NFPA 660 (consolidating the former NFPA 654)" },
 ],
 overview: [
 "Plastic dust earns a specific warning that its benign, everyday material identity tends to hide: most thermoplastics and resins are combustible dusts, and the fine fractions of polyethylene, polypropylene, ABS, PET and nylon ignite readily under the same dust-deflagration physics that govern flour or wood. Fines are generated wherever plastic is worked — grinding and pulverizing, pelletizing and regrind, cutting and sanding, and increasingly in polymer additive manufacturing, where selective-laser-sintering powders such as nylon PA12 are handled loose. The distinctive hazard is that plastics are electrical insulators: as the dust is conveyed, ground and handled it accumulates triboelectric charge, so a combustible plastic cloud can arrive already carrying the static-discharge ignition source that sets it off. The material, in effect, makes its own spark.",
 "The second half of the picture is variability, and it is why testing governs here more than almost anywhere. Polyolefins and nylons ignite readily; PVC's chlorine content makes it less readily combustible and often self-extinguishing in bulk — but 'less readily' is never 'exempt,' fine PVC dust can still deflagrate, and its combustion produces toxic hydrogen chloride. Fillers, flame retardants, particle size and process history all shift the numbers, so the specification comes from explosibility testing of your actual polymer and fineness rather than from a family reputation. Recycling and shredding streams add mixed-polymer complexity, and overheating during recovery risks thermal-decomposition products of its own. The control program is consistent: bonded and grounded, static-dissipative, HEPA-retained recovery, rated to the material's test result and specified for the real stream on your floor.",
 ],
 industries: [
 { label: "Plastics Processing", href: "/applications#plastics" },
 { label: "Powder Coating", href: "/applications/powder-coating" },
 { label: "Recycling & Shredding", href: "/applications#recycling" },
 { label: "Automotive Plastics", href: "/industries/automotive" },
 { label: "Electronics", href: "/industries/electronics" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Assuming 'just plastic' is inert — most thermoplastics and resins are combustible dusts",
 "Triboelectric static: the insulating material charges itself and can supply its own ignition",
 "Wide variability — a polyolefin's behavior tells you nothing about PVC's or a filled compound's; testing governs",
 "Thermal decomposition produces toxic products (e.g., hydrogen chloride from PVC); overheated recovery is its own hazard",
 "Blow-down disperses fine polymer dust into an ignitable cloud carrying its own static charge",
 ],
 solutions: [
 "Explosibility testing (Kst, Pmax) on your actual polymer and fineness — the specification's honest foundation",
 "Bonded, grounded, static-dissipative recovery — the material charges itself, so the path must dissipate it",
 "Rated recovery matched to the test result, capturing from the point of generation",
 "HEPA-retained capture of the fine fraction; sealed disposal without heat accumulation",
 "Recycling and shred lines specified for the mixed-polymer stream and its static behavior",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for pellets, regrind fines and sanding dust" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end — critical for an insulating dust" },
 { step: "Recovery unit matched to the test", detail: "Rated to the polymer's measured Kst where testing requires it" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine polymer fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained, with no heat accumulation on the collected dust" },
 ],
 bestPractices: [
 "Test the actual polymer — plastic-dust behavior spans a huge range and no table substitutes for it",
 "Bond and ground everything — an insulating dust supplies its own ignition via static",
 "Never let recovery equipment overheat a plastic dust — decomposition products can be toxic",
 "Specify recycling and shred lines for the mixed stream, not an idealized single polymer",
 "Never blow down — it makes a charged, ignitable cloud out of settled dust",
 ],
 faqs: [
 {
 question: "Is plastic dust combustible?",
 answer:
 "Yes. Most polymer dusts are combustible organic dusts, generated by grinding, cutting, drilling and pelletising, and they fall in Class II Group G as non-conductive dusts. Burning plastics also produce dense toxic smoke, so a plastics dust fire creates an atmosphere problem in addition to the fire itself.",
 },
 {
 question: "Is plastic dust really combustible?",
 answer:
 "For most plastics, yes. The fine fractions of polyethylene, polypropylene, ABS, PET and nylon ignite readily, and NFPA 660 treats them as combustible particulate solids. The nuance that matters: behavior varies widely by polymer, particle size and additives, so your classification comes from testing your actual material rather than from the reassuring familiarity of the plastic itself.",
 },
 {
 question: "Why does static matter so much with plastics?",
 answer:
 "Because plastics are electrical insulators. As the dust is ground, conveyed and handled it accumulates triboelectric charge, which means a combustible plastic cloud can arrive with its own ignition source built in. That is why bonding, grounding and static-dissipative recovery equipment are essential here rather than optional — the material creates the very spark that endangers it.",
 },
 {
 question: "Is PVC dust as dangerous as other plastic dusts?",
 answer:
 "Not in the same way. PVC's chlorine content makes it less readily combustible than polyolefins, and it is often self-extinguishing in bulk — but 'less readily' is not 'exempt.' Fine PVC dust can still deflagrate under the right conditions, and its combustion produces toxic hydrogen chloride. As always, testing your actual material, not the polymer's general reputation, is what governs the specification.",
 },
 {
 question: "What about polymer 3D printing and recycling dust?",
 answer:
 "Both generate fine polymer dust and both deserve the combustible-dust treatment. Selective-laser-sintering and other polymer additive processes handle loose powders such as nylon PA12; recycling and shredding liberate mixed-polymer fines. They are recovered as combustible dust with full static discipline, and the line is specified for the actual — often mixed — stream rather than an idealized single clean polymer.",
 },
 ],
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Powder Coating application", href: "/applications/powder-coating" },
 { label: "Automotive deep dive", href: "/industries/automotive" },
 ],
};
