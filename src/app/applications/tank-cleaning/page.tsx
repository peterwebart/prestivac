import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { tankCleaningGuide } from "@/lib/data/application-guides/tank-cleaning";

export const metadata = applicationGuideMetadata(tankCleaningGuide);

export default function Page() {
  return <ApplicationGuide data={tankCleaningGuide} />;
}
