import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { medicalDevicesGuide } from "@/lib/data/industry-guides/medical-devices";

export const metadata = industryGuideMetadata(medicalDevicesGuide);

export default function Page() {
  return <IndustryGuide data={medicalDevicesGuide} />;
}
