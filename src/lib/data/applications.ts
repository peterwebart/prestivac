import {
 BatteryCharging,
 Boxes,
 Car,
 ChefHat,
 CircuitBoard,
 Cog,
 Dna,
 Droplets,
 FileText,
 FlaskConical,
 Fuel,
 GraduationCap,
 Hammer,
 HardHat,
 Layers,
 Leaf,
 Microscope,
 Package,
 Pickaxe,
 Pill,
 Plane,
 Recycle,
 Ship,
 Shirt,
 Stethoscope,
 TreePine,
 Warehouse,
 Wrench,
 Zap,
 type LucideIcon,
} from "lucide-react";

export type ApplicationCategory = {
 slug: string;
 name: string;
 icon: LucideIcon;
 items: string[];
};

/** Full application directory from the client's application inventory. */
export const APPLICATION_CATEGORIES: ApplicationCategory[] = [
 {
 slug: "metalworking-machining",
 name: "Metalworking & Machining",
 icon: Hammer,
 items: [
 "CNC machining", "CNC milling", "CNC turning", "CNC grinding", "Metal cutting",
 "Laser cutting", "Plasma cutting", "Waterjet cutting", "Deburring", "Surface finishing",
 "Polishing", "Buffing", "Sanding", "Powder coating", "Shot blasting", "Abrasive blasting",
 "Metal fabrication", "Welding cleanup", "Foundries", "Die casting", "Investment casting",
 "Powder metallurgy", "Metal stamping", "Heat treating", "Forging", "Tool manufacturing",
 "Mold manufacturing", "Machine shops",
 ],
 },
 {
 slug: "additive-manufacturing",
 name: "Additive Manufacturing",
 icon: Layers,
 items: [
 "Metal 3D printing", "Polymer 3D printing", "Powder recovery", "Powder recycling",
 "Printer cleaning", "Build chamber cleaning", "SLS printing", "DMLS printing",
 "SLM printing", "Binder jetting",
 ],
 },
 {
 slug: "battery-manufacturing",
 name: "Battery Manufacturing",
 icon: BatteryCharging,
 items: [
 "Lithium-ion battery production", "Electrode manufacturing", "Cathode production",
 "Anode production", "Cell assembly", "Module assembly", "Battery recycling",
 "Black mass recovery", "Graphite handling", "Powder mixing",
 ],
 },
 {
 slug: "aerospace",
 name: "Aerospace",
 icon: Plane,
 items: [
 "Aircraft manufacturing", "Aircraft maintenance", "Composite manufacturing",
 "Engine manufacturing", "Turbine manufacturing", "Surface preparation",
 "Titanium machining", "Aluminum machining",
 ],
 },
 {
 slug: "automotive",
 name: "Automotive",
 icon: Car,
 items: [
 "Vehicle manufacturing", "EV manufacturing", "Engine plants", "Transmission manufacturing",
 "Brake manufacturing", "Wheel manufacturing", "Battery production", "Paint preparation",
 "Robotic welding", "Assembly lines",
 ],
 },
 {
 slug: "electronics",
 name: "Electronics & Semiconductors",
 icon: CircuitBoard,
 items: [
 "PCB manufacturing", "Semiconductor fabrication", "Wafer processing", "Cleanroom production",
 "Electronics assembly", "Vacuum coating", "Display manufacturing", "Chip packaging",
 "SMT production", "Electronics recycling",
 ],
 },
 {
 slug: "pharmaceutical",
 name: "Pharmaceutical",
 icon: Pill,
 items: [
 "API manufacturing", "Tablet production", "Capsule production", "Powder transfer",
 "Powder blending", "Granulation", "Fluid bed drying", "Packaging", "Cleanrooms",
 "Containment rooms",
 ],
 },
 {
 slug: "biotechnology",
 name: "Biotechnology",
 icon: Dna,
 items: [
 "Bioprocessing", "Fermentation", "Vaccine manufacturing", "Clean laboratories",
 "Powder handling", "Laboratory cleanup",
 ],
 },
 {
 slug: "medical-devices",
 name: "Medical Devices",
 icon: Stethoscope,
 items: [
 "Medical device production", "Implant manufacturing", "Surgical instrument manufacturing",
 "Clean assembly", "Sterile packaging",
 ],
 },
 {
 slug: "food-processing",
 name: "Food Processing",
 icon: ChefHat,
 items: [
 "Flour milling", "Sugar processing", "Bakery production", "Chocolate manufacturing",
 "Coffee roasting", "Coffee grinding", "Spice processing", "Dairy production",
 "Milk powder", "Cheese production", "Meat processing", "Seafood processing",
 "Pet food", "Feed mills", "Grain elevators", "Rice milling", "Corn processing",
 "Snack food production", "Beverage production", "Freeze drying",
 ],
 },
 {
 slug: "packaging",
 name: "Packaging",
 icon: Package,
 items: [
 "Flexible packaging", "Blister packaging", "Vacuum packaging", "Tray sealing",
 "MAP packaging", "Bottle production", "Plastic packaging", "Pharmaceutical packaging",
 "Food packaging",
 ],
 },
 {
 slug: "chemical-processing",
 name: "Chemical Processing",
 icon: FlaskConical,
 items: [
 "Chemical manufacturing", "Powder mixing", "Pigment production", "Resin production",
 "Plastic compounding", "Solvent recovery", "Catalyst production", "Fertilizer production",
 "Polymer production",
 ],
 },
 {
 slug: "plastics",
 name: "Plastics",
 icon: Recycle,
 items: [
 "Injection molding", "Blow molding", "Extrusion", "Thermoforming", "Rotomolding",
 "Plastic recycling", "Pellet production", "Resin transfer",
 ],
 },
 {
 slug: "rubber",
 name: "Rubber",
 icon: Cog,
 items: ["Tire manufacturing", "Rubber compounding", "Rubber recycling", "Molded rubber products"],
 },
 {
 slug: "woodworking",
 name: "Woodworking",
 icon: TreePine,
 items: [
 "Furniture manufacturing", "Cabinet making", "Sawmills", "Wood sanding",
 "CNC woodworking", "MDF machining", "Veneer production", "Lamination", "Flooring production",
 ],
 },
 {
 slug: "paper",
 name: "Paper & Printing",
 icon: FileText,
 items: [
 "Paper mills", "Cardboard manufacturing", "Tissue production", "Printing",
 "Book binding", "Packaging paper",
 ],
 },
 {
 slug: "textile",
 name: "Textile",
 icon: Shirt,
 items: [
 "Cotton processing", "Textile manufacturing", "Fiber processing",
 "Nonwoven production", "Garment manufacturing",
 ],
 },
 {
 slug: "mining",
 name: "Mining & Minerals",
 icon: Pickaxe,
 items: [
 "Coal mining", "Mineral processing", "Ore handling", "Crushing plants",
 "Screening plants", "Conveying systems",
 ],
 },
 {
 slug: "cement",
 name: "Cement & Construction Materials",
 icon: HardHat,
 items: [
 "Cement plants", "Clinker handling", "Raw meal handling", "Silo cleaning",
 "Concrete plants", "Brick manufacturing", "Ceramic production", "Glass manufacturing",
 "Stone fabrication",
 ],
 },
 {
 slug: "energy",
 name: "Energy",
 icon: Zap,
 items: [
 "Hydrogen production", "Fuel cells", "Solar manufacturing", "Wind turbine manufacturing",
 "Nuclear facilities", "Power plants", "Biomass plants",
 ],
 },
 {
 slug: "oil-gas",
 name: "Oil & Gas",
 icon: Fuel,
 items: [
 "Refineries", "Offshore platforms", "Petrochemical plants", "LNG terminals",
 "Tank farms", "Compressor stations",
 ],
 },
 {
 slug: "agriculture",
 name: "Agriculture",
 icon: Leaf,
 items: [
 "Grain elevators", "Feed mills", "Seed plants", "Flour mills",
 "Farm processing", "Grain storage",
 ],
 },
 {
 slug: "recycling",
 name: "Recycling",
 icon: Recycle,
 items: [
 "Metal recycling", "Battery recycling", "Plastic recycling", "E-waste recycling",
 "Wood recycling", "Glass recycling",
 ],
 },
 {
 slug: "environmental",
 name: "Environmental Services",
 icon: Droplets,
 items: [
 "Wastewater treatment", "Water treatment", "Air pollution control",
 "Dust collection", "Hazardous waste", "Environmental remediation",
 ],
 },
 {
 slug: "laboratories",
 name: "Laboratories & Research",
 icon: Microscope,
 items: [
 "Research labs", "Universities", "Government labs", "Material testing",
 "Analytical laboratories",
 ],
 },
 {
 slug: "logistics",
 name: "Logistics & Warehousing",
 icon: Warehouse,
 items: [
 "Warehouses", "Distribution centers", "Bulk material handling",
 "Conveyor systems", "Ports", "Shipping terminals",
 ],
 },
 {
 slug: "marine",
 name: "Marine & Rail",
 icon: Ship,
 items: [
 "Shipbuilding", "Ship repair", "Naval facilities", "Port maintenance",
 "Railcar manufacturing", "Rail maintenance", "Wheel shops",
 ],
 },
 {
 slug: "universities",
 name: "Universities & Government",
 icon: GraduationCap,
 items: ["Research laboratories", "National laboratories", "Government facilities"],
 },
 {
 slug: "general-maintenance",
 name: "General Industrial Maintenance",
 icon: Wrench,
 items: [
 "Factory housekeeping", "Machine cleaning", "Production line cleaning",
 "Preventive maintenance", "Shutdown cleaning", "Dust recovery", "Powder recovery",
 "Spill cleanup", "Silo cleaning", "Hopper cleaning", "Mixer cleaning",
 "Blender cleaning", "Reactor cleaning", "Tank cleaning", "Furnace cleaning",
 "Kiln cleaning", "Oven cleaning", "Conveyor cleaning", "Dust collector cleaning",
 "Warehouse housekeeping",
 "Filter cleaning",
 ],
 },
 {
 slug: "by-task",
 name: "By Task (Cross-Industry)",
 icon: Boxes,
 items: [
 "Combustible dust cleanup", "Aluminum dust collection", "Magnesium dust cleanup",
 "Titanium dust recovery", "Carbon black vacuuming", "Powder transfer",
 "Fine powder recovery", "Hazardous dust removal", "Static-safe vacuuming",
 "Classified area cleaning", "Oil & coolant recovery", "Slurry collection",
 "Chip & coolant separation", "Liquid spill cleanup", "Cleanroom vacuuming",
 "Continuous duty vacuuming", "Production line cleaning",
 ],
 },
];

