import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { soapPowderGuide } from "@/lib/data/material-guides/soap-powder";

export const metadata = materialGuideMetadata(soapPowderGuide);

export default function Page() {
  return <MaterialGuide data={soapPowderGuide} />;
}
