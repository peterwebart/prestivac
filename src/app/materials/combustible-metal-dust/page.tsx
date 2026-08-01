import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { combustibleMetalDustGuide } from "@/lib/data/material-guides/combustible-metal-dust";

export const metadata = materialGuideMetadata(combustibleMetalDustGuide);

export default function Page() {
  return <MaterialGuide data={combustibleMetalDustGuide} />;
}
