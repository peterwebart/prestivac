import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { thermalSprayGuide } from "@/lib/data/application-guides/thermal-spray";

export const metadata = applicationGuideMetadata(thermalSprayGuide);

export default function Page() {
  return <ApplicationGuide data={thermalSprayGuide} />;
}
