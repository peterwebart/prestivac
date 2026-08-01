"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { trackQuoteSubmitted } from "@/lib/analytics";
import { site } from "@/lib/site";

const CLASSIFICATIONS = ["Ordinary Location", "Division I", "Division II", "Not sure — please advise"];
const FILTRATION = ["Not required", "HEPA Plus", "ULPA", "Not sure — please advise"];
const YES_NO = ["Not sure", "Yes", "No"];

/** Québec French labels. Kept beside the English so the two cannot drift. */
const FR_LABELS = {
  legendContact: "Vos coordonnées",
  legendMaterial: "Que devez-vous aspirer ?",
  legendDuty: "Utilisation et services",
  legendFiltration: "Filtration et accessoires",
  name: "Nom",
  company: "Entreprise",
  email: "Courriel",
  phone: "Téléphone",
  address: "Adresse",
  cityState: "Ville / Province",
  zip: "Code postal",
  products: "Quels produits souhaitez-vous aspirer ?",
  explosive: "Est-ce explosif ?",
  toxic: "Est-ce toxique ?",
  classification: "Classification particulière ?",
  classificationHint:
    "Attribuée par votre ingénieur électrique ou de procédé. Si elle n'est pas encore attribuée, laissez « Je ne sais pas ».",
  operation: "Combien d'heures d'utilisation par jour ?",
  capacity: "Quelle capacité de collecte recherchez-vous ?",
  compressedAir: "Avez-vous de l'air comprimé ? Si oui, quel diamètre et quel débit (pi³/min) ?",
  voltage: "Si électrique, quelle tension est disponible ?",
  filtration: "Avez-vous besoin d'une filtration absolue ?",
  hose: "Quel diamètre et quelle longueur de boyau d'aspiration ?",
  accessories: "Quels accessoires sont requis ?",
  additional: "Renseignements additionnels",
  submit: "Obtenir une soumission",
  sending: "Envoi en cours",
  required: "Les champs marqués d'un astérisque sont obligatoires. Le reste nous aide à préciser la recommandation.",
  yesNo: ["Je ne sais pas", "Oui", "Non"],
  classifications: ["Emplacement ordinaire", "Division I", "Division II", "Je ne sais pas — veuillez conseiller"],
  filtrationOptions: ["Non requise", "HEPA Plus", "ULPA", "Je ne sais pas — veuillez conseiller"],
  fallbackIntro:
    "Presque terminé — ouvrez le message pré-rempli pour envoyer votre demande. Toutes vos réponses y sont déjà.",
  fallbackButton: "Ouvrir le message",
  reference: "Votre numéro de référence",
  keepIt: "conservez-le pour vos dossiers.",
  errorIntro: "Une erreur est survenue. Veuillez écrire à",
  errorTail: "ou nous téléphoner.",
};

/** Human-quotable reference: PV-YYYYMMDD-XXXX. Generated client-side so the same
 * reference reaches PrestiVac and the customer whether the request is delivered
 * by webhook or by the mail fallback. */
