import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { gelatinPowderGuide } from "@/lib/data/material-guides/gelatin-powder";

export const metadata = materialGuideMetadata(gelatinPowderGuide);

export default function Page() {
  return <MaterialGuide data={gelatinPowderGuide} />;
}
