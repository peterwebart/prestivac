import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { CLIENT_INDUSTRIES, CLIENT_LOGOS } from "@/lib/data/clients";

/**
 * Client logo wall.
 *
 * Logo files are supplied by PrestiVac. `name` is left empty where the brand has
 * not yet been confirmed — alt text falls back to a generic description rather
 * than guessing a company name, because misattributing a client relationship
 * would be worse than a generic alt.
 */
export function ClientLogos({
  heading = "Our clients",
  intro = "Manufacturers, processors and facilities across North America specify PrestiVac vacuums.",
  limit,
  showIndustries = false,
}: {
  heading?: string;
  intro?: string;
  limit?: number;
  /** Group leading clients by sector beneath the logo wall. */
  showIndustries?: boolean;
}) {
  const logos = limit ? CLIENT_LOGOS.slice(0, limit) : CLIENT_LOGOS;

  return (
    <section className="border-t border-white/10 bg-graphite-950 py-14 lg:py-16">
      <Container>
        <h2 className="font-display text-[22px]/[1.2] font-extrabold uppercase text-white sm:text-[26px]/[1.15]">
          {heading}
        </h2>
        <p className="mt-3 max-w-2xl text-[13.5px]/[1.7] text-white/60">{intro}</p>
        <ul className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {logos.map((logo) => (
            <li
              key={logo.file}
              className="flex items-center justify-center rounded-xl bg-white p-4 ring-1 ring-white/10"
            >
              <span className="relative block h-14 w-full">
                <Image
                  src={`/images/clients/${logo.file}`}
                  alt={logo.name ? `${logo.name} logo` : "PrestiVac client logo"}
                  fill
                  sizes="(min-width: 1280px) 160px, (min-width: 640px) 22vw, 40vw"
                  className="object-contain"
                />
              </span>
            </li>
          ))}
        </ul>

        {showIndustries && (
          <div className="mt-14">
            <h3 className="font-display text-[16px] font-extrabold uppercase tracking-[0.08em] text-brand-400">
              Leading clients by industry
            </h3>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CLIENT_INDUSTRIES.map((group) => (
                <div
                  key={group.industry}
                  className="rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/45">
                    {group.href ? (
                      <Link href={group.href} className="transition-colors hover:text-brand-300">
                        {group.industry}
                      </Link>
                    ) : (
                      group.industry
                    )}
                  </dt>
                  <dd className="mt-2.5 space-y-1">
                    {group.clients.map((client) => (
                      <p key={client} className="text-[13.5px] font-semibold text-white/85">
                        {client}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </Container>
    </section>
  );
}
