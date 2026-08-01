"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

import { CleaningSelector } from "@/components/sections/cleaning-selector";
import { FeatureCallouts } from "@/components/sections/feature-callouts";
import { HeroEffects } from "@/components/sections/hero-effects";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeUp, stagger } from "@/lib/motion";

/* Tiny inline placeholder so the LCP image paints with a blurred frame. */
const HERO_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABIMDRANCxIQDhAUExIVGywdGxgYGzYnKSAsQDlEQz85Pj1HUGZXR0thTT0+WXlaYWltcnNyRVV9hnxvhWZwcm7/2wBDARMUFBsXGzQdHTRuST5Jbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm7/wAARCAAQABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDiWTaxFXLCwa7lCAhc/wATdBzUcssRjQqmDk55zVu1mjQxtHJtOcHdyK1SSuZ3bJLq0NlaER4O84ZweTxnj2optzL50ARyq7FB3KeuAMD8qKHJsFGx/9k=";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] flex-1 flex-col overflow-hidden">
      {/* Background: PrestiVac product renders staged in the facility */}
      <Image
        src="/images/hero-bg.jpg"
        alt="PrestiVac explosion-proof industrial vacuum systems in a manufacturing facility"
        fill
        priority
        quality={80}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={HERO_BLUR}
        className="object-cover object-[68%_42%]"
      />

      {/* Legibility overlays — stronger on mobile where text sits over product */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-graphite-950/95 via-graphite-950/60 to-graphite-950/15 sm:via-graphite-950/45 sm:to-transparent"
      />
      <div aria-hidden className="absolute inset-0 bg-graphite-950/45 sm:hidden" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-graphite-950/80 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-graphite-950/85 to-transparent"
      />

      <HeroEffects />

      <Container className="relative z-10 flex flex-1 flex-col justify-center pb-14 pt-28 sm:pb-16">
        <motion.div
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate="visible"
          className="max-w-[640px]"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display text-[2.6rem]/[1.06] font-extrabold tracking-[-0.02em] text-white sm:text-6xl/[1.05] xl:text-[4.3rem]/[1.04]"
          >
            Explosion Proof
            <br />
            Vacuum Cleaners
            <span className="mt-3 block text-[0.62em]/[1.18]">
              <span className="text-brand-500">Certified.</span>
              <br />
              Manufactured by us.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-md text-[15px]/[1.65] text-white/70 sm:text-base/[1.65]"
          >
            Manufacturer of certified vacuum cleaners for combustible dusts and
            flammable liquids &amp; solvents. UL 1203 Certified explosion-proof and
            dust-ignition-proof electrical vacuum cleaners for use in Hazardous
            (Classified) Locations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button asChild size="lg">
              <a href="/get-a-quote">
                Get a Quote
                <ArrowRight aria-hidden className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#solutions">
                Explore Solutions
                <span
                  aria-hidden
                  className="flex size-6 items-center justify-center rounded-full bg-white text-graphite-950"
                >
                  <Play className="ml-px size-2.5 fill-current" strokeWidth={0} />
                </span>
              </a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10">
            <CleaningSelector />
          </motion.div>

          {/* Compact capability chips replace the rail below xl */}
          <motion.div variants={fadeUp} className="mt-10 xl:hidden">
            <FeatureCallouts variant="inline" />
          </motion.div>
        </motion.div>
      </Container>

      {/* Right-rail capability callouts with connector lines (desktop) */}
      <FeatureCallouts
        variant="rail"
        className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 xl:flex 2xl:right-10"
      />
    </section>
  );
}
