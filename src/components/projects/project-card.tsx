import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/github-icon";

import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {project.images?.[0] && (
        <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:underline"
          >
            {project.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button asChild variant="outline" size="sm">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
            GitHub
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
              Demo
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
