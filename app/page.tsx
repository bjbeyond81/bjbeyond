import type { Metadata } from 'next';
import './home-v2.css';
import { HomeMotion } from './HomeMotion';
import { IntroProvider } from '@/components/chrome/Intro';
import { Navigation } from '@/components/chrome/Navigation';
import { Footer } from '@/components/sections/Footer';
import { SiteSchema } from '@/components/chrome/SiteSchema';
import { CONTACT, WRITING } from '@/lib/content';
import { metadataFor } from '@/lib/routes';
import { siteSchema } from '@/lib/schema';
import { PHOENIX } from '@/lib/phoenix';

const description = 'BJ Beyond is an independent writer exploring art, AI and human judgment through Human Edge, the Phoenix Experiment and public inquiry.';
const title = 'BJ Beyond — Independent Writer | Art, AI & Human Judgment';
const baseMetadata = metadataFor('/');
export const metadata: Metadata = {
  ...baseMetadata, title: { absolute: title }, description,
  keywords: ['BJ Beyond', 'Human Edge', 'Phoenix Experiment', 'human judgment', 'authorship', 'contemporary art', 'artificial intelligence'],
  openGraph: { ...baseMetadata.openGraph, title, description },
  twitter: { ...baseMetadata.twitter, title, description },
};
const schema = siteSchema();
const homeSchema = { ...schema, '@graph': schema['@graph'].map(node => {
  if (node['@type'] === 'Person') return { ...node, jobTitle: 'Independent writer', description };
  if (node['@type'] === 'WebSite') return { ...node, description };
  return { ...node, '@type': 'Organization', description, knowsAbout: ['Human Edge', 'human judgment', 'authorship', 'contemporary art', 'Phoenix Experiment', 'artificial intelligence'] };
}) };
const quote = 'The biggest lie of the AI era? Believing that anyone who knows how to hit ‘enter’ will become an author, a designer, or a thinker.';
const tests = ['Soul', 'Edge', 'Clarity', 'Impact', 'Legacy'];
const articles = [...WRITING.articles].sort((a, b) => b.published.localeCompare(a.published));
const inquiries = [
  { n: '01', title: 'Human Edge', text: 'Judgment, authorship and responsibility when machines generate the answers.', words: 'THINKING / AI / AUTHORSHIP', href: '/human-edge/' },
  { n: '02', title: 'Phoenix', text: 'A recovered record and a question: what can we verify when AI explains its own response?', words: 'EXPERIMENT / GROK / EVIDENCE', href: '/phoenix-experiment/' },
  { n: '03', title: 'Art & Meaning', text: 'Contemporary art, provenance and the human decisions behind cultural value.', words: 'ART / PROVENANCE / VALUE', href: '/art/' },
];
function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span aria-hidden="true" className="edge-arrow">{diagonal ? '↗' : '→'}</span>; }
export default function HomePage() {
  return <IntroProvider curtain={false}><SiteSchema data={homeSchema} /><HomeMotion /><Navigation /><main id="main" className="edge-home">
    <section className="edge-hero" aria-labelledby="hero-title">
      <img className="edge-hero-image" src="/media/hero-1920.webp" srcSet="/media/hero-768.webp 768w, /media/hero-1280.webp 1280w, /media/hero-1920.webp 1920w, /media/hero-2560.webp 2560w" sizes="100vw" width="3808" height="2144" alt="" fetchPriority="high" />
      <div className="edge-hero-shade" />
      <div className="edge-wrap edge-hero-content">
        <p className="edge-label edge-hero-label"><span className="edge-dot" /> BJ BEYOND / INDEPENDENT WRITER</p>
        <h1 id="hero-title">One step beyond.<br /><em>Always human.</em></h1>
        <div className="edge-hero-bottom"><div><p className="edge-hero-description">Art, AI and authorship.<br />Essays and experiments on<br /><strong>human judgment.</strong></p><a href="/writing/" className="edge-button">Read the work <Arrow diagonal /></a></div><a href="#thesis" className="edge-scroll"><span>THE HUMAN EDGE</span><span aria-hidden="true">↓</span></a></div>
      </div>
      <div className="edge-hero-caption edge-label"><span>BJ BEYOND — VERONA, ITALY</span><span>ART × AI × HUMAN JUDGMENT</span></div>
    </section>
    <section id="thesis" className="edge-thesis edge-wrap">
      <p className="edge-label">01 / THE HUMAN EDGE</p>
      <div className="edge-thesis-grid"><h2>Machines generate.<br />People <em>give meaning.</em></h2><div className="edge-thesis-copy"><p>AI can generate. Data can measure. Judgment decides what matters.</p><p>I’m BJ Beyond, an independent writer based in Verona, Italy. I explore how AI changes the way we think, create and assign value—and what it means to remain responsible for our own judgments.</p><div className="edge-thesis-links"><a href="/human-edge/" className="edge-text-link">Read the Human Edge thesis <Arrow /></a><a href="/about/" className="edge-text-link">Meet BJ Beyond <Arrow /></a></div></div></div>
      <div className="edge-disciplines"><span>Contemporary art & authorship</span><span>Public experiments</span><span>AI & human judgment</span></div>
    </section>
    <section className="edge-manifesto" aria-labelledby="manifesto-label"><div className="edge-wrap edge-manifesto-inner"><p id="manifesto-label" className="edge-label">THE MANIFESTO</p><span className="edge-quote-symbol" aria-hidden="true">“</span><blockquote>{quote}</blockquote><div className="edge-manifesto-sign"><span className="edge-label">BJ BEYOND</span><span className="edge-label">THE HUMAN EDGE, IN ONE SENTENCE.</span></div></div></section>
    <section id="selected" className="edge-selected edge-wrap">
      <div className="edge-section-heading"><div><p className="edge-label">02 / SELECTED WORK</p><h2>Ideas, <em>put to the test.</em></h2></div><a href="/labs/" className="edge-text-link">All experiments <Arrow diagonal /></a></div>
      <article id="phoenix" className="edge-phoenix"><div className="edge-phoenix-art"><img src="/media/labs/phoenix-1280.webp" srcSet="/media/labs/phoenix-768.webp 768w, /media/labs/phoenix-1280.webp 1280w, /media/labs/phoenix-1920.webp 1920w" sizes="(max-width: 760px) 100vw, 60vw" width="1280" height="720" alt="Phoenix with metallic wings and orange embers" loading="lazy" /><span className="edge-label edge-image-label">PHOENIX / HUMAN–AI EXPERIMENT</span></div><div className="edge-phoenix-copy"><p className="edge-label">FEATURED CASE STUDY</p><h3>The Phoenix<br /><em>Experiment.</em></h3><p>A text-only reply in an existing thread. Phoenix images across later exchanges. A recovered archive that lets us revisit what happened.</p><p>{PHOENIX.caveat}</p><p className="edge-label">REPORT SUBMITTED TO HACKERNOON / IN EDITORIAL REVIEW</p><div className="edge-phoenix-links"><a href="/phoenix-experiment/" className="edge-text-link">Explore the Evidence Room <Arrow /></a><a href={WRITING.profile} target="_blank" rel="noopener noreferrer" className="edge-text-link">BJ Beyond on HackerNoon <Arrow diagonal /></a></div><div className="edge-tags"><span>RECOVERED ARCHIVE</span><span>HUMAN JUDGMENT</span></div></div></article>
      <div className="edge-projects"><a href="/method/" className="edge-project"><div className="edge-project-image"><img src="/media/terrace-1024.webp" alt="Mist over still water from a terrace" width="1024" height="520" loading="lazy" /><span className="edge-project-index">01 / THE METHOD</span><span className="edge-project-arrow"><Arrow diagonal /></span></div><div className="edge-project-body"><h3>Phoenix Soulfire™</h3><p>Five tests before an idea is trusted.</p><div className="edge-tests">{tests.map(test => <span key={test}>{test}</span>)}</div></div></a>
      <a href="/phoenix/" className="edge-project"><div className="edge-project-image edge-signal" aria-hidden="true"><div className="edge-signal-grid" /><div className="edge-signal-ring ring-one" /><div className="edge-signal-ring ring-two" /><div className="edge-signal-ring ring-three" /><span className="edge-signal-core">PHX<span>RANKING SIMULATOR</span></span><span className="edge-project-index">02 / THE SYSTEM</span><span className="edge-project-arrow"><Arrow diagonal /></span></div><div className="edge-project-body"><h3>Phoenix Simulator</h3><p>Explore the signals that shape distribution.</p><span className="edge-label">OPEN THE INTERACTIVE LAB <Arrow /></span></div></a></div>
    </section>
    <section id="art" className="edge-art"><div className="edge-art-image"><img src="/media/nocturne-1600.webp" alt="" width="1600" height="812" loading="lazy" /></div><div className="edge-wrap edge-art-content"><p className="edge-label">03 / ART, VALUE & PROVENANCE</p><h2>Images are infinite.<br /><em>Meaning is not.</em></h2><p>Authorship. Provenance. The human story behind value.<br />What makes a work worth remembering when images are everywhere?</p><a href="/art/" className="edge-button">Explore art & provenance <Arrow diagonal /></a><a href="https://verify.authentia.it/" target="_blank" rel="noopener noreferrer" className="edge-art-note edge-label">WITH AUTHENTIA ARTE — VERIFIABLE AUTHORSHIP <Arrow diagonal /></a></div></section>
    <section id="writing" className="edge-writing edge-wrap"><div className="edge-section-heading"><div><p className="edge-label">04 / SELECTED WRITING</p><h2>Curiosity. <em>On the record.</em></h2></div><div className="edge-heading-links"><a href="/writing/" className="edge-text-link">All writing <Arrow /></a><a href="/writing/claude-opus-5-vs-pangram/" className="edge-text-link">Claude Opus 5 vs Pangram: my public test <Arrow /></a><a href={WRITING.profile} target="_blank" rel="noopener noreferrer" className="edge-text-link">HackerNoon <Arrow diagonal /></a></div></div>
      <div className="edge-articles">{articles.map(article => <a key={article.slug} href={article.href} target="_blank" rel="noopener noreferrer" className="edge-article"><div className="edge-article-body"><p className="edge-label">{article.topics[0]} <time dateTime={article.published}>{article.published.split("-").reverse().join(".")}</time></p><h3>{article.title}</h3><p>{article.standfirst}</p><span className="edge-article-link">Read the story <Arrow diagonal /></span></div></a>)}</div>
    </section>
    <section id="work" className="edge-capabilities edge-wrap"><div className="edge-section-heading"><div><p className="edge-label">05 / LINES OF INQUIRY</p><h2>Questions worth <em>pursuing.</em></h2></div><a href="/about/" className="edge-text-link">About BJ Beyond <Arrow diagonal /></a></div><div className="edge-capability-list">{inquiries.map(item=><a href={item.href} className="edge-capability" key={item.n}><span className="edge-label">{item.n}</span><h3>{item.title}</h3><div><p>{item.text}</p><span className="edge-label">{item.words}</span></div><Arrow diagonal /></a>)}</div></section>
    <section id="contact" className="edge-contact"><div className="edge-wrap"><p className="edge-label"><span className="edge-dot" /> READ. QUESTION. DISCUSS.</p><div className="edge-contact-row"><h2>Read the work.<br /><em>Join the conversation.</em></h2><a href={`mailto:${CONTACT.emails[0].address}`} className="edge-contact-button" aria-label="Contact BJ Beyond by email"><Arrow diagonal /></a></div><div className="edge-contact-services"><a href="/writing/">READ THE WORK <Arrow /></a><a href="/phoenix-experiment/">EXAMINE THE EVIDENCE <Arrow /></a><a href="https://x.com/Bj_Beyond">JOIN THE CONVERSATION <Arrow /></a></div><div className="edge-contact-bottom"><a href={`mailto:${CONTACT.emails[0].address}`}>{CONTACT.emails[0].address}</a><span className="edge-label">VERONA, ITALY / OPEN TO THE WORLD</span></div></div></section>
  </main><Footer /></IntroProvider>;
}
