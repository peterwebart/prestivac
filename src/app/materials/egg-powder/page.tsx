import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { eggPowderGuide } from "@/lib/data/material-guides/egg-powder";

export const metadata = materialGuideMetadata(eggPowderGuide);

export default function Page() {
  return <MaterialGuide data={eggPowderGuide} />;
}
