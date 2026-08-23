import type { Metadata } from "next";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  Download,
  FileText,
  Minus,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CostEstimator,
  ProductSpecs,
  TrackedCta,
} from "@/components/product/product-interactive";
import { ProductStickyNav, type ProductSection } from "@/components/product/product-sticky-nav";
import { FinalCta } from "@/components/sections/final-cta";
import { Container } from "@/components/ui/container";
import { UL1203, UL1203_CONDITIONS } from "@/lib/data/certification";
import { FAQ } from "@/lib/data/faq";
import { performanceSpecs } from "@/lib/data/model-specs";
import {
  accessoriesFor,
  caseStudiesFor,
  categoryFor,
  comparableTo,
  materialFitFor,
  powerSourceOf,
  quickSpecsFor,
  scopeOf,
  specGroupsFor,
  TAG_INFO,
} from "@/lib/data/product-detail";
import { ALL_MODELS, findModelBySlug } from "@/lib/data/product-models";
import { productJsonLd, subpageJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return ALL_MODELS.map((m) => ({ model: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model: slug } = await params;
  const model = findModelBySlug(slug);
  if (!model) return { title: "Product not found | PrestiVac" };
  const scope = scopeOf(model);
  /**
   * Kept inside the SERP snippet window (~158 chars) so the certified scope —
   * the part a specifier is scanning for — lands before Google truncates.
   * `scope.summary` is abbreviated here for the same reason; the full
   * certificate wording is on the page itself.
   */
  const shortScope = scope?.id === "ex1"
    ? "Class I Gp. D and Class II Gps. E, F, G at T3C"
    : "Class II Div. 2, Gps. F and G";
  const description = scope
    ? `${model.name} — PrestiVac ${model.seriesName}, listed by ${UL1203.issuer} to ${UL1203.standard} for ${shortScope}. Request the datasheet.`
    : `${model.name} — PrestiVac ${model.seriesName}. ${powerSourceOf(model)}. Request the datasheet and configuration guidance.`;
  return {
    title: model.name,
    description,
    alternates: { canonical: `/products/models/${model.slug}` },
    openGraph: {
      url: `/products/models/${model.slug}`,
      title: model.name,
      description,
      images: [{ url: model.image }],
    },
  };
}

/* Section chrome ---------------------------------------------------------- */

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "dark",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  tone?: "dark" | "darker";
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-32 py-14 lg:py-16 ${tone === "darker" ? "bg-graphite-950" : "bg-graphite-900"}`}
    >
      <Container>
        {eyebrow ? (
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-400">{eyebrow}</p>
        ) : null}
        <h2
          id={`${id}-heading`}
          className="mt-2 font-display text-[24px]/[1.15] font-extrabold tracking-[-0.01em] text-white sm:text-[28px]"
        >
          {title}
        </h2>
        {intro ? <p className="mt-3 max-w-3xl text-[14px]/[1.7] text-white/65">{intro}</p> : null}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

const card =
  "rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10 transition-all duration-300 hover:ring-brand-500/40 motion-safe:hover:-translate-y-0.5";

/* Page -------------------------------------------------------------------- */

export default async function ProductModelPage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model: slug } = await params;
  const model = findModelBySlug(slug);
  if (!model) notFound();

  const scope = scopeOf(model);
  const category = categoryFor(model);
  const specs = specGroupsFor(model);
  const quickSpecs = quickSpecsFor(model);
  const materials = materialFitFor(model);
  const accessories = accessoriesFor();
  const comparable = comparableTo(model);
  const caseStudies = caseStudiesFor(model);
  /**
   * FAQs ordered by relevance to THIS model's certification state. On a
   * pneumatic model the question that matters is why it holds no NRTL
   * certificate; on a certified one it is which scope applies. Leading with the
   * wrong one invites exactly the confusion the certification work removed.
   */
  const faqPriority = scope
    ? ["ul1203-scope", "metal-dust-which-line", "division-1-which-line", "ul1203-class-i-groups", "ul1203-own-hoses-tools", "ul1203-grounding"]
    : ["pneumatic-not-ul1203", "electric-or-air-operated", "ul1203-scope", "ul1203-grounding"];
  const rank = (id: string) => {
    const i = faqPriority.indexOf(id);
    return i === -1 ? faqPriority.length : i;
  };
  const faqs = FAQ.filter((f) => ["standards", "operation", "selection"].includes(f.category))
    .sort((a, b) => rank(a.id) - rank(b.id))
    .slice(0, 8);

  /** Product context travels with the lead so nobody has to type the model name. */
  const quoteHref = `/get-a-quote?product=${encodeURIComponent(model.slug)}&model=${encodeURIComponent(model.name)}`;

  const description = scope
    ? `${model.name} — PrestiVac ${model.seriesName}. Listed by ${UL1203.issuerLong} to ${UL1203.standard} for ${scope.summary}.`
    : `${model.name} — PrestiVac ${model.seriesName}. ${powerSourceOf(model)}.`;

  const sections: ProductSection[] = [
    { id: "specifications", label: "Specifications" },
    { id: "materials", label: "Materials" },
    { id: "certification", label: "Certification" },
    { id: "configuration", label: "Configuration" },
    { id: "accessories", label: "Accessories" },
    ...(comparable.length ? [{ id: "compare", label: "Compare" }] : []),
    ...(caseStudies.length ? [{ id: "case-studies", label: "Case studies" }] : []),
    { id: "estimator", label: "Cost estimate" },
    { id: "faq", label: "FAQ" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...subpageJsonLd({
        name: model.name,
        description,
        path: `/products/models/${model.slug}`,
        parents: [
          { name: "Products", path: "/products" },
          ...(category ? [{ name: category.name, path: "/products/" + category.slug }] : []),
        ],
      })["@graph"],
      productJsonLd({
        path: `/products/models/${model.slug}`,
        name: model.name,
        description,
        image: model.image,
        category: model.seriesName,
        properties: [
          { name: "Power source", value: powerSourceOf(model) },
          { name: "Construction", value: "Solid stainless steel" },
          ...(model.tags.length ? [{ name: "Configuration", value: model.tags.join(", ") }] : []),
          /* Brochure-derived performance. Ranges where the power tier is not
             resolvable from the catalogue name — never one tier's figure
             attributed to a model whose tier is unknown. */
          ...performanceSpecs(model).map((spec) => ({
            name: spec.label,
            value: spec.value,
          })),
          ...(scope
            ? [
                {
                  name: "Certification",
                  value: `${UL1203.standard} (${UL1203.edition}), ${UL1203.issuerLong} Certificate ${UL1203.certificateNumber}`,
                },
                { name: "Certified scope", value: scope.summary },
              ]
            : []),
        ],
      }),
      {
        "@type": "FAQPage",
        "@id": `${"https://prestivac.com"}/products/models/${model.slug}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* HERO ------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-graphite-950 pb-12 pt-24 lg:pb-16 lg:pt-28">
        <div
          aria-hidden
          className="absolute -right-40 -top-32 h-[420px] w-[420px] rounded-full bg-brand-600/10 blur-[130px]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/45">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li><Link href="/products" className="hover:text-white">Products</Link></li>
              {category ? (
                <>
                  <li aria-hidden>/</li>
                  <li>
                    <Link href={`/products/${category.slug}`} className="hover:text-white">
                      {category.name}
                    </Link>
                  </li>
                </>
              ) : null}
              <li aria-hidden>/</li>
              <li aria-current="page" className="font-semibold text-white/80">{model.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-start lg:gap-14">
            <div>
              <h1 className="font-display text-[34px]/[1.05] font-extrabold tracking-[-0.02em] text-white sm:text-[46px]">
                {model.name}
              </h1>
              <p className="mt-3 font-display text-[17px]/[1.35] font-bold text-brand-300 sm:text-[19px]">
                {model.seriesName}
                <span className="block font-sans text-[15px]/[1.5] font-semibold text-white/70">
                  {powerSourceOf(model)}
                </span>
              </p>
              <p className="mt-5 max-w-xl text-[14.5px]/[1.7] text-white/70">{model.seriesBlurb}</p>

              {/* Certification — the honest state, either way */}
              <div className="mt-6">
                <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/40">
                  Certification
                </p>
                {scope ? (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-500/12 px-3 py-1.5 text-[12px] font-bold text-brand-200 ring-1 ring-brand-500/35">
                      <ShieldCheck aria-hidden className="size-3.5" />
                      {UL1203.standard} · {UL1203.issuer}
                    </span>
                    {scope.lines.map((line) => (
                      <span
                        key={line}
                        className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-[12px] font-semibold text-white/80 ring-1 ring-white/12"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2.5 inline-flex max-w-xl items-start gap-2 rounded-lg bg-white/[0.05] px-3.5 py-2.5 text-[12.5px]/[1.6] text-white/70 ring-1 ring-white/12">
                    <Minus aria-hidden className="mt-0.5 size-3.5 shrink-0 text-white/40" />
                    <span>
                      Not within the {UL1203.standard} listing. {UL1203.standard} covers electrical
                      equipment; this unit has no electrical components.{" "}
                      <Link href="/hazardous-locations/ul-1203" className="font-semibold text-brand-300 underline-offset-2 hover:underline">
                        What that means
                      </Link>
                    </span>
                  </p>
                )}
              </div>

              {model.tags.length ? (
                <div className="mt-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-white/40">
                    Configuration
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {model.tags.map((tag) => (
                      <span
                        key={tag}
                        title={TAG_INFO[tag]?.label ?? tag}
                        className="rounded-lg bg-white/[0.06] px-3 py-1.5 text-[12px] font-semibold text-white/80 ring-1 ring-white/12"
                      >
                        {TAG_INFO[tag]?.label ?? tag}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 flex flex-wrap gap-3">
                <TrackedCta href={quoteHref} cta="request_quote" placement="hero" product={model.name}>
                  Request a quote
                  <ArrowRight aria-hidden className="size-4" />
                </TrackedCta>
                <TrackedCta
                  href={quoteHref + "&request=datasheet"}
                  cta="request_datasheet"
                  placement="hero"
                  product={model.name}
                  variant="secondary"
                >
                  <FileText aria-hidden className="size-4" />
                  Request datasheet
                </TrackedCta>
                <TrackedCta
                  href="/contact"
                  cta="technical_consultation"
                  placement="hero"
                  product={model.name}
                  variant="ghost"
                >
                  <Phone aria-hidden className="size-4" />
                  Talk to an engineer
                </TrackedCta>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 ring-1 ring-white/10">
                <div className="relative aspect-square">
                  <Image
                    src={model.image}
                    alt={`PrestiVac ${model.name} — ${model.seriesName} industrial vacuum`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 92vw, 460px"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-[11px] text-white/35">
                Product photography. Configuration may vary by specification.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <ProductStickyNav productName={model.name} sections={sections} quoteHref={quoteHref} />

      {/* QUICK SPEC STRIP -------------------------------------------------- */}
      <section aria-label="Key specifications" className="border-b border-white/10 bg-graphite-950">
        <Container>
          <dl className="grid grid-cols-2 divide-white/10 py-6 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x">
            {quickSpecs.map((spec) => (
              <div key={spec.label} className="px-2 py-3 lg:px-5">
                <dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                  {spec.label}
                </dt>
                <dd className="mt-1.5 text-[13px]/[1.4] font-semibold text-white">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* SPECIFICATIONS ---------------------------------------------------- */}
      <Section
        id="specifications"
        eyebrow="Technical"
        title="Specifications"
        intro="What is confirmed for this model. Airflow, vacuum, motor and dimensions are model-specific and are supplied on the datasheet — we do not publish estimated figures."
      >
        <ProductSpecs groups={specs} />
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10">
          <Download aria-hidden className="size-5 shrink-0 text-brand-400" />
          <p className="min-w-[240px] flex-1 text-[13px]/[1.6] text-white/70">
            Full specifications, drawings and certification documents are issued per configuration.
            Tell us the application and we will send the set that applies to it.
          </p>
          <TrackedCta
            href={quoteHref + "&request=datasheet"}
            cta="request_datasheet"
            placement="specifications"
            product={model.name}
            variant="secondary"
          >
            Request documents
          </TrackedCta>
        </div>
      </Section>

      {/* MATERIAL COMPATIBILITY -------------------------------------------- */}
      <Section
        id="materials"
        eyebrow="Compatibility"
        title="Which materials does this model's certified scope cover?"
        intro="This table reports certification scope, not a safety clearance. Class II groups come from the certificate: Group E is conductive metal dust, F is carbonaceous, G is other non-conductive dust."
        tone="darker"
      >
        <div className="overflow-x-auto rounded-2xl ring-1 ring-white/10">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <caption className="sr-only">
              Class II group and certified-scope coverage by material for {model.name}
            </caption>
            <thead>
              <tr className="bg-white/[0.05]">
                <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Material</th>
                <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Class II group</th>
                <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Within scope</th>
                <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Note</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((m) => (
                <tr key={m.slug} className="border-t border-white/[0.07] align-top">
                  <th scope="row" className="px-4 py-3 text-[13px] font-semibold text-white">
                    <Link href={`/materials/${m.slug}`} className="hover:text-brand-300">{m.name}</Link>
                  </th>
                  <td className="px-4 py-3 text-[13px] text-white/70">
                    {m.group === "n/a" ? "Not combustible" : `Group ${m.group}`}
                  </td>
                  <td className="px-4 py-3">
                    {/* Status uses an icon AND a word — never colour alone. */}
                    {m.covered === "covered" ? (
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-emerald-300">
                        <Check aria-hidden className="size-4" /> Yes
                      </span>
                    ) : m.covered === "not-covered" ? (
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-amber-300">
                        <AlertTriangle aria-hidden className="size-4" /> No
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-white/50">
                        <Minus aria-hidden className="size-4" /> No listing
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-[12.5px]/[1.6] text-white/60">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 flex items-start gap-2.5 rounded-2xl bg-amber-400/[0.07] p-5 text-[12.5px]/[1.7] text-white/75 ring-1 ring-amber-400/25">
          <AlertTriangle aria-hidden className="mt-0.5 size-4 shrink-0 text-amber-300" />
          <span>
            Scope is not suitability. Whether a specific material can be recovered safely also
            depends on its behaviour as your process generates it — established by testing — and on
            the area classification assigned by your own electrical or process engineer. Confirm
            with a PrestiVac application specialist before ordering for a hazardous application.
          </span>
        </p>
        <p className="mt-4 text-[13px] text-white/55">
          <Link href="/materials" className="font-semibold text-brand-300 hover:underline">
            All 80 material guides
          </Link>{" "}
          ·{" "}
          <Link href="/guides/types-of-combustible-dust" className="font-semibold text-brand-300 hover:underline">
            How the dust groups work
          </Link>
        </p>
      </Section>

      {/* CERTIFICATION ------------------------------------------------------ */}
      <Section
        id="certification"
        eyebrow="Compliance"
        title="Certification and what it covers"
        intro="Read the scope rather than the phrase. A listing names specific classes, groups and a temperature code, and it means nothing outside them."
      >
        {scope ? (
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl bg-brand-500/[0.07] p-6 ring-1 ring-brand-500/25 lg:col-span-2">
              <h3 className="font-display text-[16px] font-extrabold text-white">
                {UL1203.standard} ({UL1203.edition}) — listed by {UL1203.issuerLong}
              </h3>
              <p className="mt-2 text-[13px] text-white/65">
                Certificate {UL1203.certificateNumber} · Master Contract {UL1203.masterContract} ·
                issued {UL1203.dateIssued}
              </p>
              <ul className="mt-4 space-y-2">
                {scope.lines.map((line) => (
                  <li key={line} className="flex items-center gap-2 text-[13.5px] text-white/85">
                    <Check aria-hidden className="size-4 shrink-0 text-brand-400" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mt-4 border-t border-white/10 pt-4 text-[12px]/[1.6] text-white/50">
                Scope wording: &ldquo;{scope.certificateWording}&rdquo;. {UL1203.useLimitation}
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
              <h3 className="font-display text-[13px] font-extrabold uppercase tracking-[0.1em] text-brand-300">
                Conditions of the configuration
              </h3>
              <ul className="mt-3 space-y-3">
                {UL1203_CONDITIONS.map((c) => (
                  <li key={c.title} className="text-[12.5px]/[1.6] text-white/70">
                    <span className="font-semibold text-white/90">{c.title}:</span> {c.detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
            <h3 className="font-display text-[16px] font-extrabold text-white">
              No NRTL certification — and that is a question of scope
            </h3>
            <p className="mt-3 max-w-3xl text-[13.5px]/[1.7] text-white/70">
              {UL1203.standard} is a standard for explosion-proof and dust-ignition-proof{" "}
              <em>electrical</em> equipment. This unit has no electrical components anywhere on it,
              so the standard does not apply to it. The ignition-source question is answered by the
              construction — there is nothing electrical to enclose — rather than by an enclosure
              listing. PrestiVac does not claim UL, CSA, ATEX or IECEx approval for this line.
            </p>
            <Link
              href="/guides/electric-vs-pneumatic-vacuums"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-300 hover:underline"
            >
              Electric or pneumatic — how to choose
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
          </div>
        )}
        <div className="mt-5 flex flex-wrap gap-2.5">
          {[
            { label: "UL 1203 explained", href: "/hazardous-locations/ul-1203" },
            { label: "Class II Groups E, F & G", href: "/hazardous-locations/class-ii-groups-e-f-g" },
            { label: "NFPA 660", href: "/hazardous-locations/nfpa-660" },
            { label: "ATEX", href: "/hazardous-locations/atex" },
            { label: "IECEx", href: "/hazardous-locations/iecex" },
            { label: "OSHA & combustible dust", href: "/hazardous-locations/osha-combustible-dust" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg bg-white/[0.05] px-3.5 py-2 text-[12.5px] font-semibold text-white/75 ring-1 ring-white/12 transition-colors hover:text-white hover:ring-brand-500/40"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* CONFIGURATION ------------------------------------------------------ */}
      <Section
        id="configuration"
        eyebrow="Options"
        title="Configuration options on this model"
        intro="What each designation on the model name means."
        tone="darker"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {(model.tags.length ? model.tags : ["EX"]).map((tag) => {
            const info = TAG_INFO[tag];
            return (
              <div key={tag} className={card}>
                <div className="flex items-center gap-2.5">
                  <span className="rounded-md bg-brand-500/15 px-2 py-0.5 font-mono text-[11px] font-bold text-brand-300 ring-1 ring-brand-500/30">
                    {tag}
                  </span>
                  <h3 className="font-display text-[14px] font-extrabold text-white">
                    {info?.label ?? "Configuration option"}
                  </h3>
                </div>
                <p className="mt-2.5 text-[12.5px]/[1.65] text-white/65">
                  {info?.detail ?? "Configuration suffix. Definition and specifications come from the model datasheet."}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ACCESSORIES -------------------------------------------------------- */}
      <Section
        id="accessories"
        eyebrow="Equipment"
        title="Hoses, tools and accessories"
        intro={
          scope
            ? "The listing covers the vacuum together with its hoses and tools. Substituting third-party accessories takes the unit outside the scope of its certification."
            : "Hoses and tools supplied with the unit."
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {accessories.map((a) => (
            <Link key={a.slug} href={`/products/models/${a.slug}`} className={card}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/[0.03]">
                <Image
                  src={a.image}
                  alt={`PrestiVac ${a.name}`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px"
                  className="object-contain p-3"
                />
              </div>
              <h3 className="mt-3 font-display text-[13.5px] font-extrabold text-white">{a.name}</h3>
              <span className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-brand-300">
                View <ArrowRight aria-hidden className="size-3" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* COMPARE ------------------------------------------------------------ */}
      {comparable.length ? (
        <Section
          id="compare"
          eyebrow="Range"
          title={`Other models in the ${model.seriesName}`}
          intro="Same series, different configuration. Performance figures come from the datasheet for each model."
          tone="darker"
        >
          <div className="overflow-x-auto rounded-2xl ring-1 ring-white/10">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <caption className="sr-only">Configuration comparison within the {model.seriesName}</caption>
              <thead>
                <tr className="bg-white/[0.05]">
                  <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Model</th>
                  <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Configuration</th>
                  <th scope="col" className="px-4 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">Certified scope</th>
                  <th scope="col" className="px-4 py-3" />
                </tr>
              </thead>
              <tbody>
                {[model, ...comparable].map((m) => {
                  const s = scopeOf(m);
                  const current = m.slug === model.slug;
                  return (
                    <tr
                      key={m.slug}
                      className={`border-t border-white/[0.07] ${current ? "bg-brand-500/[0.08]" : ""}`}
                    >
                      <th scope="row" className="px-4 py-3 text-[13px] font-bold text-white">
                        {m.name}
                        {current ? (
                          <span className="ml-2 rounded bg-brand-500/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-200">
                            Viewing
                          </span>
                        ) : null}
                      </th>
                      <td className="px-4 py-3 text-[12.5px] text-white/70">
                        {m.tags.length ? m.tags.join(" · ") : "Standard"}
                      </td>
                      <td className="px-4 py-3 text-[12.5px] text-white/70">
                        {s ? s.summary : "Not within the UL 1203 listing"}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {current ? null : (
                          <Link
                            href={`/products/models/${m.slug}`}
                            className="text-[12.5px] font-bold text-brand-300 hover:underline"
                          >
                            View
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Section>
      ) : null}

      {/* CASE STUDIES -------------------------------------------------------- */}
      {caseStudies.length ? (
        <Section
          id="case-studies"
          eyebrow="In service"
          title="Representative industrial applications"
          intro="Anonymised scenarios describing how the hazard was assessed and controlled. Outcomes are described qualitatively; we do not publish figures that were not measured."
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className={card}>
                <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-brand-400">
                  {study.taxonomy.industry}
                </p>
                <h3 className="mt-2 font-display text-[15px]/[1.3] font-extrabold text-white">
                  {study.title}
                </h3>
                <p className="mt-2 text-[12.5px]/[1.6] text-white/60">
                  {study.taxonomy.material} · {study.taxonomy.hazard}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-bold text-brand-300">
                  Read <ArrowRight aria-hidden className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ) : null}

      {/* ESTIMATOR ----------------------------------------------------------- */}
      <Section
        id="estimator"
        eyebrow="Estimate"
        title="What manual housekeeping costs you now"
        intro="An arithmetic estimate from your own figures. It makes no claim about this model's performance."
        tone="darker"
      >
        <CostEstimator product={model.name} />
      </Section>

      {/* FAQ ----------------------------------------------------------------- */}
      <Section id="faq" eyebrow="Questions" title="Frequently asked">
        <div className="grid gap-3 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details key={faq.id} className="group rounded-2xl bg-white/[0.04] ring-1 ring-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400 [&::-webkit-details-marker]:hidden">
                <h3 className="text-[13.5px]/[1.45] font-bold text-white">{faq.question}</h3>
                <span aria-hidden className="shrink-0 text-white/40 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none">+</span>
              </summary>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-[13px]/[1.7] text-white/70">{faq.answer}</p>
                {faq.related.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {faq.related.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1 text-[11.5px] font-semibold text-brand-300 hover:text-brand-200"
                      >
                        {r.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </details>
          ))}
        </div>
        <Link href="/faq" className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-300 hover:underline">
          All questions <ArrowRight aria-hidden className="size-3.5" />
        </Link>
      </Section>

      {/* RELATED -------------------------------------------------------------- */}
      <section aria-labelledby="related-heading" className="bg-graphite-950 py-14 lg:py-16">
        <Container>
          <h2 id="related-heading" className="font-display text-[22px] font-extrabold text-white">
            Related reading
          </h2>
          <div className="mt-7 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: "Selection",
                links: [
                  { label: "Choosing an explosion-proof vacuum", href: "/guides/how-to-choose-an-explosion-proof-vacuum" },
                  { label: "Electric vs pneumatic", href: "/guides/electric-vs-pneumatic-vacuums" },
                  { label: "Sizing an industrial vacuum", href: "/guides/how-to-size-an-industrial-vacuum" },
                ],
              },
              {
                heading: "Hazard",
                links: [
                  { label: "How dust explosions work", href: "/guides/dust-explosion-basics" },
                  { label: "Sources of ignition", href: "/guides/sources-of-ignition" },
                  { label: "Types of combustible dust", href: "/guides/types-of-combustible-dust" },
                ],
              },
              {
                heading: "Standards",
                links: [
                  { label: "UL 1203", href: "/hazardous-locations/ul-1203" },
                  { label: "NFPA 484 — metals", href: "/hazardous-locations/nfpa-484" },
                  { label: "Class II, Division 1", href: "/hazardous-locations/class-ii-division-1" },
                ],
              },
              {
                heading: "Browse",
                links: [
                  { label: "All products", href: "/products" },
                  { label: "Applications", href: "/applications" },
                  { label: "Industries", href: "/industries" },
                ],
              },
            ].map((group) => (
              <div key={group.heading}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-400">
                  {group.heading}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[13px]/[1.6] text-white/70 hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINAL CTA ------------------------------------------------------------ */}
      <section className="bg-graphite-900 py-14 lg:py-16">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-brand-600/15 to-transparent p-8 ring-1 ring-brand-500/25 lg:p-12">
            <h2 className="max-w-2xl font-display text-[26px]/[1.15] font-extrabold text-white sm:text-[32px]">
              Not sure this is the right model?
            </h2>
            <p className="mt-3 max-w-2xl text-[14.5px]/[1.7] text-white/70">
              Tell us the material, the area classification and how the unit will be used, and our
              technical team will confirm the model and configuration — or tell you if something
              else in the range fits better.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <TrackedCta href={quoteHref} cta="request_quote" placement="final" product={model.name}>
                Request a quote
                <ArrowRight aria-hidden className="size-4" />
              </TrackedCta>
              <TrackedCta href="/contact" cta="technical_consultation" placement="final" product={model.name} variant="secondary">
                <Wrench aria-hidden className="size-4" />
                Technical consultation
              </TrackedCta>
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
