import {
 BookOpenCheck,
 ClipboardCheck,
 ClipboardList,
 Flame,
 ShieldCheck,
 Wind,
 type LucideIcon,
} from "lucide-react";

export type Resource = {
 slug: string;
 title: string;
 blurb: string;
 minutes: number;
 icon: LucideIcon;
 body: string[];
};

export const RESOURCES: Resource[] = [
 {
 slug: "explosion-proof-vacuum-guide",
 title: "Explosion Proof Vacuum Guide",
 blurb: "What makes a vacuum explosion-proof, when one is required, and how to specify it.",
 minutes: 5,
 icon: ShieldCheck,
 body: [
 "An explosion-proof vacuum is engineered so that nothing in the recovery path can become an ignition source. That means conductive, grounded and bonded construction from the hose tip through the canister to the chassis, non-sparking contact materials, filtration that keeps fine particulate away from the power unit, and a drive selected for the environment — dust-ignition-protected electrics where permitted, or fully air-operated units with no electrical components at all.",
 "The requirement usually surfaces in two places: a Dust Hazard Analysis that identifies combustible dust in your process, or an area classification (Class II, Division 1 or 2 in North America; ATEX Zones 20–22 in the EU) that governs every piece of equipment used there. A standard shop vacuum fails on both counts — its motor sparks by design and its plastic hose generates static charge exactly where dust concentration is highest.",
 "Specification starts from the material and the classification, then works outward: wet or dry recovery, duty cycle, filtration level, portability. PrestiVac engineers systems against those inputs and provides the documentation your compliance file needs — certifications and listings vary by model and configuration, so request the paperwork for your specific application.",
 ],
 },
 {
 slug: "industrial-dust-control",
 title: "Industrial Dust Control Solutions",
 blurb: "The housekeeping hierarchy: capture at source, vacuum recovery, and what OSHA expects.",
 minutes: 4,
 icon: Wind,
 body: [
 "Dust control in an industrial facility is a hierarchy. Primary collection captures dust at the source; housekeeping deals with what escapes. The method matters: sweeping and compressed-air blowdown resuspend fine particles into exactly the airborne cloud that combustible-dust standards exist to prevent, which is why vacuum recovery is the accepted approach for fugitive dust — and why blowdown of combustible dust is heavily restricted.",
 "The threshold for concern is lower than most plants assume. Per OSHA and NFPA guidance, a dust layer as thin as 1/32 of an inch — about the thickness of a paper clip wire — covering a small fraction of a room's surface area can constitute an explosion hazard. Overhead surfaces count: beams, cable trays and equipment tops are where accumulation goes unnoticed.",
 "An effective program pairs the right equipment with a schedule: defined cleaning frequencies per zone, grounded vacuums rated for the material, and documentation that stands up when the OSHA National Emphasis Program inspection arrives.",
 ],
 },
 {
 slug: "combustible-dust-solutions",
 title: "Combustible Dust Vacuum Solutions",
 blurb: "Matching recovery equipment to organic dusts, reactive metals and mixed process waste.",
 minutes: 5,
 icon: Flame,
 body: [
 "Combustible dust is not one problem — it's a family of them, and the recovery equipment differs by material. Organic dusts such as flour, sugar, grain, wood and most polymers call for grounded, explosion-proof vacuums with high-efficiency filtration, so fines are captured and retained rather than exhausted back into the air.",
 "Reactive metal fines — aluminum, magnesium, titanium and their alloys — are a stricter case governed by NFPA 484. Immersion separation collects these fines directly into a liquid bath the moment they enter the system, keeping them inert during recovery and storage instead of accumulating as a dry, ignitable mass.",
 "Mixed and process-specific waste streams — powder coating overspray, 3D-printing powders, dust with a liquid fraction — are where standard configurations run out. Those applications are engineered case by case, which is precisely the work PrestiVac was built around.",
 ],
 },
 {
 slug: "nfpa-guide",
 title: "NFPA Standards Guide",
 blurb: "NFPA 652, 654, 484 and the industry standards consolidating into NFPA 660.",
 minutes: 6,
 icon: BookOpenCheck,
 body: [
 "NFPA 652 is the umbrella standard — the fundamentals of combustible dust. Its most consequential requirement is the Dust Hazard Analysis: a documented assessment of where combustible dust exists in your process and how those hazards are managed, reviewed and updated at least every five years.",
 "Beneath it sit the commodity and industry standards: NFPA 654 for manufacturing and processing of combustible particulate solids, NFPA 484 for combustible metals, NFPA 61 for agricultural and food processing facilities, and NFPA 664 for wood processing. Each carries housekeeping provisions that determine what recovery equipment is acceptable and how frequently cleaning must occur.",
 "These documents are being consolidated into NFPA 660, the combined combustible-dust standard — the structure is changing, but the obligations carry forward. For equipment selection the practical question is unchanged: what does your DHA identify, and is your housekeeping equipment engineered for that material and that area?",
 ],
 },
 {
 slug: "dust-hazard-analysis",
 title: "Dust Hazard Analysis",
 blurb: "What a DHA is, who performs it, and what it means for your housekeeping equipment.",
 minutes: 4,
 icon: ClipboardList,
 body: [
 "A Dust Hazard Analysis is the systematic review NFPA 652 requires wherever combustible dust may be present: identifying the materials, the locations where they accumulate or become airborne, the ignition sources nearby, and the safeguards in place. It is performed by, or under the direction of, a qualified person — often a process-safety consultant working with plant engineering — and it becomes a living document, revisited on at least a five-year cycle.",
 "The output is a list of scenarios and actions. Housekeeping appears in almost every one, because settled dust is both the fuel for secondary explosions and the most controllable variable in the analysis.",
 "That is where equipment selection enters: the DHA defines the material properties and area classifications, and the recovery equipment must be engineered against them. PrestiVac works from your DHA's findings to specify systems — and provides the supporting documentation your action items require.",
 ],
 },
 {
 slug: "risk-checker",
 title: "Combustible Dust Risk Checklist",
 blurb: "A plain-language self-check for whether your dust, housekeeping and equipment raise a combustible-dust flag.",
 minutes: 4,
 icon: ClipboardCheck,
 body: [
 "This checklist is an orientation tool, not a substitute for a Dust Hazard Analysis performed by a qualified person. It is meant to help a plant or safety manager decide whether the question deserves a closer, professional look — and in most dust-handling facilities, it does. Work through it honestly; a single yes in the first group is usually enough to warrant a formal DHA.",
 "Does your process create, handle or accumulate a dust from any combustible material — wood, flour, sugar, grain, plastic, coal, most metals, pharmaceuticals or many chemicals? Can you find settled dust on beams, ledges, cable trays, motor housings or equipment tops? Is there anywhere a layer as thin as 1/32 inch — roughly the thickness of a paper-clip wire — covers a surface? Any yes here means combustible dust is plausibly present and the rest of the checklist matters.",
 "How is that dust cleaned up today? Dry sweeping and compressed-air blowdown both resuspend fine particles into the airborne cloud that combustible-dust standards exist to prevent — so if either is in routine use on a combustible dust, that is a flag on its own. Is fugitive dust recovered with a vacuum that is grounded, bonded and rated for the material and the area classification, or with a standard shop vacuum whose motor sparks by design? The gap between those two is the gap the standards care about.",
 "Has a Dust Hazard Analysis ever been performed for the areas where this dust lives, and if so, is it within its five-year review window? Are the ignition sources near accumulation points — hot surfaces, electrical equipment, static, friction, open flame — actually identified and controlled? If you cannot answer these confidently, the honest next step is a professional DHA. PrestiVac does not perform your DHA, but once you have its findings, our technical team specifies recovery equipment against the material properties and area classifications it identifies — and supply the documentation your action items require.",
 ],
 },
];

export function getResource(slug: string): Resource | undefined {
 return RESOURCES.find((r) => r.slug === slug);
}
