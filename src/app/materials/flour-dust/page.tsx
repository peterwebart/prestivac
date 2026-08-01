import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { flourDustGuide } from "@/lib/data/material-guides/flour-dust";

export const metadata = materialGuideMetadata(flourDustGuide);

export default function Page() {
  return <MaterialGuide data={flourDustGuide} />;
}
