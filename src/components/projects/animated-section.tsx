"use client";

import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      // Propagates stagger to AnimatedListItem children
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.h2
        variants={titleVariants}
        className="text-xl font-semibold tracking-tight"
      >
        {title}
      </motion.h2>
      <motion.div variants={contentVariants} className="mt-4">
        {children}
      </motion.div>
    </motion.section>
  );
}

export function AnimatedListItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.li variants={itemVariants} className={className}>
      {children}
    </motion.li>
  );
}
