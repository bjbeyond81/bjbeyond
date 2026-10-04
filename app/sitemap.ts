import type { MetadataRoute } from 'next';
import { INDEXABLE_ROUTES, absoluteUrl } from '@/lib/routes';

/**
 * Required by `output: 'export'`. A `sitemap.ts` / `robots.ts` is a Route
 * Handler, and a handler is dynamic until it says otherwise — which a build
 * with no server cannot honour, so it fails the export outright rather than
 * shipping a route that could never run. Both files are pure functions over a
 * constant, so declaring them static is a statement of fact, not a workaround.
 */
export const dynamic = 'force-static';

/**
 * `out/sitemap.xml`, generated at build time from `lib/routes.ts`.
 *
 * The site had none. Nothing was blocking the crawler — with no `robots.txt`
 * either, everything was allowed by default — but nothing was inviting it
 * past the homepage: `/phoenix/`, `/frequency/` and the two legal routes were
 * reachable only by following links, and the standalone apps are linked from a
 * section most crawls never scroll to.
 *
 * NO blanket `lastModified`. A build-clock date would restamp every URL on
 * every deploy, including routes the deploy did not touch. Google discounts
 * `lastmod` it learns not to trust. Only routes with a real edit date carry one.
 */
const LASTMOD: Record<string, string> = {
  '/method/': '2026-10-04',
};

/**
 * Live but `noindex` (set in each page's own metadata). Announcing a URL the
 * page then asks Google not to index is a contradictory signal.
 */
const NOINDEX_PATHS = new Set(['/privacy-policy/', '/cookie-policy/']);

const STATIC_URLS: MetadataRoute.Sitemap = [
  {
    url: absoluteUrl('/judgment/'),
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: '2026-10-04',
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...INDEXABLE_ROUTES.filter((route) => !NOINDEX_PATHS.has(route.path)).map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(LASTMOD[route.path] ? { lastModified: LASTMOD[route.path] } : {}),
    })),
    ...STATIC_URLS,
  ];
}
