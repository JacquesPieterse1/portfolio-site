"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { Project } from "@/types";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/projects/project-card";

interface ProjectFiltersProps {
  projects: Project[];
}

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  // Collect all unique tags sorted alphabetically
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const p of projects) {
      for (const t of p.stack) tags.add(t);
    }
    return Array.from(tags).sort();
  }, [projects]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return projects.filter((p) => {
      // Tag filter: project must include ALL active tags
      if (activeTags.size > 0 && !Array.from(activeTags).every((t) => p.stack.includes(t))) {
        return false;
      }
      // Search filter: match title, description, or stack
      if (q) {
        const haystack = `${p.title} ${p.description} ${p.stack.join(" ")}`.toLowerCase();
        return haystack.includes(q);
      }
      return true;
    });
  }, [projects, search, activeTags]);

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {/* Tag pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        {allTags.map((tag) => {
          const isActive = activeTags.has(tag);
          return (
            <button key={tag} type="button" onClick={() => toggleTag(tag)}>
              <Badge
                variant={isActive ? "default" : "outline"}
                className={cn(
                  "cursor-pointer transition-colors",
                  !isActive && "hover:bg-accent"
                )}
              >
                {tag}
              </Badge>
            </button>
          );
        })}

        {activeTags.size > 0 && (
          <button
            type="button"
            onClick={() => setActiveTags(new Set())}
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-12 text-center text-muted-foreground">
          No projects match your filters. Try adjusting your search or tags.
        </p>
      )}
    </div>
  );
}
