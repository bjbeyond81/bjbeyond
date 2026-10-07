import Link from 'next/link';
import './phoenix-experiment.css';

export const metadata = {
  title: 'Phoenix Experiment — Evidence Room',
  alternates: { canonical: '/phoenix-experiment/' },
  description: 'A source index for the Phoenix Experiment: 21 preserved images, dated records and limits of the evidence.',
};

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
  { id: 'april', title: 'Phoenix Soulfire / public reports', date: '06–08 APR 2026', reference: 'Tweet IDs: 2041129633865773476 · 2041240386832629772 · 2041585506031378691 · 2041972930955894895', files: [
    ['06_phoenix_soulfire_ep3_frame.jpg', 'Episode 3 frame'],
    ['07_phoenix_soulfire_apr6_text.jpg', 'Phoenix Soulfire — April 6 text'],
    ['08_human_in_loop_original.jpg', 'Human-in-the-Loop image'],
    ['09_human_in_loop_text.jpg', 'Human-in-the-Loop text'],
    ['10_final_report_apr8.jpg', 'Public report — April 8'],
  ] },
  { id: 'may', title: 'Stress-test records', date: 'MAY 2026', reference: 'Preserved test screenshots and the offer of experiment materials to xAI.', files: [
    ['11_red_monochrome_test.jpg', 'Red monochrome test'],
    ['12_kostabi_test.jpg', 'Attribution test'],
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
];

export default function PhoenixExperimentPage() {
  return (
    <main id="main" className="px pxLibrary">
      <header className="pxNav pxShell">
        <Link href="/" className="pxBrand">BJ BEYOND™</Link>
        <nav aria-label="Evidence Room"><a href="#records">RECORDS</a><a href="#limits">LIMITS</a></nav>
        <Link href="/" className="pxBack">← HOME</Link>
      </header>
      <section className="pxLibraryHero pxShell">
        <p className="pxEyebrow"><span /> THE PHOENIX EXPERIMENT</p>
        <h1>Evidence <em>Room.</em></h1>
        <p className="pxDeck">21 preserved images. A dated source index.</p>
        <p className="pxLibraryIntro">Open each record to inspect the original image. This collection supports source checking; the narrative and interpretation belong in the forthcoming HackerNoon article.</p>
        <blockquote className="pxThesis">Human Edge was the hypothesis. The Phoenix Experiment tested it. Phoenix Soulfire™, the <Link href="/method/">five-test judgment layer</Link>, is the method that came out of it. The archive is the record.</blockquote>
        <nav className="pxRecordNav" aria-label="Record groups">{groups.map(group => <a key={group.id} href={`#${group.id}`}>{group.title} <span>↓</span></a>)}</nav>
      </section>
      <section id="records" className="pxShell" aria-label="Preserved records">
        {groups.map((group, index) => (
          <section id={group.id} className="pxRecordGroup" key={group.id} aria-labelledby={`${group.id}-title`}>
            <div className="pxRecordHeading"><div><p className="pxIndex">{String(index + 1).padStart(2, '0')} / {group.date}</p><h2 id={`${group.id}-title`}>{group.title}</h2></div><p>{group.reference}</p></div>
            <div className="pxRecordGrid">{group.files.map(([file, label]) => (
              <figure key={file}>
                <a href={`/phoenix-experiment/${file}`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${label} — original image`}>
                  <img src={`/phoenix-experiment/${file}`} alt={label} loading="lazy" />
                  <figcaption><span>{file.slice(0, 2)} / {label}</span><span aria-hidden="true">↗</span></figcaption>
                </a>
              </figure>
            ))}</div>
          </section>
        ))}
      </section>
      <section id="limits" className="pxLibraryLimits pxShell">
        <p className="pxIndex">READING THE RECORD</p>
        <h2>Scope and limits</h2>
        <div className="pxLibraryLimitGrid">
          <div><h3>DOCUMENTED</h3><p>The supplied collection contains dated posts, screenshots and preserved image records. Tweet references identify the associated records; image files can be opened at their original resolution.</p></div>
          <div><h3>INTERPRETATION</h3><p>Explanations offered by the user or the model are interpretations. Public experiment reports are contemporaneous self-documentation, not independent validation.</p></div>
          <div><h3>NOT PROVEN</h3><p>These records do not establish the model’s hidden causal process, persistent hidden memory, independent agency or platform-wide uniqueness.</p></div>
        </div>
        <blockquote className="pxLibraryCaveat">The archive can document the sequence. It cannot tell us why the model chose to generate the image.</blockquote>
        <p className="pxLibrarySource">This page presents the 21 images supplied for the collection. It does not provide the full raw X archive or an independent verification of every source claim.</p>
        <div className="pxLibraryLimitGrid">
          <div><h3>CITE THIS RECORD</h3><p>BJ Beyond, <em>The Phoenix Experiment — Evidence Room</em>, 2026. https://bjbeyond.it/phoenix-experiment/</p></div>
          <div><h3>PRESS / RESEARCH</h3><p>For source questions, archive context or interview requests: <a href="mailto:Bj_beyond@tutamail.com">Bj_beyond@tutamail.com</a>.</p></div>
          <div><h3>CANONICAL RULE</h3><p>Cite observed archive events as documented. Treat model-side explanations and rarity claims as interpretation unless separately verified.</p></div>
        </div>
        <div className="pxActions"><Link href="/#phoenix" className="pxPrimary">BACK TO THE PROJECT</Link><a href="https://hackernoon.com/u/bj_beyond" target="_blank" rel="noopener noreferrer" className="pxSecondary">BJ BEYOND ON HACKERNOON ↗</a></div>
      </section>
      <footer className="pxFooter pxShell"><span>BJ BEYOND™</span><span>PHOENIX EXPERIMENT / EVIDENCE ROOM</span></footer>
    </main>
  );
}
