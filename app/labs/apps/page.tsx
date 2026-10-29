import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ButtonLink } from '@/components/primitives/ButtonLink';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

/**
 * /labs/apps/ — the BJ Beyond Studio catalogue, written up as a lab log.
 *
 * EVERY PRODUCT FACT HERE COMES FROM THE LIVE SHOPIFY CATALOGUE (bjbeyond.studio,
 * active products, read 2026-10-29): titles, handles, prices, features. No
 * sales, users, ratings or quotes are stated, because none are published.
 * When the store changes, update STORE below; do not invent numbers.
 */
export const metadata: Metadata = metadataFor('/labs/apps/');

const STORE = 'https://bjbeyond.studio';
const product = (handle: string) => `${STORE}/products/${handle}`;

interface Artifact {
  id: string;
  name: string;
  handle: string;
  price: string;
  image: string;
  problem: string;
  does: string;
  demo?: string;
}

/* The four money-and-life apps: the core of the experiment. */
const CORE: readonly Artifact[] = [
  {
    id: 'subscription-tracker',
    name: 'Subscription Tracker Pro',
    handle: 'subscription-killer-pro-web-app',
    price: '€9.90',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/subscription-killer-photo2.jpg?v=1793137189',
    problem: 'Subscriptions you forgot keep renewing on your card.',
    does: 'Puts every subscription in one place, shows the real cost per use, writes the cancellation notice for you, adds renewal alerts to your calendar (.ICS) and projects five years of savings.',
    demo: 'https://bjbeyond81.github.io/apps/subscription-killer-pro/',
  },
  {
    id: 'freelance-rate',
    name: 'Freelance Rate & Quote Pro',
    handle: 'freelance-rate-quote-pro-web-app',
    price: '€14.90',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/freelance-rate-photo2.jpg?v=1793137199',
    problem: 'Freelancers undercharge because the hourly rate they quote ignores taxes and costs.',
    does: 'Works out the rate you actually need from an income goal, costs and billable hours (US/UK/EU tax presets), then turns it into a three-tier quote you can print as PDF.',
    demo: 'https://bjbeyond81.github.io/apps/freelance-rate-pro/',
  },
  {
    id: 'fair-split',
    name: 'Fair Split Pro',
    handle: 'couples-expense-tracker-app',
    price: '€11.90',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/fair-split-photo2.jpg?v=1793137207',
    problem: 'Shared rent, bills and groceries turn into arguments about who owes what.',
    does: 'Splits costs 50/50 or by income, keeps a running balance of who owes whom, and shares the summary via WhatsApp. No account for either partner.',
    demo: 'https://bjbeyond81.github.io/apps/fair-split-pro/',
  },
  {
    id: 'deadline-radar',
    name: 'Deadline Radar Pro',
    handle: 'document-tracking-web-app',
    price: '€9.90',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/deadline-radar-photo2.jpg?v=1793137216',
    problem: 'Insurance, car inspection, ID cards and warranties expire quietly, and a missed date costs a fine.',
    does: 'Puts every deadline on one urgency radar (overdue, due within 60 days, estimated cost for the next 90), with presets for car, home and documents, calendar reminders and an inspection and road-tax date calculator.',
    demo: 'https://bjbeyond81.github.io/apps/deadline-radar-pro/',
  },
];

/* Smaller tools from the same bench. */
const TOOLS: readonly Artifact[] = [
  {
    id: 'mind-map',
    name: 'Mind Map Pro',
    handle: 'mind-mapping-web-app',
    price: '€6.30',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/mind-map-pro-cover.png?v=1793137008',
    problem: 'Ideas stay scattered in linear notes.',
    does: 'A mind-mapping web app, installable as a PWA, with local saving, exports and an English, Italian and German interface.',
  },
  {
    id: 'synced-signal',
    name: 'Synced Signal for Two',
    handle: 'synced-signal-couples-message-app',
    price: '€4.20',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/synced-signal-cover.png?v=1793136960',
    problem: 'Couples want a quiet channel away from social feeds.',
    does: 'A private two-phone note signal for partners, running in any modern browser, with no recurring fee.',
  },
  {
    id: 'wedding-countdown',
    name: 'Wedding Countdown Timer',
    handle: 'wedding-countdown-timer-app',
    price: '€6.30',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/wedding-countdown-01.jpg?v=1793136653',
    problem: 'A wedding date deserves more than a calendar entry.',
    does: 'A personalised countdown with your names and date, as a standalone HTML app that runs locally in the browser.',
  },
  {
    id: 'halloween-generator',
    name: 'Halloween Wallpaper Generator — Liquid Glass Studio',
    handle: 'halloween-wallpaper-generator',
    price: '€30.00',
    image: 'https://cdn.shopify.com/s/files/1/1079/7871/9566/files/halloween-glass-studio-cover.png?v=1793137138',
    problem: 'Ready-made wallpapers all look the same.',
    does: 'A desktop HTML generator (Pumpkin, Ghost, Moon themes; colour, glow, glass and stardust controls) that exports 1080 × 1920 PNGs offline. The artwork is procedural, not AI-generated.',
  },
];

