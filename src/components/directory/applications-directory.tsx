"use client";

import { DirectoryExplorer } from "@/components/directory/directory-explorer";
import { APPLICATION_CATEGORIES } from "@/lib/data/applications";

const FEATURED_ITEM_LINKS: Record<string, string> = {
  "CNC machining": "/applications/cnc-machining",
  "Metal 3D printing": "/applications/metal-3d-printing",
  "Powder coating": "/applications/powder-coating",
  "Silo cleaning": "/applications/silo-cleaning",
  "Welding cleanup": "/applications/welding-cleanup",
  "Warehouse housekeeping": "/applications/warehouse-housekeeping",
  "Dust collector cleaning": "/applications/dust-collector-cleaning",
  "Spill cleanup": "/applications/spill-cleanup",
};

export function ApplicationsDirectory() {
  return (
    <DirectoryExplorer
      groups={APPLICATION_CATEGORIES}
      featuredLinks={FEATURED_ITEM_LINKS}
      searchLabel="Search the applications directory"
      searchPlaceholder="Search applications — silo cleaning, powder transfer, deburring…"
    />
  );
}
