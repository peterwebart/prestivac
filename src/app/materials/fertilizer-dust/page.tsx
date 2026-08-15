import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { fertilizerDustGuide } from "@/lib/data/material-guides/fertilizer-dust";

export const metadata = materialGuideMetadata(fertilizerDustGuide);

export default function Page() {
  return <MaterialGuide data={fertilizerDustGuide} />;
}
