import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Authentia } from '@/components/sections/Authentia';
import { InMotion } from '@/components/sections/InMotion';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { ART, CONTACT } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';
import { KOUNELLIS } from '@/lib/kounellis';

export const metadata: Metadata = metadataFor('/art/');

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
          <p className="u-label text-amber-400">ART MARKET INTELLIGENCE · RESEARCH</p>
          <h2 id="art-market-intelligence-heading" className="mt-4 text-title font-extralight text-paper">
            Art Market Intelligence & Artist Positioning
          </h2>
          <p className="mt-4 text-body font-light text-mist-200">
            Alongside the essays and archival notes in <em>Art Notes</em>, BJ Beyond researches and writes about art market intelligence: artist positioning, market and auction context, and the Phoenix Soulfire™ human judgment layer. It is research, not a service — no evaluations, authentication or valuations are offered.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <ArrowLink href="/focus/">Explore the research focus</ArrowLink>
            <ArrowLink href="/method/">The Phoenix Soulfire™ method</ArrowLink>
          </div>
        </Reveal>
      </section>

      <section id={KOUNELLIS.id} aria-labelledby="kounellis-teaser" className="u-gutter scroll-mt-28 pt-12 pb-[var(--spacing-section)] sm:pt-16">
        <Reveal className="mx-auto max-w-3xl border-t border-rule pt-10">
          <p className="u-label text-amber-400">Art & history · English translation · {KOUNELLIS.publishedLabel}</p>
          <h2 id="kounellis-teaser" className="mt-6 text-headline font-extralight text-paper">{KOUNELLIS.title}</h2>
          <p className="mt-6 text-body font-light text-mist-200">{KOUNELLIS.standfirst}</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <ArrowLink href={KOUNELLIS.href}>Read the English translation</ArrowLink>
            <ArrowLink href={KOUNELLIS.original} external>Read the Italian original</ArrowLink>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="kostabi-teaser" className="u-gutter pb-[var(--spacing-section)]">
        <Reveal className="mx-auto max-w-3xl border-t border-rule pt-10">
          <p className="u-label text-amber-400">Art & music · Tamago-Zine · English translation · October 18, 2026</p>
          <h2 id="kostabi-teaser" className="mt-6 text-headline font-extralight text-paper">Use Your Illusion: The Painting, the Title, and the Unverified $75,000</h2>
          <p className="mt-6 text-body font-light text-mist-200">Mark Kostabi, Axl Rose and the Guns N’ Roses album covers: the documented history, the disputed payment and the rights behind the artwork.</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <ArrowLink href="/art/use-your-illusion/">Read the English translation</ArrowLink>
          </div>
        </Reveal>
      </section>

      <section aria-labelledby="promise-teaser" className="u-gutter pb-[var(--spacing-section)]">
        <Reveal className="mx-auto max-w-3xl border-t border-rule pt-10">
          <p className="u-label text-amber-400">Art & personal · Tamago-Zine · English translation · 2 November 2026</p>
          <h2 id="promise-teaser" className="mt-6 text-headline font-extralight text-paper">A Promise That Lasted Seven Years</h2>
          <p className="mt-6 text-body font-light text-mist-200">From a red IMPACT at ArtePadova in 2019 to a white one linked to the Tanzania Pavilion project in 2026: seven years of a shared promise and the gesture that held it.</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <ArrowLink href="/art/a-promise-that-lasted-seven-years/">Read the English translation</ArrowLink>
            <ArrowLink href="https://tamagozine.org/2026/11/02/una-promessa-durata-sette-anni/" external>Read the Italian original</ArrowLink>
          </div>
        </Reveal>
      </section>

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
            <ArrowLink href="/focus/">FOCUS</ArrowLink>
            <ArrowLink href="/contact/">{CONTACT.label.join(' ')}</ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
