import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { asbestosGuide } from "@/lib/data/material-guides/asbestos";

export const metadata = materialGuideMetadata(asbestosGuide);

export default function Page() {
  return <MaterialGuide data={asbestosGuide} />;
}
