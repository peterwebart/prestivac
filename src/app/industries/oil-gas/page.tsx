import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { oilGasGuide } from "@/lib/data/industry-guides/oil-gas";

export const metadata = industryGuideMetadata(oilGasGuide);

export default function Page() {
  return <IndustryGuide data={oilGasGuide} />;
}
