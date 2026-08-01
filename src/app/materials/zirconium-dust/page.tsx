import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { zirconiumDustGuide } from "@/lib/data/material-guides/zirconium-dust";

export const metadata = materialGuideMetadata(zirconiumDustGuide);

export default function Page() {
  return <MaterialGuide data={zirconiumDustGuide} />;
}
