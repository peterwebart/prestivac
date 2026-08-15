import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { pepperDustGuide } from "@/lib/data/material-guides/pepper-dust";

export const metadata = materialGuideMetadata(pepperDustGuide);

export default function Page() {
  return <MaterialGuide data={pepperDustGuide} />;
}
