import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { corrugatedPaperDustGuide } from "@/lib/data/material-guides/corrugated-paper-dust";

export const metadata = materialGuideMetadata(corrugatedPaperDustGuide);

export default function Page() {
  return <MaterialGuide data={corrugatedPaperDustGuide} />;
}
