import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { educationGuide } from "@/lib/data/industry-guides/education";

export const metadata = industryGuideMetadata(educationGuide);

export default function Page() {
  return <IndustryGuide data={educationGuide} />;
}
