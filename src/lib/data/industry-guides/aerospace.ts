import {
 Filter,
 Flame,
 HardHat,
 Plane,
 ShieldAlert,
 Timer,
 Zap,
} from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const aerospaceGuide: IndustryGuideData = {
 slug: "aerospace",
 name: "Aerospace & Defense",
 titleAccent: "aerospace manufacturing",
 seo: {
 title: "Aerospace Manufacturing Vacuum Solutions",
 description:
 "Industrial vacuum solutions for aerospace: explosion-proof recovery for titanium and aluminum machining fines, conductive composite dust and additive manufacturing powders — built to NFPA 484 / 660 practice in a certification-grade environment.",
 },
 heroIntro:
 "Aerospace machines the two most demanding structural metals — titanium and aluminum — alongside conductive composite dust and additive manufacturing powders, inside the most documentation-heavy quality culture in industry. The dust program and the FOD program are the same discipline pointed at different consequences.",
 heroImage: {
 src: "/images/library/workers/aerospace-engine-service.jpg",
 alt: "Technician vacuuming beneath a turbofan engine during aircraft maintenance",
 },
 badges: [
 { icon: ShieldAlert, title: "Explosion-Safe Design", detail: "Engineered to NFPA 484 / 660 practice" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fines retained, not redistributed" },
 { icon: Zap, title: "Static Control", detail: "Grounded & bonded recovery" },
 { icon: Plane, title: "Built for Aerospace", detail: "Machining cells to MRO bays" },
 ],
 stagesIntro:
 "From structural machining to the test cell, each stage generates a different dust family with different rules — reactive metal fines, conductive composite dust and the finest AM condensate all live in one plant.",
 stages: [
 { label: "Titanium & aluminum machining", detail: "Structural machining makes the plant's most severe streams — titanium fines with documented fire history and St 2 to St 3 aluminum — wetted, sealed, material-dedicated recovery." },
 { label: "Composite layup & trim", detail: "Carbon fiber trimming and sanding shed conductive, abrasive dust — it migrates into electronics and settles as a fault pathway, not just a housekeeping item." },
 { label: "Additive manufacturing cell", detail: "Reactive AM powders and process condensate under alloy-dedication rules — the finest, most reactive material on site, recovered with detail nozzles at low disturbance." },
 { label: "Heat treatment & finishing", detail: "Blasting media, oxide fines and polishing dust around thermal equipment — perimeters on a defined frequency." },
 { label: "Assembly & integration", detail: "Drilling and fastening in-jig sheds mixed fines onto structure and tooling — FOD discipline and dust discipline converge here." },
 { label: "Paint & coating", detail: "Sanding between coats makes fine dust next to charged application equipment — grounded recovery joins the bonded system." },
 { label: "Test cells & MRO", detail: "Tear-down debris, blasting residues and mixed legacy dusts — recovery sized for the unknown, documented per the work order." },
 { label: "Warehouse & FOD control", detail: "The last sweep before parts ship is a vacuum pass — sealed recovery so nothing migrates back onto flight hardware." },
 ],
 challengesHeading: "Certification-grade cleaning for certification-grade parts",
 challenges: [
 { icon: Flame, title: "Titanium's fire history", detail: "Titanium machining fires are documented industry-wide — fine swarf and grinding fines ignite far more easily than the solid metal, and burning titanium resists common extinguishers." },
 { icon: ShieldAlert, title: "Reactive metal discipline", detail: "Aluminum and titanium fines each carry NFPA 484 legacy requirements — wetted collection, sealed handling and material-dedicated equipment close the pathways." },
 { icon: Zap, title: "Conductive composite dust", detail: "Carbon fiber dust is electrically conductive and abrasive — a settled film inside cabinets and controls is an electrical fault waiting for a surface." },
 { icon: Filter, title: "AM powder rules", detail: "Alloy-dedicated recovery, condensate treated as the most reactive fraction, and a hard wall between the reuse stream and the disposal stream." },
 { icon: HardHat, title: "FOD culture alignment", detail: "Foreign object debris programs already schedule, document and verify cleaning — the dust program plugs into that machinery rather than inventing its own." },
 { icon: Timer, title: "Documentation load", detail: "Validated methods, defined frequencies and records that survive an audit — cleaning here is a controlled process like any other." },
 ],
 materialsHeading: "Understand the dusts. Match the recovery.",
 materials: [
 { name: "Titanium fines & swarf", combustible: "Yes — fine fraction ignition-sensitive", approach: "Wetted, sealed recovery; material-dedicated units; no water on burning metal", href: "/materials/titanium-dust" },
 { name: "Aluminum machining fines", combustible: "Yes — St 2 to St 3 severity", approach: "Wetted, sealed explosion-proof recovery", href: "/materials/aluminum-dust" },
 { name: "Carbon fiber / composite dust", combustible: "Matrix-dependent — typically low explosibility, electrically conductive", approach: "HEPA recovery; electronics and control areas on a defined frequency" },
 { name: "Nickel superalloy dust", combustible: "Varies — exposure limits often govern first", approach: "HEPA capture and sealed disposal; alloy segregation" },
 { name: "AM powder & condensate", combustible: "Yes — finest, most reactive fraction", approach: "Alloy-dedicated explosion-proof recovery; condensate at low disturbance", href: "/materials/titanium-dust" },
 { name: "Blasting media & oxide fines", combustible: "Varies — media and substrate govern", approach: "Heavy-duty recovery sized for abrasive mixed debris" },
 ],
 materialsDirectory: { label: "metal dusts", href: "/materials#metal-dusts" },
 applicationsHeading: "Applications in aerospace",
 applicationCategorySlug: "aerospace",
 recommended: ["explosion-proof-vacuums", "pneumatic-vacuums", "hepa-vacuums", "industrial-vacuums"],
 studySlug: "titanium-powder-additive-manufacturing",
};
