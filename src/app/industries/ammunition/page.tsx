import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { ammunitionGuide } from "@/lib/data/industry-guides/ammunition";

export const metadata = industryGuideMetadata(ammunitionGuide);

export default function Page() {
  return <IndustryGuide data={ammunitionGuide} />;
}
