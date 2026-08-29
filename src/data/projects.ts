export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tier: 1 | 2;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    slug: 'boreas',
    title: 'Boreas',
    description: 'Personal project — see the repo for details.',
    tier: 1,
    tech: [],
    githubUrl: 'https://github.com/VegSja/Boreas',
    featured: true,
    year: 2024,
  },
];
