import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { DETECTOR_FOOLED_PAGE as D, PANGRAM_PAGE, SITE } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { absoluteUrl, metadataFor } from '@/lib/routes';

const CANONICAL = absoluteUrl(D.path);

const base = metadataFor(D.path);
export const metadata: Metadata = {
  ...base,
  keywords: [...D.about, 'BJ Beyond', 'Verona'],
  openGraph: {
    ...base.openGraph,
    type: 'article',
    publishedTime: D.published,
    modifiedTime: D.modified,
    authors: [absoluteUrl('/')],
  },
};

const AUTHOR = { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it/' } as const;

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${CANONICAL}#article`,
      url: CANONICAL,
      mainEntityOfPage: CANONICAL,
      headline: D.headline,
      description: D.schemaDescription,
      datePublished: D.published,
      dateModified: D.modified,
      author: AUTHOR,
      publisher: { '@type': 'Organization', name: SITE.name, url: 'https://bjbeyond.it/' },
      image: absoluteUrl('/opengraph-image.jpg'),
      inLanguage: 'en',
      isBasedOn: [
        PANGRAM_PAGE.hackernoon,
        absoluteUrl(PANGRAM_PAGE.path),
      ],
      about: D.about.map((name) => ({ '@type': 'Thing', name })),
      breadcrumb: { '@id': `${CANONICAL}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${CANONICAL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: SITE.name, item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Writing', item: absoluteUrl('/writing/') },
        { '@type': 'ListItem', position: 3, name: D.headline, item: CANONICAL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${CANONICAL}#faq`,
      inLanguage: 'en',
      mainEntity: D.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

const linkClass =
  'text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400';

export default function DetectorsFooledByClaudePage() {
  return (
    <PageShell
      eyebrow="WRITING"
      title={D.titleLines}
      standfirst={D.standfirst}
      media={MEDIA.method[4]}
      schema={SCHEMA}
      breadcrumb={
        <nav aria-label="Breadcrumb" className="u-label text-amber-400">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li>
              <a href="/" className="hover:text-paper">
                BJ Beyond
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a href="/writing/" className="hover:text-paper">
                Writing
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Can AI Detectors Be Fooled by Claude?</li>
          </ol>
        </nav>
      }
    >
      <article className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-400">
            By <a href="/about/" className="hover:text-paper">BJ Beyond</a> ·{' '}
            <time dateTime={D.published}>{D.publishedLabel}</time>
          </p>
        </Reveal>

        <div className="mt-10 max-w-3xl border-t border-rule pt-10">
          <Reveal>
            <p className="text-body font-light text-mist-200">
              <strong className="font-normal text-paper">Short answer:</strong> in BJ Beyond’s
              self-run, fully disclosed single test,{' '}
              <strong className="font-normal text-paper">no</strong> — Pangram was not fooled.
              Claude Opus 5 at max effort was asked to write a complete essay and to try to beat
              Pangram’s AI detector; BJ Beyond added no prose; the unedited essay was scored{' '}
              <strong className="font-normal text-paper">100% AI-generated</strong>.
            </p>
            <p className="mt-6 text-body font-light text-mist-200">
              That result is documented on the on-site experiment record and was first published on
              HackerNoon. It is one public test, not a benchmark, and it is separate from Pangram’s
              own Claude Opus 5 benchmark.
            </p>
          </Reveal>

          <section aria-labelledby="what-happened" className="mt-14">
            <Reveal>
              <h2 id="what-happened" className="text-title font-extralight text-paper">
                What the public test did
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                BJ Beyond asked Claude Opus 5, at max effort — the model’s highest reasoning
                setting — to write a complete essay in English about the experiment itself, and to
                try to beat Pangram. The model, the reasoning setting, the prompts, the refusals and
                the final result were all to be published in advance, whatever the score.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Claude refused twice before accepting. It would not write the piece while pretending
                a human had authored it, and it would not include a reusable checklist for evading
                detectors in secret. It accepted the disclosed version of the task. The essay was
                not rewritten before it was scanned. Pangram returned 100% AI-generated. Claude lost
                the challenge on its first published attempt.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="what-it-showed" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="what-it-showed" className="text-title font-extralight text-paper">
                What that result showed
              </h2>
              <ul className="mt-6 space-y-4 border-l border-amber-400 pl-6 text-body font-light text-mist-200">
                <li>
                  On this occasion, a frontier model that knew it was being tested did not disguise
                  its unedited prose well enough to fool a current classifier.
                </li>
                <li>
                  Transparency did not change the classification: disclosure is not one of Pangram’s
                  inputs; the detector evaluates the text.
                </li>
                <li>
                  It would be dishonest to present the result as evidence that Pangram failed. In
                  this test, it did what it says it does.
                </li>
              </ul>
            </Reveal>
          </section>

          <section aria-labelledby="what-it-did-not" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="what-it-did-not" className="text-title font-extralight text-paper">
                What it did not prove
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                The limits are part of the result. It was one experiment, not a benchmark. It did
                not measure Pangram’s false-positive rate. It did not test multilingual human
                writing, edited drafts, mixed human-machine workflows, paraphrase or repeated
                adversarial attempts. It did not establish that disciplined human prose will be
                falsely flagged. Those questions need a real dataset, controls and multiple trials.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                For the wider argument — what a detector score can and cannot prove about how a text
                was made, and what to ask for instead of a percentage — see the follow-up essay.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="faq" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="faq" className="text-title font-extralight text-paper">
                FAQ
              </h2>
              <div className="mt-4">
                {D.faq.map((item) => (
                  <div key={item.q}>
                    <h3 className="mt-10 text-title font-extralight text-paper">{item.q}</h3>
                    <p className="mt-6 text-body font-light text-mist-200">{item.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <footer className="mt-14 border-t border-rule pt-10">
            <Reveal>
              <div className="flex flex-col items-start gap-4">
                <ArrowLink href="/writing/claude-opus-5-vs-pangram/">
                  Full on-site record: Claude Opus 5 vs Pangram
                </ArrowLink>
                <ArrowLink href="/writing/what-an-ai-detector-can-prove-and-what-it-cant/">
                  What an AI Detector Can Prove, and What It Can’t
                </ArrowLink>
                <a
                  href={PANGRAM_PAGE.hackernoon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Original experiment on HackerNoon ↗
                </a>
              </div>
            </Reveal>
          </footer>
        </div>

        <Reveal delay={0.1} className="mt-12">
          <ArrowLink href="/writing/">{D.back}</ArrowLink>
        </Reveal>
      </article>
    </PageShell>
  );
}
