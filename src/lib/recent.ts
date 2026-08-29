import { getCollection } from 'astro:content';
import { projects } from '../data/projects';
import { withBase } from './urls';

export type RecentItemType = 'presentation' | 'blog' | 'article' | 'project';

export interface RecentItem {
  type: RecentItemType;
  title: string;
  description: string;
  date: Date;
  href: string;
  external: boolean;
  tags: string[];
}

const typeLabel: Record<RecentItemType, string> = {
  presentation: 'Presentation',
  blog: 'Blog',
  article: 'Article',
  project: 'Project',
};

export function labelFor(type: RecentItemType): string {
  return typeLabel[type];
}

export async function getRecentItems(limit = 6): Promise<RecentItem[]> {
  const isProd = import.meta.env.PROD;

  const blogEntries = await getCollection('blog', ({ data }) => (isProd ? data.draft !== true : true));
  const blogItems: RecentItem[] = blogEntries.map((post) => {
    const external = Boolean(post.data.externalUrl);
    return {
      type: external ? 'article' : 'blog',
      title: post.data.title,
      description: post.data.description,
      date: post.data.date,
      href: external ? post.data.externalUrl! : withBase(`/blog/${post.slug}`),
      external,
      tags: post.data.tags,
    };
  });

  const presentationEntries = await getCollection('presentations');
  const presentationItems: RecentItem[] = presentationEntries.map((entry) => ({
    type: 'presentation',
    title: entry.data.title,
    description: entry.data.description,
    date: entry.data.date,
    href: entry.data.slidesUrl ?? entry.data.repoUrl,
    external: true,
    tags: entry.data.tags,
  }));

  const projectItems: RecentItem[] = projects.map((project) => ({
    type: 'project',
    title: project.title,
    description: project.description,
    date: new Date(project.year, 0, 1),
    href: project.githubUrl,
    external: true,
    tags: project.tech,
  }));

  return [...blogItems, ...presentationItems, ...projectItems]
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
    .slice(0, limit);
}
