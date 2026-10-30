import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ButtonLink } from '@/components/primitives/ButtonLink';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { SITE } from '@/lib/content';
import { absoluteUrl, metadataFor } from '@/lib/routes';

/**
 * /human-edge-apps/ — Quiete, Twin and Rimbalzo, with links to the store.
 * Rimbalzo facts checked against the live app and its PDF guides (2026-10-30).
 * Never put an activation code on this page.
 */
const base = metadataFor('/human-edge-apps/');
const OG = { url: '/media/apps/og-apps.jpg', width: 1200, height: 630, alt: 'Quiete and Twin by BJ Beyond' };
export const metadata: Metadata = {
  ...base,
  alternates: {
    canonical: '/human-edge-apps/',
    languages: { en: '/human-edge-apps/', it: '/it/human-edge-apps/', 'x-default': '/human-edge-apps/' },
  },
  openGraph: { ...base.openGraph, images: [OG] },
  twitter: { ...base.twitter, images: [OG] },
};

interface App {
  id: string;
  name: string;
  icon: string;
  line: string;
  price: string;
  priceValue: string;
  buy: string;
  checkout: string;
  buyIt: string;
  open: string;
  intro: string;
  features: readonly string[];
  privacy: readonly string[];
  shots: readonly [string, string][];
}

const APPS: readonly App[] = [
  {
    id: 'quiete',
    name: 'Quiete',
    icon: '/media/apps/icon-quiete.png',
    line: 'A quiet place to breathe, ground yourself and check in with how you feel.',
    price: '€15',
    priceValue: '15.00',
    buy: 'https://bjbeyond.studio/products/quiete-app-supporto-emotivo',
    checkout: 'https://bjbeyond.studio/cart/61443804856654:1',
    buyIt: 'https://bjbeyond.studio/it/products/quiete-app-supporto-emotivo',
    open: 'https://bjbeyond81.github.io/apps/quiete/',
    intro:
      'Quiete is an emotional-support and breathing web app you can install on your phone. The full version comes with an activation code and a PDF guide.',
    features: [
      'Guided breathing and relaxation techniques',
      'Grounding exercises for anxious moments',
      'A gentle mood check',
      'On-device AI for supportive reflection',
      'Sound sessions through Frequency Studio',
      'Installable web app (PWA)',
    ],
    privacy: [
      'The AI runs on your device. What you write is not sent to a server.',
      'No account needed.',
    ],
    shots: [
      ['/media/apps/quiete-en-feel.jpg', 'Quiete: naming how you feel'],
      ['/media/apps/quiete-en-ground.jpg', 'Quiete: a grounding exercise'],
      ['/media/apps/quiete-en-mood.jpg', 'Quiete: mood check'],
    ],
  },
  {
    id: 'twin',
    name: 'Twin',
    icon: '/media/apps/icon-twin.png',
    line: 'A private, encrypted diary with AI that stays on your device.',
    price: '€29',
    priceValue: '29.00',
    buy: 'https://bjbeyond.studio/products/twin-private-diary-app',
    checkout: 'https://bjbeyond.studio/cart/61444088627534:1',
    buyIt: 'https://bjbeyond.studio/it/products/twin-private-diary-app',
    open: 'https://bjbeyond81.github.io/apps/twin/',
    intro:
      'Twin is a diary for the days worth keeping. Write or record your day, track mood and sleep, then ask the AI about your own memories. You activate it once with the code delivered with your purchase. There is no account.',
    features: [
      'Write entries or record voice notes',
      'Mood, sleep and daily expenses alongside each memory',
      'Ask the local AI about what you have written',
      'Voice transcription on your device',
      'Encrypted backups you can export and restore',
      'English and Italian interface, light and dark mode',
    ],
    privacy: [
      'Your journal is encrypted with a key kept in your browser.',
      'The AI and transcription models download once and run locally.',
      'No account and no cloud copy. Your backups are yours to keep.',
    ],
    shots: [
      ['/media/apps/twin-en-gate.jpg', 'Twin: a space that is only yours'],
      ['/media/apps/twin-en-privacy.jpg', 'Twin: privacy by design'],
      ['/media/apps/twin-en-dark.jpg', 'Twin: dark mode'],
    ],
  },
  {
    id: 'rimbalzo',
    name: 'Rimbalzo',
    icon: '/media/apps/icon-rimbalzo.svg',
    line: 'Your words become a digital gift. A small gesture that can travel on.',
    price: '€9',
    priceValue: '9.00',
    buy: 'https://bjbeyond.studio/products/digital-product',
    checkout: 'https://bjbeyond.studio/cart/61461163770190:1',
    buyIt: 'https://bjbeyond.studio/it/products/digital-product',
    open: 'https://rimbalzo.kimi.pro/',
    intro:
      'Write a personal dedication, choose a visual style and share a digital envelope. The recipient opens the seal, reads your message and can pass the gesture on with a new dedication. Your purchase includes PDF starter guides in English and Italian with the app link and instructions. The app runs online in your browser, with no installation or account.',
    features: [
      'A personal dedication of up to 600 characters',
      'Three prompts: admiration, a shared memory or a wish',
      'Sage, Paper and Sun styles with a live preview',
      'Share the public envelope link by chat or email',
      'Download the postcard as a PNG',
      'Pass the gesture on; app interface in English and Italian',
    ],
    privacy: [
      'Gifts are saved online and can be read by anyone with their public link. Avoid sensitive information.',
      'Keep the separate management link private: it is needed to delete the gift and cannot be recovered if lost.',
      'Deleting a gift does not remove PNGs or copies already saved by others. No account is required.',
    ],
    shots: [
      ['https://cdn.shopify.com/s/files/1/1079/7871/9566/files/rimbalzo-01-home-en.jpg?v=1793399999', 'Rimbalzo: a personal digital dedication'],
      ['https://cdn.shopify.com/s/files/1/1079/7871/9566/files/rimbalzo-03-sage-style-en.jpg?v=1793399999', 'Rimbalzo: choose the Sage, Paper or Sun style'],
      ['https://cdn.shopify.com/s/files/1/1079/7871/9566/files/rimbalzo-06-how-it-works-en.jpg?v=1793399998', 'Rimbalzo: write, send and pass the gesture on'],
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': absoluteUrl('/human-edge-apps/'),
      url: absoluteUrl('/human-edge-apps/'),
      name: 'Human Edge Apps — Quiete, Twin & Rimbalzo',
      inLanguage: 'en',
      isPartOf: { '@type': 'WebSite', url: SITE.url, name: SITE.name },
    },
    ...APPS.map((app) => ({
      '@type': 'SoftwareApplication',
      name: app.name,
      description: `${app.line} ${app.intro}`,
      applicationCategory: app.id === 'quiete' ? 'HealthApplication' : 'LifestyleApplication',
      operatingSystem: app.id === 'rimbalzo' ? 'Web browser' : 'Web browser (PWA)',
      url: app.open,
      image: absoluteUrl(app.icon),
      author: { '@type': 'Person', name: 'BJ Beyond', url: SITE.url },
      offers: {
        '@type': 'Offer',
        price: app.priceValue,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: app.buy,
      },
    })),
  ],
};

