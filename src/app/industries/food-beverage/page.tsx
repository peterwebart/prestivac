import {
  IndustryGuide,
  industryGuideMetadata,
} from "@/components/templates/industry-guide";
import { foodBeverageGuide } from "@/lib/data/industry-guides/food-beverage";

export const metadata = industryGuideMetadata(foodBeverageGuide);

export default function Page() {
  return <IndustryGuide data={foodBeverageGuide} />;
}
