import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { warehouseHousekeepingGuide } from "@/lib/data/application-guides/warehouse-housekeeping";

export const metadata = applicationGuideMetadata(warehouseHousekeepingGuide);

export default function Page() {
  return <ApplicationGuide data={warehouseHousekeepingGuide} />;
}
