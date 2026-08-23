"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { trackEvent } from "@/lib/analytics";
import type { SpecGroup } from "@/lib/data/product-detail";
import { cn } from "@/lib/utils";

/**
 * Specification groups.
 *
 * Desktop keeps every group open — an engineer comparing models should not have
 * to click seven times to see the data. Mobile collapses to accordions with the
 * first group open, because a full table on a phone is unreadable.
 *
 * Native <details>/<summary> so it works without JavaScript, is keyboard
 * operable for free, and is searchable by the browser's find-in-page.
 */
export function ProductSpecs({ groups }: { groups: SpecGroup[] }) {
  return (
    <div className="grid gap-3 lg:grid-cols-2">
      {groups.map((group, index) => (
        <details
          key={group.id}
          open={index === 0}
          className="group rounded-2xl bg-white/[0.04] ring-1 ring-white/10 lg:open"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 [&::-webkit-details-marker]:hidden">
            <h3 className="font-display text-[14px] font-extrabold uppercase tracking-[0.1em] text-white">
              {group.heading}
            </h3>
            <ChevronDown
              aria-hidden
              className="size-4 shrink-0 text-white/45 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
            />
          </summary>
          <dl className="border-t border-white/10 px-5 py-4">
            {group.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col gap-0.5 border-b border-white/[0.06] py-2.5 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <dt className="shrink-0 text-[12.5px] font-semibold text-white/55">{spec.label}</dt>
                <dd className="text-[13px] text-white/85 sm:max-w-[62%] sm:text-right">
                  {spec.value}
                  {spec.note ? (
                    <span className="mt-0.5 block text-[11px] text-white/40">{spec.note}</span>
                  ) : null}
                </dd>
              </div>
            ))}
          </dl>
        </details>
      ))}
    </div>
  );
}

/**
 * CTA that reports to the dataLayer.
 *
 * Kept as a thin wrapper around a real anchor so the link works normally,
 * degrades without JavaScript, and stays keyboard accessible.
 */
export function TrackedCta({
  href,
  cta,
  placement,
  product,
  variant = "primary",
  children,
  className,
}: {
  href: string;
  cta: string;
  placement: string;
  product: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
}) {
  const styles = {
    primary:
      "bg-brand-600 text-white hover:bg-brand-500 ring-1 ring-brand-500/40 shadow-[0_8px_24px_-12px_rgba(220,38,38,0.7)]",
    secondary: "bg-white/[0.07] text-white ring-1 ring-white/15 hover:bg-white/[0.12]",
    ghost: "text-white/75 ring-1 ring-white/12 hover:text-white hover:ring-white/25",
  }[variant];

  return (
    <a
      href={href}
      onClick={() => trackEvent("product_cta", { cta, placement, product })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-[13px] font-bold uppercase tracking-[0.08em] transition-all duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
        styles,
        className,
      )}
    >
      {children}
    </a>
  );
}

/**
 * Housekeeping cost estimator.
 *
 * Computes entirely from the visitor's OWN inputs — their hours, their labour
 * rate, their assumption about reduction. It does not assert a PrestiVac
 * performance figure, because none is published, and the reduction is a slider
 * the user sets rather than a number we claim. Labelled an estimate throughout.
 */
export function CostEstimator({ product }: { product: string }) {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(45);
  const [reduction, setReduction] = useState(50);
  const [touched, setTouched] = useState(false);

  const annualHours = hours * 52;
  const hoursSaved = Math.round(annualHours * (reduction / 100));
  const annualSaving = Math.round(hoursSaved * rate);

  const onChange = (fn: (v: number) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!touched) {
      setTouched(true);
      trackEvent("product_calculator", { action: "started", product });
    }
    fn(Number(e.target.value));
  };

  const field = "w-full rounded-lg bg-graphite-950/60 px-3 py-2.5 text-[14px] text-white ring-1 ring-white/12 focus:outline-none focus:ring-2 focus:ring-brand-500";
  const label = "block text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/50";

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={label} htmlFor="est-hours">
            Cleaning hours per week
          </label>
          <input
            id="est-hours"
            type="number"
            min={0}
            max={200}
            value={hours}
            onChange={onChange(setHours)}
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label className={label} htmlFor="est-rate">
            Labour cost per hour
          </label>
          <input
            id="est-rate"
            type="number"
            min={0}
            max={500}
            value={rate}
            onChange={onChange(setRate)}
            className={`mt-2 ${field}`}
          />
        </div>
        <div>
          <label className={label} htmlFor="est-reduction">
            Time reduction you expect · {reduction}%
          </label>
          <input
            id="est-reduction"
            type="range"
            min={0}
            max={90}
            step={5}
            value={reduction}
            onChange={onChange(setReduction)}
            aria-describedby="est-reduction-help"
            className="mt-4 w-full accent-brand-500"
          />
          <p id="est-reduction-help" className="mt-1 text-[11px] text-white/40">
            Your assumption, not a PrestiVac performance claim.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-brand-500/[0.07] p-6 ring-1 ring-brand-500/25">
        <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-brand-300">
          Estimated annual labour
        </p>
        <p className="mt-2 font-display text-[34px] font-extrabold leading-none text-white">
          {annualSaving.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
        </p>
        <p className="mt-2 text-[13px] text-white/70">
          {hoursSaved.toLocaleString()} hours of {annualHours.toLocaleString()}
        </p>
        <p className="mt-4 border-t border-white/10 pt-3 text-[11px]/[1.5] text-white/45">
          An arithmetic estimate from the figures you entered. It is not a quotation, a payback
          guarantee, or a claim about any PrestiVac model&rsquo;s performance.
        </p>
      </div>
    </div>
  );
}
