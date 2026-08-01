import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { manganeseDustGuide } from "@/lib/data/material-guides/manganese-dust";

export const metadata = materialGuideMetadata(manganeseDustGuide);

export default function Page() {
  return <MaterialGuide data={manganeseDustGuide} />;
}
