import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { paprikaDustGuide } from "@/lib/data/material-guides/paprika-dust";

export const metadata = materialGuideMetadata(paprikaDustGuide);

export default function Page() {
  return <MaterialGuide data={paprikaDustGuide} />;
}
