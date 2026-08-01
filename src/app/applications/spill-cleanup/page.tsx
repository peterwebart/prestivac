import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { spillCleanupGuide } from "@/lib/data/application-guides/spill-cleanup";

export const metadata = applicationGuideMetadata(spillCleanupGuide);

export default function Page() {
  return <ApplicationGuide data={spillCleanupGuide} />;
}
