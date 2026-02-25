"use client";

import { motion } from "framer-motion";

export function ProjectPageBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Radial glow — sits directly behind the hero image */}
      <div className="absolute -top-32 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] dark:bg-primary/8" />

      {/* Animated blob — upper right */}
      <motion.div
        animate={{
          x: [0, 24, -12, 0],
          y: [0, -18, 12, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-48 top-16 h-[420px] w-[420px] rounded-full bg-primary/4 blur-[80px] dark:bg-primary/7"
      />

      {/* Animated blob — lower left, offset phase */}
      <motion.div
        animate={{
          x: [0, -16, 20, 0],
          y: [0, 24, -12, 0],
          scale: [1, 0.96, 1.04, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute -left-48 bottom-1/3 h-[380px] w-[380px] rounded-full bg-indigo-400/5 blur-[80px] dark:bg-indigo-400/7"
      />
    </div>
  );
}
