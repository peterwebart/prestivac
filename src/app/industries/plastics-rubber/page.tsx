import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { plasticsRubberGuide } from "@/lib/data/industry-guides/plastics-rubber";

export const metadata = industryGuideMetadata(plasticsRubberGuide);

export default function Page() {
  return <IndustryGuide data={plasticsRubberGuide} />;
}
