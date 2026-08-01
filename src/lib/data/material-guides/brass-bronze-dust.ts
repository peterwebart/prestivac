import { Filter, Flame, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const brassBronzeDustGuide: MaterialGuideData = {
 slug: "brass-bronze-dust",
 name: "Brass & Bronze Dust",
 groupCrumb: { label: "Metal Dusts", anchor: "metal-dusts" },
 seo: {
 title: "Is Brass Toxic? Brass & Bronze Dust Hazards and Recovery",
 description:
 "Brass and bronze are copper alloys, and the hazard lives in what they are alloyed with — zinc fume, lead in leaded brass, and fine metal dust from machining. What to control and how to recover it safely.",
 },
 heroIntro:
 "Built for alloys whose hazard is inherited rather than intrinsic. Brass and bronze are copper-based and largely benign as solid stock — the exposure questions come from the alloying elements, principally zinc in brass fume and lead in the free-machining grades that most shops actually cut.",
 badges: [
 { icon: ScrollText, title: "Alloy-Dependent Hazard", detail: "Lead content changes the obligations" },
 { icon: Flame, title: "Fine Metal Dust", detail: "Machining fines assessed as combustible metal dust" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ShieldCheck, title: "Contained Recovery", detail: "No blowdown of chips and fines" },
 ],
 facts: [
 { label: "Material type", value: "Copper alloys - brass is copper-zinc, bronze is copper-tin" },
 { label: "Primary exposure concerns", value: "Zinc oxide fume from hot work; lead in free-machining brass grades" },
 { label: "Where lead applies", value: "OSHA lead standard, 29 CFR 1910.1025, with a permissible exposure limit of 50 ug/m3" },
 { label: "Fire consideration", value: "Fine machining dust characterised as combustible metal dust by testing" },
 ],
 overview: [
 "Neither brass nor bronze is a single material. Brass is copper alloyed with zinc; bronze is copper alloyed with tin, often with additions of aluminium, silicon, phosphorus or lead. That variability is the whole story for hazard assessment, because the health questions attach to the alloying elements rather than to the copper. A shop machining leaded free-cutting brass has a lead problem it may not have registered; a shop brazing or welding brass has a zinc fume problem; a shop grinding either has a fine metal dust problem.",
 "Zinc oxide fume from hot work on brass is the classic cause of metal fume fever - an acute, flu-like reaction that resolves but signals meaningful overexposure. Leaded brass grades, chosen precisely because lead improves machinability, bring the far more serious cumulative toxicity of lead, which is regulated under its own OSHA standard with a permissible exposure limit of 50 micrograms per cubic metre. And the fines themselves, as with any finely divided metal, should be characterised by testing rather than assumed inert. The practical upshot is that chips and grinding dust want contained recovery, not a broom and an air hose.",
 ],
 industries: [
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "Foundry", href: "/industries/foundry" },
 { label: "Marine", href: "/industries/marine" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Ammunition & Firearms", href: "/industries/ammunition" },
 ],
 riskHeading: "Where the real hazards sit",
 risks: [
 "Lead in free-machining grades: leaded brass is chosen for machinability, and the lead it contains is regulated under OSHA's lead standard with a permissible exposure limit of 50 ug/m3.",
 "Zinc oxide fume: heating brass during brazing, welding or casting produces zinc oxide fume, the classic cause of metal fume fever.",
 "Fine machining dust: grinding, polishing and deburring generate respirable fines that behave differently from chips and should be characterised by testing.",
 "Mixed swarf: brass and bronze chips accumulate with coolant and other metals, complicating both recovery and disposal.",
 "Ingestion routes: lead-bearing dust on hands and clothing reaches people through eating and smoking, which is why hygiene provisions matter where leaded grades are cut.",
 "Assumption of inertness: because solid brass is handled bare-handed without concern, the dust and fume from working it often escape assessment entirely.",
 ],
 solutions: [
 "HEPA-filtered vacuum recovery for grinding and polishing fines, so respirable particulate is retained rather than redistributed.",
 "Wet or immersion recovery where chips arrive with coolant, keeping swarf and fluid together and manageable.",
 "Elimination of compressed-air blowdown at machine tools - the fastest way to make settled fines and lead-bearing dust airborne.",
 "Source capture at brazing and welding stations where zinc oxide fume is generated.",
 "Segregated collection for leaded grades so the disposal route reflects the lead content.",
 "Scheduled recovery of accumulation on machines, floors and ledges rather than periodic clear-outs.",
 ],
 configuration: [
 { step: "Establish the alloy", detail: "Ask specifically whether the grade is leaded. Free-machining brass is common and changes the compliance picture entirely." },
 { step: "Separate chip and fines duty", detail: "Chips are a volume and handling problem; grinding fines are a respirable one. A single approach rarely serves both well." },
 { step: "Account for coolant", detail: "Where swarf comes wet, specify recovery that handles liquid rather than fighting it with a dry unit." },
 { step: "Specify filtration for the fines", detail: "HEPA retention where respirable metal dust is generated, particularly with leaded grades in the mix." },
 { step: "Plan disposal by content", detail: "Lead-bearing swarf and dust follow a different route than clean copper alloy scrap. Decide that before the container fills." },
 ],
 bestPractices: [
 "Ask suppliers to confirm lead content in brass grades rather than inferring it from the part or the colour.",
 "Retire compressed-air blowdown at machine tools and replace it with vacuum recovery.",
 "Capture zinc oxide fume at brazing and welding stations instead of relying on general ventilation.",
 "Keep leaded swarf segregated so disposal and any applicable lead-programme obligations stay straightforward.",
 "Include machine interiors and the ledges above them in scheduled cleaning - that is where fines accumulate unseen.",
 "Treat metal fume fever symptoms as a signal to review controls, not as an accepted part of the job.",
 ],
 faqs: [
 {
 question: "Is brass toxic?",
 answer:
 "Solid brass is handled routinely without concern, and the copper and zinc that make up ordinary brass are not the issue in bulk. The hazards arise from working it: heating brass produces zinc oxide fume, the classic cause of metal fume fever, and many free-machining brass grades contain lead, which is cumulatively toxic and regulated under OSHA's lead standard with a permissible exposure limit of 50 micrograms per cubic metre. So the honest answer is that brass is not inherently toxic to handle, but brass dust and fume can be - and whether they are depends on the alloy.",
 },
 {
 question: "Is bronze toxic?",
 answer:
 "Bronze is copper alloyed with tin and often other elements. As with brass, the question is what it is alloyed with: leaded bronzes carry lead exposure concerns, and hot work on any copper alloy can generate metal fume. Solid bronze is not a handling hazard; the dust and fume produced by machining, grinding or welding it warrant assessment.",
 },
 {
 question: "Is brass dust combustible?",
 answer:
 "Fine metal dust from machining copper alloys should be characterised by testing rather than assumed inert, as with any finely divided metal. In practice the dominant reason to control brass and bronze fines is exposure - particularly with leaded grades - rather than deflagration risk.",
 },
 {
 question: "How should brass and bronze machining dust be cleaned up?",
 answer:
 "Vacuum recovery rather than sweeping or blowdown. Compressed air at a machine tool is the quickest way to put lead-bearing fines into the breathing zone. Where swarf arrives with coolant, use recovery designed for liquid; where grinding produces respirable fines, use HEPA-retained filtration and keep leaded material segregated for disposal.",
 },
 ],
 recommended: ["industrial-vacuums", "hepa-vacuums", "wet-dry-systems", "explosion-proof-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Copper Dust guide", href: "/materials/copper-dust" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "Zinc Dust guide", href: "/materials/zinc-dust" },
 { label: "Metalworking deep dive", href: "/industries/metalworking" },
 ],
};
