import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { foundryGuide } from "@/lib/data/industry-guides/foundry";

export const metadata = industryGuideMetadata(foundryGuide);

export default function Page() {
  return <IndustryGuide data={foundryGuide} />;
}
