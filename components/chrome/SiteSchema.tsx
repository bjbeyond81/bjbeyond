import { siteSchema } from '@/lib/schema';

/**
 * The structured data block, one per page.
 *
 * It used to live in the root layout, which put the generic graph on every
 * page unconditionally. /method/ publishes its own graph — a superset that
 * restates the Organization and WebSite nodes alongside the method's own — and
 * is meant to carry exactly one JSON-LD script. A layout cannot know which page
 * it wraps, so the block moved down to the pages: PageShell renders it by
 * default and accepts a replacement, and the two pages that do not use
 * PageShell (the homepage and the legal pages) render it directly.
 *
 * `JSON.stringify`, never a template literal: it escapes the content, so a `<`
 * inside any string cannot end the block early.
 */
export function SiteSchema({ data = siteSchema() }: { data?: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