/* Visual side-products: wallpaper packs. Listed, not narrated. */
const VISUALS = [
  ['Free Liquid Glass iPhone Wallpaper', 'free-liquid-glass-iphone-wallpaper', 'Free'],
  ['10 Liquid Glass iPhone Lock Screens', 'liquid-glass-iphone-wallpapers', '€2.10'],
  ['10 Neon iPhone Live Wallpapers (HEIC & MOV)', 'iphone-live-wallpapers-neon-lock', '€2.10'],
  ['Digital Detox iPhone Wallpapers + ambient audio', 'digital-detox-iphone-wallpapers', '€10.50'],
  ['Halloween iPhone Wallpapers — 10 Liquid Glass designs', 'halloween-iphone-wallpapers', '€5.25'],
  ['Halloween Liquid Glass Wallpapers & Digital Screens', 'halloween-printable-posters-liquid-glass', '€14.70'],
  ['Halloween Liquid Glass Bundle — Generator + 10 designs', 'halloween-liquid-glass-iphone-wallpapers-bundle', '€15.75'],
] as const;

const BUNDLE = {
  name: '4 Pro Web Apps Bundle',
  handle: 'all-in-one-life-finance-web-app-bundle-4-pro-apps',
  price: '€24.90',
};

const ALL_ITEMS = [
  ...CORE.map((a) => [a.name, a.handle] as const),
  [BUNDLE.name, BUNDLE.handle] as const,
  ...TOOLS.map((a) => [a.name, a.handle] as const),
  ...VISUALS.map(([name, handle]) => [name, handle] as const),
];

const SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://bjbeyond.it/labs/apps/#page',
  url: 'https://bjbeyond.it/labs/apps/',
  name: 'The Offline Apps Experiment — BJ Beyond Labs',
  description:
    'Lab log of an experiment: can one human with AI assistance ship small, private, offline tools people pay for once? Every artifact from BJ Beyond Studio.',
  inLanguage: 'en',
  isPartOf: { '@id': 'https://bjbeyond.it/#website' },
  author: { '@id': 'https://bjbeyond.it/#organization' },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: ALL_ITEMS.length,
    itemListElement: ALL_ITEMS.map(([name, handle], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      url: product(handle),
    })),
  },
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

