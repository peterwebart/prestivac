export type ProductCategory = {
 slug: string;
 name: string;
 tagline: string;
 description: string;
 image: string;
 /** Alt text names only what the render shows (model from filename). */
 alt: string;
 industries: string[];
 benefits: string[];
};

export const PRODUCT_CATEGORIES: ProductCategory[] = [
 {
 slug: "explosion-proof-vacuums",
 name: "Explosion Proof Vacuums",
 tagline: "Grounded, bonded recovery for combustible dust",
 description:
 "Built for facilities where the dust itself is the hazard. Conductive stainless construction, grounded and bonded from hose tip to casters, with power units selected for the area classification — so routine housekeeping never becomes an ignition source.",
 image: "/images/products/explosion-proof.jpg",
 alt: "PrestiVac AVX-55 EX explosion-proof industrial vacuum",
 industries: ["Food Processing", "Metalworking", "Chemical", "Woodworking"],
 benefits: [
 "Grounded & bonded conductive path throughout",
 "Anti-static hoses and accessories",
 "Immersion separation options for reactive metals",
 "Configurations for classified areas",
 ],
 },
 {
 slug: "hepa-vacuums",
 name: "HEPA Vacuums",
 tagline: "99.99% filtration for fine and hazardous dust",
 description:
 "Tested HEPA filtration keeps captured fines captured — for pharmaceutical powders, silica, allergens and any application where exhaust air quality is part of the requirement.",
 image: "/images/products/hepa.jpg",
 alt: "PrestiVac EX1-15 HEPA industrial vacuum",
 industries: ["Pharmaceutical", "Food Processing", "Abatement", "Electronics"],
 benefits: [
 "HEPA filtration at 99.99%",
 "Multi-stage filtration ahead of the HEPA",
 "Stainless contact surfaces",
 "Containment-oriented collection options",
 ],
 },
 {
 slug: "pneumatic-vacuums",
 name: "Pneumatic Vacuums",
 tagline: "Air-operated — no electrical components",
 description:
 "Driven entirely by compressed air, with no motors, switches or wiring anywhere on the unit — the straightforward answer for classified areas and wash-down environments.",
 image: "/images/products/pneumatic.jpg",
 alt: "PrestiVac AVX 5-10 EX HEPA air-operated vacuum",
 industries: ["Chemical", "Metalworking", "Aerospace", "Battery"],
 benefits: [
 "Zero electrical components",
 "Suited to classified areas",
 "Minimal moving parts, minimal maintenance",
 "Runs from plant compressed air",
 ],
 },
 {
 slug: "industrial-vacuums",
 name: "Industrial Vacuums",
 tagline: "Continuous-duty recovery for demanding plants",
 description:
 "Heavy stainless systems built for daily production housekeeping — abrasive debris, high volumes and long duty cycles that consumer-grade equipment can't survive.",
 image: "/images/products/family.jpg",
 alt: "PrestiVac AV1 industrial vacuum system",
 industries: ["Manufacturing", "Automotive", "Plastics", "Recycling"],
 benefits: [
 "Stainless steel construction",
 "Continuous-duty power units",
 "Large-capacity collection containers",
 "Serviceable, long-life components",
 ],
 },
  {
 slug: "esd-static-free-vacuums",
 name: "ESD Static Free Vacuum Cleaners",
 tagline: "Static dissipating throughout",
 description:
 "Built with static dissipating components throughout — housings, filters, hoses and tools — so charge cannot accumulate where it matters. Specified where a discharge could ignite combustible dust, and where sensitive electronics must be protected from electrostatic damage.",
 image: "/images/products/explosion-proof.jpg",
 alt: "PrestiVac stainless steel ESD static free industrial vacuum cleaner",
 industries: ["Electronics", "Battery Manufacturing", "Semiconductor", "Aerospace", "Cleanrooms"],
 benefits: [
 "Static dissipating housings, filters, hoses and tools",
 "Continuous grounded and bonded recovery path",
 "Suited to both ignition prevention and component protection",
 "Solid stainless steel construction",
 ],
 },
 {
 slug: "cleanroom-vacuums",
 name: "Cleanroom Vacuum Cleaners",
 tagline: "Judged by what leaves the exhaust",
 description:
 "Vacuum cleaners for controlled environments, where the machine must remove contamination without contributing any. Absolute filtration, smooth wipeable stainless surfaces and contained collection so a cleaning pass does not raise the particle count of the room.",
 image: "/images/products/hepa.jpg",
 alt: "PrestiVac stainless steel cleanroom vacuum cleaner with absolute filtration",
 industries: ["Cleanrooms", "Semiconductor", "Medical Devices", "Biotech", "Electronics"],
 benefits: [
 "HEPA and ULPA absolute filtration options",
 "Smooth, wipeable 316 and 304 stainless construction",
 "Contained, sealed collection",
 "Dedicated equipment for controlled areas",
 ],
 },
 {
 slug: "pharmaceutical-vacuums",
 name: "Pharmaceutical Vacuum Cleaners",
 tagline: "Containment and sanitation together",
 description:
 "Built for active ingredients, excipients and potent compounds, where exposure limits and sanitation requirements govern the specification. Absolute filtration retains the fine fraction, and stainless construction stands up to wash-down and changeover routines.",
 image: "/images/products/hepa.jpg",
 alt: "PrestiVac stainless steel pharmaceutical vacuum cleaner",
 industries: ["Pharmaceutical", "Biotech", "Medical Devices", "Cleanrooms", "Food & Beverage"],
 benefits: [
 "HEPA absolute filtration for potent powders",
 "Sealed collection and controlled disposal",
 "316 and 304 stainless, wash-down friendly",
 "Supports containment and sanitation records",
 ],
 },
 {
 slug: "wet-dry-systems",
 name: "Wet & Dry Systems",
 tagline: "Liquids, sludge and dust on one platform",
 description:
 "Recovery systems configured for coolants, wash-down water, chemical spills and slurry as readily as dry dust — with construction matched to what's being collected.",
 image: "/images/products/wet-dry.jpg",
 alt: "PrestiVac EVX-25 EX RCT HEPA vacuum system",
 industries: ["Chemical", "Automotive", "Manufacturing", "Food Processing"],
 benefits: [
 "Wet and dry recovery on one unit",
 "Corrosion-resistant configurations",
 "High-capacity liquid collection",
 "Explosion-proof wet recovery options",
 ],
 },
 {
 slug: "central-vacuum-systems",
 name: "Central Vacuum Systems",
 tagline: "Facility-wide housekeeping from fixed drops",
 description:
 "A remote power unit and separator serving inlet drops across the plant through engineered piping. Operators clean at every station without moving equipment; material consolidates at one discharge point.",
 image: "/images/products/central.jpg",
 alt: "PrestiVac EVX-15 EX HEPA vacuum system",
 industries: ["Food Processing", "Pharmaceutical", "Manufacturing"],
 benefits: [
 "Engineered piping and inlet layout",
 "Single consolidated discharge point",
 "Sized to simultaneous-operator demand",
 "Explosion-protection options where required",
 ],
 },
 {
 slug: "custom-engineered-systems",
 name: "Custom Engineered Systems",
 tagline: "Designed around your exact application",
 description:
 "When the material, the process or the facility doesn't fit a standard configuration, we build the system that does — from specialty separators to complete recovery installations.",
 image: "/images/products/custom.jpg",
 alt: "PrestiVac stainless steel industrial vacuum product family",
 industries: ["All industries"],
 benefits: [
 "Application-specific engineering",
 "Specialty separation and filtration",
 "Integration with existing processes",
 "Documentation for your compliance file",
 ],
 },
 {
 slug: "accessories",
 name: "Accessories",
 tagline: "Grounded hoses, tools and filters",
 description:
 "Static-dissipative hoses, stainless wands, brushes, crevice tools and replacement filtration — the parts that keep a recovery system performing to its specification.",
 image: "/images/products/accessories.jpg",
 alt: "PrestiVac vacuum tools and accessories set",
 industries: ["All industries"],
 benefits: [
 "Anti-static hose assemblies",
 "Stainless and non-sparking tools",
 "Replacement HEPA and cartridge filters",
 "Application-matched nozzles",
 ],
 },
];

export function getCategory(slug: string): ProductCategory | undefined {
 return PRODUCT_CATEGORIES.find((c) => c.slug === slug);
}
