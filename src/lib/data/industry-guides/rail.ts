import { AlertTriangle, Filter, Layers, ShieldCheck, Wind, Wrench } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const railGuide: IndustryGuideData = {
 slug: "rail",
 name: "Rail & Transit",
 titleAccent: "rail & transit",
 seo: {
 title: "How to Safely Recover Dust in Rail Manufacturing & Maintenance?",
 description:
 "Rail is a maintenance-heavy industry where the dust comes from friction and from the past — brake and wheel/rail wear produce continuous metal dust, traction sand adds respirable silica, and refurbishing decades-old rolling stock liberates legacy lead-based coating dust. A mix of metal, toxic and respirable fractions, recovered HEPA-retained.",
 },
 heroIntro:
 "A maintenance-heavy industry where the dust comes from two places — friction and the past. Brake and wheel/rail wear generate a continuous metal-dust stream distinctive to rail, traction sand adds respirable silica, and refurbishing decades-old rolling stock liberates legacy lead-based coatings. The result is a mix of metal, toxic and respirable fractions that recovery has to handle together.",
 badges: [
 { icon: ShieldCheck, title: "Friction & Legacy Aware", detail: "Wear dust and old coatings" },
 { icon: Wind, title: "Brake & Grinding Dust", detail: "Continuous metal wear" },
 { icon: Filter, title: "HEPA Filtration", detail: "Metal & fine fractions retained" },
 { icon: Wrench, title: "Built for Rail Shops", detail: "Wheel shops to refurbishment" },
 ],
 stagesIntro:
 "Rail work spans building rolling stock and maintaining it for decades, with dust arising from machining, friction wear, and the refurbishment of old equipment. Walk the stages where recovery matters.",
 stages: [
 { label: "Wheel & axle machining", detail: "Turning and machining wheels and axles produces steel fines — combustible as a fine fraction and captured at the wheel shop with rated recovery." },
 { label: "Brake-system service", detail: "Servicing brakes releases brake wear dust — a metal-bearing friction dust captured under HEPA-retained recovery to keep it out of the breathing zone." },
 { label: "Wheel & rail grinding", detail: "Grinding wheels and rail profiles generates continuous metal grinding dust, one of the signature friction-born streams of rail maintenance." },
 { label: "Traction-sand handling", detail: "Locomotive traction sand is silica-bearing; handling, loading and spillage add a respirable-silica hazard managed with HEPA-retained, exposure-aware recovery." },
 { label: "Fabrication & welding", detail: "Building and repairing car bodies and structures generates welding fume and metal fines, recovered across fabrication bays on a schedule that keeps surfaces clear." },
 { label: "Refurbishment & coating removal", detail: "Stripping decades-old rolling stock liberates legacy lead-based coating dust — captured under sealed, HEPA-retained handling as a toxic-exposure control." },
 { label: "Composite car-body work", detail: "Modern rail vehicles use composites; fabrication and repair shed fine, irritating composite dust handled with HEPA capture." },
 { label: "Housekeeping", detail: "Rail is maintenance-intensive, so recovery is deployed across shops, pits and refurbishment bays, keeping metal, toxic and respirable fractions from accumulating." },
 ],
 challengesHeading: "Friction dust and dust from the past",
 challenges: [
 { icon: Wind, title: "Brake & Wear Dust", detail: "Brake and wheel/rail wear generate continuous metal dust — a friction-born stream distinctive to rail maintenance, captured HEPA-retained." },
 { icon: AlertTriangle, title: "Legacy Coatings", detail: "Refurbishing decades-old rolling stock liberates legacy lead-based coating dust, demanding sealed, HEPA-retained handling." },
 { icon: Layers, title: "Traction Sand Is Silica", detail: "Locomotive traction sand is silica-bearing, so handling and spillage add a respirable-silica hazard alongside the metal dust." },
 { icon: Wrench, title: "Wheel-Shop Grinding", detail: "Wheel and axle machining and grinding produce metal fines that are combustible as a fine fraction — grounded, rated recovery." },
 { icon: ShieldCheck, title: "Metal + Toxic + Respirable", detail: "Rail dust mixes metal wear, legacy lead and silica, so recovery is specified to handle the whole mix rather than one component." },
 { icon: Filter, title: "Maintenance-Heavy", detail: "Rail is maintenance-intensive, so recovery is deployed across shops, pits and refurbishment bays throughout the operation." },
 ],
 materialsHeading: "What rail work generates",
 materials: [
 { name: "Brake & wheel wear dust", combustible: "Metal — varies", approach: "HEPA-retained recovery of friction dust" },
 { name: "Legacy coating dust (lead)", combustible: "Toxic", approach: "HEPA-retained, sealed handling", href: "/materials/lead-dust" },
 { name: "Traction sand (silica)", combustible: "No — respirable hazard", approach: "HEPA, exposure-aware recovery", href: "/materials/silica-dust" },
 { name: "Steel grinding & machining fines", combustible: "Combustible as fine dust", approach: "Rated recovery where the fraction is fine" },
 { name: "Composite car-body dust", combustible: "Irritant", approach: "HEPA capture at the fabrication source" },
 { name: "General shop dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in rail & transit",
 applicationCategorySlug: "general-maintenance",
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 studySlug: "aluminum-dust-automotive-machining",
};
