export const siteConfig = {
  name: "Jacques Pieterse",
  title: "Portfolio",
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

  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
} as const;
