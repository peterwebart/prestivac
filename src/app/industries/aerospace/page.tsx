import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { aerospaceGuide } from "@/lib/data/industry-guides/aerospace";

export const metadata = industryGuideMetadata(aerospaceGuide);

export default function Page() {
  return <IndustryGuide data={aerospaceGuide} />;
}
