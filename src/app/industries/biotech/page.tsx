import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { biotechGuide } from "@/lib/data/industry-guides/biotech";

export const metadata = industryGuideMetadata(biotechGuide);

export default function Page() {
  return <IndustryGuide data={biotechGuide} />;
}
