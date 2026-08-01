import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { magnesiumDustGuide } from "@/lib/data/material-guides/magnesium-dust";

export const metadata = materialGuideMetadata(magnesiumDustGuide);

export default function Page() {
  return <MaterialGuide data={magnesiumDustGuide} />;
}
