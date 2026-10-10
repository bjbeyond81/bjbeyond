import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { PANGRAM_PAGE as P, SITE } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { absoluteUrl, metadataFor } from '@/lib/routes';

const CANONICAL = absoluteUrl(P.path);

/* The shared helper, with the Open Graph type switched to `article`: this page
   is one dated piece, not a section of the site. */
const base = metadataFor(P.path);
export const metadata: Metadata = {
  ...base,
  /* Replaces the layout's site-wide keyword list with this piece's own subjects. */
  keywords: [...P.about, 'BJ Beyond'],
  openGraph: {
    ...base.openGraph,
    type: 'article',
    publishedTime: P.published,
    modifiedTime: P.modified,
    authors: [absoluteUrl('/')],
  },
};

const AUTHOR = { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' } as const;

/**
 * This page's own graph, passed to PageShell in place of the generic site
 * graph: a BlogPosting and its breadcrumb, nothing else. Mirrors the visible
 * copy in lib/content.ts — no claim here that the page does not make.
 */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': `${CANONICAL}#article`,
      url: CANONICAL,
      mainEntityOfPage: CANONICAL,
      headline: P.headline,
      description: P.description,
      datePublished: P.published,
      dateModified: P.modified,
      author: AUTHOR,
      publisher: { '@type': 'Organization', name: SITE.name, url: 'https://bjbeyond.it/' },
      image: absoluteUrl('/opengraph-image.jpg'),
      inLanguage: 'en',
      isBasedOn: P.hackernoon,
      sameAs: [P.hackernoon],
      about: P.about.map((name) => ({ '@type': 'Thing', name })),
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.name, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Writing', item: absoluteUrl('/writing/') },
        { '@type': 'ListItem', position: 3, name: P.headline, item: CANONICAL },
      ],
    },
  ],
};

export default function PangramPage() {
  return (
    <PageShell
      eyebrow="WRITING"
      title={P.titleLines}
      standfirst={P.standfirst}
      media={MEDIA.method[4]}
      schema={SCHEMA}
      breadcrumb={
        <nav aria-label="Breadcrumb" className="u-label text-amber-400">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li>
              <a href="/" className="hover:text-paper">BJ Beyond</a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a href="/writing/" className="hover:text-paper">Writing</a>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Claude Opus 5 vs Pangram</li>
          </ol>
        </nav>
      }
    >
      <article className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-400">
            By BJ Beyond ·{' '}
            <time dateTime={P.published}>{P.publishedLabel}</time>
          </p>
        </Reveal>

        <div className="mt-10 max-w-3xl border-t border-rule pt-10">
          <Reveal>
            {P.summary.map((para) => (
              <p key={para.slice(0, 32)} className="mt-6 first:mt-0 text-body font-light text-mist-200">
                {para}
              </p>
            ))}
            <blockquote className="mt-10 border-l border-amber-400 pl-6">
              <p className="text-title font-extralight text-paper">“{P.verdict}”</p>
              <footer className="u-label mt-4 text-mist-400">— BJ Beyond</footer>
            </blockquote>
            <p className="mt-10 text-body font-light text-mist-300">{P.limits}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-col items-start gap-4">
            <a
              href={P.hackernoon}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center border border-amber-400 px-6 text-amber-400 transition-colors hover:bg-amber-400 hover:text-ink-950"
            >
              <span className="u-label">{P.hackernoonCta} ↗</span>
            </a>
            <a
              href={P.coverage.href}
              target="_blank"
              rel="noopener noreferrer"
              className="u-label inline-flex min-h-11 items-center text-mist-400 hover:text-paper"
            >
              {P.coverage.label} ↗
            </a>
          </Reveal>
        </div>

        <section aria-labelledby="live-tests" className="mt-20 border-t border-rule pt-14 lg:mt-28">
          <Reveal>
            <h2 id="live-tests" className="text-headline font-extralight text-paper">
              {P.live.label}
            </h2>
            <p className="mt-6 max-w-3xl text-body font-light text-mist-300">{P.live.intro}</p>
          </Reveal>
          <RevealGroup delay={0.1} className="mt-10">
            <div className="border-t border-rule">
              {P.live.posts.map((post) => (
                <RevealItem
                  key={post.href}
                  as="article"
                  className="grid grid-cols-1 gap-5 border-b border-rule py-8 lg:grid-cols-12 lg:gap-6"
                >
                  <div className="lg:col-span-3">
                    <p className="u-label text-amber-400">{post.author}</p>
                    <time className="u-label mt-3 block text-mist-500" dateTime={post.date}>
                      {post.dateLabel}
                    </time>
                  </div>
                  <div className="lg:col-span-8 lg:col-start-5">
                    <blockquote cite={post.href} className="border-l border-amber-400 pl-5">
                      <p className="whitespace-pre-line text-body font-light text-mist-200">{post.text}</p>
                    </blockquote>
                    <p className="mt-5 flex flex-wrap gap-x-6">
                      <a
                        href={post.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="u-label inline-flex min-h-11 items-center text-amber-400 hover:text-paper"
                      >
                        View on X ↗
                      </a>
                    </p>
                  </div>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </section>

        <Reveal delay={0.1} className="mt-12">
          <ArrowLink href="/writing/">{P.back}</ArrowLink>
        </Reveal>
      </article>
    </PageShell>
  );
}
