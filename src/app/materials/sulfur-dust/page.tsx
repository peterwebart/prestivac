import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { sulfurDustGuide } from "@/lib/data/material-guides/sulfur-dust";

export const metadata = materialGuideMetadata(sulfurDustGuide);

export default function Page() {
  return <MaterialGuide data={sulfurDustGuide} />;
}
