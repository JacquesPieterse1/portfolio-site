import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex gap-3">
            <Button asChild size="sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                View Source
              </a>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </header>

        <Separator className="my-10" />

        {/* Case study sections */}
        <div className="space-y-10">
          {/* Highlights */}
          <Section title="Key Results">
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {h}
                </li>
              ))}
            </ul>
          </Section>

          {/* Problem */}
          {project.problem && (
            <Section title="The Problem">
              <p className="leading-relaxed text-muted-foreground">
                {project.problem}
              </p>
            </Section>
          )}

          {/* Solution */}
          {project.solution && (
            <Section title="The Solution">
              <p className="leading-relaxed text-muted-foreground">
                {project.solution}
              </p>
            </Section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <Section title="Features">
              <ul className="space-y-2">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Tech Stack */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Section>

          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <Section title="What I Learned">
              <ul className="space-y-2">
                {project.learnings.map((l, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {l}
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <Separator className="my-10" />

        {/* Footer nav */}
        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link href="/projects">
              <ArrowLeft className="size-4" />
              All Projects
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
