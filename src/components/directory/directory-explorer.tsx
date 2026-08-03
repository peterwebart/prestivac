"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type DirectoryGroup = {
  slug: string;
  name: string;
  icon: LucideIcon;
  items: string[];
};

type DirectoryExplorerProps = {
  groups: DirectoryGroup[];
  featuredLinks: Record<string, string>;
  searchLabel: string;
  searchPlaceholder: string;
};

/** Searchable directory grid shared by the applications and materials hubs. */
export function DirectoryExplorer({
  groups,
  featuredLinks,
  searchLabel,
  searchPlaceholder,
}: DirectoryExplorerProps) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  // Alphabetical: groups A→Z, and each group's entries A→Z.
  const sortedGroups = useMemo(
    () =>
      [...groups]
        .map((group) => ({ ...group, items: [...group.items].sort((a, b) => a.localeCompare(b)) }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    [groups],
  );

  const totalItems = useMemo(
    () => sortedGroups.reduce((count, group) => count + group.items.length, 0),
    [sortedGroups],
  );

  const visible = !q
    ? sortedGroups
    : sortedGroups
        .map((group) =>
          group.name.toLowerCase().includes(q)
            ? group
            : { ...group, items: group.items.filter((item) => item.toLowerCase().includes(q)) },
        )
        .filter((group) => group.items.length > 0);

  const shownItems = visible.reduce((count, group) => count + group.items.length, 0);

  return (
    <div>
      <div className="relative mt-6 max-w-xl">
        <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-4.5 -translate-y-1/2 text-white/40" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          aria-label={searchLabel}
          className="h-12 w-full rounded-xl bg-white/[0.06] pl-11 pr-4 text-[14px] text-white ring-1 ring-white/15 placeholder:text-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
        />
      </div>

      <nav aria-label="Directory groups" className="mt-5 flex flex-wrap gap-2">
        {sortedGroups.map((group) => (
          <a
            key={group.slug}
            href={"#" + group.slug}
            onClick={() => setQuery("")}
            className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[11.5px] font-semibold text-white/60 ring-1 ring-white/10 transition-colors hover:text-white"
          >
            {group.name}
          </a>
        ))}
      </nav>

      <p aria-live="polite" className="mt-5 text-[12px] font-semibold text-white/50">
        {q
          ? `${shownItems} of ${totalItems} entries match "${query.trim()}"`
          : `${totalItems} entries across ${sortedGroups.length} groups`}
      </p>

      {visible.length === 0 ? (
        <p className="mt-6 max-w-xl rounded-xl bg-white/[0.04] p-5 text-[13.5px]/[1.65] text-white/60 ring-1 ring-white/10">
          Nothing matches that search — try a broader term, or{" "}
          <a href="/get-a-quote" className="font-semibold text-brand-400">demandez-nous directly</a>
          ; material identification is where every specification starts.
        </p>
      ) : (
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((group) => (
            <div key={group.slug} id={group.slug} className="scroll-mt-24 rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-600/15">
                  <group.icon aria-hidden className="size-5 text-brand-400" strokeWidth={1.7} />
                </span>
                <h3 className="font-display text-[15.5px]/[1.25] font-extrabold text-white">{group.name}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => {
                  const featuredHref = featuredLinks[item];
                  return (
                    <li key={item}>
                      {featuredHref ? (
                        <Link href={featuredHref} className="inline-block rounded-full bg-brand-600/15 px-2.5 py-1 text-[11px] font-semibold text-brand-300 ring-1 ring-brand-500/30 transition-colors hover:bg-brand-600/25">
                          {item} &rarr;
                        </Link>
                      ) : (
                        <span className="inline-block rounded-full bg-white/[0.06] px-2.5 py-1 text-[11px] font-medium text-white/60">
                          {item}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
