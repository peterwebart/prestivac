"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export type ProcessStage = { label: string; detail: string };

/** Interactive production-stage stepper: every stage, every challenge. */
export function ProcessExplorer({ stages }: { stages: ProcessStage[] }) {
  const [index, setIndex] = useState(0);
  const active = stages[index];

  return (
    <div>
      <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
        {stages.map((stage, i) => (
          <li key={stage.label}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              className={cn(
                "flex h-full w-full flex-col items-start gap-2 rounded-xl p-3 text-left ring-1 transition-all",
                i === index
                  ? "bg-brand-600/15 ring-brand-500/60"
                  : "bg-white/[0.04] ring-white/10 hover:ring-white/25",
              )}
            >
              <span
                className={cn(
                  "flex size-7 items-center justify-center rounded-full font-display text-[11px] font-extrabold",
                  i === index ? "bg-brand-600 text-white" : "bg-white/10 text-white/70",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={cn(
                  "text-[11.5px]/[1.3] font-bold",
                  i === index ? "text-white" : "text-white/65",
                )}
              >
                {stage.label}
              </span>
            </button>
          </li>
        ))}
      </ol>
      <div
        aria-live="polite"
        className="mt-4 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10"
      >
        <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-400">
          Stage {String(index + 1).padStart(2, "0")} — {active.label}
        </p>
        <p className="mt-2 max-w-3xl text-[13.5px]/[1.7] text-white/70">{active.detail}</p>
      </div>
    </div>
  );
}
