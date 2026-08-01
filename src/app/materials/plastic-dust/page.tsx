import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { plasticDustGuide } from "@/lib/data/material-guides/plastic-dust";

export const metadata = materialGuideMetadata(plasticDustGuide);

export default function Page() {
  return <MaterialGuide data={plasticDustGuide} />;
}
