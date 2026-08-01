import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-graphite-950 py-32">
      <div
        aria-hidden
        className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-brand-600/10 blur-[110px]"
      />
      <Container className="relative">
        <p className="font-display text-[96px]/none font-extrabold tracking-tight text-white/10 sm:text-[128px]/none">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl/[1.1] font-extrabold text-white sm:text-4xl/[1.08]">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-[15px]/[1.65] text-white/65">
          Whatever was at this address has been safely recovered. Try one of
          these instead:
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3.5">
          <Button asChild size="md">
            <Link href="/">
              Back to Home
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="md">
            <Link href="/products">Products</Link>
          </Button>
          <Button asChild variant="outline" size="md">
            <Link href="/resources">Knowledge Center</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
