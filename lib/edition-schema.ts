import type { Metadata } from 'next';
import { SITE } from './content';
import { absoluteUrl, metadataFor } from './routes';
import type { ArtEdition } from './editions';

/** Same shape as the Kounellis page: an English BlogPosting naming its Italian original. */
export function editionMetadata(e: ArtEdition): Metadata {
  const base = metadataFor(e.path);
  return { ...base, openGraph: { ...base.openGraph, type: 'article', publishedTime: e.published, authors: [absoluteUrl('/')] } };
}

export function editionSchema(e: ArtEdition) {
  const url = absoluteUrl(e.path);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        url,
        mainEntityOfPage: url,
        headline: e.title,
        description: e.description,
        datePublished: e.published,
        author: { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' },
        publisher: { '@type': 'Organization', name: SITE.name, url: 'https://bjbeyond.it/' },
        image: absoluteUrl('/opengraph-image.jpg'),
        inLanguage: 'en',
        translationOfWork: { '@type': 'CreativeWork', name: e.originalTitle, url: e.original, inLanguage: 'it' },
        about: e.about.map((name) => ({ '@type': 'Thing', name })),
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE.name, item: absoluteUrl('/') },
          { '@type': 'ListItem', position: 2, name: 'Writing', item: absoluteUrl('/writing/') },
          { '@type': 'ListItem', position: 3, name: e.title, item: url },
        ],
      },
    ],
  };
}
