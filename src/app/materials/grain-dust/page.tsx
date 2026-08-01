import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { grainDustGuide } from "@/lib/data/material-guides/grain-dust";

export const metadata = materialGuideMetadata(grainDustGuide);

export default function Page() {
  return <MaterialGuide data={grainDustGuide} />;
}
