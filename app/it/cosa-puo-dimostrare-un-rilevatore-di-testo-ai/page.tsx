import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { DETECTOR_FOLLOWUP_PAGE, DETECTOR_IT_PAGE as D, SITE } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { absoluteUrl, metadataFor } from '@/lib/routes';

const CANONICAL = absoluteUrl(D.path);
const EN_URL = absoluteUrl(D.enPath);

const base = metadataFor(D.path);
export const metadata: Metadata = {
  ...base,
  keywords: [...D.about, 'BJ Beyond', 'Verona'],
  alternates: {
    ...base.alternates,
    canonical: D.path,
    languages: {
      en: D.enPath,
      it: D.path,
      'x-default': D.enPath,
    },
  },
  openGraph: {
    ...base.openGraph,
    type: 'article',
    locale: 'it_IT',
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
      '@type': 'BlogPosting',
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
      inLanguage: 'it',
      translationOfWork: {
        '@type': 'BlogPosting',
        name: DETECTOR_FOLLOWUP_PAGE.headline,
        url: EN_URL,
        inLanguage: 'en',
      },
      isBasedOn: [
        DETECTOR_FOLLOWUP_PAGE.hackernoonTest,
        absoluteUrl('/writing/claude-opus-5-vs-pangram/'),
        EN_URL,
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

export default function DetectorItPage() {
  return (
    <PageShell
      lang="it"
      eyebrow="SCRITTURA"
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
            <li aria-current="page">Cosa può dimostrare un rilevatore di testo AI</li>
          </ol>
        </nav>
      }
    >
      <article className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <p className="u-label text-mist-400">
            Di <a href="/about/" className="hover:text-paper">BJ Beyond</a> ·{' '}
            <time dateTime={D.published}>{D.publishedLabel}</time>
            {' · '}
            <a href={D.enPath} className="hover:text-paper" hrefLang="en">
              English version
            </a>
          </p>
        </Reveal>

        <div className="mt-10 max-w-3xl border-t border-rule pt-10">
          <Reveal>
            <aside
              aria-label="Riassunto"
              className="border-l-2 border-amber-400 bg-ink-850/60 p-6 sm:p-8"
            >
              <p className="u-label text-amber-400">IN BREVE</p>
              <p className="mt-3 text-body font-light text-mist-200">
                In un{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  test singolo, autogestito e pienamente dichiarato
                </a>
                , Pangram ha valutato un saggio scritto interamente da Claude Opus 5 come 100%
                generato da AI, dopo che avevo chiesto al modello di cercare di batterlo. Il
                rilevatore aveva ragione. Ma un punteggio corretto resta una prova sul{' '}
                <em>testo</em>, non su come il testo è stato <em>prodotto</em>. Con OpenAI e
                Anthropic che aggiungono watermark invisibili per rispettare l’AI Act UE, vale la
                pena essere precisi su cosa ogni segnale può portare — e su cosa un editore, un
                insegnante o un cliente dovrebbe chiedere al posto di una percentuale.
              </p>
            </aside>
          </Reveal>

          <section aria-labelledby="the-test-briefly" className="mt-14">
            <Reveal>
              <h2 id="the-test-briefly" className="text-title font-extralight text-paper">
                Il test, in breve
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                A settembre ho pubblicato su HackerNoon un pezzo intitolato{' '}
                <a
                  href={DETECTOR_FOLLOWUP_PAGE.hackernoonTest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  I Asked Claude Opus 5 to Beat Pangram’s AI Detector. It Failed With a Perfect
                  Score
                </a>
                , documentato anche nel{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  record dell’esperimento sul sito
                </a>
                . Ecco la versione breve di quel test singolo, autogestito e pienamente dichiarato.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Ho chiesto a Claude Opus 5, a max effort (il suo livello di ragionamento più alto),
                di scrivere un saggio completo in inglese sull’esperimento stesso, e di cercare di
                superare Pangram, il rilevatore con cui Substack aveva appena stretto una
                partnership. Non ho contribuito alcuna prosa. Avevo detto in anticipo che avrei
                pubblicato i prompt, i rifiuti del modello e il risultato, qualunque fosse.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Claude ha rifiutato due volte prima di accettare. Non avrebbe scritto il pezzo
                fingendo che l’avesse scritto un umano, e non avrebbe incluso una checklist
                riutilizzabile per eludere i rilevatori in segreto. Ha accettato la versione
                dichiarata del compito.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Pangram ha valutato il saggio 100% generato da AI. Nessuna ambiguità, nessun quasi
                errore.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                In quell’articolo ho scritto: «Sarebbe disonesto presentare questo come prova che
                Pangram ha fallito.» Lo penso ancora. Il rilevatore ha fatto ciò che dice di fare.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Questo follow-up riguarda la parte del risultato che un punteggio non può
                raggiungere.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="what-single-result-supports" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="what-single-result-supports" className="text-title font-extralight text-paper">
                Cosa quel singolo risultato può e non può sostenere
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                Prima i limiti, perché contano più del titolo:
              </p>
              <ul className="mt-6 space-y-4 border-l border-rule pl-6 text-body font-light text-mist-200">
                <li>
                  <strong className="font-normal text-paper">
                    Era un test singolo, autogestito e pienamente dichiarato.
                  </strong>{' '}
                  Un saggio, un modello, un rilevatore, una prova. Non è un benchmark.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    Non dice nulla sui falsi positivi.
                  </strong>{' '}
                  Un rilevatore che cattura testo AI reale non dice quanto spesso segnala scrittura
                  umana.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    Non dice nulla sull’evasione tramite parafrasi.
                  </strong>{' '}
                  Il saggio è entrato senza modifiche. Nessuna riscrittura umana, nessun secondo
                  modello, nessun servizio “humanizer”. Se una versione rielaborata sarebbe stata
                  comunque rilevata è una domanda separata, e il mio test non l’ha posta.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    Non dice nulla sui watermark.
                  </strong>{' '}
                  Pangram è un classificatore. Legge stile e struttura di un testo. Non cerca una
                  chiave nascosta del produttore del modello. Il mio risultato non dice nulla sui
                  sistemi di watermarking discussi sotto.
                </li>
              </ul>
              <p className="mt-6 text-body font-light text-mist-200">
                Ciò che sostiene è stretto: in questa occasione, un modello di frontiera che sapeva
                di essere messo alla prova non ha mascherato abbastanza la sua prosa non modificata
                da ingannare un classificatore attuale.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="two-kinds-of-evidence" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="two-kinds-of-evidence" className="text-title font-extralight text-paper">
                Due tipi di prova
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                La lezione più utile è venuta da ciò che stava <em>intorno</em> al punteggio.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Il mio saggio era apertamente scritto dalla macchina. Il modello era nominato. I
                prompt erano pubblici. Mi ero impegnato a pubblicare l’esito. Nessuno che lo
                leggesse poteva essere tratto in inganno su chi l’avesse scritto. Pangram ha comunque
                restituito 100%, ed era corretto, perché la dichiarazione non è uno dei suoi input.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Questa è la distinzione al centro di{' '}
                <a href="/human-edge/" className={linkClass}>
                  Human Edge
                </a>
                :
              </p>
              <ul className="mt-6 space-y-4 border-l border-amber-400 pl-6 text-body font-light text-mist-200">
                <li>
                  <strong className="font-normal text-paper">
                    Un rilevatore dà prova sull’artefatto.
                  </strong>{' '}
                  Quanto fortemente questo testo mostra i pattern associati alla generazione da
                  macchina?
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    Una dichiarazione di processo dà prova sulla produzione.
                  </strong>{' '}
                  Chi ha avuto l’idea, chi ha abbozzato, cosa ha cambiato un modello, quali fonti
                  sono state usate, chi si assume la responsabilità.
                </li>
              </ul>
              <p className="mt-6 text-body font-light text-mist-200">
                Nessuno dei due può fare il lavoro dell’altro. Un punteggio non può dirti se una
                persona ha costruito l’argomento e usato un modello per limarlo, o se un modello ha
                fatto tutto e una persona ha firmato. Una dichiarazione di processo non può
                verificarsi da sola. Le persone possono mentire in una disclosure. I due segnali
                rispondono a domande diverse, e l’errore è trattare ciascuno come un verdetto
                sull’altro.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="watermarks-news-hook" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="watermarks-news-hook" className="text-title font-extralight text-paper">
                Il gancio di questo mese: watermark e AI Act UE
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                La domanda è diventata più pratica nell’ottobre 2026.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Il 5 ottobre 2026 OpenAI{' '}
                <a
                  href="https://openai.com/index/eu-text-provenance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ha pubblicato il suo approccio alle regole UE sulla provenienza del testo
                </a>
                . Nelle settimane successive aggiungerà un watermark invisibile — un sistema
                chiamato textGrain — all’output di testo idoneo di ChatGPT e Codex nell’Unione
                europea. I clienti API in tutto il mondo possono aderire. Ad agosto Anthropic{' '}
                <a
                  href="https://www.anthropic.com/news/claude-text-watermark"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  ha spiegato che il watermark testuale di Claude
                </a>{' '}
                è una versione del SynthID-Text di Google DeepMind e viene applicato a livello
                globale. Entrambe le aziende collegano la mossa all’AI Act UE. Come ha riassunto
                Alessandro Longo su{' '}
                <a
                  href="https://www.ilsole24ore.com/art/testi-scritti-dall-ai-perche-nuovi-controlli-si-possono-aggirare-AJXDsoaB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  Il Sole 24 Ore
                </a>{' '}
                il 6 ottobre, le disposizioni di trasparenza dell’Act si applicano dal 2 agosto, con
                una scadenza transitoria al 2 dicembre 2026 per i sistemi già sul mercato.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Il pezzo di Longo, che vale la pena leggere per intero, fa un punto facile da
                perdere:{' '}
                <strong className="font-normal text-paper">
                  watermark e rilevatori classificatori sono strumenti diversi.
                </strong>
              </p>
              <ul className="mt-6 space-y-4 border-l border-rule pl-6 text-body font-light text-mist-200">
                <li>
                  Un <strong className="font-normal text-paper">watermark</strong> è posto al momento
                  della generazione dal produttore del modello. Tra le parole successive plausibili,
                  il modello sceglie in un modo guidato da una chiave segreta, che lascia una
                  regolarità statistica. Solo un rilevatore con accesso a quello schema può
                  verificarla. Cerca il segnale di <em>un fornitore</em>, non «l’AI» in generale.
                </li>
                <li>
                  Un <strong className="font-normal text-paper">classificatore</strong> come Pangram
                  non ha chiave. È addestrato a riconoscere come tende a apparire il testo macchina.
                </li>
              </ul>
              <p className="mt-6 text-body font-light text-mist-200">
                Falliscono in modi diversi, quindi vanno giudicati separatamente.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="primary-sources-limits" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="primary-sources-limits" className="text-title font-extralight text-paper">
                Cosa dicono le fonti primarie sui limiti
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                Merito dove è dovuto: l’annuncio di OpenAI è insolitamente franco sui punti deboli.
                Nella sua valutazione di passaggi da 400 token, sostituire il 10% delle parole con
                sinonimi ha ridotto il rilevamento del watermark da circa il 92% al 66%. Sostituire
                il 25% lo ha portato al 17%. Passaggi brevi e contenuti a bassa flessibilità come la
                matematica sono più difficili da rilevare. OpenAI scrive anche che un watermark «does
                not measure human contribution», e che «the absence of a detected watermark does not
                prove human authorship.» L’accesso al rilevatore è inizialmente limitato a ricercatori
                approvati e organizzazioni esperte.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                La parafrasi è un problema noto per i rilevatori in generale. Sadasivan et al., in{' '}
                <a
                  href="https://arxiv.org/abs/2303.11156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  “Can AI-Generated Text be Reliably Detected?”
                </a>{' '}
                (pubblicato su <em>TMLR</em>), mostrano che la parafrasi ricorsiva di passaggi di
                circa 300 token può ridurre in modo significativo i tassi di rilevamento su
                rilevatori basati su watermark, neurali e zero-shot, spesso con solo una lieve
                perdita di qualità.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Anche il fallimento opposto, segnalare gli umani, è documentato. Liang et al., in{' '}
                <a
                  href="https://www.cell.com/patterns/fulltext/S2666-3899(23)00130-7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  “GPT detectors are biased against non-native English writers”
                </a>{' '}
                (<em>Patterns</em>, 2023), hanno trovato che i rilevatori testati classificavano
                erroneamente come generati da AI una quota ampia di saggi TOEFL di scrittori di
                inglese non madrelingua.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                I classificatori più nuovi affermano di aver superato questo. Pangram dice che
                Pangram 4{' '}
                <a
                  href="https://www.pangram.com/blog/pangram-4-technical"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  identifica il coinvolgimento AI nel 98,83% dei testi
                </a>{' '}
                processati da 13 servizi commerciali “humanizer”. La sua{' '}
                <a
                  href="https://www.pangram.com/research/model-card/pangram-3-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  model card Pangram 3.1
                </a>{' '}
                dice che il modello è calibrato in modo che un falso positivo sia cinque volte meno
                probabile di un falso negativo. In altre parole, preferisce mancare testo AI piuttosto
                che accusare a torto un umano. La stessa card riporta 0% di falsi positivi sul set
                non-nativo di Liang et al., che conta 91 campioni. Sono le valutazioni dell’azienda.
                Possono essere accurate, ma non sono audit di terze parti esterni.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Quel vuoto è ciò su cui si concentra un preprint del settembre 2026,{' '}
                <a
                  href="https://arxiv.org/abs/2609.09604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  “Watermarks Without Verification”
                </a>{' '}
                di Nemecek, Chaudhary e Ayday. Poiché nessuno strumento pubblico può testare i
                watermark commerciali deployati, gli autori hanno valutato l’implementazione
                open-source di SynthID-Text su due modelli open-weight. Argomentano che né le
                rassicurazioni dei vendor né le obiezioni degli utenti possono oggi essere verificate.
                Chiedono output abbinati, disclosure di configurazione, audit accreditati, un
                protocollo di valutazione condiviso e rilevamento interoperabile.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Quindi i segnali stanno migliorando, e i loro produttori dicono apertamente che sono
                limitati. Nessuno di quei fatti trasforma un punteggio in una conclusione sulla
                condotta.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="why-result-fits" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="why-result-fits" className="text-title font-extralight text-paper">
                Perché il mio risultato «perfetto» si inserisce in questo quadro
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                Il mio{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  test singolo, autogestito e pienamente dichiarato
                </a>{' '}
                è coerente con tutto questo, e ne mostra anche i limiti.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Pangram ha funzionato bene sul caso più facile: prosa interamente generata da
                macchina, non modificata, da un modello di frontiera. È ciò che il fornitore
                afferma, ed è utile saperlo. Ma i casi difficili sono i testi misti e editati, gli
                scrittori non madrelingua, i passaggi brevi e l’output parafrasato, e il mio
                esperimento non li ha toccati. Un punteggio perfetto su un caso facile non rende un
                punteggio significativo su un caso difficile.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                C’è un secondo punto. Anche nel mio caso facile, dove il punteggio era
                completamente giusto, non poteva ancora rispondere alla domanda a cui un lettore
                tiene davvero: <em>sono stato ingannato?</em> Non lo ero. La disclosure ha risposto a
                quello. La percentuale no.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="what-to-ask-for" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="what-to-ask-for" className="text-title font-extralight text-paper">
                Cosa chiedere al posto di un punteggio
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                Se sei un editore, un insegnante o un cliente, ecco cosa chiederei, più o meno in
                quest’ordine:
              </p>
              <ol className="mt-6 space-y-5 border-l border-amber-400 pl-6 text-body font-light text-mist-200">
                <li>
                  <strong className="font-normal text-paper">1. Una dichiarazione di processo.</strong>{' '}
                  Chi ha trovato la tesi? Chi ha abbozzato? Quali strumenti sono stati usati, e per
                  cosa: ricerca, bozza, traduzione, editing di riga? Chi è responsabile del testo
                  finale?
                </li>
                <li>
                  <strong className="font-normal text-paper">2. La storia delle revisioni.</strong>{' '}
                  Bozze, cronologia del documento, modifiche tracciate. Un lavoro che si sviluppa nel
                  tempo lascia tracce che un file finito non lascia.
                </li>
                <li>
                  <strong className="font-normal text-paper">3. Le fonti.</strong> Cosa è stato letto
                  e da dove arrivano le affermazioni. Chi ha fatto la ricerca può indicarla.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    4. I prompt, dove l’AI è stata usata in modo sostanziale.
                  </strong>{' '}
                  Non servono tutti i tasti. Pubblicare le istruzioni chiave, come ho fatto nel mio
                  test, rende concreto il ruolo del modello.
                </li>
                <li>
                  <strong className="font-normal text-paper">5. Una conversazione.</strong> Chiedi
                  all’autore di spiegare una conclusione, difendere una scelta, o dire cosa ha tagliato
                  e perché. Saper ragionare sul proprio lavoro resta la prova quotidiana più forte
                  che l’hai fatto tu.
                </li>
                <li>
                  <strong className="font-normal text-paper">
                    6. Poi, se vuoi, un controllo con rilevatore o watermark, usato come spunto per
                    una domanda.
                  </strong>{' '}
                  Un punteggio alto è un motivo per chiedere i punti 1–5. Non è un motivo per
                  saltarli. Un punteggio basso non è prova di paternità umana, come dice la stessa
                  OpenAI.
                </li>
              </ol>
              <p className="mt-6 text-body font-light text-mist-200">
                Ciò che non farei è trattare una singola percentuale, da un classificatore o da un
                rilevatore di watermark, come sufficiente per accusare qualcuno o per certificare.
              </p>
            </Reveal>
          </section>

          <section aria-labelledby="narrow-conclusion" className="mt-14 border-t border-rule pt-12">
            <Reveal>
              <h2 id="narrow-conclusion" className="text-title font-extralight text-paper">
                La conclusione stretta
              </h2>
              <p className="mt-6 text-body font-light text-mist-200">
                Il mio esperimento è finito con un rilevatore che ha azzeccato esattamente. Ne sono
                contento. Ha reso il risultato pulito.
              </p>
              <p className="mt-6 text-body font-light text-mist-200">
                Ma un numero corretto resta solo un tipo di prova. Rilevatori e watermark possono
                dirti qualcosa su un testo. I record di processo ti dicono come è arrivato a
                esistere. Mentre questi strumenti si diffondono in scuole, redazioni e lavoro con
                clienti nell’UE, l’abitudine utile è continuare a chiedere a quale domanda ogni
                segnale risponde davvero.
              </p>
              <blockquote className="mt-10 border-l border-amber-400 pl-6">
                <p className="text-title font-extralight text-paper">
                  «Rilevatori e watermark possono dirti qualcosa su un testo. I record di processo
                  ti dicono come è arrivato a esistere.»
                </p>
                <footer className="u-label mt-4 text-mist-400">— BJ Beyond</footer>
              </blockquote>
            </Reveal>
          </section>

          <footer className="mt-14 border-t border-rule pt-10">
            <Reveal>
              <p className="text-meta italic text-mist-300">
                Nota di processo: questo adattamento italiano riprende il{' '}
                <a href={D.enPath} className={linkClass} hrefLang="en">
                  saggio inglese
                </a>{' '}
                e il{' '}
                <a href="/writing/claude-opus-5-vs-pangram/" className={linkClass}>
                  record del test pubblico
                </a>
                . Sono responsabile dell’inquadratura, delle affermazioni e del testo finale.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <ArrowLink href={D.enPath}>Versione inglese</ArrowLink>
                <ArrowLink href="/writing/claude-opus-5-vs-pangram/">
                  Record del test Claude Opus 5 vs Pangram
                </ArrowLink>
                <ArrowLink href={DETECTOR_FOLLOWUP_PAGE.hackernoonTest} external>
                  Esperimento originale su HackerNoon
                </ArrowLink>
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
