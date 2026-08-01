import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { graphiteDustGuide } from "@/lib/data/material-guides/graphite-dust";

export const metadata = materialGuideMetadata(graphiteDustGuide);

export default function Page() {
  return <MaterialGuide data={graphiteDustGuide} />;
}
