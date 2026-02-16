"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

export function ContactCta() {
  return (
    <section className="border-t bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Let&apos;s work together
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">
              Get in touch
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
