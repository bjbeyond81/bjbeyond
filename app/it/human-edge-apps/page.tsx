import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ButtonLink } from '@/components/primitives/ButtonLink';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { SITE } from '@/lib/content';
import { absoluteUrl, metadataFor } from '@/lib/routes';

/**
 * /it/human-edge-apps/ — Italian version of /human-edge-apps/: the two flagship apps, Quiete and Twin, with links to the store.
 * Prices and facts from the store listings and the Twin user guide (2026-10-29).
 * Never put an activation code on this page.
 */
const base = metadataFor('/it/human-edge-apps/');
const OG = { url: '/media/apps/og-apps.jpg', width: 1200, height: 630, alt: 'Quiete e Twin, due app di BJ Beyond' };
export const metadata: Metadata = {
  ...base,
  alternates: {
    canonical: '/it/human-edge-apps/',
    languages: { en: '/human-edge-apps/', it: '/it/human-edge-apps/', 'x-default': '/human-edge-apps/' },
  },
  openGraph: { ...base.openGraph, locale: 'it_IT', images: [OG] },
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
    line: 'Un posto tranquillo per respirare, ritrovare il contatto con il presente e ascoltare come ti senti.',
    price: '€15',
    priceValue: '15.00',
    buy: 'https://bjbeyond.studio/it/products/quiete-app-supporto-emotivo',
    checkout: 'https://bjbeyond.studio/cart/61443804856654:1',
    buyIt: 'https://bjbeyond.studio/it/products/quiete-app-supporto-emotivo',
    open: 'https://bjbeyond81.github.io/apps/quiete/',
    intro:
      'Quiete è una web app di supporto emotivo e respirazione che puoi installare sul telefono. La versione completa include un codice di attivazione e una guida in PDF.',
    features: [
      'Respirazione guidata e tecniche di rilassamento',
      'Esercizi di grounding per i momenti di ansia',
      'Un controllo dell’umore, con delicatezza',
      'IA sul dispositivo per riflettere con calma',
      'Sessioni sonore con Frequency Studio',
      'Web app installabile (PWA)',
    ],
    privacy: [
      'L’IA funziona sul tuo dispositivo. Quello che scrivi non viene inviato a nessun server.',
      'Nessun account richiesto.',
    ],
    shots: [
      ['/media/apps/quiete-en-feel.jpg', 'Quiete: dare un nome a ciò che senti'],
      ['/media/apps/quiete-en-ground.jpg', 'Quiete: un esercizio di grounding'],
      ['/media/apps/quiete-en-mood.jpg', 'Quiete: controllo dell’umore'],
    ],
  },
  {
    id: 'twin',
    name: 'Twin',
    icon: '/media/apps/icon-twin.png',
    line: 'Un diario privato e cifrato, con un’IA che resta sul tuo dispositivo.',
    price: '€29',
    priceValue: '29.00',
    buy: 'https://bjbeyond.studio/it/products/twin-private-diary-app',
    checkout: 'https://bjbeyond.studio/cart/61444088627534:1',
    buyIt: 'https://bjbeyond.studio/it/products/twin-private-diary-app',
    open: 'https://bjbeyond81.github.io/apps/twin/',
    intro:
      'Twin è un diario per i giorni che vale la pena ricordare. Scrivi o registra la tua giornata, segui umore e sonno, poi fai domande all’IA sui tuoi ricordi. Lo attivi una volta sola con il codice che ricevi con l’acquisto. Non serve nessun account.',
    features: [
      'Scrivi pagine o registra note vocali',
      'Umore, sonno e spese del giorno accanto a ogni ricordo',
      'Fai domande all’IA locale su ciò che hai scritto',
      'Trascrizione vocale sul dispositivo',
      'Backup cifrati da esportare e ripristinare',
      'Interfaccia in italiano e inglese, tema chiaro e scuro',
    ],
    privacy: [
      'Il diario è cifrato con una chiave conservata nel tuo browser.',
      'I modelli di IA e di trascrizione si scaricano una volta e funzionano in locale.',
      'Nessun account e nessuna copia nel cloud. I backup restano tuoi.',
    ],
    shots: [
      ['/media/apps/twin-en-gate.jpg', 'Twin: uno spazio solo tuo'],
      ['/media/apps/twin-en-privacy.jpg', 'Twin: privacy fin dalla progettazione'],
      ['/media/apps/twin-en-dark.jpg', 'Twin: tema scuro'],
    ],
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': absoluteUrl('/it/human-edge-apps/'),
      url: absoluteUrl('/it/human-edge-apps/'),
      name: 'Human Edge Apps — Quiete e Twin',
      inLanguage: 'it',
      isPartOf: { '@type': 'WebSite', url: SITE.url, name: SITE.name },
    },
    ...APPS.map((app) => ({
      '@type': 'SoftwareApplication',
      name: app.name,
      description: `${app.line} ${app.intro}`,
      applicationCategory: app.id === 'twin' ? 'LifestyleApplication' : 'HealthApplication',
      operatingSystem: 'Web browser (PWA)',
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

export default function HumanEdgeAppsPageIt() {
  return (
    <PageShell
      lang="it"
      eyebrow="PICCOLI STRUMENTI PER LA VITA INTERIORE"
      title={['Human Edge Apps:', 'Quiete e Twin']}
      standfirst="Scrivo del margine umano: ciò che resta nostro quando le macchine fanno di più. Queste due app sono la stessa idea, resa qualcosa da usare. Private per scelta, con un’IA che gira sul tuo dispositivo."
      media={MEDIA.backdrop}
      schema={schema}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-300">
            <a className="underline hover:text-amber-400" href="/human-edge-apps/" hrefLang="en" lang="en">Read this page in English</a>
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {APPS.map((app) => (
            <li key={app.id} className="flex flex-col border border-rule p-8">
              <img src={app.icon} alt={`Icona dell’app ${app.name}`} width={72} height={72} className="h-[72px] w-[72px] rounded-2xl" />
              <h2 className="mt-6 text-title font-extralight leading-[1.05] text-paper">{app.name}</h2>
              <p className="mt-4 max-w-sm flex-1 text-body font-light text-mist-300">{app.line}</p>
              <p className="u-label tabular mt-6 text-amber-400">{app.price} · una tantum</p>
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <ButtonLink href={`#${app.id}`}>Scopri {app.name}</ButtonLink>
                <a href={app.checkout} target="_blank" rel="noopener noreferrer" className="u-label text-mist-200 hover:text-paper">Acquista ↗</a>
                <a href={app.buy} target="_blank" rel="noopener noreferrer" className="u-label text-mist-300 hover:text-paper">Dettagli ↗</a>
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
              <img key={src} src={src} alt={alt} loading="lazy" width={1080} height={1350} className="h-auto w-full" />
            ))}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="u-label text-mist-200">Funzioni</h3>
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
                  Quiete è uno strumento di benessere: non è una terapia e non sostituisce l’aiuto di un professionista. In caso di emergenza chiama il 112.
                </p>
              )}
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <ButtonLink href={app.checkout} external>Acquista {app.name} — {app.price}</ButtonLink>
            <ArrowLink href={app.buy} external>Dettagli</ArrowLink>
            <ArrowLink href={app.open} external>Apri l’app</ArrowLink>
            {app.id === 'quiete' && <ArrowLink href="/frequency/">Frequency Studio</ArrowLink>}
          </div>
        </section>
      ))}

      <section className="u-gutter border-t border-rule py-[var(--spacing-section)]">
        <Reveal>
          <p className="max-w-2xl text-body font-light text-mist-300">
            Cerchi un suono per concentrarti o riposare? Frequency Studio è gratuito e funziona nel browser.
          </p>
          <div className="mt-6 flex flex-wrap gap-8">
            <ArrowLink href="/frequency/">Apri Frequency Studio</ArrowLink>
            <ArrowLink href="/labs/apps/">L’esperimento delle app offline (EN)</ArrowLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
