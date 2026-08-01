import { Droplets, Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const tankCleaningGuide: ApplicationGuideData = {
 slug: "tank-cleaning",
 title: "Tank & Vessel Cleaning",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Tank & Vessel Cleaning Vacuum Solutions",
 description:
 "Industrial vacuum recovery for cleaning tanks, reactors and process vessels — wet sludge and dry residue removed reach-first to minimize confined-space entry, with rated equipment for flammable residue and sealed handling for chemical and toxic material.",
 },
 tagline: "The vessel remembers what it held.",
 heroIntro:
 "Cleaning a tank, reactor or process vessel means recovering what settled inside — product residue, sludge and scale that carry the hazard of whatever the vessel last held. Recovery works reach-first to keep operators out of the confined space where possible, handling wet and dry material with equipment rated for the residue in front of it.",
 badges: [
 { icon: ShieldCheck, title: "Confined-Space Ready", detail: "Reach-first, entry minimized" },
 { icon: Filter, title: "HEPA & Sealed", detail: "Chemical & toxic residue contained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Wet & Dry", detail: "Sludge and settled solids" },
 ],
 overview:
 "A vessel's cleanup hazard is inherited from its contents. Storage tanks, reactors, mixers and process vessels accumulate settled product, sludge, scale and residue, and that material is flammable, chemical, toxic or combustible depending on what was last inside. Two disciplines govern the work. Confined-space entry is the safety framework, so recovery is specified reach-first — clearing as much as possible from the manway before anyone enters — and the residue itself sets the equipment: wet-capable for sludge, rated for flammable material, HEPA-retained and sealed for toxic or potent residue.",
 capabilities: [
 { icon: Droplets, title: "Sludge & Liquid Residue", detail: "Wet material recovered directly" },
 { icon: Filter, title: "Chemical & Toxic Residue", detail: "Sealed, HEPA-retained handling" },
 { icon: Wind, title: "Settled Product & Solids", detail: "Dry residue and scale" },
 { icon: Sparkles, title: "Changeover & Turnaround", detail: "Vessel clean between campaigns" },
 ],
 materialsHeading: "Common vessel residues",
 materials: [
 "Settled product residue",
 "Process sludge",
 "Flammable-liquid residue",
 "Chemical residue",
 "Combustible-dust residue",
 "Wet & dry mixed residue",
 ],
 materialsNote: {
 text: "Chemical and flammable residues carry the process's own hazards —",
 link: { label: "see the chemical processing deep dive", href: "/industries/chemical" },
 },
 challengesHeading: "Challenges in tank & vessel cleaning",
 challenges: [
 "Confined-space entry is the governing safety framework",
 "The residue hazard is inherited from whatever the vessel last held",
 "Wet sludge and dry residue often occur together in one vessel",
 "Reach-first recovery minimizes the need for entry",
 "Flammable residue requires rated equipment inside the vessel",
 "Chemical and toxic residue demands sealed, contained disposal",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Reach-first recovery clears the vessel before entry where possible",
 "Wet-and-dry capability handles sludge and settled solids together",
 "Rated equipment for flammable and combustible residue",
 "HEPA retention and sealed handling for chemical and toxic material",
 "Supports the confined-space entry program with a documented method",
 "Faster changeover and turnaround between campaigns",
 ],
 benefits: [
 { title: "Better Safety", detail: "Reach-first recovery keeps people out of the confined space where possible." },
 { title: "Higher Productivity", detail: "Vessels return to service faster between batches and campaigns." },
 { title: "Cost Savings", detail: "Less manual entry, less downtime and less residual product loss." },
 { title: "Cleaner Workplace", detail: "Chemical and toxic residue stays contained through disposal." },
 ],
 recommended: ["explosion-proof-vacuums", "industrial-vacuums", "hepa-vacuums", "pneumatic-vacuums"],
 setup: [
 { step: "Vessel & manway", detail: "Storage tank, reactor or process vessel accessed at the opening" },
 { step: "Reach-first tooling", detail: "Extension wands and lances to clear before any entry" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated wet/dry unit", detail: "Explosion-proof or HEPA industrial, matched to the residue" },
 { step: "Sealed collection & disposal", detail: "Flammable, chemical and toxic residue contained" },
 ],
 setupNote: {
 text: "Cleaning dry bulk-solids bins is a related but distinct job —",
 link: { label: "the silo & bin cleaning guide", href: "/applications/silo-cleaning" },
 textAfter: "covers reach-first interior recovery for solids.",
 },
 faqs: [
 {
 question: "Does tank cleaning always mean confined-space entry?",
 answer:
 "Entry is often required, but the goal is to minimize it. Reach-first recovery — clearing as much residue as possible through the manway with extension tooling before anyone enters — reduces both the time in the vessel and the exposure. When entry is necessary, recovery supports the permitted confined-space procedure rather than replacing it.",
 },
 {
 question: "What if the vessel held a flammable material?",
 answer:
 "Then the residue and any retained vapor make it a rated environment, and recovery equipment must suit that atmosphere — grounded, and air-operated or rated electric as the situation requires. The vessel's contents history and gas testing govern; an unrated tool inside a flammable-residue vessel is itself the hazard.",
 },
 {
 question: "Can one unit handle both sludge and dry residue?",
 answer:
 "Yes — vessels commonly hold both wet sludge and dry settled solids, so wet-and-dry-capable recovery is the practical choice. The unit is still matched to the hazard of the material: rated for flammable or combustible residue, HEPA-retained and sealed for chemical or toxic content.",
 },
 {
 question: "How is this different from silo cleaning?",
 answer:
 "They share the reach-first, confined-space philosophy but differ in the material. Silo and bin cleaning deals with dry bulk solids, while tank and vessel cleaning handles the wet sludge, liquid residue and scale that process vessels leave behind — which is why wet capability and residue-specific ratings matter more here.",
 },
 ],
 relatedApplications: [
 "Silo & bin cleaning",
 "Reactor cleaning",
 "Confined space",
 "Sludge removal",
 "Changeover cleaning",
 "Sump cleaning",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
