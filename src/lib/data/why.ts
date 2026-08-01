import {
 ClipboardCheck,
 Factory,
 Headset,
 History,
 Hourglass,
 MessagesSquare,
 PencilRuler,
 ShieldAlert,
 type LucideIcon,
} from "lucide-react";

export type WhyItem = { icon: LucideIcon; title: string; body: string };

export const WHY_PRESTIVAC: WhyItem[] = [
 { icon: Factory, title: "We Manufacture Every Unit", body: "All design and manufacturing is done in-house at our own production facility — you buy direct from the people who build the machine." },
 { icon: ClipboardCheck, title: "Certified for Hazardous Locations", body: "UL 1203 certified explosion-proof and dust-ignition-proof electrical vacuum cleaners for use in Hazardous (Classified) Locations." },
 { icon: ShieldAlert, title: "Built for Quality", body: "High grade 316 and 304 stainless steel construction, serviceable components, and a build standard that holds up to industrial duty." },
 { icon: History, title: "40+ Years of Vacuum Sales Experience", body: "Four decades supplying recovery systems across more than twenty industries worldwide." },
 { icon: Hourglass, title: "Long Service Life", body: "Stainless construction and replaceable wear parts, so a PrestiVac unit keeps earning its place for years." },
 { icon: Headset, title: "Expert Support", body: "Direct access to the people who built your vacuum — for parts, filters and upgrades." },
 { icon: MessagesSquare, title: "Compliance Support", body: "We help you specify against the OSHA, UL and NFPA requirements that apply to your facility." },
 { icon: PencilRuler, title: "Custom Built to Your Needs", body: "As the manufacturer we can modify or build a vacuum cleaner specifically to meet your requirement." },

];
