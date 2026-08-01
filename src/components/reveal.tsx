"use client";

import { motion } from "framer-motion";

import { EASE_OUT, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds (e.g. index * 0.06 for card grids). */
  delay?: number;
  /** Slide-in origin. */
  from?: "up" | "left" | "right" | "none";
};

/**
 * Client-side whileInView wrapper that keeps its children server-rendered.
 * Use around static section content instead of making whole sections client
 * components — the content stays out of the JS bundle.
 */
export function Reveal({ children, className, delay = 0, from = "up" }: RevealProps) {
  const offset =
    from === "up" ? { y: 26 } : from === "left" ? { x: -26 } : from === "right" ? { x: 26 } : {};

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
