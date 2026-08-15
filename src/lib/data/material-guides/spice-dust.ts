import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const spiceDustGuide: MaterialGuideData = {
 slug: "spice-dust",
 name: "Spice Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Spice Dust — Combustible Dust & Recovery",
  description:
   "Ground spices are fine combustible organic dusts, and several carry volatile oils that add a flammable dimension. Where spice dust accumulates in grinding and blending, and how to control it.",
 },
 heroIntro:
  "Built for grinding and blending rooms, where the finest fraction in the building is produced by design. Ground spice is light, aromatic and readily suspended, and several spices carry volatile oil content that adds a flammable vapour dimension on top of the dust one.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 um" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Grinding, milling, sifting, blending, filling and packing" },
 { label: "Distinguishing property", value: "Volatile oil content in several spices adds a flammable vapour dimension alongside the dust hazard" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Spice processing is a dust-generating operation from end to end. Grinding and milling exist specifically to reduce particle size, sifting separates and liberates fines, blending tumbles material and lifts it, and filling releases it again at every transfer. The finished product specification often calls for a very fine grind, which means the process is optimised to produce exactly the fraction that suspends most readily.",
 "Several spices also carry significant volatile oil content, and that changes the picture. Oleoresin-rich materials can contribute a flammable vapour component in enclosed grinding equipment, so the assessment is not purely a dust one. Oil content also makes deposits adherent rather than loose, so accumulation on warm grinder housings builds rather than shedding. Which spices behave this way, and how strongly, is a property of the specific material and is established by testing it.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes spice dust worth controlling",
 risks: [
 "Combustible organic dust: grinding produces the finest fraction in the building by design, and it suspends at every transfer.",
 "Volatile oil content: oleoresin-rich spices can contribute a flammable vapour component inside enclosed grinding equipment.",
 "Adherent deposits: oil-bearing fines build on warm grinder and mill housings instead of shedding, so layers grow between cleans.",
 "Grinder ignition sources: mills combine the finest fraction with mechanical energy, heat and the possibility of tramp metal.",
 "Overhead accumulation: light aromatic fines travel and settle well away from the grinding room.",
 "Allergen and cross-contact control: spice blends carry allergen and product-integrity requirements, so redistribution is a quality failure too.",
 ],
 solutions: [
 "Explosion-proof vacuum recovery with a conductive, grounded and bonded path from hose tip to container.",
 "Air-operated units where compressed air is available and the classification favours a drive with no electrical components.",
 "HEPA filtration tested to 99.99% at 0.3 um so the respirable fraction is retained rather than returned to the room.",
 "Elimination of compressed-air blowdown, which converts settled fines directly into a suspended cloud.",
 "Defined-frequency recovery on high steel, equipment housings, conveyor runs and packing lines.",
 "One documented cleaning pass serving both the dust programme and sanitation records.",
 ],
 configuration: [
 { step: "Find where the fines are made", detail: "Milling, sifting, blending and transfer produce the finest fraction. Start the programme there rather than where the floor looks worst." },
 { step: "Confirm the classification", detail: "Your electrical or process engineer assigns the classification for handling areas, which determines which equipment is eligible." },
 { step: "Specify the conductive chain", detail: "Anti-static hose and conductive accessories bonded to the unit — the accessory chain is part of the grounding path, not an add-on." },
 { step: "Match filtration to the fraction", detail: "Fine food powders defeat general-purpose filtration. Retained HEPA keeps the respirable fraction out of the room." },
 { step: "Write frequencies into the DHA", detail: "A Dust Hazard Analysis turns the accumulation map into defined intervals and a record that the pass happened." },
 ],
 bestPractices: [
 "Treat equipment enclosures as priority accumulation zones, not occasional deep-clean targets.",
 "Never blow down with compressed air; it creates precisely the suspended cloud the programme exists to prevent.",
 "Include high steel, duct tops and above suspended ceilings in the schedule — that is where secondary-event fuel sits.",
 "Ground and bond the whole recovery chain and inspect anti-static hoses as routine.",
 "Empty collection into sealed disposal away from ignition sources rather than tipping containers in place.",
 "Use the cleaning record for both sanitation and dust-programme documentation.",
 ],
 faqs: [
 {
  question: "Is spice dust combustible?",
  answer:
   "Yes. Ground spice is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Some spices are more energetic than others, and the volatile oil content of certain materials adds a further dimension. Behaviour for your specific product is established by testing it.",
 },
 {
  question: "Does volatile oil content change the equipment requirement?",
  answer:
   "It can. Where an oleoresin-rich material contributes flammable vapour inside enclosed equipment, the assessment is no longer purely a Class II dust question. Your electrical or process engineer assigns the classification for those areas, and the equipment follows from it.",
 },
 {
  question: "Why do deposits build up on grinder housings?",
  answer:
   "Oil content makes the fines adherent. On warm surfaces they stick rather than shedding, so the layer grows steadily and ordinary wiping leaves a residue. That deposit is both a fuel inventory and a cleaning problem that gets worse the longer it is left.",
 },
 {
  question: "Can one vacuum serve several spice lines?",
  answer:
   "Only where cross-contact is acceptable. Spice operations usually have strong product-integrity and allergen requirements, so dedicated units or accessory sets per line are common, and the segregation policy drives the equipment decision.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Cinnamon Dust guide", href: "/materials/cinnamon-dust" },
 { label: "Pepper Dust guide", href: "/materials/pepper-dust" },
 { label: "Paprika Dust guide", href: "/materials/paprika-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
