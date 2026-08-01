import {
  MaterialGuide,
  materialGuideMetadata,
} from "@/components/templates/material-guide";
import { ironDustGuide } from "@/lib/data/material-guides/iron-dust";

export const metadata = materialGuideMetadata(ironDustGuide);

export default function Page() {
  return <MaterialGuide data={ironDustGuide} />;
}
