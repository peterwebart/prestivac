"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { EASE_OUT } from "@/lib/motion";
import { site } from "@/lib/site";

export function FloatingSupport() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  /* Escape + outside-click close; move focus into the dialog on open. */
  useEffect(() => {
    if (!open) return;

    popoverRef.current
      ?.querySelector<HTMLElement>("a[href], button:not([disabled])")
      ?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popoverRef}
            role="dialog"
            aria-label="Contact PrestiVac support"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.22, ease: EASE_OUT }}
            className="absolute bottom-16 right-0 w-72 rounded-2xl bg-white p-5 text-surface shadow-panel ring-1 ring-steel-200"
          >
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/mark.png"
                alt=""
                aria-hidden
                width={24}
                height={24}
                className="size-6"
              />
              <p className="font-display text-[15px] font-bold">
                PrestiVac Support
              </p>
            </div>
            <p className="mt-2 text-[13px]/[1.55] text-steel-500">
              Tell us what you&rsquo;re recovering &mdash; we&rsquo;ll
              spec the right system for your facility.
            </p>
            <Button asChild size="sm" className="mt-4 w-full">
              <a href="/get-a-quote" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
            <a
              href={`mailto:${site.email}`}
              className="mt-3 block text-center text-[12px] font-semibold text-steel-600 underline-offset-2 transition-colors hover:text-surface hover:underline"
            >
              {site.email}
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? "Close support panel" : "Chat with PrestiVac support"}
        onClick={() => setOpen((value) => !value)}
        className="flex size-12 items-center justify-center rounded-full bg-white text-surface shadow-fab ring-1 ring-steel-200 transition-transform duration-200 hover:scale-105"
      >
        {open ? (
          <X aria-hidden className="size-5" strokeWidth={1.8} />
        ) : (
          <MessageCircle aria-hidden className="size-5" strokeWidth={1.8} />
        )}
      </button>
    </div>
  );
}
