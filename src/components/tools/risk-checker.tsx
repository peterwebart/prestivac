"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertTriangle, ArrowRight, FlaskConical, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { OptionGroup } from "@/components/tools/option-group";
import { ToolShell } from "@/components/tools/tool-shell";
import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";

const QUESTIONS = [
  {
    id: "material",
    label: "What best describes the dust?",
    options: [
      { value: "organic", label: "Organic (flour, wood, sugar…)" },
      { value: "metal", label: "Metal fines" },
      { value: "polymer", label: "Plastic / polymer" },
      { value: "chemical", label: "Chemical powder" },
      { value: "unknown", label: "Mixed / unknown" },
    ],
  },
  {
    id: "fineness",
    label: "How fine is it?",
    options: [
      { value: "fine", label: "Fine, like flour" },
      { value: "coarse", label: "Coarse granules or chips" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "layers",
    label: "Do layers build up on surfaces between cleanings?",
    options: [
      { value: "visible", label: "Visible layers form" },
      { value: "minimal", label: "Kept minimal" },
      { value: "unsure", label: "Not sure" },
    ],
  },
  {
    id: "ignition",
    label: "Ignition sources nearby (motors, hot work, static)?",
    options: [
      { value: "present", label: "Present" },
      { value: "controlled", label: "Tightly controlled" },
      { value: "unsure", label: "Not sure" },
    ],
  },
] as const;

type Answers = Partial<Record<(typeof QUESTIONS)[number]["id"], string>>;

/**
 * Deliberately protective: there is no "you're fine" outcome. Untested dust
 * is treated as potentially combustible in both result tiers.
 */
function countIndicators(a: Answers): number {
  let count = 0;
  if (a.fineness === "fine" || a.fineness === "unsure") count += 1;
  if (a.layers === "visible" || a.layers === "unsure") count += 1;
  if (a.ignition === "present" || a.ignition === "unsure") count += 1;
  if (a.material === "unknown") count += 1;
  return count;
}

export function RiskChecker() {
  const [answers, setAnswers] = useState<Answers>({});
  const complete = QUESTIONS.every((q) => answers[q.id]);
  const indicators = countIndicators(answers);
  const elevated = indicators >= 2;

  return (
    <ToolShell
      id="risk-checker"
      eyebrow="Dust Risk Checker"
      title="Is your dust a combustible hazard?"
      description="Four questions that organize the factors a Dust Hazard Analysis looks at first."
      footnote="Educational orientation only — this is not a Dust Hazard Analysis or a safety determination. Your DHA and authority having jurisdiction govern your obligations."
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
                <div className="flex items-start gap-3">
                  {elevated ? (
                    <AlertTriangle
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand-400"
                      strokeWidth={1.8}
                    />
                  ) : (
                    <FlaskConical
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand-400"
                      strokeWidth={1.8}
                    />
                  )}
                  <div>
                    <h3 className="font-display text-[17px]/[1.3] font-extrabold text-white">
                      {elevated
                        ? "Strong indicators — treat this dust as combustible"
                        : "No obvious red flags — but untested dust isn't cleared dust"}
                    </h3>
                    <p className="mt-2 text-[13px]/[1.65] text-white/70">
                      {elevated
                        ? "Several of the factors a DHA examines are present. Until the material is tested (KSt / Pmax) and reviewed against your Dust Hazard Analysis, handle it with grounded, explosion-protected housekeeping equipment."
                        : "Most fine industrial powders are combustible, and only laboratory testing settles it. If a documented DHA hasn't reviewed this material yet, that's the next step."}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-semibold">
                      <Link
                        href="/resources/dust-hazard-analysis"
                        className="text-brand-400 transition-colors hover:text-brand-500"
                      >
                        What a DHA involves &rarr;
                      </Link>
                      <Link
                        href="/resources/nfpa-guide"
                        className="text-brand-400 transition-colors hover:text-brand-500"
                      >
                        The NFPA landscape &rarr;
                      </Link>
                    </div>
                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <Button asChild size="sm">
                        <a href="/get-a-quote">
                          Get a Quote
                          <ArrowRight aria-hidden className="size-3.5" />
                        </a>
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToolShell>
  );
}
