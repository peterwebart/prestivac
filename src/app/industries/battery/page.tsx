import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { batteryGuide } from "@/lib/data/industry-guides/battery";

export const metadata = industryGuideMetadata(batteryGuide);

export default function Page() {
  return <IndustryGuide data={batteryGuide} />;
}
