"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BatteryCharging,
  Car,
  Cog,
  Factory,
  FlaskConical,
  Globe,
  Hammer,
  Pill,
  Plane,
  Recycle,
  TreePine,
  Wheat,
} from "lucide-react";

import { EngineerCard } from "@/components/sections/engineer-card";
import { StatNumber } from "@/components/sections/stat-number";
import { Container } from "@/components/ui/container";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STATS = [
  { icon: Globe, value: 1000, suffix: "+", label: "Vacuums Sold Worldwide" },
  { icon: Cog, value: 40, suffix: "+", label: "Years of Vacuum Sales Experience" },
  { icon: Factory, value: 20, suffix: "+", label: "Industries Served" },
  { icon: BadgeCheck, value: 100, suffix: "%", label: "Vacuum Models Built" },
] as const;

const INDUSTRIES = [
  { icon: Wheat, label: "Food Processing" },
  { icon: Pill, label: "Pharmaceutical" },
  { icon: FlaskConical, label: "Chemical" },
  { icon: Hammer, label: "Metalworking" },
  { icon: BatteryCharging, label: "Battery" },
  { icon: Car, label: "Automotive" },
  { icon: Plane, label: "Aerospace" },
  { icon: TreePine, label: "Woodworking" },
  { icon: Recycle, label: "Plastics" },
] as const;

export function TrustSection() {
  return (
    <section className="relative bg-steel-50 text-surface">
      <h2 className="sr-only">Proven across industries</h2>
      <Container className="py-9 lg:py-10">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_420px] xl:gap-12">
          <div className="min-w-0">
            {/* Stats with count-up numbers */}
            <motion.ul
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-steel-200"
            >
              {STATS.map((stat) => (
                <motion.li
                  key={stat.label}
                  variants={fadeUp}
                  className="flex items-start gap-3 md:px-6 md:first:pl-0 md:last:pr-0"
                >
                  <stat.icon
                    aria-hidden
                    className="mt-0.5 size-9 shrink-0 text-surface/65"
                    strokeWidth={1.4}
                  />
                  <div>
                    <StatNumber value={stat.value} suffix={stat.suffix} />
                    <p className="mt-1 max-w-[130px] text-xs/[1.4] font-medium text-steel-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Trusted-by industries */}
            <motion.div
              id="industries"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              className="mt-9 scroll-mt-28"
            >
              <p className="text-center text-[10.5px] font-bold uppercase tracking-[0.28em] text-steel-600">
                Trusted by Leading Manufacturers Across
              </p>
              <ul className="mt-5 flex items-stretch overflow-x-auto pb-1 scrollbar-none md:justify-between">
                {INDUSTRIES.map((industry, index) => (
                  <li
                    key={industry.label}
                    className={cn(
                      "flex min-w-[86px] flex-1 flex-col items-center gap-2 px-1.5",
                      index !== 0 && "border-l border-steel-200",
                    )}
                  >
                    <industry.icon
                      aria-hidden
                      className="size-[22px] text-surface/70"
                      strokeWidth={1.5}
                    />
                    <span className="whitespace-nowrap text-[10.5px] font-medium text-steel-600">
                      {industry.label}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <EngineerCard />
        </div>

        {/* Scroll indicator (mockup: bottom center of the white strip) */}
        <div className="mt-8 flex justify-center">
          <a
            href="/get-a-quote"
            className="inline-flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.3em] text-steel-500 transition-colors hover:text-surface"
          >
            Scroll to Discover
            <ArrowRight aria-hidden className="size-4 motion-safe:animate-nudge" />
          </a>
        </div>
      </Container>
    </section>
  );
}
