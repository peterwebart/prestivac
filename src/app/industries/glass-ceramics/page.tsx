import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { glassCeramicsGuide } from "@/lib/data/industry-guides/glass-ceramics";

export const metadata = industryGuideMetadata(glassCeramicsGuide);

export default function Page() {
  return <IndustryGuide data={glassCeramicsGuide} />;
}