function ArtifactEntry({ a, n }: { a: Artifact; n: string }) {
  return (
    <section aria-labelledby={a.id} className="scroll-mt-28">
      <h3 id={a.id} className={H3}>
        <span className="u-label tabular mr-4 text-amber-400">{n}</span>
        {a.name}
      </h3>
      <img
        src={`${a.image}&width=960`}
        alt={`${a.name} — product image from BJ Beyond Studio`}
        width={960}
        height={960}
        loading="lazy"
        decoding="async"
        className="mt-6 h-auto w-full max-w-md border border-rule"
      />
      <p className={P}>
        <strong className={STRONG}>Problem:</strong> {a.problem}
      </p>
      <p className="mt-4 text-body font-light text-mist-300">
        <strong className={STRONG}>What it does:</strong> {a.does}
      </p>
      <p className="mt-4 text-body font-light text-mist-300">
        <strong className={STRONG}>Price:</strong> {a.price}, one-time.{' '}
        <A href={product(a.handle)} external>
          Store page
        </A>
        {a.demo ? (
          <>
            {' '}·{' '}
            <A href={a.demo} external>
              Live demo
            </A>
          </>
        ) : null}
      </p>
    </section>
  );
}

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
                BJ Beyond Studio is a working test of the Human Edge thesis: AI can generate, but a
                human decides what is worth building.
              </strong>{' '}
              The output is a small catalogue of offline web apps and visual packs, sold at{' '}
              <A href={STORE} external>
                bjbeyond.studio
              </A>
              . This page documents it the way I would document any experiment: hypothesis, method,
              artifacts, results, next steps.
            </p>
          </Reveal>

          <section aria-labelledby="hypothesis">
            <h2 id="hypothesis" className={H2}>
              01 — Hypothesis
            </h2>
            <p className={P}>
              A single person, using AI as a building partner, can ship everyday tools that solve one
              concrete problem each, keep the user&rsquo;s data on the user&rsquo;s device, and are
              paid for once instead of rented every month.
            </p>
            <p className={P}>
              Three constraints make the test honest: <strong className={STRONG}>useful</strong>{' '}
              (one problem, solved end to end), <strong className={STRONG}>private</strong> (no
              account, no server, data never leaves the device) and{' '}
              <strong className={STRONG}>fair</strong> (one-time payment, no subscription).
            </p>
          </section>

          <section aria-labelledby="method">
            <h2 id="method" className={H2}>
              02 — Method: machine pass, human pass
            </h2>
            <p className={P}>
              The split follows the same rule as{' '}
              <A href="/method/">Phoenix Soulfire™</A>: the machine produces, the human judges.
            </p>
            <p className={P}>
              <strong className={STRONG}>What AI did:</strong> drafted code, interface variants,
              translations (English, Italian, German) and first versions of product copy. Fast,
              fluent, interchangeable.
            </p>
            <p className={P}>
              <strong className={STRONG}>What human judgment decided:</strong> which problems were
              worth an app, what to cut, that everything runs offline, that nothing needs an
              account, that the price is paid once, and whether each result was good enough to
              ship. A model can propose a feature; it cannot decide that a tool should respect the
              person using it.
            </p>
            <p className={P}>
              Format: progressive web apps (PWA) plus a standalone .ZIP/.HTML package, so each tool
              works in the browser and offline on iPhone, Android, Mac and Windows.
            </p>
          </section>

          <section aria-labelledby="artifacts">
            <h2 id="artifacts" className={H2}>
              03 — The artifacts
            </h2>
            <p className={P}>
              Every active product in the store, grouped by what it is. Prices are as listed on
              bjbeyond.studio.
            </p>

            <h3 className="mt-14 u-label text-amber-400">A · Money and daily life — the core four</h3>
            {CORE.map((a, i) => (
              <ArtifactEntry key={a.id} a={a} n={`A${i + 1}`} />
            ))}

            <section aria-labelledby="bundle" className="scroll-mt-28">
              <h3 id="bundle" className={H3}>
                <span className="u-label tabular mr-4 text-amber-400">A5</span>
                {BUNDLE.name}
              </h3>
              <p className={P}>
                All four apps above in one package for {BUNDLE.price} instead of €46.60, one-time.{' '}
                <A href={product(BUNDLE.handle)} external>
                  Store page
                </A>
              </p>
            </section>

            <h3 className="mt-20 u-label text-amber-400">B · Other tools from the same bench</h3>
            {TOOLS.map((a, i) => (
              <ArtifactEntry key={a.id} a={a} n={`B${i + 1}`} />
            ))}

            <h3 className="mt-20 u-label text-amber-400">C · Visual packs</h3>
            <p className={P}>
              Side-products of the same studio: wallpaper packs for phones and screens.
            </p>
            <ul className="mt-6 space-y-3 text-body font-light text-mist-300">
              {VISUALS.map(([name, handle, price]) => (
                <li key={handle}>
                  <A href={product(handle)} external>
                    {name}
                  </A>{' '}
                  — {price}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="why-offline">
            <h2 id="why-offline" className={H2}>
              Why offline, why once
            </h2>
            <p className={P}>
              Money, deadlines and shared bills are private. A tool that handles them should not
              need a login or send them anywhere. And a tool that helps you cancel forgotten
              subscriptions should not become one. That is the whole design rule.
            </p>
          </section>

          <section aria-labelledby="results">
            <h2 id="results" className={H2}>
              04 — Results so far
            </h2>
            <p className={P}>
              Early. The artifacts exist, they are live, and they work offline as designed. That
              part of the hypothesis is confirmed. Whether people find them useful enough to pay for
              is not yet answered, and I will not publish numbers I do not have.
            </p>
          </section>

          <section aria-labelledby="next">
            <h2 id="next" className={H2}>
              05 — What&rsquo;s next
            </h2>
            <p className={P}>
              Listen to the people who use the apps, fix what they find, and keep the same rules for
              anything new: one problem, private by default, paid once. This log will be updated as
              the experiment produces evidence.
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
            <ButtonLink href={STORE} external>
              Visit bjbeyond.studio
            </ButtonLink>
            <ArrowLink href="/contact/">Send feedback</ArrowLink>
          </div>
        </Reveal>
      </article>
    </PageShell>
  );
}
