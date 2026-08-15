import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { pelletDustGuide } from "@/lib/data/material-guides/pellet-dust";

export const metadata = materialGuideMetadata(pelletDustGuide);

export default function Page() {
  return <MaterialGuide data={pelletDustGuide} />;
}
