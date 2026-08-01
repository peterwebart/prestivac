"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

/** Server snapshot mirrors the SSR markup (animations on), so hydration never
 *  mismatches; React re-renders immediately after mount for RM users. */
function getServerSnapshot() {
  return false;
}

/**
 * Hydration-safe alternative to framer-motion's `useReducedMotion`, which
 * reads `matchMedia` synchronously during the first client render and can
 * therefore produce server/client markup mismatches for reduced-motion users.
 */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
