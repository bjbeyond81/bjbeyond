import './home-v2.css';
import { HomeMotion } from './HomeMotion';
import { IntroProvider } from '@/components/chrome/Intro';
import { Navigation } from '@/components/chrome/Navigation';
import { Footer } from '@/components/sections/Footer';
import { SiteSchema } from '@/components/chrome/SiteSchema';
import { CONTACT, WRITING } from '@/lib/content';
const quote = 'The biggest lie of the AI era? Believing that anyone who knows how to hit ‘enter’ will become an author, a designer, or a thinker.';
const tests = ['Soul', 'Edge', 'Clarity', 'Impact', 'Legacy'];
const articles = [...WRITING.articles].sort((a, b) => b.published.localeCompare(a.published));
const capabilities = [
  { n: '01', title: 'Intelligence', text: 'Art market research. Evidence that brings the bigger picture into focus.', words: 'RESEARCH / ART / VALUE' },
  { n: '02', title: 'Systems', text: 'Power BI, dashboards and data architecture. Complexity, made useful.', words: 'DATA / POWER BI / DECISIONS' },
  { n: '03', title: 'Human Edge', text: 'AI strategy and creative workflows. A human decision at the centre.', words: 'AI / STRATEGY / JUDGMENT' },
];
function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="edge-arrow">{diagonal ? '↗' : '→'}</span>; }
export default function HomePage() {
  return <IntroProvider curtain={false}><SiteSchema /><HomeMotion /><Navigation /><main id="main" className="edge-home">
    <section className="edge-hero" aria-labelledby="hero-title">
      <img className="edge-hero-image" src="/media/hero-1920.webp" srcSet="/media/hero-768.webp 768w, /media/hero-1280.webp 1280w, /media/hero-1920.webp 1920w, /media/hero-2560.webp 2560w" sizes="100vw" width="3808" height="2144" alt="" fetchPriority="high" />
      <div className="edge-hero-shade" />
      <div className="edge-wrap edge-hero-content">
        <p className="edge-label edge-hero-label"><span className="edge-dot" /> INDEPENDENT THINKING. REAL IMPACT.</p>
        <h1 id="hero-title">One step beyond.<br /><em>Always human.</em></h1>
        <div className="edge-hero-bottom"><div><p className="edge-hero-description">Art, data and AI.<br />Connected by the one thing you can’t automate:<br /><strong>human judgment.</strong></p><a href="#selected" className="edge-button">Explore the work <Arrow diagonal /></a></div><a href="#thesis" className="edge-scroll"><span>THE HUMAN EDGE</span><span aria-hidden="true">↓</span></a></div>
      </div>
      <div className="edge-hero-caption edge-label"><span>BJ BEYOND — VERONA, ITALY</span><span>ART × DATA × HUMAN EDGE</span></div>
    </section>
    <section id="thesis" className="edge-thesis edge-wrap">
      <p className="edge-label">01 / A POINT OF VIEW</p>
      <div className="edge-thesis-grid"><h2>Machines generate.<br />People <em>give meaning.</em></h2><div className="edge-thesis-copy"><p>AI can generate. Data can measure. Judgment decides what matters.</p><p>I work at the intersection of art, data and human intuition — building tools, questioning systems and keeping the human decision in the picture.</p><a href="/about/" className="edge-text-link">Meet BJ Beyond <Arrow /></a></div></div>
      <div className="edge-disciplines"><span>Art market intelligence</span><span>Data & decision systems</span><span>AI + human judgment</span></div>
    </section>
    <section className="edge-manifesto" aria-labelledby="manifesto-label"><div className="edge-wrap edge-manifesto-inner"><p id="manifesto-label" className="edge-label">THE MANIFESTO</p><span className="edge-quote-symbol" aria-hidden="true">“</span><blockquote>{quote}</blockquote><div className="edge-manifesto-sign"><span className="edge-label">BJ BEYOND</span><span className="edge-label">THE HUMAN EDGE, IN ONE SENTENCE.</span></div></div></section>
    <section id="selected" className="edge-selected edge-wrap">
      <div className="edge-section-heading"><div><p className="edge-label">02 / SELECTED WORK</p><h2>Ideas, <em>put to the test.</em></h2></div><a href="/labs/" className="edge-text-link">All experiments <Arrow diagonal /></a></div>
      <article id="phoenix" className="edge-phoenix"><div className="edge-phoenix-art"><img src="/media/labs/phoenix-1280.webp" srcSet="/media/labs/phoenix-768.webp 768w, /media/labs/phoenix-1280.webp 1280w, /media/labs/phoenix-1920.webp 1920w" sizes="(max-width: 760px) 100vw, 60vw" width="1280" height="720" alt="Phoenix with metallic wings and orange embers" loading="lazy" /><span className="edge-label edge-image-label">PHOENIX / HUMAN–AI EXPERIMENT</span></div><div className="edge-phoenix-copy"><p className="edge-label">FEATURED INVESTIGATION</p><h3>The Phoenix<br /><em>Experiment.</em></h3><p>What happens when the human keeps asking questions the system wasn’t built to answer?</p><p>Browse the preserved records behind the experiment: dated posts, screenshots and source limitations.</p><div className="edge-phoenix-links"><a href="/phoenix-experiment/" className="edge-text-link">Explore the Evidence Room <Arrow /></a><a href={WRITING.profile} target="_blank" rel="noopener noreferrer" className="edge-text-link">BJ Beyond on HackerNoon <Arrow diagonal /></a></div><div className="edge-tags"><span>HUMAN-IN-THE-LOOP</span><span>GROK</span></div></div></article>
      <div className="edge-projects"><a href="/method/" className="edge-project"><div className="edge-project-image"><img src="/media/terrace-1024.webp" alt="Mist over still water from a terrace" width="1024" height="520" loading="lazy" /><span className="edge-project-index">01 / THE METHOD</span><span className="edge-project-arrow"><Arrow diagonal /></span></div><div className="edge-project-body"><h3>Phoenix Soulfire™</h3><p>Five tests before an idea is trusted.</p><div className="edge-tests">{tests.map(test => <span key={test}>{test}</span>)}</div></div></a>
      <a href="/phoenix/" className="edge-project"><div className="edge-project-image edge-signal" aria-hidden="true"><div className="edge-signal-grid" /><div className="edge-signal-ring ring-one" /><div className="edge-signal-ring ring-two" /><div className="edge-signal-ring ring-three" /><span className="edge-signal-core">PHX<span>RANKING SIMULATOR</span></span><span className="edge-project-index">02 / THE SYSTEM</span><span className="edge-project-arrow"><Arrow diagonal /></span></div><div className="edge-project-body"><h3>Phoenix Simulator</h3><p>Explore the signals that shape distribution.</p><span className="edge-label">OPEN THE INTERACTIVE LAB <Arrow /></span></div></a></div>
    </section>
    <section id="art" className="edge-art"><div className="edge-art-image"><img src="/media/nocturne-1600.webp" alt="" width="1600" height="812" loading="lazy" /></div><div className="edge-wrap edge-art-content"><p className="edge-label">03 / ART, VALUE & PROVENANCE</p><h2>Images are infinite.<br /><em>Meaning is not.</em></h2><p>Authorship. Provenance. The human story behind value.<br />Art intelligence for a world that can generate anything.</p><a href="/art/" className="edge-button">Explore art & provenance <Arrow diagonal /></a><a href="https://verify.authentia.it/" target="_blank" rel="noopener noreferrer" className="edge-art-note edge-label">WITH AUTHENTIA ARTE — VERIFIABLE AUTHORSHIP <Arrow diagonal /></a></div></section>
    <section id="writing" className="edge-writing edge-wrap"><div className="edge-section-heading"><div><p className="edge-label">04 / FIELD NOTES</p><h2>Curiosity. <em>On the record.</em></h2></div><a href={WRITING.profile} target="_blank" rel="noopener noreferrer" className="edge-text-link">Read on HackerNoon <Arrow diagonal /></a></div>
      <div className="edge-articles">{articles.map(article => <a key={article.slug} href={article.href} target="_blank" rel="noopener noreferrer" className="edge-article"><div className="edge-article-body"><p className="edge-label">{article.topics[0]} <time dateTime={article.published}>{article.published.split("-").reverse().join(".")}</time></p><h3>{article.title}</h3><p>{article.standfirst}</p><span className="edge-article-link">Read the story <Arrow diagonal /></span></div></a>)}</div>
    </section>
    <section id="work" className="edge-capabilities edge-wrap"><div className="edge-section-heading"><div><p className="edge-label">05 / WORK WITH ME</p><h2>A sharper way <em>forward.</em></h2></div><a href="/services/" className="edge-text-link">Explore capabilities <Arrow diagonal /></a></div><div className="edge-capability-list">{capabilities.map(item=><a href="/services/" className="edge-capability" key={item.n}><span className="edge-label">{item.n}</span><h3>{item.title}</h3><div><p>{item.text}</p><span className="edge-label">{item.words}</span></div><Arrow diagonal /></a>)}</div></section>
    <section id="contact" className="edge-contact"><div className="edge-wrap"><p className="edge-label"><span className="edge-dot" /> LET’S BUILD SOMETHING THAT MATTERS.</p><div className="edge-contact-row"><h2>Your next idea.<br /><em>One step beyond.</em></h2><a href={`mailto:${CONTACT.emails[0].address}`} className="edge-contact-button" aria-label="Start a conversation by email"><Arrow diagonal /></a></div><div className="edge-contact-bottom"><a href={`mailto:${CONTACT.emails[0].address}`}>{CONTACT.emails[0].address}</a><span className="edge-label">VERONA, ITALY / OPEN TO THE WORLD</span></div></div></section>
  </main><Footer /></IntroProvider>;
}
