import { AlertTriangle, Atom, Filter, Flame, ShieldCheck, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const hydrogenGuide: IndustryGuideData = {
 slug: "hydrogen",
 name: "Hydrogen & Fuel Cells",
 titleAccent: "hydrogen & fuel cells",
 seo: {
 title: "How to Safely Recover Dust in Hydrogen &",
 description:
 "The energy-transition industry where the product itself is a Class I, Group B flammable gas — and building the equipment to make and use it involves fine catalyst, carbon and metal powders. In flammable-gas areas the conservative default is air-operated, zero-electrical recovery; the manufacturing dusts are captured HEPA-retained.",
 },
 heroIntro:
 "The industry of the energy transition, where the product itself is the headline hazard — hydrogen is a Class I, Group B flammable gas with an exceptionally wide flammability range and very low ignition energy. Building the electrolyzers and fuel cells that make and use it involves fine catalyst, carbon and metal powders. In gas-classified areas the conservative default is air-operated recovery with no electrical parts at all.",
 badges: [
 { icon: ShieldCheck, title: "Flammable-Gas Aware", detail: "Hydrogen is Class I, Group B" },
 { icon: Flame, title: "Widest Flammability Range", detail: "Low ignition energy" },
 { icon: Filter, title: "HEPA Filtration", detail: "Catalyst & carbon fines retained" },
 { icon: Atom, title: "Built for the H₂ Economy", detail: "Production, electrolyzers, fuel cells" },
 ],
 stagesIntro:
 "The hydrogen value chain runs from gas production through the manufacture of electrolyzers and fuel cells, combining flammable-gas areas with fine-powder processes. Walk the stages and the hazard each presents.",
 stages: [
 { label: "Hydrogen production", detail: "Electrolysis and reforming areas handle hydrogen gas — a Class I, Group B flammable atmosphere where the classification, not any dust, sets the equipment requirement." },
 { label: "Electrolyzer manufacture", detail: "Coating electrodes and assembling stacks involves fine catalyst and carbon materials; recovery is HEPA-retained and, in any gas-classified zone, air-operated by default." },
 { label: "Catalyst coating", detail: "Platinum-group catalysts on carbon supports are fine, valuable and sometimes reactive powders — captured under sealed, HEPA-retained handling to protect both the material and the operator." },
 { label: "Fuel-cell (MEA) assembly", detail: "Membrane-electrode-assembly production sheds catalyst and membrane material; contamination control and fine-powder capture run together on the assembly line." },
 { label: "Bipolar-plate machining", detail: "Machining metal and graphite bipolar plates produces conductive fines that carry combustible-metal rules where the metal is reactive — grounded, rated recovery." },
 { label: "Gas-diffusion & carbon materials", detail: "Gas-diffusion layers and carbon components shed conductive carbon and graphite dust, recovered with rated, conductive-aware equipment." },
 { label: "Storage & compression", detail: "Compression, storage and dispensing areas are Group B flammable-gas zones; housekeeping there uses air-operated, zero-electrical recovery as the conservative default." },
 { label: "Housekeeping", detail: "Recovery keeps valuable catalyst fines contained and combustible carbon and metal dust below accumulation thresholds, supporting both economics and the flammable-gas controls." },
 ],
 challengesHeading: "When the product is a Group B gas",
 challenges: [
 { icon: Flame, title: "Class I, Group B", detail: "Hydrogen is a Group B flammable gas with the widest flammability range and very low ignition energy, so gas-area classification is stringent and equipment must suit that specific group." },
 { icon: AlertTriangle, title: "Catalyst Powders", detail: "Platinum-group catalysts on carbon supports are fine, valuable and sometimes reactive — recovered under sealed, HEPA-retained handling, never generic cleanup." },
 { icon: Zap, title: "Carbon & Graphite Dust", detail: "Gas-diffusion layers, electrodes and bipolar plates shed conductive carbon and graphite dust, recovered with rated, conductive-aware equipment." },
 { icon: Atom, title: "Metal Powders", detail: "Bipolar-plate and component machining produce metal fines that carry combustible-metal rules where the metal is reactive — grounded, rated recovery." },
 { icon: ShieldCheck, title: "Air-Operated Default", detail: "In a Group B flammable-gas area, zero-electrical air-operated recovery removes the ignition source entirely — the conservative choice where the atmosphere itself is the hazard." },
 { icon: Filter, title: "Valuable And Hazardous Fines", detail: "Catalyst fines are costly to lose and hazardous to disperse, so HEPA-retained, sealed capture serves the economics and the safety case at once." },
 ],
 materialsHeading: "What hydrogen & fuel-cell manufacturing handles",
 materials: [
 { name: "Platinum-group catalyst powder", combustible: "Fine & valuable; some reactive", approach: "HEPA-retained, sealed recovery; never generic cleanup" },
 { name: "Carbon & graphite (GDL, electrodes)", combustible: "Yes — and conductive", approach: "Rated, conductive-aware recovery", href: "/materials/graphite-dust" },
 { name: "Bipolar-plate metal fines", combustible: "Combustible where reactive", approach: "Grounded, rated recovery" },
 { name: "Membrane & polymer material", combustible: "Varies", approach: "HEPA-retained recovery", href: "/materials/plastic-dust" },
 { name: "Hydrogen gas (area classification)", combustible: "Flammable — Group B", approach: "Air-operated, zero-electrical recovery in classified areas" },
 { name: "General fine powder", combustible: "Varies", approach: "HEPA-retained recovery on schedule" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in hydrogen & fuel cells",
 applicationCategorySlug: "energy",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "industrial-vacuums"],
 studySlug: "sulfur-dust-specialty-chemical-plant",
};
