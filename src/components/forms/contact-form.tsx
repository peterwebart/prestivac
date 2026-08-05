"use client";

import { ArrowRight, Check, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { trackContactSubmitted } from "@/lib/analytics";
import { makeReference } from "@/lib/reference";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Short contact form — six fields, for enquiries that are not yet a quote request.
 *
 * Deliberately mirrors quote-form.tsx: same reference generation, same two-path
 * delivery (webhook, then pre-filled mail fallback), same conversion event, same
 * redirect to a confirmation page carrying the reference. One behaviour to reason
 * about rather than two.
 */

type Status = "idle" | "sending" | "fallback" | "error";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/35 transition-colors focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";
const labelClass =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-[0.12em] text-white/55";

export function ContactForm({ source = "contact" }: { source?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [reference, setReference] = useState("");
  const [mailHref, setMailHref] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const buildMailHref = (ref: string) => {
    const lines = [
      `Reference: ${ref}`,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : "",
      form.phone ? `Phone: ${form.phone}` : "",
      form.subject ? `Subject: ${form.subject}` : "",
      "",
      "Message:",
      form.message,
    ].filter(Boolean);
    const subject = form.subject
      ? `${form.subject} — ${ref}`
      : `Enquiry — ${ref}`;
    return `mailto:${site.formsEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please add your name, email and a message.");
      setStatus("error");
      return;
    }

    const ref = makeReference("C");
    setReference(ref);
    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, reference: ref, source }),
      });

      if (response.ok) {
        trackContactSubmitted({ source, reference: ref, delivery: "webhook" });
        router.push(`/thank-you/contact?ref=${encodeURIComponent(ref)}`);
        return;
      }

      // Not configured, or the endpoint failed — hand the visitor a pre-filled
      // draft rather than losing the enquiry.
      setMailHref(buildMailHref(ref));
      trackContactSubmitted({ source, reference: ref, delivery: "mail_fallback" });
      setStatus("fallback");
    } catch {
      setMailHref(buildMailHref(ref));
      trackContactSubmitted({ source, reference: ref, delivery: "mail_fallback" });
      setStatus("fallback");
    }
  };

  if (status === "fallback") {
    return (
      <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6 lg:p-7">
        <p className="flex items-start gap-2.5 font-display text-[15px] font-extrabold text-white">
          <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-400" />
          Almost there
        </p>
        <p className="mt-2.5 text-[13.5px]/[1.7] text-white/75">
          Open the pre-filled message to send your enquiry &mdash; everything you
          entered is already in it, including your reference number.
        </p>
        <p className="mt-4 rounded-lg bg-white/[0.06] px-3.5 py-2.5">
          <span className="block text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/50">
            Your reference number
          </span>
          <span className="mt-1 block font-mono text-[15px] font-bold tracking-wide text-brand-300">
            {reference}
          </span>
        </p>
        <a
          href={mailHref}
          onClick={() => {
            window.setTimeout(() => {
              router.push(`/thank-you/contact?ref=${encodeURIComponent(reference)}`);
            }, 800);
          }}
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
        >
          <Mail aria-hidden className="size-3.5" />
          Open message
          <ArrowRight aria-hidden className="size-3.5" />
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className={labelClass}>
            Name <span className="text-brand-400">*</span>
          </label>
          <input id="c-name" name="name" value={form.name} onChange={set("name")} className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="c-email" className={labelClass}>
            Email <span className="text-brand-400">*</span>
          </label>
          <input id="c-email" name="email" type="email" value={form.email} onChange={set("email")} className={inputClass} placeholder="you@company.com" />
        </div>
        <div>
          <label htmlFor="c-company" className={labelClass}>Company</label>
          <input id="c-company" name="company" value={form.company} onChange={set("company")} className={inputClass} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="c-phone" className={labelClass}>Phone</label>
          <input id="c-phone" name="phone" value={form.phone} onChange={set("phone")} className={inputClass} placeholder="Optional" />
        </div>
      </div>

      <div>
        <label htmlFor="c-subject" className={labelClass}>Subject</label>
        <input id="c-subject" name="subject" value={form.subject} onChange={set("subject")} className={inputClass} placeholder="What is this about?" />
      </div>

      <div>
        <label htmlFor="c-message" className={labelClass}>
          Message <span className="text-brand-400">*</span>
        </label>
        <textarea
          id="c-message"
          name="message"
          value={form.message}
          onChange={set("message")}
          rows={5}
          className={cn(inputClass, "resize-y")}
          placeholder="Tell us what you need. If you know the material and the area classification, include them — it lets us answer properly first time."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/[0.08] px-3.5 py-2.5 text-[12.5px] text-red-200">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <Button type="button" size="md" onClick={handleSubmit} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send enquiry"}
          <ArrowRight aria-hidden className="size-3.5" />
        </Button>
        <p className="text-[12px] text-white/45">
          Or call{" "}
          <a href={site.phoneHref} className="font-semibold text-white/70 underline underline-offset-2 hover:text-white">
            {site.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
