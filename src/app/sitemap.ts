import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1.0 },
    { url: `${siteConfig.url}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${siteConfig.url}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
