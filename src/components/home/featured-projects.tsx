"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";
import { AnimatedSection } from "@/components/shared/animated-section";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Work
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Featured Projects
              </h2>
            </div>

            <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
              <Link href="/projects">View all &rarr;</Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                ease: "easeOut" as const,
                delay: i * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">View all projects &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
