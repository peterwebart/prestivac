import { Filter, Flame, ShieldCheck, Zap } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const coffeeDustGuide: MaterialGuideData = {
 slug: "coffee-dust",
 name: "Coffee Dust",
 groupCrumb: { label: "Food Dusts", anchor: "food-dusts" },
 seo: {
 title: "How to Safely Recover Coffee Dust?",
 description:
 "Roasteries run two dust streams — chaff freed at the roaster that accumulates in exhaust paths against heat, and fine combustible grounds at grinders and packaging. Scheduled chaff removal, explosion-proof HEPA recovery, and cooled-material discipline.",
 },
 heroIntro:
 "Built for the roastery — where chaff freed at the roaster travels the exhaust path and accumulates against heat, grinders shed fine combustible dust all shift, and enclosed bean storage adds an off-gassing consideration to every entry plan.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Engineered to NFPA 61 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Flame, title: "Roaster-Aware Program", detail: "Chaff & exhaust-path discipline" },
 ],
 facts: [
 { label: "Material type", value: "Roasted organic dust — grinder fines and roasting chaff" },
 { label: "Recognized pattern", value: "Chaff accumulating in roaster exhaust paths is the industry's known fire path" },
 { label: "Storage note", value: "Freshly roasted coffee off-gases in enclosed storage — a confined-space consideration" },
 { label: "Governing standards", value: "NFPA 61 legacy, consolidated into NFPA 660" },
 ],
 overview: [
 "A roastery runs two dust streams with two behaviors. Chaff — the silverskin freed as beans roast — is light, dry and travels with the exhaust, accumulating in ducts, collectors and roaster surrounds: fuel building up directly against the heat path, which is the fire pattern the industry knows best. Grinding makes the second stream — fine, dry, established combustible dust shed continuously at grinders and packaging lines, settling across mezzanines and equipment tops between cleanings.",
 "The program follows both. Roaster surrounds and chaff handling get their own defined frequency, with vacuum recovery supporting duct and collector servicing so accumulation never waits against heat — and with one absolute rule carried over from every hot process: cooled material only, because smoldering chaff never enters a unit. Grinders and packaging run explosion-proof HEPA recovery on the shift schedule. Enclosed bean storage adds a final consideration: freshly roasted coffee off-gases in silos and bins, so entries follow the confined-space program and reach-first cleaning keeps crews outside the vessel.",
 ],
 industries: [
 { label: "Food & Beverage", href: "/industries/food-beverage" },
 { label: "Roasteries", href: "/applications#food-processing" },
 { label: "Silo & Bin Cleaning", href: "/applications/silo-cleaning" },
 { label: "Packaging Lines", href: "/applications#packaging" },
 { label: "Bean Handling & Storage", href: "/industries/agriculture" },
 ],
 riskHeading: "Explosion & fire risks",
 risks: [
 "Chaff accumulates along the roaster exhaust path — fuel building directly against heat",
 "Smoldering chaff in collectors can travel and reignite downstream",
 "Grinder fines are a fine, dry, established combustible dust shed all shift",
 "Packaging mezzanines and equipment tops layer fines between cleanings",
 "Enclosed bean storage off-gases — entry planning carries a confined-space consideration",
 ],
 solutions: [
 "Roaster surrounds and chaff stations on their own defined vacuum frequency",
 "Vacuum recovery supporting duct and collector servicing — never blow-down",
 "Explosion-proof HEPA recovery at grinders and packaging on the shift schedule",
 "Reach-first cleaning for storage vessels — crews stay outside, entries stay exceptions",
 "Sealed, prompt disposal — collected chaff and fines never stand open",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor tools and crevice nozzles for roaster surrounds and grinder bases" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Explosion-proof HEPA unit", detail: "Rated recovery matched to the area classification" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — fines stay captured" },
 { step: "Sealed collection & disposal", detail: "Cooled material only; contained and dispositioned promptly" },
 ],
 bestPractices: [
 "Chaff never stands near the roaster or its exhaust path — the schedule exists for that reason",
 "Cooled material only — smoldering chaff never enters a vacuum, whatever the unit's rating",
 "Grinders and packaging on the shift schedule; mezzanines on the elevated-surface rotation",
 "Storage entries follow the confined-space program — off-gassing is part of the plan",
 "Never sweep or blow down — vacuum capture is the method that doesn't make the cloud",
 ],
 faqs: [
 {
 question: "Is coffee flammable?",
 answer:
 "Roasted coffee is an organic material and it burns. In a roasting plant the combustible dust is the chaff and the fines — light, easily airborne material that collects in ducting and around roasters, which is exactly where ignition sources also live. Roasting operations combine fuel and sustained heat, so accumulation control is the primary defence.",
 },
 {
 question: "Why is chaff the roastery's biggest concern?",
 answer:
 "Because of where it goes: silverskin is light and dry, rides the roaster exhaust, and accumulates in ducts, collectors and surrounds — fuel building directly against the heat path. That geometry is the industry's recognized fire pattern, and a defined chaff-removal frequency is what breaks it.",
 },
 {
 question: "Is ground coffee dust actually explosive?",
 answer:
 "Roasted coffee dust is an established combustible organic dust — the fine, dry fraction from grinding and packaging governs. Your Dust Hazard Analysis sets the frequencies; the fine end of the grind spectrum sets the equipment specification.",
 },
 {
 question: "Can I vacuum warm chaff straight from the roaster area?",
 answer:
 "No — cooled material only, regardless of the unit's rating. Chaff can smolder invisibly, and smoldering material never enters a vacuum. Schedule the roaster surround after cool-down or work a cooled zone; the rule is absolute.",
 },
 {
 question: "What's different about cleaning coffee storage silos?",
 answer:
 "Freshly roasted coffee off-gases in enclosed storage, so vessel entries carry a confined-space consideration on top of the dust program. Reach-first cleaning from manways keeps crews outside for routine work and reserves entry — under the full permit process — for genuine exceptions.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Silo & Bin Cleaning guide", href: "/applications/silo-cleaning" },
 { label: "Sugar Dust guide", href: "/materials/sugar-dust" },
 { label: "Cocoa Dust guide", href: "/materials/cocoa-dust" },
 { label: "Food & Beverage deep dive", href: "/industries/food-beverage" },
 ],
};
