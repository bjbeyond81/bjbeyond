import type { Metadata } from 'next';

/**
 * /services/ is retired: BJ Beyond does not offer services. The research areas
 * that used to be listed here live at /focus/.
 *
 * GitHub Pages cannot issue a 301, so this static page does the next best
 * thing: an immediate meta refresh, a canonical pointing at /focus/, noindex
 * so the old URL drops out of search, and a plain link for anything that does
 * not follow refreshes. It is not in lib/routes.ts, so it is not in the
 * sitemap or the menu.
 */
export const metadata: Metadata = {
  title: 'Moved to Focus',
  alternates: { canonical: '/focus/' },
  robots: { index: false, follow: true },
};

export default function ServicesMoved() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/focus/" />
      <main id="main" className="u-gutter py-32">
        <p className="text-body font-light text-mist-300">
          This page has moved to{' '}
          <a href="/focus/" className="text-amber-400 underline underline-offset-4">
            bjbeyond.it/focus/
          </a>
          .
        </p>
      </main>
    </>
  );
}
