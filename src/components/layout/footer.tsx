"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { FR_ARTICLES } from "@/lib/data/fr-articles";
import { PRODUCT_CATEGORIES } from "@/lib/data/product-categories";
import { RESOURCES } from "@/lib/data/resources";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Applications", href: "/applications" },
  { label: "Industries", href: "/industries" },
  { label: "Dusts & Materials", href: "/materials" },
  { label: "Combustible Dust Vacuums", href: "/combustible-dust" },
  { label: "Hazardous Location Vacuums", href: "/hazardous-location-vacuums" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Guides", href: "/guides" },
  { label: "Support & Manuals", href: "/support" },
  { label: "Standards & Compliance", href: "/hazardous-locations" },
  { label: "Contact", href: "#contact" },
];

/**
 * French footer links. Only routes that exist in French — a French visitor should
 * not be offered footer links that land them back in English.
 */
const FR_COMPANY_LINKS = [
  { label: "À propos", href: "/fr/a-propos" },
  { label: "Obtenir une soumission", href: "/fr/demande-de-soumission" },
  { label: "Applications", href: "/fr/applications" },
  { label: "Industries", href: "/fr/industries" },
  { label: "Poussières et matières", href: "/fr/poussieres-et-matieres" },
  { label: "Guides", href: "/fr/guides" },
  { label: "Études de cas", href: "/fr/etudes-de-cas" },
];

const FR_HEADINGS = {
  products: "Aspirateurs",
  resources: "Guides",
  company: "Entreprise",
  contact: "Nous joindre",
};

const linkClass =
  "text-[13px]/[1.5] text-white/65 transition-colors hover:text-white";

export function Footer() {
  const pathname = usePathname() ?? "/";
  const isFr = pathname === "/fr" || pathname.startsWith("/fr/");

  // French product entry points and guide list, drawn from the translated data.
  const frProducts = [
    { name: "Aspirateurs antidéflagrants", slug: FR.explosionProof.slug },
  ];
  const frGuides = FR_ARTICLES.slice(0, 6);

  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-white/10 bg-graphite-900"
    >
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1.25fr] lg:gap-8">
          <div>
            <Image
              src="/images/logo-white.png"
              alt="PrestiVac"
              width={188}
              height={55}
              sizes="150px"
              className="h-10 w-auto"
            />
            <p className="mt-4 max-w-xs text-[13.5px]/[1.65] text-white/60">
              Explosion proof industrial vacuum cleaners, manufactured in-house
              for hazardous dust, combustible materials and demanding
              manufacturing environments.
            </p>
          </div>

          <nav aria-label={isFr ? FR_HEADINGS.products : "Products"}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
              {isFr ? FR_HEADINGS.products : "Products"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {isFr
                ? frProducts.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/fr/${p.slug}`} className={linkClass}>
                        {p.name}
                      </Link>
                    </li>
                  ))
                : PRODUCT_CATEGORIES.slice(0, 6).map((category) => (
                    <li key={category.slug}>
                      <Link href={"/products/" + category.slug} className={linkClass}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
              <li>
                <Link
                  href={isFr ? "/fr/poussieres-et-matieres" : "/products"}
                  className={cn(linkClass, "font-semibold text-brand-400 hover:text-brand-500")}
                >
                  {isFr ? "Poussières et matières \u2192" : "All products \u2192"}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label={isFr ? FR_HEADINGS.resources : "Resources"}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
              {isFr ? FR_HEADINGS.resources : "Resources"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {isFr
                ? frGuides.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/fr/guides/${a.slug}`} className={linkClass}>
                        {a.name}
                      </Link>
                    </li>
                  ))
                : RESOURCES.map((resource) => (
                    <li key={resource.slug}>
                      <Link href={"/resources/" + resource.slug} className={linkClass}>
                        {resource.title}
                      </Link>
                    </li>
                  ))}
            </ul>
          </nav>

          <nav aria-label={isFr ? FR_HEADINGS.company : "Explore"}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
              {isFr ? FR_HEADINGS.company : "Explore"}
            </p>
            <ul className="mt-4 space-y-2.5">
              {(isFr ? FR_COMPANY_LINKS : COMPANY_LINKS).map((item) => (
                <li key={item.label}>
                  {item.href.startsWith("#") ? (
                    <a href={item.href} className={linkClass}>
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50">
              {isFr ? FR_HEADINGS.contact : "Get a Quote"}
            </p>
            <p className="mt-4 max-w-xs text-[13.5px]/[1.65] text-white/60">
              {isFr
                ? "Dites-nous ce que vous devez aspirer et où. Notre équipe technique recommandera le modèle PrestiVac approprié \u2014 ou le construira sur mesure."
                : "Tell us what you need to vacuum and where. Our technical team will recommend the right PrestiVac model \u2014 or build one to suit."}
            </p>
            <Link
              href={isFr ? `/fr/${FR.quote.slug}` : "/get-a-quote"}
              className={cn(buttonVariants({ size: "md" }), "mt-5")}
            >
              {isFr ? FR.nav.quote : "Get a Quote"}
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
            <address className="mt-5 space-y-1.5 text-[12.5px] not-italic text-white/55">
              <p className="font-semibold text-white/80">{site.legalName}</p>
              <p>{site.address.full}</p>
              <p>
                <a
                  href={site.phoneHref}
                  className="text-white/75 underline underline-offset-2 transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={"mailto:" + site.email}
                  className="text-white/75 underline underline-offset-2 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName} All rights
            reserved.
          </p>
          <p className="uppercase tracking-[0.14em]">{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
