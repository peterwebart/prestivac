import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { zincDustGuide } from "@/lib/data/material-guides/zinc-dust";

export const metadata = materialGuideMetadata(zincDustGuide);

export default function Page() {
  return <MaterialGuide data={zincDustGuide} />;
}
