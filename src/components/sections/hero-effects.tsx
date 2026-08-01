"use client";

import { motion } from "framer-motion";

import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

/**
 * Deterministic particle set (no Math.random → no hydration mismatch).
 * Positions cluster around the dust burst on the products' left edge in the
 * approved mockup; particles drift left and fade like ejected sparks.
 */
const SPARKS = [
  { left: "53%", top: "24%", size: 4, dx: -74, dy: -30, dur: 5.6, delay: 0.0, cls: "bg-brand-400" },
  { left: "55%", top: "30%", size: 3, dx: -92, dy: -12, dur: 6.4, delay: 0.7, cls: "bg-white" },
  { left: "51%", top: "34%", size: 5, dx: -60, dy: -44, dur: 5.2, delay: 1.4, cls: "bg-brand-500" },
  { left: "56%", top: "22%", size: 2, dx: -110, dy: 6, dur: 7.2, delay: 0.3, cls: "bg-white/80" },
  { left: "52%", top: "28%", size: 3, dx: -84, dy: -58, dur: 6.0, delay: 2.1, cls: "bg-brand-400" },
  { left: "54%", top: "38%", size: 2, dx: -70, dy: 18, dur: 6.8, delay: 1.0, cls: "bg-electric-400/80" },
  { left: "50%", top: "26%", size: 3, dx: -96, dy: -24, dur: 5.8, delay: 2.8, cls: "bg-white/90" },
  { left: "57%", top: "33%", size: 4, dx: -66, dy: -38, dur: 5.4, delay: 1.8, cls: "bg-brand-500" },
  { left: "53%", top: "42%", size: 2, dx: -88, dy: 10, dur: 7.0, delay: 0.5, cls: "bg-brand-400/80" },
  { left: "49%", top: "31%", size: 3, dx: -58, dy: -50, dur: 6.2, delay: 3.2, cls: "bg-white/70" },
  { left: "55%", top: "26%", size: 2, dx: -102, dy: -18, dur: 6.6, delay: 2.4, cls: "bg-brand-400" },
  { left: "51%", top: "37%", size: 3, dx: -76, dy: -8, dur: 5.9, delay: 3.6, cls: "bg-white/80" },
] as const;

export function HeroEffects() {
  const reduced = usePrefersReducedMotion();

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      {/* Ambient red glow behind the dust burst */}
      <div className="absolute left-[44%] top-[14%] h-72 w-72 rounded-full bg-brand-600/25 blur-[90px]" />

      {/* Red light sweep across the floor, bottom right (mockup swoosh) */}
      <div className="absolute -bottom-24 right-[-8%] h-72 w-[58%] rotate-[-6deg] rounded-[100%] bg-[radial-gradient(closest-side,rgba(227,27,30,0.26),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-[-10%] right-[6%] h-40 w-[36%] rotate-[-10deg] rounded-[100%] bg-[radial-gradient(closest-side,rgba(239,59,61,0.18),transparent_70%)] blur-xl" />

      {/* Spark particles */}
      {SPARKS.map((s, i) =>
        reduced ? (
          <span
            key={i}
            className={`absolute rounded-full opacity-40 ${s.cls}`}
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          />
        ) : (
          <motion.span
            key={i}
            initial={{ x: 0, y: 0, opacity: 0 }}
            animate={{ x: s.dx, y: s.dy, opacity: [0, 0.9, 0] }}
            transition={{
              duration: s.dur,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className={`absolute rounded-full blur-[0.5px] ${s.cls}`}
            style={{ left: s.left, top: s.top, width: s.size, height: s.size }}
          />
        ),
      )}
    </div>
  );
}