export type FeaturedApplication = {
 slug: string;
 name: string;
 category: string;
 blurb: string;
};

/** Applications with dedicated deep-dive pages. */
export const FEATURED_APPLICATIONS: FeaturedApplication[] = [
 {
 slug: "grinding-dust",
 name: "Grinding Dust",
 category: "Metalworking & Machining",
 blurb:
 "The operation that supplies both fuel and ignition — fine metal and sparks from one pass.",
 },
 {
 slug: "cleanroom-vacuuming",
 name: "Cleanroom Vacuuming",
 category: "General Maintenance",
 blurb:
 "Cleaning a controlled area without adding to its particle count — HEPA and ULPA filtered.",
 },
 {
 slug: "cnc-machining",
 name: "CNC Machining",
 category: "Metalworking & Machining",
 blurb:
 "Metal chips, combustible fines and coolant mist — recovered safely at the machine.",
 },
 {
 slug: "metal-3d-printing",
 name: "Metal 3D Printing",
 category: "Additive Manufacturing",
 blurb:
 "Reactive AM powders and chamber condensate — recovered safely, reuse stream protected.",
 },
 {
 slug: "powder-coating",
 name: "Powder Coating",
 category: "Metalworking & Machining",
 blurb:
 "Combustible polymer powder in an electrostatic process — grounded recovery, streams kept separate.",
 },
 {
 slug: "silo-cleaning",
 name: "Silo & Bin Cleaning",
 category: "General Industrial Maintenance",
 blurb:
 "Reach-first interior recovery from manways — entry becomes the permitted exception.",
 },
 {
 slug: "welding-cleanup",
 name: "Welding & Fabrication",
 category: "Metalworking & Machining",
 blurb:
 "The arc makes fume, the floor makes dust — recovery for everything that settles.",
 },
 {
 slug: "warehouse-housekeeping",
 name: "Warehouse Housekeeping",
 category: "General Industrial Maintenance",
 blurb:
 "A warehouse inherits its inventory's dust — rack tops to dock on one documented rotation.",
 },
 {
 slug: "dust-collector-cleaning",
 name: "Dust Collector Cleaning",
 category: "General Industrial Maintenance",
 blurb:
 "The vessel that concentrates the hazard by design — service it contained, element to drum.",
 },
 {
 slug: "spill-cleanup",
 name: "Spill Cleanup",
 category: "General Industrial Maintenance",
 blurb:
 "Incidental releases handled in minutes — and the emergency line drawn before the spill.",
 },
 {
 slug: "abrasive-blasting",
 name: "Abrasive Blasting",
 category: "Metalworking & Machining",
 blurb:
 "Two dusts in one — reclaimable spent media separated from toxic coating debris.",
 },
 {
 slug: "deburring",
 name: "Deburring & Finishing",
 category: "Metalworking & Machining",
 blurb:
 "The finest, most reactive metal fraction a shop makes — captured at bench and machine.",
 },
 {
 slug: "mixing-blending",
 name: "Mixing & Blending",
 category: "Chemical Processing",
 blurb:
 "Every batch sheds the powder it's made from — captured at charge, discharge and changeover.",
 },
 {
 slug: "tank-cleaning",
 name: "Tank & Vessel Cleaning",
 category: "General Industrial Maintenance",
 blurb:
 "The vessel remembers what it held — reach-first recovery of wet and dry residue.",
 },
 {
 slug: "bagging-dumping",
 name: "Bagging & Dumping",
 category: "General Industrial Maintenance",
 blurb:
 "The dustiest moments in powder handling — captured at the fill and dump points.",
 },
 {
 slug: "thermal-spray",
 name: "Thermal Spray & Coating",
 category: "Metalworking & Machining",
 blurb:
 "The overspray that never adheres is combustible powder — captured and reclaimed.",
 },
 {
 slug: "conveyor-housekeeping",
 name: "Conveyor & Transfer-Point Housekeeping",
 category: "General Industrial Maintenance",
 blurb:
 "Transfer points are where fugitive dust is born — cleared along runs before it builds past safe layers.",
 },
 {
 slug: "drum-filling",
 name: "Drum & Container Filling",
 category: "General Industrial Maintenance",
 blurb:
 "As a rigid container fills, displaced air carries dust out — captured right at the fill head.",
 },
 {
 slug: "sanding",
 name: "Sanding & Surface Prep",
 category: "General Industrial Maintenance",
 blurb:
 "Sanding dust is only as safe as its substrate — captured at the tool, matched to the material.",
 },
];
