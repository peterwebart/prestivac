import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { baggingDumpingGuide } from "@/lib/data/application-guides/bagging-dumping";

export const metadata = applicationGuideMetadata(baggingDumpingGuide);

export default function Page() {
  return <ApplicationGuide data={baggingDumpingGuide} />;
}
