import { AlertTriangle, Filter, Flame, HardHat, Layers, ScrollText, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const foundryGuide: IndustryGuideData = {
 slug: "foundry",
 name: "Foundries & Casting",
 titleAccent: "foundries & casting",
 seo: {
 title: "Foundry & Casting Vacuum Solutions",
 description:
 "Explosion-safe and HEPA vacuum programs for foundries — silica sand from mulling to shakeout to reclaim, reactive aluminum and magnesium casting fines, leaded-alloy exposure streams, cupola coke, and the cooled-material rule everywhere.",
 },
 heroIntro:
 "The industry that runs the oldest dust hazard and the hottest floor at once — silica sand cycling from mold to shakeout to reclaim, reactive metal fines where aluminum and magnesium pour, heavy-metal exposure streams in the alloy shops, and a cooled-material rule that earns its keep every shift.",
 badges: [
 { icon: ShieldCheck, title: "Explosion-Safe Options", detail: "Rated units for reactive-metal shops" },
 { icon: Filter, title: "HEPA Filtration", detail: "Silica and heavy-metal retention" },
 { icon: Flame, title: "Hot-Floor Discipline", detail: "Cooled, verified material only" },
 { icon: HardHat, title: "Built for Foundries", detail: "Sand system to fettling room" },
 ],
 stagesIntro:
 "Sand and metal trade places all day in a foundry — and each hand-off sheds its own dust. Walk the stages from mulling to furnace maintenance to see where the program earns its keep.",
 stages: [
 { label: "Sand system & mulling", detail: "Silica sand, binders and returns mix continuously — mullers and transfer points shed quartz fines onto everything nearby, and the recovery rotation starts here." },
 { label: "Mold & core making", detail: "Pattern lines and core machines shed sand and binder dust at every cycle — bench and floor recovery on the shift schedule keeps it from migrating." },
 { label: "Melting & pouring", detail: "The hot heart of the plant — recovery here waits for the cooled window, works around the pour schedule, and never accepts material that hasn't been verified cool." },
 { label: "Shakeout", detail: "Castings freed from molds is the plant's defining dust event — burned sand and quartz fines at their peak. Shakeout surrounds run the tightest rotation in the building." },
 { label: "Sand reclamation", detail: "Every reuse cycle mills the sand finer — reclaim systems concentrate the respirable fraction by design, and their surrounds are scheduled accordingly." },
 { label: "Fettling & grinding", detail: "Grinding rooms mix metal fines with burned-on sand — HEPA-retained recovery handles the silica side while alloy identity decides the combustibility side." },
 { label: "Shot blast & finishing", detail: "Blast media, stripped sand and metal fines collect in and around cabinets — vacuum-supported media handling keeps the finishing bay off the exposure map." },
 { label: "Furnace & refractory maintenance", detail: "Relines and ladle work shed refractory dust that can carry silica, and cupola shops handle coke besides — sealed HEPA recovery on the maintenance cadence." },
 ],
 challengesHeading: "The oldest dust hazard on the hottest floor",
 challenges: [
 { icon: ScrollText, title: "The Silicosis Record", detail: "Foundry work is the historic silica industry — the disease record here predates the standards that now govern it." },
 { icon: Wind, title: "Shakeout Concentration", detail: "Freeing castings from molds is the exposure peak of the plant — burned sand and quartz fines at their finest and most airborne." },
 { icon: Layers, title: "Reclaimed Sand Gets Finer", detail: "Every reuse cycle mills the sand — reclamation concentrates the respirable fraction as a feature of the process." },
 { icon: Flame, title: "Everything Is Hot", detail: "Pour floors, castings, slag and spills — the cooled-material verification rule does real work every single shift." },
 { icon: AlertTriangle, title: "Reactive Metal Fines", detail: "Aluminum and magnesium casting shops carry combustible-metal rules on top of the silica program — two hazard systems, one floor." },
 { icon: Filter, title: "Heavy-Metal Exposure", detail: "Leaded brass and bronze, chromium and cadmium streams make sealed HEPA handling an exposure obligation, not a preference." },
 ],
 materialsHeading: "Sand, metal and everything between",
 materials: [
 { name: "Silica sand & reclaimed fines", combustible: "No — inert; the exposure story", approach: "HEPA-retained recovery on shakeout and reclaim rotations", href: "/materials/silica-dust" },
 { name: "Aluminum casting fines", combustible: "Yes — reactive metal", approach: "Explosion-proof recovery under the combustible-metal rules", href: "/materials/aluminum-dust" },
 { name: "Magnesium fines", combustible: "Yes — water-reactive", approach: "Rated recovery; never airtight storage; dedicated procedures", href: "/materials/magnesium-dust" },
 { name: "Brass & bronze grinding dust", combustible: "Generally low", approach: "Sealed HEPA handling — leaded alloys carry exposure duty", href: "/materials/lead-dust" },
 { name: "Cupola coke", combustible: "Yes", approach: "Cooled-material recovery; exposure controls near the charge", href: "/materials/coke-dust" },
 { name: "Refractory & furnace dust", combustible: "No", approach: "HEPA recovery on the maintenance cadence — can carry silica" },
 ],
 materialsDirectory: { label: "mining & mineral dusts", href: "/materials#mining-dusts" },
 applicationsHeading: "Applications in foundries",
 studySlug: "silica-sand-foundry",
 applicationCategorySlug: "metalworking-machining",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "pneumatic-vacuums"],
};
