import {
  ApplicationGuide,
  applicationGuideMetadata,
} from "@/components/templates/application-guide";
import { drumFillingGuide } from "@/lib/data/application-guides/drum-filling";

export const metadata = applicationGuideMetadata(drumFillingGuide);

export default function Page() {
  return <ApplicationGuide data={drumFillingGuide} />;
}
