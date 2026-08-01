import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { silicaDustGuide } from "@/lib/data/material-guides/silica-dust";

export const metadata = materialGuideMetadata(silicaDustGuide);

export default function Page() {
  return <MaterialGuide data={silicaDustGuide} />;
}
