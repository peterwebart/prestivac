export type Standard = {
 id: string;
 name: string;
 scope: string;
 href: string;
};

/**
 * TODO(launch): confirm with PrestiVac which certifications/listings apply to
 * which models before publishing certification claims. Copy below is framed
 * as "built to comply with" — keep that framing unless verified.
 */
export const STANDARDS: Standard[] = [
 { id: "osha", name: "OSHA", scope: "Built and certified to vacuum combustible dusts and flammable liquids in Hazardous Locations to OSHA standards.", href: "/resources/industrial-dust-control" },
 { id: "ul-1203", name: "UL 1203", scope: "Certified explosion-proof and dust-ignition-proof electrical vacuum cleaners for use in Hazardous (Classified) Locations.", href: "/hazardous-locations" },
 { id: "nfpa-652", name: "NFPA 652", scope: "Fundamentals of combustible dust — including the Dust Hazard Analysis requirement.", href: "/resources/nfpa-guide" },
 { id: "nfpa-654", name: "NFPA 654", scope: "Fire and dust-explosion prevention in facilities processing combustible particulate solids.", href: "/resources/nfpa-guide" },
 { id: "nfpa-484", name: "NFPA 484", scope: "Combustible metals — aluminum, titanium, magnesium and other reactive fines.", href: "/resources/nfpa-guide" },

];
