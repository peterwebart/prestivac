import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { phosphateDustGuide } from "@/lib/data/material-guides/phosphate-dust";

export const metadata = materialGuideMetadata(phosphateDustGuide);

export default function Page() {
  return <MaterialGuide data={phosphateDustGuide} />;
}
