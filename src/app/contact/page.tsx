import type { Metadata } from "next";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/contact-form";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

const socialLinks = [
  { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  { href: siteConfig.social.github, icon: Github, label: "GitHub" },
  { href: siteConfig.social.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: siteConfig.social.twitter, icon: Twitter, label: "X / Twitter" },
];

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a project in mind, a question, or just want to say hello? Fill
            out the form below and I&apos;ll get back to you.
          </p>
        </div>

        {/* Form */}
        <div className="mt-10">
          <ContactForm />
        </div>

        <Separator className="my-12" />

        {/* Social links */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Or find me elsewhere
          </h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 rounded-md border px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <link.icon className="size-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
