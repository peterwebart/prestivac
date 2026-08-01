import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { powderCoatingGuide } from "@/lib/data/application-guides/powder-coating";

export const metadata = applicationGuideMetadata(powderCoatingGuide);

export default function Page() {
  return <ApplicationGuide data={powderCoatingGuide} />;
}
