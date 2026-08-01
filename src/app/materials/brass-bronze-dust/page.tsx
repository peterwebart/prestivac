import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { brassBronzeDustGuide } from "@/lib/data/material-guides/brass-bronze-dust";

export const metadata = materialGuideMetadata(brassBronzeDustGuide);

export default function Page() {
  return <MaterialGuide data={brassBronzeDustGuide} />;
}
