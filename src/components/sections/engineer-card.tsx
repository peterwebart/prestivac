"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { fadeUp, VIEWPORT } from "@/lib/motion";

export function EngineerCard() {
  return (
    <motion.aside
      aria-label="Engineering support"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="relative overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-steel-200/70"
    >
      <div className="grid h-full sm:grid-cols-[200px_1fr]">
        <div className="relative aspect-[16/8] sm:aspect-auto sm:h-full">
          <Image
            src="/images/engineers.jpg"
            alt="Two PrestiVac engineers reviewing a system specification on a tablet"
            fill
            sizes="(min-width: 640px) 200px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative flex flex-col justify-center gap-2 p-5 pr-12 sm:p-6 sm:pr-12">
          <Image
            src="/images/mark.png"
            alt=""
            aria-hidden
            width={24}
            height={24}
            className="absolute right-4 top-4 size-6"
          />
          <h3 className="max-w-[250px] font-display text-[19px]/[1.25] font-extrabold text-surface">
            Need help selecting the right system?
          </h3>
          <p className="max-w-[260px] text-[13px]/[1.55] text-steel-500">
            We will recommend the right vacuum for your application.
          </p>
          <a
            href="/get-a-quote"
            className="group mt-1 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-600 transition-colors hover:text-brand-700"
          >
            Get a Quote
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>
    </motion.aside>
  );
}
