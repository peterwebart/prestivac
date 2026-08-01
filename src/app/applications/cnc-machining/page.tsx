import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { cncMachiningGuide } from "@/lib/data/application-guides/cnc-machining";

export const metadata = applicationGuideMetadata(cncMachiningGuide);

export default function Page() {
  return <ApplicationGuide data={cncMachiningGuide} />;
}
