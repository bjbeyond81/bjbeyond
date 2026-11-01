import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { WRITING } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';
import { PHOENIX } from '@/lib/phoenix';
import { KOUNELLIS } from '@/lib/kounellis';

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
          publisher: article.href.startsWith('https://bjbeyond.it')
            ? { '@type': 'Organization', name: 'BJ Beyond', url: 'https://bjbeyond.it/' }
            : { '@type': 'Organization', name: 'HackerNoon', url: 'https://hackernoon.com/' },
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
        <Reveal className="mb-14 border-y border-rule py-10">
          <p className="u-label text-amber-400">RECOVERED-ARCHIVE REPORT / PUBLISHED ON HACKERNOON</p>
          <h2 className="mt-5 max-w-4xl text-headline font-extralight text-paper">{PHOENIX.title}</h2>
          <p className="mt-6 max-w-3xl text-body font-light text-mist-300">{PHOENIX.description} Published on HackerNoon.</p>
          <blockquote className="mt-6 max-w-3xl border-l border-amber-400 pl-5 text-body text-paper">{PHOENIX.caveat}</blockquote>
          <div className="mt-8 flex flex-wrap gap-6"><ArrowLink href={PHOENIX.article} external>Read the article on HackerNoon</ArrowLink><ArrowLink href="/phoenix-experiment/">Explore the companion record</ArrowLink></div>
        </Reveal>
        <Reveal className="mb-14 border-b border-rule pb-10">
          <p className="u-label text-amber-400">ART & CULTURE / TAMAGO-ZINE</p>
          <h2 className="mt-5 text-headline font-extralight text-paper">Art & Culture — Tamago-Zine</h2>
          <p className="mt-4 max-w-3xl text-body text-mist-300">English editions of essays originally published in Italian by Matteo Zanetti. Separate from the HackerNoon collection below.</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <article>
              <p className="u-label text-mist-500">18 OCTOBER 2026 · ART & MUSIC</p>
              <h3 className="mt-3 text-title font-extralight text-paper">Use Your Illusion: The Painting, the Title, and the Unverified $75,000</h3>
              <p className="mt-3 text-body text-mist-300">How Mark Kostabi’s painting became the face of two Guns N’ Roses albums — and why the often-repeated payment figure remains unproven.</p>
              <div className="mt-5 flex flex-wrap gap-5"><ArrowLink href="/art/use-your-illusion/">Read English edition</ArrowLink><ArrowLink href="https://tamagozine.org/2026/10/18/use-your-illusioin-il-dipinto-il-titolo-e-i-75-000-dollari-che-nessuno-ha-mai-verificato/" external>Italian original</ArrowLink></div>
            </article>
            <article>
              <p className="u-label text-mist-500">ART & HISTORY</p>
              <h3 className="mt-3 text-title font-extralight text-paper">{KOUNELLIS.title}</h3>
              <p className="mt-3 text-body text-mist-300">{KOUNELLIS.standfirst}</p>
              <div className="mt-5 flex flex-wrap gap-5"><ArrowLink href={KOUNELLIS.href}>Read English edition</ArrowLink><ArrowLink href={KOUNELLIS.original} external>Italian original</ArrowLink></div>
            </article>
          </div>
        </Reveal>
        <p className="u-label mb-5 text-amber-400">TECHNOLOGY & AI / HACKERNOON</p>
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
                  {'page' in article && article.href.startsWith('https://bjbeyond.it') ? (
                    <a
                      href={article.page}
                      className="u-label inline-flex min-h-11 items-center text-amber-400 hover:text-paper"
                    >
                      READ THE ESSAY →
                    </a>
                  ) : (
                    <>
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
                    </>
                  )}
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
