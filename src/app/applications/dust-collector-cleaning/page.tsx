import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { dustCollectorCleaningGuide } from "@/lib/data/application-guides/dust-collector-cleaning";

export const metadata = applicationGuideMetadata(dustCollectorCleaningGuide);

export default function Page() {
  return <ApplicationGuide data={dustCollectorCleaningGuide} />;
}
