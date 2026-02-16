import { Hero } from "@/components/home/hero";
import { ProofStrip } from "@/components/home/proof-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { SkillsPreview } from "@/components/home/skills-preview";
import { AboutPreview } from "@/components/home/about-preview";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedProjects />
      <SkillsPreview />
      <AboutPreview />
      <ContactCta />
    </>
  );
}
