import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { cleanroomsGuide } from "@/lib/data/industry-guides/cleanrooms";

export const metadata = industryGuideMetadata(cleanroomsGuide);

export default function Page() {
  return <IndustryGuide data={cleanroomsGuide} />;
}
