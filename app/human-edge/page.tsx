import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

export const metadata: Metadata = metadataFor('/human-edge/');

const principles = [
  ['01', 'CONTEXT', 'Models can synthesize patterns. Humans still decide which context changes the meaning of the result.'],
  ['02', 'ANOMALY', 'Human judgment notices when something feels wrong before a metric or benchmark explains why.'],
  ['03', 'ACCOUNTABILITY', 'Responsibility cannot be delegated to a prompt. Someone still owns the decision and its consequences.'],
  ['04', 'TASTE', 'Generation is abundant. Selection, restraint, authorship and creative direction remain scarce.'],
  ['05', 'MEANING', 'AI can produce form. Humans decide why something matters, to whom, and what should survive.'],
] as const;

const records = [
  ['07 MAR 2026', 'Human Edge enters the public archive', 'A public thread names contextual intuition, anomaly detection, accountability and creativity as the places where the human edge remains strongest.'],
  ['14 MAR 2026', 'Collaboration, not replacement', 'The thesis moves from opposition to collaboration: “The edge is always in the collaboration, not replacement.”'],
  ['24 MAR 2026', 'Phoenix meets soul and curation', 'The value shifts away from generation speed toward the curator who adds story, vision and human judgment.'],
  ['06 APR 2026', 'Phoenix Soulfire becomes an experiment', 'Human Edge Lab names Phoenix Soulfire and describes a live multimodal Human-in-the-Loop experiment.'],
  ['MAY 2026', 'Failure becomes part of the method', 'Public stress tests probe prompt dominance, attribution errors and the limits of text–vision reliability.'],
] as const;

export default function HumanEdgePage() {
  return (
    <PageShell
      eyebrow="THE BJ BEYOND THESIS"
      title={['HUMAN', 'EDGE']}
      standfirst="AI can generate. Data can measure. Human judgment decides what matters."
      media={MEDIA.method[1]}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <Reveal>
          <div className="max-w-4xl border-y border-rule py-10 lg:py-14">
            <p className="text-[clamp(2rem,5vw,4.5rem)] font-extralight leading-[1.02] tracking-[-0.035em] text-paper">
              The point is not to compete with AI at what it does best.
              <span className="block text-amber-400">The point is to keep the decision human where judgment still carries weight.</span>
            </p>
          </div>
        </Reveal>

        <RevealGroup className="mt-16">
          <div className="grid grid-cols-1 gap-px border-t border-rule bg-rule lg:grid-cols-5">
            {principles.map(([n, title, body]) => (
              <RevealItem key={n} as="article" className="bg-ink-950 p-6 lg:min-h-[18rem] lg:p-7">
                <p className="u-label text-amber-400">{n}</p>
                <h2 className="mt-10 text-title font-extralight text-paper">{title}</h2>
                <p className="mt-5 text-meta leading-relaxed text-mist-300">{body}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>

        <section className="mt-20 border-t border-rule pt-14 lg:mt-28">
          <Reveal>
            <p className="u-label text-mist-400">PUBLIC RECORD</p>
            <h2 className="mt-5 max-w-4xl text-headline font-extralight text-paper">
              The thesis existed before Phoenix Soulfire.
            </h2>
          </Reveal>
          <RevealGroup delay={0.1} className="mt-10">
            <div className="border-t border-rule">
              {records.map(([date, title, body]) => (
                <RevealItem key={date} as="article" className="grid grid-cols-1 gap-5 border-b border-rule py-8 lg:grid-cols-12 lg:gap-6">
                  <p className="u-label text-amber-400 lg:col-span-2">{date}</p>
                  <h3 className="text-title font-extralight text-paper lg:col-span-4">{title}</h3>
                  <p className="text-body font-light text-mist-300 lg:col-span-5 lg:col-start-8">{body}</p>
                </RevealItem>
              ))}
            </div>
          </RevealGroup>
        </section>

        <section className="mt-20 border-t border-rule pt-14 lg:mt-28">
          <Reveal>
            <p className="u-label text-mist-400">FROM THESIS TO EVIDENCE</p>
            <h2 className="mt-5 max-w-4xl text-headline font-extralight text-paper">
              Human Edge is the hypothesis. Phoenix Soulfire™ is the{' '}
              <Link href="/method/" className="underline underline-offset-4">five-test judgment layer</Link>. The Phoenix Experiment is the record.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-x-10 gap-y-6">
            <ArrowLink href="/phoenix-experiment/">Enter the Phoenix Evidence Room</ArrowLink>
            <ArrowLink href="/method/">Read the Phoenix Soulfire™ method</ArrowLink>
            <ArrowLink href="/writing/">Read the field notes</ArrowLink>
          </Reveal>
        </section>
      </section>
    </PageShell>
  );
}
