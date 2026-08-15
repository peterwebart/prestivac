import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { potashDustGuide } from "@/lib/data/material-guides/potash-dust";

export const metadata = materialGuideMetadata(potashDustGuide);

export default function Page() {
  return <MaterialGuide data={potashDustGuide} />;
}
