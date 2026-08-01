import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { tobaccoDustGuide } from "@/lib/data/material-guides/tobacco-dust";

export const metadata = materialGuideMetadata(tobaccoDustGuide);

export default function Page() {
  return <MaterialGuide data={tobaccoDustGuide} />;
}
