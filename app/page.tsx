import './home-v2.css';
import { IntroProvider } from '@/components/chrome/Intro';
import { Navigation } from '@/components/chrome/Navigation';
import { Footer } from '@/components/sections/Footer';
import { SiteSchema } from '@/components/chrome/SiteSchema';
import { CONTACT } from '@/lib/content';

const proof = [
  ['3,119', 'ARCHIVED TWEETS'],
  ['7,656', 'GROK CHAT RECORDS'],
  ['3,276', 'DELETED TWEETS PRESERVED'],
  ['5', 'PHOENIX SOULFIRE™ TESTS'],
];

const experiments = [
  {
    n: '01',
    kicker: 'FLAGSHIP EXPERIMENT',
    title: 'The Phoenix Experiment',
    body: 'A documented human–AI experiment built from primary X archive records, recovered media, public tests and Human-in-the-Loop analysis.',
    href: '#evidence',
    cta: 'EXPLORE THE RECORD',
  },
  {
    n: '02',
    kicker: 'JUDGMENT LAYER',
    title: 'Phoenix Soulfire™',
    body: 'Five tests before a text, a work or a plan is trusted: Soul, Edge, Clarity, Impact and Legacy.',
    href: '/method/',
    cta: 'READ THE METHOD',
  },
  {
    n: '03',
    kicker: 'EXPERIMENTAL SYSTEM',
    title: 'Phoenix Simulator',
    body: 'A practical simulator exploring ranking logic, audience fit and the signals that shape distribution.',
    href: '/phoenix/',
    cta: 'OPEN THE LAB',
  },
];

const work = [
  ['INTELLIGENCE', 'Art market analysis, decision support and evidence-led research.'],
  ['SYSTEMS', 'Power BI, dashboards, reporting architecture and data workflows.'],
  ['HUMAN EDGE', 'AI strategy, judgment frameworks and human–AI collaboration design.'],
];

