import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { soyProteinGuide } from "@/lib/data/material-guides/soy-protein";

export const metadata = materialGuideMetadata(soyProteinGuide);

export default function Page() {
  return <MaterialGuide data={soyProteinGuide} />;
}
