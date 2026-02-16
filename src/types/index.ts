export interface Project {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  images?: string[];
}
