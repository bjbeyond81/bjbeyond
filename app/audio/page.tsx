import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { HnAudioPlayer } from '@/components/primitives/HnAudioPlayer';
import { HN_AUDIO_CREDIT, HN_AUDIO_NEWEST_FIRST, formatDuration } from '@/lib/hn-audio';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';
import { postDate } from '@/lib/content';

const base = metadataFor('/audio/');
export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { 'application/rss+xml': '/podcast.xml' },
  },
};

const AUTHOR = { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' } as const;

function audioSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://bjbeyond.it/audio/#page',
    url: 'https://bjbeyond.it/audio/',
    name: 'Audio versions — BJ Beyond on HackerNoon',
    description:
      'Official HackerNoon synthetic audio versions of BJ Beyond’s published articles, with credit to HackerNoon.',
    author: AUTHOR,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: HN_AUDIO_NEWEST_FIRST.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'AudioObject',
          name: item.title,
          url: item.voices[item.defaultVoice].url,
          encodingFormat: 'audio/mpeg',
          duration: `PT${Math.round(item.voices[item.defaultVoice].durationSec)}S`,
          datePublished: item.published,
          creditText: HN_AUDIO_CREDIT,
          author: AUTHOR,
          publisher: { '@type': 'Organization', name: 'HackerNoon', url: 'https://hackernoon.com/' },
          associatedArticle: { '@type': 'Article', headline: item.title, url: item.articleUrl },
        },
      })),
    },
  };
}

export default function AudioPage() {
  return (
    <PageShell
      eyebrow="AUDIO VERSIONS"
      title={['LISTEN TO THE', 'HACKERNOON STORIES']}
      standfirst="Official synthetic audio of BJ Beyond’s articles, generated and hosted by HackerNoon. Nothing here autoplays."
      media={MEDIA.labs.frequency}
      schema={audioSchema()}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal className="mb-10 max-w-3xl">
          <p className="text-body font-light text-mist-300">
            Each track is the audio version attached to the published story. The files stay on HackerNoon’s audio host; this page links them, with credit, so you can listen without leaving the site. A separate podcast feed is at{' '}
            <a href="/podcast.xml" className="text-amber-400 hover:text-paper">
              /podcast.xml
            </a>
            . The writing RSS at{' '}
            <a href="/feed.xml" className="text-amber-400 hover:text-paper">
              /feed.xml
            </a>{' '}
            now includes an enclosure for the same files.
          </p>
        </Reveal>
        <RevealGroup>
          <div className="border-t border-rule">
            {HN_AUDIO_NEWEST_FIRST.map((item) => (
              <RevealItem key={item.slug} as="article" className="grid grid-cols-1 gap-6 border-b border-rule py-9 lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-2">
                  <time className="u-label block text-amber-400" dateTime={item.published}>
                    {postDate(item.published)}
                  </time>
                  <p className="u-label mt-3 text-mist-500">{formatDuration(item.voices.male.durationSec)}</p>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-title font-extralight leading-[1.08] text-paper">{item.title}</h2>
                  <div className="mt-4">
                    <ArrowLink href={item.articleUrl} external>
                      Read on HackerNoon
                    </ArrowLink>
                  </div>
                  <HnAudioPlayer item={item} className="mt-8" />
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </section>
    </PageShell>
  );
}
