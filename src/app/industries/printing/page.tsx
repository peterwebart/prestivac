import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { printingGuide } from "@/lib/data/industry-guides/printing";

export const metadata = industryGuideMetadata(printingGuide);

export default function Page() {
  return <IndustryGuide data={printingGuide} />;
}
