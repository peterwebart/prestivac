"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Droplets,
  Ellipsis,
  Flame,
  FlaskConical,
  Magnet,
  Pill,
  Wheat,
} from "lucide-react";
import { useRef, useState } from "react";

import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const OPTIONS = [
  {
    id: "combustible-dust",
    label: "Combustible Dust",
    icon: Flame,
    headline: "Explosion-proof vacuum systems",
    copy: "Explosion-proof construction with grounding and anti-static protection for flour, grain, wood dust, metal powders and other combustible dusts.",
  },
  {
    id: "liquids-solvents",
    label: "Liquids / Solvents",
    icon: Droplets,
    headline: "Wet and flammable liquid recovery",
    copy: "Certified recovery of flammable liquids and solvents in hazardous locations, plus coolant, slurry and spill response — construction matched to the chemistry.",
  },
  {
    id: "metal-dust",
    label: "Metal Dust",
    icon: Magnet,
    headline: "Immersion separation systems",
    copy: "Safely recover aluminum, titanium, magnesium and other reactive metal fines with grounded, spark-free recovery engineered for your process.",
  },
  {
    id: "pharmaceutical",
    label: "Pharmaceutical Powders",
    icon: Pill,
    headline: "HEPA containment vacuums",
    copy: "99.99% HEPA filtration and stainless steel contact surfaces for potent compounds, APIs and cleanroom environments.",
  },
  {
    id: "food-processing",
    label: "Food Processing",
    icon: Wheat,
    headline: "Hygienic stainless systems",
    copy: "Stainless steel construction and fine-dust filtration for flour, sugar, spices, starch and allergen control in food facilities.",
  },
  {
    id: "chemicals",
    label: "Chemicals",
    icon: FlaskConical,
    headline: "Chemical & liquid recovery",
    copy: "Corrosion-resistant systems for acids, solvents and toxic liquids — engineered for safe recovery and disposal.",
  },
  {
    id: "other",
    label: "Other",
    icon: Ellipsis,
    headline: "Custom-engineered solution",
    copy: "Tell us what you\u2019re recovering. We design vacuum systems around your material, process and compliance requirements.",
  },
] as const;

type OptionId = (typeof OPTIONS)[number]["id"];

export function CleaningSelector({ className }: { className?: string }) {
  /* Mockup default: Combustible Dust selected, recommendation collapsed.
     The panel reveals on the first explicit choice. */
  const [active, setActive] = useState<OptionId>("combustible-dust");
  const [revealed, setRevealed] = useState(false);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeOption = OPTIONS.find((o) => o.id === active) ?? OPTIONS[0];

  const select = (id: OptionId) => {
    setActive(id);
    setRevealed(true);
  };

  /* Radio-group arrow navigation: selection follows focus, wraps around. */
  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = (index + 1) % OPTIONS.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = (index - 1 + OPTIONS.length) % OPTIONS.length;
    }
    if (next === null) return;
    event.preventDefault();
    select(OPTIONS[next].id);
    tileRefs.current[next]?.focus();
  };

  return (
    <div
      id="solutions"
      className={cn(
        "max-w-[660px] scroll-mt-28 rounded-2xl border border-white/12 bg-graphite-900/65 p-4 shadow-panel backdrop-blur-md sm:p-5",
        className,
      )}
    >
      <h2
        id="cleaning-label"
        className="text-[13.5px] font-semibold text-white"
      >
        What are you cleaning?
      </h2>

      <div
        role="radiogroup"
        aria-labelledby="cleaning-label"
        className="mt-3 grid grid-cols-3 sm:flex"
      >
        {OPTIONS.map((option, index) => {
          const Icon = option.icon;
          const checked = active === option.id;
          return (
            <button
              key={option.id}
              ref={(el) => {
                tileRefs.current[index] = el;
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={checked ? 0 : -1}
              onClick={() => select(option.id)}
              onKeyDown={(event) => onKeyDown(event, index)}
              className={cn(
                "relative flex flex-col items-center gap-2 rounded-[10px] px-2 py-3 text-center transition-colors duration-200 sm:flex-1",
                "sm:before:absolute sm:before:inset-y-2 sm:before:left-0 sm:before:w-px sm:before:bg-white/10 sm:first:before:hidden",
                checked
                  ? "bg-white/[0.06] ring-1 ring-brand-500"
                  : "hover:bg-white/[0.04]",
              )}
            >
              <Icon
                aria-hidden
                className="size-5 text-white/90"
                strokeWidth={1.6}
              />
              <span className="text-[11px]/[1.25] font-medium text-white/85">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite">
        <AnimatePresence initial={false}>
          {revealed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <div className="mt-4 border-t border-white/10 pt-4">
                <motion.div
                  key={activeOption.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-brand-400">
                    Recommended solution
                  </p>
                  <p className="mt-1 font-display text-[17px] font-bold text-white">
                    {activeOption.headline}
                  </p>
                  <p className="mt-1.5 text-[13px]/[1.6] text-white/65">
                    {activeOption.copy}
                  </p>
                  <a
                    href="/get-a-quote"
                    className="group mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
                  >
                    Get a Quote
                    <ArrowRight
                      aria-hidden
                      className="size-3.5 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
