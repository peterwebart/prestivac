"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { ToolShell } from "@/components/tools/tool-shell";
import { Button } from "@/components/ui/button";

function formatUsd(value: number) {
  return "$" + Math.round(value).toLocaleString("en-US");
}

type SliderProps = {
  id: string;
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  format: (value: number) => string;
};

function Slider({ id, label, min, max, step, value, onChange, format }: SliderProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[12.5px] font-semibold text-white">
          {label}
        </label>
        <output
          htmlFor={id}
          className="font-display text-[15px] font-extrabold text-brand-400"
        >
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-2 w-full accent-brand-500"
      />
    </div>
  );
}

export function CostCalculator() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(45);
  const [interruptions, setInterruptions] = useState(4);
  const [interruptionCost, setInterruptionCost] = useState(1500);

  const labor = hours * rate * 52;
  const downtime = interruptions * interruptionCost;
  const total = labor + downtime;

  return (
    <ToolShell
      id="cost-calculator"
      eyebrow="The Business Case"
      title="What does housekeeping cost you today?"
      description="Your numbers, plain arithmetic — no invented savings percentages."
      footnote="This calculates the cost of your current approach from your own inputs. What the right vacuum changes — cleanup time, interruption frequency, filter life — depends on your facility, so send us the numbers with your quote request."
    >
      <div className="grid gap-8 sm:grid-cols-[1fr_240px] sm:gap-10">
        <div className="space-y-6">
          <Slider
            id="cc-hours"
            label="Hours spent on manual dust cleanup, per week"
            min={0}
            max={60}
            step={1}
            value={hours}
            onChange={setHours}
            format={(v) => v + " h"}
          />
          <Slider
            id="cc-rate"
            label="Fully loaded labor rate"
            min={20}
            max={150}
            step={5}
            value={rate}
            onChange={setRate}
            format={(v) => formatUsd(v) + "/h"}
          />
          <Slider
            id="cc-interruptions"
            label="Production interruptions for cleanup, per year"
            min={0}
            max={52}
            step={1}
            value={interruptions}
            onChange={setInterruptions}
            format={(v) => String(v)}
          />
          <Slider
            id="cc-interruption-cost"
            label="Average cost per interruption"
            min={0}
            max={20000}
            step={250}
            value={interruptionCost}
            onChange={setInterruptionCost}
            format={formatUsd}
          />
        </div>

        <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/55">
            Estimated annual cost
          </p>
          <p
            aria-live="polite"
            className="mt-2 font-display text-[34px]/none font-extrabold tracking-tight text-brand-400"
          >
            {formatUsd(total)}
          </p>
          <dl className="mt-4 space-y-1.5 text-[12px] text-white/60">
            <div className="flex justify-between gap-3">
              <dt>Cleanup labor</dt>
              <dd className="font-semibold text-white/80">{formatUsd(labor)}</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Interruptions</dt>
              <dd className="font-semibold text-white/80">{formatUsd(downtime)}</dd>
            </div>
          </dl>
          <Button asChild size="sm" className="mt-auto pt-0.5">
            <a href="/get-a-quote">
              Get a Quote
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </ToolShell>
  );
}
