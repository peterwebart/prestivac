import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { cannabisGuide } from "@/lib/data/industry-guides/cannabis";

export const metadata = industryGuideMetadata(cannabisGuide);

export default function Page() {
  return <IndustryGuide data={cannabisGuide} />;
}
