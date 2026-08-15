import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { ureaDustGuide } from "@/lib/data/material-guides/urea-dust";

export const metadata = materialGuideMetadata(ureaDustGuide);

export default function Page() {
  return <MaterialGuide data={ureaDustGuide} />;
}
