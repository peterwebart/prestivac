import { AlertTriangle, Filter, ShieldCheck, Sparkles, Stethoscope, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const medicalDevicesGuide: IndustryGuideData = {
 slug: "medical-devices",
 name: "Medical Device Manufacturing",
 titleAccent: "medical device manufacturing",
 seo: {
 title: "How to Safely Recover Dust in Medical Device Manufacturing?",
 description:
 "Medical device manufacturing puts two disciplines in one room — machining implant-grade reactive metals like titanium and cobalt-chromium generates combustible metal fines, while the parts must stay contamination-free for biocompatibility. Recovery has to be combustible-metal-rated and cleanroom-clean at once.",
 },
 heroIntro:
 "The floor where a combustible-metal machine shop and a cleanroom occupy the same room — implant-grade titanium, cobalt-chromium and nitinol are machined into devices that must then stay contamination-free for biocompatibility, so recovery has to satisfy two normally-separate disciplines at once: rated for reactive-metal fines, and clean enough for a controlled environment.",
 badges: [
 { icon: ShieldCheck, title: "Two Disciplines, One Tool", detail: "Metal-rated and cleanroom-clean" },
 { icon: AlertTriangle, title: "Reactive-Metal Aware", detail: "Titanium, cobalt-chrome & nitinol" },
 { icon: Sparkles, title: "Contamination Control", detail: "Biocompatibility is the spec" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine and toxic fractions retained" },
 ],
 stagesIntro:
 "Device manufacturing runs from raw implant-grade stock to sterile, packaged product — combining precision machining with contamination control. Walk the stages where the two disciplines meet.",
 stages: [
 { label: "Implant-metal machining", detail: "Titanium, cobalt-chromium and nitinol are machined into implants and instruments, shedding fine reactive-metal chips and dust that carry combustible-metal rules from the first cut." },
 { label: "Grinding & finishing", detail: "Precision grinding of metal components produces the finest, most ignitable fraction — captured at the source with grounded, rated recovery, never allowed to accumulate." },
 { label: "Polymer component machining", detail: "PEEK, UHMWPE and other medical polymers are machined into device parts; their fines are combustible plastic dust with the static behavior any polymer carries." },
 { label: "Cleanroom assembly", detail: "Devices are assembled under controlled-environment conditions where the particle count is a product requirement — recovery equipment is validated as part of the cleanliness system." },
 { label: "Cobalt-chrome & toxic fractions", detail: "Cobalt-bearing alloys add an exposure dimension — cobalt fines are a health concern, so recovery is HEPA-retained and sealed, not merely swept up." },
 { label: "Passivation & surface treatment", detail: "Chemical surface treatments run their own residues; housekeeping supports contamination control and keeps the finished surfaces to biocompatibility standards." },
 { label: "Sterile packaging areas", detail: "Final packaging under cleanroom conditions demands recovery that exhausts cleaner than the room and sheds nothing — the equipment cannot become the contaminant." },
 { label: "Validation & documentation", detail: "Cleanliness and, where relevant, exposure outcomes are documented against the device quality system — housekeeping is an auditable deliverable, not an assumption." },
 ],
 challengesHeading: "A machine shop inside a cleanroom",
 challenges: [
 { icon: AlertTriangle, title: "Reactive-Metal Fines", detail: "Machining titanium, cobalt-chromium and nitinol generates combustible metal dust — the reactive-metal rules apply on a floor most people picture as pristine." },
 { icon: Sparkles, title: "Biocompatibility Is Contamination", detail: "Device surfaces must stay contamination-free for biocompatibility, so housekeeping is a quality-and-safety control, not a cosmetic one." },
 { icon: ShieldCheck, title: "Two Rules At Once", detail: "Recovery must be combustible-metal-rated and cleanroom-clean simultaneously — a combination few generic vacuums satisfy." },
 { icon: Stethoscope, title: "Cobalt Exposure", detail: "Cobalt-chromium alloys add a health dimension — cobalt fines carry occupational-exposure concern, demanding HEPA retention and sealed handling." },
 { icon: Wind, title: "Polymer Dust Too", detail: "PEEK, UHMWPE and other machined medical polymers shed combustible plastic dust with static behavior, alongside the metal fines." },
 { icon: Filter, title: "Validated Cleanliness", detail: "Cleanliness is documented against the device quality system, so recovery equipment must be qualified as part of a validated, auditable process." },
 ],
 materialsHeading: "What device manufacturing generates",
 materials: [
 { name: "Titanium fines", combustible: "Yes — reactive metal", approach: "Grounded, rated recovery; immersion where required", href: "/materials/titanium-dust" },
 { name: "Cobalt-chromium dust", combustible: "Combustible + toxic", approach: "HEPA-retained, sealed; cobalt exposure control", href: "/materials/nickel-dust" },
 { name: "Nitinol & specialty alloys", combustible: "Reactive", approach: "Combustible-metal discipline; test the fines" },
 { name: "Medical polymers (PEEK, UHMWPE)", combustible: "Yes — and self-charging", approach: "Grounded, static-dissipative recovery", href: "/materials/plastic-dust" },
 { name: "Stainless & instrument metals", combustible: "Generally lower", approach: "HEPA recovery; contamination control" },
 { name: "Surface-treatment residues", combustible: "Varies", approach: "Sealed recovery supporting biocompatibility" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in device manufacturing",
 applicationCategorySlug: "medical-devices",
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "beryllium-dust-national-laboratory",
};
