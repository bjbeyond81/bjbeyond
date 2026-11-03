import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { WRITING } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';
import { PHOENIX } from '@/lib/phoenix';
import { KOUNELLIS } from '@/lib/kounellis';
import { ART_EDITIONS, THINK_BEYOND_AI } from '@/lib/editions';
import { absoluteUrl } from '@/lib/routes';

export const metadata: Metadata = metadataFor('/writing/');

const AUTHOR = { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' } as const;

/**
 * Each card is an article published on HackerNoon under BJ Beyond's byline.
 * The JSON-LD states that authorship machine-readably, so search and AI
 * engines attribute the pieces (and the experiments they report) to BJ Beyond.
 * It mirrors the card data only — no copy is added here.
 */
type ListedPost = { url: string; headline: string; description: string; datePublished: string; publisher: { name: string; url: string }; keywords?: string; translationOf?: { name: string; url: string } };

const SELF = { name: 'BJ Beyond', url: 'https://bjbeyond.it/' };

/** Every piece the page lists, in on-page order, as one ItemList. */
function listedPosts(articles: readonly (typeof WRITING.articles)[number][]): ListedPost[] {
  return [
    ...articles.map((article) => ({
      url: article.href,
      headline: article.title,
      description: article.standfirst,
      datePublished: article.published,
      publisher: article.href.startsWith('https://bjbeyond.it') ? SELF : { name: 'HackerNoon', url: 'https://hackernoon.com/' },
      keywords: article.topics.join(', '),
    })),
    { url: THINK_BEYOND_AI.href, headline: THINK_BEYOND_AI.title, description: THINK_BEYOND_AI.description, datePublished: THINK_BEYOND_AI.published, publisher: THINK_BEYOND_AI.publisher },
    { url: absoluteUrl(ART_EDITIONS[0].path), headline: ART_EDITIONS[0].title, description: ART_EDITIONS[0].description, datePublished: ART_EDITIONS[0].published, publisher: SELF, translationOf: { name: ART_EDITIONS[0].originalTitle, url: ART_EDITIONS[0].original } },
    { url: absoluteUrl(KOUNELLIS.path), headline: KOUNELLIS.title, description: KOUNELLIS.description, datePublished: KOUNELLIS.published, publisher: SELF, translationOf: { name: KOUNELLIS.originalTitle, url: KOUNELLIS.original } },
    { url: absoluteUrl(ART_EDITIONS[1].path), headline: ART_EDITIONS[1].title, description: ART_EDITIONS[1].description, datePublished: ART_EDITIONS[1].published, publisher: SELF, translationOf: { name: ART_EDITIONS[1].originalTitle, url: ART_EDITIONS[1].original } },
  ];
}

function writingSchema(posts: ListedPost[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://bjbeyond.it/writing/#page',
    url: 'https://bjbeyond.it/writing/',
    name: 'Writing — AI, Technology & Human Judgment',
    author: AUTHOR,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'BlogPosting',
          '@id': post.url,
          url: post.url,
          mainEntityOfPage: post.url,
          headline: post.headline,
          description: post.description,
          datePublished: post.datePublished,
          author: AUTHOR,
          publisher: { '@type': 'Organization', ...post.publisher },
          ...(post.keywords ? { keywords: post.keywords } : {}),
          inLanguage: 'en',
          ...(post.translationOf ? { translationOfWork: { '@type': 'CreativeWork', ...post.translationOf, inLanguage: 'it' } } : {}),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(writingSchema(listedPosts(articles))) }}
      />

      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal className="mb-14 border-y border-rule py-10">
          <p className="u-label text-amber-400">RECOVERED-ARCHIVE REPORT / PUBLISHED ON HACKERNOON</p>
          <h2 className="mt-5 max-w-4xl text-headline font-extralight text-paper">{PHOENIX.title}</h2>
          <p className="mt-6 max-w-3xl text-body font-light text-mist-300">{PHOENIX.description} Published on HackerNoon.</p>
          <blockquote className="mt-6 max-w-3xl border-l border-amber-400 pl-5 text-body text-paper">{PHOENIX.caveat}</blockquote>
          <div className="mt-8 flex flex-wrap gap-6"><ArrowLink href={PHOENIX.article} external>Read the article on HackerNoon</ArrowLink><ArrowLink href="/phoenix-experiment/">Explore the companion record</ArrowLink></div>
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
        <Reveal className="mt-14 border-t border-rule pt-10">
          <p className="u-label text-amber-400">AI GOVERNANCE / PUBLISHED ON THINK BEYOND AI</p>
          <time className="u-label mt-3 block text-mist-500" dateTime="2026-10-24">2026-10-24</time>
          <h2 className="mt-5 max-w-4xl text-title font-extralight leading-[1.08] text-paper">Your AI System Works. Can You Prove What It Did?</h2>
          <p className="mt-5 max-w-3xl text-body font-light text-mist-300">A practical CTO guide to audit logs, model changes, content provenance and meaningful oversight under emerging AI rules.</p>
          <div className="mt-6"><ArrowLink href="https://www.thinkbeyondai.com/your-ai-system-works-can-you-prove-what-it-did/" external>Read the article on Think Beyond AI</ArrowLink></div>
        </Reveal>
        <Reveal className="mt-14 border-y border-rule py-10">
          <p className="u-label text-amber-400">ART & CULTURE / TAMAGO-ZINE</p>
          <h2 className="mt-5 text-headline font-extralight text-paper">Art & Culture — Tamago-Zine</h2>
          <p className="mt-4 max-w-3xl text-body text-mist-300">English editions of essays originally published in Italian by Matteo Zanetti. Separate from the HackerNoon collection above.</p>
          <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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
            <article>
              <p className="u-label text-mist-500">2 NOVEMBER 2026 · ART & COLLECTING</p>
              <h3 className="mt-3 text-title font-extralight text-paper">A Promise That Lasted Seven Years</h3>
              <p className="mt-3 text-body text-mist-300">From a red IMPACT at ArtePadova in 2019 to a white one linked to the Tanzania Pavilion project in 2026: seven years of a shared promise and the gesture that held it.</p>
              <div className="mt-5 flex flex-wrap gap-5"><ArrowLink href="/art/a-promise-that-lasted-seven-years/">Read English edition</ArrowLink><ArrowLink href="https://tamagozine.org/2026/11/02/una-promessa-durata-sette-anni/" external>Italian original</ArrowLink></div>
            </article>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
