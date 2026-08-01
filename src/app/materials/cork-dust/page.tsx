import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { corkDustGuide } from "@/lib/data/material-guides/cork-dust";

export const metadata = materialGuideMetadata(corkDustGuide);

export default function Page() {
  return <MaterialGuide data={corkDustGuide} />;
}
