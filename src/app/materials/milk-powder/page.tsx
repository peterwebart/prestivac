import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { milkPowderGuide } from "@/lib/data/material-guides/milk-powder";

export const metadata = materialGuideMetadata(milkPowderGuide);

export default function Page() {
  return <MaterialGuide data={milkPowderGuide} />;
}
