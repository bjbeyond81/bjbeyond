import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { ArrowLink } from '@/components/primitives/ArrowLink';
import { MEDIA } from '@/lib/media';

/* One unambiguous robots signal and no canonical: the layout's
   "index, follow" + canonical "/" must not leak onto a 404. */
export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <PageShell eyebrow="404" title={['Page not found.']} media={MEDIA.backdrop}>
      <section className="u-gutter pb-[var(--spacing-section)]">
        <ArrowLink href="/">Back to the homepage</ArrowLink>
      </section>
    </PageShell>
  );
}
