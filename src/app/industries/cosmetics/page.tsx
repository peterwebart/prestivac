import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { cosmeticsGuide } from "@/lib/data/industry-guides/cosmetics";

export const metadata = industryGuideMetadata(cosmeticsGuide);

export default function Page() {
  return <IndustryGuide data={cosmeticsGuide} />;
}
