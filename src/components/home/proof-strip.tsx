"use client";

import { motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function ProofStrip() {
  const items = siteConfig.proofStrip;

  return (
    <section className="border-y bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="relative text-center"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: i * 0.08,
              }}
            >
              {/* Vertical divider between items (desktop only) */}
              {i > 0 && (
                <Separator
                  orientation="vertical"
                  className="absolute -left-4 top-0 hidden h-full sm:block"
                />
              )}
              <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
