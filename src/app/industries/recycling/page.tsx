import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { recyclingGuide } from "@/lib/data/industry-guides/recycling";

export const metadata = industryGuideMetadata(recyclingGuide);

export default function Page() {
  return <IndustryGuide data={recyclingGuide} />;
}
