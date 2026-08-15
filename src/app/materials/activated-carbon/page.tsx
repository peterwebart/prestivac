import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { activatedCarbonGuide } from "@/lib/data/material-guides/activated-carbon";

export const metadata = materialGuideMetadata(activatedCarbonGuide);

export default function Page() {
  return <MaterialGuide data={activatedCarbonGuide} />;
}
