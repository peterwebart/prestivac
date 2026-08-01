import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { chromiumDustGuide } from "@/lib/data/material-guides/chromium-dust";

export const metadata = materialGuideMetadata(chromiumDustGuide);

export default function Page() {
  return <MaterialGuide data={chromiumDustGuide} />;
}
