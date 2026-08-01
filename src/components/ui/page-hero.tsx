import Image from "next/image";

import { Container } from "@/components/ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  /** Optional full-bleed background image (e.g. the products band). */
  image?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-graphite-950 pb-16 pt-32 lg:pb-20 lg:pt-40">
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-graphite-950/95 via-graphite-950/80 to-graphite-950/40"
          />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-brand-600/10 blur-[110px]"
        />
      )}
      <Container className="relative">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl/[1.08] font-extrabold tracking-[-0.02em] text-white sm:text-5xl/[1.06]">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-[15.5px]/[1.65] text-white/70">
          {description}
        </p>
        {children}
      </Container>
    </section>
  );
}
