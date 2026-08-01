import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { siloCleaningGuide } from "@/lib/data/application-guides/silo-cleaning";

export const metadata = applicationGuideMetadata(siloCleaningGuide);

export default function Page() {
  return <ApplicationGuide data={siloCleaningGuide} />;
}
