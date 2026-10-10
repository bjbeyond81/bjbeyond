import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { WRITING } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

export const metadata: Metadata = metadataFor('/writing/');

const AUTHOR = { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' } as const;

/**
 * Each card is an article published on HackerNoon under BJ Beyond's byline.
 * The JSON-LD states that authorship machine-readably, so search and AI
 * engines attribute the pieces (and the experiments they report) to BJ Beyond.
 * It mirrors the card data only — no copy is added here.
 */
function writingSchema(articles: readonly (typeof WRITING.articles)[number][]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://bjbeyond.it/writing/#page',
    url: 'https://bjbeyond.it/writing/',
    name: 'Writing — AI, Technology & Human Judgment',
    author: AUTHOR,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((article, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'BlogPosting',
          '@id': article.href,
          url: article.href,
          mainEntityOfPage: article.href,
          headline: article.title,
          description: article.standfirst,
          datePublished: article.published,
          author: AUTHOR,
          publisher: { '@type': 'Organization', name: 'HackerNoon', url: 'https://hackernoon.com/' },
          keywords: article.topics.join(', '),
          inLanguage: 'en',
        },
      })),
    },
  };
}

export default function WritingPage() {
  const articles = [...WRITING.articles].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <PageShell
      eyebrow={WRITING.eyebrow}
      title={WRITING.title}
      standfirst={WRITING.standfirst}
      media={MEDIA.method[4]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(writingSchema(articles)) }}
      />

      <section className="u-gutter pb-[var(--spacing-section)]">
        <RevealGroup>
          <div className="border-t border-rule">
            {articles.map((article) => (
              <RevealItem key={article.slug} as="article" className="grid grid-cols-1 gap-6 border-b border-rule py-9 lg:grid-cols-12 lg:gap-6">
                <div className="lg:col-span-2">
                  <p className="u-label text-amber-400">{article.topics[0]}</p>
                  <time className="u-label mt-3 block text-mist-500" dateTime={article.published}>
                    {article.published}
                  </time>
                  <p className="u-label mt-3 text-mist-500">BY BJ BEYOND</p>
                </div>
                <div className="lg:col-span-6">
                  <h2 className="text-title font-extralight leading-[1.08] text-paper">{article.title}</h2>
                  <p className="mt-5 max-w-2xl text-body font-light text-mist-300">{article.standfirst}</p>
                  <blockquote className="mt-6 border-l border-amber-400 pl-5 text-meta italic text-mist-200">
                    {article.pull}
                  </blockquote>
                </div>
                <div className="lg:col-span-3 lg:col-start-10 flex flex-col items-start">
                  {'page' in article ? (
                    <a
                      href={article.page}
                      className="u-label inline-flex min-h-11 items-center text-paper hover:text-amber-400"
                    >
                      {WRITING.pageAction} →
                    </a>
                  ) : null}
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="u-label inline-flex min-h-11 items-center text-amber-400 hover:text-paper"
                  >
                    {WRITING.action} ↗
                  </a>
                </div>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12">
          <ArrowLink href={WRITING.profile} external>{WRITING.cta}</ArrowLink>
        </Reveal>
      </section>
    </PageShell>
  );
}
