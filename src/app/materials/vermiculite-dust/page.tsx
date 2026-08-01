import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { vermiculiteDustGuide } from "@/lib/data/material-guides/vermiculite-dust";

export const metadata = materialGuideMetadata(vermiculiteDustGuide);

export default function Page() {
  return <MaterialGuide data={vermiculiteDustGuide} />;
}
