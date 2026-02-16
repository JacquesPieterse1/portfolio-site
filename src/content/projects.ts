import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "CloudSync Dashboard",
    slug: "cloudsync-dashboard",
    description:
      "Real-time infrastructure monitoring dashboard that aggregates metrics from AWS, GCP, and Azure into a single pane of glass. Features live WebSocket updates, customisable alert thresholds, and exportable PDF reports.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    highlights: [
      "Reduced incident response time by 40% across the engineering org",
      "Handles 50k+ metric data points per minute with sub-200ms render",
      "Role-based access control with SSO integration",
    ],
    githubUrl: "https://github.com/username/cloudsync-dashboard",
    liveUrl: "https://cloudsync-demo.vercel.app",
    images: ["/projects/cloudsync-1.png"],
    featured: true,
  },
  {
    title: "Forge CLI",
    slug: "forge-cli",
    description:
      "Developer CLI tool that scaffolds full-stack TypeScript projects with pre-configured linting, testing, CI/CD pipelines, and infrastructure-as-code templates. Supports monorepo and single-package modes.",
    stack: ["Node.js", "TypeScript", "Commander.js", "Vitest"],
    highlights: [
      "Used internally to bootstrap 15+ production services",
      "Plugin architecture allows community-contributed templates",
      "Published on npm with 2k+ weekly downloads",
    ],
    githubUrl: "https://github.com/username/forge-cli",
    featured: true,
  },
  {
    title: "Mealplan AI",
    slug: "mealplan-ai",
    description:
      "AI-powered meal planning app that generates weekly menus based on dietary preferences, budget, and locally available ingredients. Integrates with grocery delivery APIs for one-click ordering.",
    stack: ["React Native", "TypeScript", "FastAPI", "OpenAI API", "Supabase"],
    highlights: [
      "4.7★ rating on TestFlight with 800+ beta users",
      "Reduced average weekly grocery spend by 18% for active users",
      "Offline-first architecture with background sync",
    ],
    githubUrl: "https://github.com/username/mealplan-ai",
    liveUrl: "https://mealplan-ai.app",
    images: ["/projects/mealplan-1.png", "/projects/mealplan-2.png"],
    featured: true,
  },
];
