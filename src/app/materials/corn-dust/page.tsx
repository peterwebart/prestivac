import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cornDustGuide } from "@/lib/data/material-guides/corn-dust";

export const metadata = materialGuideMetadata(cornDustGuide);

export default function Page() {
  return <MaterialGuide data={cornDustGuide} />;
}
