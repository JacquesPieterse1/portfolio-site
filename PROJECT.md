# Portfolio — Jacques Pieterse

A personal developer portfolio built with Next.js 16, React 19, and Tailwind CSS v4. Clean, performant, and fully responsive with dark/light mode support.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Theming | next-themes |
| Package Manager | pnpm |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, ThemeProvider, Header, Footer
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact page
│   ├── projects/
│   │   ├── page.tsx            # Projects listing page
│   │   └── [slug]/page.tsx     # Project detail / case study page
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── home/
│   │   ├── hero.tsx            # Hero section with stagger animation
│   │   ├── proof-strip.tsx     # Stats bar (years exp, projects, stack, certs)
│   │   ├── featured-projects.tsx  # Filtered featured projects grid
│   │   ├── skills-preview.tsx  # Tech skills grouped by category
│   │   ├── about-preview.tsx   # Short bio teaser
│   │   └── contact-cta.tsx     # CTA banner linking to /contact
│   ├── layout/
│   │   ├── header.tsx          # Sticky nav with mobile hamburger
│   │   ├── footer.tsx          # Copyright + social links
│   │   └── theme-toggle.tsx    # Light/dark/system toggle
│   ├── projects/
│   │   ├── project-card.tsx    # Card with title, description, stack badges, links
│   │   └── project-filters.tsx # Search input + tag pill filter (client component)
│   ├── contact/
│   │   └── contact-form.tsx    # Validated form — mailto fallback on submit
│   ├── shared/
│   │   └── animated-section.tsx  # Reusable whileInView fade-up wrapper
│   ├── ui/                     # shadcn primitives: badge, button, card, input, separator, textarea
│   └── theme-provider.tsx      # next-themes wrapper
├── config/
│   └── site.ts                 # Single source of truth for all site content
├── content/
│   └── projects.ts             # Project data array
├── types/
│   └── index.ts                # Project interface
└── lib/
    └── utils.ts                # cn() utility (clsx + tailwind-merge)
```

---

## Pages

### Home (`/`)
Sections in order:
1. **Hero** — headline, subheadline, CTA buttons (View Projects / Download CV)
2. **ProofStrip** — 4 stats: Years Experience, Projects Shipped, Primary Stack, Cloud certs
3. **FeaturedProjects** — `featured: true` projects only, 3-column grid
4. **SkillsPreview** — skills grouped by Frontend / Backend / Cloud / Tools
5. **AboutPreview** — short bio snippet linking to `/about`
6. **ContactCta** — full-width CTA banner to `/contact`

### Projects (`/projects`)
- `<ProjectFilters>` client component with live search + tag-pill filtering
- Filters by title, description, and stack simultaneously
- Tag filter requires ALL selected tags to match (AND logic)
- "Clear filters" button appears when tags are active

### Project Detail (`/projects/[slug]`)
- Static params from `projects.ts`
- Case study layout: Key Results → The Problem → The Solution → Features → Tech Stack → What I Learned
- Generates its own `<Metadata>` per project

### About (`/about`)
- Bio, social links, skills grid, experience timeline (work + education icons), certifications list

### Contact (`/contact`)
- `<ContactForm>` — client-side validation (name, email, message required)
- On submit: opens `mailto:` in user's email client (no backend required)
- Post-submit success state with "Send another message" reset

---

## Data & Content

### `src/config/site.ts`
Central config object (`siteConfig`) containing:
- Site metadata (name, url, description)
- Hero copy and CTA links
- `proofStrip` stats array
- `email` and `social` links
- `about` object: bio, skills categories, timeline (work/education), certifications

### `src/content/projects.ts`
Array of `Project` objects. Each project has:
- `title`, `slug`, `description`, `stack[]`, `highlights[]`
- `githubUrl`, optional `liveUrl`, optional `images[]`
- `featured?: boolean` — controls appearance on home page
- Case study fields: `problem`, `solution`, `features[]`, `learnings[]`

### Current Projects (3)
| Project | Stack | Featured |
|---|---|---|
| CloudSync Dashboard | Next.js, TypeScript, Tailwind, Prisma, PostgreSQL | Yes |
| Forge CLI | Node.js, TypeScript, Commander.js, Vitest | Yes |
| Mealplan AI | React Native, TypeScript, FastAPI, OpenAI, Supabase | Yes |

---

## Key Patterns

- **All content in `siteConfig`** — updating personal details only requires editing `src/config/site.ts`
- **`AnimatedSection`** — reusable `whileInView` wrapper using Framer Motion; accepts optional `delay` prop
- **Hero uses stagger container** — `container` + `item` motion variants for sequential entrance
- **Static generation** — project detail pages use `generateStaticParams()` for full SSG
- **No backend** — contact form uses `mailto:` fallback
- **SEO** — each page exports its own `metadata`; root layout sets OpenGraph + Twitter cards; `robots.ts` and `sitemap.ts` present

---

## Owner / Identity

- **Name:** Jacques Pieterse
- **URL:** https://jacquespieterse.dev
- **Email:** hello@jacquespieterse.dev
- **GitHub:** https://github.com/JacquesPieterse1
- **LinkedIn:** https://www.linkedin.com/in/jacques-pieterse-9882b3250/
- **Experience:** 2+ years, Junior Developer at 4Sight Holdings LTD (2019–2021)
- **Education:** Software Development Diploma, CTU Training Solutions (2020–2022, distinction)
- **Certifications:** 5× Microsoft Azure/AI certifications (2022–2023)
