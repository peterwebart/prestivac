import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cokeDustGuide } from "@/lib/data/material-guides/coke-dust";

export const metadata = materialGuideMetadata(cokeDustGuide);

export default function Page() {
  return <MaterialGuide data={cokeDustGuide} />;
}
