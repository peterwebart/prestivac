import { cn } from "@/lib/utils";

type OptionGroupProps = {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange: (value: string) => void;
};

/** Pill-button single-select group used by the interactive tools. */
export function OptionGroup({ label, options, value, onChange }: OptionGroupProps) {
  return (
    <div role="group" aria-label={label}>
      <p className="text-[12.5px] font-semibold text-white">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value === option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-lg border px-3.5 py-2 text-[12.5px] font-medium transition-colors duration-200",
              value === option.value
                ? "border-brand-500 bg-white/10 text-white"
                : "border-white/12 bg-white/[0.05] text-white/80 hover:border-brand-500/60 hover:bg-white/[0.09]",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
