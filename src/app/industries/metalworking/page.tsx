import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { metalworkingGuide } from "@/lib/data/industry-guides/metalworking";

export const metadata = industryGuideMetadata(metalworkingGuide);

export default function Page() {
  return <IndustryGuide data={metalworkingGuide} />;
}
