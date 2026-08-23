import { Filter, FlaskConical, ShieldCheck, Sparkles } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const dyePowderGuide: MaterialGuideData = {
 slug: "dye-powder",
 name: "Dye Powder",
 groupCrumb: { label: "Chemical Dusts", anchor: "chemical-dusts" },
 seo: {
  title: "Dye Powder — Combustible Dust & Sensitiser",
  description:
   "Powdered dyes are fine combustible organic dusts and recognised respiratory sensitisers, so airborne dispersal is an occupational health event as well as a fire risk.",
 },
 heroIntro:
  "Built for dye weighing and dissolving rooms, where a fine organic powder is handled in small quantities many times a shift. Powdered dyes are combustible, they stain at trace levels, and several classes are recognised respiratory sensitisers — which changes what an airborne release costs.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Design", detail: "Grounded, bonded, conductive recovery path" },
 { icon: Sparkles, title: "Stains at Trace Levels", detail: "Cross-contamination is immediately visible" },
 { icon: Filter, title: "HEPA Filtration", detail: "Retains a recognised respiratory sensitiser" },
 { icon: FlaskConical, title: "Sensitiser Risk", detail: "Reactive dyes are documented occupational sensitisers" },
 ],
 facts: [
 { label: "Material type", value: "Combustible organic dust, Class II Group G (non-conductive)" },
 { label: "Where it is generated", value: "Weighing, dissolving, blending, tote dumping, milling and packing" },
 { label: "Distinguishing property", value: "Several dye classes are recognised respiratory sensitisers — repeated low-level exposure is the concern, not just acute events" },
 { label: "Governing standards", value: "NFPA 660, alongside occupational exposure and sensitiser controls" },
 ],
 overview: [
 "Powdered dyes are handled in textile, paper, leather, ink and plastics operations, generally by weighing out relatively small quantities and dissolving or dispersing them. The weighing step is where most of the airborne release happens: fine powder, handled in the open, many times a shift.",
 "Reactive dyes in particular are recognised respiratory sensitisers, and sensitisation is a different kind of risk from acute toxicity. It develops through repeated low-level exposure, and once a worker is sensitised, subsequent exposures at levels that affect nobody else can produce a serious reaction. That makes routine airborne load the thing to control, which in turn makes the cleaning method consequential: a vacuum that exhausts the fine fraction back into the weighing room raises exactly the exposure that sensitisation depends on.",
 ],
 industries: [
 { label: "Textile", href: "/industries/textile" },
 { label: "Paper & Packaging", href: "/industries/paper-packaging" },
 { label: "Printing", href: "/industries/printing" },
 { label: "Chemical", href: "/industries/chemical" },
 { label: "Plastics & Rubber", href: "/industries/plastics-rubber" },
 ],
 riskHeading: "What makes dye powder worth controlling",
 risks: [
 "Combustible organic dust: fine dye powder suspends readily and carries deflagration conditions inside enclosures.",
 "Respiratory sensitisation: several dye classes are recognised sensitisers, where repeated low-level exposure is the mechanism.",
 "Weighing-room releases: small quantities handled in the open, repeatedly, dominate the airborne load.",
 "Trace-level staining: cross-contamination is visible at very low levels, so redistribution is a quality failure as well as a health one.",
 "Overhead accumulation: fine powder settles on high steel and ledges well beyond the weighing area.",
 "Static in dry handling: dry powder through transfer and dispensing accumulates charge, so a bonded conductive path matters.",
 ],
 solutions: [
 "Source capture at the weighing station, which dominates airborne load in most dye operations.",
 "Retained filtration specified against sensitisation, where repeated low-level exposure is the mechanism.",
 "Explosion-proof construction where classification requires it in weighing and dissolving areas.",
 "Dedicated units or accessory sets per colour family, since staining is visible at trace levels.",
 "Grounded, bonded conductive path through dispensing and transfer.",
 "Overhead recovery on ledges and high steel beyond the weighing room.",
 ],
 configuration: [
 { step: "Fix the weighing station first", detail: "Small quantities of very fine powder handled in the open, many times a shift, dominate exposure." },
 { step: "Treat sensitisation as the driver", detail: "Once a worker is sensitised, exposures tolerated by everyone else can produce a serious reaction." },
 { step: "Confirm the classification", detail: "Your engineer assigns the classification for weighing and dissolving areas." },
 { step: "Segregate by colour family", detail: "Trace staining makes carryover immediately visible and commercially costly." },
 { step: "Extend beyond the weighing room", detail: "Fine powder settles on ledges and high steel well outside the area it was handled in." },
 ],
 bestPractices: [
 "Control routine airborne load in the weighing room above all else.",
 "Keep dedicated tooling per colour family.",
 "Never blow down — it disperses a sensitiser and stains adjacent product.",
 "Include ledges and high steel in the schedule.",
 "Verify grounding continuity through dispensing.",
 "Empty into sealed disposal away from open product.",
 ],
 faqs: [
 {
  question: "Is dye powder combustible?",
  answer:
   "Yes. Powdered organic dyes are fine combustible dusts sitting in Class II Group G. Severity varies by dye chemistry and particle size and is established by testing the specific material.",
 },
 {
  question: "What does respiratory sensitisation mean in practice?",
  answer:
   "It develops through repeated low-level exposure rather than a single acute event, and once a worker is sensitised, later exposures at levels tolerated by everyone else can produce a serious reaction. That makes routine airborne load — not just spills — the thing to control.",
 },
 {
  question: "Does the vacuum's filtration really matter here?",
  answer:
   "Yes, more than usual. A unit that passes the fine fraction exhausts sensitising dust back into the room, raising the routine exposure that sensitisation depends on. Retained absolute filtration is the point of using a vacuum at all in this application.",
 },
 {
  question: "How do we control colour carryover?",
  answer:
   "Dedicated equipment or accessory sets per colour family and a documented cleaning pass between products. Dye staining is visible at trace levels, so segregation policies here are usually stricter than the safety case alone would set.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "pneumatic-vacuums", "industrial-vacuums"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Pigment Dust guide", href: "/materials/pigment-dust" },
 { label: "Textile Fibers guide", href: "/materials/textile-fibers" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 { label: "Textile deep dive", href: "/industries/textile" },
 ],
};
