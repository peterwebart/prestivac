import type { Metadata } from "next";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

/** Confirmation pages must never be indexed or appear in search results. */
export const metadata: Metadata = {
  title: "Thank You — Quote Request Received",
  description: "Your quote request has been received. Our technical team will be in touch.",
  robots: { index: false, follow: false },
};

const NEXT_STEPS = [
  "Our technical team reviews your material, classification and duty cycle",
  "We identify the PrestiVac model best suited to the application",
  "You receive a quotation, and the datasheet for the recommended unit",
];

export default async function QuoteThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <section className="bg-graphite-950 pb-20 pt-28 lg:pt-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-500/15 ring-1 ring-brand-500/30">
            <Check aria-hidden className="size-7 text-brand-300" strokeWidth={2} />
          </div>
          <h1 className="mt-6 font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[38px]/[1.06]">
            Thank you — your quote request has been received
          </h1>
          <p className="mt-4 text-[15px]/[1.7] text-white/70">
            A member of our technical team will review your application and come back to you with a
            recommendation and a quotation.
          </p>

          {ref && (
            <div className="mt-8 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                Your reference number
              </p>
              <p className="mt-2 font-display text-[26px] font-extrabold tracking-[0.04em] text-white sm:text-[30px]">
                {ref}
              </p>
              <p className="mt-3 text-[12.5px]/[1.6] text-white/60">
                Please quote this reference if you contact us about this request. Keep it for your
                records — it is the fastest way for us to find your enquiry.
              </p>
            </div>
          )}

          <ul className="mt-9 space-y-3 text-left">
            {NEXT_STEPS.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3.5 rounded-xl bg-white/[0.04] p-4 text-[13.5px]/[1.6] text-white/75 ring-1 ring-white/10"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-[10.5px] font-bold text-brand-300">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
            >
              <Phone aria-hidden className="size-3.5" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
            >
              <Mail aria-hidden className="size-3.5" />
              {site.email}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5 text-[12px]">
            <Link
              href="/products/explosion-proof-vacuums"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
            >
              Explosion proof vacuums
              <ArrowRight aria-hidden className="size-3" />
            </Link>
            <Link
              href="/materials"
              className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
            >
              Dusts &amp; materials
            </Link>
            <Link
              href="/resources"
              className="rounded-full bg-white/[0.06] px-3.5 py-1.5 font-semibold text-white/70 ring-1 ring-white/10 transition-colors hover:text-white"
            >
              Guides
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
