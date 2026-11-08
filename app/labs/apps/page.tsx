import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

/**
 * /labs/apps/ — the offline-apps experiment, written up as a lab log.
 * No product listing, prices or store links on purpose (owner decision, 2026-11-08).
 * No sales, users, ratings or quotes are stated, because none are published.
 */
export const metadata: Metadata = metadataFor('/labs/apps/');

/* The agent network that operates the store. Roles only: no account details. */
const BOTS = [
  ['Grok Bot (primary)', 'routes tasks, coordinates the other bots and runs a "Regia" check three times a day.'],
  ['Traffic Doctor', 'diagnoses why the store gets no traffic and fixes what it finds.'],
  ['SEO & Organic Funnel', 'blog SEO, Google indexing and lead magnets.'],
  ['AI Search Visibility', 'checks whether AI assistants and Google recommend the store.'],
  ['CRO & Bundle Closer', 'conversion, bundles, discounts and product pages.'],
  ['TikTok & Viral Traffic', 'short-form content for TikTok, Threads and X.'],
  ['Pino · Social & Pinterest Growth', 'Pinterest and social presence.'],
  ['Shopify bot', 'day-to-day store operations.'],
] as const;

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://bjbeyond.it/labs/apps/#page',
  url: 'https://bjbeyond.it/labs/apps/',
  name: 'The Offline Apps Experiment — BJ Beyond Labs',
  description:
    'Lab log of an experiment: can one human with AI assistance ship small, private, offline tools people pay for once?',
  inLanguage: 'en',
  isPartOf: { '@id': 'https://bjbeyond.it/#website' },
  author: { '@id': 'https://bjbeyond.it/#organization' },
};

function A({ href, children, external }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400"
    >
      {children}
    </a>
  );
}

const H2 = 'mt-20 text-headline font-extralight leading-[1.05] text-paper';
const H3 = 'mt-14 text-title font-extralight text-paper';
const P = 'mt-6 text-body font-light text-mist-300';
const STRONG = 'font-normal text-paper';

export default function AppsExperimentPage() {
  return (
    <PageShell
      eyebrow="Labs · Experiment log"
      title={['The Offline Apps', 'Experiment']}
      standfirst="Can one human, building with AI, ship small tools that are useful, private and paid for once? This is the log."
      media={MEDIA.backdrop}
      schema={SCHEMA}
      breadcrumb={
        <nav aria-label="Breadcrumb" className="u-label text-amber-400">
          <ol className="flex flex-wrap items-center gap-x-2">
            <li>
              <a href="https://bjbeyond.it/" className="hover:text-paper">
                BJ Beyond
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <a href="/labs/" className="hover:text-paper">
                Labs
              </a>
            </li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Offline Apps Experiment</li>
          </ol>
        </nav>
      }
    >
      <article className="u-gutter pb-[var(--spacing-section)]">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-lede font-light text-mist-200">
              <strong className={STRONG}>
                This is the story of an experiment I am running on myself: can one person, building
                with AI, make small tools that are actually useful, keep your data private, and ask
                to be paid only once?
              </strong>{' '}
              What follows is how it started, how it is built, what came out of it, and what I
              still do not know. A lab log, told as it happened.
            </p>
          </Reveal>

          <section aria-labelledby="hypothesis">
            <h2 id="hypothesis" className={H2}>
              01 — Where it started
            </h2>
            <p className={P}>
              It started with an irritation. Every useful little app I tried wanted an account, a monthly fee, and my data on someone else&rsquo;s server. To track subscriptions, I was asked to take out another subscription.
            </p>
            <p className={P}>
              I write about the Human Edge: the idea that AI can generate almost anything, but a human still has to decide what is worth making. At some point writing about it was not enough. I wanted to test it with my own hands.
            </p>
            <p className={P}>
              So I wrote down a hypothesis: <strong className={STRONG}>one person, with AI as a building partner, can ship everyday tools that solve one real problem each, run offline, keep data on the device, and are paid for once.</strong> Three rules, no exceptions: useful, private, fair.
            </p>
          </section>

          <section aria-labelledby="method">
            <h2 id="method" className={H2}>
              02 — How I build: the machine drafts, I decide
            </h2>
            <p className={P}>
              I use the same split as <A href="/method/">Phoenix Soulfire™</A>. The machine pass comes first, the human pass second.
            </p>
            <p className={P}>
              AI drafts: code, interface variants, translations into English, Italian and German, first versions of product copy. It is fast, fluent and, left alone, interchangeable.
            </p>
            <p className={P}>
              I decide: which problems deserve an app, what to cut, that everything works offline, that nobody needs an account, that the price is paid once, and whether a result is good enough to carry my name. A model can propose a feature. It cannot decide that a tool should respect the person using it.
            </p>
            <p className={P}>
              Each app ships as a progressive web app plus a standalone .ZIP/.HTML package, so it opens in a browser and keeps working offline on iPhone, Android, Mac and Windows.
            </p>
            <h3 className={H3}>The sales-bot network</h3>
            <p className={P}>
              Then I hit the second half of the problem: building is not selling. Nobody finds a
              store by accident. So I extended the experiment to distribution and gave the store to
              a small network of AI agents, each with one job, coordinated by a primary bot. The
              network is part of what I am testing.
            </p>
            <ol className="mt-6 space-y-4 border-l border-rule pl-6 text-body font-light text-mist-300">
              {BOTS.map(([name, role]) => (
                <li key={name}>
                  <strong className={STRONG}>{name}</strong> — {role}
                </li>
              ))}
            </ol>
            <p className={P}>
              <strong className={STRONG}>Human rules in the loop.</strong> Free methods only. No
              spam. Reversible changes only. Nothing is published automatically without my approval.
              Legal and fiscal pages are never touched by a bot.
            </p>
            <p className={P}>
              The bots propose and execute; I keep the final word. Whether this network can bring
              real people to a small store without spam is exactly the question I do not know the
              answer to yet.
            </p>
          </section>

          <section aria-labelledby="why-offline">
            <h2 id="why-offline" className={H2}>
              Why offline, why once
            </h2>
            <p className={P}>
              Money, deadlines and shared bills are private. A tool that handles them should not need a login or send them anywhere. And a tool that helps you cancel forgotten subscriptions should not become one. That became the design rule for everything I build.
            </p>
          </section>

          <section aria-labelledby="results">
            <h2 id="results" className={H2}>
              04 — Results so far
            </h2>
            <p className={P}>
              Honestly: early. The tools exist and they work offline as designed. That part of the hypothesis holds.
            </p>
            <p className={P}>
              The harder part, whether people find them useful enough to pay for, is still open. I will not publish numbers I do not have, and I will not dress up a beginning as a result.
            </p>
          </section>

          <section aria-labelledby="next">
            <h2 id="next" className={H2}>
              05 — What happens next
            </h2>
            <p className={P}>
              I will listen to the people who use the apps, fix what they find, and keep the same three rules for anything new. The bot network keeps working under the same human limits.
            </p>
            <p className={P}>
              This log will be updated as the experiment produces evidence, good or bad. If you try one of the tools, <A href="/contact/">tell me what broke</A>.
            </p>
          </section>

          <p className="mt-16 text-body font-light text-mist-300">
            <strong className={STRONG}>Related pages:</strong> <A href="/labs/">Labs</A> ·{' '}
            <A href="/method/">Method</A> · <A href="/human-edge/">Human Edge</A> ·{' '}
            <A href="/contact/">Contact</A>
          </p>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
            <ArrowLink href="/contact/">Send feedback</ArrowLink>
          </div>
        </Reveal>
      </article>
    </PageShell>
  );
}
