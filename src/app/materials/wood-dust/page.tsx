import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { woodDustGuide } from "@/lib/data/material-guides/wood-dust";

export const metadata = materialGuideMetadata(woodDustGuide);

export default function Page() {
  return <MaterialGuide data={woodDustGuide} />;
}
