import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { vacuumFurnaceGuide } from "@/lib/data/industry-guides/vacuum-furnace";

export const metadata = industryGuideMetadata(vacuumFurnaceGuide);

export default function Page() {
  return <IndustryGuide data={vacuumFurnaceGuide} />;
}
