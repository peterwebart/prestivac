import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { paperMillsGuide } from "@/lib/data/industry-guides/paper-mills";

export const metadata = industryGuideMetadata(paperMillsGuide);

export default function Page() {
  return <IndustryGuide data={paperMillsGuide} />;
}
