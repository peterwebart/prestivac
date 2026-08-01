import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { textileGuide } from "@/lib/data/industry-guides/textile";

export const metadata = industryGuideMetadata(textileGuide);

export default function Page() {
  return <IndustryGuide data={textileGuide} />;
}
