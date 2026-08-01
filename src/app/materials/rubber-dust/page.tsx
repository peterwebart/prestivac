import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { rubberDustGuide } from "@/lib/data/material-guides/rubber-dust";

export const metadata = materialGuideMetadata(rubberDustGuide);

export default function Page() {
  return <MaterialGuide data={rubberDustGuide} />;
}
