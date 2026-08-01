"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Container as ContainerIcon,
  Fan,
  Filter,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Hotspot = {
  id: string;
  /** Position as % of the family-shot image box. */
  x: number;
  y: number;
  icon: LucideIcon;
  title: string;
  body: string;
};

const HOTSPOTS: Hotspot[] = [
  {
    id: "filtration",
    x: 47.5,
    y: 8,
    icon: Filter,
    title: "Multi-stage filtration",
    body: "4-Stage filtration system with HEPA 99.99% absolute filtration, provides maximum vacuum performance, eliminating any exposure to the user or workplace.",
  },
  {
    id: "inlet",
    x: 77,
    y: 29,
    icon: Wind,
    title: "Static dissipating ESD safe construction",
    body: "The entire vacuum is built with static dissipating components, including housings, filters, hoses and tools, eliminating any static that can cause a fire and/or explosion.",
  },
  {
    id: "power",
    x: 62,
    y: 46,
    icon: Fan,
    title: "Air or electric power units",
    body: "Electric drives where the environment permits — or fully air-operated units with no electrical components at all, suited to classified areas.",
  },
  {
    id: "container",
    x: 17.5,
    y: 42,
    icon: ContainerIcon,
    title: "Stainless steel construction",
    body: "Our vacuum cleaners are built with high grade 316 and 304 stainless steel, making them solid and ideal for controlled environments because they are corrosion resistant and easy to clean.",
  },
  {
    id: "grounding",
    x: 33,
    y: 88,
    icon: Zap,
    title: "RCT cart option",
    body: "Our stainless steel RCT (Removable Collection Tank) system lets the operator empty the vacuum by lifting a single lever, with no need to remove the power head and filters. It also carries a large stainless steel basket that holds all the hoses and tools, making the unit easier to use and transport.",
  },
];

export function ProductExplorer() {
  const [activeId, setActiveId] = useState(HOTSPOTS[0].id);
  const active = HOTSPOTS.find((h) => h.id === activeId) ?? HOTSPOTS[0];

  return (
    <section id="explorer" className="scroll-mt-20 bg-steel-50 py-20 lg:py-24">
      <Container>
        <SectionHeading
          tone="light"
          eyebrow="Under the Stainless"
          title="The engineering behind the system"
          description="Select a point on the product family to see what it does — and why it's there."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          <div className="relative overflow-hidden rounded-3xl bg-[#c1beb8] ring-1 ring-steel-200">
            <Image
              src="/images/products/family.jpg"
              alt="PrestiVac stainless steel industrial vacuum product family"
              width={1218}
              height={1064}
              sizes="(min-width: 1024px) 54vw, 92vw"
              className="h-auto w-full"
            />
            {HOTSPOTS.map((hotspot) => {
              const selected = hotspot.id === activeId;
              return (
                <button
                  key={hotspot.id}
                  type="button"
                  aria-label={hotspot.title}
                  aria-pressed={selected}
                  onClick={() => setActiveId(hotspot.id)}
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  className="absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                >
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-1 rounded-full bg-brand-500/40",
                      !selected && "motion-safe:animate-ping",
                    )}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "relative size-4 rounded-full ring-2 ring-white shadow-lift transition-all duration-200",
                      selected ? "scale-125 bg-surface" : "bg-brand-600",
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-steel-200/70 sm:p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-600/10">
                  <active.icon
                    aria-hidden
                    className="size-6 text-brand-600"
                    strokeWidth={1.7}
                  />
                </span>
                <h3 className="mt-5 font-display text-[20px] font-extrabold text-surface">
                  {active.title}
                </h3>
                <p className="mt-2.5 text-[14px]/[1.7] text-steel-500">
                  {active.body}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Text alternative to the visual hotspots */}
            <div className="mt-5 flex flex-wrap gap-2">
              {HOTSPOTS.map((hotspot) => (
                <button
                  key={hotspot.id}
                  type="button"
                  aria-pressed={hotspot.id === activeId}
                  onClick={() => setActiveId(hotspot.id)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.06em] ring-1 transition-colors duration-200",
                    hotspot.id === activeId
                      ? "bg-surface text-white ring-surface"
                      : "bg-white text-steel-600 ring-steel-200 hover:text-surface",
                  )}
                >
                  {hotspot.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
