"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/data/navigation";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNav({ open, onClose }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Focus management + Escape + body scroll lock while open. */
  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Decorative click-away backdrop — keyboard/SR users close via
              Escape or the labelled close button inside the dialog. */}
          <motion.div
            aria-hidden
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-graphite-950/70 backdrop-blur-sm"
          />
          <motion.div
            ref={panelRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col border-l border-white/10 bg-graphite-900 shadow-panel"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <Image
                src="/images/logo-white.png"
                alt="PrestiVac"
                width={752}
                height={220}
                sizes="120px"
                className="h-8 w-auto"
              />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex size-10 items-center justify-center rounded-md text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X aria-hidden className="size-6" strokeWidth={1.75} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-2">
              {/*
                Driven by the same NAVIGATION config as the desktop megamenu and
                the footer site index, so mobile reaches the whole graph rather
                than only the seven top-level hubs it used to show.

                Native <details> disclosure: keyboard operable and screen-reader
                announced without any ARIA of our own, and it collapses without
                removing the links from the DOM inside the open dialog.
              */}
              <ul>
                {NAVIGATION.map((section) => (
                  <li key={section.label} className="border-b border-white/5">
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-[15px] font-semibold text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 [&::-webkit-details-marker]:hidden">
                        {section.label}
                        <ChevronDown
                          aria-hidden
                          className="size-4 text-white/45 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
                        />
                      </summary>
                      <ul className="pb-3 pl-3">
                        <li>
                          <Link
                            href={section.href}
                            onClick={onClose}
                            className="block py-2 text-[14px] font-semibold text-brand-300 transition-colors hover:text-brand-200"
                          >
                            All {section.label.toLowerCase()}
                          </Link>
                        </li>
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="block py-2 text-[14px] text-white/70 transition-colors hover:text-white"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-white/10 p-6">
              <Button asChild size="lg" className="w-full">
                <a href="/get-a-quote" onClick={onClose}>
                  Get a Quote
                  <ArrowRight aria-hidden className="size-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
