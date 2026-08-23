"use client";

import { useEffect, useState } from "react";

import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export type ProductSection = { id: string; label: string };

/**
 * Sticky in-page navigation for the product detail page.
 *
 * Scroll spy uses IntersectionObserver rather than a scroll listener, so it
 * costs nothing on the main thread while idle. On mobile the row scrolls
 * horizontally instead of collapsing into a menu — a product page is read
 * top-to-bottom on a phone, and a hidden menu would be one tap too many.
 *
 * Every link is a real anchor to a real section id, so the section list remains
 * usable (and crawlable) with JavaScript disabled.
 */
export function ProductStickyNav({
  productName,
  sections,
  quoteHref,
}: {
  productName: string;
  sections: ProductSection[];
  quoteHref: string;
}) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const targets = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // Band across the upper third: a section counts as current once its start
      // clears the sticky bar, not once it fills the viewport.
      { rootMargin: "-96px 0px -66% 0px", threshold: 0 },
    );

    for (const t of targets) observer.observe(t);
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-16 z-40 border-y border-white/10 bg-graphite-950/95 backdrop-blur-xl lg:top-[68px]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 py-3 font-display text-[13px] font-extrabold tracking-tight text-white xl:block">
          {productName}
        </span>

        <nav aria-label="Product sections" className="min-w-0 flex-1">
          <ul className="-mx-1 flex snap-x gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {sections.map((section) => (
              <li key={section.id} className="snap-start">
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "true" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-lg px-3 py-1.5 text-[12.5px] font-semibold transition-colors",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400",
                    active === section.id
                      ? "bg-brand-500/15 text-brand-300 ring-1 ring-brand-500/40"
                      : "text-white/60 hover:bg-white/[0.06] hover:text-white",
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={quoteHref}
          onClick={() => trackEvent("product_cta", { cta: "request_quote", placement: "sticky_nav", product: productName })}
          className="hidden shrink-0 rounded-lg bg-brand-600 px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 sm:block"
        >
          Request quote
        </a>
      </div>
    </div>
  );
}
