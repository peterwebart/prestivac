# Factory Brochures — Intake Intelligence (2026-07-19)

**Source:** `BROCHURES_Englsih.zip` (client upload) → 411 per-model .docx brochures.
**Archive:** binaries are NOT committed (size); the zip persists in session uploads.
`manifest.txt` in this folder lists every file verbatim.

## ⚠ BRAND SUBSTITUTION — CLIENT TO CONFIRM
Brochure body text is branded **"DUTYVAC SYSTEMS INC."** throughout, while the
CSA certificate (70122393) and all client copy read **PrestiVac Inc.**
Working assumption: template brand to be substituted DUTYVAC → PrestiVac on
ingestion. **Nothing branded DutyVac ships to the site.** Confirm with client.

## Certification language (factory-official, from brochure text)
- "Certified Explosion proof / Dust ignition proof … **Class I, Division 1,
  Group D and Class II, Division 1, Groups E, F and G** Hazardous Locations as
  defined in the NEC / NFPA 70"
- "Certified **EPL Db and EPL Gb** (Equipment Protection Level)"
- CSA Certificate of Compliance **70122393** (Master Contract 268761, issued
  2017-10-05): Class I, Gp. D; Cl. II, Gps. E, F, G; Temp. Code **T3C**;
  scope line: "Dry Vacuum Cleaner, Model **Ex 1-xx HEPA**, cord-connected,
  grounded, 120V, 60Hz, 10A, 1000W."
  Assets: `public/images/certifications/csa-certificate-70122393.jpg`,
  `csa-mark-c-us.png`.

## Filtration grades (factory claims — cite per line, don't blanket-apply)
- Collection-tank HEPA: **99.995% @ 0.3 µm** (H14-class language)
- ULPA exhaust: **99.9995% @ 0.12 µm** (cleanroom containment lines)
- Site-wide educational figure (regulatory HEPA definition) remains
  99.97% @ 0.3 µm; product pages may cite factory grades where documented.
- Sample performance figures seen: 560 Peak Air Watts, 135" H2O, 123 CFM
  (EV1-10 CM ACF CR).

## Suffix glossary — decoded from factory filenames/folders (evidence-based)
| Suffix | Meaning | Evidence |
| --- | --- | --- |
| EX / DIV1 / DIV2 | Explosion-proof; NEC Division 1 / 2 | folder tree + body text |
| CM | Containment | "Containment Vacuums" folder + filenames |
| CR | Cleanroom | filenames + ISO Class 4 body text |
| BP | Backpack | filenames + "Backpack" folder |
| HH | Handheld | filenames + "Handheld" folder |
| AC | Acid Collection | folder + filenames |
| DDT | Downdraft Table | DC-700 EX DDT body text |
| IS | Immersion Separator | "Immersion Separators" folder |
| ACF | Activated Carbon Filtration (fuel/solvent vapors) | factory body text |
| RCT | Removable Collection Tank system | factory body text |
| MC | Mercury Collection (brochure code; photos use MR) | Mercury folder body text |
| **TT** | *not glossed — no factory definition found in corpus* | full-corpus scan |

## Category tree (top level → future site arcs)
Acid Collection · Cleanroom · Containment · Continuous Duty (Std/HEPA) ·
Dust Collectors · Explosion Proof (Dry / Wet-Dry / Dustless Sanding /
**Fuels & Solvents incl. Aerospace-Military Defueling** / Handheld / Backpack /
Immersion Separators / Continuous Duty EX) · Fume Extractors · HEPA ·
Industrial · Mercury (incl. Mercury Analyzers).

## Per-model pipeline (next arc)
docx → python-docx extractor → structured `product-specs/*.ts` →
per-model page template (brief already in hand) → wire from catalog island.
Order: EX1/EX HEPA (CSA-certified line) first, then EVX/AVX, then specialty.
