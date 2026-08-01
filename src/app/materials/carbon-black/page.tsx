import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { carbonBlackGuide } from "@/lib/data/material-guides/carbon-black";

export const metadata = materialGuideMetadata(carbonBlackGuide);

export default function Page() {
  return <MaterialGuide data={carbonBlackGuide} />;
}
