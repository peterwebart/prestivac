import type { Metadata } from "next";
import Link from "next/link";

import { FR } from "@/lib/data/fr";
import { localeAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: { languages: localeAlternates("/") },
};

/** Locale banner so a French visitor can always reach the English site. */
export default function FrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="border-b border-white/10 bg-graphite-900 px-4 py-2 text-center text-[12px] text-white/60">
        <span>Vous consultez le site en français. </span>
        <Link href="/" className="font-semibold text-brand-400 underline underline-offset-2">
          {FR.nav.switchTo}
        </Link>
      </div>
      {/* The root <html lang> is en-US; declaring the subtree language here so
          screen readers and crawlers treat this content as French. A per-locale
          root layout would set <html lang> properly and is the next step. */}
      <div lang="fr-CA">{children}</div>
    </>
  );
}
