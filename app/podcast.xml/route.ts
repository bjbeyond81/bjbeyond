import { SITE } from '@/lib/content';
import { HN_AUDIO_CREDIT, HN_AUDIO_NEWEST_FIRST, formatDuration } from '@/lib/hn-audio';
import { absoluteUrl } from '@/lib/routes';

/* Static export: generated once at build time, like feed.xml. */
export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * `/podcast.xml` — RSS 2.0 with iTunes tags for the HackerNoon audio versions.
 * Enclosures point at HackerNoon’s official MP3 URLs; the files are not rehosted.
 * This is separate from /feed.xml (the writing shelf) and from the Journal
 * feeds under /journal/, which a Cloudflare Worker serves.
 */
export function GET() {
  const items = HN_AUDIO_NEWEST_FIRST;
  const newest = items[0];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
<channel>
<title>${esc(SITE.name)} — Audio versions</title>
<link>${absoluteUrl('/audio/')}</link>
<atom:link href="${absoluteUrl('/podcast.xml')}" rel="self" type="application/rss+xml"/>
<description>${esc(`Official HackerNoon synthetic audio versions of ${SITE.name}’s published articles. ${HN_AUDIO_CREDIT}.`)}</description>
<language>en</language>
<lastBuildDate>${new Date(`${newest.published}T00:00:00Z`).toUTCString()}</lastBuildDate>
<itunes:author>${esc(SITE.name)}</itunes:author>
<itunes:summary>${esc(`Official HackerNoon synthetic audio versions of ${SITE.name}’s published articles. ${HN_AUDIO_CREDIT}. The audio is hosted by HackerNoon; this feed links it.`)}</itunes:summary>
<itunes:explicit>false</itunes:explicit>
<itunes:owner>
<itunes:name>${esc(SITE.name)}</itunes:name>
<itunes:email>Bj_beyond@tutamail.com</itunes:email>
</itunes:owner>
<itunes:image href="${absoluteUrl('/opengraph-image.jpg')}"/>
<itunes:category text="Technology"/>
${items
  .map((item) => {
    const voice = item.voices[item.defaultVoice];
    return `<item>
<title>${esc(item.title)}</title>
<link>${esc(item.articleUrl)}</link>
<guid isPermaLink="true">${esc(item.articleUrl)}</guid>
<pubDate>${new Date(`${item.published}T00:00:00Z`).toUTCString()}</pubDate>
<description>${esc(`${HN_AUDIO_CREDIT}. Synthetic narration of the story published on HackerNoon.`)}</description>
<enclosure url="${esc(voice.url)}" length="${voice.bytes}" type="audio/mpeg"/>
<itunes:duration>${formatDuration(voice.durationSec)}</itunes:duration>
<itunes:explicit>false</itunes:explicit>
<itunes:author>${esc(SITE.name)}</itunes:author>
</item>`;
  })
  .join('\n')}
</channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
