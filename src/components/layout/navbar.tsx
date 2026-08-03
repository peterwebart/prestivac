"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { NAV_MENUS } from "@/lib/data/nav-menus";
import { EASE_OUT } from "@/lib/motion";
import { LOCALE_PAIRS } from "@/lib/i18n";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const topLevelLink =
  "group flex items-center gap-1 text-[13px] font-medium text-white/75 transition-colors hover:text-white";

/** Routes that exist in French. Kept short and explicit rather than mirroring the
 * English information architecture, because only part of the site is translated —
 * a French visitor should not be offered links that land them in English. */
const FR_NAV = [
  { label: "Aspirateurs antidéflagrants", href: "/fr/aspirateurs-antideflagrants" },
  { label: "Poussières et matières", href: "/fr/poussieres-et-matieres" },
  { label: "Applications", href: "/fr/applications" },
  { label: "Industries", href: "/fr/industries" },
  { label: "Guides", href: "/fr/guides" },
  { label: "Études de cas", href: "/fr/etudes-de-cas" },
  { label: "À propos", href: "/fr/a-propos" },
];

/** Counterpart page in the other language, falling back to that locale's home. */
function counterpart(pathname: string): { href: string; label: string } {
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  if (isFr) {
    const pair = LOCALE_PAIRS.find((p) => p.fr === pathname);
    return { href: pair ? pair.en : "/", label: "English" };
  }
  const pair = LOCALE_PAIRS.find((p) => p.en === pathname);
  return { href: pair ? pair.fr : "/fr", label: "Français" };
}

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");
  const other = counterpart(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-white/10 bg-graphite-950/80 backdrop-blur-xl"
            : "bg-gradient-to-b from-graphite-950/80 to-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          {/* Logo lockup — tagline is live text for accessibility and SEO */}
          <Link
            href={isFr ? "/fr" : "/"}
            aria-label={isFr ? "PrestiVac — accueil" : "PrestiVac — home"}
            className="flex shrink-0 flex-col"
          >
            <Image
              src="/images/logo-white.png"
              alt="PrestiVac"
              width={752}
              height={220}
              priority
              sizes="150px"
              className="h-7 w-auto sm:h-8"
            />
            <span
              aria-hidden
              className="ml-[2px] mt-0.5 hidden whitespace-nowrap text-[6.5px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:block"
            >
              {site.lockupTagline}
            </span>
          </Link>
          {isFr ? (
            <nav aria-label="Navigation" className="hidden items-center gap-1 lg:flex">
              {FR_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-[13px] font-semibold text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : (

          <NavigationMenu.Root aria-label="Main" className="hidden xl:block">
            <NavigationMenu.List className="flex items-center gap-6">
              {site.nav
                .filter((item) => !item.mobileOnly)
                .map((item) => {
                const menu = item.hasMenu ? NAV_MENUS[item.label] : undefined;

                if (!menu) {
                  return (
                    <NavigationMenu.Item key={item.label}>
                      <NavigationMenu.Link asChild>
                        {item.href.startsWith("#") ? (
                          <a href={item.href} className={topLevelLink}>
                            {item.label}
                          </a>
                        ) : (
                          <Link href={item.href} className={topLevelLink}>
                            {item.label}
                          </Link>
                        )}
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  );
                }

                const links = menu.sorted
                  ? [...menu.links].sort((a, b) => a.label.localeCompare(b.label))
                  : menu.links;

                return (
                  <NavigationMenu.Item key={item.label} className="relative">
                    <NavigationMenu.Trigger className={topLevelLink}>
                      {item.label}
                      <ChevronDown
                        aria-hidden
                        className="size-3.5 opacity-70 transition-transform duration-200 group-data-[state=open]:rotate-180"
                      />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content
                      className={cn(
                        "absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2 rounded-2xl border border-white/10 bg-graphite-900/95 p-3 shadow-panel backdrop-blur-xl motion-safe:animate-menu-in",
                        // Invisible bridge so the pointer can cross the gap
                        "before:absolute before:inset-x-0 before:-top-4 before:h-4",
                        menu.mega
                          ? "w-[1040px] max-w-[94vw]"
                          : menu.columns
                            ? "w-[560px]"
                            : "w-[380px]",
                      )}
                    >
                      {menu.mega ? (
                        // Long lists: one flat alphabetical grid. Letter-grouped
                        // blocks left ragged empty cells and forced scrolling;
                        // an even grid fits 40 items without either.
                        <ul className="grid grid-cols-2 gap-x-6 gap-y-0.5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                          {links.map((link) => (
                            <li key={link.href}>
                              <NavigationMenu.Link asChild>
                                <Link
                                  href={link.href}
                                  className="block truncate rounded-md px-2 py-1.5 text-[12.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.07] hover:text-white focus-visible:bg-white/[0.07]"
                                >
                                  {link.label}
                                </Link>
                              </NavigationMenu.Link>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <ul className={cn("grid gap-1", menu.columns && "grid-cols-2")}>
                          {links.map((link) => (
                            <li key={link.href}>
                              <NavigationMenu.Link asChild>
                                <Link
                                  href={link.href}
                                  className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.06] focus-visible:bg-white/[0.06]"
                                >
                                  <span className="block text-[13px] font-semibold text-white">
                                    {link.label}
                                  </span>
                                  {link.description && (
                                    <span className="mt-0.5 block text-[11.5px] text-white/55">
                                      {link.description}
                                    </span>
                                  )}
                                </Link>
                              </NavigationMenu.Link>
                            </li>
                          ))}
                        </ul>
                      )}
                      {menu.footer && (
                        <div className="mt-2 border-t border-white/10 pt-2">
                          <NavigationMenu.Link asChild>
                            <Link
                              href={menu.footer.href}
                              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-[11.5px] font-bold uppercase tracking-[0.1em] text-brand-400 transition-colors hover:text-brand-500"
                            >
                              {menu.footer.label}
                              <ArrowRight aria-hidden className="size-3.5" />
                            </Link>
                          </NavigationMenu.Link>
                        </div>
                      )}
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                );
              })}
            </NavigationMenu.List>
          </NavigationMenu.Root>
          )}

          <div className="flex items-center gap-4">
            <Link
              href={other.href}
              hrefLang={other.label === "Français" ? "fr-CA" : "en-US"}
              className="hidden rounded-lg border border-white/15 px-3 py-1.5 text-[12px] font-bold uppercase tracking-[0.08em] text-white/70 transition-colors hover:text-white sm:inline-flex"
            >
              {other.label}
            </Link>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href={isFr ? `/fr/${FR.quote.slug}` : "/get-a-quote"}>
                {isFr ? FR.nav.quote : "Get a Quote"}
                <ArrowRight aria-hidden className="size-3.5" />
              </a>
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(true)}
              className="flex size-10 items-center justify-center rounded-md text-white/85 transition-colors hover:bg-white/10 hover:text-white xl:hidden"
            >
              <Menu aria-hidden className="size-6" strokeWidth={1.75} />
            </button>
          </div>
        </Container>
      </motion.header>

      <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
