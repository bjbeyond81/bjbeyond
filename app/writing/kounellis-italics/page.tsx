import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { Reveal } from '@/components/primitives/Reveal';
import { KounellisArticle } from '@/components/sections/KounellisArticle';
import { KOUNELLIS as A } from '@/lib/kounellis';
import { SITE } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { absoluteUrl, metadataFor } from '@/lib/routes';

const CANONICAL = absoluteUrl(A.path);
const base = metadataFor(A.path);

export const metadata: Metadata = {
  ...base,
  keywords: ['Jannis Kounellis', 'Italics', 'Palazzo Grassi', 'Arte Povera', 'Pietro Annigoni', 'Francesco Bonami', 'Italian art', 'BJ Beyond'],
  openGraph: { ...base.openGraph, type: 'article', publishedTime: A.published, authors: [absoluteUrl('/')] },
};

/* A translation of the author's own article: BlogPosting in English that
   names the Italian original as the work it translates. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': `${CANONICAL}#article`,
      url: CANONICAL,
      mainEntityOfPage: CANONICAL,
      headline: A.title,
      description: A.description,
      datePublished: A.published,
      author: { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' },
      publisher: { '@type': 'Organization', name: SITE.name, url: 'https://bjbeyond.it/' },
      image: absoluteUrl('/opengraph-image.jpg'),
      inLanguage: 'en',
      translationOfWork: { '@type': 'CreativeWork', name: A.originalTitle, url: A.original, inLanguage: 'it' },
      about: ['Jannis Kounellis', 'Italics (Palazzo Grassi)', 'Arte Povera', 'Pietro Annigoni'].map((name) => ({ '@type': 'Thing', name })),
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.name, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Writing', item: absoluteUrl('/writing/') },
        { '@type': 'ListItem', position: 3, name: A.title, item: CANONICAL },
      ],
    },
  ],
};

export default function KounellisPage() {
  return (
    <PageShell
      eyebrow="ART & HISTORY · ENGLISH TRANSLATION"
      title={[A.title]}
      standfirst={A.standfirst}
      media={MEDIA.method[2]}
      schema={SCHEMA}
      breadcrumb={
        <nav aria-label="Breadcrumb" className="u-label text-amber-400">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li><a href="/" className="hover:text-paper">BJ Beyond</a></li>
            <li aria-hidden="true">›</li>
            <li><a href="/writing/" className="hover:text-paper">Writing</a></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Kounellis and Italics</li>
          </ol>
        </nav>
      }
    >
      <KounellisArticle standalone />
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <ArrowLink href="/art/">Art, value &amp; provenance</ArrowLink>
            <ArrowLink href="/writing/">All writing</ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
