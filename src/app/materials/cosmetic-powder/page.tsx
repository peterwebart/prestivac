import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { cosmeticPowderGuide } from "@/lib/data/material-guides/cosmetic-powder";

export const metadata = materialGuideMetadata(cosmeticPowderGuide);

export default function Page() {
  return <MaterialGuide data={cosmeticPowderGuide} />;
}
