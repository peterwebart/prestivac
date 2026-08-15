import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { peaProteinGuide } from "@/lib/data/material-guides/pea-protein";

export const metadata = materialGuideMetadata(peaProteinGuide);

export default function Page() {
  return <MaterialGuide data={peaProteinGuide} />;
}
