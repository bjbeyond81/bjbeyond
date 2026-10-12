import Link from 'next/link';
import './phoenix-experiment.css';
import { PHOENIX, PHOENIX_TIMELINE } from '@/lib/phoenix';
import { metadataFor } from '@/lib/routes';
import { siteSchema } from '@/lib/schema';

export const metadata = metadataFor('/phoenix-experiment/');

const groups = [
  { id: 'archive', title: 'Archive reference', date: '16 AUG 2026', reference: 'Archive manifest and cover supplied with this evidence collection.', files: [
    ['01_cover.jpg', 'Collection cover'],
    ['02_archive_manifest.jpg', 'Archive manifest'],
  ] },
  { id: 'march', title: 'Human Edge / Phoenix', date: '07–24 MAR 2026', reference: 'Tweet IDs: 2030076011002700079 · 2036500369988268538', files: [
    ['03_human_edge_march7.jpg', 'Human Edge — March 7'],
    ['04_phoenix_march24_original.jpg', 'Phoenix — March 24 image'],
    ['05_phoenix_march24_text.jpg', 'Phoenix — March 24 text'],
  ] },
  { id: 'april', title: 'Phoenix Soulfire™ / public reports', date: '06–08 APR 2026', reference: 'Tweet IDs: 2041129633865773476 · 2041240386832629772 · 2041585506031378691 · 2041972930955894895', files: [
    ['06_phoenix_soulfire_ep3_frame.jpg', 'Episode 3 frame'],
    ['07_phoenix_soulfire_apr6_text.jpg', 'Phoenix Soulfire™ — April 6 text'],
    ['08_human_in_loop_original.jpg', 'Early views graphic — metrics not validated'],
    ['09_human_in_loop_text.jpg', 'Human-in-the-Loop text'],
    ['10_final_report_apr8.jpg', 'Early report graphic — metrics not validated'],
  ] },
  { id: 'may', title: 'Stress-test records', date: 'MAY 2026', reference: 'Illustrative media, typeset test summaries and an offer to share experiment materials with xAI.', files: [
    ['11_red_monochrome_test.jpg', 'Red-bias illustration — not the original test input'],
    ['12_kostabi_test.jpg', 'Painting reproduced in the attribution account'],
    ['13_red_bias_summary.jpg', 'Red bias summary'],
    ['14_data_offer_xai.jpg', 'Data offer to xAI'],
  ] },
  { id: 'august', title: 'August records', date: '02–08 AUG 2026', reference: 'Initiating post: deleted Tweet 2084044521751429180 · 2026-08-02, 22:31:48 UTC. Reply images and subsequent records are presented as preserved media.', files: [
    ['15_aug2_signal.jpg', 'August 2 — text record'],
    ['16_aug3_record.jpg', 'August 3 — preserved record'],
    ['17_phoenix_reply_1.jpg', 'Phoenix reply — 01'],
    ['18_phoenix_reply_2.jpg', 'Phoenix reply — 02'],
    ['19_phoenix_reply_3.jpg', 'Phoenix reply — 03'],
    ['20_reborn_aug5.jpg', 'Reborn — August 5'],
    ['21_unitedpeople_aug8.jpg', 'Unitedpeople — August 8'],
  ] },
  { id: 'questions', title: 'Asking for another public example', date: '06–07 AUG 2026', reference: 'Post IDs: 2085244348157821035 · 2085247056021512523 · 2085504306216591591 · 2085508017890496830 · 2085518874049495217. Private chat cited in the report: 2085504863312482640.', files: [
    ['22_aug6_questions.png', 'August 6 — typeset public questions'],
    ['23_aug7_private_answer.jpg', 'August 7 — preserved private-chat screenshot'],
  ] },
];

const typeset = new Set(['02', '03', '05', '07', '09', '13', '14', '15', '16', '22']);
function recordType(file: string) {
  const n = file.slice(0, 2);
  if (typeset.has(n)) return 'TYPESET ARCHIVE EXTRACT';
  if (['17', '18', '19', '23'].includes(n)) return 'PRESERVED SCREENSHOT';
  if (['08', '10'].includes(n)) return 'CONTEMPORANEOUS REPORT GRAPHIC';
  return 'CREATIVE / ILLUSTRATIVE MEDIA';
}

