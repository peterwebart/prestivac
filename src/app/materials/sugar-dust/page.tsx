import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { sugarDustGuide } from "@/lib/data/material-guides/sugar-dust";

export const metadata = materialGuideMetadata(sugarDustGuide);

export default function Page() {
  return <MaterialGuide data={sugarDustGuide} />;
}