export default function HomePage() {
  return (
    <IntroProvider curtain={false}>
      <SiteSchema />
      <Navigation />
    <main id="main" className="bjv2">
      <div className="ambient ambientA" />
      <div className="ambient ambientB" />


      <section className="hero shell">
        <div className="eyebrow"><span /> ONE STEP BEYOND AI</div>
        <h1>WHERE AI<br/>CAPABILITY ENDS,<br/><em>HUMAN JUDGMENT</em><br/>BEGINS.</h1>
        <p className="heroCopy">Experiments, systems and intelligence at the intersection of AI, data, art and human judgment.</p>
        <div className="heroActions">
          <a href="#phoenix" className="primary">EXPLORE THE EVIDENCE <b>↗</b></a>
          <a href="#work" className="secondary">WORK WITH BJ BEYOND</a>
        </div>
        <div className="heroRail">
          <span>DATA</span><i /> <span>AI</span><i /> <span>HUMAN EDGE</span><i /> <span>CULTURE</span>
        </div>
      </section>

      <section id="thesis" className="manifesto shell sectionRule">
        <div className="sectionIndex">01 / THESIS</div>
        <div className="manifestoGrid">
          <h2>THE HUMAN<br/><em>EDGE.</em></h2>
          <div className="manifestoText">
            <p className="big">AI can generate.<br/>Data can measure.<br/><strong>Judgment decides what matters.</strong></p>
            <p>Human Edge is the principle behind BJ Beyond: use machines for scale, speed and pattern recognition — without surrendering taste, accountability, context or the final decision.</p>
          </div>
        </div>
      </section>

      <section className="lie shell">
        <div className="quoteMark">“</div>
        <blockquote>
          The biggest lie of the AI era? Believing that anyone who knows how to hit ‘enter’ will become an author, a designer, or a thinker.
        </blockquote>
        <p>— BJ BEYOND</p>
      </section>

      <section id="phoenix" className="phoenix shell sectionRule">
        <div className="sectionIndex">02 / FLAGSHIP CASE</div>
        <div className="phoenixStage">
          <div className="phoenixVisual" aria-hidden="true">
            <img src="/media/labs/phoenix-1280.webp" alt="" width="1280" height="720" className="phoenixImage" loading="lazy" />
          </div>
          <div className="phoenixCopy">
            <span className="status">HUMAN–AI / PHOENIX</span>
            <h2>THE PHOENIX<br/><em>EXPERIMENT</em></h2>
            <p>A documented human–AI experiment with Grok. From Human Edge and Phoenix Soulfire™ to recovered visual responses, stress tests and an archive that preserves what happened.</p>
            <div className="badges"><span>PRIMARY SOURCE</span><span>HUMAN-IN-THE-LOOP</span><span>MEDIA RECOVERED</span></div>
            <a href="#evidence" className="primary">EXPLORE THE RECORD <b>↗</b></a>
          </div>
        </div>
      </section>

      <section id="evidence" className="proof shell">
        <div className="proofIntro">
          <span className="sectionIndex">03 / RECORD</span>
          <h2>DOCUMENTED.<br/><em>NOT DECLARED.</em></h2>
          <p>Archive totals supplied for the Phoenix experiment. These counts describe the archive; they do not by themselves establish the interpretation of the experiment.</p>
        </div>
        <div className="proofGrid">
          {proof.map(([value, label]) => <div className="proofCard" key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="experiments shell sectionRule">
        <div className="sectionIndex">04 / SELECTED EXPERIMENTS</div>
        <div className="experimentList">
          {experiments.map((x) => (
            <article className="experiment" key={x.n}>
              <div className="num">{x.n}</div>
              <div><small>{x.kicker}</small><h3>{x.title}</h3></div>
              <p>{x.body}</p>
              <a href={x.href}>{x.cta} <b>↗</b></a>
            </article>
          ))}
        </div>
      </section>

      <section id="writing" className="writing shell sectionRule">
        <div className="sectionIndex">05 / FIELD NOTES & INVESTIGATIONS</div>
        <div className="writingHero">
          <div>
            <span className="status">LONG-FORM / HACKERNOON</span>
            <h2>THE PHOENIX EXPERIMENT:<br/><em>THE FULL STORY</em></h2>
          </div>
          <p>A recovered primary-source record of Human Edge, Grok and the visual response that became the centerpiece of the experiment.</p>
        </div>
        <div className="articleRow">
          <a href="https://hackernoon.com/u/bj_beyond" target="_blank" rel="noopener noreferrer">READ BJ BEYOND ON HACKERNOON <b>↗</b></a>
          <a href="https://hackernoon.com/when-the-system-flags-the-human-who-was-helping-it" target="_blank" rel="noopener noreferrer">WHEN THE SYSTEM FLAGS THE HUMAN WHO WAS HELPING IT <b>↗</b></a>
          <a href="https://hackernoon.com/system-zero-what-happens-when-ai-does-the-thinking-for-us" target="_blank" rel="noopener noreferrer">SYSTEM ZERO: WHAT HAPPENS WHEN AI DOES THE THINKING FOR US? <b>↗</b></a>
        </div>
      </section>

      <section className="art shell sectionRule">
        <div className="sectionIndex">06 / ART, VALUE & PROVENANCE</div>
        <div className="split">
          <h2>WHAT REMAINS<br/>VALUABLE WHEN<br/><em>IMAGES BECOME INFINITE?</em></h2>
          <div>
            <p>Art intelligence through the same lens: provenance, scarcity, authorship, evidence and the human story behind value.</p>
            <a href="/art/" className="secondary">EXPLORE ART & PROVENANCE</a>
          </div>
        </div>
      </section>

      <section id="work" className="work shell sectionRule">
        <div className="sectionIndex">07 / WORK</div>
        <a href="/services/" className="secondary">VIEW CAPABILITIES</a>
        <h2>THREE WAYS<br/><em>TO GO BEYOND.</em></h2>
        <div className="workGrid">
          {work.map(([title, body], i) => <div className="workCard" key={title}><small>0{i+1}</small><h3>{title}</h3><p>{body}</p></div>)}
        </div>
      </section>

      <section id="contact" className="closing shell">
        <span className="eyebrow"><span /> HUMAN JUDGMENT LAYER</span>
        <h2>DON’T OUTSOURCE<br/><em>THE JUDGMENT.</em></h2>
        <p>Build systems that use AI without surrendering the human decision layer.</p>
        <a className="primary" href={`mailto:${CONTACT.emails[0].address}`}>START A CONVERSATION <b>↗</b></a>
      </section>

    </main>
    <Footer />
    </IntroProvider>
  );
}
