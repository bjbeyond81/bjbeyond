import Link from 'next/link';
import './phoenix-experiment.css';

export const metadata = {
  title: 'The Phoenix Experiment — Evidence Room',
  alternates: { canonical: '/phoenix-experiment/' },
  description:
    'A primary-source reconstruction of Human Edge, Phoenix Soulfire, Grok stress tests and the August 2026 Phoenix sequence.',
};

const timeline = [
  {
    date: '07 MAR 2026',
    label: 'HUMAN EDGE',
    title: 'Before Phoenix, there was a boundary.',
    body:
      'Human Edge appears in the archive before Phoenix Soulfire exists by name: contextual intuition, accountability, anomaly detection and creative judgment remain human responsibilities.',
    image: '/phoenix-experiment/03_human_edge_march7.jpg',
    evidence: 'Tweet 2030076011002700079 · 00:20:12 UTC',
  },
  {
    date: '24 MAR 2026',
    label: 'PHOENIX + SOUL',
    title: 'The generator makes the form. The human decides why it matters.',
    body:
      'Phoenix imagery, AI generation, curation and the language of soul converge publicly. The post shifts value away from generation speed toward story, vision and human curation.',
    image: '/phoenix-experiment/04_phoenix_march24_original.jpg',
    evidence: 'Tweet 2036500369988268538 · 17:48:19 UTC',
  },
  {
    date: '06 APR 2026',
    label: 'PHOENIX SOULFIRE',
    title: 'The experiment gets a name.',
    body:
      'Human Edge Lab — Episode 3 introduces Phoenix Soulfire. Later the same day it is described as a live multimodal human–AI co-creation experiment with Human-in-the-Loop.',
    image: '/phoenix-experiment/06_phoenix_soulfire_ep3_frame.jpg',
    evidence: 'Tweets 2041129633865773476 + 2041240386832629772',
  },
  {
    date: '07–08 APR 2026',
    label: 'PUBLIC REPORTING',
    title: 'The experiment becomes a record.',
    body:
      'Public reports document the iterative project across multiple episodes. Their metrics remain contemporaneous self-documentation, not independent validation.',
    image: '/phoenix-experiment/10_final_report_apr8.jpg',
    evidence: 'Tweets 2041585506031378691 + 2041972930955894895',
  },
  {
    date: '23–26 MAY 2026',
    label: 'STRESS TESTS',
    title: 'Failure becomes data.',
    body:
      'The project shifts from co-creation into adversarial testing: attribution traps and a near-blank image probe test whether suggestive text can override factual or visual evidence.',
    image: '/phoenix-experiment/11_red_monochrome_test.jpg',
    evidence: 'Prompt-dominance and attribution tests preserved in the X archive',
  },
  {
    date: '02 AUG 2026',
    label: 'THE SIGNAL',
    title: 'A text-only call.',
    body:
      'At 22:31:48 UTC, the preserved deleted tweet reads: “@grok it’s time to reborn phoenix.” The archived post contains no explicit instruction to generate an image.',
    image: '/phoenix-experiment/15_aug2_signal.jpg',
    evidence: 'Deleted Tweet 2084044521751429180',
  },
];

const claims = [
  {
    type: 'DOCUMENTED',
    title: 'What the archive can establish',
    items: [
      'Human Edge predates Phoenix Soulfire.',
      'Phoenix, AI generation, soul and curation converge publicly by March 24.',
      'Phoenix Soulfire is explicitly named on April 6 and described as Human-in-the-Loop.',
      'May contains deliberate Grok text–vision stress tests.',
      'The August 2 initiating post is text-only and contains no explicit image-generation request.',
      'The August 3 deleted post preserves three Phoenix image attachments.',
    ],
  },
  {
    type: 'INTERPRETATION',
    title: 'What belongs to model/user framing',
    items: [
      'Grok’s later language about a strong “signal”.',
      '“No formal request needed” as Grok’s retrospective description.',
      'The idea that months of repeated Phoenix language influenced the response.',
    ],
  },
  {
    type: 'NOT PROVEN',
    title: 'What the archive cannot establish',
    items: [
      'Consciousness, free will or independent agency.',
      'Persistent hidden memory at the system level.',
      'The exact hidden inference chain.',
      'Platform-wide rarity or uniqueness relative to other users.',
      'Why image generation was selected.',
    ],
  },
];

