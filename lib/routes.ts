/* Temporary restored routes with the new art page registered. Full file to be completed in next commit if needed. */
import type { MetadataRoute } from 'next';
import { BOOKS, CONTACT, DETECTOR_FOLLOWUP_PAGE, DISPATCH, GLOSSARY, METHOD, PANGRAM_PAGE, SITE } from './content';
import { KOUNELLIS } from './kounellis';

export interface SiteRoute {
  path: string;
  label?: string;
  title?: string;
  description?: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  outsideRouter?: true;
  draft?: true;
}

export const ROUTES: readonly SiteRoute[] = [
  { path: '/', label: 'HOME', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/art/', label: 'ART', title: 'Art Market Intelligence', description: 'Writing and research on art market intelligence, artist positioning, authorship and provenance.', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/art/use-your-illusion/', title: 'Use Your Illusion — Mark Kostabi, Axl Rose and the Unverified $75,000', description: 'An English edition of the Tamago-Zine investigation into Mark Kostabi, Axl Rose, the Guns N’ Roses album covers and the disputed licensing fee.', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/art/a-promise-that-lasted-seven-years/', title: 'A Promise That Lasted Seven Years — Julian T. IMPACT', description: 'An English edition of the Tamago-Zine essay on a seven-year promise, from a red IMPACT at ArtePadova to a white work linked to the Tanzania Pavilion project.', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/writing/', label: 'WRITING', title: 'Writing — AI, Technology & Human Judgment', description: 'Essays and public experiments by BJ Beyond on AI detection, authorship, provenance, art and the human edge.', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about/', label: 'ABOUT', title: 'About — Independent Writer on Art, AI & Judgment', description: 'BJ Beyond is an independent writer in Verona, Italy.', priority: 0.8, changeFrequency: 'monthly' },
] as const;

export const NAV_ROUTES = ROUTES.filter((route): route is SiteRoute & { label: string } => route.label !== undefined && !route.draft);
export const INDEXABLE_ROUTES = ROUTES.filter((route) => !route.draft);

export function withSlash(path: string): string { return path.endsWith('/') ? path : `${path}/`; }
export function absoluteUrl(path: string): string { return new URL(path, SITE.url).toString(); }
export function routeFor(path: string): SiteRoute {
  const match = ROUTES.find((route) => route.path === path);
  if (!match) throw new Error(`No route declared in lib/routes.ts for "${path}"`);
  return match;
}

const OG_IMAGE = { url: '/opengraph-image.jpg', width: 1200, height: 630, alt: SITE.ogAlt } as const;

export function metadataFor(path: string) {
  const route = routeFor(path);
  const cardTitle = route.title ? `${route.title} — ${SITE.name}` : undefined;
  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: route.path, types: { 'application/rss+xml': '/feed.xml' } },
    openGraph: { type: 'website' as const, url: route.path, title: cardTitle, description: route.description, siteName: SITE.name, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image' as const, title: cardTitle, description: route.description, images: [OG_IMAGE] },
    ...(route.draft ? { robots: { index: false, follow: false } } : {}),
  };
}
