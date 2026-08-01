import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { coffeeDustGuide } from "@/lib/data/material-guides/coffee-dust";

export const metadata = materialGuideMetadata(coffeeDustGuide);

export default function Page() {
  return <MaterialGuide data={coffeeDustGuide} />;
}
