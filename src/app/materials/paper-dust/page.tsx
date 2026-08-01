import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { paperDustGuide } from "@/lib/data/material-guides/paper-dust";

export const metadata = materialGuideMetadata(paperDustGuide);

export default function Page() {
  return <MaterialGuide data={paperDustGuide} />;
}
