import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { conductiveCarbonGuide } from "@/lib/data/material-guides/conductive-carbon";

export const metadata = materialGuideMetadata(conductiveCarbonGuide);

export default function Page() {
  return <MaterialGuide data={conductiveCarbonGuide} />;
}
