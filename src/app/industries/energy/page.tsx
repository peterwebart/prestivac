import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { energyGuide } from "@/lib/data/industry-guides/energy";

export const metadata = industryGuideMetadata(energyGuide);

export default function Page() {
  return <IndustryGuide data={energyGuide} />;
}
