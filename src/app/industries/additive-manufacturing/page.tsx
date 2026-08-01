import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { additiveManufacturingGuide } from "@/lib/data/industry-guides/additive-manufacturing";

export const metadata = industryGuideMetadata(additiveManufacturingGuide);

export default function Page() {
  return <IndustryGuide data={additiveManufacturingGuide} />;
}
