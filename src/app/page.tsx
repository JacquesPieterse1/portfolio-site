import { Hero } from "@/components/home/hero";
import { ProofStrip } from "@/components/home/proof-strip";
import { FeaturedProjects } from "@/components/home/featured-projects";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <FeaturedProjects />
    </>
  );
}
