import { KOUNELLIS as A } from '@/lib/kounellis';

const linkClass = 'inline-flex min-h-11 items-center text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400';

export function KounellisArticle() {
  return (
    <article
      id={A.id}
      lang="en"
      aria-labelledby={`${A.id}-title`}
      className="u-gutter scroll-mt-28 pb-[var(--spacing-section)] pt-12 sm:pt-16"
    >
      <div className="mx-auto max-w-3xl">
        <header className="border-t border-rule pt-10">
          <p className="u-label text-amber-400">Art &amp; history · English translation</p>
          <h2 id={`${A.id}-title`} className="mt-6 text-headline font-extralight text-paper">
            {A.title}
          </h2>
          <p className="mt-6 text-meta text-mist-300">
            By {A.author} · Originally published by {A.publisher} on{' '}
            <time dateTime={A.published}>{A.publishedLabel}</time>
          </p>
          <a href={A.original} target="_blank" rel="noopener noreferrer" className={`${linkClass} mt-3 text-meta`}>
            Read the original Italian article on Tamagozine ↗
          </a>
        </header>

        <aside aria-labelledby={`${A.id}-note`} className="mt-8 border-l-2 border-amber-400 bg-ink-850 p-5 sm:p-6">
          <h3 id={`${A.id}-note`} className="u-label text-amber-400">Translation note</h3>
          <p className="mt-3 text-meta text-mist-200">{A.note}</p>
        </aside>

        <div className="mt-10 space-y-6">
          {A.opening.map((paragraph) => (
            <p key={paragraph} className="text-body font-light text-mist-200">{paragraph}</p>
          ))}
        </div>

        {A.sections.map((section) => (
          <section key={section.id} aria-labelledby={`${A.id}-${section.id}`} className="mt-12 sm:mt-16">
            <h3 id={`${A.id}-${section.id}`} className="text-title font-extralight text-paper">
              {section.title}
            </h3>
            <div className="mt-6 space-y-6">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body font-light text-mist-200">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        <footer className="mt-12 border-t border-rule pt-8 sm:mt-16">
          <h3 className="text-title font-extralight text-paper">Sources</h3>
          {A.sources.map((source) => (
            <p key={source.href} className="mt-4 text-body font-light text-mist-200">
              <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline decoration-amber-400/40 underline-offset-4 hover:decoration-amber-400">
                {source.label}
              </a>. {source.description}
            </p>
          ))}
          <div className="mt-8 border-t border-rule pt-6">
            <h3 className="u-label text-mist-300">Additional catalogue reference</h3>
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
