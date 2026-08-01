import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { woodworkingGuide } from "@/lib/data/industry-guides/woodworking";

export const metadata = industryGuideMetadata(woodworkingGuide);

export default function Page() {
  return <IndustryGuide data={woodworkingGuide} />;
}
