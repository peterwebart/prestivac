import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cadmiumDustGuide } from "@/lib/data/material-guides/cadmium-dust";

export const metadata = materialGuideMetadata(cadmiumDustGuide);

export default function Page() {
  return <MaterialGuide data={cadmiumDustGuide} />;
}
