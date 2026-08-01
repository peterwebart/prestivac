import type { Variants } from "framer-motion";

/** Signature ease-out curve used across the site. */
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/** Parent variant that staggers `fadeUp`/`fadeRight` children. */
export const stagger = (children = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: children, delayChildren: delay },
  },
});

/** Default whileInView viewport: animate once, slightly before entering. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;
