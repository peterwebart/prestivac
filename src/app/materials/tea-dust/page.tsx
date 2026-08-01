import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { teaDustGuide } from "@/lib/data/material-guides/tea-dust";

export const metadata = materialGuideMetadata(teaDustGuide);

export default function Page() {
  return <MaterialGuide data={teaDustGuide} />;
}
