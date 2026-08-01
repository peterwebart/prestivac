"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

type StatNumberProps = {
  value: number;
  suffix?: string;
};

/** Animates 0 → value on first view; screen readers get the static figure. */
export function StatNumber({ value, suffix = "" }: StatNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;

    let raf = 0;
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, value]);

  return (
    <span
      ref={ref}
      className="font-display text-[26px]/none font-extrabold tracking-tight text-brand-600"
    >
      <span className="sr-only">{`${value}${suffix}`}</span>
      <span aria-hidden>
        {reduced ? value : display}
        {suffix}
      </span>
    </span>
  );
}
