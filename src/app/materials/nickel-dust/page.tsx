import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { nickelDustGuide } from "@/lib/data/material-guides/nickel-dust";

export const metadata = materialGuideMetadata(nickelDustGuide);

export default function Page() {
  return <MaterialGuide data={nickelDustGuide} />;
}
