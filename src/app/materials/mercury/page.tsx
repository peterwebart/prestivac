import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { mercuryGuide } from "@/lib/data/material-guides/mercury";

export const metadata = materialGuideMetadata(mercuryGuide);

export default function Page() {
  return <MaterialGuide data={mercuryGuide} />;
}
