import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cottonWoolDustGuide } from "@/lib/data/material-guides/cotton-wool-dust";

export const metadata = materialGuideMetadata(cottonWoolDustGuide);

export default function Page() {
  return <MaterialGuide data={cottonWoolDustGuide} />;
}
