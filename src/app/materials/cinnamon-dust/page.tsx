import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cinnamonDustGuide } from "@/lib/data/material-guides/cinnamon-dust";

export const metadata = materialGuideMetadata(cinnamonDustGuide);

export default function Page() {
  return <MaterialGuide data={cinnamonDustGuide} />;
}
