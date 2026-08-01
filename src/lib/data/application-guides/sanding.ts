import { Cog, Filter, Gauge, ShieldCheck, Sparkles, Wind, Wrench } from "lucide-react";

import type { ApplicationGuideData } from "@/components/templates/application-guide";

export const sandingGuide: ApplicationGuideData = {
 slug: "sanding",
 title: "Sanding & Surface Prep",
 titleAccent: "Vacuum Solutions",
 categoryCrumb: { label: "General Industrial Maintenance", anchor: "general-maintenance" },
 seo: {
 title: "Sanding & Surface Prep Vacuum Solutions",
 description:
 "Industrial vacuum recovery for sanding — where the hazard depends entirely on the substrate, from combustible wood dust to conductive carbon-fiber composite, toxic legacy paint and combustible metal fines. Tool-integrated and ambient capture, matched to what is being sanded.",
 },
 tagline: "Sanding dust is only as safe as its substrate.",
 heroIntro:
 "Sanding looks like one operation, but its dust is a different hazard every time — because it is defined entirely by what is being sanded. Combustible wood dust, electrically conductive carbon-fiber composite, toxic dust from legacy lead paint, combustible metal fines: the sander is the same, and the risk is not. Recovery is matched to the substrate, captured at the tool and around the bench.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded for combustible substrates" },
 { icon: Filter, title: "HEPA Filtration", detail: "Respirable & toxic dust retained" },
 { icon: Wrench, title: "Built to Last", detail: "Rugged. Reliable. PrestiVac." },
 { icon: Gauge, title: "Maximum Uptime", detail: "Tool-integrated, continuous duty" },
 ],
 overview:
 "The defining fact of sanding is that the substrate decides the hazard. Sanding wood produces combustible cellulose dust; sanding carbon-fiber composite produces electrically conductive dust that shorts equipment, bound up with combustible resin; sanding old painted surfaces can liberate toxic legacy lead; sanding metal produces combustible metal fines, sometimes reactive. It is the same fine, respirable dust cloud in every case, but what to do about it changes completely with the material. Sanding dust is typically best captured at the source through tool-integrated extraction, backed by ambient recovery around benches and booths — and the recovery equipment is specified for whichever substrate hazard is in play, from grounded and rated for combustible wood or metal, to conductive-aware for composite, to HEPA-retained and sealed for lead.",
 capabilities: [
 { icon: Wind, title: "Fine Sanding Dust", detail: "The respirable fraction at the tool" },
 { icon: Filter, title: "Substrate-Specific Hazard", detail: "Wood, composite, paint or metal" },
 { icon: Sparkles, title: "Surface & Tool Cleanliness", detail: "A clean prep for what follows" },
 { icon: Cog, title: "Tool-Integrated Capture", detail: "Extraction at the sander" },
 ],
 materialsHeading: "Common sanding materials",
 materials: [
 "Wood sanding dust",
 "Composite sanding dust",
 "Paint & filler dust",
 "Metal sanding fines",
 "Drywall & mineral dust",
 "Mixed sanding dust",
 ],
 materialsNote: {
 text: "The substrate decides the hazard, from combustible wood to toxic legacy paint —",
 link: { label: "the materials directory", href: "/materials" },
 },
 challengesHeading: "Challenges in sanding",
 challenges: [
 "The substrate decides the hazard — wood, composite, paint and metal differ entirely",
 "Wood sanding dust is combustible cellulose",
 "Composite sanding dust is electrically conductive and bound with combustible resin",
 "Sanding legacy painted surfaces can liberate toxic lead",
 "Metal sanding produces combustible fines, sometimes reactive",
 "Fine respirable dust is generated right in the operator's breathing zone",
 ],
 whyHeading: "Why vacuum recovery?",
 why: [
 "Tool-integrated capture takes the dust at the sander, plus ambient bench recovery",
 "HEPA retention for the respirable and toxic fractions",
 "Grounded, rated recovery for combustible wood and metal dust",
 "Conductive-aware recovery for carbon-fiber composite dust",
 "Sealed handling for legacy lead paint dust",
 "Supports combustible-dust and exposure-limit compliance with documented methods",
 ],
 benefits: [
 { title: "Better Safety", detail: "The dust is captured at the tool, whatever hazard the substrate brings." },
 { title: "Higher Productivity", detail: "Tool-integrated extraction keeps the work and the operator's view clear." },
 { title: "Cost Savings", detail: "Cleaner surfaces mean fewer finish defects and less rework." },
 { title: "Cleaner Workplace", detail: "HEPA-retained exhaust keeps respirable and toxic dust out of the air." },
 ],
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 setup: [
 { step: "Sanding station or tool", detail: "Hand, orbital or bench sanding at the source" },
 { step: "Tool-integrated extraction", detail: "Capture at the sander, plus ambient bench recovery" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Rated unit matched to substrate", detail: "Grounded for combustible, conductive-aware for composite, HEPA for lead" },
 { step: "Sealed collection & disposal", detail: "Toxic or reactive fractions contained" },
 ],
 setupNote: {
 text: "Wood is the most common sanding substrate of all —",
 link: { label: "the woodworking deep dive", href: "/industries/woodworking" },
 textAfter: "covers it in depth.",
 },
 faqs: [
 {
 question: "Is sanding dust dangerous?",
 answer:
 "It depends entirely on the substrate. Wood sanding dust is combustible; carbon-fiber composite dust is electrically conductive and bound with combustible resin; legacy paint can liberate toxic lead; metal produces combustible, sometimes reactive fines. The dust cloud looks similar in every case, but the correct handling changes completely with what is being sanded.",
 },
 {
 question: "Does it matter what I'm sanding?",
 answer:
 "It is the whole question. Grounded, rated recovery suits combustible wood or metal dust; conductive-aware recovery suits carbon-fiber composite; HEPA-retained, sealed handling suits legacy lead paint. Identifying the substrate — and, where relevant, testing it — is what determines the right recovery specification.",
 },
 {
 question: "What about sanding old lead paint?",
 answer:
 "Sanding painted surfaces on older structures can liberate toxic lead, so that dust is captured HEPA-retained and sealed as a lead-exposure control. It is one of the clearest examples of the substrate driving the hazard — the same sander that is routine on bare wood becomes a lead-exposure operation on old paint.",
 },
 {
 question: "Tool-integrated extraction or ambient recovery?",
 answer:
 "Both, working together. Tool-integrated extraction captures dust right at the sander where it is generated, which is the most effective single measure; ambient recovery around benches and booths clears what escapes and keeps surfaces clean. The combination keeps the fine, substrate-specific dust out of the breathing zone.",
 },
 ],
 relatedApplications: [
 "Grinding Dust",
 "Deburring & finishing",
 "Woodworking",
 "Surface preparation",
 "Abrasive blasting",
 "Coating removal",
 "Auto-body prep",
 ],
 relatedResources: [
 { label: "Explosion Proof Vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Explosion Proof Vacuum Guide", href: "/resources/explosion-proof-vacuum-guide" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 ],
};
