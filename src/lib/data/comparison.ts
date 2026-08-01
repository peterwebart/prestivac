export type ComparisonRow = {
 feature: string;
 standard: "no" | "limited" | "optional";
 prestivac: true;
};

export const COMPARISON_ROWS: ComparisonRow[] = [
 { feature: "Combustible dust recovery", standard: "no", prestivac: true },
 { feature: "HEPA filtration", standard: "optional", prestivac: true },
 { feature: "Explosion-proof construction", standard: "no", prestivac: true },
 { feature: "Custom engineering", standard: "no", prestivac: true },
 { feature: "Continuous industrial duty", standard: "limited", prestivac: true },
 { feature: "Compliance support", standard: "no", prestivac: true },
];

export const STANDARD_LABEL: Record<ComparisonRow["standard"], string> = {
 no: "Not rated",
 limited: "Limited",
 optional: "Optional",
};
