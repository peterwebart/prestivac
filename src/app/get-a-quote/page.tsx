import type { Metadata } from "next";
import { Check, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { QuoteForm } from "@/components/forms/quote-form";
import { Container } from "@/components/ui/container";
import { pairedAlternates } from "@/lib/i18n";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const description =
  "Get a quote on a PrestiVac explosion proof industrial vacuum cleaner. Tell us your material, classification and utilities and our technical team will recommend the right model.";

export const metadata: Metadata = {
  title: "Get a Quote",
  description,
  alternates: { canonical: "/get-a-quote", languages: pairedAlternates("/get-a-quote") },
  openGraph: { url: "/get-a-quote", title: "Get a Quote", description },
};

const ASSURANCES = [
  "Over 200 models — most requirements already have a precedent",
  "Solid stainless steel construction on every unit",
  "Legally certified explosion proof options",
  "We can modify or build to your specific requirement",
];

export default function GetAQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Get a Quote", description, path: "/get-a-quote" }),
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* Compact header — the form starts within the first screen */}
      <section className="bg-graphite-950 pb-8 pt-24 lg:pb-10 lg:pt-28">
        <Container>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
            Direct from the manufacturer
          </p>
          <h1 className="mt-2.5 max-w-2xl font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[38px]/[1.06]">
            Get a Quote
          </h1>
          <p className="mt-3 max-w-2xl text-[14.5px]/[1.65] text-white/70">
            Tell us what you need to vacuum and where. Our technical team will recommend the
            PrestiVac model best suited to your application.
          </p>
        </Container>
      </section>

      {/* Light body: form leads, supporting detail sits in the sidebar */}
      <section className="bg-steel-50 py-10 lg:py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-10">
            <QuoteForm
              source="/get-a-quote"
              tone="light"
              heading="Tell us about your application"
            />

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-steel-800">
                  Prefer to talk?
                </h2>
                <p className="mt-2 text-[13px]/[1.6] text-steel-600">
                  Speak to us directly and we will work through the application with you.
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center gap-2.5 text-[15px] font-extrabold text-brand-600"
                >
                  <Phone aria-hidden className="size-4" />
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2.5 flex items-center gap-2.5 text-[13.5px] font-semibold text-steel-700 transition-colors hover:text-brand-600"
                >
                  <Mail aria-hidden className="size-4" />
                  {site.email}
                </a>
                <p className="mt-4 border-t border-steel-200 pt-4 text-[12.5px]/[1.6] text-steel-500">
                  {site.legalName}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip} {site.address.country}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-steel-800">
                  Why buy from PrestiVac
                </h2>
                <ul className="mt-3 space-y-2.5">
                  {ASSURANCES.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px]/[1.55] text-steel-600">
                      <Check aria-hidden className="mt-0.5 size-3.5 shrink-0 text-brand-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200">
                <h2 className="font-display text-[15px] font-extrabold uppercase text-steel-800">
                  Not sure what you need?
                </h2>
                <p className="mt-2 text-[13px]/[1.6] text-steel-600">
                  Every technical question on the form has a &ldquo;Not sure&rdquo; option. Answer
                  what you know and we will fill the gaps.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    href="/products/explosion-proof-vacuums"
                    className="rounded-full bg-steel-100 px-3 py-1.5 text-[12px] font-semibold text-steel-700 transition-colors hover:text-brand-600"
                  >
                    Explosion proof range
                  </Link>
                  <Link
                    href="/materials"
                    className="rounded-full bg-steel-100 px-3 py-1.5 text-[12px] font-semibold text-steel-700 transition-colors hover:text-brand-600"
                  >
                    Find your material
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
