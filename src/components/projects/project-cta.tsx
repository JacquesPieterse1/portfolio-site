"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

interface ProjectCtaProps {
  email: string;
}

export function ProjectCta({ email }: ProjectCtaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* 1px gradient border via wrapper + gap technique */}
      <div className="rounded-2xl bg-linear-to-br from-primary/30 via-primary/5 to-indigo-500/20 p-px">
        <div className="rounded-2xl bg-card px-5 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14">

          {/* Eyebrow */}
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Work with me
          </p>

          {/* Headline */}
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Need a system like this for your business?
          </h2>

          {/* Subtext */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Whether you have a product to launch, a workflow to streamline, or a
            legacy system to replace — I build full-stack solutions that are fast,
            maintainable, and designed to grow with your business. Let&apos;s turn
            your requirements into something that ships.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">
                Book a Strategy Call
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href={`mailto:${email}`}>
                <Mail className="size-4" />
                Get a Quote
              </a>
            </Button>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
