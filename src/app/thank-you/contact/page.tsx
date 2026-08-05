import type { Metadata } from "next";
import { Check, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your message has been received.",
  robots: { index: false, follow: false },
};

export default async function ContactThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;

  return (
    <section className="bg-graphite-950 pb-20 pt-28 lg:pt-32">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-500/15 ring-1 ring-brand-500/30">
            <Check aria-hidden className="size-7 text-brand-300" strokeWidth={2} />
          </div>
          <h1 className="mt-6 font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[36px]/[1.06]">
            Thank you for getting in touch
          </h1>
          <p className="mt-4 text-[15px]/[1.7] text-white/70">
            We have received your message and will reply shortly.
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
                Please quote this reference if you contact us about this enquiry. Keep it for your
                records &mdash; it is the fastest way for us to find your message.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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

          <p className="mt-8 text-[13px]/[1.7] text-white/50">
            Looking for pricing?{" "}
            <Link href="/get-a-quote" className="font-semibold text-brand-400">
              Get a Quote
            </Link>{" "}
            and our technical team will recommend the right model.
          </p>
        </div>
      </Container>
    </section>
  );
}
