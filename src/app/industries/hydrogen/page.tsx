import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { hydrogenGuide } from "@/lib/data/industry-guides/hydrogen";

export const metadata = industryGuideMetadata(hydrogenGuide);

export default function Page() {
  return <IndustryGuide data={hydrogenGuide} />;
}
