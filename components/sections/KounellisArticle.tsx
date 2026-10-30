import { KOUNELLIS as A } from '@/lib/kounellis';

const linkClass = 'inline-flex min-h-11 items-center text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400';

/**
 * `standalone` is the dedicated page (/writing/kounellis-italics/), where the
 * PageShell masthead already carries the title as the h1: the inline title is
 * dropped and every heading moves up one level so the outline has no gap.
 */
export function KounellisArticle({ standalone = false }: { standalone?: boolean }) {
  const H = standalone ? 'h2' : 'h3';
  return (
    <article
      id={standalone ? undefined : A.id}
      lang="en"
      aria-labelledby={standalone ? undefined : `${A.id}-title`}
      aria-label={standalone ? A.title : undefined}
      className="u-gutter scroll-mt-28 pb-[var(--spacing-section)] pt-12 sm:pt-16"
    >
      <div className="mx-auto max-w-3xl">
        <header className="border-t border-rule pt-10">
          <p className="u-label text-amber-400">Art &amp; history · English translation</p>
          {standalone ? null : (
            <h2 id={`${A.id}-title`} className="mt-6 text-headline font-extralight text-paper">
              {A.title}
            </h2>
          )}
          <p className="mt-6 text-meta text-mist-300">
            By {A.author} · Originally published by {A.publisher} on{' '}
            <time dateTime={A.published}>{A.publishedLabel}</time>
          </p>
          <a href={A.original} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-3 text-meta`}>
            Read the original Italian article on Tamagozine ↗
          </a>
        </header>

        <aside aria-labelledby={`${A.id}-note`} className="mt-8 border-l-2 border-amber-400 bg-ink-850 p-5 sm:p-6">
          <H id={`${A.id}-note`} className="u-label text-amber-400">Translation note</H>
          <p className="mt-3 text-meta text-mist-200">{A.note}</p>
        </aside>

        <div className="mt-10 space-y-6">
          {A.opening.map((paragraph) => (
            <p key={paragraph} className="text-body font-light text-mist-200">{paragraph}</p>
          ))}
        </div>

        {A.sections.map((section) => (
          <section key={section.id} aria-labelledby={`${A.id}-${section.id}`} className="mt-12 sm:mt-16">
            <H id={`${A.id}-${section.id}`} className="text-title font-extralight text-paper">
              {section.title}
            </H>
            <div className="mt-6 space-y-6">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body font-light text-mist-200">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <footer className="mt-12 border-t border-rule pt-8 sm:mt-16">
          <H className="text-title font-extralight text-paper">Sources</H>
          {A.sources.map((source) => (
            <p key={source.href} className="mt-4 text-body font-light text-mist-200">
              <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400">
                {source.label}
              </a>. {source.description}
            </p>
          ))}
          <div className="mt-8 border-t border-rule pt-6">
            <H className="u-label text-mist-300">Additional catalogue reference</H>
            <p className="mt-3 text-body font-light text-mist-200">
              <a href={A.catalogue.href} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400">
                {A.catalogue.label}
              </a>{' '}
              <span className="text-meta text-mist-300">ISBN {A.catalogue.isbn}.</span>
            </p>
          </div>
          <a href={A.original} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-6 text-meta`}>
            Original publication: Tamagozine ↗
          </a>
        </footer>
      </div>
    </article>
  );
}
