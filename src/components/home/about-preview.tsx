"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/animated-section";

export function AboutPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              A bit about me
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {siteConfig.about.bio}
            </p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">
                Learn more
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
