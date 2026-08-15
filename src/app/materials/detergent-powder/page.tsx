import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { detergentPowderGuide } from "@/lib/data/material-guides/detergent-powder";

export const metadata = materialGuideMetadata(detergentPowderGuide);

export default function Page() {
  return <MaterialGuide data={detergentPowderGuide} />;
}
