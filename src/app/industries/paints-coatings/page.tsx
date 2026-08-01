import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { paintsCoatingsGuide } from "@/lib/data/industry-guides/paints-coatings";

export const metadata = industryGuideMetadata(paintsCoatingsGuide);

export default function Page() {
  return <IndustryGuide data={paintsCoatingsGuide} />;
}
