import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ButtonLink } from '@/components/primitives/ButtonLink';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { METHOD, SITE } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { METHOD_SCHEMA } from '@/lib/method-schema';

/**
 * /method/ — the official page of Phoenix Soulfire™.
 *
 * THE COPY IS THE OWNER'S, WORD FOR WORD. It is long on purpose: it is written
 * to be read and quoted by search engines and AI assistants. Do not summarise,
 * shorten or "improve" it. Everything is in the server-rendered HTML; the
 * Reveal wrappers only animate what is already in the markup.
 *
 * Metadata is spelled out here rather than built by `metadataFor`: the title
 * must render exactly as written, without the layout's `%s — Bj Beyond`
 * template, and the social cards carry their own title.
 */
const PAGE_TITLE = 'Phoenix Soulfire™: Five-Test Judgment Layer | Bj Beyond';
const PAGE_DESCRIPTION =
  'Phoenix Soulfire™ is the five-test human judgment layer by Bj Beyond (Verona): Soul, Edge, Clarity, Impact, Legacy. Not an art scorecard.';
const CARD_TITLE = 'Phoenix Soulfire™: the judgment layer by Bj Beyond';
const OG_IMAGE = {
  url: '/opengraph-image.jpg',
  width: 1200,
  height: 630,
  alt: SITE.ogAlt,
} as const;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/method/' },
  openGraph: {
    type: 'website',
    url: '/method/',
    locale: 'en_US',
    title: CARD_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: SITE.name,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: CARD_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const TESTS = [
  {
    id: 'soul',
    heading: '01 — Soul: the residual human core',
    checks:
      'Whether a human core is left in the piece once the fluent surface is set aside: a purpose and a point of view that belong to someone.',
    fail: 'The text could be anyone’s.',
    sub: [
      ['Purpose', 'why it exists.'],
      ['Alignment', 'whether it matches what its author actually stands for.'],
      ['Vision', 'where it points.'],
    ],
  },
  {
    id: 'edge',
    heading: '02 — Edge: what a model cannot copy',
    checks:
      'Whether the piece holds something a model could not reproduce from the average of what already exists.',
    fail: 'Fluent, interchangeable.',
    sub: [
      ['Market', 'where it stands among comparable work.'],
      ['Advantage', 'what it has that the alternatives do not.'],
      ['Disruption', 'what it changes.'],
    ],
  },
  {
    id: 'clarity',
    heading: '03 — Clarity: complexity cut to a claim',
    checks:
      'Whether the piece can be reduced to one sentence that someone could agree or disagree with.',
    fail: 'Atmosphere instead of a sentence.',
    sub: [
      ['Data', 'what can be verified.'],
      ['Insight', 'what the data means.'],
      ['Truth', 'whether the claim holds.'],
    ],
  },
  {
    id: 'impact',
    heading: '04 — Impact: a result you can check',
    checks:
      'Whether the piece leaves a trace: an outcome that someone other than the author can verify.',
    fail: 'Intention with no trace.',
    sub: [
      ['Strategy', 'the plan.'],
      ['Execution', 'what was actually done.'],
      ['Results', 'what changed because of it.'],
    ],
  },
  {
    id: 'legacy',
    heading: '05 — Legacy: what remains after the feed moves',
    checks: 'Whether the piece is built to last beyond the moment it is published.',
    fail: 'Built to be posted, not to last.',
    sub: [
      ['Sustainability', 'whether it can be kept up.'],
      ['Influence', 'what it moves in others.'],
      ['Enduring Value', 'what is still worth something later.'],
    ],
  },
] as const;

/* Plain anchors with the site's link treatment, for links inside prose. */
function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400"
    >
      {children}
    </a>
  );
}

const H2 = 'mt-20 text-headline font-extralight leading-[1.05] text-paper';
const P = 'mt-6 text-body font-light text-mist-300';
const STRONG = 'font-normal text-paper';

