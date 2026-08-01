import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { tinDustGuide } from "@/lib/data/material-guides/tin-dust";

export const metadata = materialGuideMetadata(tinDustGuide);

export default function Page() {
  return <MaterialGuide data={tinDustGuide} />;
}
