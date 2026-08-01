import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { weldingCleanupGuide } from "@/lib/data/application-guides/welding-cleanup";

export const metadata = applicationGuideMetadata(weldingCleanupGuide);

export default function Page() {
  return <ApplicationGuide data={weldingCleanupGuide} />;
}
