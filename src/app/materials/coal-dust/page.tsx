import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { coalDustGuide } from "@/lib/data/material-guides/coal-dust";

export const metadata = materialGuideMetadata(coalDustGuide);

export default function Page() {
  return <MaterialGuide data={coalDustGuide} />;
}
