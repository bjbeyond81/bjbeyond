'use client';

import { Reveal } from '@/components/primitives/Reveal';
import { MANIFESTO, SITE } from '@/lib/content';

/**
 * The manifesto line, directly under the hero. Unnumbered: it is the stance the
 * chapters argue for, not one of them. The only place the serif is used.
 */
export function Manifesto() {
  return (
    <section
      aria-label="Manifesto"
      className="relative bg-ink-950 py-[var(--spacing-section)]"
    >
      <div className="u-gutter">
        <figure className="mx-auto max-w-5xl text-center">
          <Reveal>
            <span aria-hidden="true" className="mx-auto mb-10 block h-px w-14 bg-amber-400" />
          </Reveal>

          <Reveal delay={0.1} distance={18}>
            <blockquote
              className="font-serif italic font-normal text-paper"
              style={{
                fontSize: 'clamp(1.7rem, 3.8vw, 3.4rem)',
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              <p>
                <span className="block text-amber-300">{MANIFESTO.lead}</span>
                <span className="mt-4 block text-balance">{MANIFESTO.body}</span>
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.3}>
            <figcaption className="u-label mt-10 text-mist-400">— {SITE.wordmark}</figcaption>
          </Reveal>
        </figure>
      </div>
    </section>
  );
}