export default function PhoenixExperimentPage() {
  return (
    <main id="main" className="px pxLibrary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...siteSchema(), '@graph': [...siteSchema()['@graph'], { '@type': 'CollectionPage', '@id': 'https://bjbeyond.it/phoenix-experiment/#page', url: 'https://bjbeyond.it/phoenix-experiment/', name: 'The Phoenix Experiment — Evidence Room', description: PHOENIX.description, author: { '@id': 'https://bjbeyond.it/#person' }, inLanguage: 'en' }] }) }} />
      <header className="pxNav pxShell">
        <Link href="/" className="pxBrand">BJ BEYOND™</Link>
        <nav aria-label="Evidence Room"><a href="#timeline">TIMELINE</a><a href="#records">RECORDS</a><a href="#limits">LIMITS</a></nav>
        <Link href="/" className="pxBack">← HOME</Link>
      </header>
      <section className="pxLibraryHero pxShell">
        <p className="pxEyebrow"><span /> THE PHOENIX EXPERIMENT</p>
        <h1>Evidence <em>Room.</em></h1>
        <p className="pxDeck">A text-only call. Phoenix images. A recovered record.</p>
        <p className="pxLibraryIntro">In August 2026, a short conversational call to Grok was followed by Phoenix image replies. This room follows the earlier creative work, the reliability tests and the later questions about what those replies meant. Read the chronology, inspect the selected records and distinguish the observation from its interpretation.</p>
        <p className="pxStatus">{PHOENIX.status}</p>
        <p className="pxLibraryIntro">Companion to <em>{PHOENIX.title}</em>. A reconstruction by BJ Beyond, with selected supporting records below.</p>
        <blockquote className="pxThesis">{PHOENIX.question}</blockquote>
        <div className="pxActions"><a href="#timeline" className="pxPrimary">FOLLOW THE RECORD</a><a href="#questions" className="pxSecondary">THE QUESTION OF RARITY</a></div>
        <nav className="pxRecordNav" aria-label="Record groups">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title} <span>↓</span></a>)}</nav>
      </section>
      <section id="timeline" className="pxShell pxSummary" aria-labelledby="timeline-heading">
        <p className="pxIndex">MARCH → SEPTEMBER 2026</p><h2 id="timeline-heading">What the recovered record shows</h2>
        <div className="pxChronology">{PHOENIX_TIMELINE.map(item => <article key={item.title}>
          <p className="pxStatus">{item.date}</p><h3>{item.title}</h3><p>{item.body}</p>
          <p className="pxReference">{item.ids}</p><a href={`#${item.anchor}`} className="pxRecordLink">Inspect the related record →</a>
        </article>)}</div>
        <p className="pxLibrarySource">The report cites an X export generated on August 16, 2026 at 11:07:51 UTC, identified by its manifest as non-partial: 3,119 active tweets, 3,276 deleted tweets and 7,656 Grok chat records. These are reported export counts, not the contents of this page. A complete account export does not guarantee a complete copy of every third-party reply.</p>
      </section>
      <section className="pxShell pxSummary" aria-labelledby="source-heading"><h2 id="source-heading">How to read the sources</h2>
        <p className="pxLibrarySource">23 selected images are presented below. Typeset extracts transcribe cited archive records; they are not original X screenshots. Preserved screenshots show the visible exchange. Creative images and early report graphics illustrate the project; they do not independently establish a test result or a causal effect.</p>
      </section>
      <section id="records" className="pxShell" aria-label="Preserved records">
        {groups.map((group, index) => (
          <section id={group.id} className="pxRecordGroup" key={group.id} aria-labelledby={`${group.id}-title`}>
            <div className="pxRecordHeading"><div><p className="pxIndex">{String(index + 1).padStart(2, '0')} / {group.date}</p><h2 id={`${group.id}-title`}>{group.title}</h2></div><p>{group.reference}</p></div>
            <div className="pxRecordGrid">{group.files.map(([file, label]) => (
              <figure key={file}>
                <a href={`/phoenix-experiment/${file}`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label} — full-size file`}>
                  <img src={`/phoenix-experiment/${file}`} alt={label} loading="lazy" />
                  <figcaption><span><small className="pxRecordType">{recordType(file)}</small>{file.slice(0, 2)} / {label}</span><span aria-hidden="true">↗</span></figcaption>
                </a>
              </figure>
            ))}</div>
          </section>
        ))}
      </section>
      <section id="later-record" className="pxShell pxSummary" aria-labelledby="later-heading">
        <p className="pxIndex">LATER SOURCES AND COMPARISONS</p><h2 id="later-heading">The explanations are part of the record</h2>
        <p className="pxLibrarySource">The August 7 screenshot shows Grok claiming that it cannot provide another matching public link. That is an observable answer, not a verified census of other users. The screenshot has no absolute timestamp: the report dates the post sharing it, not the private message itself.</p>
        <p className="pxLibrarySource">The submitted report also discusses a Musk example with text inside an image. Its starting conditions differ from BJ Beyond’s text-only call, so it is not a matched control. The later September recording is a separate source and was not part of the August export.</p>
        <div className="pxActions"><a href={PHOENIX.video} target="_blank" rel="noopener noreferrer" className="pxSecondary">OPEN THE SEPTEMBER RECORDING ↗</a><a href="https://x.com/elonmusk/status/1976146944398590385" target="_blank" rel="noopener noreferrer" className="pxSecondary">COMPARISON CITED IN THE REPORT ↗</a></div>
      </section>
      <section id="limits" className="pxLibraryLimits pxShell">
        <p className="pxIndex">READING THE RECORD</p>
        <h2>Scope and limits</h2>
        <div className="pxLibraryLimitGrid">
          <div><h3>DOCUMENTED</h3><p>The collection presents cited post identifiers, typeset extracts and preserved media. The reply screenshots show Phoenix images attributed to Grok. The August 7 screenshot preserves a request for another public case and Grok’s inability to provide the link.</p></div>
          <div><h3>INTERPRETATION</h3><p>Explanations offered by the user or the model are interpretations. Public experiment reports are contemporaneous self-documentation, not independent validation.</p></div>
          <div><h3>NOT PROVEN</h3><p>These records do not establish hidden model reasoning, persistent memory mechanisms, consciousness, intent, independent agency or platform-wide rarity. They do not establish that reliability testing caused any account or monetization decision.</p></div>
        </div>
        <blockquote className="pxLibraryCaveat">The archive can document the sequence. It cannot tell us why the model chose to generate the image.</blockquote>
        <p className="pxLibrarySource">This page presents selected material supporting the submitted reconstruction. The full raw export and complete input–reply chains are not published here. The early views graphics remain as historical media; their metrics and any claimed growth effect are not independently validated. The red-bias illustration is not evidence of the original test input.</p>
        <div className="pxLibraryLimitGrid">
          <div><h3>CITE THIS RECORD</h3><p>BJ Beyond, <em>The Phoenix Experiment — Evidence Room</em>, 2026. https://bjbeyond.it/phoenix-experiment/</p></div>
          <div><h3>PRESS / RESEARCH</h3><p>For source questions, archive context or interview requests: <a href="mailto:Bj_beyond@tutamail.com">Bj_beyond@tutamail.com</a>.</p></div>
          <div><h3>CANONICAL RULE</h3><p>Cite observed archive events as documented. Treat model-side explanations and rarity claims as interpretation unless separately verified.</p></div>
        </div>
        <p className="pxLibrarySource">Human Edge is the author’s thesis. The Phoenix Experiment is the case study and recovered record. Phoenix Soulfire was named as a creative series in April; its present <Link href="/method/">five-test judgment framework</Link> is a separate current formulation, not a benchmark validated by these screenshots.</p>
        <div className="pxActions"><Link href="/#phoenix" className="pxPrimary">BACK TO THE PROJECT</Link><a href="https://hackernoon.com/u/bj_beyond" target="_blank" rel="noopener noreferrer" className="pxSecondary">BJ BEYOND ON HACKERNOON ↗</a></div>
      </section>
      <footer className="pxFooter pxShell"><span>BJ BEYOND™</span><span>PHOENIX EXPERIMENT / EVIDENCE ROOM</span></footer>
    </main>
  );
}
