import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cocoaDustGuide } from "@/lib/data/material-guides/cocoa-dust";

export const metadata = materialGuideMetadata(cocoaDustGuide);

export default function Page() {
  return <MaterialGuide data={cocoaDustGuide} />;
}
