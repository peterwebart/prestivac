import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { spiceDustGuide } from "@/lib/data/material-guides/spice-dust";

export const metadata = materialGuideMetadata(spiceDustGuide);

export default function Page() {
  return <MaterialGuide data={spiceDustGuide} />;
}
