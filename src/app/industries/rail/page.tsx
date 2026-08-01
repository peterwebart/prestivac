import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { railGuide } from "@/lib/data/industry-guides/rail";

export const metadata = industryGuideMetadata(railGuide);

export default function Page() {
  return <IndustryGuide data={railGuide} />;
}
