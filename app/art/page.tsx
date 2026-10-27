import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Authentia } from '@/components/sections/Authentia';
import { InMotion } from '@/components/sections/InMotion';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { ART, CONTACT } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';
import { KounellisArticle } from './KounellisArticle';

export const metadata: Metadata = metadataFor('/art/');

/**
 * ART — the page about art rather than about the practice.
 *
 * Authentia and In Motion are the homepage components, rendered unchanged. That
 * is the whole implementation and it is deliberate: they are already the site's
 * art content, they are already built, and a second copy styled slightly
 * differently would be two owners for one design. They keep their own `h2`s,
 * which sit correctly under this page's `h1` — they are its subjects, not
 * repetitions of it.
 *
 * The articles list renders only when there are articles. See the note on
 * ART.articles for why the per-article template is not being guessed at now.
 */
export default function ArtPage() {
  return (
    <PageShell
      eyebrow={ART.label.join(' ')}
      title={ART.title}
      standfirst={ART.standfirst}
      media={MEDIA.method[2]}
    >
      <section aria-labelledby="art-market-intelligence-heading" className="u-gutter pt-10 sm:pt-12">
        <Reveal className="mx-auto max-w-3xl border border-rule bg-ink-850/60 p-6 sm:p-8">
          <p className="u-label text-amber-400">ART MARKET INTELLIGENCE · VERONA, ITALY</p>
          <h2 id="art-market-intelligence-heading" className="mt-4 text-title font-extralight text-paper">
            Art Market Intelligence &amp; Artist Positioning
          </h2>
          <p className="mt-4 text-body font-light text-mist-200">
            Alongside the essays and archival notes in <em>Art Notes</em>, BJ Beyond leads an art market intelligence practice in Verona, Italy—combining artist valuation &amp; positioning, market and auction analysis, decision-focused data systems, and AI + Human Edge strategy with the Phoenix Soulfire™ human judgment review.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <ArrowLink href="/services/">Explore Art Market Intelligence &amp; Data Systems services</ArrowLink>
            <ArrowLink href="/contact/">Enquire about an evaluation</ArrowLink>
          </div>
        </Reveal>
      </section>

      <KounellisArticle />

      {ART.articles.length > 0 ? (
        <section className="u-gutter pb-[var(--spacing-section)]">
          <RevealGroup>
            <ul className="border-t border-rule">
              {ART.articles.map((article) => (
                <RevealItem as="li" key={article.slug}>
                  <article className="border-b border-rule py-8">
                    <p className="u-label tabular text-amber-400">
                      {article.published}
                    </p>
                    <h2 className="mt-4 text-title font-extralight text-paper">
                      {article.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-lede font-light text-mist-300">
                      {article.standfirst}
                    </p>
                  </article>
                </RevealItem>
              ))}
            </ul>
          </RevealGroup>
        </section>
      ) : null}

      <Authentia />
      <InMotion />

      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <ArrowLink href="/services/">SERVICES</ArrowLink>
            <ArrowLink href="/contact/">{CONTACT.label.join(' ')}</ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
