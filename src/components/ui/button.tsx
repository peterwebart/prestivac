import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2.5 whitespace-nowrap",
    "font-semibold uppercase tracking-[0.08em]",
    "transition-all duration-300 motion-safe:hover:-translate-y-0.5",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric-400",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        primary: "bg-brand-600 text-white shadow-lift hover:bg-brand-500",
        outline:
          "border border-white/30 bg-white/[0.03] text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10",
        light: "bg-white text-graphite-950 shadow-card hover:bg-steel-100",
      },
      size: {
        sm: "h-9 rounded-[6px] px-4 text-[11px]",
        md: "h-11 rounded-[7px] px-5 text-[12px]",
        lg: "h-12 rounded-[8px] px-6 text-[12.5px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /** Render the child element (e.g. an anchor) with button styling. */
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