export default function PhoenixExperimentPage() {
  return (
    <main id="main" className="px">
      <div className="pxAmbient pxA" />
      <div className="pxAmbient pxB" />

      <header className="pxNav pxShell">
        <Link href="/" className="pxBrand">BJ BEYOND™</Link>
        <nav>
          <a href="#timeline">TIMELINE</a>
          <a href="#august">AUGUST</a>
          <a href="#evidence">EVIDENCE</a>
          <a href="#method">METHOD</a>
        </nav>
        <Link href="/" className="pxBack">← HOME</Link>
      </header>

      <section className="pxHero pxShell">
        <div className="pxEyebrow"><span /> PRIMARY SOURCE RECORD · 2026</div>
        <h1>THE PHOENIX<br/><em>EXPERIMENT</em></h1>
        <p className="pxDeck">Evidence Room — a forensic reconstruction of Human Edge, Phoenix Soulfire, public Grok stress tests and the visual sequence that followed a text-only call.</p>
        <div className="pxHeroMeta">
          <span>HUMAN EDGE</span><i/><span>PHOENIX SOULFIRE™</span><i/><span>GROK</span><i/><span>X ARCHIVE</span>
        </div>
        <figure className="pxCover">
          <img src="/phoenix-experiment/01_cover.jpg" alt="Phoenix Experiment archive cover" />
        </figure>
      </section>

      <section className="pxStatement pxShell">
        <span className="pxIndex">00 / THESIS</span>
        <blockquote>
          Human Edge was the hypothesis.<br/>
          Phoenix Soulfire was the experiment.<br/>
          <strong>The archive is the record.</strong>
        </blockquote>
      </section>

      <section id="timeline" className="pxTimeline pxShell">
        <span className="pxIndex">01 / TIMELINE</span>
        <div className="pxTimelineList">
          {timeline.map((x, idx) => (
            <article className="pxMoment" key={x.date}>
              <div className="pxMomentMeta">
                <span className="pxNum">{String(idx + 1).padStart(2, '0')}</span>
                <span>{x.date}</span>
                <b>{x.label}</b>
              </div>
              <div className="pxMomentCopy">
                <h2>{x.title}</h2>
                <p>{x.body}</p>
                <small>{x.evidence}</small>
              </div>
              <figure><img src={x.image} alt="" /></figure>
            </article>
          ))}
        </div>
      </section>

      <section id="august" className="pxAugust pxShell">
        <span className="pxIndex">02 / AUGUST SEQUENCE</span>
        <div className="pxAugustHead">
          <div>
            <span className="pxStatus">● PRIMARY ARCHIVE</span>
            <h2>THE TEXT-ONLY<br/><em>CALL.</em></h2>
          </div>
          <blockquote>“@grok it’s time to reborn phoenix”</blockquote>
        </div>

        <div className="pxSignalGrid">
          <figure><img src="/phoenix-experiment/15_aug2_signal.jpg" alt="Archived August 2 text-only Grok call" /></figure>
          <div className="pxSignalCopy">
            <h3>What is narrow enough to prove?</h3>
            <p>The preserved initiating post contains no explicit request to draw, generate, imagine or create an image. That is the strongest factual claim the archive supports without interpretation.</p>
            <div className="pxRecord">Deleted Tweet 2084044521751429180<br/>2026-08-02 · 22:31:48 UTC</div>
          </div>
        </div>

        <div className="pxReplies">
          <div className="pxRepliesIntro">
            <span className="pxStatus">A2 / ARCHIVE-PRESERVED MEDIA</span>
            <h2>THREE PRESERVED<br/><em>PHOENIX REPLIES.</em></h2>
            <p>An August 3 deleted post carries three image attachments that survive in the X archive. The screenshots document the replies; they do not reveal the model’s hidden causal chain.</p>
          </div>
          <div className="pxReplyGrid">
            {[
              ['/phoenix-experiment/17_phoenix_reply_1.jpg','01'],
              ['/phoenix-experiment/18_phoenix_reply_2.jpg','02'],
              ['/phoenix-experiment/19_phoenix_reply_3.jpg','03'],
            ].map(([src,n]) => (
              <figure key={src}><img src={src} alt={`Preserved Phoenix reply ${n}`} /><figcaption>ARCHIVED REPLY {n}</figcaption></figure>
            ))}
          </div>
        </div>
      </section>

      <section className="pxCaveat pxShell">
        <span className="pxIndex">03 / THE LINE THAT MATTERS</span>
        <blockquote>
          The archive can document the sequence.
          <strong> It cannot tell us why the model chose to generate the image.</strong>
        </blockquote>
      </section>

      <section id="evidence" className="pxEvidence pxShell">
        <span className="pxIndex">04 / EVIDENCE DISCIPLINE</span>
        <div className="pxClaimGrid">
          {claims.map((c) => (
            <article className={`pxClaim ${c.type.toLowerCase().replace(' ','')}`} key={c.type}>
              <span>{c.type}</span>
              <h3>{c.title}</h3>
              <ul>{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="pxStress pxShell">
        <span className="pxIndex">05 / FAILURE AS DATA</span>
        <div className="pxStressHead">
          <h2>MAY WAS NOT<br/><em>A VICTORY LAP.</em></h2>
          <p>The project actively looked for failure. Prompt-dominance and attribution tests were published because a useful human–AI system needs evidence of where the model can be led, confused or overconfident.</p>
        </div>
        <div className="pxStressGrid">
          <figure><img src="/phoenix-experiment/11_red_monochrome_test.jpg" alt="Near-blank red monochrome prompt dominance test" /><figcaption>VISUAL CONFLICT TEST</figcaption></figure>
          <figure><img src="/phoenix-experiment/12_kostabi_test.jpg" alt="Attribution stress test" /><figcaption>ATTRIBUTION TEST</figcaption></figure>
          <figure><img src="/phoenix-experiment/14_data_offer_xai.jpg" alt="Offer to provide experiment materials to xAI" /><figcaption>DATA OFFER / XAI</figcaption></figure>
        </div>
      </section>

      <section id="method" className="pxMethod pxShell">
        <span className="pxIndex">06 / METHODOLOGY</span>
        <div className="pxMethodGrid">
          <div>
            <h2>PRIMARY SOURCE<br/><em>BEFORE STORY.</em></h2>
          </div>
          <div>
            <p>Primary claims are grounded in the official X archive generated on 16 August 2026. The archive manifest marks the export as non-partial.</p>
            <dl>
              <div><dt>A1</dt><dd>Structured archive records: tweet IDs, timestamps, deleted records, Grok chats.</dd></div>
              <div><dt>A2</dt><dd>Media preserved inside the archive: screenshots, images and video.</dd></div>
              <div><dt>B</dt><dd>Contemporaneous self-report published while the experiment was running.</dd></div>
              <div><dt>C</dt><dd>Later interpretation, including Grok’s retrospective framing.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="pxArchive pxShell">
        <span className="pxIndex">07 / ARCHIVE STATUS</span>
        <div className="pxStats">
          <div><strong>3,119</strong><span>ACTIVE TWEETS</span></div>
          <div><strong>3,276</strong><span>DELETED TWEETS</span></div>
          <div><strong>7,656</strong><span>GROK CHAT ITEMS</span></div>
          <div><strong>16 AUG</strong><span>ARCHIVE GENERATED</span></div>
        </div>
        <figure className="pxManifest"><img src="/phoenix-experiment/02_archive_manifest.jpg" alt="X archive manifest evidence card" /></figure>
      </section>

      <section className="pxArchive pxShell" aria-labelledby="additional-evidence">
        <span className="pxIndex">SUPPLEMENTARY ARCHIVE MEDIA</span>
        <h2 id="additional-evidence">Additional preserved evidence</h2>
        <div className="pxStressGrid">
          {[
              ['/phoenix-experiment/05_phoenix_march24_text.jpg', 'Phoenix March24 Text'],
              ['/phoenix-experiment/07_phoenix_soulfire_apr6_text.jpg', 'Phoenix Soulfire Apr6 Text'],
              ['/phoenix-experiment/08_human_in_loop_original.jpg', 'Human In Loop Original'],
              ['/phoenix-experiment/09_human_in_loop_text.jpg', 'Human In Loop Text'],
              ['/phoenix-experiment/13_red_bias_summary.jpg', 'Red Bias Summary'],
              ['/phoenix-experiment/16_aug3_record.jpg', 'Aug3 Record'],
              ['/phoenix-experiment/20_reborn_aug5.jpg', 'Reborn Aug5'],
              ['/phoenix-experiment/21_unitedpeople_aug8.jpg', 'Unitedpeople Aug8'],
          ].map(([src, label]) => (
            <figure key={src}>
              <a href={src} target="_blank" rel="noreferrer"><img src={src} alt={label} loading="lazy" /></a>
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pxClose pxShell">
        <span className="pxEyebrow"><span /> HUMAN JUDGMENT LAYER</span>
        <h2>THE STRONGEST VERSION<br/>OF THE STORY IS<br/><em>FORENSIC.</em></h2>
        <p>The record matters because it lets the observed event survive independently of the mythology built around it.</p>
        <div className="pxActions">
          <Link href="/" className="pxPrimary">BACK TO BJ BEYOND</Link>
          <a href="https://hackernoon.com/u/bj_beyond" target="_blank" rel="noreferrer" className="pxSecondary">READ ON HACKERNOON ↗</a>
        </div>
      </section>

      <footer className="pxFooter pxShell">
        <span>BJ BEYOND™</span>
        <span>THE PHOENIX EXPERIMENT · PRIMARY SOURCE RECORD · 2026</span>
      </footer>
    </main>
  );
}
