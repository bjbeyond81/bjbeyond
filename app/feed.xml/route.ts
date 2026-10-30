import { WRITING, SITE } from '@/lib/content';
import { KOUNELLIS } from '@/lib/kounellis';
import { absoluteUrl } from '@/lib/routes';

/* Static export: generated once at build time, like sitemap.ts. */
export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * `/feed.xml` — RSS 2.0 for the writing shelf. On-site pieces link to their
 * bjbeyond.it page; pieces that live only on HackerNoon link there.
 */
export function GET() {
  const items = [
    ...WRITING.articles.map((a) => ({ title: a.title, link: a.href, description: a.standfirst, date: a.published })),
    { title: KOUNELLIS.title, link: absoluteUrl(KOUNELLIS.path), description: KOUNELLIS.standfirst, date: KOUNELLIS.published },
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${esc(SITE.name)} — Writing</title>
<link>${absoluteUrl('/writing/')}</link>
<atom:link href="${absoluteUrl('/feed.xml')}" rel="self" type="application/rss+xml"/>
<description>${esc(SITE.description)}</description>
<language>en</language>
<lastBuildDate>${new Date(`${items[0].date}T00:00:00Z`).toUTCString()}</lastBuildDate>
${items
  .map(
    (i) => `<item>
<title>${esc(i.title)}</title>
<link>${esc(i.link)}</link>
<guid isPermaLink="true">${esc(i.link)}</guid>
<pubDate>${new Date(`${i.date}T00:00:00Z`).toUTCString()}</pubDate>
<description>${esc(i.description)}</description>
</item>`,
  )
  .join('\n')}
</channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
