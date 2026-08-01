import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { abrasiveBlastingGuide } from "@/lib/data/application-guides/abrasive-blasting";

export const metadata = applicationGuideMetadata(abrasiveBlastingGuide);

export default function Page() {
  return <ApplicationGuide data={abrasiveBlastingGuide} />;
}
