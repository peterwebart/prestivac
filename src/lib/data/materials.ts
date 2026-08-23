import {
 BatteryCharging,
 ChefHat,
 CircuitBoard,
 FileText,
 FlaskConical,
 Hammer,
 Layers,
 Leaf,
 Pickaxe,
 Pill,
 Recycle,
 Sparkles,
 TreePine,
 Wheat,
 type LucideIcon,
} from "lucide-react";

export type MaterialGroup = {
 slug: string;
 name: string;
 icon: LucideIcon;
 items: string[];
};

/** Full combustible dust & material directory from the client's inventory. */
export const MATERIAL_GROUPS: MaterialGroup[] = [
 {
 slug: "metal-dusts",
 name: "Metal Dusts",
 icon: Hammer,
 items: [
 "Aluminum dust", "Aluminum powder", "Aluminum fines", "Aluminum grinding dust",
 "Magnesium dust", "Magnesium powder", "Titanium dust", "Titanium powder",
 "Zirconium dust", "Lithium metal dust", "Carbon steel dust", "Stainless steel dust",
 "Tool steel dust", "Iron dust", "Iron oxide dust", "Brass dust", "Bronze dust",
 "Cadmium dust", "Beryllium dust", "Arsenic dust", "Combustible metal dust",
 "Calcium metal dust",
 "Copper dust", "Copper fines", "Nickel dust", "Zinc dust", "Chromium dust",
 "Cobalt dust", "Manganese dust", "Lead dust", "Tin dust", "Silver dust",
 "Gold dust", "Precious metal polishing dust",
 ],
 },
 {
 slug: "wood-dusts",
 name: "Wood Dusts",
 icon: TreePine,
 items: [
 "Hardwood dust", "Softwood dust", "MDF dust", "Plywood dust", "Particle board dust",
 "OSB dust", "Sawdust", "Wood sanding dust", "Wood routing dust", "Furniture dust",
 "Veneer dust", "Bamboo dust", "Cork dust",
 ],
 },
 {
 slug: "agricultural-dusts",
 name: "Agricultural Dusts",
 icon: Leaf,
 items: [
 "Grain dust", "Wheat dust", "Corn dust", "Rice dust", "Barley dust", "Oat dust",
 "Rye dust", "Soybean dust", "Flour dust", "Feed dust", "Seed dust", "Cotton dust",
 "Hay dust", "Straw dust", "Tobacco dust", "Hemp dust", "Malt dust",
 ],
 },
 {
 slug: "food-dusts",
 name: "Food Dusts",
 icon: ChefHat,
 items: [
 "Sugar dust", "Powdered sugar", "Flour", "Corn starch", "Potato starch", "Rice starch",
 "Wheat starch", "Cocoa powder", "Chocolate powder", "Coffee dust", "Tea dust",
 "Milk powder", "Whey powder", "Egg powder", "Baking powder", "Baking mix dust",
 "Spice dust", "Garlic powder", "Onion powder", "Cinnamon dust", "Pepper dust",
 "Paprika dust", "Protein powder", "Soy protein", "Pea protein", "Gelatin powder",
 "Breadcrumb dust", "Bakery dust",
 ],
 },
 {
 slug: "pharmaceutical-dusts",
 name: "Pharmaceutical Dusts",
 icon: Pill,
 items: [
 "API dust", "Excipient dust", "Tablet dust", "Capsule dust", "Lactose powder",
 "Microcrystalline cellulose", "Talc", "Blending dust", "Vitamin powder",
 "Nutraceutical powder",
 ],
 },
 {
 slug: "chemical-dusts",
 name: "Chemical Dusts",
 icon: FlaskConical,
 items: [
 "Sulfur dust", "Carbon black", "Activated carbon", "Charcoal dust", "Plastic powder",
 "Resin dust", "Polymer dust", "PVC powder", "Polyethylene powder", "Polypropylene powder",
 "Nylon powder", "Rubber dust", "Pigment dust", "Dye powder", "Fertilizer dust",
 "Urea dust", "Melamine powder",
 ],
 },
 {
 slug: "battery-dusts",
 name: "Battery Manufacturing Dusts",
 icon: BatteryCharging,
 items: [
 "Graphite dust", "Lithium dust", "Cathode powder", "Anode powder", "Nickel powder",
 "Cobalt powder", "Manganese powder", "Conductive carbon", "Battery black mass",
 ],
 },
 {
 slug: "electronics-dusts",
 name: "Electronics Dusts",
 icon: CircuitBoard,
 items: [
 "PCB dust", "Solder dust", "Silicon dust", "Silicon carbide dust",
 "Semiconductor dust", "Ceramic substrate dust",
 ],
 },
 {
 slug: "mining-dusts",
 name: "Mining & Mineral Dusts",
 icon: Pickaxe,
 items: [
 "Coal dust", "Coke dust", "Graphite dust", "Sulfur dust", "Limestone dust",
 "Dolomite dust", "Silica-containing dust", "Asbestos-containing debris", "Cement kiln dust", "Clay dust",
 "Gypsum dust", "Phosphate dust", "Potash dust",
 ],
 },
 {
 slug: "plastics-rubber-dusts",
 name: "Plastics & Rubber Dusts",
 icon: Recycle,
 items: [
 "ABS dust", "PVC dust", "PET dust", "Acrylic dust", "Polycarbonate dust",
 "Polyurethane dust", "Rubber powder", "Tire dust",
 ],
 },
 {
 slug: "additive-manufacturing-powders",
 name: "Additive Manufacturing Powders",
 icon: Layers,
 items: [
 "Titanium powder", "Aluminum powder", "Stainless steel powder", "Inconel powder",
 "Nickel alloy powder", "Polymer printing powder", "Nylon PA12 powder",
 ],
 },
 {
 slug: "paper-textile-dusts",
 name: "Paper & Textile Dusts",
 icon: FileText,
 items: [
 "Paper dust", "Cardboard dust", "Cellulose dust", "Pulp dust", "Tissue dust",
 "Cotton lint", "Cotton dust", "Polyester fiber dust", "Nylon fiber dust",
 "Rayon dust", "Wool dust", "Fabric lint",
 ],
 },
 {
 slug: "biomass-dusts",
 name: "Biomass & Renewable Energy Dusts",
 icon: Wheat,
 items: [
 "Wood pellet dust", "Biomass dust", "Biochar dust", "Pellet dust",
 "Agricultural biomass dust",
 ],
 },
 {
 slug: "misc-dusts",
 name: "Other Combustible Dusts",
 icon: Sparkles,
 items: [
 "Carbon fiber dust", "Fiberglass resin dust", "Composite material dust", "Leather dust",
 "Cork dust", "Rubber crumb", "Resin sanding dust", "Wax powder", "Soap powder",
 "Detergent powder", "Cosmetic powder",
 ],
 },
];

