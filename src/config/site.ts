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
    { value: "2", label: "Years Experience" },
    { value: "1", label: "Projects Shipped" },
    { value: "React & Next.js", label: "Primary Stack" },
    { value: "Microsoft Certified", label: "Cloud" },
  ],

  email: "hello@jacquespieterse.dev",

  social: {
    github: "https://github.com/JacquesPieterse1",
    linkedin: "https://www.linkedin.com/in/jacques-pieterse-9882b3250/",
    twitter: "https://x.com",
  },

  about: {
    bio: "I'm a full-stack developer with 2+ years of experience building web and mobile applications. I specialise in React, TypeScript, and cloud-native architectures — with a focus on performance, accessibility, and clean code. When I'm not shipping features, I'm contributing to open-source or experimenting with AI tooling.",

    skills: [
      {
        category: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Mudblazor", "Blazor"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Transact SQL", ".NET"],
      },
      {
        category: "Cloud & DevOps",
        items: ["Microsoft Azure", "AWS", "Vercel"],
      },
      {
        category: "Tools & Practices",
        items: ["Git", "Figma", "Agile / Scrum"],
      },
    ],

    timeline: [
      
      {
        type: "work" as const,
        title: "Junior Developer",
        organisation: "4Sight Holdings LTD",
        period: "2019 – 2021",
        description:
          "Worked as a Junior Software Developer primarily within the .NET ecosystem, contributing to both web and mobile application development across client-facing and internal enterprise systems.",
      },
      {
        type: "education" as const,
        title: "Software Development Diploma",
        organisation: "CTU Training Solutions",
        period: "2020– 2022",
        description:
          "Graduated with distinction. Focused on distributed systems and human-computer interaction.",
      },
    ],

    certifications: [
      { name: "Microsoft Certified: Azure Developer Associate", year: "2023" },
      { name: "Microsoft Certified: Power Platform Fundamentals", year: "2023" },
      { name: "Microsoft Certified: Azure Fundamentals", year: "2023" },
      { name: "Microsoft Certified: Azure AI Engineer Associate", year: "2022" },
      { name: "Microsoft Certified: Azure Database Administrator Associate", year: "2022" },
    ],
  },
} as const;
