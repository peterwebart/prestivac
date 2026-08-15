import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { garlicPowderGuide } from "@/lib/data/material-guides/garlic-powder";

export const metadata = materialGuideMetadata(garlicPowderGuide);

export default function Page() {
  return <MaterialGuide data={garlicPowderGuide} />;
}
