import { Logo } from '@/components/chrome/Logo';
import { ArrowOutward, EXTERNAL, NewTabHint } from '@/components/primitives/External';
import { AUTHENTIA_LOGO, largest, srcSet } from '@/lib/media';
import { ConsentToggle } from '@/components/chrome/Consent';
import { FOOTER, SITE, SOCIAL } from '@/lib/content';

/** A server component: nothing here moves, so nothing here needs JavaScript. */
function RssIcon() {
  return (
    <svg aria-hidden="true" width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
      <circle cx="2.5" cy="13.5" r="2.5" />
      <path d="M0 6v3a7 7 0 0 1 7 7h3A10 10 0 0 0 0 6zm0-6v3a13 13 0 0 1 13 13h3A16 16 0 0 0 0 0z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-rule bg-ink-950">
      <div className="u-gutter py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Logo className="w-9 text-paper" title={SITE.name} />
            <p className="u-label mt-6 text-paper">
              {SITE.wordmark}
              <span className="align-super text-[0.6em] text-mist-400">™</span>
            </p>
            <p className="u-label mt-3 max-w-[24ch] text-mist-400">
              {FOOTER.statement}
            </p>
          </div>

          <nav aria-label="Social" className="lg:pt-1">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {SOCIAL.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...EXTERNAL}
                    className="u-label inline-flex min-h-11 items-center text-mist-300 transition-colors duration-200 hover:text-amber-400"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/labs/apps/"
                  className="u-label inline-flex min-h-11 items-center text-mist-300 transition-colors duration-200 hover:text-amber-400"
                >
                  APPS EXPERIMENT
                </a>
              </li>
              {/* Sits with the policies because that is where someone looks for
                  it. The banner promises this link by name. */}
              <li>
                <ConsentToggle className="u-label inline-flex min-h-11 items-center text-mist-300 transition-colors duration-200 hover:text-amber-400" />
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal" className="lg:pt-1">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {FOOTER.legal.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="u-label inline-flex min-h-11 items-center text-mist-300 transition-colors duration-200 hover:text-amber-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="u-label text-mist-400">{FOOTER.copyright}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {/* Two feeds. Writing is this site; the Journal is the other publication. */}
            <a
              href="/feed.xml"
              type="application/rss+xml"
              className="u-label inline-flex min-h-11 items-center gap-2 text-mist-400 transition-colors duration-200 hover:text-amber-400"
            >
              <RssIcon />
              Writing RSS
            </a>
            <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                href="https://bjbeyond81.github.io/studio/"
                className="u-label inline-flex min-h-11 items-center text-mist-400 transition-colors duration-200 hover:text-amber-400"
              >
                BJ Beyond Journal
              </a>
              <a
                href="https://bjbeyond81.github.io/studio/feed.xml"
                type="application/rss+xml"
                className="u-label inline-flex min-h-11 items-center gap-2 text-mist-400 transition-colors duration-200 hover:text-amber-400"
              >
                <RssIcon />
                Journal RSS
              </a>
            </span>
            <p className="u-label text-mist-400">{SITE.domain}</p>
          </div>
        </div>

        {/* Build credit. The wordmark is used unmodified — no recolouring, no
            filter; the gold is theirs, not the site's amber. */}
        <div className="mt-8 flex items-center justify-center border-t border-rule pt-8">
          <a
            href={FOOTER.credit.href}
            {...EXTERNAL}
            className="group inline-flex min-h-11 flex-wrap items-center justify-center gap-x-4 gap-y-2 text-mist-400 transition-colors duration-200 hover:text-mist-200"
          >
            <span className="u-label">{FOOTER.credit.prefix}</span>

            <img
              src={largest(AUTHENTIA_LOGO.src, AUTHENTIA_LOGO.widths)}
              srcSet={srcSet(AUTHENTIA_LOGO.src, AUTHENTIA_LOGO.widths)}
              sizes="132px"
              width={AUTHENTIA_LOGO.width}
              height={AUTHENTIA_LOGO.height}
              alt={AUTHENTIA_LOGO.alt}
              loading="lazy"
              decoding="async"
              className="h-auto w-[132px] opacity-90 transition-opacity duration-200 group-hover:opacity-100"
            />

            <ArrowOutward
              size={12}
              className="transition-transform duration-300 ease-[var(--ease-expo)] motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            />
            <NewTabHint />
          </a>
        </div>
      </div>
    </footer>
  );
}
