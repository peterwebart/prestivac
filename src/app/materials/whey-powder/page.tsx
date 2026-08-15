import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { wheyPowderGuide } from "@/lib/data/material-guides/whey-powder";

export const metadata = materialGuideMetadata(wheyPowderGuide);

export default function Page() {
  return <MaterialGuide data={wheyPowderGuide} />;
}
