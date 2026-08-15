import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { dyePowderGuide } from "@/lib/data/material-guides/dye-powder";

export const metadata = materialGuideMetadata(dyePowderGuide);

export default function Page() {
  return <MaterialGuide data={dyePowderGuide} />;
}
