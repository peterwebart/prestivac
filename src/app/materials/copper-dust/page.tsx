import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { copperDustGuide } from "@/lib/data/material-guides/copper-dust";

export const metadata = materialGuideMetadata(copperDustGuide);

export default function Page() {
  return <MaterialGuide data={copperDustGuide} />;
}
