import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { arsenicDustGuide } from "@/lib/data/material-guides/arsenic-dust";

export const metadata = materialGuideMetadata(arsenicDustGuide);

export default function Page() {
  return <MaterialGuide data={arsenicDustGuide} />;
}
