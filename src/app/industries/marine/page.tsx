import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { marineGuide } from "@/lib/data/industry-guides/marine";

export const metadata = industryGuideMetadata(marineGuide);

export default function Page() {
  return <IndustryGuide data={marineGuide} />;
}
