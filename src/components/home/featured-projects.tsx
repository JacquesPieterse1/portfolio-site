import Link from "next/link";

import { projects } from "@/content/projects";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/projects/project-card";

const featured = projects.filter((p) => p.featured);

export function FeaturedProjects() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
