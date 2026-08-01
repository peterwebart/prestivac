import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { concreteCementDustGuide } from "@/lib/data/material-guides/concrete-cement-dust";

export const metadata = materialGuideMetadata(concreteCementDustGuide);

export default function Page() {
  return <MaterialGuide data={concreteCementDustGuide} />;
}
