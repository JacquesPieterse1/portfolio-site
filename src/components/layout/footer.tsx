import { Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/JacquesPieterse1", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/jacques-pieterse-9882b3250/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://x.com", icon: Twitter, label: "X / Twitter" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Jacques Pieterse. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
