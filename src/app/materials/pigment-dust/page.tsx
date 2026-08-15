import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { pigmentDustGuide } from "@/lib/data/material-guides/pigment-dust";

export const metadata = materialGuideMetadata(pigmentDustGuide);

export default function Page() {
  return <MaterialGuide data={pigmentDustGuide} />;
}
