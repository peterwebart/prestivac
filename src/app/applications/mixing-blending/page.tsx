import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { mixingBlendingGuide } from "@/lib/data/application-guides/mixing-blending";

export const metadata = applicationGuideMetadata(mixingBlendingGuide);

export default function Page() {
  return <ApplicationGuide data={mixingBlendingGuide} />;
}
