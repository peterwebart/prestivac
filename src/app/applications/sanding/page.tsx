import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { sandingGuide } from "@/lib/data/application-guides/sanding";

export const metadata = applicationGuideMetadata(sandingGuide);

export default function Page() {
  return <ApplicationGuide data={sandingGuide} />;
}
