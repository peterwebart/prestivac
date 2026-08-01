import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { coalGuide } from "@/lib/data/industry-guides/coal";

export const metadata = industryGuideMetadata(coalGuide);

export default function Page() {
  return <IndustryGuide data={coalGuide} />;
}
