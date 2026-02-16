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
    problem:
      "Engineering teams were juggling three separate cloud consoles to monitor infrastructure health. Incidents were missed because alerts lived in siloed systems, and there was no unified view of cross-cloud resource utilisation.",
    solution:
      "Built a single dashboard that ingests metrics from AWS CloudWatch, GCP Monitoring, and Azure Monitor via a unified adapter layer. Real-time updates are pushed over WebSockets, and a configurable alerting engine notifies the right on-call engineer within seconds.",
    features: [
      "Unified metrics ingestion from AWS, GCP, and Azure",
      "Live WebSocket-driven updates with sub-200ms render times",
      "Customisable alert thresholds with Slack and PagerDuty integration",
      "Role-based access control with SSO (SAML / OIDC)",
      "Exportable PDF incident reports for stakeholder reviews",
    ],
    learnings: [
      "Designing a provider-agnostic adapter pattern that scales to new cloud vendors without touching core logic",
      "Optimising WebSocket fan-out for thousands of concurrent dashboard sessions",
      "Balancing real-time data freshness against database write costs using batched inserts",
    ],
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
    problem:
      "Every new project started with hours of boilerplate setup — configuring ESLint, Prettier, Vitest, GitHub Actions, Dockerfiles, and Terraform modules. Teams diverged on conventions, making cross-project contributions painful.",
    solution:
      "Created an opinionated but extensible CLI that generates a fully configured project in under 30 seconds. A plugin system lets teams publish and share their own templates while keeping a consistent baseline.",
    features: [
      "Interactive project scaffolding with monorepo and single-package modes",
      "Pre-configured ESLint, Prettier, Vitest, and Husky hooks",
      "GitHub Actions CI/CD pipelines generated out of the box",
      "Plugin architecture for community-contributed templates",
      "Dry-run mode for previewing generated files before writing",
    ],
    learnings: [
      "Designing a plugin API that's simple enough for quick adoption yet flexible enough for complex use cases",
      "Writing robust cross-platform file generation that handles Windows path quirks",
      "Publishing and maintaining an npm package with semantic versioning and automated changelogs",
    ],
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
    problem:
      "People waste time and money planning meals each week. Existing apps either ignore dietary needs, don't account for budget, or require manual recipe entry. There was no solution that combined AI-generated menus with one-click grocery ordering.",
    solution:
      "Built a mobile app that uses OpenAI to generate personalised weekly meal plans based on dietary preferences, budget constraints, and locally available ingredients. Users can tweak individual meals, then order everything through integrated grocery delivery APIs.",
    features: [
      "AI-generated weekly meal plans tailored to dietary needs and budget",
      "Swipe-to-swap individual meals with smart alternatives",
      "One-click grocery ordering via delivery API integrations",
      "Offline-first architecture — plans sync when connectivity returns",
      "Nutritional breakdown and weekly spend tracking",
    ],
    learnings: [
      "Prompt engineering techniques for consistent, structured JSON output from LLMs",
      "Implementing offline-first sync with conflict resolution in React Native",
      "Navigating grocery delivery API rate limits and handling partial-availability edge cases",
    ],
  },
];
