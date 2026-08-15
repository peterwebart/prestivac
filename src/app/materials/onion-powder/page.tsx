import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { onionPowderGuide } from "@/lib/data/material-guides/onion-powder";

export const metadata = materialGuideMetadata(onionPowderGuide);

export default function Page() {
  return <MaterialGuide data={onionPowderGuide} />;
}
