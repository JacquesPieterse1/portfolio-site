import type { Metadata } from "next";
import { Briefcase, GraduationCap, Github, Linkedin, Twitter } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const { about, social, name } = siteConfig;

export const metadata: Metadata = {
  title: `About | ${siteConfig.title}`,
  description: `Learn more about ${name} — experience, skills, and background.`,
};

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Bio */}
        <header>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">{name}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {about.bio}
          </p>

          {/* Social links */}
          <div className="mt-6 flex gap-3">
            <Button asChild variant="outline" size="sm">
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="size-4" />
                X / Twitter
              </a>
            </Button>
          </div>
        </header>

        <Separator className="my-12" />

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {about.skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-muted-foreground">
                  {group.category}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-12" />

        {/* Timeline */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
          <div className="mt-6 space-y-8">
            {about.timeline.map((entry, i) => (
              <div key={i} className="relative pl-8">
                {/* Icon */}
                <div className="absolute left-0 top-0.5 flex size-5 items-center justify-center rounded-full bg-muted">
                  {entry.type === "education" ? (
                    <GraduationCap className="size-3 text-muted-foreground" />
                  ) : (
                    <Briefcase className="size-3 text-muted-foreground" />
                  )}
                </div>

                {/* Connector line */}
                {i < about.timeline.length - 1 && (
                  <div className="absolute bottom-0 left-2.5 top-6 w-px bg-border" />
                )}

                <div>
                  <p className="text-sm text-muted-foreground">{entry.period}</p>
                  <h3 className="mt-1 font-semibold">{entry.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {entry.organisation}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        {about.certifications.length > 0 && (
          <>
            <Separator className="my-12" />
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                Certifications
              </h2>
              <ul className="mt-4 space-y-3">
                {about.certifications.map((cert) => (
                  <li key={cert.name} className="flex items-baseline justify-between gap-4">
                    <span className="text-sm">{cert.name}</span>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
