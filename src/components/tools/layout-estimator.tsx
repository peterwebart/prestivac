"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { OptionGroup } from "@/components/tools/option-group";
import { ToolShell } from "@/components/tools/tool-shell";
import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

const QUESTIONS = [
  {
    id: "area",
    label: "Facility floor area",
    options: [
      { value: "0", label: "Under 10,000 sq ft" },
      { value: "1", label: "10–50,000 sq ft" },
      { value: "2", label: "50–150,000 sq ft" },
      { value: "3", label: "150,000+ sq ft" },
    ],
  },
  {
    id: "points",
    label: "Cleaning points / stations",
    options: [
      { value: "0", label: "1–3" },
      { value: "1", label: "4–10" },
      { value: "2", label: "11–25" },
      { value: "3", label: "25+" },
    ],
  },
  {
    id: "operators",
    label: "Operators cleaning at the same time",
    options: [
      { value: "0", label: "1" },
      { value: "1", label: "2–3" },
      { value: "2", label: "4+" },
    ],
  },
  {
    id: "discharge",
    label: "Consolidating waste at one discharge point",
    options: [
      { value: "1", label: "Important" },
      { value: "0", label: "Not critical" },
    ],
  },
] as const;

type Answers = Partial<Record<(typeof QUESTIONS)[number]["id"], string>>;

function verdict(score: number) {
  if (score >= 6) {
    return {
      title: "A central vacuum system is worth engineering",
      body: "At this scale — many cleaning points, simultaneous operators, consolidated discharge — fixed inlet drops served by a remote power unit usually beat moving equipment around. The next step is a facility assessment to lay out piping runs and size the power unit.",
      link: { href: "/products/central-vacuum-systems", label: "Central Vacuum Systems" },
    };
  }
  if (score >= 4) {
    return {
      title: "Start portable, scope the central option",
      body: "Your profile sits in the overlap: a portable fleet covers today's housekeeping, while the cleaning-point count suggests a central system may pay off as operations grow. Worth pricing both in one assessment.",
      link: { href: "/products/central-vacuum-systems", label: "Central Vacuum Systems" },
    };
  }
  return {
    title: "A portable fleet likely fits",
    body: "With a compact footprint and few simultaneous operators, portable units matched to your material are the straightforward answer — no piping, no fixed infrastructure, redeployable as the plant changes.",
    link: { href: "/#solution-finder", label: "Find the right portable unit" },
  };
}

export function LayoutEstimator() {
  const [answers, setAnswers] = useState<Answers>({});
  const complete = QUESTIONS.every((q) => answers[q.id]);
  const score = Object.values(answers).reduce((sum, v) => sum + Number(v ?? 0), 0);
  const result = verdict(score);

  return (
    <ToolShell
      id="layout-estimator"
      eyebrow="Facility Layout Estimator"
      title="Portable fleet or central system?"
      description="Four inputs for a preliminary read on which architecture fits your facility."
      footnote="Preliminary orientation only — piping runs, vertical distance and material properties can change the answer. A facility assessment settles it."
    >
      <div className="space-y-6">
        {QUESTIONS.map((question) => (
          <OptionGroup
            key={question.id}
            label={question.label}
            options={[...question.options]}
            value={answers[question.id]}
            onChange={(value) =>
              setAnswers((current) => ({ ...current, [question.id]: value }))
            }
          />
        ))}
      </div>

      <div aria-live="polite">
        <AnimatePresence initial={false}>
          {complete && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-brand-400">
                  Preliminary read
                </p>
                <h3 className="mt-1.5 font-display text-[17px]/[1.3] font-extrabold text-white">
                  {result.title}
                </h3>
                <p className="mt-2 text-[13px]/[1.65] text-white/70">{result.body}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Button asChild size="sm">
                    <a href="/get-a-quote">
                      Request an Assessment
                      <ArrowRight aria-hidden className="size-3.5" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href={result.link.href}>{result.link.label}</Link>
                  </Button>
                  <button
                    type="button"
                    onClick={() => setAnswers({})}
                    className="inline-flex items-center gap-1.5 px-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white/55 transition-colors hover:text-white"
                  >
                    <RotateCcw aria-hidden className="size-3" />
                    Reset
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToolShell>
  );
}
