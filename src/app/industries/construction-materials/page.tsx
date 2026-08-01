import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { constructionMaterialsGuide } from "@/lib/data/industry-guides/construction-materials";

export const metadata = industryGuideMetadata(constructionMaterialsGuide);

export default function Page() {
  return <IndustryGuide data={constructionMaterialsGuide} />;
}
