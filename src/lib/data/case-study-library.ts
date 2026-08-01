/**
 * Case Study Library — aggregator.
 *
 * One file per study lives in `case-study-content/`. To add a study:
 * drop a new file there following the CaseStudy type, import it below and
 * append it to CASE_STUDY_LIBRARY. Routes, sitemap, archive filters and
 * JSON-LD all derive from this array automatically.
 */
import { aluminumDustAutomotiveMachining } from "@/lib/data/case-study-content/aluminum-dust-automotive-machining";
import { flourDustCommercialBakery } from "@/lib/data/case-study-content/flour-dust-commercial-bakery";
import { graphiteDustBatteryPlant } from "@/lib/data/case-study-content/graphite-dust-ev-battery-plant";
import { lactoseDustPharmaceuticalTablet } from "@/lib/data/case-study-content/lactose-dust-pharmaceutical-tablet";
import { titaniumPowderAdditiveManufacturing } from "@/lib/data/case-study-content/titanium-powder-additive-manufacturing";
import { woodDustFurnitureManufacturing } from "@/lib/data/case-study-content/wood-dust-furniture-manufacturing";
import { coatingPowderAutomotiveFinishing } from "@/lib/data/case-study-content/coating-powder-automotive-finishing";
import { magnesiumFinesAutomotiveComponents } from "@/lib/data/case-study-content/magnesium-fines-automotive-components";
import { grainDustElevatorFeedMill } from "@/lib/data/case-study-content/grain-dust-elevator-feed-mill";
import { sulfurDustSpecialtyChemicalPlant } from "@/lib/data/case-study-content/sulfur-dust-specialty-chemical-plant";
import { silicaSandFoundry } from "@/lib/data/case-study-content/silica-sand-foundry";
import { zincWhiskerDataCenter } from "@/lib/data/case-study-content/zinc-whisker-data-center";
import { siliconDustSemiconductorFab } from "@/lib/data/case-study-content/silicon-dust-semiconductor-fab";
import { paperDustPackagingConverting } from "@/lib/data/case-study-content/paper-dust-packaging-converting";
import { coalDustPowerGeneration } from "@/lib/data/case-study-content/coal-dust-power-generation";
import { berylliumDustNationalLaboratory } from "@/lib/data/case-study-content/beryllium-dust-national-laboratory";
import type { CaseStudy } from "@/lib/data/case-study-types";

export type { CaseStudy, CaseStudyTaxonomy } from "@/lib/data/case-study-types";

export const CASE_STUDY_LIBRARY: CaseStudy[] = [
 aluminumDustAutomotiveMachining,
 lactoseDustPharmaceuticalTablet,
 flourDustCommercialBakery,
 titaniumPowderAdditiveManufacturing,
 graphiteDustBatteryPlant,
 woodDustFurnitureManufacturing,
 coatingPowderAutomotiveFinishing,
 magnesiumFinesAutomotiveComponents,
 grainDustElevatorFeedMill,
 sulfurDustSpecialtyChemicalPlant,
 silicaSandFoundry,
 zincWhiskerDataCenter,
 siliconDustSemiconductorFab,
  paperDustPackagingConverting,
  coalDustPowerGeneration,
  berylliumDustNationalLaboratory,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
 return CASE_STUDY_LIBRARY.find((study) => study.slug === slug);
}
