import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Atmosphere } from '@/components/atmosphere/Atmosphere';
import { Reveal } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { metadataFor, absoluteUrl } from '@/lib/routes';
import { PERSON_ID, WEBSITE_ID } from '@/lib/schema';

const description = 'BJ Beyond is an independent writer based in Verona, Italy, exploring art, artificial intelligence, authorship and human judgment.';
const baseMetadata = metadataFor('/about/');
export const metadata: Metadata = {
  ...baseMetadata,
  description,
  openGraph: { ...baseMetadata.openGraph, description },
  twitter: { ...baseMetadata.twitter, description },
};

const sections = [
  {
    id: 'human-edge',
    title: 'The Human Edge',
    paragraphs: [
      'Human Edge is the central idea behind my work: the judgment we exercise when deciding what matters, what deserves scrutiny and what we are willing to put our name to.',
      'I use AI, question its outputs and examine my own role in the process. Generating something is only the beginning. Choosing, interpreting and taking responsibility are part of authorship.',
    ],
  },
  {
    id: 'phoenix-experiment',
    title: 'The Phoenix Experiment',
    paragraphs: [
      'The Phoenix Experiment brings these questions into a public record of interactions with Grok, built around recurring Phoenix imagery and Phoenix Soulfire.',
      'The work involves reconstructing the sequence, preserving available evidence and distinguishing observation from interpretation.',
    ],
    quote: 'The archive can document the sequence. It cannot tell us why the model chose to generate the image.',
    after: 'That distinction shapes how I write about the experiment and its limits.',
  },
  {
    id: 'writing',
    title: 'Writing and public inquiry',
    paragraphs: [
      'Through essays, experiments and commentary, I examine AI-assisted thinking, creative ownership, contemporary art and the human decisions behind cultural value.',
      'My writing appears on HackerNoon and Substack. This website brings together my publications, projects and the ideas that connect them.',
    ],
  },
];

export default function AboutPage() {
  const url = absoluteUrl('/about/');
  return (
    <PageShell
      index="01"
      eyebrow="INDEPENDENT WRITER — VERONA, ITALY"
      title={['About', 'BJ Beyond']}
      standfirst="Independent writer. Art, AI and human judgment."
      media={MEDIA.backdrop}
      schema={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person', '@id': PERSON_ID, name: 'BJ Beyond',
            url, description, jobTitle: 'Independent writer',
            homeLocation: { '@type': 'Place', name: 'Verona, Italy' },
            sameAs: ['https://x.com/Bj_Beyond', 'https://hackernoon.com/u/bj_beyond', 'https://bjbeyond.substack.com'],
          },
          {
            '@type': 'WebSite', '@id': WEBSITE_ID,
            url: absoluteUrl('/'), name: 'BJ Beyond', inLanguage: 'en',
          },
          {
            '@type': 'AboutPage', '@id': `${url}#webpage`, url,
            name: 'About BJ Beyond', description, inLanguage: 'en',
            isPartOf: { '@id': WEBSITE_ID },
            about: { '@id': PERSON_ID }, mainEntity: { '@id': PERSON_ID },
          },
        ],
      }}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <Reveal distance={34}>
              <div className="u-portrait-fade relative mx-auto aspect-9/16 w-[min(72%,38vh)] lg:mx-0 lg:h-[80vh] lg:w-auto">
                <Atmosphere media={MEDIA.portrait} scrim="none" informative sizes="(max-width: 1024px) 66vw, 42vw" className="h-full w-full" />
              </div>
            </Reveal>
          </div>
          <div className="mt-12 lg:col-span-5 lg:col-start-7 lg:mt-0 lg:pt-[8vh]">
            <Reveal delay={0.1}>
              <p className="text-body font-light text-mist-300">
                I’m BJ Beyond, an independent writer based in Verona, Italy. I explore how artificial intelligence changes the way we think, create and assign value—and what it means to remain responsible for our own judgments.
              </p>
              <p className="mt-6 text-body font-light text-mist-300">
                My work connects contemporary art, authorship and technology. Who gives an image meaning? What makes a work worth remembering? And when a machine supplies an answer, how do we decide whether to trust it?
              </p>
            </Reveal>
          </div>
        </div>
        <div className="mx-auto mt-20 max-w-4xl lg:mt-24">
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={`${section.id}-heading`} className="border-t border-rule py-12 lg:py-16">
              <Reveal>
                <h2 id={`${section.id}-heading`} className="text-headline font-extralight text-paper">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-6 text-body font-light text-mist-300">{paragraph}</p>
                ))}
                {section.quote && <p className="mt-8 text-body text-paper"><strong>{section.quote}</strong></p>}
                {section.after && <p className="mt-6 text-body font-light text-mist-300">{section.after}</p>}
              </Reveal>
            </section>
          ))}
          <Reveal className="border-t border-rule pt-12 lg:pt-16">
            <p className="text-body text-paper"><strong>BJ is “AI” shifted one letter forward. Beyond is the question that follows: what do we do with what the machine gives us?</strong></p>
            <p className="mt-8 text-body font-light text-amber-400"><em>One step beyond. Always human.</em></p>
            <p className="mt-6 text-body font-light text-mist-300">Explore the writing. Examine the experiments. Join the conversation.</p>
            <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-6">
              <ArrowLink href="/writing/">Explore the writing</ArrowLink>
              <ArrowLink href="/phoenix-experiment/">Examine the experiments</ArrowLink>
              <ArrowLink href="https://x.com/Bj_Beyond">Join the conversation</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