export type FeaturedMaterial = {
 slug: string;
 name: string;
 group: string;
 blurb: string;
};

/** Materials with dedicated deep-dive pages. */
export const FEATURED_MATERIALS: FeaturedMaterial[] = [
 {
  slug: "mercury",
  name: "Mercury",
  group: "Other Combustible Dusts",
  blurb:
   "A liquid metal that vaporises at room temperature — an ordinary vacuum atomises a spill into a building-wide exposure.",
 },
 {
  slug: "milk-powder",
  name: "Milk Powder",
  group: "Food Dusts",
  blurb:
   "Spray-dried dairy powder whose fat content makes deposits sticky and supports self-heating.",
 },
 {
  slug: "whey-powder",
  name: "Whey Powder",
  group: "Food Dusts",
  blurb:
   "A hygroscopic protein powder that cakes deceptively, then breaks back into fines when disturbed.",
 },
 {
  slug: "egg-powder",
  name: "Egg Powder",
  group: "Food Dusts",
  blurb:
   "A protein dust where dispersal is a pathogen and allergen event as well as a fire risk.",
 },
 {
  slug: "spice-dust",
  name: "Spice Dust",
  group: "Food Dusts",
  blurb:
   "Ground spice with volatile oil content that adds a flammable vapour dimension in enclosed mills.",
 },
 {
  slug: "garlic-powder",
  name: "Garlic Powder",
  group: "Food Dusts",
  blurb:
   "Strongly hygroscopic dehydrated powder that cakes hard and travels far from the mill.",
 },
 {
  slug: "onion-powder",
  name: "Onion Powder",
  group: "Food Dusts",
  blurb:
   "Sugar content makes deposits tacky and hygroscopic, so accumulation resists ordinary cleaning.",
 },
 {
  slug: "cinnamon-dust",
  name: "Cinnamon Dust",
  group: "Food Dusts",
  blurb:
   "High volatile oil content produces adherent deposits and a possible vapour component in mills.",
 },
 {
  slug: "pepper-dust",
  name: "Pepper Dust",
  group: "Food Dusts",
  blurb:
   "A combustible dust and potent respiratory irritant, so dispersal is an immediate exposure event.",
 },
 {
  slug: "paprika-dust",
  name: "Paprika Dust",
  group: "Food Dusts",
  blurb:
   "Tacky, intensely staining fines whose visible deposits map where every other dust is settling.",
 },
 {
  slug: "protein-powder",
  name: "Protein Powder",
  group: "Food Dusts",
  blurb:
   "High-throughput blending and tote dumping put large volumes of very fine powder into the air.",
 },
 {
  slug: "soy-protein",
  name: "Soy Protein",
  group: "Food Dusts",
  blurb:
   "A very fine isolate that is a combustible dust and a major allergen at the same time.",
 },
 {
  slug: "pea-protein",
  name: "Pea Protein",
  group: "Food Dusts",
  blurb:
   "Air classification concentrates an extremely fine fraction that settles building-wide.",
 },
 {
  slug: "gelatin-powder",
  name: "Gelatin Powder",
  group: "Food Dusts",
  blurb:
   "Gels on contact with water, so wet cleanup produces an adhesive mass rather than removing it.",
 },
 {
  slug: "activated-carbon",
  name: "Activated Carbon",
  group: "Chemical Dusts",
  blurb:
   "A Group F dust that self-heats, depletes oxygen and carries whatever it adsorbed.",
 },
 {
  slug: "pigment-dust",
  name: "Pigment Dust",
  group: "Chemical Dusts",
  blurb:
   "Two hazards in one category — combustible organics, and inorganics carrying heavy metals.",
 },
 {
  slug: "dye-powder",
  name: "Dye Powder",
  group: "Chemical Dusts",
  blurb:
   "A combustible dust and recognised respiratory sensitiser, where routine airborne load is the risk.",
 },
 {
  slug: "fertilizer-dust",
  name: "Fertilizer Dust",
  group: "Chemical Dusts",
  blurb:
   "Spans combustible organics, inert minerals and strong oxidisers — identification governs everything.",
 },
 {
  slug: "urea-dust",
  name: "Urea Dust",
  group: "Chemical Dusts",
  blurb:
   "Cakes into hard deposits and releases ammonia on thermal decomposition.",
 },
 {
  slug: "corrugated-paper-dust",
  name: "Corrugated Paper Dust",
  group: "Paper & Textile Dusts",
  blurb:
   "Cellulose fibre plus combustible starch adhesive fines, accumulating on overhead steel.",
 },
 {
  slug: "textile-fibers",
  name: "Textile Fibers",
  group: "Paper & Textile Dusts",
  blurb:
   "Class III ignitible fibers rather than Class II dust — a different classification entirely.",
 },
 {
  slug: "conductive-carbon",
  name: "Conductive Carbon",
  group: "Battery Manufacturing Dusts",
  blurb:
   "A Group F carbonaceous dust that also conducts, so deposits can short equipment.",
 },
 {
  slug: "battery-black-mass",
  name: "Battery Black Mass",
  group: "Battery Manufacturing Dusts",
  blurb:
   "Conductive, toxic, possibly water-reactive, and may retain residual stored charge.",
 },
 {
  slug: "phosphate-dust",
  name: "Phosphate Dust",
  group: "Mining & Mineral Dusts",
  blurb:
   "Largely non-combustible; the real hazard is respirable silica, not deflagration.",
 },
 {
  slug: "potash-dust",
  name: "Potash Dust",
  group: "Mining & Mineral Dusts",
  blurb:
   "Non-combustible but corrosive, irritant and hygroscopic enough to cake hard on everything.",
 },
 {
  slug: "metal-additive-manufacturing-powder",
  name: "Metal AM Powder",
  group: "Additive Manufacturing Powders",
  blurb:
   "Group E conductive metal powder, frequently reactive, and valuable enough that method affects reuse.",
 },
 {
  slug: "biomass-dust",
  name: "Biomass Dust",
  group: "Biomass & Renewable Energy Dusts",
  blurb:
   "Variable feedstock with a documented self-heating record in silos and stockpiles.",
 },
 {
  slug: "pellet-dust",
  name: "Pellet Dust",
  group: "Biomass & Renewable Energy Dusts",
  blurb:
   "Attrition creates fines at every transfer, drier and finer than the original feedstock.",
 },
 {
  slug: "sawdust",
  name: "Sawdust",
  group: "Biomass & Renewable Energy Dusts",
  blurb:
   "The invisible fine fraction overhead matters, not the visible shavings on the floor.",
 },
 {
  slug: "agricultural-biomass-dust",
  name: "Agricultural Biomass Dust",
  group: "Biomass & Renewable Energy Dusts",
  blurb:
   "Crop residue carrying crystalline silica and mould spores alongside the combustible fraction.",
 },
 {
  slug: "wax-powder",
  name: "Wax Powder",
  group: "Other Combustible Dusts",
  blurb:
   "Low melting point means deposits soften on warm surfaces and frictional heat melts material.",
 },
 {
  slug: "soap-powder",
  name: "Soap Powder",
  group: "Other Combustible Dusts",
  blurb:
   "Alkaline, hygroscopic, and turns any wetted spill into a slippery film rather than removing it.",
 },
 {
  slug: "detergent-powder",
  name: "Detergent Powder",
  group: "Other Combustible Dusts",
  blurb:
   "Combustible surfactants plus enzyme sensitisers and, in some formulations, oxidising bleach.",
 },
 {
  slug: "cosmetic-powder",
  name: "Cosmetic Powder",
  group: "Other Combustible Dusts",
  blurb:
   "Extremely fine grades where contamination control usually drives the equipment decision.",
 },
 {
 slug: "vermiculite-dust",
 name: "Vermiculite",
 group: "Other Combustible Dusts",
 blurb:
 "A non-combustible mineral whose real hazard is possible asbestos contamination.",
 },
 {
 slug: "tea-dust",
 name: "Tea Dust",
 group: "Food Dusts",
 blurb:
 "Combustible organic dust from cutting, sifting and blending, with a respiratory dimension.",
 },
 {
 slug: "calcium-dust",
 name: "Calcium Dust",
 group: "Metal Dusts",
 blurb:
 "Calcium metal is water-reactive and combustible; calcium carbonate is neither.",
 },
 {
 slug: "cadmium-dust",
 name: "Cadmium Dust",
 group: "Metal Dusts",
 blurb:
 "Regulated carcinogen with its own OSHA standard — contained HEPA recovery, never swept.",
 },
 {
 slug: "beryllium-dust",
 name: "Beryllium Dust",
 group: "Metal Dusts",
 blurb:
 "Hazardous at minute concentrations; sensitisation and chronic beryllium disease.",
 },
 {
 slug: "arsenic-dust",
 name: "Arsenic Dust",
 group: "Metal Dusts",
 blurb:
 "Regulated human carcinogen — smelting flue dust, gallium arsenide, treated timber.",
 },
 {
 slug: "brass-bronze-dust",
 name: "Brass & Bronze Dust",
 group: "Metal Dusts",
 blurb:
 "Copper alloys whose hazard is inherited — zinc fume and lead in free-machining grades.",
 },
 {
 slug: "malt-dust",
 name: "Malt Dust",
 group: "Agricultural Dusts",
 blurb:
 "Combustible grain-derived dust with a respiratory dimension of its own.",
 },
 {
 slug: "combustible-metal-dust",
 name: "Combustible Metal Dust",
 group: "Metal Dusts",
 blurb:
 "Which metals burn as dust, why water is wrong, and what Group E means.",
 },
 {
 slug: "starch-dust",
 name: "Starch Dust",
 group: "Food Dusts",
 blurb:
 "The powder laboratories use as their reference dust — fine, easily suspended and combustible.",
 },
 {
 slug: "aluminum-dust",
 name: "Aluminum Dust",
 group: "Metal Dusts",
 blurb:
 "One of the most severe combustible metal dusts — safe recovery under NFPA 484.",
 },
 {
 slug: "titanium-dust",
 name: "Titanium Dust",
 group: "Metal Dusts",
 blurb:
 "Reactive metal, Class D fire behavior — prevention through immersion recovery.",
 },
 {
 slug: "graphite-dust",
 name: "Graphite Dust",
 group: "Battery Manufacturing Dusts",
 blurb:
 "Combustible and electrically conductive — one dust, two failure modes.",
 },
 {
 slug: "wood-dust",
 name: "Wood Dust",
 group: "Wood Dusts",
 blurb:
 "A classic combustible dust and a classified carcinogen — the fugitive fraction is the gap.",
 },
 {
 slug: "magnesium-dust",
 name: "Magnesium Dust",
 group: "Metal Dusts",
 blurb:
 "The most ignition-sensitive structural metal — wetted collection, vented handling, never airtight.",
 },
 {
 slug: "sulfur-dust",
 name: "Sulfur Dust",
 group: "Chemical Dusts",
 blurb:
 "The lowest ignition energy of any common industrial dust — static control is the program.",
 },
 {
 slug: "carbon-black",
 name: "Carbon Black",
 group: "Chemical Dusts",
 blurb:
 "Cloud hard to ignite, bulk smolders from within — the collected material is the hazard center.",
 },
 {
 slug: "flour-dust",
 name: "Flour Dust",
 group: "Food Dusts",
 blurb:
 "The archetypal combustible dust — and a major allergen in the same material.",
 },
 {
 slug: "grain-dust",
 name: "Grain Dust",
 group: "Agricultural Dusts",
 blurb:
 "The one dust family with its own OSHA standard — schedule below the codified action level.",
 },
 {
 slug: "sugar-dust",
 name: "Sugar Dust",
 group: "Food Dusts",
 blurb:
 "The dust that defined the modern enforcement era — finest grades are the most sensitive.",
 },
 {
 slug: "corn-dust",
 name: "Corn Dust",
 group: "Agricultural Dusts",
 blurb:
 "From elevator to starch room — the fine end behaves like the laboratory benchmark.",
 },
 {
 slug: "cocoa-dust",
 name: "Cocoa Dust",
 group: "Food Dusts",
 blurb:
 "Fat-bearing fines that cling to warm equipment — with allergen duty on the same pass.",
 },
 {
 slug: "coffee-dust",
 name: "Coffee Dust",
 group: "Food Dusts",
 blurb:
 "Chaff against the heat path and fine grounds at the grinder — the roastery's two streams.",
 },
 {
 slug: "coal-dust",
 name: "Coal Dust",
 group: "Mining & Mineral Dusts",
 blurb:
 "The oldest documented dust hazard — volatile-driven reactivity with self-heating discipline.",
 },
 {
 slug: "coke-dust",
 name: "Coke Dust",
 group: "Mining & Mineral Dusts",
 blurb:
 "Less reactive than its parent coal — wrapped in the strictest exposure rules in heavy industry.",
 },
 {
 slug: "cotton-wool-dust",
 name: "Cotton & Wool Dust",
 group: "Paper & Textile Dusts",
 blurb:
 "The byssinosis standard's fine fraction — and the flyings that earned their own hazard class.",
 },
 {
 slug: "concrete-cement-dust",
 name: "Concrete & Cement Dust",
 group: "Mining & Mineral Dusts",
 blurb:
 "The honest inert page — caustic chemistry, silica at the saw, and volume, not explosions.",
 },
 {
 slug: "silica-dust",
 name: "Silica Dust",
 group: "Mining & Mineral Dusts",
 blurb:
 "The oldest occupational disease on record — a numeric exposure limit and no explosion story at all.",
 },
 {
 slug: "asbestos",
 name: "Asbestos",
 group: "Mining & Mineral Dusts",
 blurb:
 "Installed as fire protection, classified Group 1 — framework-first handling, HEPA within it.",
 },
 {
 slug: "lead-dust",
 name: "Lead Dust",
 group: "Metal Dusts",
 blurb:
 "The dust that follows workers home — a numeric limit, named equipment, and hygiene in the rules.",
 },
 {
 slug: "copper-dust",
 name: "Copper Dust",
 group: "Metal Dusts",
 blurb:
 "The least ignition-prone metal family — hazards hide in conduction, companions and exposure.",
 },
 {
 slug: "plastic-dust",
 name: "Plastic & Polymer Dust",
 group: "Plastics & Rubber Dusts",
 blurb:
 "Most thermoplastics and resins are combustible — and the insulating dust supplies its own static ignition.",
 },
 {
 slug: "zinc-dust",
 name: "Zinc Dust",
 group: "Metal Dusts",
 blurb:
 "A combustible metal whose reaction with moisture and acids liberates flammable hydrogen.",
 },
 {
 slug: "nickel-dust",
 name: "Nickel Dust",
 group: "Metal Dusts",
 blurb:
 "A combustible metal whose health hazard rivals its fire hazard — carcinogen and sensitizer.",
 },
 {
 slug: "cobalt-dust",
 name: "Cobalt Dust",
 group: "Metal Dusts",
 blurb:
 "The metal where health leads — carcinogen, sensitizer, and the cause of hard-metal lung disease.",
 },
 {
 slug: "lithium-dust",
 name: "Lithium Dust",
 group: "Metal Dusts",
 blurb:
 "The water-reactive metal of the battery boom — reacts with moisture, Class D, kept dry.",
 },
 {
 slug: "iron-dust",
 name: "Iron & Steel Dust",
 group: "Metal Dusts",
 blurb:
 "Everywhere and most often dismissed — fine iron is a genuine combustible metal dust.",
 },
 {
 slug: "chromium-dust",
 name: "Chromium Dust",
 group: "Metal Dusts",
 blurb:
 "The hazard depends on oxidation state — Cr(VI) is a potent carcinogen; metallic Cr is a combustible metal.",
 },
 {
 slug: "zirconium-dust",
 name: "Zirconium Dust",
 group: "Metal Dusts",
 blurb:
 "Among the most pyrophoric metals — extremely low ignition energy, often kept wet during handling.",
 },
 {
 slug: "carbon-fiber-dust",
 name: "Carbon Fiber Dust",
 group: "Other Combustible Dusts",
 blurb:
 "The dust that shorts what others leave alone — electrically conductive, an irritant, fiber plus resin.",
 },
 {
 slug: "tin-dust",
 name: "Tin Dust",
 group: "Metal Dusts",
 blurb:
 "The mild metal that travels with worse company — lead in old solder and flux fume.",
 },
 {
 slug: "manganese-dust",
 name: "Manganese Dust",
 group: "Metal Dusts",
 blurb:
 "The neurotoxin in ordinary welding fume — manganism, present in nearly all steel.",
 },
 {
 slug: "rubber-dust",
 name: "Rubber Dust",
 group: "Plastics & Rubber Dusts",
 blurb:
 "A combustible dust carrying a passenger — heavily loaded with readily-ignitable carbon black.",
 },
 {
 slug: "paper-dust",
 name: "Paper & Pulp Dust",
 group: "Paper & Textile Dusts",
 blurb:
 "Combustible cellulose that mats and clings — the shared dust behind paper, print and packaging.",
 },
 {
 slug: "leather-dust",
 name: "Leather Dust",
 group: "Other Combustible Dusts",
 blurb:
 "A combustible organic dust with a chemical twist — chrome-tanned leather carries chromium.",
 },
 {
 slug: "cork-dust",
 name: "Cork Dust",
 group: "Wood Dusts",
 blurb:
 "It surprises twice — a genuinely combustible natural dust, and a cause of cork worker's lung.",
 },
 {
 slug: "tobacco-dust",
 name: "Tobacco Dust",
 group: "Agricultural Dusts",
 blurb:
 "A combustible farm dust that carries an active compound — grain-dust physics plus nicotine.",
 },
];
