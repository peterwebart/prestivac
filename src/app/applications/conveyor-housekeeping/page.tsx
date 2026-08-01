import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { conveyorHousekeepingGuide } from "@/lib/data/application-guides/conveyor-housekeeping";

export const metadata = applicationGuideMetadata(conveyorHousekeepingGuide);

export default function Page() {
  return <ApplicationGuide data={conveyorHousekeepingGuide} />;
}
