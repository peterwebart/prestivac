import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { sawdustGuide } from "@/lib/data/material-guides/sawdust";

export const metadata = materialGuideMetadata(sawdustGuide);

export default function Page() {
  return <MaterialGuide data={sawdustGuide} />;
}
