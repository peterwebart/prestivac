import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { calciumDustGuide } from "@/lib/data/material-guides/calcium-dust";

export const metadata = materialGuideMetadata(calciumDustGuide);

export default function Page() {
  return <MaterialGuide data={calciumDustGuide} />;
}
