import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { berylliumDustGuide } from "@/lib/data/material-guides/beryllium-dust";

export const metadata = materialGuideMetadata(berylliumDustGuide);

export default function Page() {
  return <MaterialGuide data={berylliumDustGuide} />;
}
