import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** Text colors for dark vs light section backgrounds. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className,
}: SectionHeadingProps) {
  const onDark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.24em]",
          onDark ? "text-brand-400" : "text-brand-600",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl/[1.12] font-extrabold tracking-[-0.015em] sm:text-4xl/[1.1]",
          onDark ? "text-white" : "text-surface",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-[15px]/[1.65]",
            onDark ? "text-white/65" : "text-steel-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
