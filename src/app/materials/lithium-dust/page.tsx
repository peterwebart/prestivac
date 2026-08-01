import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { lithiumDustGuide } from "@/lib/data/material-guides/lithium-dust";

export const metadata = materialGuideMetadata(lithiumDustGuide);

export default function Page() {
  return <MaterialGuide data={lithiumDustGuide} />;
}
