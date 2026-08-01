import { AlertTriangle, Filter, Flame, Layers, Recycle, ShieldCheck } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const recyclingGuide: IndustryGuideData = {
 slug: "recycling",
 name: "Recycling & Waste Processing",
 titleAccent: "recycling & waste processing",
 seo: {
 title: "How to Safely Recover Dust in Recycling & Waste Processing?",
 description:
 "Recycling's defining hazard is uncertainty — the stream is whatever came in, so the dust may hold combustible metals, lithium cells prone to thermal runaway, self-charging plastic fines and toxic residues at once. Safe recovery starts from a simple rule: characterize the stream, or handle it as worst-case.",
 },
 heroIntro:
 "The one industry whose defining hazard is not knowing what's in the stream — a recycling feed is whatever arrived, so the dust it sheds can hold combustible metals, lithium cells that can enter thermal runaway, insulating plastic fines that charge themselves, and toxic residues, often all at once. Everything here follows one rule: characterize the stream, or treat it as worst-case.",
 badges: [
 { icon: ShieldCheck, title: "Characterize First", detail: "Or handle as worst-case" },
 { icon: Flame, title: "Lithium-Aware", detail: "Battery recycling & thermal runaway" },
 { icon: Filter, title: "HEPA Filtration", detail: "Toxic and fine fractions retained" },
 { icon: Recycle, title: "Built for Mixed Streams", detail: "Metal, battery, e-waste & plastic" },
 ],
 stagesIntro:
 "A recycling operation transforms unknown, mixed input into sorted output, shedding dust of unpredictable composition at every step. Walk the stages — the hazard is what you can't see in the feed.",
 stages: [
 { label: "Intake & sorting", detail: "Material of unknown composition arrives and is sorted; the first dust is the most uncertain, so recovery here is specified conservatively until the stream is characterized." },
 { label: "Shredding & size reduction", detail: "Shredders liberate the finest, most reactive fraction — and mixed feed means combustible metals, plastics and residues can be suspended together, the classic uncharacterized combustible cloud." },
 { label: "Metal recovery & separation", detail: "Eddy-current and magnetic separation concentrate metal fines; shredded aluminum, magnesium and titanium carry combustible-metal rules regardless of where they came from." },
 { label: "Battery recycling", detail: "The highest-consequence stream — spent batteries can contain live cells prone to thermal runaway, a genuine fire and thermal hazard beyond dust, handled with specialized, thermal-aware procedures." },
 { label: "Electronics & e-waste", detail: "E-waste sheds a mix of toxic (lead, heavy metals), conductive (copper, precious-metal fines) and combustible fractions — recovered HEPA-retained, sealed, and conductive-aware." },
 { label: "Plastics recycling", detail: "Shredding and regrinding polymers generates fine plastic dust that, as an insulator, charges itself — grounded, static-dissipative recovery, exactly as any plastic-dust operation requires." },
 { label: "Residue & fines handling", detail: "The concentrated fines from every line accumulate as the residue stream — often the most hazardous material in the plant precisely because it is the most mixed." },
 { label: "Unknown-stream protocol", detail: "When composition isn't verified, recovery is specified to the most hazardous plausible component — rated, grounded, HEPA-retained and, where lithium is possible, thermal-aware." },
 ],
 challengesHeading: "When the feed is whatever arrived",
 challenges: [
 { icon: AlertTriangle, title: "The Uncharacterized Stream", detail: "You rarely know the full composition of a recycling feed — combustible metal, lithium, plastic and toxics may all be present, which is the central engineering challenge here." },
 { icon: Flame, title: "Lithium Thermal Runaway", detail: "Battery recycling can contain live or damaged cells that ignite and self-sustain — a genuine fire and thermal hazard that goes well beyond dust deflagration." },
 { icon: Layers, title: "Shredded Combustible Metals", detail: "Aluminum, magnesium and titanium fines from shredding carry full combustible-metal rules — grounded, rated, dedicated recovery regardless of the source material." },
 { icon: Filter, title: "Toxic + Conductive E-Waste", detail: "Electronics recycling sheds lead and heavy metals (toxic) alongside copper and precious-metal fines (conductive) — a mix demanding HEPA retention and sealed handling." },
 { icon: Recycle, title: "Self-Charging Plastic Fines", detail: "Regrinding plastics produces insulating dust that builds static — its own ignition source — so grounded, static-dissipative recovery is required as in any polymer operation." },
 { icon: ShieldCheck, title: "Default To Worst-Case", detail: "When the stream isn't characterized, recovery is specified to the most hazardous plausible component — the only defensible posture when the feed is unknown." },
 ],
 materialsHeading: "The mixed streams recycling handles",
 materials: [
 { name: "Shredded metal fines (mixed)", combustible: "Often yes", approach: "Rated recovery to the worst-case metal; test the stream", href: "/materials/aluminum-dust" },
 { name: "Lithium & battery material", combustible: "Reactive + fire risk", approach: "Specialized, thermal-runaway-aware handling", href: "/industries/battery" },
 { name: "Copper & cable recycling", combustible: "Hybrid stream", approach: "Copper tests benign; the insulation fines burn", href: "/materials/copper-dust" },
 { name: "Plastic & polymer fines", combustible: "Yes — and self-charging", approach: "Grounded, static-dissipative recovery", href: "/materials/plastic-dust" },
 { name: "E-waste dust (mixed)", combustible: "Toxic + conductive", approach: "HEPA-retained, sealed, conductive-aware", href: "/materials/lead-dust" },
 { name: "Paper & fiber fines", combustible: "Yes", approach: "Routine combustible-dust recovery on schedule" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in recycling",
 applicationCategorySlug: "recycling",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "coal-dust-power-generation",
};
