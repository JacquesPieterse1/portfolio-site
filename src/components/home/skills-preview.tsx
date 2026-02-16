"use client";

import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/animated-section";

export function SkillsPreview() {
  const { skills } = siteConfig.about;

  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Tech I work with
          </h2>
        </AnimatedSection>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skills.map((group, i) => (
            <AnimatedSection key={group.category} delay={i * 0.08}>
              <h3 className="text-sm font-medium text-muted-foreground">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
