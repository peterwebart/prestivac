import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { miningGuide } from "@/lib/data/industry-guides/mining";

export const metadata = industryGuideMetadata(miningGuide);

export default function Page() {
  return <IndustryGuide data={miningGuide} />;
}
