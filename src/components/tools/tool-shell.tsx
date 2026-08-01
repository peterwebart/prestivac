import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type ToolShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  footnote?: string;
  children: React.ReactNode;
};

/** Shared shell for interactive tools: light band, dark glass card. */
export function ToolShell({
  id,
  eyebrow,
  title,
  description,
  footnote,
  children,
}: ToolShellProps) {
  return (
    <section id={id} className="scroll-mt-20 bg-steel-50 py-20 lg:py-24">
      <Container>
        <SectionHeading
          tone="light"
          align="center"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl bg-graphite-950 p-6 shadow-panel ring-1 ring-white/10 sm:p-10">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-600/15 blur-[90px]"
          />
          <div className="relative">{children}</div>
        </div>
        {footnote && (
          <p className="mx-auto mt-6 max-w-3xl text-center text-[12px]/[1.6] text-steel-500">
            {footnote}
          </p>
        )}
      </Container>
    </section>
  );
}
