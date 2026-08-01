import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { leadDustGuide } from "@/lib/data/material-guides/lead-dust";

export const metadata = materialGuideMetadata(leadDustGuide);

export default function Page() {
  return <MaterialGuide data={leadDustGuide} />;
}
