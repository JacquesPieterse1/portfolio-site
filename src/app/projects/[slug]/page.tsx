import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/github-icon";

import { projects } from "@/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FloatingImage } from "@/components/ui/floating-image";
import { ProjectHeroImage } from "@/components/projects/project-hero-image";
import { InteractiveBackground } from "@/components/projects/interactive-background";
import { Section, AnimatedListItem } from "@/components/projects/animated-section";
import { ProjectImageGallery } from "@/components/projects/project-image-gallery";
import { ProjectCta } from "@/components/projects/project-cta";
import { siteConfig } from "@/config/site";

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
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/30">
      <InteractiveBackground />

      {/* Decorative floating images — hidden on mobile, purely visual on desktop */}
      {project.images?.[0] && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-16 z-0 hidden h-80 w-96 opacity-20 blur-sm sm:block"
        >
          <FloatingImage
            src={project.images[0]}
            alt=""
            className="h-full w-full"
            speed={0.6}
            direction="y"
          />
        </div>
      )}
      {project.images?.[1] && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 bottom-1/3 z-0 hidden h-64 w-80 opacity-15 blur-sm sm:block"
        >
          <FloatingImage
            src={project.images[1]}
            alt=""
            className="h-full w-full"
            speed={0.8}
            direction="x"
          />
        </div>
      )}

      <article className="relative z-10 py-10 sm:py-16">
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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
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
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="sm">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
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

        {/* Hero image — breaks out of max-w-3xl to max-w-5xl */}
        {project.images?.[0] && (
          <div className="-mx-4 mt-10 sm:-mx-6">
            <ProjectHeroImage
              src={project.images[0]}
              alt={project.title}
            />
          </div>
        )}

        {/* Stacked gallery — only when more than one image exists */}
        {project.images && project.images.length > 1 && (
          <ProjectImageGallery images={project.images} title={project.title} />
        )}

        <Separator className="my-10" />

        {/* Case study sections */}
        <div className="space-y-10">
          {/* Highlights */}
          <Section title="Key Results">
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <AnimatedListItem key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {h}
                </AnimatedListItem>
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
                  <AnimatedListItem key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </AnimatedListItem>
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
                  <AnimatedListItem key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    {l}
                  </AnimatedListItem>
                ))}
              </ul>
            </Section>
          )}
        </div>

        <Separator className="my-10" />

        {/* CTA */}
        <ProjectCta email={siteConfig.email} />

        {/* Footer nav */}
        <div className="mt-10 flex justify-center">
          <Button asChild variant="ghost" size="sm">
            <Link href="/projects">
              <ArrowLeft className="size-4" />
              All Projects
            </Link>
          </Button>
        </div>
      </div>
    </article>
    </div>
  );
}
