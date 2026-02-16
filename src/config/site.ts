export const siteConfig = {
  name: "Jacques Pieterse",
  title: "Portfolio",
  url: "https://jacquespieterse.dev",
  description:
    "Full-stack developer crafting fast, accessible web experiences.",

  hero: {
    headline: "I build things for the web.",
    subheadline:
      "Full-stack developer specialising in React, TypeScript, and cloud-native applications. I turn complex problems into clean, performant interfaces.",
    cta: {
      primary: { label: "View Projects", href: "/projects" },
      secondary: { label: "Download CV", href: "/cv.pdf" },
    },
  },

  proofStrip: [
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Projects Shipped" },
    { value: "React & Next.js", label: "Primary Stack" },
    { value: "AWS Certified", label: "Cloud" },
  ],

  email: "hello@jacquespieterse.dev",

  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },

  about: {
    bio: "I'm a full-stack developer with 5+ years of experience building web and mobile applications. I specialise in React, TypeScript, and cloud-native architectures — with a focus on performance, accessibility, and clean code. When I'm not shipping features, I'm contributing to open-source or experimenting with AI tooling.",

    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Prisma"],
      },
      {
        category: "Cloud & DevOps",
        items: ["AWS", "Docker", "Terraform", "GitHub Actions", "Vercel"],
      },
      {
        category: "Tools & Practices",
        items: ["Git", "Vitest", "Playwright", "Figma", "Agile / Scrum"],
      },
    ],

    timeline: [
      {
        type: "work" as const,
        title: "Senior Frontend Engineer",
        organisation: "Acme Corp",
        period: "2023 – Present",
        description:
          "Leading the frontend platform team. Migrated legacy Angular app to Next.js, reducing bundle size by 60% and improving Lighthouse scores to 95+.",
      },
      {
        type: "work" as const,
        title: "Full-Stack Developer",
        organisation: "StartupX",
        period: "2021 – 2023",
        description:
          "Built and maintained core product features across React, Node.js, and AWS. Shipped the real-time collaboration engine used by 10k+ daily active users.",
      },
      {
        type: "work" as const,
        title: "Junior Developer",
        organisation: "Digital Agency Co",
        period: "2019 – 2021",
        description:
          "Delivered 20+ client projects ranging from marketing sites to e-commerce platforms. Introduced component-driven development with Storybook.",
      },
      {
        type: "education" as const,
        title: "BSc Computer Science",
        organisation: "University of Cape Town",
        period: "2016 – 2019",
        description:
          "Graduated with distinction. Focused on distributed systems and human-computer interaction.",
      },
    ],

    certifications: [
      { name: "AWS Certified Solutions Architect – Associate", year: "2023" },
      { name: "AWS Certified Cloud Practitioner", year: "2022" },
    ],
  },
} as const;
