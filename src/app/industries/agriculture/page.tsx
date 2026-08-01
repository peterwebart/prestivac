import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { agricultureGuide } from "@/lib/data/industry-guides/agriculture";

export const metadata = industryGuideMetadata(agricultureGuide);

export default function Page() {
  return <IndustryGuide data={agricultureGuide} />;
}
