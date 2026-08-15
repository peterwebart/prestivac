import { Filter, ScrollText, ShieldCheck, Wheat } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const pepperDustGuide: MaterialGuideData = {
 slug: "pepper-dust",
 name: "Pepper Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
  title: "Pepper Dust — Combustible Dust & Irritant",
  description:
   "Ground pepper is a combustible organic dust and a potent respiratory irritant, so dispersal during cleaning is an immediate exposure problem as well as a fire one.",
 },
 heroIntro:
  "Built for grinding and blending operations where the airborne fraction makes itself known immediately. Ground pepper is a combustible organic dust and a strong respiratory irritant, so any cleaning method that lifts it into the air causes an exposure event the moment it is used.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Wheat, title: "Group G Organic Dust", detail: "Non-conductive combustible food powder" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains a potent respiratory irritant" },
 { icon: ScrollText, title: "Food-Sector Standards", detail: "NFPA 61 legacy carried into NFPA 660" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Grinding, milling, sifting, blending, filling and packing" },
 { label: "Distinguishing property", value: "Potent respiratory and mucous-membrane irritant — airborne dispersal is an immediate exposure event" },
 { label: "Governing standards", value: "NFPA 660, consolidating the former NFPA 61" },
 ],
 overview: [
 "Peppercorns are milled to powders across a range of grades, and each reduction step produces a finer airborne fraction. Grinding, sifting, blending and filling all liberate dust, and the fines travel readily on general air movement.",
 "Pepper's piperine content makes the airborne fraction a potent irritant to the respiratory tract and mucous membranes. That has a practical consequence for housekeeping that most food dusts do not share: the wrong cleaning method produces an immediate, unmistakable exposure event rather than a slow accumulation of risk. Retained filtration is therefore not a refinement — a unit that exhausts the fine fraction back into the room makes the working environment worse while appearing to clean it.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Pharmaceutical", href: "/industries/pharmaceutical" },
 { label: "Agriculture & Grain", href: "/industries/agriculture" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Cosmetics", href: "/industries/cosmetics" },
 ],
 riskHeading: "What makes pepper dust worth controlling",
 risks: [
 "Combustible organic dust: fine milled powder that suspends readily and carries deflagration conditions inside enclosures.",
 "Potent respiratory irritant: airborne pepper dust causes immediate irritation of the airways and mucous membranes.",
 "Cleaning-induced exposure: sweeping and blowdown convert a settled deposit directly into an exposure event.",
 "Mill concentration: grinding produces the finest fraction alongside mechanical ignition sources.",
 "Overhead accumulation: light fines settle on beams, duct tops and equipment housings above head height.",
 "Cross-contact control: strong aromatics carry into adjacent products, so redistribution is a quality failure too.",
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
  question: "Is pepper dust combustible?",
  answer:
   "Yes. Ground pepper is a fine organic dust and behaves as a combustible dust when dispersed, sitting in Class II Group G. Severity for your grade is established by testing the material as your process produces it.",
 },
 {
  question: "Why does the filtration grade matter so much here?",
  answer:
   "Because pepper dust is a potent respiratory irritant. A vacuum that passes the fine fraction and exhausts it back into the room produces an immediate exposure event — it makes the working environment worse while appearing to clean. Retained absolute filtration is what prevents that.",
 },
 {
  question: "Can we sweep pepper dust?",
  answer:
   "Sweeping lofts the fines, which with this material causes immediate airway and mucous-membrane irritation as well as dispersing combustible fuel. Vacuum recovery that retains what it collects removes the material rather than putting it into the air people are breathing.",
 },
 {
  question: "Where does the dust that matters accumulate?",
  answer:
   "Above head height — beams, duct tops and the outside of mill and sifter housings. That is the inventory a primary event would loft, and it is the part of the building least likely to be on the cleaning schedule.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Spice Dust guide", href: "/materials/spice-dust" },
 { label: "Paprika Dust guide", href: "/materials/paprika-dust" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
