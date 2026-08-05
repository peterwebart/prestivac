import type { Metadata } from "next";
import { Check, Mail, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FR } from "@/lib/data/fr";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Merci — demande reçue",
  description: "Votre demande de soumission a été reçue.",
  robots: { index: false, follow: false },
};

const ETAPES = [
  "Notre équipe technique examine votre matière, votre classification et votre intensité d'utilisation",
  "Nous déterminons le modèle PrestiVac le mieux adapté à l'application",
  "Vous recevez une soumission et la fiche technique du modèle recommandé",
];

export default async function FrMerci({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  const { ref } = await searchParams;
  return (
    <section className="bg-graphite-950 pb-20 pt-24 lg:pt-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-500/15 ring-1 ring-brand-500/30">
            <Check aria-hidden className="size-7 text-brand-300" strokeWidth={2} />
          </div>
          <h1 className="mt-6 font-display text-[30px]/[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-[36px]/[1.06]">
            Merci — votre demande de soumission a été reçue
          </h1>
          <p className="mt-4 text-[15px]/[1.7] text-white/70">
            Un membre de notre équipe technique examinera votre application et vous reviendra avec
            une recommandation et une soumission.
          </p>

          {ref && (
            <div className="mt-8 rounded-2xl border border-brand-500/30 bg-brand-500/[0.07] p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">
                Votre numéro de référence
              </p>
              <p className="mt-2 font-display text-[26px] font-extrabold tracking-[0.04em] text-white sm:text-[30px]">
                {ref}
              </p>
              <p className="mt-3 text-[12.5px]/[1.6] text-white/60">
                Veuillez mentionner cette référence si vous nous contactez au sujet de cette demande.
              </p>
            </div>
          )}

          <ul className="mt-9 space-y-3 text-left">
            {ETAPES.map((e, i) => (
              <li
                key={e}
                className="flex items-start gap-3.5 rounded-xl bg-white/[0.04] p-4 text-[13.5px]/[1.6] text-white/75 ring-1 ring-white/10"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-[10.5px] font-bold text-brand-300">
                  {i + 1}
                </span>
                {e}
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

          <p className="mt-10 text-[13px] text-white/50">
            <Link href={`/fr/${FR.explosionProof.slug}`} className="font-semibold text-brand-400">
              Voir la gamme d&rsquo;aspirateurs antidéflagrants
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
