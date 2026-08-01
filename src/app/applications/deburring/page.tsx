import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { deburringGuide } from "@/lib/data/application-guides/deburring";

export const metadata = applicationGuideMetadata(deburringGuide);

export default function Page() {
  return <ApplicationGuide data={deburringGuide} />;
}
