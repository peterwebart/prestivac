import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { coolantRecoveryGuide } from "@/lib/data/application-guides/coolant-recovery";

export const metadata = applicationGuideMetadata(coolantRecoveryGuide);

export default function Page() {
  return <ApplicationGuide data={coolantRecoveryGuide} />;
}
