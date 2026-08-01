import { AlertTriangle, Filter, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const leatherDustGuide: MaterialGuideData = {
 slug: "leather-dust",
 name: "Leather Dust",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
 title: "How to Safely Recover Leather Dust?",
 description:
 "Leather buffing and finishing dust is a combustible organic dust with a chemical twist — chrome-tanned leather, the majority, carries chromium (mainly trivalent Cr(III), with hexavalent Cr(VI) a recognized contaminant concern). HEPA-retained recovery serves both the combustion and the exposure side; tanning method sets the chemistry.",
 },
 heroIntro:
 "A combustible organic dust that carries a chemical passenger. Buffing, sanding and finishing leather generates a fine combustible dust — but most leather is chrome-tanned, so that dust carries chromium, predominantly the trivalent form used in tanning, with hexavalent chromium a recognized contaminant concern. The tanning method sets the chemistry, and HEPA-retained recovery covers both the combustion and the exposure side.",
 badges: [
 { icon: Flame, title: "Combustible Organic", detail: "A fine organic dust" },
 { icon: AlertTriangle, title: "Chrome-Tanned Carries Chromium", detail: "Mainly Cr(III); Cr(VI) a concern" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine fines retained, sealed" },
 { icon: ShieldCheck, title: "Built for Leather Work", detail: "Buffing, sanding, finishing" },
 ],
 facts: [
 { label: "Combustibility", value: "Leather buffing and finishing dust is a combustible organic dust" },
 { label: "The chemical twist", value: "Chrome-tanned leather carries chromium — mainly trivalent Cr(III); hexavalent Cr(VI) is a recognized contaminant concern" },
 { label: "Tanning method matters", value: "Vegetable-tanned leather lacks the chromium; the process sets the dust's chemistry" },
 { label: "Where it arises", value: "Buffing, sanding and finishing in leather goods, footwear and upholstery work" },
 ],
 overview: [
 "Leather dust is a combustible organic dust, and on that basis alone the buffing, sanding and finishing operations that generate it call for grounded, rated, HEPA-retained recovery. What distinguishes leather from other organic dusts is a chemical dimension that depends on how the hide was tanned. The great majority of leather is chrome-tanned, using trivalent chromium — Cr(III) — so the dust from chrome-tanned leather carries chromium. Trivalent chromium is far less hazardous than the hexavalent form, but hexavalent chromium, Cr(VI), is a recognized contaminant concern in finished leather, capable of forming from Cr(III) under certain conditions, and it is regulated as such in some markets.",
 "That makes HEPA retention and sealed handling doubly worthwhile: they serve the combustible-dust housekeeping and keep the chromium-bearing fine fraction out of the breathing zone. Tanning method is the key variable — vegetable-tanned leather does not carry the chromium at all, so knowing which process produced the material sets expectations for the dust's chemistry. Leather dust arises in leather-goods and footwear manufacture, in upholstery and automotive-interior work, and in the finishing steps of tanneries, and it is handled as a combustible organic dust with the chromium consideration layered on where chrome-tanned material is involved.",
 ],
 industries: [
 { label: "Textiles & Fibers", href: "/industries/textile" },
 { label: "Automotive (Interiors)", href: "/industries/automotive" },
 { label: "Woodworking (Furniture)", href: "/industries/woodworking" },
 { label: "Chemical Processing", href: "/industries/chemical" },
 { label: "General Maintenance", href: "/applications/warehouse-housekeeping" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "A combustible organic dust from buffing, sanding and finishing",
 "Chrome-tanned leather dust carrying chromium — mainly Cr(III)",
 "Hexavalent chromium, Cr(VI), a recognized contaminant concern in finished leather",
 "Assuming all leather is the same — tanning method changes the chemistry",
 "Dry sweeping or blow-down resuspending chromium-bearing organic dust",
 ],
 solutions: [
 "Grounded, rated recovery treating leather dust as a combustible organic dust",
 "HEPA retention and sealed handling for the chromium-bearing fine fraction",
 "Identify the tanning method — chrome-tanned versus vegetable-tanned",
 "Capture at buffing, sanding and finishing points of generation",
 "Never dry-sweep or blow down chromium-bearing leather dust",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for buffing, sanding and finishing dust" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the dust", detail: "Rated for combustible organic dust; HEPA for chromium-bearing fines" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — chromium-bearing fines retained, not returned" },
 { step: "Sealed collection & disposal", detail: "Contained; chrome-tanned dust handled with the chromium in mind" },
 ],
 bestPractices: [
 "Treat leather dust as a combustible organic dust first",
 "Where it is chrome-tanned, capture the chromium-bearing fines HEPA-retained and sealed",
 "Establish the tanning method — it determines whether chromium is present",
 "Capture at the buffing and finishing source, not after it settles",
 "Never dry-sweep or blow down chromium-bearing leather dust",
 ],
 faqs: [
 {
 question: "Is leather dust combustible?",
 answer:
 "Yes — the dust from buffing, sanding and finishing leather is a combustible organic dust, so grounded, rated, HEPA-retained recovery is the baseline. Leather's distinguishing feature over other organic dusts is a chemical one that depends on how the hide was tanned.",
 },
 {
 question: "Why does chromium come up with leather?",
 answer:
 "Because most leather is chrome-tanned using trivalent chromium, Cr(III), so the dust carries chromium. Trivalent chromium is far less hazardous than hexavalent, but hexavalent chromium, Cr(VI), is a recognized contaminant concern in finished leather and is regulated in some markets — which is why HEPA retention and sealed handling of the chromium-bearing fines are worthwhile.",
 },
 {
 question: "Does the tanning method change the dust?",
 answer:
 "Substantially. Chrome-tanned leather carries chromium; vegetable-tanned leather does not. Knowing which process produced the material sets expectations for the dust's chemistry, and where chrome-tanned material is involved, the chromium consideration layers on top of the combustible-organic-dust handling.",
 },
 {
 question: "Where does leather dust come from?",
 answer:
 "Leather-goods and footwear manufacture, upholstery and automotive-interior work, and the finishing steps in tanneries — buffing, sanding and finishing operations in particular. Each generates a fine combustible dust captured at the source, with the chromium consideration applied where the leather is chrome-tanned.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Chromium Dust guide", href: "/materials/chromium-dust" },
 { label: "Wood Dust guide", href: "/materials/wood-dust" },
 { label: "Textiles & Fibers deep dive", href: "/industries/textile" },
 { label: "Automotive deep dive", href: "/industries/automotive" },
 ],
};
