import { projects } from "@/content/projects";
import { ProjectFilters } from "@/components/projects/project-filters";

export default function ProjectsPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Work
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Projects</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of things I&apos;ve built — from open-source tools to
            full-stack applications.
          </p>
        </div>

        <div className="mt-10">
          <ProjectFilters projects={projects} />
        </div>
      </div>
    </section>
  );
}
