"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, RotateCcw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  recommend,
  visibleSteps,
  type FinderAnswers,
  type Recommendation,
} from "@/lib/data/finder";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function SolutionFinder() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<FinderAnswers>({});
  const [result, setResult] = useState<Recommendation | null>(null);

  // Steps are recomputed from the answers, so skipping a question (liquids skip
  // the metals question) keeps the progress indicator honest.
  const steps = visibleSteps(answers);
  const step = steps[Math.min(stepIndex, steps.length - 1)];
  const total = steps.length;

  const select = (value: string) => {
    const next = { ...answers, [step.id]: value };
    setAnswers(next);
    const nextSteps = visibleSteps(next);
    if (stepIndex >= nextSteps.length - 1) {
      setResult(recommend(next));
    } else {
      setStepIndex(stepIndex + 1);
    }
  };

  const back = () => setStepIndex((index) => Math.max(0, index - 1));

  const reset = () => {
    setAnswers({});
    setStepIndex(0);
    setResult(null);
  };

  return (
    <section id="solution-finder" className="scroll-mt-20 bg-steel-50 py-20 lg:py-24">
      <Container>
        <SectionHeading
          tone="light"
          align="center"
          eyebrow="Solution Finder"
          title="Six questions to the right system"
          description="Answer what you know — 'not sure' is a valid engineering input."
        />

        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl bg-graphite-950 p-6 shadow-panel ring-1 ring-white/10 sm:p-10">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-600/15 blur-[90px]"
          />

          <div aria-live="polite" className="relative">
            <AnimatePresence mode="wait" initial={false}>
              {result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: EASE_OUT }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-400">
                    Recommended for you
                  </p>
                  <h3 className="mt-2 font-display text-[22px]/[1.25] font-extrabold text-white sm:text-2xl/[1.2]">
                    {result.headline}
                  </h3>

                  <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
                    <div className="relative aspect-square w-36 shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-white/20">
                      <Image
                        src={result.category.image}
                        alt={result.category.alt}
                        fill
                        sizes="144px"
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-[15px] font-extrabold text-white">
                        {result.category.name}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {result.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-2.5 text-[13px]/[1.55] text-white/75"
                          >
                            <Check
                              aria-hidden
                              className="mt-0.5 size-4 shrink-0 text-brand-400"
                              strokeWidth={2.2}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                      {result.note && (
                        <p className="mt-3 text-[12.5px]/[1.6] text-white/55">
                          {result.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {result.models.length > 0 && (
                    <div className="mt-7">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-steel-500">
                        Models that match
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {result.models.map((model) => (
                          <li key={model.slug}>
                            <Link
                              href={"/products/models/" + model.slug}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-steel-100 px-3 py-1.5 text-[12.5px] font-semibold text-steel-700 transition-colors hover:text-brand-600"
                            >
                              {model.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Button asChild size="md">
                      <a href="/get-a-quote">
                        Get a Quote
                        <ArrowRight aria-hidden className="size-3.5" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="md">
                      <Link href={"/products/" + result.category.slug}>
                        Explore {result.category.name}
                      </Link>
                    </Button>
                    <button
                      type="button"
                      onClick={reset}
                      className="inline-flex items-center gap-1.5 px-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/55 transition-colors hover:text-white"
                    >
                      <RotateCcw aria-hidden className="size-3.5" />
                      Start over
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  role="group"
                  aria-labelledby={"finder-q-" + step.id}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
                      Step {stepIndex + 1} of {total}
                    </p>
                    {/* Progress dots */}
                    <div aria-hidden className="flex items-center gap-1.5">
                      {steps.map((s, index) => (
                        <span
                          key={s.id}
                          className={cn(
                            "h-1.5 rounded-full transition-all duration-300",
                            index < stepIndex
                              ? "w-4 bg-brand-500"
                              : index === stepIndex
                                ? "w-6 bg-brand-500"
                                : "w-4 bg-white/15",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <h3
                    id={"finder-q-" + step.id}
                    className="mt-4 font-display text-[20px]/[1.3] font-extrabold text-white sm:text-[22px]"
                  >
                    {step.question}
                  </h3>
                  {step.hint && (
                    <p className="mt-1.5 text-[13px]/[1.55] text-white/55">
                      {step.hint}
                    </p>
                  )}

                  <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {step.options.map((option) => {
                      const selected = answers[step.id] === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => select(option.value)}
                          className={cn(
                            "rounded-xl border px-4 py-3.5 text-left text-[13px]/[1.35] font-medium transition-colors duration-200",
                            selected
                              ? "border-brand-500 bg-white/10 text-white"
                              : "border-white/12 bg-white/[0.05] text-white/85 hover:border-brand-500/60 hover:bg-white/[0.09]",
                          )}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-7 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={back}
                      disabled={stepIndex === 0}
                      className="inline-flex items-center gap-1.5 px-2 py-1 text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/55 transition-colors hover:text-white disabled:invisible"
                    >
                      <ArrowLeft aria-hidden className="size-3.5" />
                      Back
                    </button>
                    <p className="text-[11.5px] text-white/45">
                      <span className="text-white/60">Prefer to talk it through?</span>{" "}
                      <a
                        href="/get-a-quote"
                        className="font-semibold text-brand-400 transition-colors hover:text-brand-500"
                      >
                        Ask an engineer
                      </a>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
