"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenCheck,
  Boxes,
  FileSearch,
  Headset,
  LayoutGrid,
  ScrollText,
  Search,
  ShieldAlert,
  SlidersHorizontal,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { COMPANY_BAND } from "@/lib/data/company";
import { FAQ, FAQ_CATEGORIES, type FaqCategory } from "@/lib/data/faq";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<FaqCategory | "all", LucideIcon> = {
  all: LayoutGrid,
  "explosion-safety": ShieldAlert,
  standards: ScrollText,
  selection: SlidersHorizontal,
  applications: Boxes,
  operation: Wrench,
};

const POPULAR_SEARCHES = [
  "Explosion proof",
  "ATEX",
  "HEPA",
  "Combustible dust",
  "Aluminum dust",
  "NFPA 660",
];

const QUICK_CARDS = [
  { icon: Headset, label: "Get a Quote", blurb: "Application-specific answers", href: "#contact" },
  { icon: BookOpenCheck, label: "Compliance Guides", blurb: "NFPA, OSHA, DHA explained", href: "/resources" },
  { icon: FileSearch, label: "Case Studies", blurb: "Representative applications", href: "/case-studies" },
  { icon: Wrench, label: "Interactive Tools", blurb: "Finder, checker, calculators", href: "/#solution-finder" },
  { icon: Boxes, label: "Dusts & Materials", blurb: "Searchable material directory", href: "/materials" },
  { icon: LayoutGrid, label: "Applications Guide", blurb: "Solutions by industry & task", href: "/applications" },
];

function readMinutes(text: string) {
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 180));
}

export function KnowledgeFaq() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<FaqCategory | "all">("all");
  const [selectedId, setSelectedId] = useState(FAQ[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQ.filter((item) => {
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q)
      );
    });
  }, [query, category]);

  const active =
    filtered.find((item) => item.id === selectedId) ?? filtered[0] ?? null;
  const alsoAsk = filtered.filter((item) => item.id !== active?.id).slice(0, 4);
  const categoryLabel = (id: FaqCategory) =>
    FAQ_CATEGORIES.find((c) => c.id === id)?.label ?? id;

  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/10 bg-graphite-950 py-20 lg:py-24">
      <Container>
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-brand-400">
              Knowledge Center &amp; FAQ
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-[26px]/[1.12] font-extrabold uppercase text-white sm:text-[30px]/[1.1]">
              Quick answers. Expert knowledge. Trusted solutions.
            </h2>
          </div>
          <Button asChild size="md">
            <a href="/get-a-quote">
              <Headset aria-hidden className="size-4" />
              Get a Quote
            </a>
          </Button>
        </div>

        {/* Search */}
        <div className="relative mt-8 max-w-2xl">
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-white/40" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for questions, products, industries, standards..."
            aria-label="Search the knowledge center"
            className="h-12 w-full rounded-xl bg-white/[0.06] pl-11 pr-4 text-[14px] text-white ring-1 ring-white/15 placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
          />
        </div>

        {/* Category tabs */}
        <div role="tablist" aria-label="FAQ categories" className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
          {FAQ_CATEGORIES.map((tab) => {
            const TabIcon = CATEGORY_ICONS[tab.id];
            const isActive = category === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setCategory(tab.id)}
                className={cn(
                  "flex items-center gap-2.5 rounded-xl p-3 text-left ring-1 transition-all",
                  isActive
                    ? "bg-brand-600/15 ring-brand-500/60"
                    : "bg-white/[0.04] ring-white/10 hover:ring-white/25",
                )}
              >
                <TabIcon
                  aria-hidden
                  className={cn("size-4.5 shrink-0", isActive ? "text-brand-400" : "text-white/45")}
                  strokeWidth={1.8}
                />
                <span className={cn("text-[12px] font-bold", isActive ? "text-white" : "text-white/65")}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Popular searches */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">
            Popular searches
          </span>
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => setQuery(term)}
              className="rounded-full bg-white/[0.06] px-3 py-1 text-[11.5px] font-semibold text-white/60 ring-1 ring-white/10 transition-colors hover:text-white"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Question list + answer panel */}
        {filtered.length === 0 ? (
          <p className="mt-8 max-w-xl rounded-xl bg-white/[0.04] p-5 text-[13.5px]/[1.65] text-white/60 ring-1 ring-white/10">
            Nothing matches that search — try a broader term, or{" "}
            <a href="/get-a-quote" className="font-semibold text-brand-400">demandez-nous directly</a>.
          </p>
        ) : (
          <div className="mt-8 grid gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
            <div className="max-h-[520px] space-y-2 overflow-y-auto pr-1" role="list" aria-label="Questions">
              {filtered.map((item) => {
                const isActive = item.id === active?.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "block w-full rounded-xl p-4 text-left ring-1 transition-all",
                      isActive
                        ? "bg-brand-600/15 ring-brand-500/60"
                        : "bg-white/[0.04] ring-white/10 hover:ring-white/25",
                    )}
                  >
                    <span className={cn("text-[13px]/[1.4] font-bold", isActive ? "text-white" : "text-white/75")}>
                      {item.question}
                    </span>
                    <span className="mt-1.5 block text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white/40">
                      {categoryLabel(item.category)} · {readMinutes(item.answer)} min read
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {active && (
                <motion.article
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                  className="rounded-3xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8"
                >
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-brand-400">
                    {categoryLabel(active.category)} · {readMinutes(active.answer)} min read
                  </p>
                  <h3 className="mt-2 font-display text-[20px]/[1.25] font-extrabold text-white sm:text-[22px]/[1.2]">
                    {active.question}
                  </h3>
                  <p className="mt-4 text-[14px]/[1.75] text-white/70">{active.answer}</p>

                  {active.related.length > 0 && (
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/40">
                        Related content
                      </p>
                      <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                        {active.related.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-400 transition-colors hover:text-brand-500"
                            >
                              {link.label}
                              <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Button asChild size="sm">
                      <a href="/get-a-quote">
                        Get a Quote
                        <ArrowRight aria-hidden className="size-3.5" />
                      </a>
                    </Button>
                    <Link
                      href="/resources"
                      className="text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
                    >
                      Browse resources &rarr;
                    </Link>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* People also ask */}
        {alsoAsk.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/40">
              People also ask
            </span>
            {alsoAsk.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedId(item.id)}
                className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[11.5px] font-semibold text-white/60 ring-1 ring-white/10 transition-colors hover:text-white"
              >
                {item.question}
              </button>
            ))}
          </div>
        )}

        {/* Quick cards */}
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {QUICK_CARDS.map((card) => (
            <li key={card.label}>
              <Link
                href={card.href}
                className="group flex h-full flex-col rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/50 motion-safe:hover:-translate-y-1"
              >
                <card.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                <span className="mt-3 text-[12.5px] font-bold text-white">{card.label}</span>
                <span className="mt-0.5 text-[11px]/[1.5] text-white/50">{card.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Positioning band — qualitative until client-verified figures land */}
        <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-3 lg:grid-cols-5">
          {COMPANY_BAND.map((item) => (
            <li key={item.label} className="bg-graphite-900/80 px-4 py-5 text-center">
              <p className="font-display text-[15px] font-extrabold text-white">{item.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/45">{item.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
