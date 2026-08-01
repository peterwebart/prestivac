import { Factory, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const woodDustGuide: MaterialGuideData = {
 slug: "wood-dust",
 name: "Wood Dust",
 groupCrumb: { label: "Wood Dusts", anchor: "wood-dusts" },
 seo: {
 title: "Wood Dust Vacuum Solutions",
 description:
 "Wood dust is a classic combustible dust and a recognized carcinogen. How the fugitive fraction is safely collected: grounded explosion-proof HEPA vacuums under NFPA 664 / 660.",
 },
 heroIntro:
 "Built for the dust your machine collection system doesn't catch — the fugitive fine fraction that settles on structure and equipment, fuels secondary explosions, and carries the exposure risk wood dust is classified for.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 664 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "99.99% at 0.3 µm — the exposure control" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded construction" },
 { icon: Factory, title: "Built for Industry", detail: "Line-side to overhead steel" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust" },
 { label: "Health classification", value: "Wood dust is classified as a human carcinogen (IARC Group 1)" },
 { label: "Governing standards", value: "NFPA 664, consolidated into NFPA 660" },
 { label: "Primary controls", value: "Vacuum housekeeping for the fugitive fraction; HEPA-retained exhaust" },
 ],
 overview: [
 "Every woodworking machine sheds two streams: the chips and dust the connected collection system captures, and the fugitive fine fraction that escapes the hood — off the sander's edge, out the router enclosure, past the saw guard. The collection system serves the machine; the fugitive fraction serves nobody, settling on beams, ducts, motor housings and lights until it becomes the fuel layer NFPA 664's housekeeping requirements exist to prevent.",
 "Wood dust adds a health dimension most combustible dusts don't carry: it is classified as a human carcinogen (IARC Group 1), which makes capture-at-source with HEPA-retained exhaust an exposure control as much as a fire-safety one. Sweeping and blowdown — the traditional shop reflexes — fail both tests at once, resuspending the finest fraction at breathing height.",
 ],
 industries: [
 { label: "Woodworking", href: "/#woodworking" },
 { label: "Furniture & Cabinet Shops", href: "/applications#woodworking" },
 { label: "Sawmills", href: "/applications#woodworking" },
 { label: "Paper & Packaging", href: "/industries#paper-packaging" },
 { label: "Biomass & Energy", href: "/industries#energy" },
 ],
 riskHeading: "Explosion & exposure risks",
 risks: [
 "Fine sanding and routing dust deflagrates readily when dispersed — the fugitive fraction is exactly that material",
 "Settled layers on overhead structure and equipment fuel secondary explosions — the mechanism behind historic mill disasters",
 "Engineered panels (MDF, particleboard) produce especially fine, resin-bearing dust — treat as combustible, with added exposure considerations",
 "Wood dust is a recognized human carcinogen — airborne exposure during cleaning is a health event, not just a housekeeping one",
 "Hot work near accumulated wood dust is a classic ignition pairing — clean before cutting or welding nearby",
 ],
 solutions: [
 "Explosion-proof construction with a grounded, bonded conductive path from nozzle to chassis",
 "Tested HEPA final stage (99.99% at 0.3 µm) — the exposure control for a classified carcinogen",
 "Line-side units at sanders and routers, where the fugitive fraction is generated",
 "Extension wand kits so overhead steel gets a routine frequency, not an annual scramble",
 "Central vacuum systems for fixed shops with many cleaning points",
 ],
 configuration: [
 { step: "Collection tool", detail: "Grounded wand or brush tool at the source" },
 { step: "Anti-static hose", detail: "Conductive path, bonded end to end" },
 { step: "EX vacuum unit", detail: "Explosion-proof; grounded and verified" },
 { step: "Multi-stage + HEPA", detail: "Chip load staged; fines retained at 99.99%" },
 { step: "Sealed container", detail: "Contained transfer to disposal" },
 ],
 bestPractices: [
 "Verify grounding and bonding before every use — continuity, not assumption",
 "Vacuum only: retire blowdown and dry sweeping from the shop's repertoire",
 "Put elevated surfaces on a defined frequency with extension wands",
 "Coordinate housekeeping with hot-work permits — clean before cutting or welding nearby",
 "Service filters on condition; dispose of collected dust sealed",
 ],
 faqs: [
 {
 question: "Is wood dust combustible?",
 answer:
 "Yes, and wood dust is one of the classic combustible dusts — fine sanding dust far more so than shavings or chips, because particle size drives the behaviour. NFPA 660 governs, consolidating the former NFPA 664 for wood processing facilities.",
 },
 {
 question: "Is wood dust harmful to breathe?",
 answer:
 "Yes. Wood dust is classified as carcinogenic to humans by IARC, with nasal and nasopharyngeal cancers among the documented outcomes, and it is also a respiratory irritant and sensitiser. Hardwood dust and certain species carry additional concerns. That means a wood shop's dust programme is doing two jobs at once, and retained filtration matters as much as accumulation control.",
 },
 {
 question: "Is wood dust really explosive?",
 answer:
 "Yes — wood dust is a classic combustible organic dust, and mill explosions are among the oldest documented dust disasters. The fine fraction from sanding and routing is the concern; severity is size-specific and confirmed by testing.",
 },
 {
 question: "Doesn't our dust collection system already handle this?",
 answer:
 "The connected collection system serves the machines; the hazard lives in the fugitive fraction that escapes the hoods and settles on structure. That fraction is a housekeeping obligation under NFPA 664 — and it's what vacuum recovery exists for.",
 },
 {
 question: "Is MDF dust worse than solid wood dust?",
 answer:
 "Engineered-panel dust is typically finer, which raises both the combustibility and the exposure stakes, and resin binders add exposure considerations beyond the wood itself. Treat it as combustible and capture it at the source with HEPA-retained exhaust.",
 },
 {
 question: "What standard applies to woodworking facilities?",
 answer:
 "NFPA 664 is the wood processing commodity standard, now carried into the consolidated NFPA 660, with NFPA 652's Dust Hazard Analysis obligation as the baseline. OSHA enforces housekeeping under its Combustible Dust National Emphasis Program.",
 },
 ],
 studySlug: "wood-dust-furniture-manufacturing",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "central-vacuum-systems", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Bakery flour dust case study", href: "/case-studies/flour-dust-commercial-bakery" },
 { label: "Combustible Dust Solutions", href: "/resources/combustible-dust-solutions" },
 { label: "The NFPA Landscape", href: "/resources/nfpa-guide" },
 { label: "Dust Hazard Analysis", href: "/resources/dust-hazard-analysis" },
 ],
};
