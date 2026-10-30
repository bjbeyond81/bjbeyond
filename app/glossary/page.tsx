import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { Reveal } from '@/components/primitives/Reveal';
import { GLOSSARY as G, SITE } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { absoluteUrl, metadataFor } from '@/lib/routes';

export const metadata: Metadata = metadataFor(G.path);

const CANONICAL = absoluteUrl(G.path);
const slug = (term: string) => term.toLowerCase().replace(/™/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

/* DefinedTermSet: the same vocabulary the method page already declares,
   extended to the thesis and the authorship terms. Mirrors the visible copy. */
const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'DefinedTermSet',
      '@id': `${CANONICAL}#glossary`,
      name: G.title,
      description: G.description,
      url: CANONICAL,
      inLanguage: 'en',
      publisher: { '@type': 'Organization', name: SITE.name, url: 'https://bjbeyond.it/' },
      hasDefinedTerm: G.groups.flatMap((group) =>
        group.terms.map((t) => ({
          '@type': 'DefinedTerm',
          '@id': `${CANONICAL}#${slug(t.term)}`,
          name: t.term,
          description: t.definition,
          url: `${CANONICAL}#${slug(t.term)}`,
          subjectOf: absoluteUrl(t.source),
          inDefinedTermSet: `${CANONICAL}#glossary`,
        })),
      ),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.name, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Glossary', item: CANONICAL },
      ],
    },
  ],
};

export default function GlossaryPage() {
  return (
    <PageShell eyebrow="GLOSSARY" title={['Glossary:', 'Human Edge, Phoenix Soulfire™', 'and AI authorship']} standfirst={G.standfirst} media={MEDIA.method[3]} schema={SCHEMA}>
      <div className="u-gutter pb-[var(--spacing-section)]">
        {G.groups.map((group) => (
          <section key={group.id} aria-labelledby={`g-${group.id}`} className="mt-16 max-w-4xl border-t border-rule pt-10 first:mt-0">
            <h2 id={`g-${group.id}`} className="u-label text-amber-400">{group.label}</h2>
            <dl className="mt-6">
              {group.terms.map((t) => (
                <div key={t.term} id={slug(t.term)} className="scroll-mt-28 border-b border-rule py-7 last:border-b-0">
                  <dt className="text-title font-extralight text-paper">{t.term}</dt>
                  <dd className="mt-3 text-body font-light text-mist-200">{t.definition}</dd>
                  <dd className="mt-3">
                    <a href={t.source} className="u-label text-mist-400 hover:text-amber-400">Source: {t.source} →</a>
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
        <Reveal className="mt-14 flex flex-wrap gap-x-10 gap-y-6">
          <ArrowLink href="/human-edge/">The Human Edge thesis</ArrowLink>
          <ArrowLink href="/method/">The Phoenix Soulfire™ method</ArrowLink>
          <ArrowLink href="/writing/">All writing</ArrowLink>
        </Reveal>
      </div>
    </PageShell>
  );
}
