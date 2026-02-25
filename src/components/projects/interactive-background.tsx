"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Depth layering system
 *
 *  Tier 0 — static radial glow  (no movement, base atmosphere)
 *  Tier 1 — primary blob        (slowest parallax,  distant)
 *  Tier 2 — indigo blob         (medium parallax,   counter-direction, mid)
 *  Tier 3 — violet accent blob  (fastest parallax,  closest)
 *  Tier 4 — cursor light        (fixed, follows cursor 1:1, z=30)
 */
export function InteractiveBackground() {
  // ── Normalized mouse position [0, 1] ─────────────────────────────────────
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Raw cursor pixel position — starts off-screen to prevent initial flash
  const cursorX = useMotionValue(-600);
  const cursorY = useMotionValue(-600);

  // Cursor light: tight spring for crisp, responsive feel
  const lightX = useSpring(cursorX, { damping: 22, stiffness: 220 });
  const lightY = useSpring(cursorY, { damping: 22, stiffness: 220 });

  // Blob parallax: loose spring for slow, weighty movement
  const smoothX = useSpring(mouseX, { damping: 45, stiffness: 55 });
  const smoothY = useSpring(mouseY, { damping: 45, stiffness: 55 });

  // ── Depth-scaled parallax transforms ─────────────────────────────────────
  // Tier 1 — distant, slow (±12px / ±8px)
  const t1x = useTransform(smoothX, [0, 1], [-12, 12]);
  const t1y = useTransform(smoothY, [0, 1], [-8, 8]);

  // Tier 2 — mid-distance, counter-direction (±20px / ±14px)
  const t2x = useTransform(smoothX, [0, 1], [20, -20]);
  const t2y = useTransform(smoothY, [0, 1], [-14, 14]);

  // Tier 3 — closest, fastest (±34px / ±22px)
  const t3x = useTransform(smoothX, [0, 1], [-34, 34]);
  const t3y = useTransform(smoothY, [0, 1], [22, -22]);

  useEffect(() => {
    function onMove(e: MouseEvent) {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY, mouseX, mouseY]);

  return (
    <>
      {/* ── Tier 4: cursor light — desktop/pointer only, hidden on touch ─── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 hidden overflow-hidden sm:block"
      >
        <motion.div
          style={{ x: lightX, y: lightY, translateX: "-50%", translateY: "-50%" }}
          className="absolute h-140 w-140 rounded-full bg-primary/5.5 blur-[72px] dark:bg-primary/8.5"
        />
      </div>

      {/* ── Tiers 0–3: page background layer ────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Tier 0 — static radial glow, anchored behind hero */}
        <div className="absolute -top-32 left-1/2 h-125 w-230 -translate-x-1/2 rounded-full bg-primary/5 blur-[110px] dark:bg-primary/8" />

        {/* Tier 1 — large primary blob, slowest parallax + ambient loop */}
        <motion.div
          style={{ x: t1x, y: t1y }}
          className="absolute -right-48 top-16"
        >
          <motion.div
            animate={{
              x: [0, 22, -14, 0],
              y: [0, -16, 10, 0],
              scale: [1, 1.06, 0.95, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="h-120 w-120 rounded-full bg-primary/5 blur-[88px] dark:bg-primary/8"
          />
        </motion.div>

        {/* Tier 2 — indigo blob, medium parallax, counter-direction */}
        <motion.div
          style={{ x: t2x, y: t2y }}
          className="absolute -left-48 bottom-1/3"
        >
          <motion.div
            animate={{
              x: [0, -18, 16, 0],
              y: [0, 22, -12, 0],
              scale: [1, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
            className="h-100 w-100 rounded-full bg-indigo-500/5 blur-[80px] dark:bg-indigo-500/8"
          />
        </motion.div>

        {/* Tier 3 — violet accent blob, fastest parallax */}
        <motion.div
          style={{ x: t3x, y: t3y }}
          className="absolute bottom-1/4 right-1/4"
        >
          <motion.div
            animate={{
              x: [0, 10, -8, 0],
              y: [0, -12, 14, 0],
              scale: [1, 1.04, 0.97, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 9,
            }}
            className="h-70 w-70 rounded-full bg-violet-500/4 blur-[60px] dark:bg-violet-500/7"
          />
        </motion.div>
      </div>
    </>
  );
}
