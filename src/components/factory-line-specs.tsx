import { FileText } from "lucide-react";

import { FACTORY_LINES, BROCHURE_CORPUS_SIZE } from "@/lib/data/factory-lines";

const SERIES_DISPLAY: Record<string, string> = {
  avx: "AVX Series — air-operated explosion-proof",
  evx: "EVX Series — electric explosion-proof",
  ex1: "EX1 Series — HEPA industrial",
  av1: "AV1 Series — compact industrial (air)",
  ev1: "EV1 Series — compact industrial (electric)",
};

const SUFFIX_LEGEND: { code: string; meaning: string }[] = [
  { code: "RCT", meaning: "Removable Collection Tank system" },
  { code: "ACF", meaning: "Activated Carbon Filtration — adsorbs fuel & solvent vapors" },
  { code: "EX / DIV", meaning: "Hazardous-location rating per NEC / NFPA 70" },
  { code: "HEPA", meaning: "Tested to EN 1822 (H14 by MPPS method)" },
  { code: "TT · IS · MR", meaning: "Configuration suffixes — specification on request" },
];

export function FactoryLineSpecs() {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-2.5">
        <FileText aria-hidden className="size-4 text-brand-400" />
        <h3 className="font-display text-[15px] font-extrabold uppercase tracking-[0.08em] text-white">
          Factory line specifications
        </h3>
      </div>
      <p className="mt-2 max-w-3xl text-[13px]/[1.7] text-white/60">
        Extracted from {BROCHURE_CORPUS_SIZE} factory brochures and shown at
        the line level — brochure nomenclature differs from the photographed
        model names above, so figures describe the line family, and your exact
        configuration is confirmed per model by engineering. Certification
        lines are reproduced verbatim from the factory documents.
      </p>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[11.5px] text-white/55">
        {SUFFIX_LEGEND.map((s) => (
          <li key={s.code}>
            <span className="font-bold text-white/75">{s.code}</span> — {s.meaning}
          </li>
        ))}
      </ul>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {Object.entries(FACTORY_LINES).map(([sid, line]) => (
          <div key={sid} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h4 className="font-display text-[14px] font-extrabold uppercase text-white">
                {SERIES_DISPLAY[sid] ?? sid}
              </h4>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/40">
                {line.docCount} factory brochures
              </span>
            </div>

            {line.cert.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {line.cert.map((c) => (
                  <li key={c} className="rounded-lg bg-brand-500/[0.08] px-3 py-2 text-[11.5px]/[1.55] font-semibold text-brand-200 ring-1 ring-brand-500/25">
                    {c}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-3 space-y-1 text-[12px]/[1.6] text-white/65">
              {line.features.slice(0, 5).map((f) => (
                <li key={f} className="flex gap-2">
                  <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-brand-400" />
                  {f}
                </li>
              ))}
            </ul>

            {line.sizes.some((s) => s.h2o || s.cfm || s.airwatts) && (
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-left text-[11.5px]">
                  <thead>
                    <tr className="text-[10px] font-bold uppercase tracking-[0.08em] text-white/40">
                      <th className="pb-1.5 pr-3">Brochure model</th>
                      <th className="pb-1.5 pr-3">H₂O</th>
                      <th className="pb-1.5 pr-3">CFM</th>
                      <th className="pb-1.5">Air&nbsp;Watts</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    {line.sizes.filter((s) => s.h2o || s.cfm || s.airwatts).slice(0, 6).map((s) => (
                      <tr key={s.model} className="border-t border-white/[0.07]">
                        <td className="py-1.5 pr-3 font-semibold text-white/80">{s.model}</td>
                        <td className="py-1.5 pr-3">{s.h2o ? s.h2o + "\u2033" : "—"}</td>
                        <td className="py-1.5 pr-3">{s.cfm ?? "—"}</td>
                        <td className="py-1.5">{s.airwatts ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
