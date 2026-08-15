import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { batteryBlackMassGuide } from "@/lib/data/material-guides/battery-black-mass";

export const metadata = materialGuideMetadata(batteryBlackMassGuide);

export default function Page() {
  return <MaterialGuide data={batteryBlackMassGuide} />;
}
