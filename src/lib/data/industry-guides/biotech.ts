import { AlertTriangle, Dna, Filter, FlaskConical, ShieldCheck, Wind } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const biotechGuide: IndustryGuideData = {
 slug: "biotech",
 name: "Biotechnology & Bioprocessing",
 titleAccent: "biotechnology & bioprocessing",
 seo: {
 title: "How to Safely Recover Dust in Biotechnology & Bioprocessing?",
 description:
 "Bioprocessing is mostly liquid, but dry powder enters at media prep and leaves at lyophilization — combustible dried biologics and media, biosafety containment, and cleanroom fill-finish all in one flow. HEPA-retained recovery for biotech manufacturing.",
 },
 heroIntro:
 "The mostly-wet process with two dry ends — dry media powder goes in at the front, freeze-dried product comes out at the back, and containment runs both ways throughout: protecting the product from the operator, and the operator from biologically active material. The dried biologics, meanwhile, burn like any fine organic dust.",
 badges: [
 { icon: Filter, title: "HEPA Filtration", detail: "Dried biologic fines retained" },
 { icon: ShieldCheck, title: "Containment Both Ways", detail: "Product and operator protected" },
 { icon: Dna, title: "Built for Bioprocessing", detail: "Media prep to fill-finish" },
 { icon: AlertTriangle, title: "Combustible-Aware", detail: "Dried organics still burn" },
 ],
 stagesIntro:
 "Bioprocessing runs mostly wet — but the dust concentrates at the two dry ends and demands biosafety containment everywhere. Walk the flow from raw media to finished vial.",
 stages: [
 { label: "Media & buffer preparation", detail: "The front dry end — culture media, salts and buffer components are dispensed as powders, shedding the finest airborne fraction at the scale. Grounded, rated recovery starts here, because dried media is a combustible organic dust like any other." },
 { label: "Fermentation & cell culture", detail: "The wet heart of the process runs in closed bioreactors, but powder handling around charging and sampling still generates dust — and contamination control is absolute wherever the culture is exposed." },
 { label: "Harvest & clarification", detail: "Cells and product are separated from spent media; the step is liquid-dominated, but spills and dried residues on surfaces are recovered under containment to protect both product and operator." },
 { label: "Downstream purification", detail: "Chromatography and filtration purify the product across many liquid steps; housekeeping here is contamination control, keeping fine particulate off columns and out of buffer-exposed surfaces." },
 { label: "Formulation & buffer exchange", detail: "The product is concentrated and formulated toward its final composition — as it dries at interfaces and fill points, the powder fraction reappears and recovery follows it." },
 { label: "Lyophilization (freeze-drying)", detail: "The back dry end and the dustiest step in the suite: freeze-dried cake fractures into a very fine, airborne powder during handling and transfer, captured at the source with HEPA retention." },
 { label: "Fill-finish & aseptic areas", detail: "Filling runs under the same cleanroom-grade containment covered on our cleanrooms guide — recovery equipment is validated as part of the cleanliness system, exhausting cleaner than the room it works in." },
 { label: "Containment & biosafety", detail: "Biologically active material governs the whole flow — recovery is sealed, HEPA-retained and run under the facility's biosafety protocols, so cleanup never becomes an exposure pathway." },
 ],
 challengesHeading: "A wet process with two dry ends",
 challenges: [
 { icon: Dna, title: "Dry Ends Of A Wet Process", detail: "Bioprocessing is mostly liquid — but dry powder goes in at media prep and comes out at lyophilization, and that is where the dust hazard concentrates." },
 { icon: AlertTriangle, title: "Dried Biologics Burn", detail: "Dried proteins, sugars and culture media are combustible organic fine powders — the biology does not exempt them from dust-explosion physics." },
 { icon: ShieldCheck, title: "Containment Runs Both Ways", detail: "Recovery protects the product from contamination and the operator from biologically active material — one discipline serving two directions at once." },
 { icon: Wind, title: "Lyophilized Powder Is Fine", detail: "Freeze-dried cake fractures into a very fine, easily airborne fraction — capture at the source keeps it out of the breathing zone and off adjacent product." },
 { icon: Filter, title: "Potent & Active Biologics", detail: "Biologically active and potent material demands HEPA retention with sealed handling under the facility's containment protocols." },
 { icon: FlaskConical, title: "Buffers Aren't Biologics", detail: "Salts and buffer components are frequently non-combustible — but the dried product they surround often is, so the product sets the recovery rule." },
 ],
 materialsHeading: "Know the powder. Match the recovery.",
 materials: [
 { name: "Dried biologics & proteins", combustible: "Yes — combustible organic fines", approach: "HEPA-retained recovery; sealed, containment-driven handling" },
 { name: "Culture media powders", combustible: "Yes", approach: "Grounded, rated recovery — the same rule any fine organic dust follows" },
 { name: "Excipients & sugars", combustible: "Often yes", approach: "HEPA capture; the dried product sets the combustibility rule", href: "/materials/sugar-dust" },
 { name: "Lyophilized product", combustible: "Per formulation", approach: "High-frequency capture of a very fine airborne fraction" },
 { name: "Buffers & salts", combustible: "Generally no", approach: "Routine contamination-control recovery" },
 { name: "Potent & active biologics", combustible: "Containment-critical", approach: "Sealed, HEPA, protocol-driven recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in bioprocessing",
 applicationCategorySlug: "biotechnology",
 recommended: ["hepa-vacuums", "industrial-vacuums", "explosion-proof-vacuums", "central-vacuum-systems"],
 studySlug: "lactose-dust-pharmaceutical-tablet",
};
