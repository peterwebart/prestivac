import {
 BatteryCharging,
 Car,
 FlaskConical,
 Hammer,
 Layers,
 Pill,
 Plane,
 Recycle,
 TreePine,
 Wheat,
 type LucideIcon,
} from "lucide-react";

export type Industry = {
 slug: string;
 name: string;
 icon: LucideIcon;
 /** Hazard materials drawn from the client's industry documentation. */
 hazards: string[];
 solution: string;
};

export const INDUSTRIES: Industry[] = [
 {
 slug: "food-processing",
 name: "Food Processing",
 icon: Wheat,
 hazards: ["Flour & grain dust", "Sugar & starch", "Cocoa & spices", "Allergen cross-contact"],
 solution: "Hygienic stainless explosion-proof vacuums with HEPA filtration, zone-dedicated for allergen control.",
 },
 {
 slug: "pharmaceutical",
 name: "Pharmaceutical",
 icon: Pill,
 hazards: ["APIs & potent compounds", "Lactose & excipients", "Broken ampules", "Cleanroom particulate"],
 solution: "HEPA containment vacuums with stainless contact surfaces compatible with cleaning validation.",
 },
 {
 slug: "chemical",
 name: "Chemical",
 icon: FlaskConical,
 hazards: ["Acids & solvents", "Toxic liquids", "Combustible powders", "Herbicides & pesticides"],
 solution: "Corrosion-resistant wet/dry recovery with grounded construction for flammable materials.",
 },
 {
 slug: "metalworking",
 name: "Metalworking",
 icon: Hammer,
 hazards: ["Aluminum & magnesium fines", "Titanium dust", "Grinding & blast media", "Metalworking fluids"],
 solution: "Explosion-proof systems with immersion separation built to NFPA 484 requirements.",
 },
 {
 slug: "aerospace",
 name: "Aerospace",
 icon: Plane,
 hazards: ["Titanium & aluminum fines", "Composite & epoxy dust", "Coolants & solvents", "Sanding residue"],
 solution: "Grounded recovery for reactive metal fines plus wet/dry units for machining fluids.",
 },
 {
 slug: "automotive",
 name: "Automotive",
 icon: Car,
 hazards: ["Body-shop sanding dust", "Aluminum fines", "Blast media", "Coolants & fluids"],
 solution: "Line-side explosion-proof housekeeping and wet/dry recovery for fluids and media.",
 },
 {
 slug: "battery",
 name: "Battery Manufacturing",
 icon: BatteryCharging,
 hazards: ["Electrode powders", "Conductive metal fines", "Moisture-sensitive materials", "Cleanroom particulate"],
 solution: "Air-operated and HEPA-filtered recovery configured for conductive, reactive powders.",
 },
 {
 slug: "plastics",
 name: "Plastics",
 icon: Recycle,
 hazards: ["Polymer dust & fines", "Regrind & pellets", "Additive powders", "Combustible dust layers"],
 solution: "Continuous-duty industrial vacuums with explosion-proof options for fine polymer dust.",
 },
 {
 slug: "woodworking",
 name: "Woodworking",
 icon: TreePine,
 hazards: ["Fine wood dust", "Sander & CNC fines", "Dust layer accumulation", "NFPA 664 obligations"],
 solution: "Explosion-proof housekeeping vacuums complementing primary dust-collection systems.",
 },
 {
 slug: "additive-manufacturing",
 name: "Additive Manufacturing",
 icon: Layers,
 hazards: ["Metal print powders (Ti, Al)", "Polymer powders", "Reactive condensate", "Powder-handling residue"],
 solution: "Immersion-separation and inert-compatible recovery engineered for AM powder rooms.",
 },
];
