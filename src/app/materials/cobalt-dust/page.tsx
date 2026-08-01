import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cobaltDustGuide } from "@/lib/data/material-guides/cobalt-dust";

export const metadata = materialGuideMetadata(cobaltDustGuide);

export default function Page() {
  return <MaterialGuide data={cobaltDustGuide} />;
}
