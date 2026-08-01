"use client";

import { ArrowRight, Search, Wand2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { MODEL_LINEUP, modelSlug } from "@/lib/data/product-models";
import { cn } from "@/lib/utils";

type FlatModel = {
  name: string;
  image: string;
  tags: string[];
  seriesId: string;
  seriesName: string;
};

const ALL_MODELS: FlatModel[] = MODEL_LINEUP.flatMap((series) =>
  series.models.map((model) => ({
    ...model,
    seriesId: series.id,
    seriesName: series.name,
  })),
);

const SERIES_META = MODEL_LINEUP.map((s) => ({
  id: s.id,
  name: s.name,
  blurb: s.blurb,
  categoryHref: s.categoryHref,
  count: s.models.length,
}));

type Answer = {
  label: string;
  detail: string;
  seriesId: string | null;
  note: string;
};

const RECOVERY_OPTIONS: {
  id: string;
  label: string;
  followUp?: boolean;
  answer?: Answer;
}[] = [
  { id: "combustible", label: "Combustible dust", followUp: true },
  {
    id: "toxic",
    label: "Toxic or exposure-limit dust",
    answer: {
      label: "EX1 Series — HEPA industrial",
      detail:
        "Tested HEPA retention (99.99% at 0.3 µm) with sealed handling for silica, lead and other exposure-limit materials.",
      seriesId: "ex1",
      note: "Where the dust is also combustible, the explosion-proof series apply — your Dust Hazard Analysis governs.",
    },
  },
  {
    id: "general",
    label: "General industrial debris",
    answer: {
      label: "AV1 / EV1 Series — compact industrial",
      detail:
        "Everyday chips, grit and facility dust — continuous-duty recovery without the rated-equipment premium.",
      seriesId: "av1",
      note: "If any combustible powder enters the stream, the material's own rules take over.",
    },
  },
  {
    id: "liquids",
    label: "Liquids or wet material",
    answer: {
      label: "Wet-capable configurations — engineering confirmation",
      detail:
        "Wet-capable setups exist across the lineup, and flammable-liquid areas point to air-operated recovery with zero electrical components.",
      seriesId: "avx",
      note: "Compatibility with your specific liquids is confirmed by an engineer before staging — always.",
    },
  },
];

const POWER_ANSWERS: Record<string, Answer> = {
  electric: {
    label: "EVX Series — explosion-proof electric",
    detail:
      "Rated electric recovery with HEPA filtration for classified combustible-dust areas.",
    seriesId: "evx",
    note: "Area classification comes from your Dust Hazard Analysis — specify against it.",
  },
  air: {
    label: "AVX Series — air-operated, zero electrical",
    detail:
      "No electrical components anywhere on the unit — the flammable-area and hot-work default.",
    seriesId: "avx",
    note: "Compressed-air supply sized on request; grounding discipline applies as everywhere.",
  },
};

export function ProductCatalog() {
  const [seriesFilter, setSeriesFilter] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [recovering, setRecovering] = useState<string | null>(null);
  const [answer, setAnswer] = useState<Answer | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_MODELS.filter(
      (m) =>
        (seriesFilter === "all" || m.seriesId === seriesFilter) &&
        (q === "" || m.name.toLowerCase().includes(q)),
    );
  }, [seriesFilter, query]);

  const pick = (a: Answer) => {
    setAnswer(a);
    if (a.seriesId) setSeriesFilter(a.seriesId);
  };

  return (
    <div>
      {/* Guided selector */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div className="flex items-center gap-2.5">
          <Wand2 aria-hidden className="size-4 text-brand-400" />
          <h3 className="font-display text-[15px] font-extrabold uppercase tracking-[0.08em] text-white">
            Find the right series in two questions
          </h3>
        </div>
        <p className="mt-2 text-[13px]/[1.65] text-white/60">
          What are you recovering?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {RECOVERY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setRecovering(opt.id);
                if (opt.answer) pick(opt.answer);
                else setAnswer(null);
              }}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[12px] font-bold transition-colors",
                recovering === opt.id
                  ? "border-brand-500 bg-brand-500/15 text-white"
                  : "border-white/15 bg-white/[0.04] text-white/70 hover:border-brand-500/60 hover:text-white",
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {recovering === "combustible" && (
          <div className="mt-4">
            <p className="text-[13px]/[1.65] text-white/60">
              Power on site for the recovery point?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => pick(POWER_ANSWERS.electric)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[12px] font-bold transition-colors",
                  answer?.seriesId === "evx"
                    ? "border-brand-500 bg-brand-500/15 text-white"
                    : "border-white/15 bg-white/[0.04] text-white/70 hover:border-brand-500/60 hover:text-white",
                )}
              >
                Electric available
              </button>
              <button
                type="button"
                onClick={() => pick(POWER_ANSWERS.air)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-[12px] font-bold transition-colors",
                  answer?.seriesId === "avx"
                    ? "border-brand-500 bg-brand-500/15 text-white"
                    : "border-white/15 bg-white/[0.04] text-white/70 hover:border-brand-500/60 hover:text-white",
                )}
              >
                Compressed air only
              </button>
            </div>
          </div>
        )}

        {answer && (
          <div className="mt-5 rounded-2xl border border-brand-500/30 bg-brand-500/[0.08] p-5">
            <p className="font-display text-[14px] font-extrabold uppercase tracking-[0.06em] text-white">
              {answer.label}
            </p>
            <p className="mt-1.5 text-[13px]/[1.65] text-white/75">{answer.detail}</p>
            <p className="mt-2 text-[12px]/[1.6] text-white/55">{answer.note}</p>
            <a
              href="/get-a-quote"
              className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.08em] text-brand-400 transition-colors hover:text-brand-500"
            >
              Confirm with an engineer — specs on request
              <ArrowRight aria-hidden className="size-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Filter bar */}
      <div className="mt-10 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setSeriesFilter("all")}
          className={cn(
            "rounded-full border px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.05em] transition-colors",
            seriesFilter === "all"
              ? "border-brand-500 bg-brand-500/15 text-white"
              : "border-white/15 bg-white/[0.04] text-white/65 hover:border-brand-500/60 hover:text-white",
          )}
        >
          All models ({ALL_MODELS.length})
        </button>
        {SERIES_META.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSeriesFilter(s.id)}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.05em] transition-colors",
              seriesFilter === s.id
                ? "border-brand-500 bg-brand-500/15 text-white"
                : "border-white/15 bg-white/[0.04] text-white/65 hover:border-brand-500/60 hover:text-white",
            )}
          >
            {s.name} ({s.count})
          </button>
        ))}
        <label className="relative ml-auto min-w-[220px] flex-1 sm:max-w-xs">
          <Search
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search model names…"
            className="w-full rounded-full border border-white/15 bg-white/[0.05] py-2 pl-9 pr-4 text-[13px] text-white placeholder:text-white/35 outline-none transition-colors focus:border-brand-500/70"
          />
        </label>
      </div>

      {/* Active series blurb */}
      {seriesFilter !== "all" && (
        <p className="mt-4 text-[13px]/[1.65] text-white/60">
          {SERIES_META.find((s) => s.id === seriesFilter)?.blurb}{" "}
          <a
            href={SERIES_META.find((s) => s.id === seriesFilter)?.categoryHref}
            className="font-bold text-brand-400 transition-colors hover:text-brand-500"
          >
            View category &rarr;
          </a>
        </p>
      )}

      {/* Model grid */}
      {visible.length > 0 ? (
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {visible.map((model) => (
            <li key={model.name}>
              <Link
                href={"/products/models/" + modelSlug(model)}
                className="flex h-full flex-col rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition-colors hover:ring-brand-500/50"
              >
                <span className="relative block h-28 overflow-hidden rounded-lg bg-white">
                  <Image
                    src={model.image}
                    alt={"PrestiVac " + model.name}
                    fill
                    sizes="(min-width: 1024px) 180px, 45vw"
                    className="object-contain p-1.5"
                  />
                </span>
                <span className="mt-2.5 text-[12px] font-bold text-white">{model.name}</span>
                <span className="mt-1.5 flex flex-wrap gap-1">
                  <span className="rounded bg-brand-500/15 px-1.5 py-0.5 text-[9.5px] font-bold tracking-[0.06em] text-brand-300">
                    {model.seriesName.replace(" Series", "")}
                  </span>
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.08] px-1.5 py-0.5 text-[9.5px] font-bold tracking-[0.06em] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-[13.5px]/[1.7] text-white/60">
          No model names match &ldquo;{query}&rdquo;. Series and configurations
          not shown here are quoted directly —{" "}
          <a href="/get-a-quote" className="font-bold text-brand-400">
            ask an engineer
          </a>
          .
        </p>
      )}
    </div>
  );
}
