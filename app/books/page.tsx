import type { Metadata } from 'next';
import { PageShell } from '@/components/chrome/PageShell';
import { MEDIA } from '@/lib/media';
import { metadataFor } from '@/lib/routes';

export const metadata: Metadata = metadataFor('/books/');

export default function BooksPage() {
  return (
    <PageShell
      index="06"
      eyebrow="BOOKS"
      title={['THE', 'BOOKS']}
      standfirst="No book is published here."
      media={MEDIA.books['book-01']}
    >
      <section className="u-gutter pb-[var(--spacing-section)]">
        <p className="max-w-xl text-body text-mist-300">
          Nothing on this page is a publication. Placeholder titles are not listed.
        </p>
      </section>
    </PageShell>
  );
}
