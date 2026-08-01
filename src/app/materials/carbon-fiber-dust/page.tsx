import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { carbonFiberDustGuide } from "@/lib/data/material-guides/carbon-fiber-dust";

export const metadata = materialGuideMetadata(carbonFiberDustGuide);

export default function Page() {
  return <MaterialGuide data={carbonFiberDustGuide} />;
}