function makeReference(): string {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PV-${date}-${suffix}`;
}

type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  company: "Company",
  email: "Email",
  phone: "Phone",
  address: "Address",
  cityState: "City / State",
  zip: "Zip Code",
  products: "Product(s) to vacuum",
  explosive: "Explosive",
  toxic: "Toxic",
  classification: "Classification",
  operation: "Time of operation",
  capacity: "Collection capacity",
  compressedAir: "Compressed air available",
  voltage: "Voltage available",
  filtration: "Absolute filtration",
  hose: "Suction hose diameter & length",
  accessories: "Accessories required",
  additional: "Additional information",
  reference: "Reference",
};

export function QuoteForm({
  source,
  tone = "dark",
  lang = "en",
  heading = "Get a Quote",
  intro = "The more you tell us, the more precisely our technical team can specify the right vacuum. If you do not know an answer, choose \u201cNot sure\u201d \u2014 that is what we are here for.",
}: {
  source: string;
  /** "light" for use on white/steel sections, "dark" for graphite sections. */
  tone?: "dark" | "light";
  /** Québec French label set. */
  lang?: "en" | "fr";
  heading?: string;
  intro?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [mailHref, setMailHref] = useState("");
  const [reference, setReference] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const ref = makeReference();
    setReference(ref);
    const payload: Record<string, string> = { source, reference: ref };
    for (const key of Object.keys(FIELD_LABELS)) {
      if (key === "reference") continue;
      payload[key] = String(data.get(key) ?? "");
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        trackQuoteSubmitted({
          source,
          reference: ref,
          delivery: "webhook",
          locale: fr ? "fr" : "en",
        });
        router.push(`${fr ? "/fr/merci" : "/thank-you/quote"}?ref=${encodeURIComponent(ref)}`);
        return;
      }
      const lines = Object.entries(FIELD_LABELS).map(
        ([key, fieldLabel]) => `${fieldLabel}: ${payload[key] || "-"}`,
      );
      lines.push("", `(Submitted from ${source})`);
      setMailHref(
        `mailto:${site.email}?subject=${encodeURIComponent(
          `Quote request ${ref} — ` + (payload.company || payload.name),
        )}&body=${encodeURIComponent(lines.join("\n"))}`,
      );
      trackQuoteSubmitted({
        source,
        reference: ref,
        delivery: "mail_fallback",
        locale: fr ? "fr" : "en",
      });
      setStatus("fallback");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-8 text-center">
        <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-brand-500/20">
          <Check aria-hidden className="size-5 text-brand-300" />
        </div>
        <h3 className="mt-4 font-display text-[18px] font-extrabold text-white">
          Quote request received
        </h3>
        <p className="mx-auto mt-2 max-w-md text-[13.5px]/[1.65] text-white/70">
          Our technical team will review your application and recommend the vacuum best suited to it.
          If it is urgent, call{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-300">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const fr = lang === "fr";
  const L = FR_LABELS;
  const yesNo = fr ? L.yesNo : YES_NO;
  const classifications = fr ? L.classifications : CLASSIFICATIONS;
  const filtrationOptions = fr ? L.filtrationOptions : FILTRATION;
  const light = tone === "light";
  const field = light
    ? "w-full rounded-lg border border-steel-300 bg-white px-3.5 py-2.5 text-[13.5px] text-steel-800 placeholder:text-steel-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500/40"
    : "w-full rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-white/35 focus:border-brand-500/60 focus:outline-none focus:ring-1 focus:ring-brand-500/40";
  const label = light
    ? "block text-[11.5px] font-bold uppercase tracking-[0.1em] text-steel-600"
    : "block text-[11.5px] font-bold uppercase tracking-[0.1em] text-white/50";
  const legend = light
    ? "font-display text-[13px] font-extrabold uppercase tracking-[0.12em] text-brand-600"
    : "font-display text-[13px] font-extrabold uppercase tracking-[0.12em] text-brand-400";
  const optionClass = light ? "bg-white" : "bg-graphite-900";

  return (
    <div
      className={
        light
          ? "rounded-2xl bg-white p-6 shadow-card ring-1 ring-steel-200 lg:p-8"
          : "rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 lg:p-8"
      }
    >
      <h2
        className={`font-display text-[22px] font-extrabold uppercase ${
          light ? "text-steel-800" : "text-white"
        }`}
      >
        {heading}
      </h2>
      <p className={`mt-2.5 max-w-2xl text-[13px]/[1.65] ${light ? "text-steel-600" : "text-white/60"}`}>
        {intro}
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-8">
        <fieldset className="space-y-4">
          <legend className={legend}>{fr ? L.legendContact : "Your details"}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="q-name">{fr ? L.name : "Name"} *</label>
              <input id="q-name" name="name" required autoComplete="name" className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label className={label} htmlFor="q-company">{fr ? L.company : "Company"} *</label>
              <input id="q-company" name="company" required autoComplete="organization" className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label className={label} htmlFor="q-email">{fr ? L.email : "Email"} *</label>
              <input id="q-email" name="email" type="email" required autoComplete="email" className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label className={label} htmlFor="q-phone">{fr ? L.phone : "Phone"} *</label>
              <input id="q-phone" name="phone" type="tel" required autoComplete="tel" className={`mt-1.5 ${field}`} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="q-address">{fr ? L.address : "Address"}</label>
              <input id="q-address" name="address" autoComplete="street-address" className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label className={label} htmlFor="q-cityState">{fr ? L.cityState : "City / State"}</label>
              <input id="q-cityState" name="cityState" autoComplete="address-level2" className={`mt-1.5 ${field}`} />
            </div>
            <div>
              <label className={label} htmlFor="q-zip">{fr ? L.zip : "Zip Code"}</label>
              <input id="q-zip" name="zip" autoComplete="postal-code" className={`mt-1.5 ${field}`} />
            </div>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className={legend}>{fr ? L.legendMaterial : "What are you vacuuming?"}</legend>
          <div>
            <label className={label} htmlFor="q-products">
              What product(s) do you want to vacuum? *
            </label>
            <textarea
              id="q-products"
              name="products"
              required
              rows={2}
              placeholder="e.g. aluminium grinding dust, flour, coolant and metal chips"
              className={`mt-1.5 ${field}`}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="q-explosive">{fr ? L.explosive : "Is it explosive?"}</label>
              <select id="q-explosive" name="explosive" defaultValue={yesNo[0]} className={`mt-1.5 ${field}`}>
                {yesNo.map((option) => (
                  <option key={option} value={option} className={optionClass}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="q-toxic">{fr ? L.toxic : "Is it toxic?"}</label>
              <select id="q-toxic" name="toxic" defaultValue={yesNo[0]} className={`mt-1.5 ${field}`}>
                {yesNo.map((option) => (
                  <option key={option} value={option} className={optionClass}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={label} htmlFor="q-classification">{fr ? L.classification : "Any specific classification?"}</label>
            <select
              id="q-classification"
              name="classification"
              defaultValue={classifications[3]}
              className={`mt-1.5 ${field}`}
            >
              {classifications.map((option) => (
                <option key={option} value={option} className={optionClass}>{option}</option>
              ))}
            </select>
            <p className={`mt-1.5 text-[11.5px] ${light ? "text-steel-500" : "text-white/40"}`}>
              {fr
                ? L.classificationHint
                : "Assigned by your electrical or process engineer. If it has not been assigned yet, leave this as \u201cNot sure\u201d."}
            </p>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className={legend}>{fr ? L.legendDuty : "Duty & utilities"}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="q-operation">{fr ? L.operation : "How long will you use the vacuum?"}</label>
              <input
                id="q-operation"
                name="operation"
                placeholder="e.g. 2 hours per day, 5 days per week"
                className={`mt-1.5 ${field}`}
              />
            </div>
            <div>
              <label className={label} htmlFor="q-capacity">
                {fr ? L.capacity : "What collection capacity are you looking for?"}
              </label>
              <input id="q-capacity" name="capacity" placeholder="e.g. 15 gallon" className={`mt-1.5 ${field}`} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="q-compressedAir">
                {fr ? L.compressedAir : "Do you have compressed air available? If so, what diameter and CFM?"}
              </label>
              <input
                id="q-compressedAir"
                name="compressedAir"
                placeholder="e.g. yes — 1/2 in line, 90 CFM at 90 psi"
                className={`mt-1.5 ${field}`}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="q-voltage">{fr ? L.voltage : "If electric, what voltage is available?"}</label>
              <input
                id="q-voltage"
                name="voltage"
                placeholder="e.g. 120V single phase / 480V three phase"
                className={`mt-1.5 ${field}`}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="space-y-4">
          <legend className={legend}>{fr ? L.legendFiltration : "Filtration & accessories"}</legend>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="q-filtration">{fr ? L.filtration : "Do you need absolute filtration?"}</label>
              <select
                id="q-filtration"
                name="filtration"
                defaultValue={filtrationOptions[3]}
                className={`mt-1.5 ${field}`}
              >
                {filtrationOptions.map((option) => (
                  <option key={option} value={option} className={optionClass}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label} htmlFor="q-hose">
                {fr ? L.hose : "What diameter and length of suction hose is required?"}
              </label>
              <input id="q-hose" name="hose" placeholder="e.g. 1.5 in x 10 ft" className={`mt-1.5 ${field}`} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="q-accessories">{fr ? L.accessories : "What accessories are required?"}</label>
              <input
                id="q-accessories"
                name="accessories"
                placeholder="e.g. floor tool, crevice tool, anti-static wand"
                className={`mt-1.5 ${field}`}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="q-additional">{fr ? L.additional : "Additional information"}</label>
              <textarea id="q-additional" name="additional" rows={3} className={`mt-1.5 ${field}`} />
            </div>
          </div>
        </fieldset>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500 disabled:opacity-60"
          >
            {status === "sending" ? (
              <>
                <Loader2 aria-hidden className="size-4 animate-spin" />
                {fr ? L.sending : "Sending"}
              </>
            ) : (
              <>
                {fr ? L.submit : "Get a Quote"}
                <ArrowRight aria-hidden className="size-3.5" />
              </>
            )}
          </button>
          <p className={`text-[11.5px] ${light ? "text-steel-500" : "text-white/40"}`}>
            {fr ? L.required : "Fields marked * are required. Everything else helps us specify accurately."}
          </p>
        </div>
      </form>

      {status === "fallback" && (
        <div className="mt-5 rounded-xl border border-brand-500/30 bg-brand-500/[0.07] p-4">
          <p className="text-[13px]/[1.6] text-white/80">
            {fr
              ? L.fallbackIntro
              : "Almost there — open the pre-filled message to send your request. Every answer you gave is already in it."}
          </p>
          {reference && (
            <p className="mt-2 text-[12.5px]/[1.6] text-white/60">
              Your reference:{" "}
              <span className="font-display font-extrabold tracking-[0.04em] text-white">
                {reference}
              </span>{" "}
              — keep it for your records.
            </p>
          )}
          <a
            href={mailHref}
            onClick={() => {
              // Reach the confirmation page on this path too, so the reference is
              // shown and the conversion page is consistent across both routes.
              window.setTimeout(() => {
                router.push(
                  `${fr ? "/fr/merci" : "/thank-you/quote"}?ref=${encodeURIComponent(reference)}`,
                );
              }, 800);
            }}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-brand-500"
          >
            {fr ? L.fallbackButton : "Open message"}
            <ArrowRight aria-hidden className="size-3.5" />
          </a>
        </div>
      )}

      {status === "error" && (
        <p className="mt-5 text-[13px]/[1.6] text-white/70">
          Something went wrong sending that. Please email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-brand-300">{site.email}</a>{" "}
          or call{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-300">{site.phone}</a>.
        </p>
      )}
    </div>
  );
}
