import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { metalAdditiveManufacturingPowderGuide } from "@/lib/data/material-guides/metal-additive-manufacturing-powder";

export const metadata = materialGuideMetadata(metalAdditiveManufacturingPowderGuide);

export default function Page() {
  return <MaterialGuide data={metalAdditiveManufacturingPowderGuide} />;
}
