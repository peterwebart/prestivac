/**
 * Human-quotable submission references.
 *
 * Generated client-side so the SAME reference reaches PrestiVac and the customer
 * whether the submission is delivered by webhook or by the mail fallback. If it
 * were generated server-side, a fallback submission would have no reference at
 * all — the customer would have nothing to quote when they follow up.
 *
 * Format: PV-<kind>-YYYYMMDD-XXXX
 *   Q = quote request      PV-Q-20260805-K3F9
 *   C = contact enquiry    PV-C-20260805-M7B2
 *
 * The kind letter lets whoever picks up the enquiry tell at a glance which form
 * it came from, without opening the payload.
 */

export type SubmissionKind = "Q" | "C";

export function makeReference(kind: SubmissionKind): string {
  const now = new Date();
  const date = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("");
  const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `PV-${kind}-${date}-${suffix}`;
}
