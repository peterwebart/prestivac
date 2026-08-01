import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { maltDustGuide } from "@/lib/data/material-guides/malt-dust";

export const metadata = materialGuideMetadata(maltDustGuide);

export default function Page() {
  return <MaterialGuide data={maltDustGuide} />;
}
