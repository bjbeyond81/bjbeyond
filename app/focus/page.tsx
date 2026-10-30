import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { Reveal, RevealGroup, RevealItem } from '@/components/primitives/Reveal';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { WORK } from '@/lib/content';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

export const metadata: Metadata = metadataFor('/focus/');

export default function FocusPage() {
  return (
    <PageShell
      index={WORK.index}
      eyebrow={WORK.label.join(' ')}
      title={['FOCUS:', 'ART, DATA & AI RESEARCH']}
      standfirst={WORK.description}
      media={MEDIA.method[3]}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <RevealGroup>
          <ul className="grid grid-cols-1 gap-px border-t border-rule bg-rule lg:grid-cols-3">
            {WORK.services.map((service) => (
              <RevealItem
                as="li"
                key={service.number}
                className="flex flex-col bg-ink-950 px-0 py-10 lg:px-8 lg:py-12"
              >
                <span
                  aria-hidden="true"
                  className="tabular block text-[clamp(2.5rem,6vw,4rem)] font-extralight leading-[0.85] text-paper/12"
                >
                  {service.number}
                </span>

                <h2 id={`service-${service.number}`} className="mt-8 scroll-mt-28 text-title font-extralight leading-[1.05] text-paper">
                  {service.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="mt-5 text-body font-light text-mist-300">
                  {service.description}
                </p>

                <ul className="mt-8 border-t border-rule">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="u-rule-b py-3.5 text-meta text-mist-200"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                {'link' in service ? (
                  <a
                    href={service.link.href}
                    className="mt-6 inline-block text-meta text-amber-400 underline-offset-4 hover:underline"
                  >
                    {service.link.label}
                  </a>
                ) : null}
              </RevealItem>
            ))}
          </ul>
        </RevealGroup>

        <Reveal delay={0.15} className="mt-16 max-w-3xl">
          <p className="border-l border-rule-amber py-1 pl-5 text-body font-light text-mist-200">
            {WORK.notice}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6">
          <ArrowLink href="/writing/">READ THE WRITING</ArrowLink>
          <ArrowLink href="/method/">THE METHOD</ArrowLink>
        </Reveal>
      </section>
    </PageShell>
  );
}
