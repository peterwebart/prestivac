import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { metal3dPrintingGuide } from "@/lib/data/application-guides/metal-3d-printing";

export const metadata = applicationGuideMetadata(metal3dPrintingGuide);

export default function Page() {
  return <ApplicationGuide data={metal3dPrintingGuide} />;
}
