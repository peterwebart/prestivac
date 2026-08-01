import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { titaniumDustGuide } from "@/lib/data/material-guides/titanium-dust";

export const metadata = materialGuideMetadata(titaniumDustGuide);

export default function Page() {
  return <MaterialGuide data={titaniumDustGuide} />;
}
