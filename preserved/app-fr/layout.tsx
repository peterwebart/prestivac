import type { Metadata } from "next";

import { localeAlternates } from "@/lib/i18n";

export const metadata: Metadata = {
  alternates: { languages: localeAlternates("/") },
};

/**
 * French route group.
 *
 * No locale banner here: the navbar already carries a single language switcher
 * that resolves to the counterpart page, which is strictly better than a banner
 * linking to the English home. Two switchers on one page is a confusing choice,
 * not a helpful one.
 *
 * The subtree language is declared here because the root <html lang> is en-US.
 * A per-locale root layout would set it properly and remains the correct fix.
 */
export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <div lang="fr-CA">{children}</div>;
}
