import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { subpageJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";

const description =
  "Contact PrestiVac USA Inc. about explosion-proof and HEPA industrial vacuums. Tell us your material and area classification and we will answer properly first time.";

export const metadata: Metadata = {
  title: "Contact PrestiVac",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact PrestiVac", description },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            subpageJsonLd({ name: "Contact", description, path: "/contact" }),
          ).replace(/</g, "\\u003c"),
        }}
      />
      <section className="bg-graphite-950 pb-16 pt-24 lg:pt-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-400">
                Contact
              </p>
              <h1 className="mt-3 max-w-xl font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[40px]/[1.06]">
                Talk to us about your application
              </h1>
              <p className="mt-5 max-w-lg text-[15px]/[1.7] text-white/70">
                If you know the material and the area classification, include them &mdash;
                it lets us give you a real answer rather than a brochure. If you don&rsquo;t
                know them yet, say so and we will help you work it out.
              </p>

              <dl className="mt-9 space-y-5">
                <div className="flex items-start gap-3.5">
                  <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                  <div>
                    <dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/45">
                      Phone
                    </dt>
                    <dd className="mt-1">
                      <a href={site.phoneHref} className="text-[14px] font-semibold text-white/85 hover:text-white">
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                  <div>
                    <dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/45">
                      Email
                    </dt>
                    <dd className="mt-1">
                      <a href={`mailto:${site.email}`} className="text-[14px] font-semibold text-white/85 hover:text-white">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
                  <div>
                    <dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/45">
                      Address
                    </dt>
                    <dd className="mt-1 text-[14px]/[1.6] text-white/75">
                      <span className="font-semibold text-white/85">{site.legalName}</span>
                      <br />
                      {site.address.full}
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="mt-9 max-w-lg rounded-xl bg-white/[0.04] p-4 text-[12.5px]/[1.65] text-white/55 ring-1 ring-white/10">
                Ready to specify a machine? The{" "}
                <a href="/get-a-quote" className="font-semibold text-brand-400 hover:text-brand-300">
                  quote request form
                </a>{" "}
                asks the fuller set of questions our team needs to recommend a model.
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10 lg:p-8">
              <ContactForm source="contact-page" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
