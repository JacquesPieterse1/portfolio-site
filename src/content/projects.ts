import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Beanie - Management System",
    slug: "beanie-management-system",
    description:
      "Beanie is a full-stack café management and ordering platform I built to simulate a real-world point-of-sale and kitchen workflow system. It supports three distinct user roles — customers, staff, and admins — each with their own tailored interface and access controls. Customers can browse a dynamic menu, customise orders with modifiers like milk type, size, and extras, and track their order using a unique pickup code. Staff receive live order updates through a real-time queue powered by Supabase Realtime, allowing them to advance orders from pending through to completion without ever refreshing the page. Admins have full control over the menu catalog, including creating and editing products with linked modifier groups and price adjustments. Built with Next.js 14 App Router, TypeScript, Supabase (PostgreSQL + Auth + Realtime), and Tailwind CSS, the project emphasises server-side rendering for performance, role-based middleware for security, and a polished, responsive UI with smooth Framer Motion animations throughout.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    highlights: [
      "Three distinct user roles — customer, staff, and admin — each with tailored access controls",
      "Real-time order queue powered by Supabase Realtime with no page refreshes",
      "Dynamic menu catalog with modifier groups and per-modifier price adjustments",
    ],
    githubUrl: "https://github.com/jacquespieterse/beanie",
    liveUrl: "https://mealplan-ai.app",
    images: ["/images/customer_menu.png", "/images/admin-manage.png", "/images/admin_queue.png"],
    featured: true,
    problem:
      "Café workflows are typically fragmented — customers order at a counter, staff track orders on paper or a basic screen, and admins manage menus through a separate back-office tool. There was no single platform that unified the customer experience, kitchen queue, and menu management into one cohesive system.",
    solution:
      "Built a role-based platform where each user type gets a purpose-built interface. Customers customise and place orders online; staff see a live kitchen queue that updates in real time via Supabase Realtime; admins manage the full menu catalog with nested modifier groups. Role enforcement is handled by middleware on the server, keeping each surface secure and focused.",
    features: [
      "Customer-facing menu with modifiers (milk type, size, extras) and unique pickup code tracking",
      "Live staff queue with real-time order status progression via Supabase Realtime",
      "Admin catalog management with product creation, modifier groups, and price adjustments",
      "Role-based access control enforced via Next.js middleware",
      "Server-side rendering for fast initial loads and SEO-friendly pages",
    ],
    learnings: [
      "Designing a role-based access system where middleware enforces boundaries without duplicating logic across pages",
      "Using Supabase Realtime subscriptions to push order state changes to staff without polling",
      "Modelling flexible menu data — products with optional modifier groups and per-option price deltas — in a relational schema",
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
