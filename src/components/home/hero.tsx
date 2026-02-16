"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const { hero } = siteConfig;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Soft gradient blob */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-widest text-muted-foreground"
          >
            {siteConfig.name}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button asChild size="lg">
              <Link href={hero.cta.primary.href}>
                {hero.cta.primary.label}
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href={hero.cta.secondary.href}>
                {hero.cta.secondary.label}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
