import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { DETECTOR_FOLLOWUP_PAGE as D, SITE } from '@/lib/content';
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

const AUTHOR = { '@type': 'Person', name: 'BJ Beyond', url: 'https://bjbeyond.it' } as const;

const SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      '@id': `${CANONICAL}#article`,
      url: CANONICAL,
      mainEntityOfPage: CANONICAL,
      headline: D.headline,
      description: D.schemaDescription,
      datePublished: D.published,
      dateModified: D.modified,
      author: AUTHOR,
      publisher: { '@type': 'Organization', name: SITE.name, url: 'https://bjbeyond.it' },
      image: absoluteUrl('/opengraph-image.jpg'),
      inLanguage: 'en',
      isBasedOn: [
        D.hackernoonTest,
        'https://bjbeyond.it/writing/claude-opus-5-vs-pangram/',
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
  ],
};

const linkClass =
  'text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400';

export default function DetectorFollowupPage() {
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
            <li aria-current="page">What an AI Detector Can Prove, and What It Can’t</li>
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
            <aside
              aria-label="Summary"
              className="border-l-2 border-amber-400 bg-ink-850/60 p-6 sm:p-8"
            >
              <p className="u-label text-amber-400">TL;DR</p>
              <p className="mt-3 text-body font-light text-mist-200">
                In a{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  self-run, fully disclosed single test
                </a>
                , Pangram scored an essay written entirely by Claude Opus 5 as 100% AI-generated,
                after I had asked the model to try to beat it. The detector was right. But a
                correct score is still evidence about the <em>text</em>, not about how the text was{' '}
                <em>made</em>. With OpenAI and Anthropic now adding invisible watermarks to comply
                with the EU AI Act, it is worth being precise about what each signal can carry —
                and what an editor, teacher or client should ask for instead of a percentage.
              </p>
            </aside>
          </Reveal>

          <section aria-labelledby="the-test-briefly" className="mt-14">
            <Reveal>
              <h2 id="the-test-briefly" className="text-title font-extralight text-paper">
                The test, briefly
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                In September I published a HackerNoon piece called{' '}
                <a
                  href={D.hackernoonTest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  I Asked Claude Opus 5 to Beat Pangram’s AI Detector. It Failed With a Perfect
                  Score
                </a>
                , documented alongside a later live X test on my{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  on-site experiment record
                </a>
                . Here is the short version of that self-run, fully disclosed single test.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                I asked Claude Opus 5, at max effort (its highest reasoning setting), to write a
                complete essay in English about the experiment itself, and to try to get past
                Pangram, the detector Substack had just partnered with. I contributed no prose. I
                said in advance that I would publish the prompts, the model’s refusals and the
                result, whatever it was.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Claude refused twice before it accepted. It would not write the piece while
                pretending a human had written it, and it would not include a reusable checklist for
                evading detectors in secret. It did accept the disclosed version of the task.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Pangram scored the essay 100% AI-generated. No ambiguity, no near miss.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                In that article I wrote: “It would be dishonest to present this as evidence that
                Pangram failed.” I still think so. The detector did what it says it does.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                This follow-up is about the part of the result that a score cannot reach.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="what-single-result-supports" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="what-single-result-supports" className="text-title font-extralight text-paper">
                What that single result can and can’t support
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                First, the limits, because they matter more than the headline:
              </p>
              <ul className="mt-6 space-y-4 border-l border-rule pl-6 text-body font-light text-mist-200">
                <li>
                  <strong className="font-normal text-paper">
                    It was a self-run, fully disclosed single test.
                  </strong>{' '}
                  One essay, one model, one detector, one run. It is not a benchmark.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    It says nothing about false positives.
                  </strong>{' '}
                  A detector catching real AI text tells you nothing about how often it flags human
                  writing.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    It says nothing about evasion by paraphrase.
                  </strong>{' '}
                  The essay went in unedited. No human rewrite, no second model, no “humanizer”
                  service. Whether a reworked version would also be caught is a separate question,
                  and my test did not ask it.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    It says nothing about watermarks.
                  </strong>{' '}
                  Pangram is a classifier. It reads the style and structure of a text. It does not
                  look for a hidden key from the model maker. My result tells you nothing about the
                  watermarking systems discussed below.
                </li>
              </ul>
              <p className="mt-6 text-body font-light text-mist-200">
                What it does support is narrow: on this occasion, a frontier model that knew it was
                being tested did not disguise its unedited prose well enough to fool a current
                classifier.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="two-kinds-of-evidence" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="two-kinds-of-evidence" className="text-title font-extralight text-paper">
                Two kinds of evidence
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                The more useful lesson came from what was <em>around</em> the score.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                My essay was openly machine-written. The model was named. The prompts were public.
                I had committed to publishing the outcome. Nobody reading it could have been misled
                about who wrote it. Pangram still returned 100%, which was correct, because
                disclosure is not one of its inputs.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                That is the distinction at the core of{' '}
                <a href="/human-edge/" className={linkClass}>
                  Human Edge
                </a>
                :
              </p>
              <ul className="mt-6 space-y-4 border-l border-amber-400 pl-6 text-body font-light text-mist-200">
                <li>
                  <strong className="font-normal text-paper">
                    A detector gives evidence about the artifact.
                  </strong>{' '}
                  How strongly does this text show the patterns associated with machine generation?
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    A declaration of process gives evidence about production.
                  </strong>{' '}
                  Who had the idea, who drafted, what a model changed, what sources were used, who
                  takes responsibility.
                </li>
              </ul>
              <p className="mt-6 text-body font-light text-mist-200">
                Neither can do the other’s job. A score cannot tell you whether a person built the
                argument and used a model to polish it, or whether a model did everything and a
                person signed it. A process statement cannot verify itself. People can lie in a
                disclosure. The two signals answer different questions, and the mistake is treating
                either one as a verdict on the other.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="watermarks-news-hook" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="watermarks-news-hook" className="text-title font-extralight text-paper">
                This month’s news hook: watermarks and the EU AI Act
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                The question has become more practical in October 2026.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                On 5 October 2026, OpenAI{' '}
                <a
                  href="https://openai.com/index/eu-text-provenance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  published its approach to EU text provenance rules
                </a>
                . Over the coming weeks, it will add an invisible watermark — a system it calls
                textGrain — to eligible ChatGPT and Codex text output in the European Union. API
                customers worldwide can opt in. In August, Anthropic{' '}
                <a
                  href="https://www.anthropic.com/news/claude-text-watermark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  explained that Claude’s text watermark
                </a>{' '}
                is a version of Google DeepMind’s SynthID-Text and is being applied globally. Both
                companies tie the move to the EU AI Act. As Alessandro Longo summarized in{' '}
                <a
                  href="https://www.ilsole24ore.com/art/testi-scritti-dall-ai-perche-nuovi-controlli-si-possono-aggirare-AJXDsoaB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Il Sole 24 Ore
                </a>{' '}
                on 6 October, the Act’s transparency provisions have applied since 2 August, with a
                transitional deadline of 2 December 2026 for systems already on the market.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Longo’s piece, which is worth reading in full, makes a point that is easy to lose:{' '}
                <strong className="font-normal text-paper">
                  watermarks and classifier detectors are different tools.
                </strong>
              </p>
              <ul className="mt-6 space-y-4 border-l border-rule pl-6 text-body font-light text-mist-200">
                <li>
                  A <strong className="font-normal text-paper">watermark</strong> is placed at
                  generation time by the model maker. Among plausible next words, the model chooses
                  in a way steered by a secret key, which leaves a statistical regularity. Only a
                  detector with access to that scheme can check for it. It looks for{' '}
                  <em>one vendor’s</em> signal, not “AI” in general.
                </li>
                <li>
                  A <strong className="font-normal text-paper">classifier</strong> like Pangram has
                  no key. It is trained to recognize what machine text tends to look like.
                </li>
              </ul>
              <p className="mt-6 text-body font-light text-mist-200">
                They fail in different ways, so they need to be judged separately.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="primary-sources-limits" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="primary-sources-limits" className="text-title font-extralight text-paper">
                What the primary sources say about limits
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                Credit where it is due: OpenAI’s announcement is unusually frank about weaknesses.
                In its own evaluation of 400-token passages, replacing 10% of words with synonyms
                cut watermark detection from about 92% to 66%. Replacing 25% cut it to 17%. Short
                passages and low-flexibility content such as mathematics are harder to detect.
                OpenAI also writes that a watermark “does not measure human contribution”, and that
                “the absence of a detected watermark does not prove human authorship.” Detector
                access is initially limited to approved researchers and expert organizations.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Paraphrase is a known problem for detectors in general. Sadasivan et al., in{' '}
                <a
                  href="https://arxiv.org/abs/2303.11156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  “Can AI-Generated Text be Reliably Detected?”
                </a>{' '}
                (published in <em>TMLR</em>), show that recursive paraphrasing of roughly 300-token
                passages can significantly reduce detection rates across watermark-based, neural and
                zero-shot detectors, often with only slight loss of quality.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                The opposite failure, flagging humans, is documented too. Liang et al., in{' '}
                <a
                  href="https://www.cell.com/patterns/fulltext/S2666-3899(23)00130-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  “GPT detectors are biased against non-native English writers”
                </a>{' '}
                (<em>Patterns</em>, 2023), found that the detectors they tested misclassified a
                large share of TOEFL essays by non-native English writers as AI-generated.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Newer classifiers claim to have moved past this. Pangram says Pangram 4{' '}
                <a
                  href="https://www.pangram.com/blog/pangram-4-technical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  identifies AI involvement in 98.83% of texts
                </a>{' '}
                processed by 13 commercial “humanizer” services. Its{' '}
                <a
                  href="https://www.pangram.com/research/model-card/pangram-3-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Pangram 3.1 model card
                </a>{' '}
                says the model is calibrated so that a false positive is five times less likely
                than a false negative. In other words, it prefers to miss AI text rather than
                wrongly accuse a human. The same card reports 0% false positives on the Liang et
                al. non-native set, which is 91 samples. These are the company’s own evaluations.
                They may well be accurate, but they are not external third-party audits.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                That gap is what a September 2026 preprint,{' '}
                <a
                  href="https://arxiv.org/abs/2609.09604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  “Watermarks Without Verification”
                </a>{' '}
                by Nemecek, Chaudhary and Ayday, focuses on. Because no public tool can test the
                deployed commercial watermarks, the authors evaluated the open-source SynthID-Text
                implementation on two open-weight models. They argue that neither vendors’
                assurances nor users’ objections can currently be verified. They call for matched
                outputs, configuration disclosure, accredited audits, a shared evaluation protocol
                and interoperable detection.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                So the signals are getting better, and their makers say openly that they are
                limited. Neither of those facts turns a score into a finding about conduct.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="why-result-fits" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="why-result-fits" className="text-title font-extralight text-paper">
                Why my “perfect” result fits this picture
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                My{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  self-run, fully disclosed single test
                </a>{' '}
                is consistent with all of this, and it also shows its limits.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Pangram did well on the easiest case: fully machine-generated, unedited prose from
                a frontier model. That is what the vendor claims, and it is worth knowing. But the
                hard cases are mixed and edited texts, non-native writers, short passages and
                paraphrased output, and my experiment never touched them. A perfect score on an
                easy case does not make a score meaningful on a hard one.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                There is a second point. Even in my easy case, where the score was completely
                right, it still could not answer the question a reader actually cares about:{' '}
                <em>was I deceived?</em> I wasn’t. The disclosure answered that. The percentage
                couldn’t.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="what-to-ask-for" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="what-to-ask-for" className="text-title font-extralight text-paper">
                What to ask for instead of a score
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                If you are an editor, a teacher or a client, here is what I would ask for, and in
                roughly this order:
              </p>
              <ol className="mt-6 space-y-5 border-l border-amber-400 pl-6 text-body font-light text-mist-200">
                <li>
                  <strong className="font-normal text-paper">1. A process statement.</strong> Who
                  came up with the thesis? Who drafted? Which tools were used, and for what:
                  research, drafting, translation, line editing? Who is responsible for the final
                  text?
                </li>
                <li>
                  <strong className="font-normal text-paper">2. Revision history.</strong> Drafts,
                  document version history, tracked changes. Work that developed over time leaves
                  traces that a finished file does not.
                </li>
                <li>
                  <strong className="font-normal text-paper">3. Sources.</strong> What was read and
                  where the claims come from. A writer who did the research can point to it.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    4. Prompts, where AI was used substantively.
                  </strong>{' '}
                  You do not need every keystroke. Publishing the key instructions, the way I did in
                  my test, makes the model’s role concrete.
                </li>
                <li>
                  <strong className="font-normal text-paper">5. A conversation.</strong> Ask the
                  author to explain a conclusion, defend a choice, or say what they cut and why.
                  Being able to reason about your own work is still the strongest everyday evidence
                  that you did it.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    6. Then, if you like, a detector or watermark check, used as a prompt for a
                    question.
                  </strong>{' '}
                  A high score is a reason to ask items 1–5. It is not a reason to skip them. A low
                  score is not proof of human authorship either, as OpenAI itself says.
                </li>
              </ol>
              <p className="mt-6 text-body font-light text-mist-200">
                What I would not do is treat any single percentage, from a classifier or a
                watermark detector, as enough to accuse someone or to certify them.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="narrow-conclusion" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="narrow-conclusion" className="text-title font-extralight text-paper">
                The narrow conclusion
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                My experiment ended with a detector getting it exactly right. I am glad it did. It
                made the result clean.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                But a correct number is still only one kind of evidence. Detectors and watermarks
                can tell you something about a text. Process records tell you how it came to exist.
                As these tools spread across schools, newsrooms and client work in the EU, the
                useful habit is to keep asking which question each signal actually answers.
              </p>
              <blockquote className="mt-10 border-l border-amber-400 pl-6">
                <p className="text-title font-extralight text-paper">
                  “Detectors and watermarks can tell you something about a text. Process records
                  tell you how it came to exist.”
                </p>
                <footer className="u-label mt-4 text-mist-400">— BJ Beyond</footer>
              </blockquote>
            </Reveal>
          </section>

          <footer className="mt-14 border-t border-rule pt-10">
            <Reveal>
              <p className="text-meta italic text-mist-300">
                Process note: This article was drafted with AI assistance from my{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  published self-run, fully disclosed single test record
                </a>{' '}
                and the primary sources linked above. I am responsible for the framing, the claims
                and the final text.
              </p>
              <p className="mt-4 text-meta text-mist-300">
                <a href="/about/" className={linkClass}>
                  BJ Beyond
                </a>{' '}
                is an independent writer in Verona, Italy exploring contemporary art, AI,
                authorship and{' '}
                <a href="/human-edge/" className={linkClass}>
                  human judgment
                </a>
                .
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <ArrowLink href="/writing/claude-opus-5-vs-pangram/">
                  Read the full Claude Opus 5 vs Pangram test
                </ArrowLink>
                <ArrowLink href={D.hackernoonTest} external>
                  Read the original experiment on HackerNoon
                </ArrowLink>
                <ArrowLink href="/human-edge/">Explore the Human Edge thesis</ArrowLink>
                <ArrowLink href="/glossary/">Glossary of terms</ArrowLink>
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
