import { AlertTriangle, Filter, Gem, Layers, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const glassCeramicsGuide: IndustryGuideData = {
 slug: "glass-ceramics",
 name: "Glass & Ceramics",
 titleAccent: "glass & ceramics",
 seo: {
 title: "How to Safely Recover Dust in Glass & Ceramics",
 description:
 "The industry where the dust rarely burns but reliably harms — glass and ceramics are made of silica and minerals, so the defining hazard is respirable crystalline silica, not deflagration. Batch prep, glazing and finishing of fired ware generate respirable silica, recovered HEPA-retained and exposure-controlled first.",
 },
 heroIntro:
 "The industry whose dust rarely burns but reliably harms — glass and ceramics are made of silica and minerals, so the defining hazard here is respirable crystalline silica, not deflagration. From batch preparation through glazing to the grinding and finishing of fired ware, the priority is HEPA-retained, exposure-controlled recovery, because the danger this dust poses is slow rather than sudden.",
 badges: [
 { icon: ShieldCheck, title: "Health-First", detail: "The dust harms, rarely burns" },
 { icon: Wind, title: "Respirable Silica", detail: "Batch prep to fired finishing" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fine mineral fractions retained" },
 { icon: Gem, title: "Built for Glass & Ceramics", detail: "Batch, glaze & finishing" },
 ],
 stagesIntro:
 "A glass or ceramics operation turns mineral powders into fired product, generating fine mineral and — after firing — respirable silica dust at several distinct steps. Walk the stages where exposure control matters most.",
 stages: [
 { label: "Batch & raw-material prep", detail: "Silica sand, feldspar, soda ash and other minerals are weighed and blended as fine powders — the first respirable dust source, captured at the batch house rather than allowed to drift." },
 { label: "Body prep & milling", detail: "Clay and mineral bodies are milled and blended; the fine fraction is silica-bearing, so recovery here is HEPA-retained and treated as an exposure control from the start." },
 { label: "Forming & casting", detail: "Pressing, casting and shaping generate mineral dust and dried slip residues around the forming lines, recovered on a schedule that keeps surfaces clear." },
 { label: "Glazing", detail: "Glaze powders are sprayed and dipped; some glaze and pigment materials carry heavy-metal components, so glaze-room dust is captured under sealed, HEPA-retained handling." },
 { label: "Drying & firing", detail: "Drying and kiln firing are largely enclosed; housekeeping around them addresses settled mineral dust rather than the process itself, keeping accumulation off surfaces." },
 { label: "Finishing & grinding", detail: "Grinding, cutting and finishing fired ware is the highest respirable-silica step in the plant — fired ceramic dust is respirable crystalline silica, captured at the source with HEPA retention." },
 { label: "Technical & specialty ceramics", detail: "Silicon carbide, alumina and other technical ceramics produce hard, fine dusts; recovery holds the same HEPA discipline for materials built to be abrasive." },
 { label: "Inspection & packaging", detail: "Final handling and packaging shed residual dust; routine recovery keeps inspection surfaces and the breathing zone clean through the last step." },
 ],
 challengesHeading: "A slow hazard, not a sudden one",
 challenges: [
 { icon: Wind, title: "Respirable Crystalline Silica", detail: "Glass and ceramic raw materials are silica-bearing, so respirable crystalline silica — with its 50 µg/m³ exposure limit — is the defining hazard, demanding HEPA-retained, exposure-controlled recovery." },
 { icon: AlertTriangle, title: "Fired-Ceramic Dust", detail: "Grinding and finishing fired ware releases respirable silica — the fired body does not lower the hazard, and this is typically the dustiest step in the plant." },
 { icon: Layers, title: "Batch Dust By Volume", detail: "Batch and body preparation handle mineral powders at scale, so fugitive fine dust accumulates quickly on structures and equipment between cleanings." },
 { icon: ShieldCheck, title: "Glaze & Pigment Materials", detail: "Some glaze and pigment materials carry heavy-metal components — glaze-room dust is captured under sealed, HEPA-retained handling as an exposure control." },
 { icon: Gem, title: "Hard Technical Ceramics", detail: "Silicon carbide, alumina and similar technical ceramics are built to be abrasive — their fine dusts demand HEPA retention and durable recovery." },
 { icon: Filter, title: "Housekeeping Is Exposure Control", detail: "Because the hazard is chronic rather than explosive, disciplined HEPA-retained housekeeping is itself the primary occupational-health control." },
 ],
 materialsHeading: "What glass & ceramics manufacturing generates",
 materials: [
 { name: "Silica sand & batch minerals", combustible: "No — but a severe respirable hazard", approach: "HEPA-retained, exposure-controlled recovery", href: "/materials/silica-dust" },
 { name: "Fired ceramic & finishing dust", combustible: "No — respirable silica", approach: "HEPA capture at the grinding source", href: "/materials/silica-dust" },
 { name: "Feldspar, clay & body minerals", combustible: "No", approach: "HEPA-retained recovery on schedule", href: "/materials/concrete-cement-dust" },
 { name: "Glaze & pigment materials", combustible: "Some heavy-metal / toxic", approach: "Sealed, HEPA-retained handling", href: "/materials/lead-dust" },
 { name: "Technical ceramic dust (SiC, alumina)", combustible: "Generally no", approach: "HEPA recovery for hard abrasive fines" },
 { name: "General batch & mineral dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in glass & ceramics",
 applicationCategorySlug: "cement",
 recommended: ["hepa-vacuums", "industrial-vacuums", "central-vacuum-systems", "explosion-proof-vacuums"],
 studySlug: "silica-sand-foundry",
};
