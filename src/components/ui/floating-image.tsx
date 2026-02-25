"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import { cn } from "@/lib/utils";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Multiplies the animation speed. Default: 1 */
  speed?: number;
  /** Axis of the floating loop. Default: "y" */
  direction?: "x" | "y";
}

export function FloatingImage({
  src,
  alt,
  className,
  speed = 1,
  direction = "y",
}: FloatingImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle parallax translation on mouse move
  const parallaxX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const parallaxY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // Slight 3-D tilt driven by mouse position
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = containerRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  // Floating loop keyframes — slight rotate gives organic feel
  const floatAnimation =
    direction === "y"
      ? { y: [0, -14, 0], rotate: [0, 1.5, 0] }
      : { x: [0, 14, 0], rotate: [0, -1.5, 0] };

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ perspective: "800px" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Parallax + 3-D tilt layer */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY, rotateX, rotateY }}
        className="relative h-full w-full"
      >
        {/* Infinite float loop layer */}
        <motion.div
          animate={floatAnimation}
          transition={{
            duration: 5 / speed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative h-full w-full overflow-hidden rounded-xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.3)]"
        >
          <Image src={src} alt={alt} fill className="object-cover" />
        </motion.div>
      </motion.div>
    </div>
  );
}
