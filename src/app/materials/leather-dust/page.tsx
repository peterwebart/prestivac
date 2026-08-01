import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { leatherDustGuide } from "@/lib/data/material-guides/leather-dust";

export const metadata = materialGuideMetadata(leatherDustGuide);

export default function Page() {
  return <MaterialGuide data={leatherDustGuide} />;
}
