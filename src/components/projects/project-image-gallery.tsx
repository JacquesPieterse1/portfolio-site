"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

// Alternating rotations — gives an organic, hand-placed feel
const ROTATIONS = [-5, 3, -2.5, 4, -3.5, 2];

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
}

export function ProjectImageGallery({ images, title }: ProjectImageGalleryProps) {
  return (
    <div className="-mx-4 mt-6 sm:-mx-6">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">

        {/* Label */}
        <p className="mb-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Screenshots
        </p>

        {/* Stacked card fan */}
        {/*
          pt-8 sm:pt-12 — reserves vertical space so the hover lift (y: -28)
          never clips outside the container. No fixed pixels → adapts to viewport.
        */}
        <div className="relative flex items-end justify-center pb-2 pt-8 sm:pt-12">
          {images.map((src, i) => {
            const rotation = ROTATIONS[i % ROTATIONS.length];

            return (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 32, rotate: rotation }}
                animate={{ opacity: 1, y: 0, rotate: rotation }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -28,
                  rotate: 0,
                  scale: 1.04,
                  zIndex: 50,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className={cn(
                  "relative cursor-pointer",
                  // Responsive overlap: tightest on mobile, opens up on larger screens
                  i > 0 && "-ml-8 sm:-ml-12 lg:-ml-16",
                )}
                style={{ zIndex: i }}
              >
                {/* shadcn-style card shell */}
                {/* Cards scale up progressively: small mobile → tablet → desktop */}
                <div className="h-24 w-36 overflow-hidden rounded-xl border bg-card shadow-[0_8px_32px_-8px_rgba(0,0,0,0.28)] sm:h-32 sm:w-48 lg:h-44 lg:w-64">
                  <div className="relative h-full w-full">
                    <Image
                      src={src}
                      alt={`${title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
