import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ButtonLink } from '@/components/primitives/ButtonLink';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { SITE } from '@/lib/content';
import { absoluteUrl, metadataFor } from '@/lib/routes';

/**
 * /it/human-edge-apps/ — Italian version with Quiete, Twin and Rimbalzo.
 * Rimbalzo facts checked against the live app and its PDF guides (2026-10-30).
 * Never put an activation code on this page.
 */
const base = metadataFor('/it/human-edge-apps/');
const OG = { url: '/media/apps/og-apps.jpg', width: 1200, height: 630, alt: 'Quiete e Twin di BJ Beyond' };
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
  {
    id: 'rimbalzo',
    name: 'Rimbalzo',
    icon: '/media/apps/icon-rimbalzo.svg',
    line: 'Le tue parole diventano un regalo digitale. Un piccolo gesto che può continuare.',
    price: '€9',
    priceValue: '9.00',
    buy: 'https://bjbeyond.studio/it/products/digital-product',
    checkout: 'https://bjbeyond.studio/cart/61461163770190:1',
    buyIt: 'https://bjbeyond.studio/it/products/digital-product',
    open: 'https://rimbalzo.kimi.pro/',
    intro:
      'Scrivi una dedica personale, scegli uno stile e condividi una busta digitale. Chi riceve apre il sigillo, legge il messaggio e può far proseguire il gesto con una nuova dedica. L’acquisto comprende le guide PDF in italiano e inglese, con il link all’app e le istruzioni. L’app funziona online nel browser, senza installazione né account.',
    features: [
      'Una dedica personale fino a 600 caratteri',
      'Tre spunti: una cosa che ammiri, un ricordo o un augurio',
      'Stili Sage, Paper e Sun con anteprima dal vivo',
      'Link pubblico della busta da inviare via chat o e-mail',
      'Cartolina scaricabile in PNG',
      'Possibilità di far rimbalzare il gesto; app in italiano e inglese',
    ],
    privacy: [
      'I regali vengono salvati online: chiunque abbia il link pubblico può leggerli. Evita informazioni sensibili.',
      'Conserva privatamente il link di gestione: serve per eliminare il regalo e non è recuperabile se viene perso.',
      'La cancellazione non elimina PNG o copie già salvate da altri. Non serve un account.',
    ],
    shots: [
      ['https://cdn.shopify.com/s/files/1/1079/7871/9566/files/rimbalzo-07-home-it.jpg?v=1793399999', 'Rimbalzo: una dedica digitale personale'],
      ['https://cdn.shopify.com/s/files/1/1079/7871/9566/files/rimbalzo-03-sage-style-en.jpg?v=1793399999', 'Rimbalzo: scelta tra gli stili Sage, Paper e Sun, schermata in inglese'],
      ['https://cdn.shopify.com/s/files/1/1079/7871/9566/files/rimbalzo-08-come-funziona-it.jpg?v=1793399999', 'Rimbalzo: scrivi, invia e fai continuare il gesto'],
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
      name: 'Human Edge Apps — Quiete, Twin e Rimbalzo',
      inLanguage: 'it',
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

export default function HumanEdgeAppsPageIt() {
  return (
    <PageShell
      lang="it"
      eyebrow="PICCOLI STRUMENTI PER LA VITA INTERIORE"
      title={['Human Edge Apps:', 'Quiete, Twin e Rimbalzo']}
      standfirst="Scrivo del margine umano: ciò che resta nostro quando le macchine fanno di più. Tre app trasformano questa idea in gesti quotidiani: ritrovare la calma con Quiete, conservare i ricordi con Twin e dedicare un pensiero a qualcuno con Rimbalzo."
      media={MEDIA.backdrop}
      schema={schema}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-300">
            <a className="underline hover:text-amber-400" href="/human-edge-apps/" hrefLang="en" lang="en">Read this page in English</a>
          </p>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              <img key={src} src={src} alt={alt} loading="lazy" width={app.id === 'rimbalzo' ? 1348 : 1080} height={app.id === 'rimbalzo' ? 926 : 1350} className="h-auto w-full" />
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
