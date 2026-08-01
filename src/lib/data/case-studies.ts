/**
 * TODO(launch): these are representative application spotlights written to
 * demonstrate structure and depth. Replace with verified customer case
 * studies — including real metrics and approved quotes — before launch.
 * Do not add customer names, quotes or quantified results until the client
 * supplies and approves them.
 */
export type CaseStudy = {
 slug: string;
 industry: string;
 material: string;
 title: string;
 challenge: string;
 solution: string;
 equipment: string[];
 outcomes: string[];
 /** Set when a full case study page exists in the library. */
 href?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
 {
 slug: "automotive-aluminum",
 industry: "Automotive",
 material: "Aluminum dust",
 href: "/case-studies/aluminum-dust-automotive-machining",
 title: "Reducing aluminum dust hazards in an automotive plant",
 challenge:
 "Sanding and machining lines generated fine aluminum dust — a reactive metal governed by NFPA 484 — that accumulated on beams, equipment and floors between shifts.",
 solution:
 "Grounded, air-operated explosion-proof vacuums with immersion separation were specified for line-side housekeeping, isolating collected fines in a liquid bath the moment they enter the system.",
 equipment: ["Explosion Proof Vacuums", "Pneumatic Vacuums", "Custom Engineered Systems"],
 outcomes: [
 "Ignition-source-free recovery path from hose tip to collection",
 "Housekeeping aligned with the plant's NFPA 484 obligations",
 "Scheduled cleaning absorbed into shift routines instead of shutdowns",
 ],
 },
 {
 slug: "food-flour",
 industry: "Food Processing",
 material: "Flour & sugar dust",
 href: "/case-studies/flour-dust-commercial-bakery",
 title: "Combustible flour dust control in a bakery facility",
 challenge:
 "Fugitive flour and sugar dust settled across mixing and packaging areas — a combustible organic dust load with allergen cross-contact concerns on top.",
 solution:
 "Hygienic stainless explosion-proof vacuums with HEPA filtration were deployed per zone, with dedicated units separating allergen lines from general housekeeping.",
 equipment: ["Explosion Proof Vacuums", "HEPA Vacuums"],
 outcomes: [
 "Captured fines retained at 99.99% filtration instead of recirculating",
 "Zone-dedicated equipment supporting the allergen-control program",
 "Wash-down-friendly stainless construction for sanitation cycles",
 ],
 },
 {
 slug: "pharma-api",
 industry: "Pharmaceutical",
 material: "Potent compounds",
 href: "/case-studies/lactose-dust-pharmaceutical-tablet",
 title: "Containing potent compound powders in production suites",
 challenge:
 "API and excipient powders demanded containment during cleaning — operator exposure and cross-contamination risks ruled out conventional equipment.",
 solution:
 "HEPA-filtered stainless containment vacuums were specified for suite-level cleaning, with grounded construction for the combustible fraction of the powders handled.",
 equipment: ["HEPA Vacuums", "Explosion Proof Vacuums"],
 outcomes: [
 "Sealed recovery path limiting operator exposure during cleaning",
 "Stainless contact surfaces compatible with cleaning validation",
 "One platform covering both containment and combustibility requirements",
 ],
 },
];
