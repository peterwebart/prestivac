import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { cleanroomVacuumingGuide } from "@/lib/data/application-guides/cleanroom-vacuuming";

export const metadata = applicationGuideMetadata(cleanroomVacuumingGuide);

export default function Page() {
  return <ApplicationGuide data={cleanroomVacuumingGuide} />;
}
