import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { chemicalGuide } from "@/lib/data/industry-guides/chemical";

export const metadata = industryGuideMetadata(chemicalGuide);

export default function Page() {
  return <IndustryGuide data={chemicalGuide} />;
}
