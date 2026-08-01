import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { aluminumDustGuide } from "@/lib/data/material-guides/aluminum-dust";

export const metadata = materialGuideMetadata(aluminumDustGuide);

export default function Page() {
  return <MaterialGuide data={aluminumDustGuide} />;
}
