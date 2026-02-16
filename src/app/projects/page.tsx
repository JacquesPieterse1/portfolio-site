import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <ul className="mt-8 space-y-6">
        {projects.map((project) => (
          <li key={project.slug}>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-1 text-muted-foreground">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded bg-muted px-2 py-0.5">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
