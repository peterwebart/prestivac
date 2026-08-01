import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { automotiveGuide } from "@/lib/data/industry-guides/automotive";

export const metadata = industryGuideMetadata(automotiveGuide);

export default function Page() {
  return <IndustryGuide data={automotiveGuide} />;
}
