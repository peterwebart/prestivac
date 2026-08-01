import { AlertTriangle, Filter, Flame, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const rubberDustGuide: MaterialGuideData = {
 slug: "rubber-dust",
 name: "Rubber Dust",
 groupCrumb: { label: "Plastics & Rubber Dusts", anchor: "plastics-rubber-dusts" },
 seo: {
 title: "How to Safely Recover Rubber Dust?",
 description:
 "Rubber dust is a combustible dust that carries a passenger — carbon black. Because tire and rubber compounds are heavily loaded with carbon black, one of the most readily ignitable dusts, rubber dust from grinding, buffing and crumb-rubber recycling inherits that ignition sensitivity. Grounded, rated, HEPA-retained recovery, tested for the compound.",
 },
 heroIntro:
 "A combustible dust that carries a passenger. Rubber dust from grinding, buffing and recycling is combustible on its own, but tire and rubber compounds are heavily loaded with carbon black — one of the most readily ignitable dusts there is — so rubber dust inherits that ignition sensitivity. Recovery treats it accordingly: grounded, rated and HEPA-retained, matched to the specific compound.",
 badges: [
 { icon: AlertTriangle, title: "Carbon-Black-Loaded", detail: "Inherits its ignition risk" },
 { icon: Flame, title: "A Combustible Dust", detail: "Natural and synthetic alike" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine rubber & filler fines retained" },
 { icon: ShieldCheck, title: "Built for Rubber", detail: "Grinding, buffing & recycling" },
 ],
 facts: [
 { label: "Combustibility", value: "Rubber dust — natural and synthetic — is a combustible dust" },
 { label: "The passenger", value: "Tire and rubber compounds are heavily loaded with carbon black, among the most readily ignitable dusts" },
 { label: "Sources", value: "Grinding, buffing and deflashing rubber, tire retreading, and crumb-rubber recycling" },
 { label: "Standard", value: "A combustible dust under NFPA 660 — testing establishes the specific compound's behavior" },
 ],
 overview: [
 "Rubber dust is combustible in its own right, but its defining feature is what it carries. Rubber and tire compounds are heavily loaded with carbon black as a reinforcing filler — and carbon black is one of the most readily ignitable combustible dusts in industry — so the dust generated from working rubber inherits much of carbon black's ignition sensitivity. That makes rubber dust more hazardous than its familiar, inert-seeming bulk material would suggest. It is produced by grinding, buffing and deflashing molded rubber parts, by tire retreading and buffing, and by crumb-rubber recycling, all of which liberate fine, carbon-black-bearing dust.",
 "Tire buffing and retreading are typically the dustiest operations, throwing off large volumes of fine rubber crumb and dust, while crumb-rubber recycling processes whole tires into fine material that mixes rubber with the carbon black, steel and textile the tire contained. As an organic dust worked at speed, rubber also builds static, so recovery is grounded and static-dissipative as well as rated for a readily-ignitable dust and HEPA-retained for the fine fraction. Because compounds vary — different rubbers, different filler loadings — testing the specific dust governs how severely it behaves, and heavily carbon-black-loaded compounds are treated with the caution that filler warrants.",
 ],
 industries: [
 { label: "Plastics & Rubber", href: "/industries/plastics-rubber" },
 { label: "Automotive", href: "/industries/automotive" },
 { label: "Recycling & Waste", href: "/industries/recycling" },
 { label: "Metalworking & Machining", href: "/industries/metalworking" },
 { label: "General Maintenance", href: "/applications/warehouse-housekeeping" },
 ],
 riskHeading: "Hazards & handling risks",
 risks: [
 "Rubber dust is combustible — the inert-seeming bulk material misleads",
 "Carbon-black loading raises the dust's ignition sensitivity considerably",
 "Tire buffing and retreading throw off large volumes of fine dust",
 "Crumb-rubber recycling mixes rubber with carbon black, steel and textile",
 "Static build-up in fast rubber-working operations as an ignition source",
 ],
 solutions: [
 "Grounded, rated recovery treating the dust as readily ignitable, per its carbon-black loading",
 "HEPA-retained capture of the fine rubber and filler fraction",
 "Static-dissipative equipment for a static-prone organic dust",
 "Explosibility testing on the actual compound — loadings and rubbers vary",
 "Dedicated recovery in high-volume buffing and recycling operations",
 ],
 configuration: [
 { step: "Collection tool", detail: "Floor and crevice tools for rubber crumb, buffing dust and grinding fines" },
 { step: "Static-dissipative hose", detail: "Bonded, conductive path end to end" },
 { step: "Recovery unit matched to the compound", detail: "Rated as readily ignitable per the carbon-black loading" },
 { step: "Tested HEPA final stage", detail: "99.99% at 0.3 µm — the fine fraction stays captured" },
 { step: "Sealed collection & disposal", detail: "Contained; no heat accumulation on collected dust" },
 ],
 bestPractices: [
 "Do not trust the inert-seeming bulk — rubber dust is combustible",
 "Treat carbon-black-loaded rubber dust as readily ignitable, like the filler it carries",
 "Ground and bond for a static-prone organic dust",
 "Test the actual compound — filler loading and rubber type set the behavior",
 "Give tire buffing, retreading and crumb recycling particular attention",
 ],
 faqs: [
 {
 question: "Is rubber flammable?",
 answer:
 "Yes. Rubber burns readily and produces dense, toxic smoke, and rubber dust from grinding, buffing and tyre processing is a combustible dust. Recovered rubber fines also hold heat well, so material left in a collection container after grinding deserves the same attention as the process itself.",
 },
 {
 question: "Is rubber dust really combustible?",
 answer:
 "Yes — rubber dust, natural and synthetic alike, is a combustible dust, and it is more hazardous than the familiar, inert-seeming bulk rubber suggests. The key reason is its loading: tire and rubber compounds carry a great deal of carbon black, one of the most readily ignitable dusts, so the dust inherits much of that ignition sensitivity.",
 },
 {
 question: "Why does carbon black matter so much here?",
 answer:
 "Carbon black is a primary reinforcing filler in tires and many rubber compounds, and it is among the most readily ignitable combustible dusts in industry. Because rubber dust is generated from carbon-black-loaded compound, it carries that character with it — which is why heavily loaded rubber dust is handled with grounded, rated recovery rather than treated as a mild organic dust.",
 },
 {
 question: "Where does rubber dust come from?",
 answer:
 "Grinding, buffing and deflashing molded rubber parts; tire retreading and buffing, which are typically the dustiest operations; and crumb-rubber recycling, which reduces whole tires to fine material and mixes rubber with the carbon black, steel and textile they contain. Each liberates fine, carbon-black-bearing dust.",
 },
 {
 question: "How is rubber dust different from plastic dust?",
 answer:
 "They share the self-charging, combustible character of worked polymers, but rubber's distinguishing feature is its heavy carbon-black loading, which pushes its ignition sensitivity toward that of carbon black itself. So while both are grounded and rated, rubber dust from heavily loaded compound warrants the extra caution that readily-ignitable filler brings.",
 },
 ],
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Combustible dust classification", href: "/hazardous-locations/combustible-dust-classification" },
 { label: "Carbon Black guide", href: "/materials/carbon-black" },
 { label: "Plastic & Polymer Dust guide", href: "/materials/plastic-dust" },
 { label: "Plastics & Rubber deep dive", href: "/industries/plastics-rubber" },
 { label: "Automotive deep dive", href: "/industries/automotive" },
 ],
};
