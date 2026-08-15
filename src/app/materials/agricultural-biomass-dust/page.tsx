import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { agriculturalBiomassDustGuide } from "@/lib/data/material-guides/agricultural-biomass-dust";

export const metadata = materialGuideMetadata(agriculturalBiomassDustGuide);

export default function Page() {
  return <MaterialGuide data={agriculturalBiomassDustGuide} />;
}
