import { AlertTriangle, Filter, Flame, ShieldCheck, Wind, Zap } from "lucide-react";

import type { IndustryGuideData } from "@/components/templates/industry-guide";

export const energyGuide: IndustryGuideData = {
 slug: "energy",
 name: "Power Generation",
 titleAccent: "power generation",
 seo: {
 title: "How to Safely Recover Dust in Power Generation?",
 description:
 "Powering the grid means handling combustible fuel dust by the ton — pulverized coal and milled biomass are fine, highly explosive dusts, fuel-handling conveyors shed fugitive fuel everywhere, and fly ash adds a respirable, sometimes silica-bearing fraction. Rated recovery that supports the plant's deflagration and dust-collection systems.",
 },
 heroIntro:
 "The industry where powering the grid means handling combustible fuel dust by the ton — pulverized coal and milled biomass are among the finest and most explosive dusts in industry, fuel-handling conveyors shed fugitive fuel across the plant, and fly ash adds a respirable, sometimes silica-bearing fraction. Recovery here supports, never replaces, the plant's explosion-protection and dust-collection systems.",
 badges: [
 { icon: ShieldCheck, title: "Fuel-Dust Aware", detail: "Coal & biomass at scale" },
 { icon: Flame, title: "Combustible Fuel Dust", detail: "Pulverized and highly explosive" },
 { icon: Filter, title: "HEPA Filtration", detail: "Fly ash & fines retained" },
 { icon: Zap, title: "Built for Power Plants", detail: "Fuel handling to ash" },
 ],
 stagesIntro:
 "A fuel-fired power plant moves fuel from pile to boiler and manages the ash that results, generating combustible fuel dust and respirable ash along the way. Walk the stages where recovery belongs.",
 stages: [
 { label: "Fuel receiving & storage", detail: "Coal and biomass arrive and are stored in piles and silos; handling sheds fuel dust from the first transfer, and stored biomass carries its own self-heating watch." },
 { label: "Fuel handling & conveying", detail: "Conveyors and transfer points move fuel across the plant, shedding fugitive combustible dust at every drop — the accumulation that housekeeping targets." },
 { label: "Pulverizing & milling", detail: "Pulverizers and mills reduce fuel to the fine powder burners need — the finest, most explosive dust in the plant, captured with grounded, rated recovery." },
 { label: "Biomass & pellet handling", detail: "Wood pellets and biomass fuel are combustible dusts with self-heating and deflagration behavior, handled with the same rated discipline as coal." },
 { label: "Boiler & combustion", detail: "Combustion is enclosed; housekeeping around the boiler addresses settled fuel dust and prevents fugitive accumulation on hot surfaces and structures." },
 { label: "Fly ash handling", detail: "Fly ash is fine and can be silica-bearing; collection-hopper cleanout and spill recovery use HEPA-retained equipment to control the respirable fraction." },
 { label: "Baghouse & precipitator", detail: "Dust-collection equipment concentrates captured ash; maintenance and cleanout are recovered sealed, supporting the plant's primary collection systems." },
 { label: "Housekeeping", detail: "At the scale power generation handles fuel, fugitive combustible dust accumulates fast, so rated recovery keeps it below the thresholds deflagration practice targets." },
 ],
 challengesHeading: "Combustible fuel dust at grid scale",
 challenges: [
 { icon: Flame, title: "Pulverized Fuel Dust", detail: "Pulverized coal and milled biomass are fine, highly explosive combustible dusts — the heart of the power-plant dust hazard, handled with grounded, rated recovery." },
 { icon: AlertTriangle, title: "Biomass Is Combustible", detail: "Wood pellets and biomass fuel are combustible dusts with self-heating and deflagration behavior, no milder than coal on the ignition side." },
 { icon: Wind, title: "Fuel-Handling Fugitive Dust", detail: "Conveyors and transfer points shed fuel dust across the plant — the fugitive accumulation that scheduled housekeeping is built to remove." },
 { icon: Zap, title: "Fly Ash", detail: "Fly ash is fine and can be silica-bearing, so hopper cleanout and spill recovery demand HEPA-retained equipment for the respirable fraction." },
 { icon: ShieldCheck, title: "Dust By The Ton", detail: "Power generation handles fuel at enormous scale, so fugitive combustible dust accumulates quickly in handling areas between cleanings." },
 { icon: Filter, title: "Supports Deflagration Systems", detail: "Recovery supports — never replaces — the plant's dust-collection and explosion-protection systems, keeping fuel dust below layer thresholds." },
 ],
 materialsHeading: "What power generation handles",
 materials: [
 { name: "Pulverized coal dust", combustible: "Yes — explosive", approach: "Grounded, rated recovery on the deflagration logic", href: "/materials/coal-dust" },
 { name: "Biomass & wood-pellet dust", combustible: "Yes — self-heating", approach: "Rated recovery; watch stored-fuel self-heating", href: "/materials/wood-dust" },
 { name: "Fly ash", combustible: "No — respirable, some silica", approach: "HEPA-retained recovery for the respirable fraction", href: "/materials/silica-dust" },
 { name: "Petcoke & alternative fuels", combustible: "Yes — combustible carbon", approach: "Rated recovery per the fuel", href: "/materials/coke-dust" },
 { name: "Coal & fuel fines (handling)", combustible: "Yes", approach: "Grounded, rated recovery at transfer points", href: "/materials/coal-dust" },
 { name: "General plant dust", combustible: "Varies", approach: "Routine HEPA-retained recovery" },
 ],
 materialsDirectory: { label: "the full materials directory", href: "/materials" },
 applicationsHeading: "Applications in power generation",
 applicationCategorySlug: "energy",
 recommended: ["explosion-proof-vacuums", "hepa-vacuums", "industrial-vacuums", "central-vacuum-systems"],
 studySlug: "coal-dust-power-generation",
};
