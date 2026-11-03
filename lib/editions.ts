/**
 * Facts about pieces listed on /writing/ that are not in WRITING.articles:
 * the two Tamago-Zine English editions with their own pages, and the
 * Think Beyond AI article. Titles, descriptions and dates are copied from the
 * pages themselves (and the Italian originals' og:title / published_time), so
 * structured data, the feed and the sitemap describe exactly what is published.
 */
import { routeFor } from './routes';

const illusion = routeFor('/art/use-your-illusion/');
const promise = routeFor('/art/a-promise-that-lasted-seven-years/');

export const ART_EDITIONS = [
  {
    path: illusion.path,
    title: 'Use Your Illusion: The Painting, the Title, and the Unverified $75,000',
    description: illusion.description!,
    published: '2026-10-18',
    original: 'https://tamagozine.org/2026/10/18/use-your-illusioin-il-dipinto-il-titolo-e-i-75-000-dollari-che-nessuno-ha-mai-verificato/',
    originalTitle: 'USE YOUR ILLUSIOIN: IL DIPINTO, IL TITOLO E I 75.000 DOLLARI CHE NESSUNO HA MAI VERIFICATO',
    about: ['Mark Kostabi', 'Axl Rose', 'Guns N’ Roses', 'Use Your Illusion'],
  },
  {
    path: promise.path,
    title: 'A Promise That Lasted Seven Years',
    description: promise.description!,
    published: '2026-11-02',
    original: 'https://tamagozine.org/2026/11/02/una-promessa-durata-sette-anni/',
    originalTitle: 'UNA PROMESSA DURATA SETTE ANNI',
    about: ['Julian T.', 'IMPACT', 'ArtePadova'],
  },
] as const;

export type ArtEdition = (typeof ART_EDITIONS)[number];

export const THINK_BEYOND_AI = {
  href: 'https://www.thinkbeyondai.com/your-ai-system-works-can-you-prove-what-it-did/',
  title: 'Your AI System Works. Can You Prove What It Did?',
  description: 'A practical CTO guide to audit logs, model changes, content provenance and meaningful oversight under emerging AI rules.',
  published: '2026-10-24',
  publisher: { name: 'Think Beyond AI', url: 'https://www.thinkbeyondai.com/' },
} as const;
