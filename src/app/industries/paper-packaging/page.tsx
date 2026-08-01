import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { paperPackagingGuide } from "@/lib/data/industry-guides/paper-packaging";

export const metadata = industryGuideMetadata(paperPackagingGuide);

export default function Page() {
  return <IndustryGuide data={paperPackagingGuide} />;
}