export default function MethodPage() {
  return (
    <PageShell
      eyebrow="Phoenix Soulfire™ Method"
      title={['Phoenix Soulfire™: the judgment layer by Bj Beyond']}
      standfirst="Judgment layer. Not an art scorecard. Five tests before I trust a text, a work, or a plan."
      media={MEDIA.method[0]}
      schema={METHOD_SCHEMA}
      breadcrumb={
        <nav aria-label="Breadcrumb" className="u-label text-amber-400">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li>
              <a href="https://bjbeyond.it/" className="hover:text-paper">
                Bj Beyond
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Phoenix Soulfire™ Method</li>
          </ol>
        </nav>
      }
    >
      <article className="u-gutter pb-[var(--spacing-section)]">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-lede font-light text-mist-200">
              <strong className={STRONG}>
                Phoenix Soulfire™ is the five-test human judgment layer created by Bj Beyond
                (Verona, Italy) to check whether a text, a work or a plan holds up beyond what
                AI can generate.
              </strong>{' '}
              It is not a score, and it is not an AI detector. It is a human pass: five tests,
              each with a clear fail signal. Soul, Edge, Clarity, Impact, Legacy.
            </p>
            <p className={P}>
              This is the official page of the method. Phoenix Soulfire™ is not affiliated with
              phoenixsoulfire.com or with other projects with similar names.
            </p>
          </Reveal>

          <section aria-labelledby="at-a-glance">
            <h2 id="at-a-glance" className={H2}>
              At a glance
            </h2>
            <table className="mt-8 w-full border-t border-rule text-left">
              <tbody>
                {(
                  [
                    ['Created by', 'Bj Beyond, independent practice, Verona, Italy'],
                    ['The five tests', 'Soul · Edge · Clarity · Impact · Legacy'],
                    ['Applies to', 'A text, a work, or a plan'],
                    [
                      'What it is not',
                      'An art scorecard, the Phoenix Simulator, or phoenixsoulfire.com',
                    ],
                  ] as const
                ).map(([label, value]) => (
                  <tr key={label} className="border-b border-rule align-top">
                    <th scope="row" className="w-2/5 py-4 pr-6 text-body font-normal text-paper">
                      {label}
                    </th>
                    <td className="py-4 text-body font-light text-mist-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={P}>{METHOD.statement}</p>
          </section>

          <section aria-labelledby="why">
            <h2 id="why" className={H2}>
              Why a judgment layer
            </h2>
            <p className={P}>
              Generating content has become cheap. Judgment has not. Fluent is not the same as
              owned, true or lasting. For Bj Beyond, &ldquo;Beyond&rdquo; is what comes after
              artificial intelligence: judgment, lived experience, the part a model cannot fake.
              Phoenix Soulfire™ turns that idea into five tests.
            </p>
          </section>

          {TESTS.map((test) => (
            <section key={test.id} aria-labelledby={test.id} className="scroll-mt-28">
              <h2 id={test.id} className={`${H2} scroll-mt-28`}>
                {test.heading}
              </h2>
              <p className={P}>
                <strong className={STRONG}>What it checks:</strong> {test.checks}
              </p>
              <p className="mt-4 text-body font-light text-amber-400">
                <strong className="font-normal">Fail signal:</strong> {test.fail}
              </p>
              <p className="mt-4 text-body font-light text-mist-300">
                <strong className={STRONG}>Sub-concepts:</strong>{' '}
                {test.sub.map(([term, gloss], i) => (
                  <span key={term}>
                    {i > 0 ? ' ' : null}
                    <em>{term}</em>: {gloss}
                  </span>
                ))}
              </p>
            </section>
          ))}

          <section aria-labelledby="machine-human">
            <h2 id="machine-human" className={H2}>
              Machine pass first, human pass second
            </h2>
            <p className={P}>
              The public tool tests the surface. These five tests are the human pass after that.
            </p>
            <p className={P}>
              <strong className={STRONG}>Step 1, the machine pass.</strong> The free PhoenixSoulfire
              Judgment Layer at{' '}
              <A href="https://phoenixsoulfire.bjbeyond.it/">phoenixsoulfire.bjbeyond.it</A> shows
              how machine-like a pasted text feels: AI likelihood, human likelihood, confidence. 42
              detection rules, no API key.
            </p>
            <p className={P}>
              <strong className={STRONG}>Step 2, the human pass.</strong> The five tests ask what a
              tool cannot answer: whose it is, what it adds, what it claims, what it proves, what
              will remain.
            </p>
            <p className={P}>
              The tool reads signals. It does not decide. A text can pass the tool and still fail
              Soul. Never outsource your judgment.
            </p>
          </section>

          <section aria-labelledby="who">
            <h2 id="who" className={H2}>
              Who it is for
            </h2>
            <p className={P}>
              Bj Beyond works with artists, collectors and companies in the new creative economy.
              The tests apply to what each of them handles.
            </p>
            <ul className="mt-6 space-y-4 text-body font-light text-mist-300">
              <li>
                <strong className={STRONG}>Artists:</strong> test a statement, a series or a project
                before it goes out.
              </li>
              <li>
                <strong className={STRONG}>Collectors:</strong> put a human pass on a work, and on
                the story around it, before trusting it.
              </li>
              <li>
                <strong className={STRONG}>Creative companies:</strong> test a plan or a piece of
                communication before it carries the brand.
              </li>
            </ul>
          </section>

          <section aria-labelledby="work-with">
            <h2 id="work-with" className={H2}>
              Work with Bj Beyond
            </h2>
            <p className={P}>
              To run the five tests on your text, work or plan, write via{' '}
              <A href="https://bjbeyond.it/contact/">bjbeyond.it/contact/</A>. Services are listed
              at <A href="https://bjbeyond.it/services/">bjbeyond.it/services/</A>. Engagements are
              one to one; terms on request.
            </p>
          </section>

          <section aria-labelledby="faq">
            <h2 id="faq" className={H2}>
              FAQ
            </h2>
            <div className="mt-4">
              <h3 className="mt-10 text-title font-extralight text-paper">
                What is Phoenix Soulfire™?
              </h3>
              <p className={P}>
                Phoenix Soulfire™ is the five-test human judgment layer created by Bj Beyond
                (Verona, Italy) to check whether a text, a work or a plan holds up beyond what AI
                can generate. The five tests are Soul, Edge, Clarity, Impact and Legacy.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                Who created Phoenix Soulfire™?
              </h3>
              <p className={P}>
                Bj Beyond, an independent practice in Verona, Italy, working at the intersection of
                data, AI and human intuition. The official page of the method is{' '}
                <A href="https://bjbeyond.it/method/">bjbeyond.it/method/</A>.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                Is Phoenix Soulfire™ an art scorecard?
              </h3>
              <p className={P}>
                No. Phoenix Soulfire™ is a judgment layer, not an art scorecard and not a numeric
                rating. Each test ends in a human judgment with a clear fail signal. Bj Beyond&rsquo;s
                private artist evaluations are a separate service.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                What is the PhoenixSoulfire Judgment Layer?
              </h3>
              <p className={P}>
                A free public tool by Bj Beyond at{' '}
                <A href="https://phoenixsoulfire.bjbeyond.it/">phoenixsoulfire.bjbeyond.it</A> that
                shows how machine-like a pasted text feels. It is the machine pass that tests the
                surface; the five Phoenix Soulfire™ tests are the human pass after it.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                Can Phoenix Soulfire™ be applied to artworks?
              </h3>
              <p className={P}>
                Yes. The tests apply to a text, a work or a plan, and an artwork is a work. Soul
                asks whether it could be anyone&rsquo;s; Legacy asks what remains after the feed
                moves. It is a human judgment, not a valuation or an authentication.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                Is Phoenix Soulfire™ related to phoenixsoulfire.com?
              </h3>
              <p className={P}>
                No. phoenixsoulfire.com is an unrelated website with a similar name. Phoenix
                Soulfire™ belongs to Bj Beyond, and its official page is{' '}
                <A href="https://bjbeyond.it/method/">bjbeyond.it/method/</A>.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                Is Phoenix Soulfire™ the Phoenix Simulator?
              </h3>
              <p className={P}>
                No. The Phoenix Simulator at{' '}
                <A href="https://bjbeyond.it/phoenix/">bjbeyond.it/phoenix/</A> is a separate Bj
                Beyond Labs tool that simulates X&rsquo;s For You algorithm. It is not the Phoenix
                Soulfire™ method.
              </p>

              <h3 className="mt-10 text-title font-extralight text-paper">
                How can I work with Bj Beyond on Phoenix Soulfire™?
              </h3>
              <p className={P}>
                Use the contact page at{' '}
                <A href="https://bjbeyond.it/contact/">bjbeyond.it/contact/</A> and see the services
                at <A href="https://bjbeyond.it/services/">bjbeyond.it/services/</A>. Each
                engagement is one to one, and terms are on request.
              </p>
            </div>
          </section>

          <p className="mt-16 text-body font-light text-mist-300">
            <strong className={STRONG}>Related pages:</strong>{' '}
            <A href="https://bjbeyond.it/about/">About</A> ·{' '}
            <A href="https://bjbeyond.it/services/">Services</A> ·{' '}
            <A href="https://bjbeyond.it/labs/">Labs</A> ·{' '}
            <A href="https://bjbeyond.it/contact/">Contact</A>
          </p>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <ButtonLink href="https://phoenixsoulfire.bjbeyond.it/" external>
              Try the free Judgment Layer
            </ButtonLink>
            <ArrowLink href="/contact/">Get in touch</ArrowLink>
          </div>
        </Reveal>
      </article>
    </PageShell>
  );
}
