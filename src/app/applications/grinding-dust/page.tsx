import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { grindingDustGuide } from "@/lib/data/application-guides/grinding-dust";

export const metadata = applicationGuideMetadata(grindingDustGuide);

export default function Page() {
  return <ApplicationGuide data={grindingDustGuide} />;
}
