"use client";

import { motion } from "framer-motion";
import { Box, Filter, Settings, ShieldCheck, Zap } from "lucide-react";

import { fadeRight, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

const FEATURES = [
  { icon: ShieldCheck, label: "Explosion Proof" },
  { icon: Filter, label: "HEPA Filtration", sub: "99.99%" },
  { icon: Zap, label: "Anti-Static & Grounding" },
  { icon: Box, label: "Stainless Steel Construction" },
  { icon: Settings, label: "Built for Industry" },
] as const;

type FeatureCalloutsProps = {
  /** `rail` = vertical circles with connector lines; `inline` = chip row. */
  variant: "rail" | "inline";
  className?: string;
};

export function FeatureCallouts({ variant, className }: FeatureCalloutsProps) {
  if (variant === "rail") {
    return (
      <motion.ul
        aria-label="Key system capabilities"
        variants={stagger(0.1, 0.5)}
        initial="hidden"
        animate="visible"
        className={cn("flex-col gap-6", className)}
      >
        {FEATURES.map(({ icon: Icon, label, ...rest }) => (
          <motion.li
            key={label}
            variants={fadeRight}
            className="relative flex items-center gap-3"
          >
            {/* Connector line toward the products, red glow dot at its tip */}
            <span
              aria-hidden
              className="absolute right-full top-1/2 mr-2 hidden h-px w-14 -translate-y-1/2 bg-gradient-to-l from-white/50 to-white/0 2xl:block"
            >
              <span className="absolute -left-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-brand-500 shadow-[0_0_8px_2px_rgba(227,27,30,0.6)]" />
            </span>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
              <Icon aria-hidden className="size-6 text-white" strokeWidth={1.75} />
            </span>
            <span className="w-28 text-[11px]/[1.3] font-bold uppercase tracking-[0.04em] text-white">
              {label}
              {"sub" in rest && (
                <span className="block font-semibold text-white/80">
                  {rest.sub}
                </span>
              )}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    );
  }

  return (
    <ul
      aria-label="Key system capabilities"
      className={cn(
        "-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-1 scrollbar-none sm:mx-0 sm:flex-wrap sm:px-0",
        className,
      )}
    >
      {FEATURES.map(({ icon: Icon, label, ...rest }) => (
        <li
          key={label}
          className="flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-2 backdrop-blur-sm"
        >
          <Icon aria-hidden className="size-4 text-white/90" strokeWidth={1.75} />
          <span className="whitespace-nowrap text-[10.5px] font-bold uppercase tracking-[0.05em] text-white/90">
            {label}
            {"sub" in rest ? ` ${rest.sub}` : ""}
          </span>
        </li>
      ))}
    </ul>
  );
}
