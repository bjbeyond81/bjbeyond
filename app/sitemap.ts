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
 * `lastmod` it learns not to trust. Every date below is the real date of the
 * last commit that changed the page's rendered HTML — update the entry by hand
 * when a page changes. (CI checks out with depth 1, so the date cannot be read
 * from git at build time.)
 *
 * 2026-10-07 is e9ca717: it changed the root layout's metadata and the shared
 * navigation, so every App Router page's HTML changed that day, as did the
 * standalone /phoenix/, /frequency/ and /judgment/ pages it edited directly.
 */
const SITE_WIDE = '2026-10-07';
const LASTMOD: Record<string, string> = {
  '/': '2026-10-30',
  '/human-edge/': '2026-10-30',
  '/phoenix-experiment/': SITE_WIDE,
  '/method/': '2026-10-30',
  '/writing/': '2026-10-30',
  '/writing/claude-opus-5-vs-pangram/': '2026-10-30',
  '/writing/what-an-ai-detector-can-prove-and-what-it-cant/': '2026-10-30',
  '/writing/kounellis-italics/': '2026-10-30',
  '/glossary/': '2026-10-30',
  '/about/': '2026-10-30',
  '/art/': '2026-10-30',
  '/labs/': '2026-10-30',
  '/labs/apps/': '2026-10-29',
  '/human-edge-apps/': '2026-10-29',
  '/it/human-edge-apps/': '2026-10-30',
  '/focus/': '2026-10-30',
  '/contact/': '2026-10-30',
  '/phoenix/': SITE_WIDE,
  '/frequency/': SITE_WIDE,
  '/judgment/': SITE_WIDE,
};

/**
 * Live but `noindex` (set in each page's own metadata). Announcing a URL the
 * page then asks Google not to index is a contradictory signal.
 */
const NOINDEX_PATHS = new Set(['/privacy-policy/', '/cookie-policy/', '/terms/', '/disclaimer/']);

/** hreflang pairs: each path lists every language version, itself included. */
const APPS_LANGS = { en: absoluteUrl('/human-edge-apps/'), it: absoluteUrl('/it/human-edge-apps/'), 'x-default': absoluteUrl('/human-edge-apps/') };
const ALTERNATES: Record<string, { languages: Record<string, string> }> = {
  '/human-edge-apps/': { languages: APPS_LANGS },
  '/it/human-edge-apps/': { languages: APPS_LANGS },
};

const STATIC_URLS: MetadataRoute.Sitemap = [
  {
    url: absoluteUrl('/judgment/'),
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: LASTMOD['/judgment/'],
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...INDEXABLE_ROUTES.filter((route) => !NOINDEX_PATHS.has(route.path)).map((route) => ({
      url: absoluteUrl(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      ...(LASTMOD[route.path] ? { lastModified: LASTMOD[route.path] } : {}),
      ...(ALTERNATES[route.path] ? { alternates: ALTERNATES[route.path] } : {}),
    })),
    ...STATIC_URLS,
  ];
}
