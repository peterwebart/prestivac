import { AlertTriangle, Filter, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const carbonFiberDustGuide: MaterialGuideData = {
 slug: "carbon-fiber-dust",
 name: "Carbon Fiber Dust",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
 title: "How to Safely Recover Carbon Fiber Dust?",
 description:
 "Carbon fiber machining dust is electrically conductive — it shorts electronics and electrical equipment the way most dusts never would — and it is a fine skin and respiratory irritant. Machining composites releases carbon fiber and resin together. Conductive-aware, HEPA-retained recovery, tested for the composite mix.",
 },
 heroIntro:
 "The dust that shorts what other dusts leave alone — carbon fiber machining dust is electrically conductive, so it finds its way into electronics and electrical panels and causes shorts that ordinary dusts never would. It is also a fine skin and respiratory irritant, and because it comes from composites, it arrives mixed with resin dust. Recovery is conductive-aware and HEPA-retained, matched to the composite it comes from.",
 badges: [
 { icon: Zap, title: "Electrically Conductive", detail: "Shorts electronics & equipment" },
 { icon: Filter, title: "HEPA & Irritant Control", detail: "Fine fibers retained, sealed" },
 { icon: AlertTriangle, title: "Fiber & Resin", detail: "A composite dust, not one material" },
 { icon: ShieldCheck, title: "Built for Composites", detail: "Aerospace, automotive & more" },
 ],
 facts: [
 { label: "The standout hazard", value: "Carbon fiber dust is electrically conductive and can short electronics and electrical equipment" },
 { label: "Health", value: "Fine carbon fiber is a skin and respiratory irritant" },
 { label: "It is a composite", value: "Machining carbon-fiber-reinforced plastic releases conductive fiber and resin dust together" },
 { label: "Standard", value: "Handled as a conductive combustible dust; testing establishes the composite mix's behavior" },
 ],
 overview: [
 "Carbon fiber is defined, for dust purposes, by a property most dusts do not share: it conducts electricity. Machining, cutting, grinding and drilling carbon-fiber-reinforced plastic — in aerospace structures, automotive parts, wind-turbine blades, sporting goods and more — produces a fine dust that is electrically conductive, and that dust migrates into electrical enclosures, control panels and electronics, where it causes shorts and failures the way an inert mineral dust never would. Managing carbon fiber dust is therefore as much about protecting equipment as protecting people, and conductive-aware recovery — keeping the dust out of electricals in the first place — is central to the program.",
 "The health and combustion picture rounds it out. Fine carbon fiber is a skin and respiratory irritant, so capture and HEPA retention keep it out of the breathing zone and off the skin. And because carbon fiber almost always arrives as part of a composite, the dust is really two materials at once — conductive fiber plus the resin matrix, which is a combustible plastic dust in its own right with its own static behavior. That composite reality means testing governs the mix's actual behavior, and recovery is grounded, HEPA-retained and, where equipment protection or contamination control demands it, dedicated to the material.",
 ],
 industries: [
 { label: "Aerospace", href: "/industries/aerospace" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Additive Manufacturing", href: "/applications/metal-3d-printing" },
 { label: "Electronics", href: "/industries/electronics" },
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Conductive dust migrating into electronics and electrical panels, causing shorts",
 "Fine carbon fiber acting as a skin and respiratory irritant",
 "The resin matrix adding a combustible plastic dust with its own static behavior",
 "Blow-down spreading conductive dust straight into electrical equipment",
 "Underestimating the composite mix's combustibility — testing governs",
 ],
 solutions: [
 "Conductive-aware recovery that keeps the dust out of electricals in the first place",
 "HEPA-retained, sealed capture for the irritant fine fraction",
 "Grounded, bonded equipment appropriate to a conductive dust",
 "Explosibility testing on the actual composite mix, fiber and resin together",
 "Dedicated recovery where equipment protection or contamination control demands it",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for composite machining, cutting and drilling dust" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the mix", detail: "Conductive-aware, rated per the composite's tested behavior" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the irritant fine fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained; kept away from electrical enclosures" },
 ],
 bestPractices: [
 "Treat carbon fiber dust as conductive first — keep it out of electronics and panels",
 "Capture with HEPA and handle sealed — it is a skin and respiratory irritant",
 "Remember it is a composite — the resin is a combustible plastic dust too",
 "Bond and ground for a conductive dust; test the actual mix",
 "Never blow down — it drives conductive dust into electrical equipment",
 ],
 faqs: [
 {
 question: "Why is carbon fiber dust a problem for equipment?",
 answer:
 "Because it is electrically conductive. Unlike an inert mineral dust, carbon fiber dust that settles into control panels, electrical enclosures and electronics can bridge connections and cause shorts and failures. That makes conductive-aware recovery — capturing the dust before it reaches electricals — as much an equipment-protection measure as a health one.",
 },
 {
 question: "Is carbon fiber dust a health hazard?",
 answer:
 "Fine carbon fiber is a skin and respiratory irritant, so it is captured with HEPA retention and handled sealed to keep it out of the breathing zone and off the skin. It is generated by machining, cutting, grinding and drilling composite parts, which is exactly where source capture belongs.",
 },
 {
 question: "Is it combustible?",
 answer:
 "Carbon fiber dust is handled as a conductive combustible dust, and — importantly — it almost always comes as part of a composite, so the dust includes the resin matrix, which is a combustible plastic dust in its own right with its own static behavior. Because the mix varies, testing the actual composite dust governs how severely it behaves and how it is specified.",
 },
 {
 question: "Where does carbon fiber dust come from?",
 answer:
 "Machining, cutting, grinding and drilling carbon-fiber-reinforced plastic — in aerospace structures, automotive components, wind-turbine blades, sporting goods and similar composite work. Each of those operations releases the conductive fiber and the resin together, which is why recovery is both conductive-aware and matched to the composite.",
 },
 ],
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
 { label: "Graphite Dust guide", href: "/materials/graphite-dust" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Plastic & Polymer Dust guide", href: "/materials/plastic-dust" },
 { label: "Aerospace deep dive", href: "/industries/aerospace" },
 ],
};
