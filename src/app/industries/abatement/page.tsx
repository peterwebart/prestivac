import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { abatementGuide } from "@/lib/data/industry-guides/abatement";

export const metadata = industryGuideMetadata(abatementGuide);

export default function Page() {
  return <IndustryGuide data={abatementGuide} />;
}
