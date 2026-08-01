import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { pharmaceuticalGuide } from "@/lib/data/industry-guides/pharmaceutical";

export const metadata = industryGuideMetadata(pharmaceuticalGuide);

export default function Page() {
  return <IndustryGuide data={pharmaceuticalGuide} />;
}
