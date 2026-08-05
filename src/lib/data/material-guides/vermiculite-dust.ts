import { AlertTriangle, Filter, ScrollText, ShieldCheck } from "lucide-react";

import type { MaterialGuideData } from "@/components/templates/material-guide";

export const vermiculiteDustGuide: MaterialGuideData = {
 slug: "vermiculite-dust",
 name: "Vermiculite",
 groupCrumb: { label: "Other Combustible Dusts", anchor: "misc-dusts" },
 seo: {
 title: "Vermiculite Insulation & Asbestos Risk — Safe",
 description:
 "Vermiculite itself is a non-combustible mineral. The hazard is that much loose-fill vermiculite insulation is contaminated with asbestos. Why you should not disturb it, how it is tested, and where HEPA recovery fits in licensed abatement.",
 },
 heroIntro:
 "The important thing about vermiculite is not what it is, but what may be mixed in with it. Vermiculite is an inert, non-combustible mineral — but a large share of the loose-fill vermiculite insulation installed across North America is contaminated with asbestos, and the correct first response to finding it is to leave it alone.",
 badges: [
 { icon: AlertTriangle, title: "Assume Asbestos", detail: "Do not disturb; have it tested" },
 { icon: ScrollText, title: "Regulated Work", detail: "OSHA asbestos standards 1910.1001 / 1926.1101" },
 { icon: Filter, title: "HEPA Filtration", detail: "Tested 99.99% at 0.3 µm" },
 { icon: ShieldCheck, title: "Licensed Abatement", detail: "Trained contractors, contained work areas" },
 ],
 facts: [
 { label: "What it is", value: "A naturally occurring hydrated silicate mineral that exfoliates into light flakes when heated" },
 { label: "Combustibility", value: "Non-combustible — vermiculite is a mineral and does not burn or deflagrate" },
 { label: "The actual hazard", value: "Asbestos contamination in much loose-fill insulation vermiculite" },
 { label: "Governing standards", value: "OSHA asbestos standards 29 CFR 1910.1001 (general industry) and 1926.1101 (construction)" },
 ],
 overview: [
 "Vermiculite is a mineral, and on its own it is unremarkable: heated, it expands into light, absorbent, non-combustible flakes, which is why it ended up in loose-fill attic insulation, horticultural growing media, packaging and fireproofing. Nothing about that description sounds dangerous, and the mineral itself is not a fire hazard or a combustible dust. This is the one entry in this directory where the material is not the problem.",
 "The problem is provenance. A very large proportion of the vermiculite used in North American loose-fill insulation came from a single mine whose deposit was contaminated with amphibole asbestos, and that contamination travelled with the product into buildings. Regulators including the EPA have accordingly advised treating vermiculite insulation as if it contains asbestos unless testing proves otherwise, and — critically — advised not disturbing it. Asbestos exposure causes asbestosis, lung cancer and mesothelioma, with decades of latency between exposure and disease. Disturbing an undisturbed material to inspect or tidy it is how people get exposed, so the correct sequence is: identify, do not disturb, test, and if removal is required, engage a licensed abatement contractor working under the applicable OSHA asbestos standard.",
 ],
 industries: [
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Construction Materials", href: "/industries/construction-materials" },
 { label: "Mining & Minerals", href: "/industries/mining" },
 { label: "Agriculture & Horticulture", href: "/industries/agriculture" },
 { label: "Recycling", href: "/industries/recycling" },
 ],
 riskHeading: "Why vermiculite is handled as an asbestos question",
 risks: [
 "Presumed contamination: much loose-fill vermiculite insulation carries amphibole asbestos from the deposit it was mined from, and it cannot be ruled out by appearance.",
 "Long-latency disease: asbestos exposure causes asbestosis, lung cancer and mesothelioma, with decades between exposure and diagnosis — there is no immediate signal that a job went wrong.",
 "Disturbance is the exposure event: undisturbed material in a wall or attic cavity is far less hazardous than the same material after someone moved it to look at it.",
 "Fibres are respirable and persistent: asbestos fibres are fine enough to reach deep lung tissue and settle on surfaces to be re-suspended later.",
 "Migration through buildings: fibres carried on clothing, tools and air movement reach occupied areas well away from the work.",
 "Not a fire hazard, which misleads people: because vermiculite is non-combustible, it fails the mental test many facilities use to decide whether a dust deserves care.",
 ],
 solutions: [
 "Do not disturb suspect material. Identification and testing come before any handling decision, and leaving intact material alone is frequently the correct outcome.",
 "Testing by a qualified laboratory to establish whether asbestos is present, rather than judging by appearance or product age.",
 "Licensed abatement contractors for any removal, working under the applicable OSHA asbestos standard with containment, negative pressure and clearance procedures.",
 "HEPA-filtered vacuum recovery as part of that controlled process, tested to 99.99% at 0.3 µm so captured fibres are retained rather than discharged.",
 "Wet methods where the procedure supports them, suppressing fibre release at the point of work.",
 "Sealed collection and disposal as regulated asbestos waste, with the container change treated as a controlled step.",
 ],
 configuration: [
 { step: "Identify before you touch", detail: "Establish whether loose-fill vermiculite is present and treat it as asbestos-containing until testing says otherwise. Do not sample or sweep to find out." },
 { step: "Get it tested properly", detail: "A qualified laboratory determines whether asbestos is present. Sampling itself can release fibres, which is why it belongs with people trained to do it." },
 { step: "Engage licensed abatement for removal", detail: "Removal is regulated work with containment, negative air, decontamination and clearance requirements. Equipment does not substitute for a licensed contractor." },
 { step: "Specify HEPA retention", detail: "Where vacuum recovery forms part of the controlled process, filtration tested to 99.99% at 0.3 µm is the requirement — ask what the filter is tested to." },
 { step: "Plan disposal as regulated waste", detail: "Sealed containment, labelled disposal route, and a controlled procedure for changing filters and containers." },
 ],
 bestPractices: [
 "Treat loose-fill vermiculite insulation as asbestos-containing until a laboratory says otherwise.",
 "Never dry sweep, blow down or use a shop vacuum on suspect material — each converts settled fibres into an inhalable cloud.",
 "Keep people out of the area rather than working around suspect material; occupancy control is a real control.",
 "Use dedicated HEPA equipment inside the containment and never let it circulate into clean parts of the building.",
 "Resist the urge to inspect. Opening a cavity to look at insulation is the most common way an intact hazard becomes an exposure.",
 "Keep records — for asbestos work the documentation is part of the compliance obligation, not an administrative extra.",
 ],
 faqs: [
 {
 question: "Is vermiculite dangerous?",
 answer:
 "Vermiculite itself is an inert, non-combustible mineral and is not inherently dangerous. The danger comes from contamination: a large proportion of the vermiculite used in North American loose-fill insulation came from a deposit contaminated with amphibole asbestos. Regulators including the EPA have advised treating vermiculite insulation as if it contains asbestos unless testing shows otherwise, and advised against disturbing it.",
 },
 {
 question: "Is vermiculite insulation combustible?",
 answer:
 "No. Vermiculite is a mineral, it does not burn, and it presents no dust deflagration hazard — it was used partly for that reason. The hazard is a health hazard from possible asbestos contamination, which is a completely different question and one that non-combustibility gives no protection against.",
 },
 {
 question: "Can I remove vermiculite insulation myself?",
 answer:
 "You should not. Where asbestos may be present, removal is regulated work requiring a licensed abatement contractor operating under the applicable OSHA asbestos standard with containment, negative pressure and clearance procedures. Owning a HEPA vacuum does not make someone qualified to disturb asbestos-containing material, and disturbance is precisely how exposure happens. If the material is intact and undisturbed, leaving it alone is often the correct decision.",
 },
 {
 question: "Where does HEPA vacuum recovery fit in?",
 answer:
 "As one controlled element inside a properly managed abatement process, not as the process itself. HEPA filtration tested to 99.99% at 0.3 µm retains captured fibres rather than discharging them, which is why abatement contractors specify it — alongside containment, wet methods, decontamination and regulated disposal. We supply the equipment; the compliance framework and the licensed contractor are what make the work lawful and safe.",
 },
 ],
 recommended: ["hepa-vacuums", "wet-dry-systems", "custom-engineered-systems", "accessories"],
 related: [
 { label: "Explosion proof vacuums", href: "/products/explosion-proof-vacuums" },
 { label: "Asbestos guide", href: "/materials/asbestos" },
 { label: "Abatement & Remediation", href: "/industries/abatement" },
 { label: "Lead Dust guide", href: "/materials/lead-dust" },
 { label: "HEPA vacuums", href: "/products/hepa-vacuums" },
 ],
};
