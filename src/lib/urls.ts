/**
 * Prefix a path with Astro's configured `base`.
 *
 * Astro's `base` is stripped from route paths by design — internal links
 * must add it explicitly. This helper is defensive: it works whether
 * `import.meta.env.BASE_URL` is `/`, `/homepage`, or `/homepage/`.
 *
 *   withBase('/projects')          -> '/homepage/projects'
 *   withBase('/')                  -> '/homepage/'
 *   withBase('/blog/some-slug')    -> '/homepage/blog/some-slug'
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const rootedPath = path.startsWith('/') ? path : `/${path}`;
  return `${trimmedBase}${rootedPath}`;
}
