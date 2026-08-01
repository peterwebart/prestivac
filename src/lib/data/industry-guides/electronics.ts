import { AlertTriangle, CircuitBoard, Filter, Layers, ShieldCheck, Wind, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const electronicsGuide: IndustryGuideData = {
 slug: "electronics",
 name: "Semiconductor & Electronics",
 titleAccent: "semiconductor & electronics",
 seo: {
 title: "How to Recover Toxic & Chemical Hazards Found in Electronics?",
 description:
 "Electronics manufacturing hides two hazard classes behind a clean-looking fab: toxic and chemical exposures — arsenic, heavy metals, solder and etch residues — and combustible dusts most people never associate with chips, from silicon to the metal 3D-printed components feeding advanced packaging.",
 },
 heroIntro:
 "The industry whose dust surprises people twice — the pristine fab hides a toxic-and-chemical exposure ledger, and the same 'high-tech, surely inert' assumption hides genuinely combustible dusts, from fine silicon to the reactive-metal powders now feeding advanced packaging.",
 heroImage: {
 src: "/images/library/workers/semiconductor-fab-recovery.jpg",
 alt: "Gowned technician vacuuming a perforated fab floor beside EUV lithography equipment",
 },
 badges: [
 { icon: Filter, title: "HEPA-Tested Filtration", detail: "Toxic and fine fractions retained" },
 { icon: ShieldCheck, title: "Contamination-Aware", detail: "Cleanliness and capture together" },
 { icon: Zap, title: "Static-Safe Practice", detail: "ESD discipline near devices" },
 { icon: CircuitBoard, title: "Built for the Fab", detail: "Wafer line to packaging" },
 ],
 stagesIntro:
 "Chip-making runs from raw silicon to finished package through a chain of processes, each with its own residue. Walk the stages — the hazards are rarely what the clean floor suggests.",
 stages: [
 { label: "Crystal growth & wafer prep", detail: "Slicing and grinding ingots produces fine silicon dust — a combustible particulate the 'high-tech means inert' assumption tends to miss. HEPA-retained recovery with ESD discipline from the very first step." },
 { label: "Doping & ion implantation", detail: "Dopants include arsenic and other toxic species — residues on surfaces and tool interiors are a serious exposure stream, handled under sealed, exposure-first procedures, never generic cleanup." },
 { label: "Deposition & etch", detail: "Thin-film and etch chemistries leave process residues on chamber and tool surfaces; recovery supports the facility's chemical-handling protocols with HEPA retention and sealed disposal." },
 { label: "CMP — chemical mechanical planarization", detail: "Slurry-based polishing generates fine particulate and dried slurry residues; capture keeps it off surfaces and out of the air path in a contamination-sensitive line." },
 { label: "Photolithography support", detail: "Resist-coating and develop areas run their own chemistries; housekeeping here is contamination control first, with the fine, defect-causing particle the enemy." },
 { label: "Advanced packaging & metal AM", detail: "Metal 3D printing now feeds advanced packaging and interconnect work — reactive-metal powders in the fab, carrying the same combustible-metal rules that govern any powder-bed cell." },
 { label: "PCB assembly & soldering", detail: "Board work sheds solder dust and — in legacy or rework streams — lead, plus grinding and depaneling particulate: a mix of toxic and fine fractions on the assembly floor." },
 { label: "Test, finish & cleanroom upkeep", detail: "Final handling and the constant cleanroom housekeeping that surrounds all of it — measured cleanliness, ESD-safe tools, exhaust cleaner than the room it works in." },
 ],
 challengesHeading: "The dust the clean floor hides",
 challenges: [
 { icon: AlertTriangle, title: "Toxic Dopants & Metals", detail: "Arsenic, antimony and heavy-metal residues from doping and deposition are real exposure streams — the client's own framing: toxic and chemical hazards found in electronics." },
 { icon: Wind, title: "Combustible Silicon", detail: "Fine silicon dust from ingot slicing and grinding is combustible — one of the dusts the 'surely it's inert' assumption most reliably misses." },
 { icon: Layers, title: "Metal AM In The Fab", detail: "Advanced packaging brought reactive-metal powder-bed printing onto the electronics floor, with the combustible-metal rules riding along." },
 { icon: Zap, title: "ESD Meets Dust", detail: "Devices demand electrostatic-discharge control, so recovery equipment must be static-safe as well as clean — two disciplines in one tool." },
 { icon: ShieldCheck, title: "Contamination Is Yield", detail: "A fine particle is a killed die — housekeeping here is a yield input, so capture and cleanliness are the same objective." },
 { icon: Filter, title: "Solder & Lead Streams", detail: "Assembly and rework shed solder dust and, in legacy lines, lead — toxic fractions demanding HEPA retention and sealed disposal." },
 ],
 materialsHeading: "Toxic, combustible, or both",
 materials: [
 { name: "Fine silicon dust", combustible: "Yes — the surprise combustible", approach: "HEPA-retained recovery; ESD-safe tools; sealed disposal", href: "/materials/silica-dust" },
 { name: "Dopant & heavy-metal residues", combustible: "No — toxic exposure", approach: "Exposure-first sealed handling; never generic cleanup" },
 { name: "Reactive-metal AM powder", combustible: "Yes — advanced packaging", approach: "Combustible-metal rules; dedicated explosion-proof recovery", href: "/applications/metal-3d-printing" },
 { name: "Solder & lead dust", combustible: "No — toxic", approach: "HEPA recovery; lead-stream sealed disposal", href: "/materials/lead-dust" },
 { name: "CMP slurry residues", combustible: "No", approach: "Fine-particulate capture; contamination control" },
 { name: "Ceramic & substrate dust", combustible: "Generally no", approach: "HEPA recovery on the contamination schedule" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in electronics",
 applicationCategorySlug: "electronics",
 recommended: ["hepa-vacuums", "explosion-proof-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "silicon-dust-semiconductor-fab",
};
