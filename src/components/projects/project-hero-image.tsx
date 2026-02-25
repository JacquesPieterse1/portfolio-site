"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ProjectHeroImageProps {
  src: string;
  alt: string;
}

export function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Image moves at 60% of scroll speed, creating a subtle parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-5xl px-4 sm:px-6"
    >
      <div className="relative aspect-video overflow-hidden rounded-2xl shadow-[0_24px_80px_-12px_rgba(0,0,0,0.25)]">
        {/*
          The inner div is 20% taller than the container (10% above + 10% below)
          so the parallax y movement never exposes the container background.
        */}
        <motion.div
          style={{ y }}
          className="absolute -bottom-[10%] -top-[10%] left-0 right-0"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </motion.div>
      </div>
    </motion.div>
  );
}
