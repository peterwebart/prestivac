import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { proteinPowderGuide } from "@/lib/data/material-guides/protein-powder";

export const metadata = materialGuideMetadata(proteinPowderGuide);

export default function Page() {
  return <MaterialGuide data={proteinPowderGuide} />;
}
