import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { biomassDustGuide } from "@/lib/data/material-guides/biomass-dust";

export const metadata = materialGuideMetadata(biomassDustGuide);

export default function Page() {
  return <MaterialGuide data={biomassDustGuide} />;
}
