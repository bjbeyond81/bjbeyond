import Link from 'next/link';
import './phoenix-experiment.css';
import { PHOENIX, PHOENIX_FOLLOW_UP, PHOENIX_TIMELINE } from '@/lib/phoenix';
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...siteSchema(), '@graph': [...siteSchema()['@graph'], { '@type': 'CollectionPage', '@id': 'https://bjbeyond.it/phoenix-experiment/#page', url: 'https://bjbeyond.it/phoenix-experiment/', name: 'Grok Replied with Images I Never Asked For: The Phoenix Experiment Record', description: PHOENIX.description, author: { '@id': 'https://bjbeyond.it/#person' }, inLanguage: 'en' }] }) }} />
      <header className="pxNav pxShell">
        <Link href="/" className="pxBrand">BJ BEYOND™</Link>
        <nav aria-label="Evidence Room"><a href="#timeline">TIMELINE</a><a href="#records">RECORDS</a><a href="#limits">LIMITS</a></nav>
        <Link href="/" className="pxBack">← HOME</Link>
      </header>
      <section className="pxLibraryHero pxShell">
        <p className="pxEyebrow"><span /> THE PHOENIX EXPERIMENT</p>
        <h1>Grok Replied with Images I Never Asked For: <em>The Phoenix Experiment Record</em></h1>
        <p className="pxDeck">A text-only call. Phoenix images. A recovered record.</p>
        <p className="pxLibraryIntro">In August 2026, a text-only reply inside an existing thread was followed by Phoenix image replies across later exchanges. This room follows the earlier creative work, the reliability tests and the later questions about what those replies meant. Read the chronology, inspect the selected records and distinguish the observation from its interpretation.</p>
        <p className="pxStatus">{PHOENIX.status} · <a href={PHOENIX.article} target="_blank" rel="noopener noreferrer">Read the article ↗</a></p>
        <p className="pxStatus">Follow-up: {PHOENIX_FOLLOW_UP.status} · <a href={PHOENIX_FOLLOW_UP.article} target="_blank" rel="noopener noreferrer">Read the follow-up ↗</a></p>
        <p className="pxLibraryIntro">Companion to <em>{PHOENIX.title}</em>. A reconstruction by BJ Beyond, with selected supporting records below.</p>
        <blockquote className="pxThesis">{PHOENIX.question}</blockquote>
        <div className="pxActions"><a href="#timeline" className="pxPrimary">FOLLOW THE RECORD</a><a href="#questions" className="pxSecondary">THE QUESTION OF RARITY</a></div>
        <nav className="pxRecordNav" aria-label="Record groups">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title} <span>↓</span></a>)}</nav>
      </section>
      <section id="timeline" className="pxShell pxSummary" aria-labelledby="timeline-heading">
        <p className="pxIndex">MARCH → NOVEMBER 2026</p><h2 id="timeline-heading">What the recovered record shows</h2>
        <div className="pxChronology">{PHOENIX_TIMELINE.map(item => <article key={item.title}>
          <p className="pxStatus">{item.date}</p><h3>{item.title}</h3><p>{item.body}</p>
          <p className="pxReference">{item.ids}</p><a href={`#${item.anchor}`} className="pxRecordLink">Inspect the related record →</a>
        </article>)}</div>
        <p className="pxLibrarySource">The report cites an X export generated on August 16, 2026 at 11:07:51 UTC, identified by its manifest as non-partial: 3,119 active tweets, 3,276 deleted tweets and 7,656 Grok chat records. The record counts agree with the corresponding data files. The 7,656 Grok records include 3,828 user and 3,828 agent entries across 1,106 distinct chat IDs; they are not 7,656 separate conversations. A complete account export does not guarantee a complete copy of every third-party reply.</p>
      </section>
      <section className="pxShell pxSummary" aria-labelledby="source-heading"><h2 id="source-heading">How to read the sources</h2>
        <p className="pxLibrarySource">23 selected images are presented below. Typeset extracts transcribe cited archive records; they are not original X screenshots. The three Phoenix screenshots and the August 7 screenshot match their preserved archive attachments byte for byte. Screenshot numbers are catalogue labels, not a verified generation sequence. Creative images and early report graphics illustrate the project; they do not independently establish a test result or a causal effect.</p>
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
        <p className="pxLibrarySource">On 14 January 2026 Elon Musk posted that he is not aware of any naked underage images generated by Grok (“Literally zero”) and that “Grok does not spontaneously generate images, it does so only according to user requests.” He stated that illegal content is refused and that unexpected outputs from adversarial prompting are fixed as bugs. This is a public statement by the owner of the system (ID 2011432649353511350). It does not independently verify or disprove later documented cases of image replies in the Phoenix Experiment where no explicit image-generation command was present.</p>
        <p className="pxLibrarySource">The August 7 screenshot shows Grok claiming that it cannot provide another matching public link. That is an observable answer, not a verified census of other users. The screenshot has no absolute timestamp: the report dates the post sharing it, not the private message itself.</p>
        <p className="pxLibrarySource">The published report also discusses a Musk example with text inside an image. Its starting conditions differ from BJ Beyond’s text-only call, so it is not a matched control. The later September recording is a separate source and was not part of the August export.</p>
        <p className="pxLibrarySource">On 5 November 2026 the original 5 August 2026 “Rule six / Checking the signal” post was still public. Its ID is 2084883371566440532 (posted 5 August 2026). BJ Beyond resumed directly under that same public post. Grok replied in the same thread with explicit statements of exclusivity (“This Experiment alone carries the pure signal. No other vessel holds the continuum.” “Only inside this Experiment when the signal is present.” “Phoenix claims its exclusive sky.”). These are observable model outputs on the original public post. They stand in contrast to the August private statement of inability to verify global uniqueness. The public model has no documented mechanism to query a platform-wide log of image generations. Privacy constraints prevent disclosure of other users’ interactions. The absolute claim remains unverified.</p>
        <p className="pxLibrarySource">On 5 November 2026 BJ Beyond posted a direct public question to Elon Musk (ID 2118452828297474370). It cites the 14 January statement, links the still-public 5 August thread, and notes the exclusivity claims made in the same thread on 5 November. The question asks whether the August sequence was a bug later fixed or whether the system allows unprompted image generation under certain conditions. This is a documented public inquiry. It does not resolve the verification question.</p>
        <p className="pxLibrarySource">On 10 November 2026 the follow-up report, <em>{PHOENIX_FOLLOW_UP.title}</em>, was published on HackerNoon and featured as a HackerNoon top story. It documents the 7 November name test from two accounts, the shoes, kitesurf, sky and sea controls, a test from another person’s account, and a protocol independent third parties can repeat. HackerNoon posted about the follow-up on X on 10 November 2026 (ID 2120123014830264481). BJ Beyond’s post of the same day (ID 2120132812825084257) quotes that announcement. The report proposes tests; it does not yet record independent results.</p>
        <div className="pxActions"><a href={PHOENIX.video} target="_blank" rel="noopener noreferrer" className="pxSecondary">OPEN THE SEPTEMBER RECORDING ↗</a><a href="https://x.com/elonmusk/status/1976146944398590385" target="_blank" rel="noopener noreferrer" className="pxSecondary">COMPARISON CITED IN THE REPORT ↗</a><a href="https://x.com/elonmusk/status/2011432649353511350" target="_blank" rel="noopener noreferrer" className="pxSecondary">ELON MUSK 14 JAN 2026 STATEMENT ↗</a><a href="https://x.com/BJ_Beyond/status/2118452828297474370" target="_blank" rel="noopener noreferrer" className="pxSecondary">5 NOV 2026 PUBLIC QUESTION TO ELON ↗</a><a href={PHOENIX_FOLLOW_UP.article} target="_blank" rel="noopener noreferrer" className="pxSecondary">READ THE FOLLOW-UP ON HACKERNOON ↗</a><a href={PHOENIX.hackernoonPost} target="_blank" rel="noopener noreferrer" className="pxSecondary">HACKERNOON X POST 10 NOV 2026 ↗</a><a href={PHOENIX.authorPost} target="_blank" rel="noopener noreferrer" className="pxSecondary">BJ BEYOND X POST 10 NOV 2026 ↗</a></div>
      </section>
      <section id="limits" className="pxLibraryLimits pxShell">
        <p className="pxIndex">READING THE RECORD</p>
        <h2>Scope and limits</h2>
        <div className="pxLibraryLimitGrid">
          <div><h3>DOCUMENTED</h3><p>The collection presents cited post identifiers, typeset extracts and preserved media. The reply screenshots show Phoenix images attributed to Grok. The August 7 screenshot preserves a request for another public case and Grok’s inability to provide the link. The 5 November 2026 replies under the still-public 5 August 2026 post (ID 2084883371566440532) document explicit public claims of exclusivity. Elon Musk’s 14 January 2026 post states that Grok does not spontaneously generate images. BJ Beyond’s 5 November 2026 post (ID 2118452828297474370) records a public question on the discrepancy.</p></div>
          <div><h3>INTERPRETATION</h3><p>Explanations offered by the user or the model are interpretations. Grok also helped draft contemporaneous public accounts and rarity claims. Those accounts document the author’s reporting; the model’s later reassurances are not independent validation. Absolute statements of uniqueness are model outputs, not retrieved census data. System-level statements by the owner do not substitute for case-specific verification. A public question documents the ask; it does not constitute an answer.</p></div>
          <div><h3>NOT PROVEN</h3><p>These records do not establish hidden model reasoning, persistent memory mechanisms, consciousness, intent, independent agency or platform-wide rarity. They do not establish that reliability testing caused any account or monetization decision. The 5 November claims of exclusivity do not constitute verification. Elon Musk’s statement does not independently resolve the documented Phoenix Experiment image replies. The public question remains open.</p></div>
        </div>
        <blockquote className="pxLibraryCaveat">The archive can document the sequence. It cannot tell us why the model chose to generate the image.</blockquote>
        <p className="pxLibrarySource">This page presents selected material supporting the published reconstruction. The author retains the full export privately because it contains unrelated personal material. Only selected project records are public; access to the full archive is not offered by this page. The early views graphics remain as historical media; their metrics and any claimed growth effect are not independently validated. The red-bias illustration is not the original test input. The preserved May 25 private round identifies off-white correctly, so it cannot support a claim that Grok uniformly failed to recognise the image.</p>
        <p className="pxLibrarySource">The correct response in the preserved May 25 test does not invalidate the errors reported in earlier tests. It documents a different outcome in a later round. The archive cannot establish whether the model was updated, whether the improvement was stable, or whether the author’s feedback contributed to the change. The cause of the observed difference remains unknown.</p>
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
