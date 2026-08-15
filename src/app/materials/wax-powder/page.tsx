import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { waxPowderGuide } from "@/lib/data/material-guides/wax-powder";

export const metadata = materialGuideMetadata(waxPowderGuide);

export default function Page() {
  return <MaterialGuide data={waxPowderGuide} />;
}
