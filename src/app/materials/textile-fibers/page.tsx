import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { textileFibersGuide } from "@/lib/data/material-guides/textile-fibers";

export const metadata = materialGuideMetadata(textileFibersGuide);

export default function Page() {
  return <MaterialGuide data={textileFibersGuide} />;
}
