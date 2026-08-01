import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { dataCentersGuide } from "@/lib/data/industry-guides/data-centers";

export const metadata = industryGuideMetadata(dataCentersGuide);

export default function Page() {
  return <IndustryGuide data={dataCentersGuide} />;
}
