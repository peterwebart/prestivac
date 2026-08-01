"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type PageSection = { id: string; label: string };

/** Sticky "In this page" scrollspy navigation for deep-dive pages. */
export function InThisPage({ sections }: { sections: PageSection[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="In this page"
      className="sticky top-24 hidden max-h-[calc(100vh-7rem)] self-start overflow-y-auto rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10 lg:block"
    >
      <p className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-400">
        In this page
      </p>
      <ul className="mt-3 space-y-0.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={"#" + section.id}
              aria-current={active === section.id ? "true" : undefined}
              className={cn(
                "block rounded-lg px-2.5 py-1.5 text-[12px] font-semibold transition-colors",
                active === section.id
                  ? "bg-brand-600/15 text-brand-400"
                  : "text-white/55 hover:bg-white/[0.05] hover:text-white/85",
              )}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
