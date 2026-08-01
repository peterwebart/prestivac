import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { starchDustGuide } from "@/lib/data/material-guides/starch-dust";

export const metadata = materialGuideMetadata(starchDustGuide);

export default function Page() {
  return <MaterialGuide data={starchDustGuide} />;
}
