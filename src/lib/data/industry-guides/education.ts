import { AlertTriangle, Filter, FlaskConical, GraduationCap, Hammer, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const educationGuide: IndustryGuideData = {
 slug: "education",
 name: "Schools & Universities",
 titleAccent: "schools & universities",
 seo: {
 title: "How to Safely Recover Dust in School & University Facilities?",
 description:
 "Campus dust hazards hide in plain sight — wood dust in shop classes, metal fines in machining and makerspaces, chemical and specialty dusts in research labs. One institution runs many small industrial environments, each with its own recovery rule.",
 },
 heroIntro:
 "The one 'facility' that is really a dozen small industrial environments under one roof — a woodshop that is a woodshop, a machine lab that is a machine lab, research labs that handle real chemistry — where the hazard is that nobody thinks of a campus as an industrial site until the dust says otherwise.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Fine and respirable fractions retained" },
 { icon: ShieldCheck, title: "Right Tool Per Room", detail: "Each lab gets its own rule" },
 { icon: GraduationCap, title: "Built for Campuses", detail: "Shop class to research lab" },
 { icon: AlertTriangle, title: "Combustible-Aware", detail: "The dusts students actually make" },
 ],
 stagesIntro:
 "A campus generates industrial dust in rooms nobody classifies as industrial. Walk the spaces — each one borrows its rule from the industry it imitates.",
 stages: [
 { label: "Woodworking & shop classes", detail: "A school woodshop sheds the same combustible wood dust as any furniture plant, at student scale — grounded, rated recovery and the woodworking program's discipline apply here too." },
 { label: "Machine shops & makerspaces", detail: "Metal fines from lathes, mills and increasingly 3D printers carry the metalworking rules — including the reactive-metal caution where aluminum or titanium enter a makerspace." },
 { label: "Chemistry & research labs", detail: "University research handles real chemistry — combustible, toxic and specialty dusts in small quantities, recovered with HEPA retention and sealed handling under the lab's protocols." },
 { label: "Art & ceramics studios", detail: "Ceramics and sculpture generate silica-bearing clay dust and glaze powders — the silica exposure rules apply in the studio exactly as on any industrial floor." },
 { label: "Trade & vocational programs", detail: "Welding, automotive and construction trades programs reproduce their industries' dusts and fumes — each borrows the relevant application guide's recovery approach." },
 { label: "Facilities & maintenance", detail: "Campus-wide housekeeping, renovation and grounds work generate ordinary and occasionally regulated dust — a documented recovery program covers the general case." },
 { label: "Labs handling silica or metals", detail: "Any teaching or research space cutting stone, handling foundry sand or machining reactive metals inherits that material's federal rules — the classroom does not lower the standard." },
 { label: "Cleanroom & specialty teaching labs", detail: "Advanced programs with cleanroom or semiconductor teaching facilities run the same contamination and ESD discipline their industrial counterparts do." },
 ],
 challengesHeading: "A campus is an industrial site nobody labeled",
 challenges: [
 { icon: Hammer, title: "Shop-Class Wood Dust", detail: "A teaching woodshop makes combustible wood dust like any plant — student scale does not change the physics or the recovery rule." },
 { icon: AlertTriangle, title: "Makerspace Metal Fines", detail: "Lathes, mills and metal 3D printers in makerspaces produce metal dust — including reactive aluminum and titanium that carry combustible-metal rules." },
 { icon: FlaskConical, title: "Real Lab Chemistry", detail: "Research and teaching labs handle combustible, toxic and specialty dusts in small quantities — small volume is not the same as low hazard." },
 { icon: Wind, title: "Silica In The Studio", detail: "Ceramics clay and glaze powders are silica-bearing — the same respirable-silica exposure rules apply in an art studio as in a foundry." },
 { icon: ShieldCheck, title: "Many Rooms, Many Rules", detail: "One institution runs a dozen small industrial environments — each space needs the recovery approach of the industry it mirrors." },
 { icon: Filter, title: "Occupied By Non-Specialists", detail: "Students and instructors, not industrial hygienists, occupy these spaces — so the equipment and the schedule carry the discipline for them." },
 ],
 materialsHeading: "The dusts a campus actually makes",
 materials: [
 { name: "Wood dust (shop classes)", combustible: "Yes", approach: "Grounded, rated recovery — the woodworking program at student scale", href: "/materials/wood-dust" },
 { name: "Metal fines (makerspaces)", combustible: "Per alloy", approach: "Metalworking recovery; reactive-metal rules for aluminum & titanium", href: "/materials/aluminum-dust" },
 { name: "Ceramics & clay dust", combustible: "No — silica-bearing", approach: "HEPA recovery; respirable-silica exposure rules apply", href: "/materials/silica-dust" },
 { name: "Laboratory chemical dusts", combustible: "Varies", approach: "Sealed, protocol-driven recovery; small volume, real hazard" },
 { name: "Welding & trades dust", combustible: "Varies", approach: "The relevant trade application's recovery approach", href: "/applications/welding-cleanup" },
 { name: "General facility dust", combustible: "Low", approach: "Routine campus housekeeping recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications on campus",
 applicationCategorySlug: "metalworking-machining",
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 studySlug: "beryllium-dust-national-laboratory",
};