export default function HumanEdgeAppsPage() {
  return (
    <PageShell
      eyebrow="SMALL TOOLS FOR THE INNER LIFE"
      title={['Human Edge Apps:', 'Quiete, Twin & Rimbalzo']}
      standfirst="I write about the human edge: what stays ours when machines do more. Three apps turn that idea into everyday gestures: find calm with Quiete, keep your memories with Twin, or send a personal thought with Rimbalzo."
      media={MEDIA.backdrop}
      schema={schema}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-300">
            <a className="underline hover:text-amber-400" href="/it/human-edge-apps/" hrefLang="it" lang="it">Leggi questa pagina in italiano</a>
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((app) => (
            <li key={app.id} className="flex flex-col border border-rule p-8">
              <img src={app.icon} alt={`${app.name} app icon`} width={72} height={72} className="h-[72px] w-[72px] rounded-2xl" />
              <h2 className="mt-6 text-title font-extralight leading-[1.05] text-paper">{app.name}</h2>
              <p className="mt-4 max-w-sm flex-1 text-body font-light text-mist-300">{app.line}</p>
              <p className="u-label tabular mt-6 text-amber-400">{app.price} · one-time</p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <ButtonLink href={`#${app.id}`}>Discover {app.name}</ButtonLink>
                <a href={app.checkout} target="_blank" rel="noopener noreferrer" className="u-label text-mist-200 hover:text-paper">Buy ↗</a>
                <a href={app.buy} target="_blank" rel="noopener noreferrer" className="u-label text-mist-300 hover:text-paper">Details ↗</a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {APPS.map((app) => (
        <section key={app.id} id={app.id} className="u-gutter scroll-mt-28 border-t border-rule py-[var(--spacing-section)]">
          <Reveal>
            <p className="u-label text-amber-400">{app.name.toUpperCase()} — {app.price}</p>
            <h2 className="mt-4 text-title font-extralight leading-[1.05] text-paper">{app.line}</h2>
            <p className="mt-6 max-w-2xl text-body font-light text-mist-300">{app.intro}</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {app.shots.map(([src, alt]) => (
              <img key={src} src={src} alt={alt} loading="lazy" width={app.id === 'rimbalzo' ? 1348 : 1080} height={app.id === 'rimbalzo' ? 926 : 1350} className="h-auto w-full" />
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="u-label text-mist-200">Features</h3>
              <ul className="mt-4 border-t border-rule">
                {app.features.map((f) => (
                  <li key={f} className="u-rule-b py-3 text-meta text-mist-200">{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="u-label text-mist-200">Privacy</h3>
              <ul className="mt-4 border-t border-rule">
                {app.privacy.map((f) => (
                  <li key={f} className="u-rule-b py-3 text-meta text-mist-200">{f}</li>
                ))}
              </ul>
              {app.id === 'quiete' && (
                <p className="mt-6 border-l-2 border-amber-400 pl-4 text-meta text-mist-300">
                  Quiete is a wellbeing tool, not therapy and not a substitute for professional care. In an emergency, call 112.
                </p>
              )}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <ButtonLink href={app.checkout} external>Buy {app.name} — {app.price}</ButtonLink>
            <ArrowLink href={app.buy} external>Details</ArrowLink>
            <ArrowLink href={app.open} external>{app.id === 'quiete' ? 'Open the app' : 'Open the app'}</ArrowLink>
            {app.id === 'quiete' && <ArrowLink href="/frequency/">Frequency Studio</ArrowLink>}
          </div>
        </section>
      ))}

      <section className="u-gutter border-t border-rule py-[var(--spacing-section)]">
        <Reveal>
          <p className="max-w-2xl text-body font-light text-mist-300">
            Want sound for focus or rest? Frequency Studio is free and runs in your browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-8">
            <ArrowLink href="/frequency/">Open Frequency Studio</ArrowLink>
            <ArrowLink href="/labs/apps/">The offline apps experiment</ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
