import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { electronicsGuide } from "@/lib/data/industry-guides/electronics";

export const metadata = industryGuideMetadata(electronicsGuide);

export default function Page() {
  return <IndustryGuide data={electronicsGuide} />;
}
